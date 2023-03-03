"use strict";
exports.id = 986;
exports.ids = [986];
exports.modules = {

/***/ 40986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$m": () => (/* binding */ formatFormErrorMessage),
/* harmony export */   "Sn": () => (/* binding */ verifyEmailPattern),
/* harmony export */   "VA": () => (/* binding */ verifyValueInRange),
/* harmony export */   "Yy": () => (/* binding */ verifyChecked),
/* harmony export */   "ay": () => (/* binding */ requireFields),
/* harmony export */   "zO": () => (/* binding */ verifyURLPattern),
/* harmony export */   "zy": () => (/* binding */ verifyFieldLength)
/* harmony export */ });
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24298);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71564);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12136);





const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  minLength: {
    id: "FormError.minLengthRich",
    defaultMessage: [{
      "type": 0,
      "value": "Please use more than "
    }, {
      "type": 1,
      "value": "count"
    }, {
      "type": 0,
      "value": " characters"
    }]
  },
  maxLength: {
    id: "FormError.maxLengthRich",
    defaultMessage: [{
      "type": 0,
      "value": "Please use fewer than "
    }, {
      "type": 1,
      "value": "count"
    }, {
      "type": 0,
      "value": " characters"
    }]
  },
  notInRange: {
    id: "f5QMcL",
    defaultMessage: [{
      "type": 0,
      "value": "Value must be between "
    }, {
      "type": 1,
      "value": "min"
    }, {
      "type": 0,
      "value": " and "
    }, {
      "type": 1,
      "value": "max"
    }]
  }
});

const isEmpty = value => {
  if (!value) {
    return true;
  } else if (Array.isArray(value) && value.length === 0) {
    return true;
  } else if (typeof value === 'string' && !value.trim()) {
    return true;
  } else {
    return false;
  }
};
/**
 * Will return an object of errors for all fields defined in `requiredFields`
 * that are not in `data`.
 */


const requireFields = (data, requiredFields, {
  stopOnFirstError = false
} = {}) => {
  const errors = {};

  for (const field of requiredFields) {
    const value = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(data, field);

    if (isEmpty(value)) {
      lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(errors, field, (0,_errors__WEBPACK_IMPORTED_MODULE_4__/* .createError */ .Tr)(_errors__WEBPACK_IMPORTED_MODULE_4__/* .ERROR.FORM_FIELD_REQUIRED */ .pn.FORM_FIELD_REQUIRED));

      if (stopOnFirstError) {
        return errors;
      }
    }
  }

  return errors;
};
const verifyFieldLength = (intl, errors, data, field, min, max) => {
  // Ignore if there's already an error on the field
  if (!errors[field]) {
    const length = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(data, field)?.length || 0;

    if (length < min) {
      const message = intl.formatMessage(messages.minLength, {
        count: min
      });

      lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(errors, field, (0,_errors__WEBPACK_IMPORTED_MODULE_4__/* .createError */ .Tr)(_errors__WEBPACK_IMPORTED_MODULE_4__/* .ERROR.FORM_FIELD_MIN_LENGTH */ .pn.FORM_FIELD_MIN_LENGTH, {
        message,
        hasI18nMessage: true
      }));
    } else if (length > max) {
      const message = intl.formatMessage(messages.maxLength, {
        count: max
      });

      lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(errors, field, (0,_errors__WEBPACK_IMPORTED_MODULE_4__/* .createError */ .Tr)(_errors__WEBPACK_IMPORTED_MODULE_4__/* .ERROR.FORM_FIELD_MAX_LENGTH */ .pn.FORM_FIELD_MAX_LENGTH, {
        message,
        hasI18nMessage: true
      }));
    }
  }

  return errors;
};
const verifyValueInRange = (intl, errors, data, field, min, max) => {
  const value = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(data, field); // Ignore if there's already an error on the field


  if (!errors[field] && (value < min || value > max)) {
    const message = intl.formatMessage(messages.notInRange, {
      min,
      max
    });

    lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(errors, field, (0,_errors__WEBPACK_IMPORTED_MODULE_4__/* .createError */ .Tr)(_errors__WEBPACK_IMPORTED_MODULE_4__/* .ERROR.FORM_FIELD_VALUE_NOT_IN_RANGE */ .pn.FORM_FIELD_VALUE_NOT_IN_RANGE, {
      message,
      hasI18nMessage: true
    }));
  }

  return errors;
};
const verifyChecked = (errors, data, field) => {
  // Ignore if there's already an error on the field
  if (!errors[field] && !data[field]) {
    lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(errors, field, (0,_errors__WEBPACK_IMPORTED_MODULE_4__/* .createError */ .Tr)(_errors__WEBPACK_IMPORTED_MODULE_4__/* .ERROR.FORM_FIELD_CHECK_REQUIRED */ .pn.FORM_FIELD_CHECK_REQUIRED));
  }

  return errors;
};
const verifyEmailPattern = (errors, data, field) => {
  const value = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(data, field);

  if (!errors[field] && value && !(0,validator__WEBPACK_IMPORTED_MODULE_3__.isEmail)(value)) {
    lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(errors, field, (0,_errors__WEBPACK_IMPORTED_MODULE_4__/* .createError */ .Tr)(_errors__WEBPACK_IMPORTED_MODULE_4__/* .ERROR.FORM_FIELD_PATTERN */ .pn.FORM_FIELD_PATTERN));
  }

  return errors;
};
const verifyURLPattern = (errors, data, field) => {
  const value = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(data, field);

  if (!errors[field] && value && !(0,validator__WEBPACK_IMPORTED_MODULE_3__.isURL)(value)) {
    lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(errors, field, (0,_errors__WEBPACK_IMPORTED_MODULE_4__/* .createError */ .Tr)(_errors__WEBPACK_IMPORTED_MODULE_4__/* .ERROR.FORM_FIELD_PATTERN */ .pn.FORM_FIELD_PATTERN));
  }

  return errors;
};
/**
 * A superset of `formatErrorMessage` that fallsback on `FORM_FIELD_INVALID_VALUE` for unknown errors.
 */

const formatFormErrorMessage = (intl, error) => {
  return (0,_errors__WEBPACK_IMPORTED_MODULE_4__/* .formatErrorMessage */ .jN)(intl, error, _errors__WEBPACK_IMPORTED_MODULE_4__/* .ERROR.FORM_FIELD_INVALID_VALUE */ .pn.FORM_FIELD_INVALID_VALUE);
};

/***/ })

};
;