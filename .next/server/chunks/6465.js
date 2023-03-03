"use strict";
exports.id = 6465;
exports.ids = [6465];
exports.modules = {

/***/ 66465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_roles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98216);


const RolesTranslations = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].HOST */ .Z.HOST]: {
    id: "Member.Role.HOST",
    defaultMessage: [{
      "type": 0,
      "value": "Host"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].ADMIN */ .Z.ADMIN]: {
    id: "Member.Role.ADMIN",
    defaultMessage: [{
      "type": 0,
      "value": "Admin"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].MEMBER */ .Z.MEMBER]: {
    id: "Member.Role.MEMBER",
    defaultMessage: [{
      "type": 0,
      "value": "Core Contributor"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].CONTRIBUTOR */ .Z.CONTRIBUTOR]: {
    id: "Member.Role.CONTRIBUTOR",
    defaultMessage: [{
      "type": 0,
      "value": "Contributor"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].BACKER */ .Z.BACKER]: {
    id: "Member.Role.BACKER",
    defaultMessage: [{
      "type": 0,
      "value": "Financial Contributor"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].ATTENDEE */ .Z.ATTENDEE]: {
    id: "Member.Role.ATTENDEE",
    defaultMessage: [{
      "type": 0,
      "value": "Attendee"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].FOLLOWER */ .Z.FOLLOWER]: {
    id: "Member.Role.FOLLOWER",
    defaultMessage: [{
      "type": 0,
      "value": "Follower"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].ACCOUNTANT */ .Z.ACCOUNTANT]: {
    id: "Member.Role.ACCOUNTANT",
    defaultMessage: [{
      "type": 0,
      "value": "Accountant"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].CONNECTED_COLLECTIVE */ .Z.CONNECTED_COLLECTIVE]: {
    id: "Member.Role.ConnectedAccount",
    defaultMessage: [{
      "type": 0,
      "value": "Connected"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].CONNECTED_ACCOUNT */ .Z.CONNECTED_ACCOUNT]: {
    id: "Member.Role.ConnectedAccount",
    defaultMessage: [{
      "type": 0,
      "value": "Connected"
    }]
  }
});
/**
 * Translate a member role
 *
 * @param {func} `formatMessage` - see `injectIntl` or `useIntl`
 * @param {string} `role` - see `roles`
 */

const formatMemberRole = (intl, role) => {
  const i18nMsg = RolesTranslations[role];
  return i18nMsg ? intl.formatMessage(i18nMsg) : role;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatMemberRole);

/***/ })

};
;