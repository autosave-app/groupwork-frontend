"use strict";
exports.id = 2352;
exports.ids = [2352];
exports.modules = {

/***/ 90175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Details */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87208);
/* harmony import */ var _styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29872);
/* harmony import */ var _styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
const _excluded = ["children", "title", "buttonSize", "defaultIsOpen"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const Details = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).attrs({
  as: 'details'
}).withConfig({
  displayName: "Collapse__Details",
  componentId: "sc-44ft2f-0"
})(["summary{list-style-type:none;> div{display:flex;cursor:pointer;justify-content:space-between;align-items:center;font-size:13px;font-weight:500;margin-bottom:8px;color:", ";list-style:none;&:hover{color:", ";}}[data-item='chevron-up']{display:none;}[data-item='chevron-down']{display:inline-block;margin-top:5%;}}&[open]{summary{[data-item='chevron-up']{display:inline-block;margin-top:-5%;}[data-item='chevron-down']{display:none;}}}summary:focus{outline:1px dashed ", ";outline-offset:", "px;}summary::-webkit-details-marker{display:none;}summary::marker{display:none;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.800'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.700'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.200'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('space.1'));
const CollapseBtn = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "Collapse__CollapseBtn",
  componentId: "sc-44ft2f-1"
})(["display:flex;justify-content:center;align-items:center;border-radius:50%;border:1px solid #dcdee0;svg{stroke-width:1.5;}[data-item='chevron-up']{margin-top:-5%;}[data-item='chevron-down']{margin-top:5%;}", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_5__.size, styled_system__WEBPACK_IMPORTED_MODULE_5__.space);
/**
 * A stylized version of the `details` HTML element to hide & show content when clicked.
 */

const Collapse = _ref => {
  let {
    children,
    title,
    buttonSize,
    defaultIsOpen
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(Details, _objectSpread(_objectSpread({
    open: defaultIsOpen
  }, props), {}, {
    children: [title && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("summary", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(CollapseBtn, {
          size: buttonSize,
          ml: 3,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_2__.ChevronUp, {
            size: "80%",
            "data-item": "chevron-up"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_1__.ChevronDown, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collapse);

/***/ }),

/***/ 94858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_constants_dismissable_help_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31801);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32651);
/* harmony import */ var _lib_local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35427);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51927);








const accountSettingsQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  query AccountSettings {
    loggedInAccount {
      id
      settings
    }
  }
`;
const dismissMessageMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  mutation DismissMessage($account: AccountReferenceInput!, $key: AccountSettingsKey!) {
    editAccountSetting(account: $account, key: $key, value: true) {
      id
      settings
    }
  }
`;
/**
 * A message that can be dismissed by the user. Saves a flag into user settings to make
 * sure it won't be displayed again in the future.
 *
 * Messages will never be displayed if user is not logged in.
 */

const DismissibleMessage = ({
  children,
  dismissedComponent,
  displayForLoggedOutUser,
  loadingLoggedInUser,
  LoggedInUser,
  messageId
}) => {
  const settingsKey = `${_lib_constants_dismissable_help_message__WEBPACK_IMPORTED_MODULE_4__/* .DISMISSABLE_HELP_MESSAGE_KEY */ .E_}.${messageId}`;
  const [isDismissedLocally, setDismissedLocally] = react__WEBPACK_IMPORTED_MODULE_1___default().useState((0,_lib_local_storage__WEBPACK_IMPORTED_MODULE_6__/* .getFromLocalStorage */ .fp)(settingsKey));
  const [dismissMessage] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(dismissMessageMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__/* .API_V2_CONTEXT */ .T
  });
  const {
    data,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(accountSettingsQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__/* .API_V2_CONTEXT */ .T,
    skip: !LoggedInUser,
    fetchPolicy: 'network-only'
  });
  const loggedInAccount = data?.loggedInAccount || LoggedInUser?.collective; // Hide it if SSR or still loading user

  if (true) {
    return null;
  } else {}

  return children({
    dismiss: () => {
      setDismissedLocally(true);
      (0,_lib_local_storage__WEBPACK_IMPORTED_MODULE_6__/* .setLocalStorage */ .qQ)(settingsKey, 'true');
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
  messageId: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([...Object.values(_lib_constants_dismissable_help_message__WEBPACK_IMPORTED_MODULE_4__/* .HELP_MESSAGE */ .Zh), ...Object.values(_lib_constants_dismissable_help_message__WEBPACK_IMPORTED_MODULE_4__/* .BANNER */ .Mk)]).isRequired,
  displayForLoggedOutUser: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  loadingLoggedInUser: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /** A function to render the actual message */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),

  /** A component we can display if the message was already dismissed once */
  dismissedComponent: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),

  /** @ignore from withUser */
  LoggedInUser: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_7__/* .withUser */ .ns)(DismissibleMessage));

/***/ }),

/***/ 48095:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62131);
/* harmony import */ var _host_dashboard_FreezeAccountModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37670);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88705);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87268);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_host_dashboard_FreezeAccountModal__WEBPACK_IMPORTED_MODULE_4__]);
_host_dashboard_FreezeAccountModal__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const GlobalWarningContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalWarnings__GlobalWarningContainer",
  componentId: "sc-1yr3f2-0"
})(["width:100;background:#ffffc2;font-weight:400;font-size:14px;line-height:20px;text-align:center;padding:14px;border-top:1px solid #eaeaec;color:#0c2d66;"]);
/**
 * Displays warnings related to the user account.
 */

const GlobalWarnings = ({
  collective
}) => {
  const {
    LoggedInUser
  } = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
  const [hasFreezeModal, setHasFreezeModal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);

  if (collective?.isFrozen) {
    const isLoggedInUserHostAdmin = Boolean(LoggedInUser?.isHostAdmin(collective)); // Frozen collectives

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(GlobalWarningContainer, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
        fontWeight: "700",
        lineHeight: "20px",
        mb: "6px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "KUZzwz",
          defaultMessage: [{
            "type": 0,
            "value": "Some actions are temporarily limited"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "3tJstK",
          defaultMessage: [{
            "type": 0,
            "value": "Contributions to this page cannot be accepted at this time"
          }]
        })
      }), isLoggedInUserHostAdmin && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        buttonStyle: "warningSecondary",
        mt: 2,
        onClick: () => {
          setHasFreezeModal(true);
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_StyledSpan, {
          ml: 3,
          fontSize: "14px",
          lineHeight: "20px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "gX79wf",
            defaultMessage: [{
              "type": 0,
              "value": "Unfreeze Collective"
            }]
          })
        })
      }), hasFreezeModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_host_dashboard_FreezeAccountModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        collective: collective,
        onClose: () => setHasFreezeModal(false)
      })]
    });
  } else if (LoggedInUser && LoggedInUser.isLimited) {
    // Limited user accounts
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(GlobalWarningContainer, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
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
        values: _I18nFormatters__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalWarnings);

var _StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr).withConfig({
  displayName: "GlobalWarnings___StyledSpan",
  componentId: "sc-1yr3f2-1"
})({
  verticalAlign: 'middle'
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42352:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_image_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89314);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97079);
/* harmony import */ var _GlobalWarnings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48095);
/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91431);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_GlobalWarnings__WEBPACK_IMPORTED_MODULE_6__, _TopBar__WEBPACK_IMPORTED_MODULE_7__]);
([_GlobalWarnings__WEBPACK_IMPORTED_MODULE_6__, _TopBar__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.defineMessages)({
  defaultTitle: {
    id: "OC.tagline",
    defaultMessage: [{
      "type": 0,
      "value": "Make your community sustainable. Collect and spend money transparently."
    }]
  }
});

class Header extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  getTitle() {
    let title = this.props.title;

    if (!title) {
      if (this.props.collective) {
        title = this.props.collective.name;
      } else {
        title = `Open Collective - ${this.props.intl.formatMessage(messages.defaultTitle)}`;
      }
    }

    if (!title.match(/open collective/i)) {
      title = `${title} - Open Collective`;
    }

    return title;
  }

  getTwitterHandle() {
    const {
      collective
    } = this.props;
    const parentCollective = collective?.parentCollective;

    const handle = this.props.twitterHandle || collective?.twitterHandle || lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(parentCollective, 'twitterHandle');

    return handle ? `@${handle}` : '';
  }

  getMetas() {
    const {
      noRobots,
      collective
    } = this.props;
    const title = this.props.title || collective && collective.name;
    const image = this.props.image || collective && (0,_lib_image_utils__WEBPACK_IMPORTED_MODULE_4__/* .getCollectiveImage */ .$T)(collective);
    const description = this.props.description || collective?.description || collective?.longDescription;
    const metaTitle = this.props.metaTitle || (title ? `${title} - Open Collective` : 'Open Collective');
    const defaultImage = `https://opencollective.com/static/images/opencollective-og.png`;
    const metas = [{
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
      content: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__/* .truncate */ .$G)(description, 256)
    }, {
      property: 'twitter:card',
      content: 'summary_large_image'
    }, {
      property: 'twitter:title',
      content: metaTitle
    }, {
      property: 'twitter:description',
      content: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__/* .truncate */ .$G)(description, 256)
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

  render() {
    const {
      css,
      canonicalURL,
      withTopBar
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("header", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("meta", {
          httpEquiv: "X-UA-Compatible",
          content: "IE=edge"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("meta", {
          property: "og:logo",
          content: "/static/images/opencollectiveicon240x240",
          size: "240x240"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("meta", {
          property: "og:logo",
          content: "/static/images/opencollectiveicon48x48",
          size: "48x48"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("meta", {
          property: "og:logo",
          content: "/static/images/opencollectivelogo480x80",
          size: "480x80"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("meta", {
          property: "og:logo",
          content: "/static/images/opencollectivelogo480x80@2x",
          size: "960x160"
        }), css && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("link", {
          rel: "stylesheet",
          href: css
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("title", {
          children: this.getTitle()
        }), this.getMetas().map((props, idx) =>
        /*#__PURE__*/
        // We use index in this `key` because their can be multiple meta for the same property (eg. og:image)
        // eslint-disable-next-line react/no-array-index-key
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("meta", _objectSpread({}, props), `${props.property || props.name}-${idx}`)), canonicalURL && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("link", {
          rel: "canonical",
          href: canonicalURL
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        id: "top"
      }), withTopBar && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_TopBar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        showSearch: this.props.showSearch,
        menuItems: this.props.menuItems,
        showProfileAndChangelogMenu: this.props.showProfileAndChangelogMenu
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_GlobalWarnings__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        collective: this.props.collective
      })]
    });
  }

}

_defineProperty(Header, "defaultProps", {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_3__.injectIntl)(Header));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports breakpoints, hidden, xs, sm, md, lg */
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16010);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const breakpoints = {
  xs: '@media screen and (max-width: 40em)',
  sm: '@media screen and (min-width: 40em) and (max-width: 52em)',
  md: '@media screen and (min-width: 52em) and (max-width: 64em)',
  lg: '@media screen and (min-width: 64em)'
}; // eslint-disable-next-line react/display-name

const hidden = key => props => props[key] ? {
  [breakpoints[key]]: {
    display: 'none'
  }
} : null;
const xs = hidden('xs');
const sm = hidden('sm');
const md = hidden('md');
const lg = hidden('lg');
const Hide = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu).withConfig({
  displayName: "Hide",
  componentId: "sc-1hxk6z5-0"
})(["", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], xs, sm, md, lg, styled_system__WEBPACK_IMPORTED_MODULE_2__.bottom, styled_system__WEBPACK_IMPORTED_MODULE_2__.height, styled_system__WEBPACK_IMPORTED_MODULE_2__.left, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_3__/* .pointerEvents */ .kk, styled_system__WEBPACK_IMPORTED_MODULE_2__.position, styled_system__WEBPACK_IMPORTED_MODULE_2__.right, styled_system__WEBPACK_IMPORTED_MODULE_2__.top, styled_system__WEBPACK_IMPORTED_MODULE_2__.flex);
Hide.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
  xs: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  sm: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  md: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  lg: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool)
}, styled_system__WEBPACK_IMPORTED_MODULE_2__.bottom.propTypes), styled_system__WEBPACK_IMPORTED_MODULE_2__.height.propTypes), styled_system__WEBPACK_IMPORTED_MODULE_2__.left.propTypes), styled_system__WEBPACK_IMPORTED_MODULE_2__.position.propTypes), styled_system__WEBPACK_IMPORTED_MODULE_2__.right.propTypes), styled_system__WEBPACK_IMPORTED_MODULE_2__.top.propTypes);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hide);

/***/ }),

/***/ 79029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ HideGlobalScroll)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HideGlobalScroll = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["@media(max-width:40em){body{overflow:hidden;}}"]);

/***/ }),

/***/ 95134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16010);



const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "ListItem",
  componentId: "sc-he0y2y-0"
})(["list-style:none;", " ", " ", " ", " ", " ", " ", ""], _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_2__/* .listStyle */ .VX, styled_system__WEBPACK_IMPORTED_MODULE_1__.space, styled_system__WEBPACK_IMPORTED_MODULE_1__.textAlign, styled_system__WEBPACK_IMPORTED_MODULE_1__.width, styled_system__WEBPACK_IMPORTED_MODULE_1__.display, styled_system__WEBPACK_IMPORTED_MODULE_1__.flexbox, styled_system__WEBPACK_IMPORTED_MODULE_1__.typography);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItem);

/***/ }),

/***/ 22777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69078);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92129);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51082);
/* harmony import */ var _StyledSpinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40486);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/**
 * A user login button with proper redirect function.
 * If user is currently loggin in, button will be disabled and will show a spinner.
 */



class LoginBtn extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.redirectAfterSignin = '/';
  }

  componentDidMount() {
    if (false) {}
  }

  renderContent() {
    if (this.props.loadingLoggedInUser) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_StyledSpinner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        size: "1em"
      });
    }

    return this.props.children || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "signIn",
      defaultMessage: [{
        "type": 0,
        "value": "Sign In"
      }]
    });
  }

  render() {
    const buttonProps = this.props.asLink ? {
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
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      href: {
        pathname: '/signin',
        query: {
          next: this.redirectAfterSignin
        }
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({
        as: _Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
      }, buttonProps), {}, {
        children: this.renderContent()
      }))
    });
  }

}

_defineProperty(LoginBtn, "defaultProps", {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_6__/* .withUser */ .ns)(LoginBtn));

/***/ }),

/***/ 66152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42932);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_popper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_hooks_useGlobalBlur__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55348);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







const Popup = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu).withConfig({
  displayName: "PopupMenu__Popup",
  componentId: "sc-10npih3-0"
})(["position:absolute;padding:8px;border:1px solid #f3f3f3;border-radius:8px;background:white;box-shadow:0px 4px 8px rgba(20,20,20,0.16);z-index:", ";"], props => props.zIndex ?? 1000);

const PopupMenu = ({
  Button,
  children,
  placement,
  onClose,
  closingEvents,
  zIndex,
  popupMarginTop
}) => {
  const [isOpen, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const ref = react__WEBPACK_IMPORTED_MODULE_0___default().useRef();
  (0,_lib_hooks_useGlobalBlur__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(ref, outside => {
    if (isOpen && outside) {
      setOpen(false);
      onClose?.();
    }
  }, closingEvents);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
    ref: ref,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Button, {
      onMouseOver: () => setOpen(true),
      onClick: () => setOpen(!isOpen),
      onFocus: () => setOpen(true),
      popupOpen: isOpen
    }), isOpen && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_popper__WEBPACK_IMPORTED_MODULE_1__.Popper, {
      placement: placement || 'bottom',
      referenceElement: ref?.current,
      modifiers: [{
        name: 'offset',
        options: {
          offset: [0, 10]
        }
      }],
      children: ({
        style,
        ref
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Popup, {
        mt: popupMarginTop,
        zIndex: zIndex,
        style,
        ref,
        children: typeof children === 'function' ? children({
          setOpen
        }) : children
      })
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupMenu);

/***/ }),

/***/ 25327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69309);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98492);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_boxicons_regular_Plus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23263);
/* harmony import */ var _styled_icons_boxicons_regular_Plus__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_Plus__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_feather_Settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52021);
/* harmony import */ var _styled_icons_feather_Settings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Settings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82525);
/* harmony import */ var _lib_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47162);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25896);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11194);
/* harmony import */ var _Collapse__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90175);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(92129);
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(95134);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(87268);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(173);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(51082);
/* harmony import */ var _StyledRoundButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(90012);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__);
























const CollectiveListItem = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_ListItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z).withConfig({
  displayName: "ProfileMenuMemberships__CollectiveListItem",
  componentId: "sc-1mg7c3f-0"
})(["@media (hover:hover){:hover svg{opacity:1;}}@media (hover:none){svg{opacity:1;}}"]);

const MembershipLine = ({
  user,
  membership
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(CollectiveListItem, {
    py: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Link__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
      href: `/${membership.collective.slug}`,
      title: membership.collective.name,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
          collective: membership.collective,
          radius: "32px",
          mr: "12px"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
          flexDirection: "column",
          maxWidth: "150px",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Text__WEBPACK_IMPORTED_MODULE_21__.P, {
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "20px",
            color: "black.800",
            truncateOverflow: true,
            children: membership.collective.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_21__.P, {
            fontSize: "12px",
            lineHeight: "18px",
            truncateOverflow: true,
            color: "black.700",
            children: ["@", membership.collective.slug]
          })]
        })]
      })
    }), Boolean(user?.canSeeAdminPanel(membership.collective)) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
      as: _Link__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
      href: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getSettingsRoute */ .aT)(membership.collective),
      ml: 1,
      color: "black.500",
      title: intl.formatMessage({
        id: "AdminPanel.button",
        defaultMessage: [{
          "type": 0,
          "value": "Admin"
        }]
      }),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_styled_icons_feather_Settings__WEBPACK_IMPORTED_MODULE_5__.Settings, {
        opacity: "0",
        size: "1.2em"
      })
    })]
  });
};

const sortMemberships = memberships => {
  if (!memberships?.length) {
    return [];
  } else {
    return memberships.sort((a, b) => {
      return a.collective.slug.localeCompare(b.collective.slug);
    });
  }
};

const filterArchivedMemberships = memberships => {
  const archivedMemberships = memberships.filter(m => {
    if (m.role !== 'BACKER' && m.collective.isArchived && !(m.collective.type === 'EVENT' && (0,_lib_events__WEBPACK_IMPORTED_MODULE_9__/* .isPastEvent */ .Up)(m.collective))) {
      return true;
    } else {
      return false;
    }
  });
  return lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0___default()(archivedMemberships, m => m.collective.id);
};

const filterMemberships = memberships => {
  const filteredMemberships = memberships.filter(m => {
    if (m.role === 'BACKER' || m.collective.isArchived) {
      return false;
    } else if (m.collective.type === 'EVENT' && (0,_lib_events__WEBPACK_IMPORTED_MODULE_9__/* .isPastEvent */ .Up)(m.collective)) {
      return false;
    } else {
      return Boolean(m.collective);
    }
  });
  return lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0___default()(filteredMemberships, m => m.collective.id);
};

const MembershipsList = ({
  user,
  memberships
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
    as: "ul",
    p: 0,
    my: 2,
    children: sortMemberships(memberships).map(member => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(MembershipLine, {
      membership: member,
      user: user
    }, member.id))
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
const MENU_SECTIONS = {
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_8__/* .CollectiveType.COLLECTIVE */ .eV.COLLECTIVE]: {
    title: (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessage)({
      id: "collective",
      defaultMessage: [{
        "type": 0,
        "value": "My Collectives"
      }]
    }),
    emptyMessage: (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessage)({
      id: "MZB6HL",
      defaultMessage: [{
        "type": 0,
        "value": "Create a collective to collect and spend money transparently"
      }]
    }),
    plusButton: {
      text: (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessage)({
        id: "home.create",
        defaultMessage: [{
          "type": 0,
          "value": "Create a Collective"
        }]
      }),
      href: '/create'
    }
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_8__/* .CollectiveType.EVENT */ .eV.EVENT]: {
    title: (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessage)({
      id: "events",
      defaultMessage: [{
        "type": 0,
        "value": "My Events"
      }]
    })
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_8__/* .CollectiveType.FUND */ .eV.FUND]: {
    title: (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessage)({
      id: "funds",
      defaultMessage: [{
        "type": 0,
        "value": "My Funds"
      }]
    }),
    plusButton: {
      text: (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessage)({
        id: "createFund.create",
        defaultMessage: [{
          "type": 0,
          "value": "Create a Fund"
        }]
      }),
      href: '/fund/create'
    }
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_8__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION]: {
    title: (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessage)({
      id: "organization",
      defaultMessage: [{
        "type": 0,
        "value": "My Organizations"
      }]
    }),
    emptyMessage: (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessage)({
      id: "CBITv6",
      defaultMessage: [{
        "type": 0,
        "value": "A profile representing a company or organization instead of an individual"
      }]
    }),
    plusButton: {
      text: (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessage)({
        id: "host.organization.create",
        defaultMessage: [{
          "type": 0,
          "value": "Create an Organization"
        }]
      }),
      href: '/organizations/new'
    }
  },
  ARCHIVED: {
    title: (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessage)({
      id: "Archived",
      defaultMessage: [{
        "type": 0,
        "value": "Archived"
      }]
    })
  }
};

const MenuSectionHeader = ({
  section,
  hidePlusIcon
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)();
  const {
    title,
    plusButton
  } = MENU_SECTIONS[section];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
    alignItems: "center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Text__WEBPACK_IMPORTED_MODULE_21__.P, {
      color: "black.700",
      fontSize: "12px",
      fontWeight: "500",
      letterSpacing: "0.06em",
      pr: 2,
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      children: intl.formatMessage(title)
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
      flex: "1",
      borderStyle: "solid",
      borderColor: "#DCDEE0"
    }), Boolean(!hidePlusIcon && plusButton) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Link__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
      href: plusButton.href,
      title: intl.formatMessage(plusButton.text),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
        ml: 2,
        size: 24,
        color: "#C4C7CC",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_styled_icons_boxicons_regular_Plus__WEBPACK_IMPORTED_MODULE_4__.Plus, {
          size: 12,
          color: "#76777A"
        })
      })
    })]
  });
};

const ProfileMenuMemberships = ({
  user
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)();
  const memberships = filterMemberships(user.memberOf);
  const archivedMemberships = filterArchivedMemberships(user.memberOf);

  const groupedMemberships = lodash_groupBy__WEBPACK_IMPORTED_MODULE_2___default()(memberships, m => m.collective.type);

  groupedMemberships.ARCHIVED = archivedMemberships;

  const hasNoMemberships = lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(memberships);

  const shouldDisplaySection = section => {
    return MENU_SECTIONS[section].emptyMessage || !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(groupedMemberships[section]);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
    children: [hasNoMemberships && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Text__WEBPACK_IMPORTED_MODULE_21__.P, {
      color: "blue.900",
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: "bold",
      mt: "8px",
      mb: "12px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
        id: "ProfileMenuMemberships.Empty",
        defaultMessage: [{
          "type": 0,
          "value": "Make the most out of Open Collective"
        }]
      })
    }), Object.keys(MENU_SECTIONS).filter(shouldDisplaySection).map(accountType => {
      const memberships = groupedMemberships[accountType];

      const sectionIsEmpty = lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(memberships);

      const sectionData = MENU_SECTIONS[accountType];
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
        mb: 3,
        children: [accountType !== 'ARCHIVED' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(MenuSectionHeader, {
          section: accountType,
          hidePlusIcon: sectionIsEmpty
        }), sectionIsEmpty ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
          my: 2,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Text__WEBPACK_IMPORTED_MODULE_21__.P, {
            fontSize: "12px",
            lineHeight: "18px",
            color: "black.700",
            children: intl.formatMessage(sectionData.emptyMessage)
          }), Boolean(sectionData.plusButton) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Link__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            href: sectionData.plusButton.href,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
              mt: "12px",
              mb: "16px",
              borderRadius: "8px",
              width: "100%",
              fontSize: "12px",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
                alignItems: "center",
                justifyContent: "center",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Container__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "100%",
                  border: "1px solid #C4C7CC",
                  mr: "16px",
                  size: "24px",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_styled_icons_boxicons_regular_Plus__WEBPACK_IMPORTED_MODULE_4__.Plus, {
                    size: 12
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx("span", {
                  children: intl.formatMessage(sectionData.plusButton.text)
                })]
              })
            })
          })]
        }) : accountType === 'ARCHIVED' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Collapse__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          defaultIsOpen: false,
          title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(MenuSectionHeader, {
            section: accountType,
            hidePlusIcon: sectionIsEmpty
          }),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(MembershipsList, {
            memberships: memberships,
            user: user
          })
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(MembershipsList, {
          memberships: memberships,
          user: user
        })]
      }, accountType);
    }), hasNoMemberships && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Text__WEBPACK_IMPORTED_MODULE_21__.P, {
      textAlign: "center",
      mb: 2,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
        as: _Link__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
        href: "/search",
        color: "blue.900",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().memo(ProfileMenuMemberships));

/***/ }),

/***/ 68450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92129);
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72427);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51082);
/* harmony import */ var _StyledLinkButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67001);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71792);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);









/*
 * A modal that appears on top of the page containing a search field.
 */




const SearchModal = ({
  onClose
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
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
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_7__/* .ModalBody */ .fe, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, {
        height: "48px",
        alignItems: "center",
        flexDirection: "column",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_SearchForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
            mt: "12px",
            ml: ['10px', '25px'],
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledLinkButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              onClick: onClose,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_7__/* .CloseIcon */ .Tw, {
                style: {
                  width: '14px',
                  height: '14px'
                }
              })
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu, {
          pt: "16px",
          fontSize: "13px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            as: _Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            href: "/search",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchModal);

/***/ }),

/***/ 72427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _SearchIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84091);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97274);
/* harmony import */ var _StyledRoundButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90012);
/* harmony import */ var _StyledSpinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40486);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const SearchInputContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC).withConfig({
  displayName: "SearchForm__SearchInputContainer",
  componentId: "sc-1118lp-0"
})(["border:solid 1px var(--silver-four);", ";", ";background-color:white;"], styled_system__WEBPACK_IMPORTED_MODULE_3__.borderRadius, styled_system__WEBPACK_IMPORTED_MODULE_3__.height);
const SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu).withConfig({
  displayName: "SearchForm__SearchInput",
  componentId: "sc-1118lp-1"
})(["&&{appearance:none;background-color:transparent;border:none;font-size:1.2rem;letter-spacing:0.1rem;font-style:italic;", ";::placeholder{color:#9d9fa3;}}"], styled_system__WEBPACK_IMPORTED_MODULE_3__.fontSize);
const SearchButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC).withConfig({
  displayName: "SearchForm__SearchButton",
  componentId: "sc-1118lp-2"
})(["&&{appearance:none;background-color:transparent;border:none;}"]);

class SearchForm extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSubmit", event => {
      event.preventDefault();
      const searchInput = event.target.elements.q;
      this.setState({
        isLoading: true
      });
      this.props.router.push({
        pathname: '/search',
        query: {
          q: searchInput.value
        }
      });
    });

    this.state = {
      isLoading: false
    };
  }

  render() {
    const {
      fontSize,
      onSubmit = this.handleSubmit,
      placeholder = 'Search...',
      width = 1,
      autoFocus,
      defaultValue,
      value,
      onChange,
      borderRadius = '20px',
      height = '46px',
      disabled
    } = this.props;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("form", {
      action: "/search",
      method: "GET",
      onSubmit: onSubmit,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(SearchInputContainer, {
        borderRadius: borderRadius,
        height: height,
        alignItems: "center",
        justifyContent: "space-between",
        p: this.props.py || 1,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(SearchButton, {
          as: "button",
          ml: 1,
          p: 1,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_SearchIcon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            size: 16,
            fill: "#aaaaaa"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(SearchInput, {
          as: _StyledInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,
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
          onChange: onChange && (e => onChange(e.target.value)),
          disabled: disabled
        }), this.props.showSearchButton && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          style: _objectSpread({
            backgroundColor: '#F9FAFB',
            color: '#323334'
          }, this.props.searchButtonStyles),
          isBorderless: true,
          mr: "20px",
          children: this.state.isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledSpinner__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            size: "20px"
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__/* .Span */ .Dr, {
            children: "\u2192"
          })
        })]
      })
    });
  }

}

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_1__.withRouter)(SearchForm));

/***/ }),

/***/ 84091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["size", "fill"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const SearchIcon = _ref => {
  let {
    size = 48,
    fill = '#FFFFFF'
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", _objectSpread(_objectSpread({
    width: size,
    height: size,
    viewBox: "10 10 30 30",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("title", {
      children: "Search"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchIcon);

/***/ }),

/***/ 206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lt": () => (/* binding */ Dropdown),
/* harmony export */   "Nv": () => (/* binding */ DropdownContent),
/* harmony export */   "Wi": () => (/* binding */ DropdownArrow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_hooks_useGlobalBlur__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55348);
/* harmony import */ var _lib_hooks_useKeyboardKey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34487);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
const _excluded = ["children", "trigger"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const DropdownContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "StyledDropdown__DropdownContent",
  componentId: "sc-c40cmc-0"
})(["display:none;position:absolute;z-index:1;max-width:320px;z-index:1000000;border-radius:4px;font-size:12px;text-transform:initial;white-space:normal;color:white;background:white;box-shadow:0px 4px 8px rgba(20,20,20,0.16);border:1px solid #e2e2e2;"]);
const DropdownArrow = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('div').withConfig({
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

const Dropdown = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_ref => {
  let {
    children,
    trigger
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [isDisplayed, setDisplayed] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const closeDropdown = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(() => {
    if (isDisplayed) {
      setDisplayed(false);
    }
  }, [isDisplayed]);
  (0,_lib_hooks_useGlobalBlur__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(dropdownRef, outside => {
    if (outside && isDisplayed) {
      setTimeout(() => {
        setDisplayed(false);
      }, 50);
    }
  }); // Closes the modal upon the `ESC` key press.

  (0,_lib_hooks_useKeyboardKey__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)({
    callback: closeDropdown,
    keyMatch: _lib_hooks_useKeyboardKey__WEBPACK_IMPORTED_MODULE_3__/* .ESCAPE_KEY */ .O_
  });

  if (typeof children === 'function' && trigger === 'click') {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", _objectSpread(_objectSpread({
      ref: dropdownRef
    }, props), {}, {
      "data-expanded": isDisplayed,
      children: children({
        isDisplayed,
        triggerProps: {
          onClick: () => {
            setDisplayed(!isDisplayed);
          }
        },
        dropdownProps: {
          onClick: () => setTimeout(closeDropdown, 50),
          onBlur: () => setTimeout(() => {
            if (!document.activeElement || !dropdownRef.current?.contains(document.activeElement)) {
              closeDropdown();
            }
          }, 50)
        }
      })
    }));
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", _objectSpread(_objectSpread({
      role: "button",
      tabIndex: 0 // eslint-disable-next-line react/no-unknown-property
      ,
      trigger: trigger
    }, props), {}, {
      onFocus: () => setTimeout(() => setDisplayed(true), 50),
      onBlur: () => setTimeout(closeDropdown, 50),
      onClick: e => {
        if (isDisplayed) {
          if (document.activeElement?.contains(e.target)) {
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
})(["", ""], props => props.trigger === 'hover' ? (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["&:hover,&:active,&:focus-within{", ",", "{display:block;}}"], DropdownContent, DropdownArrow) : (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["&[data-expanded='true']{", ",", "{display:block;}}"], DropdownContent, DropdownArrow));

/***/ }),

/***/ 173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45284);
/* harmony import */ var _styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * An horizontal line. Control the color and size using border properties.
 */
const StyledHr = styled_components__WEBPACK_IMPORTED_MODULE_2___default().hr.withConfig({
  displayName: "StyledHr",
  componentId: "sc-107rk1k-0"
})(["border:0;border-top:1px solid ", ";margin:0;height:1px;", " ", " ", " ", " ", " ", ""], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.black.400'), styled_system__WEBPACK_IMPORTED_MODULE_3__.space, styled_system__WEBPACK_IMPORTED_MODULE_3__.flex, styled_system__WEBPACK_IMPORTED_MODULE_3__.layout, styled_system__WEBPACK_IMPORTED_MODULE_3__.shadow, styled_system__WEBPACK_IMPORTED_MODULE_3__.border, styled_system__WEBPACK_IMPORTED_MODULE_3__.display);
StyledHr.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default().space)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default().flex)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default().layout)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default().shadow)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default().border)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default().display));
/** @component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledHr);

/***/ }),

/***/ 36422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97881);
/* harmony import */ var _styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16010);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
const _excluded = ["closeButtonProps", "children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const defaultRoundedStyleProps = {
  backgroundColor: 'black.100',
  maxHeight: '24px',
  display: 'inline-flex',
  alignItems: 'center',
  color: 'black.700',
  fontSize: '12px',
  lineHeight: '18px'
};
const TAG_TYPE_VARIANTS = {
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
const StyledTagBase = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "StyledTag__StyledTagBase",
  componentId: "sc-189xre2-0"
})(["text-align:center;white-space:nowrap;letter-spacing:0.06em;position:relative;overflow:hidden;", " & > *{vertical-align:middle;}", " ", " ", " ", " ", " ", " ", " ", " ", ""], (0,styled_system__WEBPACK_IMPORTED_MODULE_3__.variant)({
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
}), (0,styled_system__WEBPACK_IMPORTED_MODULE_3__.variant)({
  prop: 'type',
  variants: TAG_TYPE_VARIANTS
}), styled_system__WEBPACK_IMPORTED_MODULE_3__.background, styled_system__WEBPACK_IMPORTED_MODULE_3__.color, styled_system__WEBPACK_IMPORTED_MODULE_3__.space, styled_system__WEBPACK_IMPORTED_MODULE_3__.border, styled_system__WEBPACK_IMPORTED_MODULE_3__.typography, styled_system__WEBPACK_IMPORTED_MODULE_3__.layout, styled_system__WEBPACK_IMPORTED_MODULE_3__.position, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_4__/* .textTransform */ .Qx);
const CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.attrs({
  type: 'button',
  'data-cy': 'remove-btn'
}).withConfig({
  displayName: "StyledTag__CloseButton",
  componentId: "sc-189xre2-1"
})(["cursor:pointer;text-align:center;padding:0 2px 0 0;width:20px;height:100%;position:absolute;top:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;transition:colors 0.1s;border:none;line-height:inherit;color:", ";background-color:", ";&:hover,&:focus{color:", ";background-color:", ";}&:disabled{cursor:not-allowed;opacity:0.5;}"], props => props.isFocused ? props.theme.colors.black[900] : props.theme.colors.black[500], props => props.isFocused ? props.theme.colors.black[300] : 'transparent', props => props.theme.colors.black[900], props => props.theme.colors.black[300]);
/** Simple tag to display a short string */

const StyledTag = _ref => {
  let {
    closeButtonProps,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return !closeButtonProps ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(StyledTagBase, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(StyledTagBase, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Text__WEBPACK_IMPORTED_MODULE_5__/* .Span */ .Dr, {
      mr: "12px",
      letterSpacing: "inherit",
      children: children
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(CloseButton, _objectSpread(_objectSpread({}, closeButtonProps), {}, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_1__.Times, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledTag);

/***/ }),

/***/ 93150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ StyledTextarea)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16010);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36422);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
const _excluded = ["autoSize", "showCount", "resize"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const TextArea = styled_components__WEBPACK_IMPORTED_MODULE_2___default().textarea.withConfig({
  displayName: "StyledTextarea__TextArea",
  componentId: "sc-pc1pul-0"
})(["outline:none;", " ", " ", " ", " ", " ", " ", " ", " &:disabled{background-color:", ";cursor:not-allowed;}&:focus,&:hover:not(:disabled){border-color:", ";}&::placeholder{color:", ";}"], styled_system__WEBPACK_IMPORTED_MODULE_3__.space, styled_system__WEBPACK_IMPORTED_MODULE_3__.layout, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_4__/* .resize */ .SI, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_4__/* .overflow */ .tx, styled_system__WEBPACK_IMPORTED_MODULE_3__.border, styled_system__WEBPACK_IMPORTED_MODULE_3__.color, styled_system__WEBPACK_IMPORTED_MODULE_3__.typography, props => {
  if (props.withOutline) {
    return props.error ? (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["outline:1px dashed ", ";outline-offset:0.25em;"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.red.300')) : (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["&:focus{outline:1px dashed ", ";outline-offset:0.25em;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.black.200'));
  } else if (props.error) {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["border-color:", ";"], props.theme.colors.red[500]);
  }
}, (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.black.50'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.primary.300'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.black.400'));
/**
 * A styled textarea that can grows with its content.
 */

class StyledTextarea extends (react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent) {
  constructor(props) {
    super(props);

    _defineProperty(this, "onChange", e => {
      const {
        onChange,
        autoSize
      } = this.props;

      if (onChange) {
        onChange(e);
      }

      if (autoSize) {
        this._adjustHeight(e.target);
      }
    });

    this.textareaRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
  }

  componentDidMount() {
    if (this.props.autoSize) {
      this._adjustHeight(this.textareaRef.current);
    }
  }

  _adjustHeight(target) {
    // Reset height to 0 so component will auto-size
    target.style.height = 0; // Use the scroll height to define size

    target.style.height = `${target.scrollHeight}px`;
  }

  render() {
    const _this$props = this.props,
          {
      autoSize,
      showCount,
      resize
    } = _this$props,
          props = _objectWithoutProperties(_this$props, _excluded);

    const value = props.value || props.defaultValue || '';

    const textarea = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(TextArea, _objectSpread(_objectSpread({
      ref: this.textareaRef,
      as: "textarea",
      resize: resize || (autoSize ? 'none' : 'vertical')
    }, props), {}, {
      onChange: this.onChange
    }));

    return !showCount ? textarea : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      position: "relative",
      children: [textarea, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        position: "absolute",
        bottom: "1.25em",
        right: "1.5em",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_StyledTag__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          textTransform: "uppercase",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            children: value.length
          }), props.maxLength && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
            children: [" / ", props.maxLength]
          })]
        })
      })]
    });
  }

}

_defineProperty(StyledTextarea, "defaultProps", {
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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42932);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_popper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46555);
/* harmony import */ var _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16010);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_5__]);
uuid__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const StyledTooltipContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(`div`).withConfig({
  displayName: "StyledTooltip__StyledTooltipContainer",
  componentId: "sc-vgr5wu-0"
})(["max-width:320px;z-index:1000000;opacity:0.96 !important;border-radius:4px;box-shadow:0px 3px 6px 1px rgba(20,20,20,0.08);padding:12px 16px;font-size:12px;text-transform:initial;white-space:normal;color:white;background:#141414;box-shadow:0px 4px 8px rgba(20,20,20,0.16);"]);
const Arrow = styled_components__WEBPACK_IMPORTED_MODULE_3___default()('div').withConfig({
  displayName: "StyledTooltip__Arrow",
  componentId: "sc-vgr5wu-1"
})(["position:absolute;font-size:8px;width:3em;height:3em;&[data-placement*='bottom']{top:0;left:0;margin-top:-0.9em;width:3em;height:1em;&::before{border-width:0 1.5em 1em 1.5em;border-color:transparent transparent #141414 transparent;filter:drop-shadow(0px -3px 3px rgba(20,20,20,0.1));}}&[data-placement*='top']{bottom:0;left:0;margin-bottom:-0.9em;width:3em;height:1em;&::before{border-width:1em 1.5em 0 1.5em;border-color:#141414 transparent transparent transparent;filter:drop-shadow(0px 3px 3px rgba(20,20,20,0.1));}}&[data-placement*='right']{left:0;margin-left:-0.9em;height:3em;width:1em;&::before{border-width:1.5em 1em 1.5em 0;border-color:transparent #141414 transparent transparent;filter:drop-shadow(-4px 3px 3px rgba(20,20,20,0.1));}}&[data-placement*='left']{right:0;margin-right:-0.9em;height:3em;width:1em;&::before{border-width:1.5em 0 1.5em 1em;border-color:transparent transparent transparent #141414;filter:drop-shadow(4px 3px 3px rgba(20,20,20,0.1));}}&::before{content:'';margin:auto;display:block;width:0;height:0;border-style:solid;}"]);
const ChildrenContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "StyledTooltip__ChildrenContainer",
  componentId: "sc-vgr5wu-2"
})(["display:", ";", " ", " ", " button:disabled{pointer-events:none;}"], props => props.display, styled_system__WEBPACK_IMPORTED_MODULE_4__.verticalAlign, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_6__/* .cursor */ .oc, styled_system__WEBPACK_IMPORTED_MODULE_4__.lineHeight);
const REACT_POPPER_MODIFIERS = [{
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
    offset: ({
      placement
    }) => {
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

const TooltipContent = ({
  place,
  content,
  onMouseEnter,
  onMouseLeave
}) => {
  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_popper__WEBPACK_IMPORTED_MODULE_2__.Popper, {
    placement: place,
    modifiers: REACT_POPPER_MODIFIERS,
    children: ({
      ref,
      style,
      placement,
      arrowProps
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(StyledTooltipContainer, {
      ref: ref,
      style: style,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      children: [typeof content === 'function' ? content() : content, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Arrow, {
        ref: arrowProps.ref,
        "data-placement": placement,
        style: arrowProps.style
      })]
    })
  }), document.body);
};
/**
 * A tooltip to show overlays on hover.
 *
 * Relies on [react-tooltip](https://react-tooltip.netlify.com/) and accepts any
 * of its properties.
 */


class StyledTooltip extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      id: null,
      isHovered: false,
      showPopup: false
    });

    _defineProperty(this, "onMouseEnter", () => {
      this.setState({
        isHovered: true
      });
    });

    _defineProperty(this, "onMouseLeave", () => {
      this.setState({
        isHovered: false
      });
    });
  }

  // We only set `id` on the client to avoid mismatches with SSR
  componentDidMount() {
    this.setState({
      id: `tooltip-${(0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)()}`
    });
  }

  componentDidUpdate(_, oldState) {
    if (!oldState.isHovered && this.state.isHovered) {
      if (this.closeTimeout) {
        clearTimeout(this.closeTimeout);
        this.closeTimeout = null;
      }

      this.setState({
        showPopup: true
      });
    } else if (oldState.isHovered && !this.state.isHovered) {
      this.closeTimeout = setTimeout(() => this.setState({
        showPopup: false
      }), this.props.delayHide);
    }
  }

  renderChildren(ref) {
    return typeof this.props.children === 'function' ? this.props.children({
      ref: ref,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ChildrenContainer, {
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

  render() {
    if (this.props.noTooltip) {
      return this.renderChildren();
    }

    const isMounted = Boolean(this.state.id);
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_popper__WEBPACK_IMPORTED_MODULE_2__.Manager, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_popper__WEBPACK_IMPORTED_MODULE_2__.Reference, {
          children: ({
            ref
          }) => this.renderChildren(ref)
        }), isMounted && this.state.showPopup && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(TooltipContent, {
          place: this.props.place,
          content: this.props.content,
          onMouseEnter: this.onMouseEnter,
          onMouseLeave: this.onMouseLeave
        })]
      })
    });
  }

}

_defineProperty(StyledTooltip, "defaultProps", {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledTooltip);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 91431:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93908);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18022);
/* harmony import */ var _styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_boxicons_regular_ChevronUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52160);
/* harmony import */ var _styled_icons_boxicons_regular_ChevronUp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_ChevronUp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_fa_solid_Bars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19153);
/* harmony import */ var _styled_icons_fa_solid_Bars__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Bars__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50529);
/* harmony import */ var _changelog_ChangelogTrigger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22963);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16159);
/* harmony import */ var _Hide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84582);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56562);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(92129);
/* harmony import */ var _PopupMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(66152);
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(68450);
/* harmony import */ var _SearchIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(84091);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(87268);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(90998);
/* harmony import */ var _TopBarMobileMenu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5254);
/* harmony import */ var _TopBarProfileMenu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(83482);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_changelog_ChangelogTrigger__WEBPACK_IMPORTED_MODULE_8__, _TopBarProfileMenu__WEBPACK_IMPORTED_MODULE_21__]);
([_changelog_ChangelogTrigger__WEBPACK_IMPORTED_MODULE_8__, _TopBarProfileMenu__WEBPACK_IMPORTED_MODULE_21__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


























const NavList = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC).withConfig({
  displayName: "TopBar__NavList",
  componentId: "sc-zm70wo-0"
})(["list-style:none;min-width:20rem;text-align:right;align-items:center;"]);

var _StyledNavList = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(NavList).withConfig({
  displayName: "TopBar___StyledNavList",
  componentId: "sc-zm70wo-1"
})(["margin:0;"]);

const NavLinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu).withConfig({
  displayName: "TopBar__NavLinkContainer",
  componentId: "sc-zm70wo-2"
})(["text-align:center;width:140px;"]);
const NavButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_StyledButton__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z).withConfig({
  displayName: "TopBar__NavButton",
  componentId: "sc-zm70wo-3"
})(["color:#323334;font-weight:500;font-size:16px;padding:10px;cursor:pointer;@media (hover:hover){:hover{background-color:white !important;}}:focus{background-color:white;border-radius:1px;}:active{color:black;}"]);
const NavItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_StyledLink__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z).withConfig({
  displayName: "TopBar__NavItem",
  componentId: "sc-zm70wo-4"
})(["color:#323334;font-weight:500;font-size:14px;@media (hover:hover){:hover{text-decoration:underline;}}"]);

const TopBar = ({
  showSearch,
  menuItems,
  showProfileAndChangelogMenu
}) => {
  const {
    0: showMobileMenu,
    1: setShowMobileMenu
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: showSearchModal,
    1: setShowSearchModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(); // We debounce this function to avoid conflicts between the menu button and TopBarMobileMenu useGlobalBlur hook.

  const debouncedSetShowMobileMenu = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(setShowMobileMenu);

  const toggleMobileMenu = () => {
    debouncedSetShowMobileMenu(state => !state);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_StyledFlex, {
    px: 3,
    py: showSearch ? 2 : 3,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    ref: ref,
    $_css: _lib_theme__WEBPACK_IMPORTED_MODULE_7__/* ["default"].sizes.navbarHeight */ .Z.sizes.navbarHeight,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Link__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Image__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          width: "36",
          height: "36",
          src: "/static/images/opencollective-icon.png",
          alt: "Open Collective"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Hide__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
          xs: true,
          sm: true,
          md: true,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu, {
            mx: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Image__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
              height: 21,
              width: 141,
              src: "/static/images/logotype.svg",
              alt: "Open Collective"
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
      alignItems: "center",
      justifyContent: ['flex-end', 'flex-end', 'center'],
      flex: "1 1 auto",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Hide__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
        xs: true,
        sm: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_StyledNavList, {
          as: "ul",
          p: 0,
          m: 0,
          justifyContent: "space-around",
          children: [menuItems.solutions && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_PopupMenu__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            zIndex: 2000,
            closingEvents: ['focusin', 'mouseover'],
            Button: ({
              onMouseOver,
              onClick,
              popupOpen,
              onFocus
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(NavButton, {
              isBorderless: true,
              onMouseOver: onMouseOver,
              onFocus: onFocus,
              onClick: onClick,
              whiteSpace: "nowrap",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "asqGnV",
                defaultMessage: [{
                  "type": 0,
                  "value": "Solutions"
                }]
              }), popupOpen ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_styled_icons_boxicons_regular_ChevronUp__WEBPACK_IMPORTED_MODULE_4__.ChevronUp, {
                size: 20
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_3__.ChevronDown, {
                size: 20
              })]
            }),
            placement: "bottom",
            popupMarginTop: "-10px",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(NavLinkContainer, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Link__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                href: "/collectives",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(NavItem, {
                  as: _Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                  mt: 16,
                  mb: 16,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                    id: "pricing.forCollective",
                    defaultMessage: [{
                      "type": 0,
                      "value": "For Collectives"
                    }]
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Link__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                href: "/become-a-sponsor",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(NavItem, {
                  as: _Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                  mt: 16,
                  mb: 16,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                    id: "1rESHf",
                    defaultMessage: [{
                      "type": 0,
                      "value": "For Sponsors"
                    }]
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Link__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                href: "/become-a-host",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(NavItem, {
                  as: _Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                  mt: 16,
                  mb: 16,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                    id: "pricing.fiscalHost",
                    defaultMessage: [{
                      "type": 0,
                      "value": "For Fiscal Hosts"
                    }]
                  })
                })
              })]
            })
          }), menuItems.product && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_PopupMenu__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            zIndex: 2000,
            closingEvents: ['focusin', 'mouseover'],
            Button: ({
              onClick,
              onMouseOver,
              popupOpen,
              onFocus
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(NavButton, {
              isBorderless: true,
              onMouseOver: onMouseOver,
              onFocus: onFocus,
              onClick: onClick,
              whiteSpace: "nowrap",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "ContributionType.Product",
                defaultMessage: [{
                  "type": 0,
                  "value": "Product"
                }]
              }), popupOpen ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_styled_icons_boxicons_regular_ChevronUp__WEBPACK_IMPORTED_MODULE_4__.ChevronUp, {
                size: 20
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_3__.ChevronDown, {
                size: 20
              })]
            }),
            placement: "bottom",
            popupMarginTop: "-10px",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(NavLinkContainer, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Link__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                href: "/pricing",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(NavItem, {
                  as: _Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                  mt: 16,
                  mb: 16,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                    id: "menu.pricing",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Pricing"
                    }]
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Link__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                href: "/how-it-works",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(NavItem, {
                  as: _Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                    id: "menu.howItWorks",
                    defaultMessage: [{
                      "type": 0,
                      "value": "How it Works"
                    }]
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Link__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                href: "/fiscal-hosting",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(NavItem, {
                  as: _Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                  mt: 16,
                  mb: 16,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                    id: "editCollective.fiscalHosting",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Fiscal Hosting"
                    }]
                  })
                })
              })]
            })
          }), menuItems.company && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_PopupMenu__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            zIndex: 2000,
            closingEvents: ['focusin', 'mouseover'],
            Button: ({
              onClick,
              onMouseOver,
              popupOpen,
              onFocus
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(NavButton, {
              isBorderless: true,
              onMouseOver: onMouseOver,
              onFocus: onFocus,
              onClick: onClick,
              whiteSpace: "nowrap",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "company",
                defaultMessage: [{
                  "type": 0,
                  "value": "Company"
                }]
              }), popupOpen ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_styled_icons_boxicons_regular_ChevronUp__WEBPACK_IMPORTED_MODULE_4__.ChevronUp, {
                size: 20
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_3__.ChevronDown, {
                size: 20
              })]
            }),
            placement: "bottom",
            popupMarginTop: "-10px",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(NavLinkContainer, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx("a", {
                href: "https://blog.opencollective.com/",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(NavItem, {
                  as: _Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                  mt: 16,
                  mb: 16,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                    id: "company.blog",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Blog"
                    }]
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Link__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                href: "/e2c",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(NavItem, {
                  as: _Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                  mb: 16,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                    id: "OC.e2c",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Exit to Community"
                    }]
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx("a", {
                href: "https://docs.opencollective.com/help/about/introduction",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(NavItem, {
                  as: _Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                  mb: 16,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                    id: "collective.about.title",
                    defaultMessage: [{
                      "type": 0,
                      "value": "About"
                    }]
                  })
                })
              })]
            })
          }), menuItems.docs && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Link__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            href: "/help",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(NavButton, {
              as: _Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
              whiteSpace: "nowrap",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "Uf3+S6",
                defaultMessage: [{
                  "type": 0,
                  "value": "Help & Support"
                }]
              })
            })
          }), showSearch && menuItems.docs && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            borderRight: "2px solid #DCDDE0",
            height: "20px",
            padding: "5px"
          })]
        })
      }), showSearch && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(NavButton, {
        isBorderless: true,
        onClick: () => setShowSearchModal(true),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_SearchIcon__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            fill: "#75777A",
            size: 18
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Hide__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
            xs: true,
            sm: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__/* .Span */ .Dr, {
              ml: "5px",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "Search",
                defaultMessage: [{
                  "type": 0,
                  "value": "Search"
                }]
              })
            })
          })]
        })
      }), showSearchModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Search__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        onClose: () => setShowSearchModal(false)
      })]
    }), showProfileAndChangelogMenu && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        mr: 3,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Hide__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
          xs: true,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_changelog_ChangelogTrigger__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_TopBarProfileMenu__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {})]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Hide__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
      md: true,
      lg: true,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu, {
        mx: 3,
        onClick: toggleMobileMenu,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
          as: "a",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_styled_icons_fa_solid_Bars__WEBPACK_IMPORTED_MODULE_5__.Bars, {
            color: "#aaaaaa",
            size: 24
          })
        })
      }), showMobileMenu && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_TopBarMobileMenu__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopBar);

var _StyledFlex = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC).withConfig({
  displayName: "TopBar___StyledFlex",
  componentId: "sc-zm70wo-5"
})(p => ({
  height: p.$_css,
  background: 'white'
}));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18022);
/* harmony import */ var _styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_fa_brands_Github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45933);
/* harmony import */ var _styled_icons_fa_brands_Github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_brands_Github__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_fa_brands_Slack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64374);
/* harmony import */ var _styled_icons_fa_brands_Slack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_brands_Slack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_fa_brands_Twitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14638);
/* harmony import */ var _styled_icons_fa_brands_Twitter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_brands_Twitter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_icomoon_Blog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73949);
/* harmony import */ var _styled_icons_icomoon_Blog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_icomoon_Blog__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_icons_material_Mail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34427);
/* harmony import */ var _styled_icons_material_Mail__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_Mail__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_hooks_useGlobalBlur__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55348);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _HideGlobalScroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(79029);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(92129);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(51082);
/* harmony import */ var _StyledRoundButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(90012);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_8___default().li.withConfig({
  displayName: "TopBarMobileMenu__ListItem",
  componentId: "sc-patm22-0"
})(["list-style:none;font-family:Inter;font-style:normal;font-weight:500;font-size:15px;line-height:18px;padding-top:10px;cursor:pointer;a:not(:hover){color:#313233;}"]);
const SubListItem = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(ListItem).withConfig({
  displayName: "TopBarMobileMenu__SubListItem",
  componentId: "sc-patm22-1"
})(["padding-bottom:10px;"]);

const TopBarMobileMenu = props => {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
    viewSolutionsMenu: false,
    viewProductsMenu: false,
    viewCompanyMenu: false
  });
  const {
    closeMenu
  } = props;
  const innerRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef();
  (0,_lib_hooks_useGlobalBlur__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(innerRef, isOutside => {
    if (isOutside) {
      closeMenu();
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_HideGlobalScroll__WEBPACK_IMPORTED_MODULE_12__/* .HideGlobalScroll */ .v, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
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
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
        as: "ul",
        my: 2,
        pl: 0,
        pb: "36px",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(ListItem, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
            justifyContent: "space-between",
            onClick: () => setState(_objectSpread(_objectSpread({}, state), {}, {
              viewSolutionsMenu: !state.viewSolutionsMenu
            })),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
              id: "asqGnV",
              defaultMessage: [{
                "type": 0,
                "value": "Solutions"
              }]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_1__.ChevronDown, {
              size: 20
            })]
          }), state.viewSolutionsMenu && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
            as: "ul",
            my: 2,
            pl: "12px",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(SubListItem, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Link__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                href: "/collectives",
                onClick: closeMenu,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                  id: "pricing.forCollective",
                  defaultMessage: [{
                    "type": 0,
                    "value": "For Collectives"
                  }]
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(SubListItem, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Link__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                href: "/become-a-sponsor",
                onClick: closeMenu,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                  id: "CPlDGt",
                  defaultMessage: [{
                    "type": 0,
                    "value": "For Contributors"
                  }]
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(SubListItem, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Link__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                href: "/become-a-host",
                onClick: closeMenu,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                  id: "pricing.fiscalHost",
                  defaultMessage: [{
                    "type": 0,
                    "value": "For Fiscal Hosts"
                  }]
                })
              })
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(ListItem, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
            justifyContent: "space-between",
            onClick: () => setState(_objectSpread(_objectSpread({}, state), {}, {
              viewProductsMenu: !state.viewProductsMenu
            })),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
              id: "ContributionType.Product",
              defaultMessage: [{
                "type": 0,
                "value": "Product"
              }]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_1__.ChevronDown, {
              size: 20
            })]
          }), state.viewProductsMenu && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
            as: "ul",
            my: 2,
            pl: "12px",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(SubListItem, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Link__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                href: "/pricing",
                onClick: closeMenu,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                  id: "menu.pricing",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Pricing"
                  }]
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(SubListItem, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Link__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                href: "/how-it-works",
                onClick: closeMenu,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                  id: "menu.howItWorks",
                  defaultMessage: [{
                    "type": 0,
                    "value": "How it Works"
                  }]
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(SubListItem, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Link__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                href: "/fiscal-hosting",
                onClick: closeMenu,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                  id: "editCollective.fiscalHosting",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Fiscal Hosting"
                  }]
                })
              })
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(ListItem, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
            justifyContent: "space-between",
            onClick: () => setState(_objectSpread(_objectSpread({}, state), {}, {
              viewCompanyMenu: !state.viewCompanyMenu
            })),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
              id: "company",
              defaultMessage: [{
                "type": 0,
                "value": "Company"
              }]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_1__.ChevronDown, {
              size: 20
            })]
          }), state.viewCompanyMenu && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
            as: "ul",
            my: 2,
            pl: "12px",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(SubListItem, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("a", {
                href: "https://blog.opencollective.com/",
                onClick: closeMenu,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                  id: "company.blog",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Blog"
                  }]
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(SubListItem, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Link__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                href: "/e2c",
                onClick: closeMenu,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                  id: "OC.e2c",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Exit to Community"
                  }]
                })
              })
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("hr", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(ListItem, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Link__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            href: "/help",
            onClick: closeMenu,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
              id: "Uf3+S6",
              defaultMessage: [{
                "type": 0,
                "value": "Help & Support"
              }]
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        display: "flex",
        alignItems: "center",
        width: 1,
        p: 2,
        order: ['2', null, '3'],
        borderRadius: 16,
        background: "#F7F8FA",
        justifyContent: "space-between",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          href: "https://blog.opencollective.com/",
          openInNewTab: true,
          onClick: closeMenu,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            size: 40,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_styled_icons_icomoon_Blog__WEBPACK_IMPORTED_MODULE_5__.Blog, {
              size: 17,
              color: "#9D9FA3"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          href: "https://twitter.com/opencollect",
          openInNewTab: true,
          onClick: closeMenu,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            size: 40,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_styled_icons_fa_brands_Twitter__WEBPACK_IMPORTED_MODULE_4__.Twitter, {
              size: 17,
              color: "#9D9FA3"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          href: "https://github.com/opencollective",
          openInNewTab: true,
          onClick: closeMenu,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            size: 40,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_styled_icons_fa_brands_Github__WEBPACK_IMPORTED_MODULE_2__.Github, {
              size: 17,
              color: "#9D9FA3"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          href: "https://slack.opencollective.com",
          openInNewTab: true,
          onClick: closeMenu,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            size: 40,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_styled_icons_fa_brands_Slack__WEBPACK_IMPORTED_MODULE_3__.Slack, {
              size: 17,
              color: "#9D9FA3"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          href: "mailto:info@opencollective.com",
          openInNewTab: true,
          onClick: closeMenu,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            size: 40,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_styled_icons_material_Mail__WEBPACK_IMPORTED_MODULE_6__.Mail, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_7__.injectIntl)((0,_UserProvider__WEBPACK_IMPORTED_MODULE_16__/* .withUser */ .ns)(TopBarMobileMenu)));

/***/ }),

/***/ 83482:
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
/* harmony import */ var _apollo_client_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72743);
/* harmony import */ var _apollo_client_react_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18022);
/* harmony import */ var _styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_icons_boxicons_regular_ChevronRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28054);
/* harmony import */ var _styled_icons_boxicons_regular_ChevronRight__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_ChevronRight__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_icons_boxicons_regular_Exit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51104);
/* harmony import */ var _styled_icons_boxicons_regular_Exit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_Exit__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32651);
/* harmony import */ var _lib_local_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35427);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25896);
/* harmony import */ var _changelog_ChangelogTrigger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22963);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(16159);
/* harmony import */ var _Hide__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(84582);
/* harmony import */ var _HideGlobalScroll__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(79029);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(92129);
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(95134);
/* harmony import */ var _LoginBtn__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(22777);
/* harmony import */ var _NewsAndUpdatesProvider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(77777);
/* harmony import */ var _ProfileMenuMemberships__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(25327);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(87268);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(173);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(90998);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_changelog_ChangelogTrigger__WEBPACK_IMPORTED_MODULE_12__]);
_changelog_ChangelogTrigger__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






























const memberInvitationsCountQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  query MemberInvitationsCount($memberAccount: AccountReferenceInput!) {
    memberInvitations(memberAccount: $memberAccount) {
      id
    }
  }
`;
const ViewProfileLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_StyledLink__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z).withConfig({
  displayName: "TopBarProfileMenu__ViewProfileLink",
  componentId: "sc-1qfcvou-0"
})(["&:hover{background-color:white;border-color:black;color:black;}"]);
const StyledProfileButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_StyledButton__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z).withConfig({
  displayName: "TopBarProfileMenu__StyledProfileButton",
  componentId: "sc-1qfcvou-1"
})(["padding:0;background-color:white !important;"]);

const UserMenuLinkEntry = props => {
  const {
    isMobileMenuLink
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_ListItem__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
    mb: "6px",
    py: isMobileMenuLink ? '2' : '0',
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, _objectSpread({
      as: _Link__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "20px",
      color: "black.800"
    }, props)), isMobileMenuLink && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
      mt: 2,
      borderStyle: "solid",
      borderColor: "rgba(49, 50, 51, 0.1)"
    })]
  });
};

const UserAccountLinks = ({
  setShowNewsAndUpdates,
  LoggedInUser,
  isMobileView,
  logOutHandler
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Box */ .xu, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(UserMenuLinkEntry, {
      as: _Text__WEBPACK_IMPORTED_MODULE_26__/* .Span */ .Dr,
      isMobileMenuLink: isMobileView,
      onClick: () => setShowNewsAndUpdates(true),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
        id: "menu.newsAndUpdates",
        defaultMessage: [{
          "type": 0,
          "value": "News and Updates"
        }]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_apollo_client_react_components__WEBPACK_IMPORTED_MODULE_4__.Query, {
      query: memberInvitationsCountQuery,
      variables: {
        memberAccount: {
          slug: LoggedInUser.collective.slug
        }
      },
      context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__/* .API_V2_CONTEXT */ .T,
      children: ({
        data,
        loading
      }) => loading === false && data && data.memberInvitations && data.memberInvitations.length > 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(UserMenuLinkEntry, {
        isMobileMenuLink: isMobileView,
        href: "/member-invitations",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
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
      }) : null
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(UserMenuLinkEntry, {
      isMobileMenuLink: isMobileView,
      href: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_11__/* .getSettingsRoute */ .aT)(LoggedInUser.collective),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
        id: "Settings",
        defaultMessage: [{
          "type": 0,
          "value": "Settings"
        }]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(UserMenuLinkEntry, {
      isMobileMenuLink: isMobileView,
      href: `/${LoggedInUser.collective.slug}/manage-contributions`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
        id: "menu.subscriptions",
        defaultMessage: [{
          "type": 0,
          "value": "Manage Contributions"
        }]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(UserMenuLinkEntry, {
      isMobileMenuLink: isMobileView,
      href: `/${LoggedInUser.collective.slug}/submitted-expenses`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
        id: "home.feature.manageExpenses",
        defaultMessage: [{
          "type": 0,
          "value": "Manage Expenses"
        }]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(UserMenuLinkEntry, {
      isMobileMenuLink: isMobileView,
      href: `/${LoggedInUser.collective.slug}/transactions`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
        id: "menu.transactions",
        defaultMessage: [{
          "type": 0,
          "value": "Transactions"
        }]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(UserMenuLinkEntry, {
      isMobileMenuLink: isMobileView,
      href: "/applications",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
        id: "menu.applications",
        defaultMessage: [{
          "type": 0,
          "value": "Applications"
        }]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(UserMenuLinkEntry, {
      isMobileMenuLink: isMobileView,
      as: "a",
      href: "/help",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
        id: "menu.help",
        defaultMessage: [{
          "type": 0,
          "value": "Help"
        }]
      })
    }), LoggedInUser.isRoot && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(UserMenuLinkEntry, {
      isMobileMenuLink: isMobileView,
      href: "/opencollective/root-actions",
      children: "Root Actions"
    }), isMobileView ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(UserMenuLinkEntry, {
      profileMenuLink: true,
      as: "a",
      "data-cy": "logout",
      onClick: logOutHandler,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
          color: "#7A0F2B",
          fontWeight: "500",
          pr: 2,
          whiteSpace: "nowrap",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
            id: "menu.logout",
            defaultMessage: [{
              "type": 0,
              "value": "Log out"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_styled_icons_boxicons_regular_Exit__WEBPACK_IMPORTED_MODULE_7__.Exit, {
          size: 13,
          color: "#7A0F2B"
        })]
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(UserMenuLinkEntry, {
      as: "a",
      "data-cy": "logout",
      onClick: logOutHandler,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
        id: "menu.logout",
        defaultMessage: [{
          "type": 0,
          "value": "Log out"
        }]
      }), " \u2192"]
    })]
  });
};

class TopBarProfileMenu extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleKeyPress", event => {
      const {
        key,
        keyCode
      } = event;

      if (key === 'Escape' || key === 'Esc' || keyCode === 27) {
        this.setState({
          showProfileMenu: false,
          showUserAccount: false
        });
      }
    });

    _defineProperty(this, "logout", () => {
      this.setState({
        showProfileMenu: false,
        showUserAccount: false,
        status: 'loggingout'
      });
      this.props.logout();
      this.setState({
        status: 'loggedout'
      });
    });

    _defineProperty(this, "onClickOutside", () => {
      this.setState({
        showProfileMenu: false,
        showUserAccount: false
      });
    });

    _defineProperty(this, "toggleProfileMenu", e => {
      this.setState(state => ({
        showProfileMenu: !state.showProfileMenu,
        showUserAccount: false
      })); // don't propagate to onClickOutside

      e.nativeEvent.stopImmediatePropagation();
    });

    _defineProperty(this, "toggleAccountInfo", e => {
      this.setState(state => ({
        showUserAccount: !state.showUserAccount
      }));
      e.stopPropagation();
    });

    this.state = {
      showProfileMenu: false,
      loading: true,
      showUserAccount: false
    };
  }

  componentDidMount() {
    const main = document.querySelector('main');
    main.addEventListener('keydown', this.handleKeyPress);
    main.addEventListener('click', this.onClickOutside);

    if (!(0,_lib_local_storage__WEBPACK_IMPORTED_MODULE_10__/* .getFromLocalStorage */ .fp)(_lib_local_storage__WEBPACK_IMPORTED_MODULE_10__/* .LOCAL_STORAGE_KEYS.ACCESS_TOKEN */ .dA.ACCESS_TOKEN)) {
      this.setState({
        loading: false
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.LoggedInUser && this.props.LoggedInUser) {
      this.setState({
        status: 'loggedin'
      });
    }
  }

  componentWillUnmount() {
    const main = document.querySelector('main');
    main.removeEventListener('click', this.onClickOutside);
    main.removeEventListener('keydown', this.handleKeyPress);
  }

  renderProfileMenu() {
    const {
      LoggedInUser,
      setShowNewsAndUpdates
    } = this.props;
    const {
      showUserAccount
    } = this.state;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledContainer, {
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
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .kC, {
        flexDirection: ['column', 'row'],
        maxHeight: ['calc(100vh - 68px)', '100%'],
        children: [showUserAccount && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Hide__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
          lg: true,
          md: true,
          sm: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Box */ .xu, {
            px: 3,
            mx: 2,
            mb: 0,
            mt: 3,
            onClick: this.toggleAccountInfo,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .kC, {
              alignItems: "center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
                color: "black.700",
                fontSize: "12px",
                fontWeight: "500",
                letterSpacing: "0.06em",
                pr: 2,
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                onClick: this.toggleAccountInfo,
                children: ["\u2190 ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                  id: "Back",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Back"
                  }]
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .kC, {
              py: 3,
              mt: 1,
              alignItems: "center",
              justifyContent: "space-between",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .kC, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
                  collective: LoggedInUser.collective,
                  radius: 40,
                  mr: 2
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Box */ .xu, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
                    color: "black.800",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "20px",
                    children: LoggedInUser.collective.name
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
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
        }), !showUserAccount ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Box */ .xu, {
            order: [2, 1],
            flex: "10 1 50%",
            width: [1, 1, 1 / 2],
            p: 3,
            display: ['none', 'flex'],
            bg: "#F7F8FA",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Hide__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
              xs: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Link__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                href: `/${LoggedInUser.collective.slug}`,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
                  collective: LoggedInUser.collective,
                  radius: 56,
                  mr: 2
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
                  mt: 2,
                  color: "black.800",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "20px",
                  children: LoggedInUser.collective.name
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
                mt: "2px",
                wordBreak: "break-all",
                color: "black.700",
                fontSize: "13px",
                children: LoggedInUser.email
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
                mb: 4,
                mt: 3,
                color: "black.800",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(ViewProfileLink, {
                  as: _Link__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,
                  buttonSize: "tiny",
                  buttonStyle: "standard",
                  href: `/${LoggedInUser.collective.slug}`,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledSpan, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                      id: "Jkxa7F",
                      defaultMessage: [{
                        "type": 0,
                        "value": "View Profile"
                      }]
                    })
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
                color: "black.900",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "1px",
                textTransform: "uppercase",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                  id: "menu.myAccount",
                  defaultMessage: [{
                    "type": 0,
                    "value": "My account"
                  }]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Box */ .xu, {
                as: "ul",
                p: 0,
                my: 2,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(UserAccountLinks, {
                  isMobileView: false,
                  LoggedInUser: LoggedInUser,
                  setShowNewsAndUpdates: setShowNewsAndUpdates,
                  logOutHandler: this.logout
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Box */ .xu, {
            order: [1, 2],
            flex: "1 1 50%",
            minWidth: "296px",
            width: [1, 1, 1 / 2],
            p: [1, 3],
            maxHeight: ['100%', '450px'],
            overflowY: ['hidden', 'auto'],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Hide__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
              lg: true,
              md: true,
              sm: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Box */ .xu, {
                height: "90vh",
                p: 3,
                overflowY: "auto",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .kC, {
                  alignItems: "center",
                  children: showUserAccount ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
                    color: "black.700",
                    fontSize: "12px",
                    fontWeight: "500",
                    letterSpacing: "0.06em",
                    pr: 2,
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                    onClick: this.toggleAccountInfo,
                    children: ["\u2190 ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                      id: "Back",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Back"
                      }]
                    })]
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
                      color: "black.700",
                      fontSize: "12px",
                      fontWeight: "500",
                      letterSpacing: "0.06em",
                      pr: 2,
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                        id: "menu.myAccount",
                        defaultMessage: [{
                          "type": 0,
                          "value": "My account"
                        }]
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                      flex: "1",
                      borderStyle: "solid",
                      borderColor: "#DCDEE0"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .kC, {
                  py: 3,
                  pb: 2,
                  my: 3,
                  alignItems: "center",
                  justifyContent: "space-between",
                  onClick: this.toggleAccountInfo,
                  style: {
                    cursor: 'pointer'
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .kC, {
                    position: "relative",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
                      collective: LoggedInUser.collective,
                      radius: 40,
                      mr: 2
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Box */ .xu, {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
                        color: "black.800",
                        fontWeight: "500",
                        fontSize: "14px",
                        lineHeight: "20px",
                        children: LoggedInUser.collective.name
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
                        mt: "2px",
                        wordBreak: "break-all",
                        color: "black.700",
                        fontSize: "13px",
                        children: LoggedInUser.email
                      })]
                    })]
                  }), !showUserAccount ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_styled_icons_boxicons_regular_ChevronRight__WEBPACK_IMPORTED_MODULE_6__.ChevronRight, {
                    size: 20,
                    color: "#76777A"
                  }) : '']
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_ProfileMenuMemberships__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                  user: LoggedInUser
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Hide__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
              xs: true,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_ProfileMenuMemberships__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                user: LoggedInUser
              })
            })]
          })]
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Hide__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
          sm: true,
          md: true,
          lg: true,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Box */ .xu, {
            height: "100vh",
            mt: 0,
            mx: 3,
            as: "ul",
            px: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(UserAccountLinks, {
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

  renderLoggedInUser() {
    const {
      showProfileMenu
    } = this.state;
    const {
      LoggedInUser
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(StyledProfileButton, {
        isBorderless: true,
        onClick: this.toggleProfileMenu,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .kC, {
          alignItems: "center",
          "data-cy": "user-menu-trigger",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
            collective: lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(LoggedInUser, 'collective'),
            radius: "40px",
            mr: 2
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Hide__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_5__.ChevronDown, {
              color: "#4E5052",
              size: "1.5em",
              cursor: "pointer"
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Hide__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
        sm: true,
        md: true,
        lg: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Container__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          position: "absolute",
          mx: 27,
          my: -47,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_changelog_ChangelogTrigger__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            height: "24px",
            width: "24px",
            backgroundSize: "9.49px 13.5px"
          })
        })
      }), showProfileMenu && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_HideGlobalScroll__WEBPACK_IMPORTED_MODULE_17__/* .HideGlobalScroll */ .v, {}), this.renderProfileMenu()]
      })]
    });
  }

  render() {
    const {
      loading
    } = this.state;
    const {
      LoggedInUser,
      loadingLoggedInUser
    } = this.props;
    let status;

    if (this.state.status) {
      status = this.state.status;
    } else if ((loading || loadingLoggedInUser) && typeof LoggedInUser === 'undefined') {
      status = 'loading';
    } else if (!LoggedInUser) {
      status = 'loggedout';
    } else {
      status = 'loggedin';
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)("div", {
      className: "LoginTopBarProfileButton",
      children: [status === 'loading' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
        color: "#D5DAE0",
        fontSize: "1.4rem",
        px: 3,
        py: 2,
        display: "inline-block",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
          id: "loading",
          defaultMessage: [{
            "type": 0,
            "value": "loading"
          }]
        }), "\u2026"]
      }), status === 'loggingout' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
        color: "#D5DAE0",
        fontSize: "1.4rem",
        px: 3,
        py: 2,
        display: "inline-block",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
          id: "loggingout",
          defaultMessage: [{
            "type": 0,
            "value": "logging out"
          }]
        }), "\u2026"]
      }), status === 'loggedout' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_LoginBtn__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {}), status === 'loggedin' && this.renderLoggedInUser()]
    });
  }

}

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_NewsAndUpdatesProvider__WEBPACK_IMPORTED_MODULE_21__/* .withNewsAndUpdates */ .kY)((0,_UserProvider__WEBPACK_IMPORTED_MODULE_27__/* .withUser */ .ns)(TopBarProfileMenu)));

var _StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Container__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z).withConfig({
  displayName: "TopBarProfileMenu___StyledContainer",
  componentId: "sc-1qfcvou-2"
})({
  overflow: 'hidden'
});

var _StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Text__WEBPACK_IMPORTED_MODULE_26__/* .Span */ .Dr).withConfig({
  displayName: "TopBarProfileMenu___StyledSpan",
  componentId: "sc-1qfcvou-3"
})({
  verticalAlign: 'middle'
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97881);
/* harmony import */ var _styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56562);
/* harmony import */ var _StyledDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(206);
/* harmony import */ var _StyledLinkButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67001);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











const ChangeLogNotificationDropdownArrow = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_StyledDropdown__WEBPACK_IMPORTED_MODULE_6__/* .DropdownArrow */ .Wi).withConfig({
  displayName: "ChangelogNotificationDropdown__ChangeLogNotificationDropdownArrow",
  componentId: "sc-11lwrsl-0"
})(["display:block;right:105px;margin-top:3px;&::before{border-color:transparent transparent #ffffc2 transparent;}@media screen and (max-width:40em){right:90px;top:55px;}"]);
const ChangeLogNotificationDropdownContent = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_StyledDropdown__WEBPACK_IMPORTED_MODULE_6__/* .DropdownContent */ .Nv).withConfig({
  displayName: "ChangelogNotificationDropdown__ChangeLogNotificationDropdownContent",
  componentId: "sc-11lwrsl-1"
})(["display:block;right:100px;margin-top:10px;background:#ffffc2;@media screen and (max-width:40em){right:75px;top:55px;}"]);
const CloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_1__.Times).withConfig({
  displayName: "ChangelogNotificationDropdown__CloseIcon",
  componentId: "sc-11lwrsl-2"
})(["font-size:12px;width:15px;height:15px;color:#76777a;cursor:pointer;"]);

const ChangelogNotificationDropdown = ({
  onClose
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ChangeLogNotificationDropdownArrow, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ChangeLogNotificationDropdownContent, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        as: "ul",
        p: 20,
        m: 0,
        minWidth: 184,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
            fontSize: "14px",
            fontWeight: "700",
            color: "black.800",
            mb: 3,
            mr: 3,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "ChangelogNotification.firstLine",
              defaultMessage: [{
                "type": 0,
                "value": "We have new stuff for you!"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledLinkButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            onClick: onClose,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(CloseIcon, {
              onClick: onClose
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
          fontSize: "14px",
          color: "black.800",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
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
              image: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangelogNotificationDropdown);

/***/ }),

/***/ 22963:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59591);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_constants_dismissable_help_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31801);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32651);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69078);
/* harmony import */ var _DismissibleMessage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(94858);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _NewsAndUpdatesProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(77777);
/* harmony import */ var _StyledRoundButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(90012);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(88609);
/* harmony import */ var _ChangelogNotificationDropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(87950);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_14__]);
_StyledTooltip__WEBPACK_IMPORTED_MODULE_14__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


















const FlameIcon = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z).withConfig({
  displayName: "ChangelogTrigger__FlameIcon",
  componentId: "sc-1qbynwp-0"
})(["border-radius:50%;height:", ";width:", ";margin-left:2px;&,&:active{background:", ";background-image:", ";background-repeat:no-repeat;background-position:center center;}&:active{background-color:transparent;}"], props => props.height || '40px', props => props.width || '40px', props => (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.themeGet)(props.backgroundColor), props => `url(${props.url})`);

const ChangelogTrigger = props => {
  const {
    height,
    width,
    backgroundSize,
    setShowNewsAndUpdates,
    setChangelogViewDate
  } = props;
  const {
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(loggedInUserQuery, {
    fetchPolicy: 'cache-only'
  });
  const LoggedInUser = data?.LoggedInUser;
  const hasSeenNewUpdates = LoggedInUser?.hasSeenLatestChangelogEntry;

  const handleShowNewUpdates = () => {
    setShowNewsAndUpdates(true);
    setChangelogViewDate({
      variables: {
        changelogViewDate: new Date()
      },
      update: store => {
        const data = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default()(store.readQuery({
          query: loggedInUserQuery
        }));

        data.LoggedInUser.hasSeenLatestChangelogEntry = true;
        store.writeQuery({
          query: loggedInUserQuery,
          data
        });
      }
    });
  };

  const TooltipContent = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
    id: "ChangelogTrigger.tooltip.content",
    defaultMessage: [{
      "type": 0,
      "value": "What's new with Open Collective"
    }]
  });

  if (!LoggedInUser) {
    return null;
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
    children: hasSeenNewUpdates ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
      content: TooltipContent,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(FlameIcon, {
        height: height,
        width: width,
        onClick: handleShowNewUpdates,
        backgroundColor: "black.100",
        backgroundSize: backgroundSize,
        url: "/static/images/flame-default.svg"
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(FlameIcon, {
        height: height,
        width: width,
        onClick: handleShowNewUpdates,
        backgroundColor: "yellow.100",
        backgroundSize: backgroundSize,
        url: "/static/images/flame-red.svg"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_DismissibleMessage__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        messageId: _lib_constants_dismissable_help_message__WEBPACK_IMPORTED_MODULE_7__/* .HELP_MESSAGE.CHANGELOG_NOTIFICATION_DROPDOWN */ .Zh.CHANGELOG_NOTIFICATION_DROPDOWN,
        children: ({
          dismiss
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_ChangelogNotificationDropdown__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          onClose: dismiss
        })
      })]
    })
  });
};

const setChangelogViewDateMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  mutation SetChangelogViewDateMutation($changelogViewDate: DateTime!) {
    setChangelogViewDate(changelogViewDate: $changelogViewDate) {
      id
      hasSeenLatestChangelogEntry
    }
  }
`;
const loggedInUserQuery = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_8__/* .gqlV1 */ .N
/* GraphQL */
`
  query LoggedInUser {
    LoggedInUser {
      id
      hasSeenLatestChangelogEntry
    }
  }
`;
const setChangelogViewDate = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_3__.graphql)(setChangelogViewDateMutation, {
  name: 'setChangelogViewDate',
  options: {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_8__/* .API_V2_CONTEXT */ .T
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_NewsAndUpdatesProvider__WEBPACK_IMPORTED_MODULE_12__/* .withNewsAndUpdates */ .kY)(setChangelogViewDate((0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_3__.withApollo)(ChangelogTrigger))));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ collectivePageQuery),
/* harmony export */   "L": () => (/* binding */ getCollectivePageQueryVariables)
/* harmony export */ });
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32651);
/* harmony import */ var _contribute_cards_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19146);
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5824);


 // We have to disable the linter because it's not able to detect that `nbContributorsPerContributeCard` is used in fragments

/* eslint-disable graphql/template-strings */

const collectivePageQuery = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_0__/* .gqlV1 */ .N
/* GraphQL */
`
  query CollectivePage($slug: String!, $nbContributorsPerContributeCard: Int) {
    Collective(slug: $slug, throwIfMissing: false) {
      id
      slug
      path
      name
      description
      longDescription
      backgroundImage
      backgroundImageUrl
      twitterHandle
      repositoryUrl
      website
      socialLinks {
        type
        url
      }
      tags
      company
      type
      currency
      settings
      isActive
      isPledged
      isApproved
      isArchived
      isFrozen
      isHost
      isIncognito
      isGuest
      hostFeePercent
      platformFeePercent
      image
      imageUrl(height: 256)
      canApply
      canContact
      supportedExpenseTypes
      features {
        id
        ...NavbarFields
      }
      ordersFromCollective(subscriptionsOnly: true) {
        id
        isSubscriptionActive
      }
      memberOf(onlyActiveCollectives: true, limit: 1) {
        id
      }
      stats {
        id
        balance
        balanceWithBlockedFunds
        yearlyBudget
        updates
        activeRecurringContributions
        totalAmountReceived(periodInMonths: 12)
        totalAmountRaised: totalAmountReceived
        totalNetAmountRaised: totalNetAmountReceived
        backers {
          id
          all
          users
          organizations
        }
        transactions {
          id
          all
        }
      }
      connectedTo: memberOf(role: "CONNECTED_COLLECTIVE", limit: 1) {
        id
        collective {
          id
          name
          type
          slug
        }
      }
      parentCollective {
        id
        name
        slug
        image
        backgroundImageUrl
        twitterHandle
        type
        coreContributors: contributors(roles: [ADMIN, MEMBER]) {
          id
          ...ContributorsFields
        }
      }
      host {
        id
        name
        slug
        type
        settings
        plan {
          id
          hostFees
          hostFeeSharePercent
        }
        features {
          id
          VIRTUAL_CARDS
        }
        policies {
          COLLECTIVE_MINIMUM_ADMINS {
            freeze
            numberOfAdmins
          }
        }
      }
      coreContributors: contributors(roles: [ADMIN, MEMBER]) {
        id
        ...ContributorsFields
      }
      financialContributors: contributors(roles: [BACKER], limit: 150) {
        id
        ...ContributorsFields
      }
      tiers {
        id
        ...ContributeCardTierFields
      }
      events(includePastEvents: true, includeInactive: true) {
        id
        ...ContributeCardEventFields
      }
      projects {
        id
        ...ContributeCardProjectFields
      }
      admins: members(role: "ADMIN") {
        id
      }
      connectedCollectives: members(role: "CONNECTED_COLLECTIVE") {
        id
        collective: member {
          id
          slug
          name
          type
          description
          backgroundImageUrl(height: 208)
          stats {
            id
            backers {
              id
              all
              users
              organizations
            }
          }
          contributors(limit: $nbContributorsPerContributeCard) {
            id
            ...ContributeCardContributorFields
          }
        }
      }
      updates(limit: 3, onlyPublishedUpdates: true) {
        id
        ...UpdatesFields
      }
      plan {
        id
        hostedCollectives
      }

      ... on Event {
        timezone
        startsAt
        endsAt
        location {
          id
          name
          address
          country
          lat
          long
        }
        privateInstructions
        orders {
          id
          createdAt
          quantity
          publicMessage
          fromCollective {
            id
            type
            name
            company
            image
            isIncognito
            imageUrl
            slug
            twitterHandle
            description
            ... on User {
              email
            }
          }
          tier {
            id
            name
            type
          }
        }
      }
    }
  }

  ${_fragments__WEBPACK_IMPORTED_MODULE_1__/* .updatesFieldsFragment */ .Ju}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__/* .contributorsFieldsFragment */ .wF}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__/* .collectiveNavbarFieldsFragment */ .AS}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__/* .contributeCardTierFieldsFragment */ .d8}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__/* .contributeCardEventFieldsFragment */ .bt}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__/* .contributeCardProjectFieldsFragment */ .Sm}
`;
/* eslint-enable graphql/template-strings */

const getCollectivePageQueryVariables = slug => {
  return {
    slug: slug,
    nbContributorsPerContributeCard: _contribute_cards_constants__WEBPACK_IMPORTED_MODULE_2__/* .MAX_CONTRIBUTORS_PER_CONTRIBUTE_CARD */ .Dc
  };
};

/***/ }),

/***/ 19146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dc": () => (/* binding */ MAX_CONTRIBUTORS_PER_CONTRIBUTE_CARD),
/* harmony export */   "TJ": () => (/* binding */ CONTRIBUTE_CARD_WIDTH),
/* harmony export */   "zx": () => (/* binding */ CONTRIBUTE_CARD_BORDER_RADIUS)
/* harmony export */ });
/** Max number of contributors on each tier card */
const MAX_CONTRIBUTORS_PER_CONTRIBUTE_CARD = 4;
const CONTRIBUTE_CARD_WIDTH = 280;
const CONTRIBUTE_CARD_BORDER_RADIUS = 16;

/***/ }),

/***/ 37670:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32651);
/* harmony import */ var _collective_page_graphql_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71611);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87268);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71792);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93150);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ToastProvider__WEBPACK_IMPORTED_MODULE_11__]);
_ToastProvider__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const _excluded = ["collective"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















const editAccountFreezeStatusMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation EditAccountFreezeStatus($account: AccountReferenceInput!, $action: AccountFreezeAction!, $message: String) {
    editAccountFreezeStatus(account: $account, message: $message, action: $action) {
      id
      isFrozen
      childrenAccounts {
        nodes {
          id
          isFrozen
        }
      }
    }
  }
`;

const FreezeAccountModal = _ref => {
  let {
    collective
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_11__/* .useToasts */ .e1)();
  const {
    0: message,
    1: setMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const isUnfreezing = collective.isFrozen;
  const [editAccountFreezeStatus, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(editAccountFreezeStatusMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__/* .API_V2_CONTEXT */ .T
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
    maxWidth: 432,
    trapFocus: true
  }, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_8__/* .CollectiveModalHeader */ .I4, {
      collective: collective,
      mb: 3
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_8__/* .ModalBody */ .fe, {
      children: collective.isFrozen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
          fontSize: "16px",
          fontWeight: "700",
          lineHeight: "24px",
          color: "red.900",
          mb: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "OX8+5o",
            defaultMessage: [{
              "type": 0,
              "value": "Are you sure want to unfreeze this collective?"
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
          fontSize: "14px",
          lineHeight: "20px",
          color: "black.700",
          mb: "10px",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "nhEmNV",
            defaultMessage: [{
              "type": 0,
              "value": "Unfreezing the collective means they will now have full access to the platform."
            }]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "1Whmi8",
            defaultMessage: [{
              "type": 0,
              "value": "This collective (and all its related Projects & Events) will now have access to accept funds, pay out expenses, post updates, create new Events or Projects."
            }]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Label */ .__, {
          fontSize: "16px",
          fontWeight: "700",
          lineHeight: "24px",
          color: "black.800.900",
          mb: "6px",
          htmlFor: "freeze-account-message",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "GLo1nw",
            defaultMessage: [{
              "type": 0,
              "value": "Include a message to the Collective admins (Optional)"
            }]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
            fontSize: "13px",
            fontWeight: "400",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "rzknYs",
              defaultMessage: [{
                "type": 0,
                "value": "They will also be notified of this unfreeze via auto-email."
              }]
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          id: "freeze-account-message",
          width: "100%",
          minHeight: 126,
          maxHeight: 300,
          onChange: e => setMessage(e.target.value),
          value: message
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
          fontSize: "16px",
          fontWeight: "700",
          lineHeight: "24px",
          color: "red.900",
          mb: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "GC33m/",
            defaultMessage: [{
              "type": 0,
              "value": "Are you sure want to freeze this collective?"
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
          fontSize: "14px",
          lineHeight: "20px",
          color: "black.700",
          mb: "10px",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "IVw0RN",
            defaultMessage: [{
              "type": 0,
              "value": "Freezing this collective means temporarily limiting what a collective (and their connected Projects & Events) can and cannot do on the platform."
            }]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "oh+bk9",
            defaultMessage: [{
              "type": 0,
              "value": "They will not be able to accept funds, pay out expenses, post updates, create new Events or Projects, add new Team members under this collective. However, they will still continue to receive recurring donations that were started before this freeze."
            }]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Label */ .__, {
          htmlFor: "freeze-account-message",
          fontSize: "16px",
          fontWeight: "700",
          lineHeight: "24px",
          color: "black.800.900",
          mb: "6px",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "GLo1nw",
            defaultMessage: [{
              "type": 0,
              "value": "Include a message to the Collective admins (Optional)"
            }]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
            fontSize: "13px",
            fontWeight: "400",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "gdP2KJ",
              defaultMessage: [{
                "type": 0,
                "value": "They will also be notified of this freeze via auto-email notification."
              }]
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          id: "freeze-account-message",
          width: "100%",
          minHeight: 126,
          maxHeight: 300,
          onChange: e => setMessage(e.target.value),
          value: message,
          fontSize: "13px"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
          fontSize: "13px",
          color: "black.700",
          mt: "6px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "uwFEIP",
            defaultMessage: [{
              "type": 0,
              "value": "Make sure to let the admins know if action is required"
            }]
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_8__/* .ModalFooter */ .mz, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
        justifyContent: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          buttonStyle: isUnfreezing ? 'primary' : 'danger',
          minWidth: 90,
          loading: loading,
          onClick: async () => {
            try {
              const action = isUnfreezing ? 'UNFREEZE' : 'FREEZE';
              const accountInput = typeof collective.id === 'number' ? {
                legacyId: collective.id
              } : {
                id: collective.id
              };
              const variables = {
                account: accountInput,
                message,
                action
              };
              await editAccountFreezeStatus({
                variables,
                refetchQueries: [{
                  query: _collective_page_graphql_queries__WEBPACK_IMPORTED_MODULE_5__/* .collectivePageQuery */ .J,
                  variables: {
                    slug: collective.slug
                  }
                }],
                awaitRefetchQueries: true
              });
              const successMsgArgs = {
                accountName: collective.name,
                accountSlug: collective.slug
              };
              addToast({
                type: _ToastProvider__WEBPACK_IMPORTED_MODULE_11__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
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
              props?.onClose();
            } catch (e) {
              addToast({
                type: _ToastProvider__WEBPACK_IMPORTED_MODULE_11__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                variant: 'light',
                message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_3__/* .i18nGraphqlException */ .t2)(intl, e)
              });
            }
          },
          children: isUnfreezing ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "5SBeLS",
            defaultMessage: [{
              "type": 0,
              "value": "Unfreeze"
            }]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "ILjcbM",
            defaultMessage: [{
              "type": 0,
              "value": "Freeze Collective"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          ml: 3,
          minWidth: 120,
          onClick: props.onClose,
          disabled: loading,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FreezeAccountModal);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E_": () => (/* binding */ DISMISSABLE_HELP_MESSAGE_KEY),
/* harmony export */   "Mk": () => (/* binding */ BANNER),
/* harmony export */   "Zh": () => (/* binding */ HELP_MESSAGE)
/* harmony export */ });
const DISMISSABLE_HELP_MESSAGE_KEY = 'dismissedHelpMessages';
/** Defines IDs for dismissable help messages */

const HELP_MESSAGE = {
  EXPENSE_CREATE_INFO: 'EXPENSE_CREATE_INFO',
  CHANGELOG_NOTIFICATION_DROPDOWN: 'CHANGELOG_NOTIFICATION_DROPDOWN'
};
const BANNER = {
  COVID: 'COVID'
};

/***/ }),

/***/ 47162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Up": () => (/* binding */ isPastEvent),
/* harmony export */   "dj": () => (/* binding */ moneyCanMoveFromEvent),
/* harmony export */   "qP": () => (/* binding */ sortEvents)
/* harmony export */ });
/* harmony import */ var lodash_partition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32027);
/* harmony import */ var lodash_partition__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_partition__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Returns true if the event is passed
 */
const isPastEvent = event => {
  if (!event.endsAt) {
    return false;
  } else {
    const oneDay = 24 * 60 * 60 * 1000;
    const isOverSince = new Date().getTime() - new Date(event.endsAt).getTime();
    return isOverSince > oneDay;
  }
};
/**
 * Can only withraw the money from event if it's over.
 */

const moneyCanMoveFromEvent = event => {
  if (lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(event, 'stats.balance', 0) <= 0) {
    return false;
  }

  return new Date().getTime() >= new Date(event.endsAt).getTime();
};
const sortEvents = events => {
  // eslint-disable-next-line react/display-name
  const getDate = column => event => !event[column] ? null : new Date(event[column]);

  const [pastEvents, presentEvents] = lodash_partition__WEBPACK_IMPORTED_MODULE_0___default()(events, isPastEvent);

  const iteratees = [getDate('startsAt'), getDate('endsAt'), 'id'];
  return [...lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default()(presentEvents, iteratees, ['asc', 'asc', 'asc']), ...lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default()(pastEvents, iteratees, ['desc', 'desc', 'desc'])];
};

/***/ }),

/***/ 55348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useGlobalBlur = (ref, callback, closingEvents = ['mousedown']) => {
  const wasOutside = e => {
    const currentRef = ref instanceof HTMLElement ? ref : ref?.current;
    callback(!currentRef?.contains(e.target));
  };

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    closingEvents.forEach(closingEvent => document.addEventListener(closingEvent, wasOutside, false));
    return () => closingEvents.forEach(closingEvent => document.removeEventListener(closingEvent, wasOutside, false));
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGlobalBlur);

/***/ })

};
;