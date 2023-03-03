exports.id = 1012;
exports.ids = [1012];
exports.modules = {

/***/ 833:
/***/ ((module) => {

module.exports = "/_next/static/images/CollectiveNavbarIconAbout-c908a14c8bb1e826b98291fc2d96f73c.png";

/***/ }),

/***/ 12037:
/***/ ((module) => {

module.exports = "/_next/static/images/CollectiveNavbarIconBudget-905099b5e3610be9c44217314f08a030.png";

/***/ }),

/***/ 72354:
/***/ ((module) => {

module.exports = "/_next/static/images/CollectiveNavbarIconConnect-4f0d6dda87e4fe0dc3beda6866e2d629.png";

/***/ }),

/***/ 24990:
/***/ ((module) => {

module.exports = "/_next/static/images/CollectiveNavbarIconContribute-acd3951c7ccb1748a48b9f8fe8100c6f.png";

/***/ }),

/***/ 4848:
/***/ ((module) => {

module.exports = "/_next/static/images/CollectiveNavbarIconEvents-6b8c5ac73d47d019dad5a8623a27ba2a.png";

/***/ }),

/***/ 97585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ NAVBAR_CATEGORIES)
/* harmony export */ });
const NAVBAR_CATEGORIES = {
  ABOUT: 'ABOUT',
  BUDGET: 'BUDGET',
  CONNECT: 'CONNECT',
  CONTRIBUTE: 'CONTRIBUTE',
  CONTRIBUTIONS: 'CONTRIBUTIONS',
  EVENTS: 'EVENTS' // Events, projects, connected collectives

};

/***/ }),

/***/ 24839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Db": () => (/* binding */ Dimensions),
/* harmony export */   "bx": () => (/* binding */ Sections)
/* harmony export */ });
/* unused harmony exports AnimationsDurations, AllSectionsNames */
/**
 * Shared dimensions between collective page's components
 */
const Dimensions = {
  PADDING_X: [15, 30],
  MAX_SECTION_WIDTH: 1260
};
/**
 * Durations for page animations
 */

const AnimationsDurations = {
  HERO_COLLAPSE: 150
};
const Sections = {
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

const AllSectionsNames = Object.values(Sections);

/***/ }),

/***/ 99708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "cr": () => (/* binding */ isFeatureEnabled),
/* harmony export */   "h6": () => (/* binding */ FEATURES),
/* harmony export */   "zM": () => (/* binding */ isFeatureSupported)
/* harmony export */ });
/* unused harmony export FEATURE_FLAGS */
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);

const FEATURES = {
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

const FEATURE_FLAGS = {
  // note: need to add collective.features to expenses query for PayExpenseModal
  [FEATURES.PAYPAL_PAYOUTS]: 'settings.features.paypalPayouts',
  [FEATURES.PAYPAL_DONATIONS]: 'settings.features.paypalDonations',
  // collective page features
  [FEATURES.COLLECTIVE_GOALS]: 'settings.collectivePage.showGoals',
  // other features
  [FEATURES.SUBMIT_EXPENSE_ON_BEHALF]: 'settings.features.submitExpenseOnBehalf',
  [FEATURES.VIRTUAL_CARDS]: 'settings.features.virtualCards',
  [FEATURES.TRANSFERWISE_OTT]: 'settings.transferwise.ott',
  [FEATURES.ADMIN_PANEL]: 'settings.features.adminPanel',
  [FEATURES.RECURRING_EXPENSES]: 'settings.features.recurringExpenses'
};

const getFeatureStatus = (collective, feature) => {
  if (!collective || !collective.features) {
    return 'UNSUPPORTED';
  } else {
    return collective.features[feature];
  }
};
/**
 * Returns true if the given feature is supported for collective (even if disabled)
 */


const isFeatureSupported = (collective, feature) => {
  return getFeatureStatus(collective, feature) !== 'UNSUPPORTED';
};
/**
 * Returns true if the feature is either active or available for collective
 */

const isFeatureEnabled = (collective, feature) => {
  const featureStatus = getFeatureStatus(collective, feature);
  return featureStatus === 'ACTIVE' || featureStatus === 'AVAILABLE';
};
/**
 * Check if the given feature is activated for collective.
 * @deprecated Features flag should be checked using `account.features` explicitly, which this helper partially do,
 * but it also checks feature flags in settings. Prefer using `isFeatureEnabled` directly.
 */

const hasFeature = (collective, feature) => {
  if (!collective) {
    return false;
  } // Check opt-in flags - to be removed when all features using features endpoint?


  const activationFlag = FEATURE_FLAGS[feature];

  if (activationFlag) {
    return Boolean(lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(collective, activationFlag, false));
  } // New approach: check collective.features


  const featureStatus = getFeatureStatus(collective, feature);

  if (featureStatus === 'ACTIVE' || featureStatus === 'AVAILABLE') {
    return true;
  } else if (featureStatus === 'DISABLED' || featureStatus === 'UNSUPPORTED') {
    return false;
  }

  return true;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hasFeature);

/***/ }),

/***/ 64453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B_": () => (/* binding */ isOneOfTypes),
/* harmony export */   "P9": () => (/* binding */ isType),
/* harmony export */   "Qg": () => (/* binding */ hasSection),
/* harmony export */   "YH": () => (/* binding */ getSectionPath),
/* harmony export */   "gl": () => (/* binding */ isSectionForAdminsOnly),
/* harmony export */   "hg": () => (/* binding */ getCollectiveTypeKey),
/* harmony export */   "iJ": () => (/* binding */ getSectionsCategoryDetails),
/* harmony export */   "sy": () => (/* binding */ isSectionEnabled),
/* harmony export */   "t4": () => (/* binding */ getCollectiveSections),
/* harmony export */   "vY": () => (/* binding */ getFilteredSectionsForCollective),
/* harmony export */   "xE": () => (/* binding */ getSectionsNames),
/* harmony export */   "yz": () => (/* binding */ SECTIONS_CATEGORY_ICON)
/* harmony export */ });
/* unused harmony exports getSectionCategory, addDefaultSections */
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58579);
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_flatten__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59591);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97585);
/* harmony import */ var _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24839);
/* harmony import */ var _constants_collectives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82525);
/* harmony import */ var _i18n_navbar_categories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86971);
/* harmony import */ var _allowed_features__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99708);
/* harmony import */ var _collective_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5700);
/* harmony import */ var _public_static_images_collective_navigation_CollectiveNavbarIconAbout_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(833);
/* harmony import */ var _public_static_images_collective_navigation_CollectiveNavbarIconAbout_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_collective_navigation_CollectiveNavbarIconAbout_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_static_images_collective_navigation_CollectiveNavbarIconBudget_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12037);
/* harmony import */ var _public_static_images_collective_navigation_CollectiveNavbarIconBudget_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_collective_navigation_CollectiveNavbarIconBudget_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_static_images_collective_navigation_CollectiveNavbarIconConnect_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72354);
/* harmony import */ var _public_static_images_collective_navigation_CollectiveNavbarIconConnect_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_collective_navigation_CollectiveNavbarIconConnect_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_static_images_collective_navigation_CollectiveNavbarIconContribute_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24990);
/* harmony import */ var _public_static_images_collective_navigation_CollectiveNavbarIconContribute_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_collective_navigation_CollectiveNavbarIconContribute_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_static_images_collective_navigation_CollectiveNavbarIconEvents_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4848);
/* harmony import */ var _public_static_images_collective_navigation_CollectiveNavbarIconEvents_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_collective_navigation_CollectiveNavbarIconEvents_png__WEBPACK_IMPORTED_MODULE_13__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const RichCollectiveType = _objectSpread(_objectSpread({}, _constants_collectives__WEBPACK_IMPORTED_MODULE_5__/* .CollectiveType */ .eV), {}, {
  HOST_ORGANIZATION: 'HOST_ORGANIZATION',
  ACTIVE_HOST_ORGANIZATION: 'ACTIVE_HOST_ORGANIZATION'
});
/**
 * A map of default sections by collective type.
 * Structure: { collectiveType: { sectionName: isDefaultEnabled } }
 */


const DEFAULT_SECTIONS = {
  [_constants_collectives__WEBPACK_IMPORTED_MODULE_5__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION]: {
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONTRIBUTIONS */ .bx.CONTRIBUTIONS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.RECURRING_CONTRIBUTIONS */ .bx.RECURRING_CONTRIBUTIONS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONNECTED_COLLECTIVES */ .bx.CONNECTED_COLLECTIVES]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.TRANSACTIONS */ .bx.TRANSACTIONS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.ABOUT */ .bx.ABOUT]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.OUR_TEAM */ .bx.OUR_TEAM]: true
  },
  [RichCollectiveType.HOST_ORGANIZATION]: {
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONTRIBUTIONS */ .bx.CONTRIBUTIONS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.RECURRING_CONTRIBUTIONS */ .bx.RECURRING_CONTRIBUTIONS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONNECTED_COLLECTIVES */ .bx.CONNECTED_COLLECTIVES]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.TRANSACTIONS */ .bx.TRANSACTIONS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.UPDATES */ .bx.UPDATES]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONVERSATIONS */ .bx.CONVERSATIONS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.ABOUT */ .bx.ABOUT]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.OUR_TEAM */ .bx.OUR_TEAM]: true
  },
  [RichCollectiveType.ACTIVE_HOST_ORGANIZATION]: {
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONTRIBUTE */ .bx.CONTRIBUTE]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.PROJECTS */ .bx.PROJECTS]: false,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.EVENTS */ .bx.EVENTS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONNECTED_COLLECTIVES */ .bx.CONNECTED_COLLECTIVES]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.TOP_FINANCIAL_CONTRIBUTORS */ .bx.TOP_FINANCIAL_CONTRIBUTORS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONTRIBUTORS */ .bx.CONTRIBUTORS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONTRIBUTIONS */ .bx.CONTRIBUTIONS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.RECURRING_CONTRIBUTIONS */ .bx.RECURRING_CONTRIBUTIONS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.BUDGET */ .bx.BUDGET]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.UPDATES */ .bx.UPDATES]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONVERSATIONS */ .bx.CONVERSATIONS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.ABOUT */ .bx.ABOUT]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.OUR_TEAM */ .bx.OUR_TEAM]: true
  },
  [_constants_collectives__WEBPACK_IMPORTED_MODULE_5__/* .CollectiveType.COLLECTIVE */ .eV.COLLECTIVE]: {
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.GOALS */ .bx.GOALS]: true,
    // TODO: Should be false, but we must first migrate the checkbox from `components/edit-collective/sections/CollectiveGoals.js`
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONTRIBUTE */ .bx.CONTRIBUTE]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.PROJECTS */ .bx.PROJECTS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.EVENTS */ .bx.EVENTS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONNECTED_COLLECTIVES */ .bx.CONNECTED_COLLECTIVES]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.TOP_FINANCIAL_CONTRIBUTORS */ .bx.TOP_FINANCIAL_CONTRIBUTORS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONTRIBUTORS */ .bx.CONTRIBUTORS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.RECURRING_CONTRIBUTIONS */ .bx.RECURRING_CONTRIBUTIONS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.BUDGET */ .bx.BUDGET]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.UPDATES */ .bx.UPDATES]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONVERSATIONS */ .bx.CONVERSATIONS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.ABOUT */ .bx.ABOUT]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.OUR_TEAM */ .bx.OUR_TEAM]: true
  },
  [_constants_collectives__WEBPACK_IMPORTED_MODULE_5__/* .CollectiveType.USER */ .eV.USER]: {
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONTRIBUTIONS */ .bx.CONTRIBUTIONS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.RECURRING_CONTRIBUTIONS */ .bx.RECURRING_CONTRIBUTIONS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.BUDGET */ .bx.BUDGET]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.ABOUT */ .bx.ABOUT]: true
  },
  [_constants_collectives__WEBPACK_IMPORTED_MODULE_5__/* .CollectiveType.EVENT */ .eV.EVENT]: {
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONTRIBUTE */ .bx.CONTRIBUTE]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.PARTICIPANTS */ .bx.PARTICIPANTS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONNECTED_COLLECTIVES */ .bx.CONNECTED_COLLECTIVES]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.UPDATES */ .bx.UPDATES]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.ABOUT */ .bx.ABOUT]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.LOCATION */ .bx.LOCATION]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.OUR_TEAM */ .bx.OUR_TEAM]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.BUDGET */ .bx.BUDGET]: true
  },
  [_constants_collectives__WEBPACK_IMPORTED_MODULE_5__/* .CollectiveType.FUND */ .eV.FUND]: {
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONTRIBUTE */ .bx.CONTRIBUTE]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.RECURRING_CONTRIBUTIONS */ .bx.RECURRING_CONTRIBUTIONS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONTRIBUTORS */ .bx.CONTRIBUTORS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.TOP_FINANCIAL_CONTRIBUTORS */ .bx.TOP_FINANCIAL_CONTRIBUTORS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.PROJECTS */ .bx.PROJECTS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONNECTED_COLLECTIVES */ .bx.CONNECTED_COLLECTIVES]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.UPDATES */ .bx.UPDATES]: false,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.BUDGET */ .bx.BUDGET]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.ABOUT */ .bx.ABOUT]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.OUR_TEAM */ .bx.OUR_TEAM]: true
  },
  [_constants_collectives__WEBPACK_IMPORTED_MODULE_5__/* .CollectiveType.PROJECT */ .eV.PROJECT]: {
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.GOALS */ .bx.GOALS]: false,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.ABOUT */ .bx.ABOUT]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.OUR_TEAM */ .bx.OUR_TEAM]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONTRIBUTE */ .bx.CONTRIBUTE]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONTRIBUTORS */ .bx.CONTRIBUTORS]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONNECTED_COLLECTIVES */ .bx.CONNECTED_COLLECTIVES]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.BUDGET */ .bx.BUDGET]: true,
    [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.UPDATES */ .bx.UPDATES]: false
  }
};
const getCollectiveTypeKey = (type, isHost, isActive) => {
  if (type === 'INDIVIDUAL') {
    // Layer of compatibility with GQLV2
    return _constants_collectives__WEBPACK_IMPORTED_MODULE_5__/* .CollectiveType.USER */ .eV.USER;
  } else if (type === 'ORGANIZATION' && isHost) {
    return isActive ? RichCollectiveType.ACTIVE_HOST_ORGANIZATION : RichCollectiveType.HOST_ORGANIZATION;
  }

  return type;
};
/**
 * Returns all the sections than can be used for this collective type
 */

const getDefaultSectionsForCollectiveType = (type, isHost, isActive) => {
  const typeKey = getCollectiveTypeKey(type, isHost, isActive);
  return DEFAULT_SECTIONS[typeKey] || [];
};

const filterSectionsByData = (sections, collective, isAdmin, isHostAdmin) => {
  const toRemove = getSectionsToRemoveForUser(collective, isAdmin);

  const checkSectionActive = section => {
    if (toRemove.has(section.name) || !section.isEnabled) {
      return false;
    } else if (section.restrictedTo?.includes('ADMIN')) {
      return isAdmin || isHostAdmin;
    } else {
      return true;
    }
  };

  sections = sections.filter(e => e.type !== 'SECTION' || checkSectionActive(e));
  sections.forEach(e => {
    if (e.type === 'CATEGORY') {
      e.sections = e.sections.filter(checkSectionActive);
    }
  }); // Filter empty categories

  return sections.filter(e => e.type !== 'CATEGORY' || e.sections.length > 0);
};

const showContributeSection = (collective, isAdmin) => {
  const status = collective?.features?.[_allowed_features__WEBPACK_IMPORTED_MODULE_7__/* .FEATURES.RECEIVE_FINANCIAL_CONTRIBUTIONS */ .h6.RECEIVE_FINANCIAL_CONTRIBUTIONS];
  return ['ACTIVE', 'AVAILABLE'].includes(status) || isAdmin; // Allow admins to see/edit tiers, even if not active/past event
};

const getSectionsToRemoveForUser = (collective, isAdmin) => {
  const toRemove = new Set();
  collective = collective || {};
  const features = collective.features || {};

  const hasAccessToFeature = feature => {
    const status = features[feature];
    return status === 'ACTIVE' || status === 'AVAILABLE' && isAdmin;
  };

  if (!showContributeSection(collective, isAdmin)) {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONTRIBUTE */ .bx.CONTRIBUTE);
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.TOP_FINANCIAL_CONTRIBUTORS */ .bx.TOP_FINANCIAL_CONTRIBUTORS);
  }

  if (features[_allowed_features__WEBPACK_IMPORTED_MODULE_7__/* .FEATURES.RECEIVE_FINANCIAL_CONTRIBUTIONS */ .h6.RECEIVE_FINANCIAL_CONTRIBUTIONS] !== 'ACTIVE') {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.PARTICIPANTS */ .bx.PARTICIPANTS);
  }

  if (!hasAccessToFeature(_allowed_features__WEBPACK_IMPORTED_MODULE_7__/* .FEATURES.PROJECTS */ .h6.PROJECTS)) {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.PROJECTS */ .bx.PROJECTS);
  }

  if (!hasAccessToFeature(_allowed_features__WEBPACK_IMPORTED_MODULE_7__/* .FEATURES.COLLECTIVE_GOALS */ .h6.COLLECTIVE_GOALS)) {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.GOALS */ .bx.GOALS);
  }

  if (features[_allowed_features__WEBPACK_IMPORTED_MODULE_7__/* .FEATURES.RECURRING_CONTRIBUTIONS */ .h6.RECURRING_CONTRIBUTIONS] !== 'ACTIVE') {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.RECURRING_CONTRIBUTIONS */ .bx.RECURRING_CONTRIBUTIONS);
  }

  if (features[_allowed_features__WEBPACK_IMPORTED_MODULE_7__/* .FEATURES.TRANSACTIONS */ .h6.TRANSACTIONS] !== 'ACTIVE') {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.TRANSACTIONS */ .bx.TRANSACTIONS);
  }

  if (!hasAccessToFeature(_allowed_features__WEBPACK_IMPORTED_MODULE_7__/* .FEATURES.EVENTS */ .h6.EVENTS)) {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.EVENTS */ .bx.EVENTS);
  }

  if (!hasAccessToFeature(_allowed_features__WEBPACK_IMPORTED_MODULE_7__/* .FEATURES.UPDATES */ .h6.UPDATES)) {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.UPDATES */ .bx.UPDATES);
  }

  if (!hasAccessToFeature(_allowed_features__WEBPACK_IMPORTED_MODULE_7__/* .FEATURES.CONVERSATIONS */ .h6.CONVERSATIONS)) {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONVERSATIONS */ .bx.CONVERSATIONS);
  }

  if (features[_allowed_features__WEBPACK_IMPORTED_MODULE_7__/* .FEATURES.CONNECTED_ACCOUNTS */ .h6.CONNECTED_ACCOUNTS] !== 'ACTIVE') {
    // If there's no connected accounts, there's no benefit in enabling the section as it will return null anyway
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONNECTED_COLLECTIVES */ .bx.CONNECTED_COLLECTIVES);
  }

  if (!hasAccessToFeature(_allowed_features__WEBPACK_IMPORTED_MODULE_7__/* .FEATURES.ABOUT */ .h6.ABOUT)) {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.ABOUT */ .bx.ABOUT);
  }

  if (!collective.memberOf?.length) {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONTRIBUTIONS */ .bx.CONTRIBUTIONS);
  }

  if ((0,_collective_lib__WEBPACK_IMPORTED_MODULE_8__/* .isEmptyCollectiveLocation */ .yE)(collective)) {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.LOCATION */ .bx.LOCATION);
  }

  if (collective.coreContributors?.length === 0 && collective.financialContributors?.length === 0) {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONTRIBUTORS */ .bx.CONTRIBUTORS);
  }

  if (features[_allowed_features__WEBPACK_IMPORTED_MODULE_7__/* .FEATURES.TRANSACTIONS */ .h6.TRANSACTIONS] !== 'ACTIVE' && features[_allowed_features__WEBPACK_IMPORTED_MODULE_7__/* .FEATURES.RECEIVE_EXPENSES */ .h6.RECEIVE_EXPENSES] !== 'ACTIVE') {
    toRemove.add(_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.BUDGET */ .bx.BUDGET);
  }

  return toRemove;
};
/**
 * Loads collective's sections from settings, adding the default sections to them
 */


const getCollectiveSections = collective => {
  const sections = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(collective, 'settings.collectivePage.sections');

  return addDefaultSections(collective, sections || []);
};
/**
 * Combine all the previous steps to directly get the sections that should be
 * displayed for the user.
 */

const getFilteredSectionsForCollective = (collective, isAdmin, isHostAdmin) => {
  const sections = getCollectiveSections(collective);
  return filterSectionsByData(sections, collective, isAdmin, isHostAdmin);
};
/**
 * Map sections to their categories. Any section that's not in this object will be considered
 * as a "Widget" (aka. a section without navbar category).
 */

const SECTIONS_CATEGORIES = {
  // About
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.OUR_TEAM */ .bx.OUR_TEAM]: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_3__/* .NAVBAR_CATEGORIES.ABOUT */ .t.ABOUT,
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.ABOUT */ .bx.ABOUT]: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_3__/* .NAVBAR_CATEGORIES.ABOUT */ .t.ABOUT,
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.LOCATION */ .bx.LOCATION]: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_3__/* .NAVBAR_CATEGORIES.ABOUT */ .t.ABOUT,
  // Connect
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONVERSATIONS */ .bx.CONVERSATIONS]: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_3__/* .NAVBAR_CATEGORIES.CONNECT */ .t.CONNECT,
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.UPDATES */ .bx.UPDATES]: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_3__/* .NAVBAR_CATEGORIES.CONNECT */ .t.CONNECT,
  // Contribute
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.TICKETS */ .bx.TICKETS]: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_3__/* .NAVBAR_CATEGORIES.CONTRIBUTE */ .t.CONTRIBUTE,
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONTRIBUTE */ .bx.CONTRIBUTE]: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_3__/* .NAVBAR_CATEGORIES.CONTRIBUTE */ .t.CONTRIBUTE,
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONTRIBUTORS */ .bx.CONTRIBUTORS]: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_3__/* .NAVBAR_CATEGORIES.CONTRIBUTE */ .t.CONTRIBUTE,
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.TOP_FINANCIAL_CONTRIBUTORS */ .bx.TOP_FINANCIAL_CONTRIBUTORS]: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_3__/* .NAVBAR_CATEGORIES.CONTRIBUTE */ .t.CONTRIBUTE,
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.PARTICIPANTS */ .bx.PARTICIPANTS]: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_3__/* .NAVBAR_CATEGORIES.CONTRIBUTE */ .t.CONTRIBUTE,
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.EVENTS */ .bx.EVENTS]: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_3__/* .NAVBAR_CATEGORIES.CONTRIBUTE */ .t.CONTRIBUTE,
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.PROJECTS */ .bx.PROJECTS]: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_3__/* .NAVBAR_CATEGORIES.CONTRIBUTE */ .t.CONTRIBUTE,
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONNECTED_COLLECTIVES */ .bx.CONNECTED_COLLECTIVES]: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_3__/* .NAVBAR_CATEGORIES.CONTRIBUTE */ .t.CONTRIBUTE,
  // Contributions
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.CONTRIBUTIONS */ .bx.CONTRIBUTIONS]: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_3__/* .NAVBAR_CATEGORIES.CONTRIBUTIONS */ .t.CONTRIBUTIONS,
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.RECURRING_CONTRIBUTIONS */ .bx.RECURRING_CONTRIBUTIONS]: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_3__/* .NAVBAR_CATEGORIES.CONTRIBUTIONS */ .t.CONTRIBUTIONS,
  // Budget
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.BUDGET */ .bx.BUDGET]: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_3__/* .NAVBAR_CATEGORIES.BUDGET */ .t.BUDGET,
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_4__/* .Sections.TRANSACTIONS */ .bx.TRANSACTIONS]: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_3__/* .NAVBAR_CATEGORIES.BUDGET */ .t.BUDGET
};
const getSectionCategory = sectionName => {
  return SECTIONS_CATEGORIES[sectionName];
};
/**
 * Return all section names as an array of string
 */

const getSectionsNames = sections => {
  return lodash_flatten__WEBPACK_IMPORTED_MODULE_1___default()(sections.map(e => {
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

const getSectionPath = (sections, sectionName) => {
  if (!sections?.length) {
    return null;
  } else {
    // New format
    const categoryName = SECTIONS_CATEGORIES[sectionName];

    if (categoryName) {
      const categoryIdx = sections.findIndex(s => s.type === 'CATEGORY' && s.name === categoryName);

      if (categoryIdx !== -1) {
        const sectionIdx = sections[categoryIdx].sections.findIndex(s => s.name === sectionName);

        if (sectionIdx !== -1) {
          return `${categoryIdx}.sections.${sectionIdx}`;
        }
      }
    } else {
      const idx = sections.findIndex(s => s.name === sectionName);

      if (idx !== -1) {
        return idx.toString();
      }
    }
  }

  return null;
};
const hasSection = (sections, sectionName) => {
  const path = getSectionPath(sections, sectionName);

  if (path) {
    return lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(sections, path).isEnabled;
  } else {
    return false;
  }
};
const isSectionEnabled = (sections, sectionName, isAdmin) => {
  const path = getSectionPath(sections, sectionName);

  if (path) {
    const section = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(sections, path);

    return section.isEnabled || isAdmin && section.restrictedTo?.includes('ADMIN');
  } else {
    return false;
  }
};
const isSectionForAdminsOnly = (collective, sectionName) => {
  const sections = getCollectiveSections(collective);
  const path = getSectionPath(sections, sectionName);

  if (path) {
    return Boolean(lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(sections, path).restrictedTo?.includes('ADMIN'));
  } else {
    return false;
  }
};
/**
 * Adds the default sections that are not yet defined in `sections`, with `isEnabled` to false.
 * Useful to make sure newly added sections/categories are added on legacy collectives.
 */

const addDefaultSections = (collective, sections) => {
  if (!collective) {
    return [];
  }

  const newSections = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(sections || []);

  const defaultSections = getDefaultSectionsForCollectiveType(collective.type, collective.isHost, collective.isActive);
  Object.entries(defaultSections).forEach(([section, defaultIsEnabled]) => {
    const sectionPath = getSectionPath(sections, section);

    if (!sectionPath) {
      const categoryName = getSectionCategory(section);

      if (categoryName) {
        let category = newSections.find(e => e.type === 'CATEGORY' && e.name === categoryName);

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
const isType = (c, collectiveType) => getCollectiveTypeKey(c.type) === collectiveType;
const isOneOfTypes = (c, collectiveTypes) => collectiveTypes.includes(getCollectiveTypeKey(c.type));
const SECTIONS_CATEGORY_ICON = {
  ABOUT: (_public_static_images_collective_navigation_CollectiveNavbarIconAbout_png__WEBPACK_IMPORTED_MODULE_9___default()),
  BUDGET: (_public_static_images_collective_navigation_CollectiveNavbarIconBudget_png__WEBPACK_IMPORTED_MODULE_10___default()),
  CONNECT: (_public_static_images_collective_navigation_CollectiveNavbarIconConnect_png__WEBPACK_IMPORTED_MODULE_11___default()),
  CONTRIBUTE: (_public_static_images_collective_navigation_CollectiveNavbarIconContribute_png__WEBPACK_IMPORTED_MODULE_12___default()),
  CONTRIBUTIONS: (_public_static_images_collective_navigation_CollectiveNavbarIconContribute_png__WEBPACK_IMPORTED_MODULE_12___default()),
  EVENTS: (_public_static_images_collective_navigation_CollectiveNavbarIconEvents_png__WEBPACK_IMPORTED_MODULE_13___default())
};
const getSectionsCategoryDetails = (intl, collective, category) => {
  // Default category details
  const details = {
    img: SECTIONS_CATEGORY_ICON[category],
    title: (0,_i18n_navbar_categories__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(intl, category)
  };

  if (!details.title) {
    return null;
  } // Special customization on some sections


  if (category === _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_3__/* .NAVBAR_CATEGORIES.CONTRIBUTE */ .t.CONTRIBUTE) {
    const canReceiveContributions = (0,_allowed_features__WEBPACK_IMPORTED_MODULE_7__/* .isFeatureEnabled */ .cr)(collective, _allowed_features__WEBPACK_IMPORTED_MODULE_7__/* .FEATURES.RECEIVE_FINANCIAL_CONTRIBUTIONS */ .h6.RECEIVE_FINANCIAL_CONTRIBUTIONS);

    if (!canReceiveContributions) {
      details.title = intl.formatMessage({
        id: "section.contributors.title",
        defaultMessage: [{
          "type": 0,
          "value": "Contributors"
        }]
      });
    } else if (collective.type === _constants_collectives__WEBPACK_IMPORTED_MODULE_5__/* .CollectiveType.EVENT */ .eV.EVENT) {
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
  } else if (category === _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_3__/* .NAVBAR_CATEGORIES.BUDGET */ .t.BUDGET) {
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
  } else if (category === _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_3__/* .NAVBAR_CATEGORIES.CONNECT */ .t.CONNECT) {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CJ": () => (/* binding */ getCollectiveMainTag),
/* harmony export */   "Cl": () => (/* binding */ getLegacyIdForCollective),
/* harmony export */   "Eq": () => (/* binding */ isSelfHostedAccount),
/* harmony export */   "Nq": () => (/* binding */ getTopContributors),
/* harmony export */   "P5": () => (/* binding */ getSuggestedTags),
/* harmony export */   "Sh": () => (/* binding */ isIndividualAccount),
/* harmony export */   "XA": () => (/* binding */ hostIsTaxDeductibleInTheUs),
/* harmony export */   "XN": () => (/* binding */ formatAccountName),
/* harmony export */   "Xq": () => (/* binding */ getCollectivePageMetadata),
/* harmony export */   "aD": () => (/* binding */ isHostAccount),
/* harmony export */   "cm": () => (/* binding */ expenseSubmissionAllowed),
/* harmony export */   "dj": () => (/* binding */ compareNames),
/* harmony export */   "e4": () => (/* binding */ suggestSlug),
/* harmony export */   "ex": () => (/* binding */ loggedInUserCanAccessFinancialData),
/* harmony export */   "nu": () => (/* binding */ canContributeRecurring),
/* harmony export */   "oe": () => (/* binding */ getContributeRoute),
/* harmony export */   "rf": () => (/* binding */ getCollectiveTypeForUrl),
/* harmony export */   "yE": () => (/* binding */ isEmptyCollectiveLocation)
/* harmony export */ });
/* harmony import */ var lodash_trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75142);
/* harmony import */ var lodash_trim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_trim__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73673);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24839);
/* harmony import */ var _constants_collectives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82525);
/* harmony import */ var _constants_payment_methods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1808);
/* harmony import */ var _constants_roles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98216);
/* harmony import */ var _collective_sections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64453);
/* harmony import */ var _url_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25896);









/**
 * For a given host and/or a list of tags, returns the main tag for the category of the
 * collective. If none matches, defaults to `CollectiveCategory.COLLECTIVE`
 */

const getCollectiveMainTag = (hostCollectiveId = null, tags = [], type, settings = null) => {
  // All collectives from "Open Source Collective 501c3" are set to "Open source" category
  if (hostCollectiveId === _constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .OPENSOURCE_COLLECTIVE_ID */ .kp) {
    return _constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveCategory.OPEN_SOURCE */ .B3.OPEN_SOURCE;
  } // Try to guess the main category from tags


  if (tags) {
    const tagWithCategory = tags.find(tag => _constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveTagsCategories */ .ng[tag]);

    if (tagWithCategory) {
      const category = _constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveTagsCategories */ .ng[tagWithCategory];
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
const expenseSubmissionAllowed = (collective, user) => {
  if (!collective?.settings?.disablePublicExpenseSubmission) {
    return true;
  }

  if (user?.isRoot || user?.isAdminOfCollectiveOrHost(collective)) {
    return true;
  }

  return user?.memberOf.some(member => member.collective.slug === collective.slug);
};
const getCollectiveTypeForUrl = collective => {
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
const hostIsTaxDeductibleInTheUs = host => {
  return lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(host, 'settings.taxDeductibleDonations');
};
const suggestSlug = value => {
  const slugOptions = {
    replacement: '-',
    lower: true,
    strict: true
  };
  return lodash_trim__WEBPACK_IMPORTED_MODULE_0___default()(slugify__WEBPACK_IMPORTED_MODULE_2___default()(value, slugOptions), '-');
};
const getTopContributors = contributors => {
  const topOrgs = [];
  const topIndividuals = [];

  for (const contributor of contributors) {
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


  const nbColsPerCategory = 2;
  const nbFreeColsFromOrgs = nbColsPerCategory - Math.ceil(topOrgs.length / 5);
  const nbFreeColsFromIndividuals = nbColsPerCategory - Math.ceil(topOrgs.length / 5);
  let takeNbOrgs = 10;
  let takeNbIndividuals = 10;

  if (nbFreeColsFromOrgs > 0) {
    takeNbIndividuals += nbFreeColsFromOrgs * 5;
  } else if (nbFreeColsFromIndividuals > 0) {
    takeNbOrgs += nbFreeColsFromIndividuals * 5;
  }

  return [topOrgs.slice(0, takeNbOrgs), topIndividuals.slice(0, takeNbIndividuals)];
};
const isEmptyCollectiveLocation = account => {
  if (!account?.location) {
    return true;
  } else {
    const {
      name,
      address,
      country,
      lat,
      long
    } = account.location;
    return !(address || country || lat && long) && name !== 'Online';
  }
};
const getContributeRoute = collective => {
  let pathname = `${(0,_url_helpers__WEBPACK_IMPORTED_MODULE_8__/* .getCollectivePageRoute */ .x0)(collective)}/donate`;

  if (lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(collective, 'settings.disableCustomContributions', false) && lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(collective, 'settings.disableCryptoContributions', true)) {
    if (collective.tiers && collective.tiers.length > 0) {
      const tier = collective.tiers[0];
      pathname = `${(0,_url_helpers__WEBPACK_IMPORTED_MODULE_8__/* .getCollectivePageRoute */ .x0)(collective)}/contribute/${tier.slug}-${tier.id}/checkout`;
    } else {
      return null;
    }
  }

  return pathname;
};
const getSuggestedTags = collective => {
  return collective?.expensesTags?.map(({
    tag
  }) => tag) || [];
};
/** Checks if recurring contributions are allowed for the user for a given collective **/

const canContributeRecurring = (collective, user) => {
  // If the host has a payment method that supports recurring payments (PayPal, Credit Card, etc.)
  const paymentProviderSupportRecurring = pm => _constants_payment_methods__WEBPACK_IMPORTED_MODULE_5__/* .ProvidersWithRecurringPaymentSupport.includes */ .Yp.includes(pm);

  if (collective.host.supportedPaymentMethods.some(paymentProviderSupportRecurring)) {
    return true;
  } // Otherwise the only other option to contribute recurring is if the user is an admin of another collective under the same host


  const hostId = collective.host.legacyId;
  const collectiveId = collective.legacyId;
  return Boolean(user?.memberOf.some(member => member.collective?.host?.id === hostId && // Must be under the same host
  member.collective.id !== collectiveId && // Must not be the same collective
  member.role === _constants_roles__WEBPACK_IMPORTED_MODULE_6__/* ["default"].ADMIN */ .Z.ADMIN));
};
/*
 * Displays the name string as "Legal name (Display name)" if legal name exists.
 * Example: Sudharaka (Suds)
 */

const formatAccountName = (displayName, legalName) => {
  if (!legalName) {
    return displayName;
  } else if (legalName === displayName || legalName.includes(displayName)) {
    return legalName;
  } else {
    return `${legalName} (${displayName})`;
  }
};
/*
 * Validate the account holder name against the legal name. Following cases are considered a match,
 *
 * 1) Punctuation are ignored; "Evil Corp, Inc" and "Evil Corp, Inc." are considered a match.
 * 2) Accents are ignored; "François" and "Francois" are considered a match.
 * 3) The first name and last name order is ignored; "Benjamin Piouffle" and "Piouffle Benjamin" is considered a match.
 */

const compareNames = (accountHolderName, legalName) => {
  // Ignore 501(c)(3) in both account holder name and legal name
  legalName = legalName?.replaceAll('501(c)(3)', '') || '';
  accountHolderName = accountHolderName?.replaceAll('501(c)(3)', '') || '';
  const namesArray = legalName.trim().split(' ');
  let legalNameReversed;

  if (namesArray.length === 2) {
    const firstName = namesArray[0];
    const lastName = namesArray[1];
    legalNameReversed = `${lastName} ${firstName}`;
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

const isHostAccount = c => c.isHost === true && c.type !== 'COLLECTIVE';
/* Returns true if the account is self-hosted */

const isSelfHostedAccount = c => c.isHost === true && c.type === 'COLLECTIVE';
/* Returns true if the account is an individual. Works with GQLV1 (Collectives) & GQLV2 (Accounts) */

const isIndividualAccount = account => ['USER', 'INDIVIDUAL'].includes(account.type);
const loggedInUserCanAccessFinancialData = (user, collective) => {
  if (!(0,_collective_sections__WEBPACK_IMPORTED_MODULE_7__/* .isSectionForAdminsOnly */ .gl)(collective, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_3__/* .Sections.BUDGET */ .bx.BUDGET)) {
    return true;
  } else if (!user) {
    return false;
  } else {
    return user.isRoot || user.isAdminOfCollectiveOrHost(collective);
  }
};
/** A small helper to get the integer legacy ID for a collective/account. Works with GQLV1 and GQLV2. */

const getLegacyIdForCollective = collective => {
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

const getCollectivePageMetadata = collective => {
  const defaultImage = '/static/images/defaultBackgroundImage.png';

  if (collective) {
    const parent = collective.parentCollective || collective.parent;
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

/***/ 86971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97585);


const I18N_CATEGORIES = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  [_components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_1__/* .NAVBAR_CATEGORIES.ABOUT */ .t.ABOUT]: {
    id: "collective.about.title",
    defaultMessage: [{
      "type": 0,
      "value": "About"
    }]
  },
  [_components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_1__/* .NAVBAR_CATEGORIES.BUDGET */ .t.BUDGET]: {
    id: "section.budget.title",
    defaultMessage: [{
      "type": 0,
      "value": "Budget"
    }]
  },
  [_components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_1__/* .NAVBAR_CATEGORIES.CONNECT */ .t.CONNECT]: {
    id: "CollectivePage.SectionConnect.Title",
    defaultMessage: [{
      "type": 0,
      "value": "Connect"
    }]
  },
  [_components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_1__/* .NAVBAR_CATEGORIES.CONTRIBUTE */ .t.CONTRIBUTE]: {
    id: "Contribute",
    defaultMessage: [{
      "type": 0,
      "value": "Contribute"
    }]
  },
  [_components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_1__/* .NAVBAR_CATEGORIES.CONTRIBUTIONS */ .t.CONTRIBUTIONS]: {
    id: "Contributions",
    defaultMessage: [{
      "type": 0,
      "value": "Contributions"
    }]
  }
});

const i18nNavbarCategory = (intl, category) => {
  return I18N_CATEGORIES[category] ? intl.formatMessage(I18N_CATEGORIES[category]) : category;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18nNavbarCategory);

/***/ })

};
;