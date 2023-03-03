(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1012],{

/***/ 833:
/***/ (function(module) {

module.exports = "/_next/static/images/CollectiveNavbarIconAbout-c908a14c8bb1e826b98291fc2d96f73c.png";

/***/ }),

/***/ 12037:
/***/ (function(module) {

module.exports = "/_next/static/images/CollectiveNavbarIconBudget-905099b5e3610be9c44217314f08a030.png";

/***/ }),

/***/ 72354:
/***/ (function(module) {

module.exports = "/_next/static/images/CollectiveNavbarIconConnect-4f0d6dda87e4fe0dc3beda6866e2d629.png";

/***/ }),

/***/ 24990:
/***/ (function(module) {

module.exports = "/_next/static/images/CollectiveNavbarIconContribute-acd3951c7ccb1748a48b9f8fe8100c6f.png";

/***/ }),

/***/ 4848:
/***/ (function(module) {

module.exports = "/_next/static/images/CollectiveNavbarIconEvents-6b8c5ac73d47d019dad5a8623a27ba2a.png";

/***/ }),

/***/ 97585:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": function() { return /* binding */ NAVBAR_CATEGORIES; }
/* harmony export */ });
var NAVBAR_CATEGORIES = {
  ABOUT: 'ABOUT',
  BUDGET: 'BUDGET',
  CONNECT: 'CONNECT',
  CONTRIBUTE: 'CONTRIBUTE',
  CONTRIBUTIONS: 'CONTRIBUTIONS',
  EVENTS: 'EVENTS' // Events, projects, connected collectives

};

/***/ }),

/***/ 24839:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Db": function() { return /* binding */ Dimensions; },
/* harmony export */   "bx": function() { return /* binding */ Sections; }
/* harmony export */ });
/* unused harmony exports AnimationsDurations, AllSectionsNames */
/**
 * Shared dimensions between collective page's components
 */
var Dimensions = {
  PADDING_X: [15, 30],
  MAX_SECTION_WIDTH: 1260
};
/**
 * Durations for page animations
 */

var AnimationsDurations = {
  HERO_COLLAPSE: 150
};
var Sections = {
  TOP_FINANCIAL_CONTRIBUTORS: 'top-financial-contributors',
  CONNECTED_COLLECTIVES: 'connected-collectives',
  OUR_TEAM: 'our-team',
  GOALS: 'goals',
  UPDATES: 'updates',
  CONVERSATIONS: 'conversations',
  RECURRING_CONTRIBUTIONS: 'recurring-contributions',
  TICKETS: 'tickets',
  LOCATION: 'location',
  // Navigation v2 main sections
  // CONTRIBUTE/CONTRIBUTIONS
  CONTRIBUTE: 'contribute',
  CONTRIBUTIONS: 'contributions',
  // EVENTS/PROJECTS
  EVENTS: 'events',
  PROJECTS: 'projects',
  // BUDGET/TRANSACTIONS
  TRANSACTIONS: 'transactions',
  BUDGET: 'budget',
  // CONTRIBUTORS/PARTICIPANTS - is this a stand alone or in BUDGET as per Figma??
  CONTRIBUTORS: 'contributors',
  PARTICIPANTS: 'participants',
  // ABOUT
  ABOUT: 'about',
  // EMPTY for new collectives/no data in any category sections
  EMPTY: 'empty'
};
/** A list of all section names */

var AllSectionsNames = Object.values(Sections);

/***/ }),

/***/ 99708:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cr": function() { return /* binding */ isFeatureEnabled; },
/* harmony export */   "h6": function() { return /* binding */ FEATURES; },
/* harmony export */   "zM": function() { return /* binding */ isFeatureSupported; }
/* harmony export */ });
/* unused harmony export FEATURE_FLAGS */
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);



var _FEATURE_FLAGS;

var FEATURES = {
  // Collective page features
  // Please refer to and update https://docs.google.com/spreadsheets/d/15ppKaZJCXBjvY7-AjjCj3w5D-4ebLQdEowynJksgDXE/edit#gid=0
  ABOUT: 'ABOUT',
  RECEIVE_FINANCIAL_CONTRIBUTIONS: 'RECEIVE_FINANCIAL_CONTRIBUTIONS',
  RECURRING_CONTRIBUTIONS: 'RECURRING_CONTRIBUTIONS',
  EVENTS: 'EVENTS',
  PROJECTS: 'PROJECTS',
  USE_EXPENSES: 'USE_EXPENSES',
  RECURRING_EXPENSES: 'RECURRING_EXPENSES',
  RECEIVE_EXPENSES: 'RECEIVE_EXPENSES',
  COLLECTIVE_GOALS: 'COLLECTIVE_GOALS',
  TOP_FINANCIAL_CONTRIBUTORS: 'TOP_FINANCIAL_CONTRIBUTORS',
  CONVERSATIONS: 'CONVERSATIONS',
  UPDATES: 'UPDATES',
  TEAM: 'TEAM',
  ADMIN_PANEL: 'ADMIN_PANEL',
  // Other
  TRANSFERWISE: 'TRANSFERWISE',
  TRANSFERWISE_OTT: 'TRANSFERWISE_OTT',
  TRANSACTIONS: 'TRANSACTIONS',
  PAYPAL_DONATIONS: 'PAYPAL_DONATIONS',
  PAYPAL_PAYOUTS: 'PAYPAL_PAYOUTS',
  VIRTUAL_CARDS: 'VIRTUAL_CARDS',
  MULTI_CURRENCY_EXPENSES: 'MULTI_CURRENCY_EXPENSES',
  // Not implemented in API features endpoint yet
  SUBMIT_EXPENSE_ON_BEHALF: 'SUBMIT_EXPENSE_ON_BEHALF',
  CONTACT_FORM: 'CONTACT_FORM',
  CONNECTED_ACCOUNTS: 'CONNECTED_ACCOUNTS'
};
/**
 * A map of paths to retrieve the value of a feature flag from a collective's settings.
 * 2020-11-19: deprecating: please use collective.features from now on! add it to your
 * page's GraphQL query if needed.
 */

var FEATURE_FLAGS = (_FEATURE_FLAGS = {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_FEATURE_FLAGS, FEATURES.PAYPAL_PAYOUTS, 'settings.features.paypalPayouts'), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_FEATURE_FLAGS, FEATURES.PAYPAL_DONATIONS, 'settings.features.paypalDonations'), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_FEATURE_FLAGS, FEATURES.COLLECTIVE_GOALS, 'settings.collectivePage.showGoals'), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_FEATURE_FLAGS, FEATURES.SUBMIT_EXPENSE_ON_BEHALF, 'settings.features.submitExpenseOnBehalf'), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_FEATURE_FLAGS, FEATURES.VIRTUAL_CARDS, 'settings.features.virtualCards'), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_FEATURE_FLAGS, FEATURES.TRANSFERWISE_OTT, 'settings.transferwise.ott'), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_FEATURE_FLAGS, FEATURES.ADMIN_PANEL, 'settings.features.adminPanel'), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_FEATURE_FLAGS, FEATURES.RECURRING_EXPENSES, 'settings.features.recurringExpenses'), _FEATURE_FLAGS);

var getFeatureStatus = function getFeatureStatus(collective, feature) {
  if (!collective || !collective.features) {
    return 'UNSUPPORTED';
  } else {
    return collective.features[feature];
  }
};
/**
 * Returns true if the given feature is supported for collective (even if disabled)
 */


var isFeatureSupported = function isFeatureSupported(collective, feature) {
  return getFeatureStatus(collective, feature) !== 'UNSUPPORTED';
};
/**
 * Returns true if the feature is either active or available for collective
 */

var isFeatureEnabled = function isFeatureEnabled(collective, feature) {
  var featureStatus = getFeatureStatus(collective, feature);
  return featureStatus === 'ACTIVE' || featureStatus === 'AVAILABLE';
};
/**
 * Check if the given feature is activated for collective.
 * @deprecated Features flag should be checked using `account.features` explicitly, which this helper partially do,
 * but it also checks feature flags in settings. Prefer using `isFeatureEnabled` directly.
 */

var hasFeature = function hasFeature(collective, feature) {
  if (!collective) {
    return false;
  } // Check opt-in flags - to be removed when all features using features endpoint?


  var activationFlag = FEATURE_FLAGS[feature];

  if (activationFlag) {
    return Boolean(lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(collective, activationFlag, false));
  } // New approach: check collective.features


  var featureStatus = getFeatureStatus(collective, feature);

  if (featureStatus === 'ACTIVE' || featureStatus === 'AVAILABLE') {
    return true;
  } else if (featureStatus === 'DISABLED' || featureStatus === 'UNSUPPORTED') {
    return false;
  }

  return true;
};

/* harmony default export */ __webpack_exports__["ZP"] = (hasFeature);

/***/ }),

/***/ 64453:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B_": function() { return /* binding */ isOneOfTypes; },
/* harmony export */   "P9": function() { return /* binding */ isType; },
/* harmony export */   "Qg": function() { return /* binding */ hasSection; },
/* harmony export */   "YH": function() { return /* binding */ getSectionPath; },
/* harmony export */   "gl": function() { return /* binding */ isSectionForAdminsOnly; },
/* harmony export */   "hg": function() { return /* binding */ getCollectiveTypeKey; },
/* harmony export */   "iJ": function() { return /* binding */ getSectionsCategoryDetails; },
/* harmony export */   "sy": function() { return /* binding */ isSectionEnabled; },
/* harmony export */   "t4": function() { return /* binding */ getCollectiveSections; },
/* harmony export */   "vY": function() { return /* binding */ getFilteredSectionsForCollective; },
/* harmony export */   "xE": function() { return /* binding */ getSectionsNames; },
/* harmony export */   "yz": function() { return /* binding */ SECTIONS_CATEGORY_ICON; }
/* harmony export */ });
/* unused harmony exports getSectionCategory, addDefaultSections */
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85564);
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_flatten__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50361);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97585);
/* harmony import */ var _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24839);
/* harmony import */ var _constants_collectives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82525);
/* harmony import */ var _i18n_navbar_categories__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86971);
/* harmony import */ var _allowed_features__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99708);
/* harmony import */ var _collective_lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5700);
/* harmony import */ var _public_static_images_collective_navigation_CollectiveNavbarIconAbout_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(833);
/* harmony import */ var _public_static_images_collective_navigation_CollectiveNavbarIconAbout_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_collective_navigation_CollectiveNavbarIconAbout_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_static_images_collective_navigation_CollectiveNavbarIconBudget_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(12037);
/* harmony import */ var _public_static_images_collective_navigation_CollectiveNavbarIconBudget_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_collective_navigation_CollectiveNavbarIconBudget_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_static_images_collective_navigation_CollectiveNavbarIconConnect_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72354);
/* harmony import */ var _public_static_images_collective_navigation_CollectiveNavbarIconConnect_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_collective_navigation_CollectiveNavbarIconConnect_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _public_static_images_collective_navigation_CollectiveNavbarIconContribute_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24990);
/* harmony import */ var _public_static_images_collective_navigation_CollectiveNavbarIconContribute_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_collective_navigation_CollectiveNavbarIconContribute_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _public_static_images_collective_navigation_CollectiveNavbarIconEvents_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4848);
/* harmony import */ var _public_static_images_collective_navigation_CollectiveNavbarIconEvents_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_collective_navigation_CollectiveNavbarIconEvents_png__WEBPACK_IMPORTED_MODULE_15__);






var _CollectiveType$ORGAN, _RichCollectiveType$H, _RichCollectiveType$A, _CollectiveType$COLLE, _CollectiveType$USER, _CollectiveType$EVENT, _CollectiveType$FUND, _CollectiveType$PROJE, _DEFAULT_SECTIONS, _SECTIONS_CATEGORIES;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }













var RichCollectiveType = _objectSpread(_objectSpread({}, _constants_collectives__WEBPACK_IMPORTED_MODULE_7__/* .CollectiveType */ .eV), {}, {
  HOST_ORGANIZATION: 'HOST_ORGANIZATION',
  ACTIVE_HOST_ORGANIZATION: 'ACTIVE_HOST_ORGANIZATION'
});
/**
 * A map of default sections by collective type.
 * Structure: { collectiveType: { sectionName: isDefaultEnabled } }
 */


var DEFAULT_SECTIONS = (_DEFAULT_SECTIONS = {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_DEFAULT_SECTIONS, _constants_collectives__WEBPACK_IMPORTED_MODULE_7__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION, (_CollectiveType$ORGAN = {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$ORGAN, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONTRIBUTIONS */ .bx.CONTRIBUTIONS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$ORGAN, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.RECURRING_CONTRIBUTIONS */ .bx.RECURRING_CONTRIBUTIONS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$ORGAN, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONNECTED_COLLECTIVES */ .bx.CONNECTED_COLLECTIVES, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$ORGAN, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.TRANSACTIONS */ .bx.TRANSACTIONS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$ORGAN, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.ABOUT */ .bx.ABOUT, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$ORGAN, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.OUR_TEAM */ .bx.OUR_TEAM, true), _CollectiveType$ORGAN)), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_DEFAULT_SECTIONS, RichCollectiveType.HOST_ORGANIZATION, (_RichCollectiveType$H = {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_RichCollectiveType$H, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONTRIBUTIONS */ .bx.CONTRIBUTIONS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_RichCollectiveType$H, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.RECURRING_CONTRIBUTIONS */ .bx.RECURRING_CONTRIBUTIONS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_RichCollectiveType$H, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONNECTED_COLLECTIVES */ .bx.CONNECTED_COLLECTIVES, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_RichCollectiveType$H, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.TRANSACTIONS */ .bx.TRANSACTIONS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_RichCollectiveType$H, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.UPDATES */ .bx.UPDATES, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_RichCollectiveType$H, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONVERSATIONS */ .bx.CONVERSATIONS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_RichCollectiveType$H, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.ABOUT */ .bx.ABOUT, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_RichCollectiveType$H, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.OUR_TEAM */ .bx.OUR_TEAM, true), _RichCollectiveType$H)), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_DEFAULT_SECTIONS, RichCollectiveType.ACTIVE_HOST_ORGANIZATION, (_RichCollectiveType$A = {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_RichCollectiveType$A, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONTRIBUTE */ .bx.CONTRIBUTE, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_RichCollectiveType$A, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.PROJECTS */ .bx.PROJECTS, false), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_RichCollectiveType$A, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.EVENTS */ .bx.EVENTS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_RichCollectiveType$A, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONNECTED_COLLECTIVES */ .bx.CONNECTED_COLLECTIVES, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_RichCollectiveType$A, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.TOP_FINANCIAL_CONTRIBUTORS */ .bx.TOP_FINANCIAL_CONTRIBUTORS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_RichCollectiveType$A, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONTRIBUTORS */ .bx.CONTRIBUTORS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_RichCollectiveType$A, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONTRIBUTIONS */ .bx.CONTRIBUTIONS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_RichCollectiveType$A, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.RECURRING_CONTRIBUTIONS */ .bx.RECURRING_CONTRIBUTIONS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_RichCollectiveType$A, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.BUDGET */ .bx.BUDGET, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_RichCollectiveType$A, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.UPDATES */ .bx.UPDATES, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_RichCollectiveType$A, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONVERSATIONS */ .bx.CONVERSATIONS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_RichCollectiveType$A, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.ABOUT */ .bx.ABOUT, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_RichCollectiveType$A, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.OUR_TEAM */ .bx.OUR_TEAM, true), _RichCollectiveType$A)), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_DEFAULT_SECTIONS, _constants_collectives__WEBPACK_IMPORTED_MODULE_7__/* .CollectiveType.COLLECTIVE */ .eV.COLLECTIVE, (_CollectiveType$COLLE = {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$COLLE, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.GOALS */ .bx.GOALS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$COLLE, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONTRIBUTE */ .bx.CONTRIBUTE, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$COLLE, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.PROJECTS */ .bx.PROJECTS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$COLLE, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.EVENTS */ .bx.EVENTS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$COLLE, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONNECTED_COLLECTIVES */ .bx.CONNECTED_COLLECTIVES, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$COLLE, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.TOP_FINANCIAL_CONTRIBUTORS */ .bx.TOP_FINANCIAL_CONTRIBUTORS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$COLLE, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONTRIBUTORS */ .bx.CONTRIBUTORS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$COLLE, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.RECURRING_CONTRIBUTIONS */ .bx.RECURRING_CONTRIBUTIONS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$COLLE, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.BUDGET */ .bx.BUDGET, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$COLLE, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.UPDATES */ .bx.UPDATES, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$COLLE, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONVERSATIONS */ .bx.CONVERSATIONS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$COLLE, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.ABOUT */ .bx.ABOUT, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$COLLE, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.OUR_TEAM */ .bx.OUR_TEAM, true), _CollectiveType$COLLE)), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_DEFAULT_SECTIONS, _constants_collectives__WEBPACK_IMPORTED_MODULE_7__/* .CollectiveType.USER */ .eV.USER, (_CollectiveType$USER = {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$USER, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONTRIBUTIONS */ .bx.CONTRIBUTIONS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$USER, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.RECURRING_CONTRIBUTIONS */ .bx.RECURRING_CONTRIBUTIONS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$USER, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.BUDGET */ .bx.BUDGET, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$USER, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.ABOUT */ .bx.ABOUT, true), _CollectiveType$USER)), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_DEFAULT_SECTIONS, _constants_collectives__WEBPACK_IMPORTED_MODULE_7__/* .CollectiveType.EVENT */ .eV.EVENT, (_CollectiveType$EVENT = {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$EVENT, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONTRIBUTE */ .bx.CONTRIBUTE, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$EVENT, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.PARTICIPANTS */ .bx.PARTICIPANTS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$EVENT, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONNECTED_COLLECTIVES */ .bx.CONNECTED_COLLECTIVES, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$EVENT, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.UPDATES */ .bx.UPDATES, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$EVENT, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.ABOUT */ .bx.ABOUT, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$EVENT, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.LOCATION */ .bx.LOCATION, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$EVENT, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.OUR_TEAM */ .bx.OUR_TEAM, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$EVENT, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.BUDGET */ .bx.BUDGET, true), _CollectiveType$EVENT)), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_DEFAULT_SECTIONS, _constants_collectives__WEBPACK_IMPORTED_MODULE_7__/* .CollectiveType.FUND */ .eV.FUND, (_CollectiveType$FUND = {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$FUND, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONTRIBUTE */ .bx.CONTRIBUTE, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$FUND, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.RECURRING_CONTRIBUTIONS */ .bx.RECURRING_CONTRIBUTIONS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$FUND, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONTRIBUTORS */ .bx.CONTRIBUTORS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$FUND, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.TOP_FINANCIAL_CONTRIBUTORS */ .bx.TOP_FINANCIAL_CONTRIBUTORS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$FUND, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.PROJECTS */ .bx.PROJECTS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$FUND, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONNECTED_COLLECTIVES */ .bx.CONNECTED_COLLECTIVES, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$FUND, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.UPDATES */ .bx.UPDATES, false), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$FUND, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.BUDGET */ .bx.BUDGET, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$FUND, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.ABOUT */ .bx.ABOUT, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$FUND, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.OUR_TEAM */ .bx.OUR_TEAM, true), _CollectiveType$FUND)), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_DEFAULT_SECTIONS, _constants_collectives__WEBPACK_IMPORTED_MODULE_7__/* .CollectiveType.PROJECT */ .eV.PROJECT, (_CollectiveType$PROJE = {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$PROJE, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.GOALS */ .bx.GOALS, false), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$PROJE, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.ABOUT */ .bx.ABOUT, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$PROJE, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.OUR_TEAM */ .bx.OUR_TEAM, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$PROJE, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONTRIBUTE */ .bx.CONTRIBUTE, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$PROJE, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONTRIBUTORS */ .bx.CONTRIBUTORS, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$PROJE, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONNECTED_COLLECTIVES */ .bx.CONNECTED_COLLECTIVES, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$PROJE, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.BUDGET */ .bx.BUDGET, true), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_CollectiveType$PROJE, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.UPDATES */ .bx.UPDATES, false), _CollectiveType$PROJE)), _DEFAULT_SECTIONS);
var getCollectiveTypeKey = function getCollectiveTypeKey(type, isHost, isActive) {
  if (type === 'INDIVIDUAL') {
    // Layer of compatibility with GQLV2
    return _constants_collectives__WEBPACK_IMPORTED_MODULE_7__/* .CollectiveType.USER */ .eV.USER;
  } else if (type === 'ORGANIZATION' && isHost) {
    return isActive ? RichCollectiveType.ACTIVE_HOST_ORGANIZATION : RichCollectiveType.HOST_ORGANIZATION;
  }

  return type;
};
/**
 * Returns all the sections than can be used for this collective type
 */

var getDefaultSectionsForCollectiveType = function getDefaultSectionsForCollectiveType(type, isHost, isActive) {
  var typeKey = getCollectiveTypeKey(type, isHost, isActive);
  return DEFAULT_SECTIONS[typeKey] || [];
};

var filterSectionsByData = function filterSectionsByData(sections, collective, isAdmin, isHostAdmin) {
  var toRemove = getSectionsToRemoveForUser(collective, isAdmin);

  var checkSectionActive = function checkSectionActive(section) {
    var _section$restrictedTo;

    if (toRemove.has(section.name) || !section.isEnabled) {
      return false;
    } else if ((_section$restrictedTo = section.restrictedTo) !== null && _section$restrictedTo !== void 0 && _section$restrictedTo.includes('ADMIN')) {
      return isAdmin || isHostAdmin;
    } else {
      return true;
    }
  };

  sections = sections.filter(function (e) {
    return e.type !== 'SECTION' || checkSectionActive(e);
  });
  sections.forEach(function (e) {
    if (e.type === 'CATEGORY') {
      e.sections = e.sections.filter(checkSectionActive);
    }
  }); // Filter empty categories

  return sections.filter(function (e) {
    return e.type !== 'CATEGORY' || e.sections.length > 0;
  });
};

var showContributeSection = function showContributeSection(collective, isAdmin) {
  var _collective$features;

  var status = collective === null || collective === void 0 ? void 0 : (_collective$features = collective.features) === null || _collective$features === void 0 ? void 0 : _collective$features[_allowed_features__WEBPACK_IMPORTED_MODULE_9__/* .FEATURES.RECEIVE_FINANCIAL_CONTRIBUTIONS */ .h6.RECEIVE_FINANCIAL_CONTRIBUTIONS];
  return ['ACTIVE', 'AVAILABLE'].includes(status) || isAdmin; // Allow admins to see/edit tiers, even if not active/past event
};

var getSectionsToRemoveForUser = function getSectionsToRemoveForUser(collective, isAdmin) {
  var _collective$memberOf, _collective$coreContr, _collective$financial;

  var toRemove = new Set();
  collective = collective || {};
  var features = collective.features || {};

  var hasAccessToFeature = function hasAccessToFeature(feature) {
    var status = features[feature];
    return status === 'ACTIVE' || status === 'AVAILABLE' && isAdmin;
  };

  if (!showContributeSection(collective, isAdmin)) {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONTRIBUTE */ .bx.CONTRIBUTE);
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.TOP_FINANCIAL_CONTRIBUTORS */ .bx.TOP_FINANCIAL_CONTRIBUTORS);
  }

  if (features[_allowed_features__WEBPACK_IMPORTED_MODULE_9__/* .FEATURES.RECEIVE_FINANCIAL_CONTRIBUTIONS */ .h6.RECEIVE_FINANCIAL_CONTRIBUTIONS] !== 'ACTIVE') {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.PARTICIPANTS */ .bx.PARTICIPANTS);
  }

  if (!hasAccessToFeature(_allowed_features__WEBPACK_IMPORTED_MODULE_9__/* .FEATURES.PROJECTS */ .h6.PROJECTS)) {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.PROJECTS */ .bx.PROJECTS);
  }

  if (!hasAccessToFeature(_allowed_features__WEBPACK_IMPORTED_MODULE_9__/* .FEATURES.COLLECTIVE_GOALS */ .h6.COLLECTIVE_GOALS)) {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.GOALS */ .bx.GOALS);
  }

  if (features[_allowed_features__WEBPACK_IMPORTED_MODULE_9__/* .FEATURES.RECURRING_CONTRIBUTIONS */ .h6.RECURRING_CONTRIBUTIONS] !== 'ACTIVE') {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.RECURRING_CONTRIBUTIONS */ .bx.RECURRING_CONTRIBUTIONS);
  }

  if (features[_allowed_features__WEBPACK_IMPORTED_MODULE_9__/* .FEATURES.TRANSACTIONS */ .h6.TRANSACTIONS] !== 'ACTIVE') {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.TRANSACTIONS */ .bx.TRANSACTIONS);
  }

  if (!hasAccessToFeature(_allowed_features__WEBPACK_IMPORTED_MODULE_9__/* .FEATURES.EVENTS */ .h6.EVENTS)) {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.EVENTS */ .bx.EVENTS);
  }

  if (!hasAccessToFeature(_allowed_features__WEBPACK_IMPORTED_MODULE_9__/* .FEATURES.UPDATES */ .h6.UPDATES)) {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.UPDATES */ .bx.UPDATES);
  }

  if (!hasAccessToFeature(_allowed_features__WEBPACK_IMPORTED_MODULE_9__/* .FEATURES.CONVERSATIONS */ .h6.CONVERSATIONS)) {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONVERSATIONS */ .bx.CONVERSATIONS);
  }

  if (features[_allowed_features__WEBPACK_IMPORTED_MODULE_9__/* .FEATURES.CONNECTED_ACCOUNTS */ .h6.CONNECTED_ACCOUNTS] !== 'ACTIVE') {
    // If there's no connected accounts, there's no benefit in enabling the section as it will return null anyway
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONNECTED_COLLECTIVES */ .bx.CONNECTED_COLLECTIVES);
  }

  if (!hasAccessToFeature(_allowed_features__WEBPACK_IMPORTED_MODULE_9__/* .FEATURES.ABOUT */ .h6.ABOUT)) {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.ABOUT */ .bx.ABOUT);
  }

  if (!((_collective$memberOf = collective.memberOf) !== null && _collective$memberOf !== void 0 && _collective$memberOf.length)) {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONTRIBUTIONS */ .bx.CONTRIBUTIONS);
  }

  if ((0,_collective_lib__WEBPACK_IMPORTED_MODULE_10__/* .isEmptyCollectiveLocation */ .yE)(collective)) {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.LOCATION */ .bx.LOCATION);
  }

  if (((_collective$coreContr = collective.coreContributors) === null || _collective$coreContr === void 0 ? void 0 : _collective$coreContr.length) === 0 && ((_collective$financial = collective.financialContributors) === null || _collective$financial === void 0 ? void 0 : _collective$financial.length) === 0) {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONTRIBUTORS */ .bx.CONTRIBUTORS);
  }

  if (features[_allowed_features__WEBPACK_IMPORTED_MODULE_9__/* .FEATURES.TRANSACTIONS */ .h6.TRANSACTIONS] !== 'ACTIVE' && features[_allowed_features__WEBPACK_IMPORTED_MODULE_9__/* .FEATURES.RECEIVE_EXPENSES */ .h6.RECEIVE_EXPENSES] !== 'ACTIVE') {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.BUDGET */ .bx.BUDGET);
  }

  return toRemove;
};
/**
 * Loads collective's sections from settings, adding the default sections to them
 */


var getCollectiveSections = function getCollectiveSections(collective) {
  var sections = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(collective, 'settings.collectivePage.sections');

  return addDefaultSections(collective, sections || []);
};
/**
 * Combine all the previous steps to directly get the sections that should be
 * displayed for the user.
 */

var getFilteredSectionsForCollective = function getFilteredSectionsForCollective(collective, isAdmin, isHostAdmin) {
  var sections = getCollectiveSections(collective);
  return filterSectionsByData(sections, collective, isAdmin, isHostAdmin);
};
/**
 * Map sections to their categories. Any section that's not in this object will be considered
 * as a "Widget" (aka. a section without navbar category).
 */

var SECTIONS_CATEGORIES = (_SECTIONS_CATEGORIES = {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_SECTIONS_CATEGORIES, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.OUR_TEAM */ .bx.OUR_TEAM, _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_5__/* .NAVBAR_CATEGORIES.ABOUT */ .t.ABOUT), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_SECTIONS_CATEGORIES, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.ABOUT */ .bx.ABOUT, _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_5__/* .NAVBAR_CATEGORIES.ABOUT */ .t.ABOUT), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_SECTIONS_CATEGORIES, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.LOCATION */ .bx.LOCATION, _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_5__/* .NAVBAR_CATEGORIES.ABOUT */ .t.ABOUT), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_SECTIONS_CATEGORIES, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONVERSATIONS */ .bx.CONVERSATIONS, _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_5__/* .NAVBAR_CATEGORIES.CONNECT */ .t.CONNECT), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_SECTIONS_CATEGORIES, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.UPDATES */ .bx.UPDATES, _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_5__/* .NAVBAR_CATEGORIES.CONNECT */ .t.CONNECT), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_SECTIONS_CATEGORIES, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.TICKETS */ .bx.TICKETS, _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_5__/* .NAVBAR_CATEGORIES.CONTRIBUTE */ .t.CONTRIBUTE), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_SECTIONS_CATEGORIES, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONTRIBUTE */ .bx.CONTRIBUTE, _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_5__/* .NAVBAR_CATEGORIES.CONTRIBUTE */ .t.CONTRIBUTE), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_SECTIONS_CATEGORIES, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONTRIBUTORS */ .bx.CONTRIBUTORS, _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_5__/* .NAVBAR_CATEGORIES.CONTRIBUTE */ .t.CONTRIBUTE), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_SECTIONS_CATEGORIES, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.TOP_FINANCIAL_CONTRIBUTORS */ .bx.TOP_FINANCIAL_CONTRIBUTORS, _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_5__/* .NAVBAR_CATEGORIES.CONTRIBUTE */ .t.CONTRIBUTE), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_SECTIONS_CATEGORIES, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.PARTICIPANTS */ .bx.PARTICIPANTS, _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_5__/* .NAVBAR_CATEGORIES.CONTRIBUTE */ .t.CONTRIBUTE), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_SECTIONS_CATEGORIES, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.EVENTS */ .bx.EVENTS, _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_5__/* .NAVBAR_CATEGORIES.CONTRIBUTE */ .t.CONTRIBUTE), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_SECTIONS_CATEGORIES, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.PROJECTS */ .bx.PROJECTS, _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_5__/* .NAVBAR_CATEGORIES.CONTRIBUTE */ .t.CONTRIBUTE), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_SECTIONS_CATEGORIES, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONNECTED_COLLECTIVES */ .bx.CONNECTED_COLLECTIVES, _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_5__/* .NAVBAR_CATEGORIES.CONTRIBUTE */ .t.CONTRIBUTE), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_SECTIONS_CATEGORIES, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONTRIBUTIONS */ .bx.CONTRIBUTIONS, _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_5__/* .NAVBAR_CATEGORIES.CONTRIBUTIONS */ .t.CONTRIBUTIONS), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_SECTIONS_CATEGORIES, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.RECURRING_CONTRIBUTIONS */ .bx.RECURRING_CONTRIBUTIONS, _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_5__/* .NAVBAR_CATEGORIES.CONTRIBUTIONS */ .t.CONTRIBUTIONS), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_SECTIONS_CATEGORIES, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.BUDGET */ .bx.BUDGET, _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_5__/* .NAVBAR_CATEGORIES.BUDGET */ .t.BUDGET), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_SECTIONS_CATEGORIES, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.TRANSACTIONS */ .bx.TRANSACTIONS, _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_5__/* .NAVBAR_CATEGORIES.BUDGET */ .t.BUDGET), _SECTIONS_CATEGORIES);
var getSectionCategory = function getSectionCategory(sectionName) {
  return SECTIONS_CATEGORIES[sectionName];
};
/**
 * Return all section names as an array of string
 */

var getSectionsNames = function getSectionsNames(sections) {
  return lodash_flatten__WEBPACK_IMPORTED_MODULE_3___default()(sections.map(function (e) {
    if (typeof e === 'string') {
      return e;
    } else if (e.type === 'SECTION') {
      return e.name;
    } else if (e.type === 'CATEGORY' && e.sections) {
      return getSectionsNames(e.sections);
    }
  }).filter(Boolean));
};
/**
 * Return the path of the section in `sections`. Works with both legacy & new format.
 * @returns {string|null}
 */

var getSectionPath = function getSectionPath(sections, sectionName) {
  if (!(sections !== null && sections !== void 0 && sections.length)) {
    return null;
  } else {
    // New format
    var categoryName = SECTIONS_CATEGORIES[sectionName];

    if (categoryName) {
      var categoryIdx = sections.findIndex(function (s) {
        return s.type === 'CATEGORY' && s.name === categoryName;
      });

      if (categoryIdx !== -1) {
        var sectionIdx = sections[categoryIdx].sections.findIndex(function (s) {
          return s.name === sectionName;
        });

        if (sectionIdx !== -1) {
          return "".concat(categoryIdx, ".sections.").concat(sectionIdx);
        }
      }
    } else {
      var idx = sections.findIndex(function (s) {
        return s.name === sectionName;
      });

      if (idx !== -1) {
        return idx.toString();
      }
    }
  }

  return null;
};
var hasSection = function hasSection(sections, sectionName) {
  var path = getSectionPath(sections, sectionName);

  if (path) {
    return lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(sections, path).isEnabled;
  } else {
    return false;
  }
};
var isSectionEnabled = function isSectionEnabled(sections, sectionName, isAdmin) {
  var path = getSectionPath(sections, sectionName);

  if (path) {
    var _section$restrictedTo2;

    var section = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(sections, path);

    return section.isEnabled || isAdmin && ((_section$restrictedTo2 = section.restrictedTo) === null || _section$restrictedTo2 === void 0 ? void 0 : _section$restrictedTo2.includes('ADMIN'));
  } else {
    return false;
  }
};
var isSectionForAdminsOnly = function isSectionForAdminsOnly(collective, sectionName) {
  var sections = getCollectiveSections(collective);
  var path = getSectionPath(sections, sectionName);

  if (path) {
    var _get$restrictedTo;

    return Boolean((_get$restrictedTo = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(sections, path).restrictedTo) === null || _get$restrictedTo === void 0 ? void 0 : _get$restrictedTo.includes('ADMIN'));
  } else {
    return false;
  }
};
/**
 * Adds the default sections that are not yet defined in `sections`, with `isEnabled` to false.
 * Useful to make sure newly added sections/categories are added on legacy collectives.
 */

var addDefaultSections = function addDefaultSections(collective, sections) {
  if (!collective) {
    return [];
  }

  var newSections = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4___default()(sections || []);

  var defaultSections = getDefaultSectionsForCollectiveType(collective.type, collective.isHost, collective.isActive);
  Object.entries(defaultSections).forEach(function (_ref) {
    var _ref2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
        section = _ref2[0],
        defaultIsEnabled = _ref2[1];

    var sectionPath = getSectionPath(sections, section);

    if (!sectionPath) {
      var categoryName = getSectionCategory(section);

      if (categoryName) {
        var category = newSections.find(function (e) {
          return e.type === 'CATEGORY' && e.name === categoryName;
        });

        if (!category) {
          category = {
            type: 'CATEGORY',
            name: categoryName,
            sections: []
          };
          newSections.push(category);
        }

        category.sections.push({
          type: 'SECTION',
          name: section,
          isEnabled: defaultIsEnabled
        });
      } else {
        newSections.push({
          type: 'SECTION',
          name: section,
          isEnabled: defaultIsEnabled
        });
      }
    }
  });
  return newSections;
};
var isType = function isType(c, collectiveType) {
  return getCollectiveTypeKey(c.type) === collectiveType;
};
var isOneOfTypes = function isOneOfTypes(c, collectiveTypes) {
  return collectiveTypes.includes(getCollectiveTypeKey(c.type));
};
var SECTIONS_CATEGORY_ICON = {
  ABOUT: (_public_static_images_collective_navigation_CollectiveNavbarIconAbout_png__WEBPACK_IMPORTED_MODULE_11___default()),
  BUDGET: (_public_static_images_collective_navigation_CollectiveNavbarIconBudget_png__WEBPACK_IMPORTED_MODULE_12___default()),
  CONNECT: (_public_static_images_collective_navigation_CollectiveNavbarIconConnect_png__WEBPACK_IMPORTED_MODULE_13___default()),
  CONTRIBUTE: (_public_static_images_collective_navigation_CollectiveNavbarIconContribute_png__WEBPACK_IMPORTED_MODULE_14___default()),
  CONTRIBUTIONS: (_public_static_images_collective_navigation_CollectiveNavbarIconContribute_png__WEBPACK_IMPORTED_MODULE_14___default()),
  EVENTS: (_public_static_images_collective_navigation_CollectiveNavbarIconEvents_png__WEBPACK_IMPORTED_MODULE_15___default())
};
var getSectionsCategoryDetails = function getSectionsCategoryDetails(intl, collective, category) {
  // Default category details
  var details = {
    img: SECTIONS_CATEGORY_ICON[category],
    title: (0,_i18n_navbar_categories__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(intl, category)
  };

  if (!details.title) {
    return null;
  } // Special customization on some sections


  if (category === _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_5__/* .NAVBAR_CATEGORIES.CONTRIBUTE */ .t.CONTRIBUTE) {
    var canReceiveContributions = (0,_allowed_features__WEBPACK_IMPORTED_MODULE_9__/* .isFeatureEnabled */ .cr)(collective, _allowed_features__WEBPACK_IMPORTED_MODULE_9__/* .FEATURES.RECEIVE_FINANCIAL_CONTRIBUTIONS */ .h6.RECEIVE_FINANCIAL_CONTRIBUTIONS);

    if (!canReceiveContributions) {
      details.title = intl.formatMessage({
        id: "section.contributors.title",
        defaultMessage: [{
          "type": 0,
          "value": "Contributors"
        }]
      });
    } else if (collective.type === _constants_collectives__WEBPACK_IMPORTED_MODULE_7__/* .CollectiveType.EVENT */ .eV.EVENT) {
      details.title = intl.formatMessage({
        id: "iUxV8v",
        defaultMessage: [{
          "type": 0,
          "value": "Get Involved"
        }]
      });
      details.subtitle = intl.formatMessage({
        id: "9MpOZn",
        defaultMessage: [{
          "type": 0,
          "value": "Support the event or buy tickets."
        }]
      });
      details.info = intl.formatMessage({
        id: "ZvWD3X",
        defaultMessage: [{
          "type": 0,
          "value": "Support the event or buy tickets to attend."
        }]
      });
    } else {
      details.subtitle = intl.formatMessage({
        id: "CollectivePage.SectionContribute.Subtitle",
        defaultMessage: [{
          "type": 0,
          "value": "Become a financial contributor."
        }]
      });
      details.info = intl.formatMessage({
        id: "CollectivePage.SectionContribute.info",
        defaultMessage: [{
          "type": 0,
          "value": "Support "
        }, {
          "type": 1,
          "value": "collectiveName"
        }, {
          "type": 0,
          "value": " by contributing to them once, monthly, or yearly."
        }]
      }, {
        collectiveName: collective.name
      });
    }
  } else if (category === _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_5__/* .NAVBAR_CATEGORIES.BUDGET */ .t.BUDGET) {
    details.subtitle = intl.formatMessage({
      id: "CollectivePage.SectionBudget.Subtitle",
      defaultMessage: [{
        "type": 0,
        "value": "Transparent and open finances."
      }]
    });
    details.info = intl.formatMessage({
      id: "CollectivePage.SectionBudget.Description",
      defaultMessage: [{
        "type": 0,
        "value": "See how funds circulate through "
      }, {
        "type": 1,
        "value": "collectiveName"
      }, {
        "type": 0,
        "value": ". Contributions and expenses are transparent. Learn where the money comes from and where it goes."
      }]
    }, {
      collectiveName: collective.name
    });
  } else if (category === _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_5__/* .NAVBAR_CATEGORIES.CONNECT */ .t.CONNECT) {
    details.subtitle = intl.formatMessage({
      id: "section.connect.subtitle",
      defaultMessage: [{
        "type": 0,
        "value": "Let’s get the ball rolling!"
      }]
    });
    details.info = intl.formatMessage({
      id: "section.connect.info",
      defaultMessage: [{
        "type": 0,
        "value": "Start conversations with your community or share updates on how things are going."
      }]
    });
  }

  return details;
};

/***/ }),

/***/ 5700:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CJ": function() { return /* binding */ getCollectiveMainTag; },
/* harmony export */   "Cl": function() { return /* binding */ getLegacyIdForCollective; },
/* harmony export */   "Eq": function() { return /* binding */ isSelfHostedAccount; },
/* harmony export */   "Nq": function() { return /* binding */ getTopContributors; },
/* harmony export */   "P5": function() { return /* binding */ getSuggestedTags; },
/* harmony export */   "Sh": function() { return /* binding */ isIndividualAccount; },
/* harmony export */   "XA": function() { return /* binding */ hostIsTaxDeductibleInTheUs; },
/* harmony export */   "XN": function() { return /* binding */ formatAccountName; },
/* harmony export */   "Xq": function() { return /* binding */ getCollectivePageMetadata; },
/* harmony export */   "aD": function() { return /* binding */ isHostAccount; },
/* harmony export */   "cm": function() { return /* binding */ expenseSubmissionAllowed; },
/* harmony export */   "dj": function() { return /* binding */ compareNames; },
/* harmony export */   "e4": function() { return /* binding */ suggestSlug; },
/* harmony export */   "ex": function() { return /* binding */ loggedInUserCanAccessFinancialData; },
/* harmony export */   "nu": function() { return /* binding */ canContributeRecurring; },
/* harmony export */   "oe": function() { return /* binding */ getContributeRoute; },
/* harmony export */   "rf": function() { return /* binding */ getCollectiveTypeForUrl; },
/* harmony export */   "yE": function() { return /* binding */ isEmptyCollectiveLocation; }
/* harmony export */ });
/* harmony import */ var lodash_trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92742);
/* harmony import */ var lodash_trim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_trim__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31304);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24839);
/* harmony import */ var _constants_collectives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82525);
/* harmony import */ var _constants_payment_methods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1808);
/* harmony import */ var _constants_roles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98216);
/* harmony import */ var _collective_sections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64453);
/* harmony import */ var _url_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25896);



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








/**
 * For a given host and/or a list of tags, returns the main tag for the category of the
 * collective. If none matches, defaults to `CollectiveCategory.COLLECTIVE`
 */

var getCollectiveMainTag = function getCollectiveMainTag() {
  var hostCollectiveId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var tags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var type = arguments.length > 2 ? arguments[2] : undefined;
  var settings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  // All collectives from "Open Source Collective 501c3" are set to "Open source" category
  if (hostCollectiveId === _constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .OPENSOURCE_COLLECTIVE_ID */ .kp) {
    return _constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveCategory.OPEN_SOURCE */ .B3.OPEN_SOURCE;
  } // Try to guess the main category from tags


  if (tags) {
    var tagWithCategory = tags.find(function (tag) {
      return _constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveTagsCategories */ .ng[tag];
    });

    if (tagWithCategory) {
      var category = _constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveTagsCategories */ .ng[tagWithCategory];
      return _constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveCategory */ .B3[category];
    }
  } // Try to get from the type


  if (type === _constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveType.EVENT */ .eV.EVENT) {
    return _constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveCategory.EVENT */ .B3.EVENT;
  } else if (type === _constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION) {
    return _constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveCategory.ORGANIZATION */ .B3.ORGANIZATION;
  } else if (type === _constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveType.USER */ .eV.USER) {
    return _constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveCategory.USER */ .B3.USER;
  } else if (type === _constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveType.PROJECT */ .eV.PROJECT) {
    return _constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveCategory.PROJECT */ .B3.PROJECT;
  } else if (type === _constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveType.FUND */ .eV.FUND) {
    return _constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveCategory.FUND */ .B3.FUND;
  } // Funds MVP, to refactor


  if (settings && settings.fund) {
    return _constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveCategory.FUND */ .B3.FUND;
  } // Default to 'Collective'


  return _constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveCategory.COLLECTIVE */ .B3.COLLECTIVE;
};
var expenseSubmissionAllowed = function expenseSubmissionAllowed(collective, user) {
  var _collective$settings;

  if (!(collective !== null && collective !== void 0 && (_collective$settings = collective.settings) !== null && _collective$settings !== void 0 && _collective$settings.disablePublicExpenseSubmission)) {
    return true;
  }

  if (user !== null && user !== void 0 && user.isRoot || user !== null && user !== void 0 && user.isAdminOfCollectiveOrHost(collective)) {
    return true;
  }

  return user === null || user === void 0 ? void 0 : user.memberOf.some(function (member) {
    return member.collective.slug === collective.slug;
  });
};
var getCollectiveTypeForUrl = function getCollectiveTypeForUrl(collective) {
  if (!collective) {
    return;
  }

  if (collective.type === 'EVENT') {
    return 'events';
  }

  if (collective.type === 'PROJECT') {
    return 'projects';
  }
};
var hostIsTaxDeductibleInTheUs = function hostIsTaxDeductibleInTheUs(host) {
  return lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(host, 'settings.taxDeductibleDonations');
};
var suggestSlug = function suggestSlug(value) {
  var slugOptions = {
    replacement: '-',
    lower: true,
    strict: true
  };
  return lodash_trim__WEBPACK_IMPORTED_MODULE_0___default()(slugify__WEBPACK_IMPORTED_MODULE_2___default()(value, slugOptions), '-');
};
var getTopContributors = function getTopContributors(contributors) {
  var topOrgs = [];
  var topIndividuals = [];

  var _iterator = _createForOfIteratorHelper(contributors),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var contributor = _step.value;

      // We only care about financial contributors that donated $$$
      if (!contributor.isBacker || !contributor.totalAmountDonated) {
        continue;
      } // Put contributors in the array corresponding to their types


      if (contributor.type === _constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveType.USER */ .eV.USER) {
        topIndividuals.push(contributor);
      } else if ([_constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION, _constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveType.COLLECTIVE */ .eV.COLLECTIVE, _constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveType.FUND */ .eV.FUND].includes(contributor.type)) {
        topOrgs.push(contributor);
      }

      if (topIndividuals.length >= 10 && topOrgs.length >= 10) {
        break;
      }
    } // If one of the two categories is not filled, complete with more contributors from the other

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var nbColsPerCategory = 2;
  var nbFreeColsFromOrgs = nbColsPerCategory - Math.ceil(topOrgs.length / 5);
  var nbFreeColsFromIndividuals = nbColsPerCategory - Math.ceil(topOrgs.length / 5);
  var takeNbOrgs = 10;
  var takeNbIndividuals = 10;

  if (nbFreeColsFromOrgs > 0) {
    takeNbIndividuals += nbFreeColsFromOrgs * 5;
  } else if (nbFreeColsFromIndividuals > 0) {
    takeNbOrgs += nbFreeColsFromIndividuals * 5;
  }

  return [topOrgs.slice(0, takeNbOrgs), topIndividuals.slice(0, takeNbIndividuals)];
};
var isEmptyCollectiveLocation = function isEmptyCollectiveLocation(account) {
  if (!(account !== null && account !== void 0 && account.location)) {
    return true;
  } else {
    var _account$location = account.location,
        name = _account$location.name,
        address = _account$location.address,
        country = _account$location.country,
        lat = _account$location.lat,
        _long = _account$location["long"];
    return !(address || country || lat && _long) && name !== 'Online';
  }
};
var getContributeRoute = function getContributeRoute(collective) {
  var pathname = "".concat((0,_url_helpers__WEBPACK_IMPORTED_MODULE_8__/* .getCollectivePageRoute */ .x0)(collective), "/donate");

  if (lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(collective, 'settings.disableCustomContributions', false) && lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(collective, 'settings.disableCryptoContributions', true)) {
    if (collective.tiers && collective.tiers.length > 0) {
      var tier = collective.tiers[0];
      pathname = "".concat((0,_url_helpers__WEBPACK_IMPORTED_MODULE_8__/* .getCollectivePageRoute */ .x0)(collective), "/contribute/").concat(tier.slug, "-").concat(tier.id, "/checkout");
    } else {
      return null;
    }
  }

  return pathname;
};
var getSuggestedTags = function getSuggestedTags(collective) {
  var _collective$expensesT;

  return (collective === null || collective === void 0 ? void 0 : (_collective$expensesT = collective.expensesTags) === null || _collective$expensesT === void 0 ? void 0 : _collective$expensesT.map(function (_ref) {
    var tag = _ref.tag;
    return tag;
  })) || [];
};
/** Checks if recurring contributions are allowed for the user for a given collective **/

var canContributeRecurring = function canContributeRecurring(collective, user) {
  // If the host has a payment method that supports recurring payments (PayPal, Credit Card, etc.)
  var paymentProviderSupportRecurring = function paymentProviderSupportRecurring(pm) {
    return _constants_payment_methods__WEBPACK_IMPORTED_MODULE_5__/* .ProvidersWithRecurringPaymentSupport.includes */ .Yp.includes(pm);
  };

  if (collective.host.supportedPaymentMethods.some(paymentProviderSupportRecurring)) {
    return true;
  } // Otherwise the only other option to contribute recurring is if the user is an admin of another collective under the same host


  var hostId = collective.host.legacyId;
  var collectiveId = collective.legacyId;
  return Boolean(user === null || user === void 0 ? void 0 : user.memberOf.some(function (member) {
    var _member$collective, _member$collective$ho;

    return ((_member$collective = member.collective) === null || _member$collective === void 0 ? void 0 : (_member$collective$ho = _member$collective.host) === null || _member$collective$ho === void 0 ? void 0 : _member$collective$ho.id) === hostId && // Must be under the same host
    member.collective.id !== collectiveId && // Must not be the same collective
    member.role === _constants_roles__WEBPACK_IMPORTED_MODULE_6__/* ["default"].ADMIN */ .Z.ADMIN;
  }));
};
/*
 * Displays the name string as "Legal name (Display name)" if legal name exists.
 * Example: Sudharaka (Suds)
 */

var formatAccountName = function formatAccountName(displayName, legalName) {
  if (!legalName) {
    return displayName;
  } else if (legalName === displayName || legalName.includes(displayName)) {
    return legalName;
  } else {
    return "".concat(legalName, " (").concat(displayName, ")");
  }
};
/*
 * Validate the account holder name against the legal name. Following cases are considered a match,
 *
 * 1) Punctuation are ignored; "Evil Corp, Inc" and "Evil Corp, Inc." are considered a match.
 * 2) Accents are ignored; "François" and "Francois" are considered a match.
 * 3) The first name and last name order is ignored; "Benjamin Piouffle" and "Piouffle Benjamin" is considered a match.
 */

var compareNames = function compareNames(accountHolderName, legalName) {
  var _legalName, _accountHolderName;

  // Ignore 501(c)(3) in both account holder name and legal name
  legalName = ((_legalName = legalName) === null || _legalName === void 0 ? void 0 : _legalName.replaceAll('501(c)(3)', '')) || '';
  accountHolderName = ((_accountHolderName = accountHolderName) === null || _accountHolderName === void 0 ? void 0 : _accountHolderName.replaceAll('501(c)(3)', '')) || '';
  var namesArray = legalName.trim().split(' ');
  var legalNameReversed;

  if (namesArray.length === 2) {
    var firstName = namesArray[0];
    var lastName = namesArray[1];
    legalNameReversed = "".concat(lastName, " ").concat(firstName);
  }

  return !(accountHolderName.localeCompare(legalName, undefined, {
    sensitivity: 'base',
    ignorePunctuation: true
  }) && accountHolderName.localeCompare(legalNameReversed, undefined, {
    sensitivity: 'base',
    ignorePunctuation: true
  }));
};
/* Returns true if the account is a fiscal host. Returns false for self-hosted accounts */

var isHostAccount = function isHostAccount(c) {
  return c.isHost === true && c.type !== 'COLLECTIVE';
};
/* Returns true if the account is self-hosted */

var isSelfHostedAccount = function isSelfHostedAccount(c) {
  return c.isHost === true && c.type === 'COLLECTIVE';
};
/* Returns true if the account is an individual. Works with GQLV1 (Collectives) & GQLV2 (Accounts) */

var isIndividualAccount = function isIndividualAccount(account) {
  return ['USER', 'INDIVIDUAL'].includes(account.type);
};
var loggedInUserCanAccessFinancialData = function loggedInUserCanAccessFinancialData(user, collective) {
  if (!(0,_collective_sections__WEBPACK_IMPORTED_MODULE_7__/* .isSectionForAdminsOnly */ .gl)(collective, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_3__/* .Sections.BUDGET */ .bx.BUDGET)) {
    return true;
  } else if (!user) {
    return false;
  } else {
    return user.isRoot || user.isAdminOfCollectiveOrHost(collective);
  }
};
/** A small helper to get the integer legacy ID for a collective/account. Works with GQLV1 and GQLV2. */

var getLegacyIdForCollective = function getLegacyIdForCollective(collective) {
  if (!collective) {
    return null;
  } else if (typeof collective.id === 'number') {
    return collective.id;
  } else if (typeof collective.legacyId === 'number') {
    return collective.legacyId;
  }
};
/**
 * Returns the base metadata to pass to `Page` with things like title, description or image
 * properly set with the collective's info.
 */

var getCollectivePageMetadata = function getCollectivePageMetadata(collective) {
  var defaultImage = '/static/images/defaultBackgroundImage.png';

  if (collective) {
    var parent = collective.parentCollective || collective.parent;
    return {
      title: collective.name,
      description: collective.description,
      twitterHandle: collective.twitterHandle || lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(collective.parentCollective, 'twitterHandle'),
      noRobots: collective.type === 'USER' && !collective.isHost,
      image: collective.backgroundImageUrl || collective.backgroundImage || // From GraphQL v1
      collective.imageUrl || collective.image || // From GraphQL v1
      lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(parent, 'backgroundImageUrl') || lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(parent, 'backgroundImage') || // From GraphQL v1
      lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(parent, 'imageUrl') || lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(parent, 'image') || // From GraphQL v1
      defaultImage
    };
  } else {
    return {
      title: 'Collective',
      image: defaultImage
    };
  }
};

/***/ }),

/***/ 1808:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VX": function() { return /* binding */ matchPm; },
/* harmony export */   "Yp": function() { return /* binding */ ProvidersWithRecurringPaymentSupport; },
/* harmony export */   "bk": function() { return /* binding */ isPrepaid; },
/* harmony export */   "fY": function() { return /* binding */ GQLV2_SUPPORTED_PAYMENT_METHOD_TYPES; },
/* harmony export */   "oy": function() { return /* binding */ GQLV2_PAYMENT_METHOD_LEGACY_TYPES; },
/* harmony export */   "td": function() { return /* binding */ PAYMENT_METHOD_TYPE; },
/* harmony export */   "tp": function() { return /* binding */ PAYMENT_METHOD_SERVICE; }
/* harmony export */ });
var PAYMENT_METHOD_SERVICE = {
  PAYPAL: 'PAYPAL',
  STRIPE: 'STRIPE',
  OPENCOLLECTIVE: 'OPENCOLLECTIVE',
  THEGIVINGBLOCK: 'THEGIVINGBLOCK'
};
var PAYMENT_METHOD_TYPE = {
  ALIPAY: 'ALIPAY',
  CREDITCARD: 'CREDITCARD',
  PREPAID: 'PREPAID',
  PAYMENT: 'PAYMENT',
  SUBSCRIPTION: 'SUBSCRIPTION',
  COLLECTIVE: 'COLLECTIVE',
  HOST: 'HOST',
  ADAPTIVE: 'ADAPTIVE',
  GIFTCARD: 'GIFTCARD',
  MANUAL: 'MANUAL',
  CRYPTO: 'CRYPTO',
  PAYMENT_INTENT: 'PAYMENT_INTENT',
  US_BANK_ACCOUNT: 'US_BANK_ACCOUNT',
  SEPA_DEBIT: 'SEPA_DEBIT',
  BACS_DEBIT: 'BACS_DEBIT',
  BANCONTACT: 'BANCONTACT'
};
var GQLV2_PAYMENT_METHOD_LEGACY_TYPES = {
  ACCOUNT_BALANCE: 'ACCOUNT_BALANCE',
  ALIPAY: 'ALIPAY',
  BANK_TRANSFER: 'BANK_TRANSFER',
  CREDIT_CARD: 'CREDIT_CARD',
  CRYPTO: 'CRYPTO',
  GIFT_CARD: 'GIFT_CARD',
  PAYPAL: 'PAYPAL',
  PREPAID_BUDGET: 'PREPAID_BUDGET'
};
var GQLV2_SUPPORTED_PAYMENT_METHOD_TYPES = {
  ALIPAY: GQLV2_PAYMENT_METHOD_LEGACY_TYPES.ALIPAY,
  BANK_TRANSFER: GQLV2_PAYMENT_METHOD_LEGACY_TYPES.BANK_TRANSFER,
  CREDIT_CARD: GQLV2_PAYMENT_METHOD_LEGACY_TYPES.CREDIT_CARD,
  PAYPAL: GQLV2_PAYMENT_METHOD_LEGACY_TYPES.PAYPAL,
  PAYMENT_INTENT: PAYMENT_METHOD_TYPE.PAYMENT_INTENT
};
var matchPm = function matchPm(pm, service, type) {
  return pm && pm.service === service && pm.type === type;
};
/** Returns true if the given payment method is a prepaid */

var isPrepaid = function isPrepaid(pm) {
  return matchPm(pm, PAYMENT_METHOD_SERVICE.OPENCOLLECTIVE, PAYMENT_METHOD_TYPE.PREPAID);
};
/** Returns payment methods with recurring payment support **/

var ProvidersWithRecurringPaymentSupport = [GQLV2_PAYMENT_METHOD_LEGACY_TYPES.CREDIT_CARD, GQLV2_PAYMENT_METHOD_LEGACY_TYPES.PAYPAL, GQLV2_PAYMENT_METHOD_LEGACY_TYPES.ACCOUNT_BALANCE];

/***/ }),

/***/ 86971:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59448);
/* harmony import */ var _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97585);


var _defineMessages;



var I18N_CATEGORIES = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)((_defineMessages = {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_1__/* .NAVBAR_CATEGORIES.ABOUT */ .t.ABOUT, {
  id: "collective.about.title",
  defaultMessage: [{
    "type": 0,
    "value": "About"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_1__/* .NAVBAR_CATEGORIES.BUDGET */ .t.BUDGET, {
  id: "section.budget.title",
  defaultMessage: [{
    "type": 0,
    "value": "Budget"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_1__/* .NAVBAR_CATEGORIES.CONNECT */ .t.CONNECT, {
  id: "CollectivePage.SectionConnect.Title",
  defaultMessage: [{
    "type": 0,
    "value": "Connect"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_1__/* .NAVBAR_CATEGORIES.CONTRIBUTE */ .t.CONTRIBUTE, {
  id: "Contribute",
  defaultMessage: [{
    "type": 0,
    "value": "Contribute"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_1__/* .NAVBAR_CATEGORIES.CONTRIBUTIONS */ .t.CONTRIBUTIONS, {
  id: "Contributions",
  defaultMessage: [{
    "type": 0,
    "value": "Contributions"
  }]
}), _defineMessages));

var i18nNavbarCategory = function i18nNavbarCategory(intl, category) {
  return I18N_CATEGORIES[category] ? intl.formatMessage(I18N_CATEGORIES[category]) : category;
};

/* harmony default export */ __webpack_exports__["Z"] = (i18nNavbarCategory);

/***/ })

}]);
//# sourceMappingURL=1012-8e439bd4be49ca92.js.map