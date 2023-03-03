(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2092],{

/***/ 76853:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isMemberOfTheEuropeanUnion = exports.europeanCountries = void 0;
/** A list of all countries codes that are part of the European Union */
exports.europeanCountries = [
    'AT',
    'BE',
    'BG',
    'HR',
    'CY',
    'CZ',
    'DK',
    'EE',
    'FI',
    'FR',
    'DE',
    'GR',
    'HU',
    'IE',
    'IT',
    'LV',
    'LT',
    'LU',
    'MT',
    'NL',
    'PL',
    'PT',
    'RO',
    'SK',
    'SI',
    'ES',
    'SE',
];
/**
 * Return true if the country is a member of the European Union.
 */
var isMemberOfTheEuropeanUnion = function (countryCode) {
    return Boolean(countryCode) && exports.europeanCountries.includes(countryCode);
};
exports.isMemberOfTheEuropeanUnion = isMemberOfTheEuropeanUnion;
//# sourceMappingURL=european-countries.js.map

/***/ }),

/***/ 2211:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.gstMayApply = exports.isTierTypeSubjectToGST = exports.accountHasGST = exports.GST_RATE_PERCENT = void 0;
var lodash_1 = __webpack_require__(96486);
var TierType_1 = __importDefault(__webpack_require__(31975));
exports.GST_RATE_PERCENT = 15;
/**
 * Returns true if GST is enabled for this account
 */
var accountHasGST = function (account) {
    return Boolean(lodash_1.get(account, 'settings.GST') ||
        lodash_1.get(account, 'parent.settings.GST') ||
        lodash_1.get(account, 'parentCollective.settings.GST'));
};
exports.accountHasGST = accountHasGST;
/**
 * Returns true if the given tier type can be subject to VAT
 */
var isTierTypeSubjectToGST = function (tierType) {
    var taxedTiersTypes = [TierType_1.default.SUPPORT, TierType_1.default.SERVICE, TierType_1.default.PRODUCT, TierType_1.default.TICKET];
    return taxedTiersTypes.includes(tierType);
};
exports.isTierTypeSubjectToGST = isTierTypeSubjectToGST;
/**
 * Returns true if GST may apply.
 *
 * @param tierType - the tier type (eg. SUPPORT, TICKET...)
 * @param originCOuntry - two letters country where GST is applied
 */
var gstMayApply = function (tierType) {
    return exports.isTierTypeSubjectToGST(tierType);
};
exports.gstMayApply = gstMayApply;
//# sourceMappingURL=gst.js.map

/***/ }),

/***/ 41429:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 * Utils to calculate taxes.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getApplicableTaxesForCountry = exports.getApplicableTaxes = void 0;
var TaxType_1 = __webpack_require__(60004);
var utils_1 = __webpack_require__(3085);
var vat_1 = __webpack_require__(30630);
var gst_1 = __webpack_require__(2211);
var european_countries_1 = __webpack_require__(76853);
__exportStar(__webpack_require__(76853), exports);
__exportStar(__webpack_require__(30630), exports);
__exportStar(__webpack_require__(2211), exports);
__exportStar(__webpack_require__(60004), exports);
/**
 * Returns a list of taxes that may apply for this countribution type
 */
var getApplicableTaxes = function (account, host, tierType) {
    var taxes = [];
    var accountCountry = utils_1.getCountryFromAccount(account);
    var hostCountry = utils_1.getCountryFromAccount(host);
    var vatType = vat_1.getAccountVATType(account, host);
    if (vatType) {
        var vatOriginCountry = void 0;
        if (vatType === 'OWN') {
            vatOriginCountry = vat_1.getVatOriginCountry(tierType, accountCountry, accountCountry);
        }
        else {
            vatOriginCountry = vat_1.getVatOriginCountry(tierType, hostCountry, accountCountry);
        }
        if (vat_1.vatMayApply(tierType, vatOriginCountry)) {
            var vatRate = vat_1.getStandardVatRate(tierType, vatOriginCountry);
            taxes.push({ type: TaxType_1.TaxType.VAT, percentage: vatRate });
        }
    }
    if (gst_1.accountHasGST(host) && gst_1.gstMayApply(tierType)) {
        taxes.push({ type: TaxType_1.TaxType.GST, percentage: gst_1.GST_RATE_PERCENT });
    }
    return taxes;
};
exports.getApplicableTaxes = getApplicableTaxes;
/**
 * Returns a list of taxes that may apply for this account
 */
var getApplicableTaxesForCountry = function (country) {
    var taxes = [];
    if (!country) {
        return [];
    }
    else if (european_countries_1.isMemberOfTheEuropeanUnion(country)) {
        taxes.push(TaxType_1.TaxType.VAT);
    }
    else if (country === 'NZ') {
        taxes.push(TaxType_1.TaxType.GST);
    }
    return taxes;
};
exports.getApplicableTaxesForCountry = getApplicableTaxesForCountry;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 60004:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaxType = void 0;
var TaxType;
(function (TaxType) {
    TaxType["VAT"] = "VAT";
    TaxType["GST"] = "GST";
})(TaxType = exports.TaxType || (exports.TaxType = {}));
//# sourceMappingURL=TaxType.js.map

/***/ }),

/***/ 31975:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TierType = void 0;
var TierType;
(function (TierType) {
    TierType["SUPPORT"] = "SUPPORT";
    TierType["SERVICE"] = "SERVICE";
    TierType["PRODUCT"] = "PRODUCT";
    TierType["TICKET"] = "TICKET";
    TierType["TIER"] = "TIER";
    TierType["MEMBERSHIP"] = "MEMBERSHIP";
    TierType["DONATION"] = "DONATION";
})(TierType = exports.TierType || (exports.TierType = {}));
exports["default"] = TierType;
//# sourceMappingURL=TierType.js.map

/***/ }),

/***/ 3085:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCountryFromAccount = void 0;
var lodash_1 = __webpack_require__(96486);
var getCountryFromAccount = function (account) {
    if (!account) {
        return null;
    }
    return ((lodash_1.get(account.location, 'country') ||
        lodash_1.get(account.parent, 'location.country') ||
        lodash_1.get(account.parentCollective, 'location.country')) || null);
};
exports.getCountryFromAccount = getCountryFromAccount;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 30630:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkVATNumberFormat = exports.getVatPercentage = exports.getStandardVatRate = exports.vatMayApply = exports.getAccountVATType = exports.accountHasVAT = exports.getVatOriginCountry = exports.isTierTypeSubjectToVAT = void 0;
var vatrates_1 = __importDefault(__webpack_require__(7080));
var jsvat_1 = __webpack_require__(79234);
var lodash_1 = __webpack_require__(96486);
var european_countries_1 = __webpack_require__(76853);
var TierType_1 = __webpack_require__(31975);
var VATRates = new vatrates_1.default();
/**
 * Returns true if the given tier type can be subject to VAT
 */
var isTierTypeSubjectToVAT = function (tierType) {
    var taxedTiersTypes = [TierType_1.TierType.SUPPORT, TierType_1.TierType.SERVICE, TierType_1.TierType.PRODUCT, TierType_1.TierType.TICKET];
    return taxedTiersTypes.includes(tierType);
};
exports.isTierTypeSubjectToVAT = isTierTypeSubjectToVAT;
/**
 * For a given tier type, this function returns the country that should be used
 * for calculating the percentage.
 */
var getVatOriginCountry = function (tierType, hostCountry, collectiveCountry) {
    if (!exports.isTierTypeSubjectToVAT(tierType)) {
        return null;
    }
    var isEvent = tierType === TierType_1.TierType.TICKET;
    var originCountry = isEvent && collectiveCountry ? collectiveCountry : hostCountry;
    return european_countries_1.isMemberOfTheEuropeanUnion(originCountry) ? originCountry : null;
};
exports.getVatOriginCountry = getVatOriginCountry;
/**
 * Returns true if VAT is enabled for this account
 */
var accountHasVAT = function (account, host) {
    return Boolean(exports.getAccountVATType(account, host));
};
exports.accountHasVAT = accountHasVAT;
var AccountVATType;
(function (AccountVATType) {
    AccountVATType["OWN"] = "OWN";
    AccountVATType["HOST"] = "HOST";
})(AccountVATType || (AccountVATType = {}));
var getAccountVATType = function (account, host) {
    var accountVATType = lodash_1.get(account, 'settings.VAT.type') ||
        lodash_1.get(account, 'parent.settings.VAT.type') ||
        lodash_1.get(account, 'parentCollective.settings.VAT.type');
    if (accountVATType === 'OWN') {
        return AccountVATType.OWN;
    }
    // Default to HOST VAT config if account doesn't have its own
    var hostVATSettings = lodash_1.get(host, 'settings.VAT');
    if (!hostVATSettings || hostVATSettings.disabled || (!hostVATSettings.number && hostVATSettings.type !== 'OWN')) {
        return null;
    }
    return AccountVATType.HOST;
};
exports.getAccountVATType = getAccountVATType;
/**
 * Returns true if VAT may apply.
 *
 * @param tierType - the tier type (eg. SUPPORT, TICKET...)
 * @param originCOuntry - two letters country where VAT is applied
 */
var vatMayApply = function (tierType, originCountry) {
    return Boolean(originCountry) && exports.isTierTypeSubjectToVAT(tierType) && european_countries_1.isMemberOfTheEuropeanUnion(originCountry);
};
exports.vatMayApply = vatMayApply;
/**
 * Get the base vat percentage for this host/collective/tier
 */
var getStandardVatRate = function (tierType, originCountry) {
    if (!exports.vatMayApply(tierType, originCountry)) {
        return 0;
    }
    return VATRates.getStandardRate(originCountry);
};
exports.getStandardVatRate = getStandardVatRate;
/**
 * Calculates the vat rate.
 *
 * @param tierType - the tier type (eg. SUPPORT, TICKET...)
 * @param originCountry - two letters country where VAT is applied
 * @param userCountry - two letters country code of the payer
 * @param hasValidVatNumber - (optional) payer VAT identification number
 *
 * @returns {Number} `0` if no VAT applies or the percentage as a number between 0 and 100
 */
var getVatPercentage = function (tierType, originCountry, userCountry, hasValidVatNumber) {
    // No VAT if the customer is outside EU
    if (!european_countries_1.isMemberOfTheEuropeanUnion(userCountry)) {
        return 0;
    }
    // If it's another European country that provides a VAT number, don't apply VAT
    if (originCountry !== userCountry && hasValidVatNumber) {
        return 0;
    }
    return exports.getStandardVatRate(tierType, originCountry);
};
exports.getVatPercentage = getVatPercentage;
/**
 * Check the formatof a VAT ID number.
 *
 * @param number: The VAT number to check
 * @param countryCode: Provide a country code if you want to check against a single country code
 * @returns {object}
 *    - value: Standardized number
 *    - isValid
 *    - country: { isoCode: { short } }
 */
var checkVATNumberFormat = function (number, countryCode) {
    var filteredCountries = !countryCode
        ? jsvat_1.countries
        : jsvat_1.countries.filter(function (country) { return country.codes.includes(countryCode); });
    return jsvat_1.checkVAT(number, filteredCountries);
};
exports.checkVATNumberFormat = checkVATNumberFormat;
//# sourceMappingURL=vat.js.map

/***/ }),

/***/ 63410:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": function() { return /* binding */ Alipay; }
/* harmony export */ });
/* unused harmony export AlipayDimensions */
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54142);



var Alipay = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__.StyledIconBase, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 448 512"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M377.74 32H70.26C31.41 32 0 63.41 0 102.26v307.48C0 448.59 31.41 480 70.26 480h307.48c38.52 0 69.76-31.08 70.26-69.6-45.96-25.62-110.59-60.34-171.6-88.44-32.07 43.97-84.14 81-148.62 81-70.59 0-93.73-45.3-97.04-76.37-3.97-39.01 14.88-81.5 99.52-81.5 35.38 0 79.35 10.25 127.13 24.96 16.53-30.09 26.45-60.34 26.45-60.34h-178.2v-16.7h92.08v-31.24H88.28v-19.01h109.44V92.34h50.92v50.42h109.44v19.01H248.63v31.24h88.77s-15.21 46.62-38.35 90.92c48.93 16.7 100.01 36.04 148.62 52.74V102.26C447.83 63.57 416.43 32 377.74 32zM47.28 322.95c.99 20.17 10.25 53.73 69.93 53.73 52.07 0 92.58-39.68 117.87-72.9-44.63-18.68-84.48-31.41-109.44-31.41-67.45 0-79.35 33.06-78.36 50.58z"
  }));
});
Alipay.displayName = 'Alipay';
var AlipayDimensions = {
  height: 512,
  width: 448
};

/***/ }),

/***/ 34243:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ CreditCard; }
/* harmony export */ });
/* unused harmony export CreditCardDimensions */
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54142);



var CreditCard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__.StyledIconBase, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 576 512"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M64 32C28.7 32 0 60.7 0 96v32h576V96c0-35.3-28.7-64-64-64H64zm512 192H0v192c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"
  }));
});
CreditCard.displayName = 'CreditCard';
var CreditCardDimensions = {
  height: 512,
  width: 576
};

/***/ }),

/***/ 79922:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": function() { return /* binding */ ExchangeAlt; }
/* harmony export */ });
/* unused harmony export ExchangeAltDimensions */
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54142);



var ExchangeAlt = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__.StyledIconBase, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 512 512"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M32 96h320V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9S352 236.8 352 223.8V160H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm448 256c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6v64h320z"
  }));
});
ExchangeAlt.displayName = 'ExchangeAlt';
var ExchangeAltDimensions = {
  height: 512,
  width: 512
};

/***/ }),

/***/ 79234:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "austria": function() { return /* reexport */ austria; },
  "belgium": function() { return /* reexport */ belgium; },
  "bulgaria": function() { return /* reexport */ bulgaria; },
  "checkVAT": function() { return /* reexport */ checkVAT; },
  "countries": function() { return /* binding */ countries; },
  "croatia": function() { return /* reexport */ croatia; },
  "cyprus": function() { return /* reexport */ cyprus; },
  "czechRepublic": function() { return /* reexport */ czechRepublic; },
  "denmark": function() { return /* reexport */ denmark; },
  "estonia": function() { return /* reexport */ estonia; },
  "europe": function() { return /* reexport */ europe; },
  "finland": function() { return /* reexport */ finland; },
  "france": function() { return /* reexport */ france; },
  "germany": function() { return /* reexport */ germany; },
  "greece": function() { return /* reexport */ greece; },
  "hungary": function() { return /* reexport */ hungary; },
  "ireland": function() { return /* reexport */ ireland; },
  "italy": function() { return /* reexport */ italy; },
  "latvia": function() { return /* reexport */ latvia; },
  "lithuania": function() { return /* reexport */ lithuania; },
  "luxembourg": function() { return /* reexport */ luxembourg; },
  "malta": function() { return /* reexport */ malta; },
  "netherlands": function() { return /* reexport */ netherlands; },
  "norway": function() { return /* reexport */ norway; },
  "poland": function() { return /* reexport */ poland; },
  "portugal": function() { return /* reexport */ portugal; },
  "romania": function() { return /* reexport */ romania; },
  "russia": function() { return /* reexport */ russia; },
  "serbia": function() { return /* reexport */ serbia; },
  "slovakiaRepublic": function() { return /* reexport */ slovakiaRepublic; },
  "slovenia": function() { return /* reexport */ slovenia; },
  "spain": function() { return /* reexport */ spain; },
  "sweden": function() { return /* reexport */ sweden; },
  "switzerland": function() { return /* reexport */ switzerland; },
  "unitedKingdom": function() { return /* reexport */ unitedKingdom; }
});

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/austria.js
const austria = {
    name: 'Austria',
    codes: ['AT', 'AUT', '040'],
    calcFn: (vat) => {
        let total = 0;
        for (let i = 0; i < 7; i++) {
            const temp = Number(vat.charAt(i)) * austria.rules.multipliers.common[i];
            if (temp > 9) {
                total += Math.floor(temp / 10) + temp % 10;
            }
            else {
                total += temp;
            }
        }
        total = 10 - (total + 4) % 10;
        if (total === 10)
            total = 0;
        return total === Number(vat.slice(7, 8));
    },
    rules: {
        multipliers: {
            common: [1, 2, 1, 2, 1, 2, 1]
        },
        regex: [/^(AT)U(\d{8})$/]
    }
};

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/belgium.js
const belgium = {
    name: 'Belgium',
    codes: ['BE', 'BEL', '056'],
    calcFn: (vat) => {
        const newVat = (vat.length === 9) ? ('0' + vat) : vat;
        if (Number(newVat.slice(1, 2)) === 0)
            return false;
        const check = (97 - Number(newVat.slice(0, 8)) % 97);
        return check === Number(newVat.slice(8, 10));
    },
    rules: {
        multipliers: {},
        regex: [/^(BE)(0?\d{9})$/]
    }
};

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/bulgaria.js
const bulgaria = {
    name: 'Bulgaria',
    codes: ['BG', 'BGR', '100'],
    calcFn: (vat) => {
        if (vat.length === 9)
            return _checkNineLengthVat(vat);
        const { multipliers } = bulgaria.rules;
        return _isPhysicalPerson(vat, multipliers.physical) || _isForeigner(vat, multipliers) || _miscellaneousVAT(vat, multipliers);
    },
    rules: {
        multipliers: {
            physical: [2, 4, 8, 5, 10, 9, 7, 3, 6],
            foreigner: [21, 19, 17, 13, 11, 9, 7, 3, 1],
            miscellaneous: [4, 3, 2, 7, 6, 5, 4, 3, 2]
        },
        regex: [/^(BG)(\d{9,10})$/]
    }
};
function _increase(value, vat, from, to, incr) {
    let result = value;
    for (let i = from; i < to; i++) {
        result += Number(vat.charAt(i)) * (i + incr);
    }
    return result;
}
function _increase2(value, vat, from, to, multipliers) {
    let result = value;
    for (let i = from; i < to; i++) {
        result += Number(vat.charAt(i)) * multipliers[i];
    }
    return result;
}
function _checkNineLengthVat(vat) {
    let total;
    let temp = _increase(0, vat, 0, 8, 1);
    const expect = Number(vat.slice(8));
    total = temp % 11;
    if (total !== 10)
        return total === expect;
    temp = _increase(0, vat, 0, 8, 3);
    total = temp % 11;
    if (total === 10)
        total = 0;
    return total === expect;
}
function _isPhysicalPerson(vat, physicalMultipliers) {
    // 10 digit VAT code - see if it relates to a standard physical person
    if ((/^\d\d[0-5]\d[0-3]\d\d{4}$/).test(vat)) {
        // Check month
        const month = Number(vat.slice(2, 4));
        if ((month > 0 && month < 13) || (month > 20 && month < 33) || (month > 40 && month < 53)) {
            let total = _increase2(0, vat, 0, 9, physicalMultipliers);
            // Establish check digit.
            total = total % 11;
            if (total === 10)
                total = 0;
            // Check to see if the check digit given is correct, If not, try next type of person
            if (total === Number(vat.substr(9, 1)))
                return true;
        }
    }
    return false;
}
function _isForeigner(vat, multipliers) {
    // Extract the next digit and multiply by the counter.
    const total = _increase2(0, vat, 0, 9, multipliers.foreigner);
    // Check to see if the check digit given is correct, If not, try next type of person
    return total % 10 === Number(vat.substr(9, 1));
}
function _miscellaneousVAT(vat, multipliers) {
    // Finally, if not yet identified, see if it conforms to a miscellaneous VAT number
    let total = _increase2(0, vat, 0, 9, multipliers.miscellaneous);
    // Establish check digit.
    total = 11 - total % 11;
    if (total === 10)
        return false;
    if (total === 11)
        total = 0;
    // Check to see if the check digit given is correct, If not, we have an error with the VAT number
    const expect = Number(vat.substr(9, 1));
    return total === expect;
}

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/croatiat.js
const croatia = {
    name: 'Croatia',
    codes: ['HR', 'HRV', '191'],
    calcFn: (vat) => {
        // Checks the check digits of a Croatian VAT number using ISO 7064, MOD 11-10 for check digit.
        let product = 10;
        let sum = 0;
        for (let i = 0; i < 10; i++) {
            // Extract the next digit and implement the algorithm
            sum = (Number(vat.charAt(i)) + product) % 10;
            if (sum === 0) {
                sum = 10;
            }
            product = (2 * sum) % 11;
        }
        // Now check that we have the right check digit
        const expect = Number(vat.slice(10, 11));
        return (product + expect) % 10 === 1;
    },
    rules: {
        multipliers: {},
        regex: [/^(HR)(\d{11})$/]
    }
};

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/cyprus.js
const cyprus = {
    name: 'Cyprus',
    codes: ['CY', 'CYP', '196'],
    calcFn: (vat) => {
        // Not allowed to start with '12'
        if (Number(vat.slice(0, 2)) === 12)
            return false;
        // Extract the next digit and multiply by the counter.
        let total = extractAndMultiplyByCounter(vat, 0);
        // Establish check digit using modulus 26, and translate to char. equivalent.
        total = total % 26;
        total = String.fromCharCode(total + 65);
        // Check to see if the check digit given is correct
        const expect = vat.substr(8, 1);
        return total === expect;
    },
    rules: {
        multipliers: {},
        regex: [/^(CY)([0-59]\d{7}[A-Z])$/]
    }
};
function extractAndMultiplyByCounter(vat, total) {
    let result = total;
    for (let i = 0; i < 8; i++) {
        let temp = Number(vat.charAt(i));
        if (i % 2 === 0) {
            switch (temp) {
                case 0:
                    temp = 1;
                    break;
                case 1:
                    temp = 0;
                    break;
                case 2:
                    temp = 5;
                    break;
                case 3:
                    temp = 7;
                    break;
                case 4:
                    temp = 9;
                    break;
                default:
                    temp = temp * 2 + 3;
            }
        }
        result += temp;
    }
    return result;
}

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/czechRepublic.js
const czechRepublic = {
    name: 'Czech Republic',
    codes: ['CZ', 'CZE', '203'],
    calcFn: (vat) => {
        const { rules } = czechRepublic;
        const { multipliers, additional, lookup } = rules;
        if (!additional)
            return false;
        return isLegalEntities(vat, multipliers.common, additional)
            || isIndividualType2(vat, multipliers.common, additional, lookup)
            || isIndividualType3(vat, additional)
            || isIndividualType1(vat, additional);
    },
    rules: {
        multipliers: {
            common: [8, 7, 6, 5, 4, 3, 2]
        },
        lookup: [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10],
        regex: [/^(CZ)(\d{8,10})(\d{3})?$/],
        additional: [
            /^\d{8}$/,
            /^[0-5][0-9][0|1|5|6]\d[0-3]\d\d{3}$/,
            /^6\d{8}$/,
            /^\d{2}[0-3|5-8]\d[0-3]\d\d{4}$/
        ]
    }
};
function isLegalEntities(vat, multipliers, additional) {
    let total = 0;
    if (additional[0].test(vat)) {
        // Extract the next digit and multiply by the counter.
        for (let i = 0; i < 7; i++) {
            total += Number(vat.charAt(i)) * multipliers[i];
        }
        // Establish check digit.
        total = 11 - total % 11;
        if (total === 10)
            total = 0;
        if (total === 11)
            total = 1;
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        const expect = Number(vat.slice(7, 8));
        return total === expect;
    }
    return false;
}
function isIndividualType1(vat, additional) {
    if (additional[1].test(vat)) {
        return Number(vat.slice(0, 2)) <= 62;
    }
    return false;
}
function isIndividualType2(vat, multipliers, additional, lookup) {
    let total = 0;
    if (additional[2].test(vat)) {
        // Extract the next digit and multiply by the counter.
        for (let j = 0; j < 7; j++) {
            total += Number(vat.charAt(j + 1)) * multipliers[j];
        }
        // Establish check digit.
        total = 11 - total % 11;
        if (total === 10)
            total = 0;
        if (total === 11)
            total = 1;
        // Convert calculated check digit according to a lookup table
        const expect = Number(vat.slice(8, 9));
        if (!lookup)
            return false;
        return lookup[total - 1] === expect;
    }
    return false;
}
function isIndividualType3(vat, additional) {
    if (additional[3].test(vat)) {
        const temp = Number(vat.slice(0, 2)) + Number(vat.slice(2, 4)) + Number(vat.slice(4, 6)) + Number(vat.slice(6, 8)) + Number(vat.slice(8));
        const expect = Number(vat) % 11 === 0;
        return !!(temp % 11 === 0 && expect);
    }
    return false;
}

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/denmark.js
const denmark = {
    name: 'Denmark',
    codes: ['DK', 'DNK', '208'],
    calcFn: (vat) => {
        let total = 0;
        for (let i = 0; i < 8; i++) {
            total += Number(vat.charAt(i)) * denmark.rules.multipliers.common[i];
        }
        return total % 11 === 0;
    },
    rules: {
        multipliers: {
            common: [2, 7, 6, 5, 4, 3, 2, 1]
        },
        regex: [/^(DK)(\d{8})$/]
    }
};

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/estonia.js
const estonia = {
    name: 'Estonia',
    codes: ['EE', 'EST', '233'],
    calcFn: (vat) => {
        let total = 0;
        let expect;
        // Extract the next digit and multiply by the counter.
        for (let i = 0; i < 8; i++) {
            total += Number(vat.charAt(i)) * estonia.rules.multipliers.common[i];
        }
        // Establish check digits using modulus 10.
        total = 10 - total % 10;
        if (total === 10)
            total = 0;
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        expect = Number(vat.slice(8, 9));
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [3, 7, 1, 3, 7, 1, 3, 7]
        },
        regex: [/^(EE)(10\d{7})$/]
    }
};

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/europe.js
const europe = {
    name: 'Europe',
    codes: ['EU', 'EUR', '000'],
    calcFn: () => {
        // We know little about EU numbers apart from the fact that the first 3 digits represent the
        // country, and that there are nine digits in total.
        return true;
    },
    rules: {
        multipliers: {},
        regex: [/^(EU)(\d{9})$/]
    }
};

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/finland.js
const finland = {
    name: 'Finland',
    codes: ['FI', 'FIN', '246'],
    calcFn: (vat) => {
        let total = 0;
        // Extract the next digit and multiply by the counter.
        for (let i = 0; i < 7; i++)
            total += Number(vat.charAt(i)) * finland.rules.multipliers.common[i];
        // Establish check digit.
        total = 11 - total % 11;
        if (total > 9) {
            total = 0;
        }
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        const expect = Number(vat.slice(7, 8));
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [7, 9, 10, 5, 8, 4, 2]
        },
        regex: [/^(FI)(\d{8})$/]
    }
};

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/france.js
const france = {
    name: 'France',
    codes: ['FR', 'FRA', '250'],
    calcFn: (vat) => {
        let total;
        // Checks the check digits of a French VAT number.
        if (!(/^\d{11}$/).test(vat))
            return true;
        // Extract the last nine digits as an integer.
        total = Number(vat.substring(2));
        // Establish check digit.
        total = (total * 100 + 12) % 97;
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        const expect = Number(vat.slice(0, 2));
        return total === expect;
    },
    rules: {
        multipliers: {},
        regex: [
            /^(FR)(\d{11})$/,
            /^(FR)([A-HJ-NP-Z]\d{10})$/,
            /^(FR)(\d[A-HJ-NP-Z]\d{9})$/,
            /^(FR)([A-HJ-NP-Z]{2}\d{9})$/
        ]
    }
};

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/germany.js
const germany = {
    name: 'Germany',
    codes: ['DE', 'DEU', '276'],
    calcFn: (vat) => {
        // Checks the check digits of a German VAT number.
        let product = 10;
        let sum = 0;
        let checkDigit = 0;
        let expect;
        for (let i = 0; i < 8; i++) {
            // Extract the next digit and implement peculiar algorithm!.
            sum = (Number(vat.charAt(i)) + product) % 10;
            if (sum === 0) {
                sum = 10;
            }
            product = (2 * sum) % 11;
        }
        // Establish check digit.
        if (11 - product === 10) {
            checkDigit = 0;
        }
        else {
            checkDigit = 11 - product;
        }
        // Compare it with the last two characters of the VAT number. If the same, then it is a valid
        // check digit.
        expect = Number(vat.slice(8, 9));
        return checkDigit === expect;
    },
    rules: {
        multipliers: {},
        regex: [/^(DE)([1-9]\d{8})$/]
    }
};

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/greece.js
const greece = {
    name: 'Greece',
    codes: ['GR', 'GRC', '300'],
    calcFn: (vat) => {
        let total = 0;
        // eight character numbers should be prefixed with an 0.
        const newVat = (vat.length === 8) ? '0' + vat : vat;
        // Extract the next digit and multiply by the counter.
        for (let i = 0; i < 8; i++) {
            total += Number(newVat.charAt(i)) * greece.rules.multipliers.common[i];
        }
        // Establish check digit.
        total = total % 11;
        total = (total > 9) ? 0 : total;
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        const expect = Number(newVat.slice(8, 9));
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [256, 128, 64, 32, 16, 8, 4, 2]
        },
        regex: [/^(EL)(\d{9})$/]
    }
};

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/hungary.js
const hungary = {
    name: 'Hungary',
    codes: ['HU', 'HUN', '348'],
    calcFn: (vat) => {
        let total = 0;
        // Extract the next digit and multiply by the counter.
        for (let i = 0; i < 7; i++) {
            total += Number(vat.charAt(i)) * hungary.rules.multipliers.common[i];
        }
        // Establish check digit.
        total = 10 - total % 10;
        if (total === 10)
            total = 0;
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        const expect = Number(vat.slice(7, 8));
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [9, 7, 3, 1, 9, 7, 3]
        },
        regex: [/^(HU)(\d{8})$/]
    }
};

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/ireland.js
const ireland = {
    name: 'Ireland',
    codes: ['IE', 'IRL', '372'],
    calcFn: (vat) => {
        const { typeFormats, multipliers } = ireland.rules;
        if (!typeFormats || !typeFormats.first)
            return false;
        let total = 0;
        let newVat = vat;
        // If the code is type 1 format, we need to convert it to the new before performing the validation.
        if (typeFormats.first.test(vat)) {
            newVat = '0' + vat.substring(2, 7) + vat.substring(0, 1) + vat.substring(7, 8);
        }
        // Extract the next digit and multiply by the counter.
        for (let i = 0; i < 7; i++) {
            total += Number(newVat.charAt(i)) * multipliers.common[i];
        }
        // If the number is type 3 then we need to include the trailing A or H in the calculation
        if (typeFormats.third.test(newVat)) {
            // Add in a multiplier for the character A (1*9=9) or H (8*9=72)
            total += (newVat.charAt(8) === 'H') ? 72 : 9;
        }
        // Establish check digit using modulus 23, and translate to char. equivalent.
        total = total % 23;
        total = (total === 0) ? 'W' : String.fromCharCode(total + 64);
        // Compare it with the eighth character of the VAT number. If it's the same, then it's valid.
        const expect = newVat.slice(7, 8);
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [8, 7, 6, 5, 4, 3, 2]
        },
        typeFormats: {
            first: /^\d[A-Z*+]/,
            third: /^\d{7}[A-Z][AH]$/
        },
        regex: [
            /^(IE)(\d{7}[A-W])$/,
            /^(IE)([7-9][A-Z*+)]\d{5}[A-W])$/,
            /^(IE)(\d{7}[A-W][AH])$/
        ]
    }
};

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/italy.js
const italy = {
    name: 'Italy',
    codes: ['IT', 'ITA', '380'],
    calcFn: (vat) => {
        let total = 0;
        let temp;
        // The last three digits are the issuing office, and cannot exceed more 201, unless 999 or 888
        if (Number(vat.slice(0, 7)) === 0) {
            return false;
        }
        temp = Number(vat.slice(7, 10));
        if ((temp < 1) || (temp > 201) && temp !== 999 && temp !== 888) {
            return false;
        }
        // Extract the next digit and multiply by the appropriate
        for (let i = 0; i < 10; i++) {
            temp = Number(vat.charAt(i)) * italy.rules.multipliers.common[i];
            if (temp > 9)
                total += Math.floor(temp / 10) + temp % 10;
            else
                total += temp;
        }
        // Establish check digit.
        total = 10 - total % 10;
        if (total > 9) {
            total = 0;
        }
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        const expect = Number(vat.slice(10, 11));
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
        },
        regex: [/^(IT)(\d{11})$/]
    }
};

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/latvia.js
const latvia = {
    name: 'Latvia',
    codes: ['LV', 'LVA', '428'],
    calcFn: (vat) => {
        let total = 0;
        // Differentiate between legal entities and natural bodies. For the latter we simply check that
        // the first six digits correspond to valid DDMMYY dates.
        if ((/^[0-3]/).test(vat)) {
            return Boolean((/^[0-3][0-9][0-1][0-9]/).test(vat));
        }
        else {
            // Extract the next digit and multiply by the counter.
            for (let i = 0; i < 10; i++) {
                total += Number(vat.charAt(i)) * latvia.rules.multipliers.common[i];
            }
            // Establish check digits by getting modulus 11.
            if (total % 11 === 4 && Number(vat[0]) === 9)
                total = total - 45;
            if (total % 11 === 4) {
                total = 4 - total % 11;
            }
            else if (total % 11 > 4) {
                total = 14 - total % 11;
            }
            else if (total % 11 < 4) {
                total = 3 - total % 11;
            }
            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            const expect = Number(vat.slice(10, 11));
            return total === expect;
        }
    },
    rules: {
        multipliers: {
            common: [9, 1, 4, 8, 3, 10, 2, 5, 7, 6]
        },
        regex: [/^(LV)(\d{11})$/]
    }
};

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/lithuania.js
const lithuania = {
    name: 'Lithuania',
    codes: ['LT', 'LTU', '440'],
    calcFn: (vat) => {
        return _check9DigitVat(vat, lithuania.rules) || _check12DigitVat(vat, lithuania.rules);
    },
    rules: {
        multipliers: {
            short: [3, 4, 5, 6, 7, 8, 9, 1],
            med: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2],
            alt: [3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4]
        },
        check: /^\d{10}1/,
        regex: [/^(LT)(\d{9}|\d{12})$/]
    }
};
function _extractDigit(vat, multiplierList, key) {
    return Number(vat.charAt(key)) * multiplierList[key];
}
function _doubleCheckCalculation(vat, total, rules) {
    let result = total;
    if (result % 11 === 10) {
        result = 0;
        for (let i = 0; i < 8; i++) {
            result += _extractDigit(vat, rules.multipliers.short, i);
        }
    }
    return result;
}
function extractDigit(vat, total) {
    let result = total;
    for (let i = 0; i < 8; i++) {
        result += Number(vat.charAt(i)) * (i + 1);
    }
    return result;
}
function checkDigit(total) {
    let result = total % 11;
    if (result === 10) {
        result = 0;
    }
    return result;
}
function _check9DigitVat(vat, rules) {
    // 9 character VAT numbers are for legal persons
    let total = 0;
    if (vat.length === 9) {
        // 8th character must be one
        if (!(/^\d{7}1/).test(vat))
            return false;
        // Extract the next digit and multiply by the counter+1.
        total = extractDigit(vat, total);
        // Can have a double check digit calculation!
        total = _doubleCheckCalculation(vat, total, rules);
        // Establish check digit.
        total = checkDigit(total);
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        const expect = Number(vat.slice(8, 9));
        return total === expect;
    }
    return false;
}
function extractDigit12(vat, total, rules) {
    let result = total;
    for (let k = 0; k < 11; k++) {
        result += _extractDigit(vat, rules.multipliers.med, k);
    }
    return result;
}
function _doubleCheckCalculation12(vat, total, rules) {
    let result = total;
    if (total % 11 === 10) {
        result = 0;
        for (let l = 0; l < 11; l++) {
            result += _extractDigit(vat, rules.multipliers.alt, l);
        }
    }
    return result;
}
function _check12DigitVat(vat, rules) {
    let total = 0;
    // 12 character VAT numbers are for temporarily registered taxpayers
    if (vat.length === 12) {
        if (!rules.check)
            return false;
        // 11th character must be one
        if (!(rules.check).test(vat))
            return false;
        // Extract the next digit and multiply by the counter+1.
        total = extractDigit12(vat, total, rules);
        // Can have a double check digit calculation!
        total = _doubleCheckCalculation12(vat, total, rules);
        // Establish check digit.
        total = checkDigit(total);
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        const expect = Number(vat.slice(11, 12));
        return total === expect;
    }
    return false;
}

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/luxembourg.js
const luxembourg = {
    name: 'Luxembourg',
    codes: ['LU', 'LUX', '442'],
    calcFn: (vat) => {
        const expect = Number(vat.slice(6, 8));
        const checkDigit = Number(vat.slice(0, 6)) % 89;
        // Checks the check digits of a Luxembourg VAT number.
        return checkDigit === expect;
    },
    rules: {
        multipliers: {},
        regex: [/^(LU)(\d{8})$/]
    }
};

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/malta.js
const malta = {
    name: 'Malta',
    codes: ['MT', 'MLT', '470'],
    calcFn: (vat) => {
        let total = 0;
        // Extract the next digit and multiply by the counter.
        for (let i = 0; i < 6; i++) {
            total += Number(vat.charAt(i)) * malta.rules.multipliers.common[i];
        }
        // Establish check digits by getting modulus 37.
        total = 37 - total % 37;
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        const expect = Number(vat.slice(6, 8));
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [3, 4, 6, 7, 8, 9]
        },
        regex: [/^(MT)([1-9]\d{7})$/]
    }
};

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/netherlands.js
const netherlands = {
    name: 'Netherlands',
    codes: ['NL', 'NLD', '528'],
    calcFn: (input) => {
        const vat = input.replace(/[\ \-\_]/g, '').toUpperCase();
        const { additional, multipliers } = netherlands.rules;
        if (!additional)
            return false;
        const match = vat.match(additional[0]);
        if (!match || !match[1])
            return false;
        const numb = match[1];
        const characterValues = `NL${vat}`.split('').map(getCharValue);
        let total = 0;
        // Extract the next digit and multiply by the counter.
        for (let i = 0; i < 8; i++) {
            total += Number(numb.charAt(i)) * multipliers.common[i];
        }
        // Establish check digits by getting modulus 11.
        total = total % 11;
        if (total > 9) {
            total = 0;
        }
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        const expect = Number(numb.slice(8, 9));
        // is either 11 proof or 97 mod proof.
        return total === expect || isNinetySevenMod(characterValues.join(''));
    },
    rules: {
        multipliers: {
            common: [9, 8, 7, 6, 5, 4, 3, 2]
        },
        regex: [/^(NL)(\d{9}B\d{2})$/],
        additional: [/^(\d{9})B\d{2}$/]
    }
};
function getCharValue(char) {
    // if one of these set values
    if (char === '+')
        return 36;
    if (char === '*')
        return 37;
    // if A...Z return code VAL -55
    const code = char.charCodeAt(0) - 55;
    if (code > 9 && code < 91)
        return code;
    return parseInt(char, 10);
}
function isNinetySevenMod(value) {
    return BigInt(value) % BigInt(97) === BigInt(1);
}

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/norway.js
const norway = {
    name: 'Norway',
    codes: ['NO', 'NOR', '578'],
    calcFn: (vat) => {
        let total = 0;
        // See http://www.brreg.no/english/coordination/number.html
        // Extract the next digit and multiply by the counter.
        for (let i = 0; i < 8; i++) {
            total += Number(vat.charAt(i)) * norway.rules.multipliers.common[i];
        }
        // Establish check digits by getting modulus 11. Check digits > 9 are invalid
        total = 11 - total % 11;
        if (total === 11) {
            total = 0;
        }
        if (total < 10) {
            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            const expect = Number(vat.slice(8, 9));
            return total === expect;
        }
        return false;
    },
    rules: {
        multipliers: {
            common: [3, 2, 7, 6, 5, 4, 3, 2]
        },
        regex: [/^(NO)(\d{9})$/]
    }
};

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/poland.js
const poland = {
    name: 'Poland',
    codes: ['PL', 'POL', '616'],
    calcFn: (vat) => {
        let total = 0;
        // Extract the next digit and multiply by the counter.
        for (let i = 0; i < 9; i++) {
            total += Number(vat.charAt(i)) * poland.rules.multipliers.common[i];
        }
        // Establish check digits subtracting modulus 11 from 11.
        total = total % 11;
        if (total > 9) {
            total = 0;
        }
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        const expect = Number(vat.slice(9, 10));
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [6, 5, 7, 2, 3, 4, 5, 6, 7]
        },
        regex: [/^(PL)(\d{10})$/]
    }
};

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/portugal.js
const portugal = {
    name: 'Portugal',
    codes: ['PT', 'PRT', '620'],
    calcFn: (vat) => {
        let total = 0;
        // Extract the next digit and multiply by the counter.
        for (let i = 0; i < 8; i++) {
            total += Number(vat.charAt(i)) * portugal.rules.multipliers.common[i];
        }
        // Establish check digits subtracting modulus 11 from 11.
        total = 11 - total % 11;
        if (total > 9) {
            total = 0;
        }
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        const expect = Number(vat.slice(8, 9));
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [9, 8, 7, 6, 5, 4, 3, 2]
        },
        regex: [/^(PT)(\d{9})$/]
    }
};

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/romania.js
const romania = {
    name: 'Romania',
    codes: ['RO', 'ROU', '642'],
    calcFn: (vat) => {
        let total = 0;
        // Extract the next digit and multiply by the counter.
        const vatLength = vat.length;
        const multipliers = romania.rules.multipliers.common.slice(10 - vatLength);
        for (let i = 0; i < vat.length - 1; i++) {
            total += Number(vat.charAt(i)) * multipliers[i];
        }
        // Establish check digits by getting modulus 11.
        total = (10 * total) % 11;
        if (total === 10)
            total = 0;
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        const expect = Number(vat.slice(vat.length - 1, vat.length));
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [7, 5, 3, 2, 1, 7, 5, 3, 2]
        },
        regex: [/^(RO)([1-9]\d{1,9})$/]
    }
};

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/russia.js
const russia = {
    name: 'Russian Federation',
    codes: ['RU', 'RUS', '643'],
    calcFn: (vat) => {
        // See http://russianpartner.biz/test_inn.html for algorithm
        return _check10DigitINN(vat, russia.rules) || _check12DigitINN(vat, russia.rules);
    },
    rules: {
        multipliers: {
            m_1: [2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
            m_2: [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
            m_3: [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0]
        },
        regex: [/^(RU)(\d{10}|\d{12})$/]
    }
};
function _check10DigitINN(vat, rules) {
    let total = 0;
    if (vat.length === 10) {
        for (let i = 0; i < 10; i++) {
            total += Number(vat.charAt(i)) * rules.multipliers.m_1[i];
        }
        total = total % 11;
        if (total > 9) {
            total = total % 10;
        }
        // Compare it with the last character of the VAT number. If it is the same, then it's valid
        const expect = Number(vat.slice(9, 10));
        return total === expect;
    }
    return false;
}
function _check12DigitINN(vat, rules) {
    let total1 = 0;
    let total2 = 0;
    if (vat.length === 12) {
        for (let j = 0; j < 11; j++) {
            total1 += Number(vat.charAt(j)) * rules.multipliers.m_2[j];
        }
        total1 = total1 % 11;
        if (total1 > 9) {
            total1 = total1 % 10;
        }
        for (let k = 0; k < 11; k++) {
            total2 += Number(vat.charAt(k)) * rules.multipliers.m_3[k];
        }
        total2 = total2 % 11;
        if (total2 > 9) {
            total2 = total2 % 10;
        }
        // Compare the first check with the 11th character and the second check with the 12th and last
        // character of the VAT number. If they're both the same, then it's valid
        const expect = (total1 === Number(vat.slice(10, 11)));
        const expect2 = (total2 === Number(vat.slice(11, 12)));
        return (expect) && (expect2);
    }
    return false;
}

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/serbia.js
const serbia = {
    name: 'Serbia',
    codes: ['RS', 'SRB', '688'],
    calcFn: (vat) => {
        // Checks the check digits of a Serbian VAT number using ISO 7064, MOD 11-10 for check digit.
        let product = 10;
        let sum = 0;
        for (let i = 0; i < 8; i++) {
            // Extract the next digit and implement the algorithm
            sum = (Number(vat.charAt(i)) + product) % 10;
            if (sum === 0) {
                sum = 10;
            }
            product = (2 * sum) % 11;
        }
        // Now check that we have the right check digit
        const expect = 1;
        const checkDigit = (product + (Number(vat.slice(8, 9)))) % 10;
        return checkDigit === expect;
    },
    rules: {
        multipliers: {},
        regex: [/^(RS)(\d{9})$/]
    }
};

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/slovakiaRepublic.js
const slovakiaRepublic = {
    name: 'Slovakia Republic',
    codes: ['SK', 'SVK', '703'],
    calcFn: (vat) => {
        const expect = 0;
        const checkDigit = (Number(vat) % 11);
        return checkDigit === expect;
    },
    rules: {
        multipliers: {},
        regex: [/^(SK)([1-9]\d[2346-9]\d{7})$/]
    }
};

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/slovenia.js
const slovenia = {
    name: 'Slovenia',
    codes: ['SI', 'SVN', '705'],
    calcFn: (vat) => {
        let total = 0;
        // Extract the next digit and multiply by the counter.
        for (let i = 0; i < 7; i++) {
            total += Number(vat.charAt(i)) * slovenia.rules.multipliers.common[i];
        }
        // Establish check digits using modulus 11
        total = 11 - total % 11;
        if (total === 10) {
            total = 0;
        }
        // Compare the number with the last character of the VAT number. If it is the
        // same, then it's a valid check digit.
        const expect = Number(vat.slice(7, 8));
        return !!(total !== 11 && total === expect);
    },
    rules: {
        multipliers: {
            common: [8, 7, 6, 5, 4, 3, 2]
        },
        regex: [/^(SI)([1-9]\d{7})$/]
    }
};

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/spain.js
const spain = {
    name: 'Spain',
    codes: ['ES', 'ESP', '724'],
    calcFn: (vat) => {
        const { additional, multipliers } = spain.rules;
        if (!additional)
            return false;
        // National juridical entities
        if (additional[0].test(vat))
            return isNationalJuridicalEntities(vat, multipliers.common);
        // Juridical entities other than national ones
        if (additional[1].test(vat))
            return isNonNationalJuridical(vat, multipliers.common);
        // Personal number (NIF) (starting with numeric of Y or Z)
        if (additional[2].test(vat))
            return isPersonalYtoZ(vat);
        // Personal number (NIF) (starting with K, L, M, or X)
        if (additional[3].test(vat))
            return isPersonalKtoX(vat);
        return false;
    },
    rules: {
        multipliers: {
            common: [2, 1, 2, 1, 2, 1, 2]
        },
        regex: [
            /^(ES)([A-Z]\d{8})$/,
            /^(ES)([A-HN-SW]\d{7}[A-J])$/,
            /^(ES)([0-9YZ]\d{7}[A-Z])$/,
            /^(ES)([KLMX]\d{7}[A-Z])$/
        ],
        additional: [
            /^[A-H|J|U|V]\d{8}$/,
            /^[A-H|N-S|W]\d{7}[A-J]$/,
            /^[0-9|Y|Z]\d{7}[A-Z]$/,
            /^[K|L|M|X]\d{7}[A-Z]$/
        ]
    }
};
function extractDigitAndMultiplyByCounter(vat, multipliers, total) {
    let temp;
    let result = total;
    for (let i = 0; i < 7; i++) {
        temp = Number(vat.charAt(i + 1)) * multipliers[i];
        if (temp > 9) {
            result += Math.floor(temp / 10) + temp % 10;
        }
        else {
            result += temp;
        }
    }
    return result;
}
function isNationalJuridicalEntities(vat, multipliers) {
    let total = extractDigitAndMultiplyByCounter(vat, multipliers, 0);
    // Now calculate the check digit itself.
    total = 10 - total % 10;
    if (total === 10) {
        total = 0;
    }
    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    const expect = Number(vat.slice(8, 9));
    return total === expect;
}
function isNonNationalJuridical(vat, multipliers) {
    let total = extractDigitAndMultiplyByCounter(vat, multipliers, 0);
    // Now calculate the check digit itself.
    total = 10 - total % 10;
    const totalStr = String.fromCharCode(total + 64);
    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    const expect = vat.slice(8, 9);
    return totalStr === expect;
}
function isPersonalYtoZ(vat) {
    let tempNumber = vat;
    if (tempNumber.substring(0, 1) === 'Y')
        tempNumber = tempNumber.replace(/Y/, '1');
    if (tempNumber.substring(0, 1) === 'Z')
        tempNumber = tempNumber.replace(/Z/, '2');
    const expect = 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(+tempNumber.substring(0, 8) % 23);
    return tempNumber.charAt(8) === expect;
}
function isPersonalKtoX(vat) {
    const expect = 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(Number(vat.substring(1, 8)) % 23);
    return vat.charAt(8) === expect;
}

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/sweden.js
const sweden = {
    name: 'Sweden',
    codes: ['SE', 'SWE', '752'],
    calcFn: (vat) => {
        let expect;
        // Calculate R where R = R1 + R3 + R5 + R7 + R9, and Ri = INT(Ci/5) + (Ci*2) modulo 10
        let R = 0;
        for (let i = 0; i < 9; i = i + 2) {
            const digit = Number(vat.charAt(i));
            R += Math.floor(digit / 5) + ((digit * 2) % 10);
        }
        // Calculate S where S = C2 + C4 + C6 + C8
        let S = 0;
        for (let j = 1; j < 9; j = j + 2) {
            S += Number(vat.charAt(j));
        }
        const checkDigit = (10 - (R + S) % 10) % 10;
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        expect = Number(vat.slice(9, 10));
        return checkDigit === expect;
    },
    rules: {
        multipliers: {},
        regex: [/^(SE)(\d{10}01)$/]
    }
};

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/switzerland.js
const switzerland = {
    name: 'Switzerland',
    codes: ['CH', 'CHE', '756'],
    calcFn: (vat) => {
        let total = 0;
        for (let i = 0; i < 8; i++) {
            total += Number(vat.charAt(i)) * switzerland.rules.multipliers.common[i];
        }
        // Establish check digit.s
        total = 11 - total % 11;
        if (total === 10)
            return false;
        if (total === 11)
            total = 0;
        // Check to see if the check digit given is correct, If not, we have an error with the VAT number
        const expect = Number(vat.substr(8, 1));
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [5, 4, 3, 2, 7, 6, 5, 4]
        },
        regex: [/^(CHE)(\d{9})(MWST|TVA|IVA)?$/]
    }
};

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/unitedKingdom.js
const unitedKingdom = {
    name: 'United Kingdom',
    codes: ['GB', 'GBR', '826'],
    calcFn: (vat) => {
        // Government departments
        if (vat.substr(0, 2) === 'GD')
            return isGovernmentDepartment(vat);
        // Health authorities
        if (vat.substr(0, 2) === 'HA')
            return isHealthAuthorities(vat);
        // Standard and commercial numbers
        return isStandardOrCommercialNumber(vat, unitedKingdom.rules.multipliers.common);
    },
    rules: {
        multipliers: {
            common: [8, 7, 6, 5, 4, 3, 2]
        },
        regex: [
            /^(GB)?(\d{9})$/,
            /^(GB)?(\d{12})$/,
            /^(GB)?(GD\d{3})$/,
            /^(GB)?(HA\d{3})$/
        ]
    }
};
function isGovernmentDepartment(vat) {
    const expect = 500;
    return Number(vat.substr(2, 3)) < expect;
}
function isHealthAuthorities(vat) {
    const expect = 499;
    return Number(vat.substr(2, 3)) > expect;
}
function isStandardOrCommercialNumber(vat, multipliers) {
    let total = 0;
    // 0 VAT numbers disallowed!
    if (Number(vat.slice(0)) === 0)
        return false;
    // Check range is OK for modulus 97 calculation
    const no = Number(vat.slice(0, 7));
    // Extract the next digit and multiply by the counter.
    for (let i = 0; i < 7; i++) {
        total += Number(vat.charAt(i)) * multipliers[i];
    }
    // Old numbers use a simple 97 modulus, but new numbers use an adaptation of that (less 55). Our
    // VAT number could use either system, so we check it against both.
    // Establish check digits by subtracting 97 from total until negative.
    let checkDigit = total;
    while (checkDigit > 0) {
        checkDigit = checkDigit - 97;
    }
    // Get the absolute value and compare it with the last two characters of the VAT number. If the
    // same, then it is a valid traditional check digit. However, even then the number must fit within
    // certain specified ranges.
    checkDigit = Math.abs(checkDigit);
    if (checkDigit === Number(vat.slice(7, 9)) && no < 9990001 && (no < 100000 || no > 999999) && (no < 9490001 || no > 9700000))
        return true;
    // Now try the new method by subtracting 55 from the check digit if we can - else add 42
    if (checkDigit >= 55) {
        checkDigit = checkDigit - 55;
    }
    else {
        checkDigit = checkDigit + 42;
    }
    const expect = Number(vat.slice(7, 9));
    return Boolean(checkDigit === expect && no > 1000000);
}

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/countries/index.js


































;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/lib/jsvat.js
function makeResult(vat, isValid, country) {
    return {
        value: vat || undefined,
        isValid: Boolean(isValid),
        country: (!country) ? undefined : {
            name: country.name,
            isoCode: {
                short: country.codes[0],
                long: country.codes[1],
                numeric: country.codes[2]
            }
        }
    };
}
function removeExtraChars(vat = '') {
    return vat.toString().toUpperCase().replace(/(\s|-|\.)+/g, '');
}
function getCountry(vat, countriesList) {
    for (const country of countriesList) {
        const regexpValidRes = isVatValidToRegexp(vat, country.rules.regex);
        if (regexpValidRes.isValid)
            return country;
    }
    return undefined;
}
function isVatValidToRegexp(vat, regexArr) {
    for (const regex of regexArr) {
        const isValid = regex.test(vat);
        if (isValid)
            return { isValid: true, regex: regex };
    }
    return { isValid: false, regex: undefined };
}
function isVatValid(vat, country) {
    const regexpValidRes = isVatValidToRegexp(vat, country.rules.regex);
    if (!regexpValidRes.isValid || !regexpValidRes.regex)
        return false;
    const regexResult = regexpValidRes.regex.exec(vat);
    if (!regexResult)
        return false;
    return country.calcFn(regexResult[2]);
}
function checkVAT(vat, countriesList = []) {
    if (!vat)
        return makeResult(vat, false);
    const cleanVAT = removeExtraChars(vat);
    const result = makeResult(cleanVAT);
    const country = getCountry(cleanVAT, countriesList);
    if (!country)
        return result;
    const isValid = isVatValid(cleanVAT, country);
    if (isValid)
        return makeResult(cleanVAT, isValid, country);
    return result;
}

;// CONCATENATED MODULE: ./node_modules/jsvat/lib/es6/index.js

const countries = [
    austria,
    belgium,
    bulgaria,
    croatia,
    cyprus,
    czechRepublic,
    denmark,
    estonia,
    europe,
    finland,
    france,
    germany,
    greece,
    hungary,
    ireland,
    italy,
    latvia,
    lithuania,
    luxembourg,
    malta,
    netherlands,
    norway,
    poland,
    portugal,
    romania,
    russia,
    serbia,
    slovakiaRepublic,
    slovenia,
    spain,
    sweden,
    switzerland,
    unitedKingdom
];





/***/ }),

/***/ 56029:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isSymbol = __webpack_require__(33448);

/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index],
        current = iteratee(value);

    if (current != null && (computed === undefined
          ? (current === current && !isSymbol(current))
          : comparator(current, computed)
        )) {
      var computed = current,
          result = value;
    }
  }
  return result;
}

module.exports = baseExtremum;


/***/ }),

/***/ 67740:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIteratee = __webpack_require__(67206),
    isArrayLike = __webpack_require__(98612),
    keys = __webpack_require__(3674);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),

/***/ 13311:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var createFind = __webpack_require__(67740),
    findIndex = __webpack_require__(30998);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),

/***/ 30998:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(41848),
    baseIteratee = __webpack_require__(67206),
    toInteger = __webpack_require__(40554);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ 7436:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(41848),
    baseIteratee = __webpack_require__(67206),
    toInteger = __webpack_require__(40554);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * This method is like `_.findIndex` except that it iterates over elements
 * of `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ];
 *
 * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
 * // => 2
 *
 * // The `_.matches` iteratee shorthand.
 * _.findLastIndex(users, { 'user': 'barney', 'active': true });
 * // => 0
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findLastIndex(users, ['active', false]);
 * // => 2
 *
 * // The `_.property` iteratee shorthand.
 * _.findLastIndex(users, 'active');
 * // => 0
 */
function findLastIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = length - 1;
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex);
    index = fromIndex < 0
      ? nativeMax(length + index, 0)
      : nativeMin(index, length - 1);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index, true);
}

module.exports = findLastIndex;


/***/ }),

/***/ 7080:
/***/ (function(module) {

/*!
 * VATRates v2.0.3
 * MIT License
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_581__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_581__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_581__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_581__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__nested_webpack_require_581__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_581__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_581__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_581__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_581__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_581__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_581__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_581__(__nested_webpack_require_581__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {"rates":[{"name":"Austria","code":"AT","countryCode":"AT","periods":[{"effectiveFrom":"2016-01-01","rates":{"reduced":[10,13],"standard":20,"parking":13}},{"effectiveFrom":"0000-01-01","rates":{"reduced":[10],"standard":20,"parking":12}}]},{"name":"Belgium","code":"BE","countryCode":"BE","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[6,12],"standard":21,"parking":12}}]},{"name":"Bulgaria","code":"BG","countryCode":"BG","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[9],"standard":20}}]},{"name":"Croatia","code":"HR","countryCode":"HR","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[5,13],"standard":25}}]},{"name":"Cyprus","code":"CY","countryCode":"CY","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[5,9],"standard":19}}]},{"name":"Czech Republic","code":"CZ","countryCode":"CZ","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[10,15],"standard":21}}]},{"name":"Denmark","code":"DK","countryCode":"DK","periods":[{"effectiveFrom":"0000-01-01","rates":{"standard":25}}]},{"name":"Estonia","code":"EE","countryCode":"EE","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[9],"standard":20}}]},{"name":"Germany","code":"DE","countryCode":"DE","periods":[{"effectiveFrom":"2021-01-01","rates":{"reduced":[7],"standard":19}},{"effectiveFrom":"2020-07-01","rates":{"reduced":[5],"standard":16}},{"effectiveFrom":"2007-01-01","rates":{"reduced":[7],"standard":19}},{"effectiveFrom":"0000-01-01","rates":{"reduced":[7],"standard":16}}]},{"name":"Greece","code":"EL","countryCode":"GR","periods":[{"effectiveFrom":"2016-06-01","rates":{"reduced":[6,13],"standard":24}},{"effectiveFrom":"2015-01-01","rates":{"reduced":[6,13],"standard":23}},{"effectiveFrom":"0000-01-01","rates":{"reduced":[6.5,13],"standard":23}}]},{"name":"Finland","code":"FI","countryCode":"FI","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[10,14],"standard":24}}]},{"name":"France","code":"FR","countryCode":"FR","periods":[{"effectiveFrom":"0000-01-01","rates":{"superReduced":2.1,"reduced":[5.5,10],"standard":20}}]},{"name":"Hungary","code":"HU","countryCode":"HU","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[5,18],"standard":27}}]},{"name":"Ireland","code":"IE","countryCode":"IE","periods":[{"effectiveFrom":"0000-01-01","rates":{"superReduced":4.8,"reduced":[9,13.5],"standard":23,"parking":13.5}}]},{"name":"Italy","code":"IT","countryCode":"IT","periods":[{"effectiveFrom":"0000-01-01","rates":{"superReduced":4,"reduced":[5,10],"standard":22}}]},{"name":"Latvia","code":"LV","countryCode":"LV","periods":[{"effectiveFrom":"2018-01-01","rates":{"superReduced":5,"reduced":[12],"standard":21}},{"effectiveFrom":"0000-01-01","rates":{"reduced":[12],"standard":21}}]},{"name":"Lithuania","code":"LT","countryCode":"LT","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[5,9],"standard":21}}]},{"name":"Luxembourg","code":"LU","countryCode":"LU","periods":[{"effectiveFrom":"2016-01-01","rates":{"superReduced":3,"reduced":[8],"standard":17,"parking":14}},{"effectiveFrom":"2015-01-01","rates":{"superReduced":3,"reduced":[8,14],"standard":17,"parking":12}},{"effectiveFrom":"0000-01-01","rates":{"superReduced":3,"reduced":[6,12],"standard":15,"parking":12}}]},{"name":"Malta","code":"MT","countryCode":"MT","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[5,7],"standard":18}}]},{"name":"Netherlands","code":"NL","countryCode":"NL","periods":[{"effectiveFrom":"2019-01-01","rates":{"reduced":[9],"standard":21}},{"effectiveFrom":"2012-01-01","rates":{"reduced":[6],"standard":21}},{"effectiveFrom":"0000-01-01","rates":{"reduced":[6],"standard":19}}]},{"name":"Poland","code":"PL","countryCode":"PL","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[5,8],"standard":23}}]},{"name":"Portugal","code":"PT","countryCode":"PT","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[6,13],"standard":23,"parking":13}}]},{"name":"Romania","code":"RO","countryCode":"RO","periods":[{"effectiveFrom":"2017-01-01","rates":{"reduced":[5,9],"standard":19}},{"effectiveFrom":"2016-01-01","rates":{"reduced":[5,9],"standard":20}},{"effectiveFrom":"0000-01-01","rates":{"reduced":[5,9],"standard":24}}]},{"name":"Slovakia","code":"SK","countryCode":"SK","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[10],"standard":20}}]},{"name":"Slovenia","code":"SI","countryCode":"SI","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[9.5],"standard":22}}]},{"name":"Spain","code":"ES","countryCode":"ES","periods":[{"effectiveFrom":"0000-01-01","rates":{"superReduced":4,"reduced":[10],"standard":21}}]},{"name":"Sweden","code":"SE","countryCode":"SE","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[6,12],"standard":25}}]},{"name":"United Kingdom","code":"UK","countryCode":"GB","periods":[{"effectiveFrom":"2011-01-04","rates":{"reduced":[5],"standard":20}},{"effectiveFrom":"2010-01-01","rates":{"reduced":[5],"standard":17.5}},{"effectiveFrom":"2008-12-01","rates":{"reduced":[5],"standard":15}},{"effectiveFrom":"1991-03-19","rates":{"reduced":[8],"standard":17.5}},{"effectiveFrom":"0000-01-01","rates":{"reduced":[8],"standard":15}}]}]}

/***/ }),
/* 1 */
/***/ (function(module, exports, __nested_webpack_require_8274__) {

"use strict";


var VATPeriod = __nested_webpack_require_8274__(3);
var VATCountry = __nested_webpack_require_8274__(2);
var json = __nested_webpack_require_8274__(0);

var VATCountries = [];

if (json && json.rates) {
  json.rates.forEach(function (country) {
    var periods = [];

    if (country.periods) {
      country.periods.forEach(function (period) {
        periods.push(new VATPeriod(new Date(period.effectiveFrom), period.rates.superReduced, period.rates.reduced, period.rates.standard, period.rates.parking));
      });
    }

    VATCountries.push(new VATCountry(country.name, country.code, country.countryCode, periods));
  });
}

module.exports = VATCountries;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * VATCountry
 *
 * @param {string} name
 * @param {string} code
 * @param {string} countryCode
 * @param {VATPeriod[]} periods
 * @param {Date} [date]
 */
function VATCountry(name, code, countryCode, periods, date) {
  this._name = name;
  this._code = code;
  this._countryCode = countryCode;
  this._periods = periods;

  this.setDate(date);
}

/**
 * @returns {string}
 */
VATCountry.prototype.getName = function () {
  return this._name;
};

/**
 *
 * @returns {string}
 */
VATCountry.prototype.getCode = function () {
  return this._code;
};

/**
 * @returns {string}
 */
VATCountry.prototype.getCountryCode = function () {
  return this._countryCode;
};

/**
 * @returns {VATPeriod[]}
 */
VATCountry.prototype.getPeriods = function () {
  return this._periods;
};

/**
 * Set the date for which to return VAT rates.
 *
 * @param {Date|null} date
 */
VATCountry.prototype.setDate = function (date) {
  if (!date) {
    date = new Date();
  }
  this._date = date;
};

/**
 * Get the VATPeriod matching the given date.
 *
 * @param date
 * @returns {VATPeriod|undefined}
 */
VATCountry.prototype.getPeriod = function (date) {
  var resultPeriod;

  for (var i = this._periods.length - 1; i >= 0; i--) {
    var period = this._periods[i];

    if (period.getEffectiveFrom() <= date) {
      resultPeriod = period;
    }
  }

  return resultPeriod;
};

/**
 * Get the VATPeriod matching the current date.
 *
 * @returns {VATPeriod||undefined}
 */
VATCountry.prototype.getCurrentPeriod = function () {
  return this.getPeriod(this._date);
};

/**
 * Did this country use VAT on the given date.
 *
 * @returns {boolean}
 */
VATCountry.prototype.usedVATOnDate = function (date) {
  var period = this.getPeriod(date);

  return !!(period && period.getStandardRate());
};

/**
 * Did this country use VAT on the current date.
 *
 * @returns {boolean}
 */
VATCountry.prototype.usedVATOnCurrentDate = function () {
  return this.usedVATOnDate(this._date);
};

/**
 * Get the super reduced rate for this country.
 *
 * @returns {number|undefined}
 */
VATCountry.prototype.getSuperReducedRate = function () {
  var period = this.getCurrentPeriod();

  return period ? period.getSuperReducedRate() : undefined;
};

/**
 * Get the reduced rate for this country.
 *
 * @returns {number[]|undefined}
 */
VATCountry.prototype.getReducedRates = function () {
  var period = this.getCurrentPeriod();

  return period ? period.getReducedRates() : undefined;
};

/**
 * Get the standard rate for this country.
 *
 * @returns {number|undefined}
 */
VATCountry.prototype.getStandardRate = function () {
  var period = this.getCurrentPeriod();

  return period ? period.getStandardRate() : undefined;
};

/**
 * Get the parking rate for this country.
 *
 * @returns {number|undefined}
 */
VATCountry.prototype.getParkingRate = function () {
  var period = this.getCurrentPeriod();

  return period ? period.getParkingRate() : undefined;
};

module.exports = VATCountry;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * VATPeriod
 *
 * @param {Date} effectiveFrom
 * @param {number|undefined} [superReduced]
 * @param {array|undefined} [reduced]
 * @param {number|undefined} [standard]
 * @param {number|undefined} [parking]
 */
function VATPeriod(effectiveFrom, superReduced, reduced, standard, parking) {
  this._effectiveFrom = effectiveFrom;
  this._superReduced = superReduced;
  this._reduced = reduced;
  this._standard = standard;
  this._parking = parking;
}

/**
 * Get the Date from which this period is effective.
 *
 * @returns {Date}
 */
VATPeriod.prototype.getEffectiveFrom = function () {
  return this._effectiveFrom;
};

/**
 * Get the super reduced rate.
 *
 * @returns {number|undefined}
 */
VATPeriod.prototype.getSuperReducedRate = function () {
  return this._superReduced;
};

/**
 * Get the reduced rates.
 *
 * @returns {number[]|undefined}
 */
VATPeriod.prototype.getReducedRates = function () {
  return this._reduced;
};

/**
 * Get the standard rate.
 *
 * @returns {number|undefined}
 */
VATPeriod.prototype.getStandardRate = function () {
  return this._standard;
};

/**
 * Get the parking rate.
 *
 * @returns {number|undefined}
 */
VATPeriod.prototype.getParkingRate = function () {
  return this._parking;
};

module.exports = VATPeriod;

/***/ }),
/* 4 */
/***/ (function(module, exports, __nested_webpack_require_13392__) {

"use strict";


var json = __nested_webpack_require_13392__(0);
var VATCountries = __nested_webpack_require_13392__(1);

/**
 * VATRates
 *
 * @param {Date} [date]
 */
function VATRates(date) {
  this._countries = VATCountries;
  this.setDate(date);
}

/**
 * @param {Date|string} date
 */
VATRates.prototype.setDate = function (date) {
  if (!date) {
    date = new Date();
  } else if (typeof date === 'string') {
    date = new Date(date);
  }

  this._date = date;

  // set this date on all countries
  var countries = [];

  this._countries.forEach(function (country) {
    country.setDate(date);
    countries.push(country);
  });

  this._countries = countries.length > 0 ? countries : undefined;
};

/**
 * Get the countries that used VAT at the current date.
 * Optionally include countries that no longer use VAT.
 *
 * @param {boolean} [includeNoLongerUsingVAT]
 * @return {VATCountry[]}
 */
VATRates.prototype.getCountries = function (includeNoLongerUsingVAT) {
  if (includeNoLongerUsingVAT) {
    return this._countries;
  }

  var countries = [];

  this._countries.forEach(function (country) {
    if (country.usedVATOnCurrentDate()) {
      countries.push(country);
    }
  });

  return countries;
};

/**
 * Find a country that used VAT at the current date.
 *
 * @param {string} countryCode The country code to look for.
 * @returns {VATCountry|undefined} Returns the matched VATCountry, else `undefined`.
 */
VATRates.prototype.getCountry = function (countryCode) {
  countryCode = countryCode.toUpperCase();
  var countries = this.getCountries(),
      country;

  for (var i = 0; i < countries.length; i++) {
    if (countries[i].getCode() === countryCode || countries[i].getCountryCode() === countryCode) {
      country = countries[i];
    }
  }

  return country;
};

/**
 * Check if a country used VAT at the current date.
 *
 * @param {string} countryCode
 * @returns {boolean}
 */
VATRates.prototype.isVATCountry = function (countryCode) {
  // A country needs at least a standard rate at the current date.
  // This way we can remove countries from EU/VAT by adding a `period` without rates to the JSON.
  var country = this.getCountry(countryCode);

  return !!(country && country.usedVATOnCurrentDate());
};

/**
 * Get the super reduced rate for a country.
 *
 * @param {string} countryCode
 * @returns {number|undefined} Returns a number or `undefined`.
 */
VATRates.prototype.getSuperReducedRate = function (countryCode) {
  var country, result;
  if (country = this.getCountry(countryCode)) {
    result = country.getSuperReducedRate();
  }
  return result;
};

/**
 * Get the reduced rates for a country.
 *
 * @param {string} countryCode
 * @returns {number[]|undefined} Returns an Array of numbers, else `undefined`.
 */
VATRates.prototype.getReducedRates = function (countryCode) {
  var country, result;
  if (country = this.getCountry(countryCode)) {
    result = country.getReducedRates();
  }
  return result;
};

/**
 * Get the standard rate for a country.
 *
 * @param {string} countryCode
 * @returns {number|undefined} Returns a number or `undefined`.
 */
VATRates.prototype.getStandardRate = function (countryCode) {
  var country, result;
  if (country = this.getCountry(countryCode)) {
    result = country.getStandardRate();
  }
  return result;
};

/**
 * Get the parking rate for a country.
 *
 * @param {string} countryCode
 * @returns {number|undefined} Returns a number or `undefined`.
 */
VATRates.prototype.getParkingRate = function (countryCode) {
  var country, result;
  if (country = this.getCountry(countryCode)) {
    result = country.getParkingRate();
  }
  return result;
};

/**
 * The raw JSON data.
 *
 * @returns {Object}
 */
VATRates.prototype.getJSON = function () {
  return json;
};

module.exports = VATRates;

/***/ })
/******/ ]);
});

/***/ })

}]);
//# sourceMappingURL=2092-cb1294af588fc823.js.map