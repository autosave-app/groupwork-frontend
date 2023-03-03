"use strict";
(() => {
var exports = {};
exports.id = 9603;
exports.ids = [9603];
exports.modules = {

/***/ 82497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82525);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const TranslatedTags = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.ASSOCIATION */ .B3.ASSOCIATION]: {
    id: "collective.category.association",
    defaultMessage: [{
      "type": 0,
      "value": "Association"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.COLLECTIVE */ .B3.COLLECTIVE]: {
    id: "Collective",
    defaultMessage: [{
      "type": 0,
      "value": "Collective"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.CONFERENCE */ .B3.CONFERENCE]: {
    id: "Tags.CONFERENCE",
    defaultMessage: [{
      "type": 0,
      "value": "Conference"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.COOPERATIVE */ .B3.COOPERATIVE]: {
    id: "collective.category.coop",
    defaultMessage: [{
      "type": 0,
      "value": "Cooperative"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.OPEN_SOURCE */ .B3.OPEN_SOURCE]: {
    id: "Tags.OPEN_SOURCE",
    defaultMessage: [{
      "type": 0,
      "value": "Open source"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.MEDIA */ .B3.MEDIA]: {
    id: "Tags.MEDIA",
    defaultMessage: [{
      "type": 0,
      "value": "Media"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.MEETUP */ .B3.MEETUP]: {
    id: "collective.category.meetup",
    defaultMessage: [{
      "type": 0,
      "value": "Meetup"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.MOVEMENT */ .B3.MOVEMENT]: {
    id: "collective.category.movement",
    defaultMessage: [{
      "type": 0,
      "value": "Movement"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.POLITICS */ .B3.POLITICS]: {
    id: "Tags.POLITICS",
    defaultMessage: [{
      "type": 0,
      "value": "Politics"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.TECH_MEETUP */ .B3.TECH_MEETUP]: {
    id: "Tags.TECH_MEETUP",
    defaultMessage: [{
      "type": 0,
      "value": "Tech meetup"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.US_NONPROFIT */ .B3.US_NONPROFIT]: {
    id: "Tags.US_NONPROFIT",
    defaultMessage: [{
      "type": 0,
      "value": "US nonprofit"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.EVENT */ .B3.EVENT]: {
    id: "ContributionType.Event",
    defaultMessage: [{
      "type": 0,
      "value": "Event"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.USER */ .B3.USER]: {
    id: "Tags.USER",
    defaultMessage: [{
      "type": 0,
      "value": "User"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.ORGANIZATION */ .B3.ORGANIZATION]: {
    id: "Tags.ORGANIZATION",
    defaultMessage: [{
      "type": 0,
      "value": "Organization"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.FUND */ .B3.FUND]: {
    id: "Tags.FUND",
    defaultMessage: [{
      "type": 0,
      "value": "Fund"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.PROJECT */ .B3.PROJECT]: {
    id: "ContributionType.Project",
    defaultMessage: [{
      "type": 0,
      "value": "Project"
    }]
  }
});
/** Translates a list of tags */

class I18nCollectiveTags extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    const {
      intl,
      children,
      tags,
      ignoreUntranslated
    } = this.props;
    const tagsToTranslate = typeof tags === 'string' ? [tags] : tags;
    const processedTags = tagsToTranslate.map(tag => {
      if (TranslatedTags[tag]) {
        return {
          value: intl.formatMessage(TranslatedTags[tag]),
          isTranslated: true
        };
      } else {
        return {
          value: tag,
          isTranslated: false
        };
      }
    });
    return children(ignoreUntranslated ? processedTags.filter(t => t.isTranslated) : processedTags);
  }

}

_defineProperty(I18nCollectiveTags, "defaultProps", {
  ignoreUntranslated: false,

  /** Default renderer, will render a string list */
  children: tags => {
    return tags.map((tag, index, translatedTags) => {
      if (index === translatedTags.length - 1) {
        return tag.value;
      } else {
        return `${tag.value}, `;
      }
    });
  }
});

I18nCollectiveTags.__docgenInfo = {
  "description": "Translates a list of tags",
  "methods": [],
  "displayName": "I18nCollectiveTags",
  "props": {
    "ignoreUntranslated": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "Ignore tags if translation is missing",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "children": {
      "defaultValue": {
        "value": "tags => {\n  return tags.map((tag, index, translatedTags) => {\n    if (index === translatedTags.length - 1) {\n      return tag.value;\n    } else {\n      return `${tag.value}, `;\n    }\n  });\n}",
        "computed": false
      },
      "description": "A function used to render the tag",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "tags": {
      "description": "A tag or a list of tags",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "arrayOf",
          "value": {
            "name": "string"
          }
        }]
      },
      "required": true
    },
    "intl": {
      "description": "@ignore",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_1__.injectIntl)(I18nCollectiveTags));

/***/ }),

/***/ 29242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29925);




const AnimateBackground = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(["0%{background-position:-100% 0;}100%{background-position:100% 0;}"]);
/**
 * A loading container that will show an animated block instead of a blank space.
 */

const LoadingPlaceholder = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "LoadingPlaceholder",
  componentId: "sc-bny1ps-0"
})(["animation:", " 1s linear infinite,", " 1s linear infinite;background:linear-gradient(to right,#eee 2%,#ddd 18%,#eee 33%);background-size:200%;width:100%;", " ", " ", ""], AnimateBackground, (0,_StyledKeyframes__WEBPACK_IMPORTED_MODULE_3__/* .flicker */ .Uh)({
  minOpacity: 0.8
}), styled_system__WEBPACK_IMPORTED_MODULE_2__.border, styled_system__WEBPACK_IMPORTED_MODULE_2__.layout, styled_system__WEBPACK_IMPORTED_MODULE_2__.space);
LoadingPlaceholder.propTypes = {
  height: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)])
};
LoadingPlaceholder.defaultProps = {
  height: '100%',
  borderRadius: '2%'
};
/** @component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingPlaceholder);

/***/ }),

/***/ 79045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63901);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87268);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97274);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const Pagination = ({
  route,
  limit,
  offset,
  total,
  scrollToTopOnChange,
  isDisabled,
  ignoredQueryParams
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  if (!router) {
    return null;
  }

  const totalPages = Math.ceil(total / limit);
  const currentPage = offset / limit + 1;
  const queryParams = ignoredQueryParams ? lodash_omit__WEBPACK_IMPORTED_MODULE_0___default()(router.query, ignoredQueryParams) : router.query;
  route = route || router.asPath.split('?')[0];
  isDisabled = isDisabled || totalPages <= 1;

  const changePage = async ({
    target,
    key
  }) => {
    if (key && key !== 'Enter') {
      return;
    }

    const {
      value
    } = target;

    if (!value || !parseInt(value) || parseInt(value) === currentPage) {
      return;
    }

    await router.push({
      pathname: route,
      query: _objectSpread(_objectSpread({}, queryParams), {}, {
        offset: (value - 1) * limit
      })
    });

    if (scrollToTopOnChange) {
      window.scrollTo(0, 0);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
    alignItems: "center",
    children: [currentPage > 1 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      href: {
        pathname: route,
        query: _objectSpread(_objectSpread({}, queryParams), {}, {
          offset: offset - limit
        })
      },
      scroll: scrollToTopOnChange,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        buttonSize: "small",
        disabled: isDisabled,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "Pagination.Prev",
          defaultMessage: [{
            "type": 0,
            "value": "Previous"
          }]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      display: "inline-block",
      mx: 2,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
        id: "Pagination.Count",
        defaultMessage: [{
          "type": 0,
          "value": "Page "
        }, {
          "type": 1,
          "value": "current"
        }, {
          "type": 0,
          "value": " of "
        }, {
          "type": 1,
          "value": "total"
        }],
        values: {
          current: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
            defaultValue: currentPage,
            onBlur: changePage,
            onKeyPress: changePage,
            textAlign: "center",
            mx: 1,
            px: 1,
            py: 1,
            width: 30,
            disabled: isDisabled,
            type: "text",
            pattern: "[0-9]+",
            inputMode: "numeric",
            "data-cy": "pagination-current"
          }, offset),
          total: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
            "data-cy": "pagination-total",
            children: totalPages || 1
          })
        }
      })
    }), currentPage < totalPages && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      href: {
        pathname: route,
        query: _objectSpread(_objectSpread({}, queryParams), {}, {
          offset: offset + limit
        })
      },
      scroll: scrollToTopOnChange,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        buttonSize: "small",
        disabled: isDisabled,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "Pagination.Next",
          defaultMessage: [{
            "type": 0,
            "value": "Next"
          }]
        })
      })
    })]
  });
};

Pagination.defaultProps = {
  scrollToTopOnChange: true
};
Pagination.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Pagination",
  "props": {
    "scrollToTopOnChange": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "Use this to scroll back on top when pagination changes",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "limit": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "offset": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "total": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "isDisabled": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "route": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "ignoredQueryParams": {
      "description": "By default, all query params will be transferred in the paginated link. This prop is useful to filter query params that are part of the URL.",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

/***/ }),

/***/ 59049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87268);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);

const _excluded = ["filters", "onChange", "disabled", "getLabel", "selected", "minButtonWidth", "buttonHeight", "buttonPadding", "buttonGrow"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const FilterButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_StyledButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).attrs({
  buttonSize: 'tiny',
  buttonStyle: 'standard'
}).withConfig({
  displayName: "StyledFilters__FilterButton",
  componentId: "sc-191fmam-0"
})(["font-size:14px;font-weight:400;height:", ";padding:", ";background:#f9fafb;border-color:white;color:", ";", " &:active{background-color:", ";color:", ";}&:focus{border:2px solid #050505;}"], props => props.heignt, props => props.padding, props => props.theme.colors.black[800], props => props['data-selected'] && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["&,&:hover,&:focus{background-color:", ";border:1px solid ", ";color:", ";box-shadow:none;}"], props => props.theme.colors.primary[100], props => props.theme.colors.primary[700], props => props.theme.colors.primary[900]), props => props.theme.colors.primary[100], props => props.theme.colors.primary[800]);
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "StyledFilters__ButtonContainer",
  componentId: "sc-191fmam-1"
})(["", ""], props => props.flexGrow && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["flex-grow:", ";"], props.flexGrow));

const defaultGetLabel = filter => filter;
/**
 * A controlled component to display a list of filters.
 */


const StyledFilters = _ref => {
  let {
    filters,
    onChange,
    disabled = false,
    getLabel = defaultGetLabel,
    selected = undefined,
    minButtonWidth = undefined,
    buttonHeight = '34px',
    buttonPadding = '4px 14px',
    buttonGrow = undefined
  } = _ref,
      flexProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_StyledFlex, _objectSpread(_objectSpread({
    "data-cy": "filters",
    px: 1,
    py: 1,
    gap: "8px"
  }, flexProps), {}, {
    children: filters.map(filter => {
      const isSelected = filter === selected;
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(ButtonContainer, {
        flexGrow: buttonGrow,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(FilterButton, {
          "data-cy": `filter-button ${filter.toLowerCase()}`,
          onClick: isSelected ? undefined : () => onChange(filter),
          "data-selected": isSelected,
          minWidth: minButtonWidth,
          disabled: disabled,
          height: buttonHeight,
          padding: buttonPadding,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Text__WEBPACK_IMPORTED_MODULE_4__/* .Span */ .Dr, {
            whiteSpace: "nowrap",
            children: getLabel(filter)
          })
        })
      }, filter);
    })
  }));
};

StyledFilters.__docgenInfo = {
  "description": "A controlled component to display a list of filters.",
  "methods": [],
  "displayName": "StyledFilters",
  "props": {
    "disabled": {
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
    "getLabel": {
      "defaultValue": {
        "value": "filter => filter",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "selected": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "minButtonWidth": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
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
    "buttonHeight": {
      "defaultValue": {
        "value": "'34px'",
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
    "buttonPadding": {
      "defaultValue": {
        "value": "'4px 14px'",
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
    "buttonGrow": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "filters": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": true
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledFilters);

var _StyledFlex = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC).withConfig({
  displayName: "StyledFilters___StyledFlex",
  componentId: "sc-191fmam-2"
})({
  overflowX: 'auto'
});

/***/ }),

/***/ 52847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ StyledSelectFilter),
/* harmony export */   "v": () => (/* binding */ getSelectFilterStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66943);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const getSelectFilterStyles = stylesFromProps => _objectSpread(_objectSpread({}, stylesFromProps || null), {}, {
  control: (baseStyles, state) => {
    const styles = _objectSpread(_objectSpread(_objectSpread({}, baseStyles), {}, {
      background: '#F7F8FA',
      borderRadius: 100,
      padding: '0 8px',
      fontWeight: 500,
      borderColor: '#E8E9EB'
    }, stylesFromProps?.control || null), {}, {
      '&:hover': {
        borderColor: '#C4C7CC'
      }
    });

    if (state.isFocused) {
      styles.background = 'white';
      styles.boxShadow = '0 0 0 2px black';
    }

    return styles;
  }
});
/**
 * A superset of `StyledSelect` with custom styles, to use for selects that contains
 * filters for lists.
 */

const StyledSelectFilter = props => {
  const styles = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => getSelectFilterStyles(props.styles), [props.styles]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
    minWidth: 80,
    fontSize: "12px",
    lineHeight: "14px",
    isSearchable: false
  }, props), {}, {
    styles: styles
  }));
};
StyledSelectFilter.__docgenInfo = {
  "description": "A superset of `StyledSelect` with custom styles, to use for selects that contains\nfilters for lists.",
  "methods": [],
  "displayName": "StyledSelectFilter",
  "props": {
    "inputId": {
      "description": "The id of the search input",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "instanceId": {
      "description": "Define an id prefix for the select components e.g., {your-id}-value",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "placeholder": {
      "description": "Placeholder for the select value",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "disabled": {
      "description": "Whether the component is disabled",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "styles": {
      "description": "Additional styles for the component",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};

/***/ }),

/***/ 47713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51858);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82525);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _Currency__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93129);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(173);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var _StyledCollectiveCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91496);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);

const _excluded = ["collective"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










/**
 * A card to show a collective on the search page.
 */




const SearchCollectiveCard = _ref => {
  let {
    collective
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledCollectiveCard__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    collective: collective,
    position: "relative"
  }, props), {}, {
    "data-cy": "collective-card",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      p: 3,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        "data-cy": "caption",
        mb: 2,
        children: [collective.isHost && collective.host ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
          children: [collective.host?.totalHostedCollectives > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
            pb: "6px",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
              fontSize: "14px",
              fontWeight: 700,
              color: "black.900",
              children: collective.host.totalHostedCollectives
            }), ` `, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
              fontSize: "12px",
              fontWeight: 400,
              color: "black.700",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "X8Pa2K",
                defaultMessage: [{
                  "type": 6,
                  "value": "count",
                  "options": {
                    "one": {
                      "value": [{
                        "type": 0,
                        "value": "Collective"
                      }]
                    },
                    "other": {
                      "value": [{
                        "type": 0,
                        "value": "Collectives"
                      }]
                    }
                  },
                  "offset": 0,
                  "pluralType": "cardinal"
                }, {
                  "type": 0,
                  "value": " hosted"
                }],
                values: {
                  count: collective.host.totalHostedCollectives
                }
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
            pb: "6px",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
              fontSize: "14px",
              fontWeight: 700,
              color: "black.900",
              children: collective.currency
            }), ` `, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
              fontSize: "12px",
              fontWeight: 400,
              color: "black.700",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "Currency",
                defaultMessage: [{
                  "type": 0,
                  "value": "Currency"
                }]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
              fontSize: "14px",
              fontWeight: 700,
              color: "black.900",
              children: `${collective.host.hostFeePercent}%`
            }), ` `, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
              fontSize: "12px",
              fontWeight: 400,
              color: "black.700",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "NJsELs",
                defaultMessage: [{
                  "type": 0,
                  "value": "Host Fee"
                }]
              })
            })]
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
            fontSize: "12px",
            lineHeight: "18px",
            children: collective.backers.totalCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
              pb: "6px",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
                fontSize: "14px",
                fontWeight: 700,
                color: "black.900",
                children: collective.backers.totalCount
              }), ` `, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
                fontSize: "12px",
                fontWeight: 400,
                color: "black.700",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                  id: "MspQpE",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Financial "
                  }, {
                    "type": 6,
                    "value": "count",
                    "options": {
                      "one": {
                        "value": [{
                          "type": 0,
                          "value": "Contributor"
                        }]
                      },
                      "other": {
                        "value": [{
                          "type": 0,
                          "value": "Contributors"
                        }]
                      }
                    },
                    "offset": 0,
                    "pluralType": "cardinal"
                  }],
                  values: {
                    count: collective.backers.totalCount
                  }
                })
              })]
            })
          }), collective.type !== _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION && collective.stats.totalAmountReceived.valueInCents > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
            pb: "6px",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
              fontSize: "14px",
              fontWeight: 700,
              color: "black.900",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Currency__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                currency: collective.stats.totalAmountReceived.currency,
                formatWithSeparators: true,
                value: collective.stats.totalAmountReceived.valueInCents
              })
            }), ` `, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
              fontSize: "12px",
              fontWeight: 400,
              color: "black.700",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "ooRGC9",
                defaultMessage: [{
                  "type": 0,
                  "value": "Money raised"
                }]
              })
            })]
          }), collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION && Math.abs(collective.stats.totalAmountSpent.valueInCents) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
            pb: "6px",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
              fontSize: "14px",
              fontWeight: 700,
              color: "black.900",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Currency__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                currency: collective.stats.totalAmountSpent.currency,
                formatWithSeparators: true,
                value: Math.abs(collective.stats.totalAmountSpent.valueInCents)
              })
            }), ` `, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
              fontSize: "12px",
              fontWeight: 400,
              color: "black.700",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "AmountContributed",
                defaultMessage: [{
                  "type": 0,
                  "value": "Contributed"
                }]
              })
            })]
          })]
        }), collective.description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          fontSize: "12px",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
            alignItems: "center",
            justifyContent: "space-between",
            mt: 21.5,
            mb: 4.5,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
              textTransform: "uppercase",
              color: "black.700",
              fontWeight: 500,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "ZjDH42",
                defaultMessage: [{
                  "type": 0,
                  "value": "About Us"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              borderColor: "black.300",
              flex: "1",
              ml: 2
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
            fontWeight: 400,
            color: "black.800",
            children: lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default()(collective.description, {
              length: 85
            })
          })]
        })]
      })
    })
  }));
};

SearchCollectiveCard.__docgenInfo = {
  "description": "A card to show a collective on the search page.",
  "methods": [],
  "displayName": "SearchCollectiveCard",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "type": {
            "name": "enum",
            "computed": true,
            "value": "Object.values(CollectiveType)",
            "required": true
          },
          "currency": {
            "name": "string",
            "required": false
          },
          "description": {
            "name": "string",
            "required": false
          },
          "isHost": {
            "name": "bool",
            "required": false
          },
          "stats": {
            "name": "shape",
            "value": {
              "totalAmountReceived": {
                "name": "shape",
                "value": {
                  "valueInCents": {
                    "name": "number",
                    "required": false
                  },
                  "currency": {
                    "name": "string",
                    "required": false
                  }
                },
                "required": false
              },
              "totalAmountSpent": {
                "name": "shape",
                "value": {
                  "valueInCents": {
                    "name": "number",
                    "required": false
                  },
                  "currency": {
                    "name": "string",
                    "required": false
                  }
                },
                "required": false
              }
            },
            "required": false
          },
          "host": {
            "name": "shape",
            "value": {
              "totalHostedCollectives": {
                "name": "number",
                "required": false
              },
              "hostFeePercent": {
                "name": "number",
                "required": false
              }
            },
            "required": false
          },
          "backers": {
            "name": "shape",
            "value": {
              "totalCount": {
                "name": "number",
                "required": false
              }
            },
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)(SearchCollectiveCard));

/***/ }),

/***/ 91496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82525);
/* harmony import */ var _lib_i18n__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(78080);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69078);
/* harmony import */ var _I18nCollectiveTags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82497);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97619);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19156);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51082);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36422);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);

const _excluded = ["collective", "tag", "bodyHeight", "children", "borderRadius", "showWebsite", "useLink"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const MaskSVG = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("svg", _objectSpread(_objectSpread({
  xmlns: "http://www.w3.org/2000/svg",
  width: "216",
  height: "94",
  fill: "none",
  version: "1.1",
  viewBox: "0 0 216 94"
}, props), {}, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("defs", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("mask", {
      width: "218",
      height: "106",
      x: "-1",
      y: "-1",
      maskUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        fill: "#fff",
        d: "M0 8a8 8 0 018-8h200a8 8 0 018 8v95.719H0V8z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        stroke: "#141414",
        strokeOpacity: "0.08",
        d: "M216 104.219h.5V8A8.5 8.5 0 00208-.5H8A8.5 8.5 0 00-.5 8v96.219H216z"
      })]
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("g", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
      fill: "#fff",
      fillOpacity: "1",
      strokeWidth: "1.019",
      d: "M-29.076-51.033V94.016h350.922v-145.05zm7.889 10.678h320.992v122.23l-30.217.016C148.917 81.89 42.4 33.48-21.188-40.355z",
      clipPath: "none",
      opacity: "1"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("g", {
      fillRule: "evenodd",
      stroke: "#000",
      clipRule: "evenodd",
      opacity: "0.256",
      transform: "translate(-.473 -2.219)",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M154.819 85.253a1.097 1.097 0 10.242-2.18 1.097 1.097 0 10-.242 2.18z",
        opacity: "0.4"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M136.433 82.941a.825.825 0 10.184-1.64.825.825 0 00-.184 1.64z",
        opacity: "0.4"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M203.299 87.726a1.474 1.474 0 001.628-1.3 1.473 1.473 0 00-1.303-1.625 1.471 1.471 0 10-.325 2.925z",
        opacity: "0.8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M114.367 70.557a1.883 1.883 0 002.08-1.66 1.881 1.881 0 00-1.665-2.076 1.88 1.88 0 10-.415 3.737z",
        opacity: "0.56"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M186.109 83.318a2.378 2.378 0 10.525-4.726 2.381 2.381 0 00-2.63 2.101 2.379 2.379 0 002.105 2.625z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M143.791 80.918a2.919 2.919 0 003.224-2.574 2.916 2.916 0 00-2.58-3.217 2.919 2.919 0 00-3.224 2.575 2.916 2.916 0 002.58 3.216z",
        opacity: "0.8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M212.607 84.193a3.386 3.386 0 003.74-2.987 3.382 3.382 0 00-2.993-3.732 3.385 3.385 0 00-3.74 2.987 3.382 3.382 0 002.993 3.732z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M163.805 82.538c3.205.354 6.092-1.951 6.447-5.15a5.83 5.83 0 00-5.16-6.433c-3.205-.355-6.091 1.95-6.446 5.149a5.829 5.829 0 005.159 6.434z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M128.729 71.28c3.205.355 6.092-1.95 6.447-5.149a5.83 5.83 0 00-5.16-6.434 5.837 5.837 0 00-6.447 5.15 5.83 5.83 0 005.16 6.433z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M66.675 52.908a1.1 1.1 0 001.456-.543 1.1 1.1 0 00-2-.909 1.096 1.096 0 00.544 1.452z",
        opacity: "0.4"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M53.207 44.413a.824.824 0 10.685-1.5.824.824 0 10-.685 1.5z",
        opacity: "0.4"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M91.587 58.032c.946.43 2.063.013 2.494-.931a1.878 1.878 0 00-.933-2.49 1.885 1.885 0 00-2.495.932 1.878 1.878 0 00.934 2.49z",
        opacity: "0.8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M49.346 37.675c.947.43 2.064.013 2.495-.932a1.878 1.878 0 00-.933-2.49 1.885 1.885 0 00-2.495.932 1.878 1.878 0 00.933 2.49z",
        opacity: "0.56"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M78.377 55.988a3.142 3.142 0 004.158-1.553 3.13 3.13 0 00-1.556-4.149 3.142 3.142 0 00-4.158 1.553 3.13 3.13 0 001.556 4.15z",
        opacity: "0.8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M60.83 44.779a2.922 2.922 0 003.867-1.444 2.911 2.911 0 00-1.447-3.86 2.922 2.922 0 00-3.867 1.445 2.911 2.911 0 001.447 3.859z",
        opacity: "0.8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M101.667 57.106a4.87 4.87 0 006.445-2.407 4.853 4.853 0 00-2.412-6.432 4.87 4.87 0 00-6.445 2.407 4.852 4.852 0 002.412 6.432z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M72.624 47.481a5.844 5.844 0 007.734-2.888 5.822 5.822 0 00-2.895-7.718 5.844 5.844 0 00-7.733 2.888 5.822 5.822 0 002.894 7.718z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M49.527 30.937a5.844 5.844 0 007.734-2.889 5.822 5.822 0 00-2.894-7.718 5.844 5.844 0 00-7.734 2.889 5.822 5.822 0 002.894 7.718z"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
      fill: "#000",
      stroke: "#d7dbe0",
      d: "M299.255-21.884v-.6c-21.806-.021-46.554-.047-72.687-.075-83.118-.088-180.234-.191-241.156-.192C7.777 6.713 53.995 31.648 99.682 50.092c46.031 18.583 91.412 30.534 111.052 33.881 13.3 2.267 32.194 2.943 49.455 2.397 8.627-.273 16.833-.85 23.715-1.684 6.667-.808 12.04-1.85 15.351-3.068V-18.991z",
      opacity: "0.063"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
      fill: "#000",
      stroke: "#c0c5cc",
      d: "M15.177 4.672c-12.039-9.276-19.48-21.62-16.53-37.18 12.985-.001 57.111-.049 108.753-.104l33.53-.037c65.42-.07 134.576-.14 164.911-.14v58.76c0 .942.247 2.058.644 3.295.4 1.243.963 2.642 1.62 4.158.513 1.185 1.08 2.438 1.675 3.75.937 2.067 1.942 4.283 2.904 6.614 3.141 7.611 5.693 16.147 3.643 23.681-2.028 7.45-8.62 14.098-24.231 17.838-15.628 3.744-40.181 4.537-77.885.323-37.237-4.162-66.277-17.735-90.837-31.272-5.346-2.946-10.491-5.898-15.464-8.75-6.43-3.688-12.57-7.211-18.484-10.344-10.503-5.563-20.374-9.944-30.062-11.925-15.249-3.119-32.031-9.301-44.187-18.667z",
      opacity: "0.06"
    })]
  })]
}));

const StyledBackgroundMask = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(MaskSVG).withConfig({
  displayName: "StyledCollectiveCard__StyledBackgroundMask",
  componentId: "sc-ljfh0u-0"
})(["width:101%;height:102%;top:0;left:-1px;position:absolute;"]);

const getBackground = collective => {
  const parent = collective.parentCollective || collective.parent;
  const backgroundImage = collective.backgroundImageUrl || parent?.backgroundImageUrl;

  const primaryColor = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(collective.settings, 'collectivePage.primaryColor', '#1776E1');

  return backgroundImage ? `url(${backgroundImage}) 0 0 / cover no-repeat, ${primaryColor}` : primaryColor;
};

const CollectiveContainer = ({
  useLink,
  collective,
  children
}) => {
  if (useLink) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      collective: collective,
      children: children
    });
  } else {
    return children;
  }
};

const getFlagEmoji = countryCode => {
  const codePoints = countryCode.toUpperCase().split('').map(char => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
};

/**
 * A card to show a collective that supports including a custom body.
 *
 * TODO: This component is mostly copies from ../StyledCollectiveCard.js added until we completely deprecate the discover page.
 */
const StyledCollectiveCard = _ref => {
  let {
    collective,
    tag,
    bodyHeight,
    children,
    borderRadius,
    showWebsite,
    useLink
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const regionNames = (0,_lib_i18n__WEBPACK_IMPORTED_MODULE_15__/* .getIntlDisplayNames */ ._)(intl.locale, 'region');
  const collectiveCountry = collective.location?.country || collective.parent?.location?.country;
  const countryString = collectiveCountry ? `${getFlagEmoji(collectiveCountry)} ${regionNames.of(collectiveCountry)}` : null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_StyledCard__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, props), {}, {
    position: "relative",
    borderRadius: borderRadius,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      position: "absolute",
      width: "95%",
      right: "0",
      pt: "41.25%",
      style: {
        background: getBackground(collective)
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(StyledBackgroundMask, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      position: "relative",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        height: 74,
        px: 3,
        pt: 26,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          borderRadius: borderRadius,
          background: "white",
          width: 48,
          border: "3px solid white",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(CollectiveContainer, {
            useLink: useLink,
            collective: collective,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
              "data-cy": "collective-avatar",
              collective: collective,
              radius: 48
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: bodyHeight,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          p: 3,
          pb: 0,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(CollectiveContainer, {
            useLink: useLink,
            collective: collective,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__.P, {
              mt: 3,
              fontSize: "16px",
              fontWeight: "bold",
              color: "black.800",
              title: collective.name,
              truncateOverflow: true,
              children: collective.name
            })
          }), showWebsite && collective.website && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__.P, {
            fontSize: "11px",
            fontWeight: "400",
            title: collective.website,
            truncateOverflow: true,
            mt: 1,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              color: "black.600",
              href: collective.website,
              openInNewTabNoFollow: true,
              children: collective.website
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            children: [tag === undefined ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
              display: "inline-block",
              variant: "rounded-right",
              my: 2,
              backgroundColor: "blue.50",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_I18nCollectiveTags__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                tags: (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_4__/* .getCollectiveMainTag */ .CJ)(null, null, collective.type)
              })
            }) : tag, countryString && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__/* .Span */ .Dr, {
              ml: 2,
              fontSize: "12px",
              color: "black.700",
              fontWeight: 400,
              children: countryString
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            children: collective.tags && collective.tags.filter(tag => !_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_5__/* .IGNORED_TAGS.includes */ .bR.includes(tag)).slice(0, 4).map(tag => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
              display: "inline-block",
              variant: "rounded-right",
              m: 1,
              children: tag
            }, tag))
          })]
        }), children]
      })]
    })]
  }));
};

StyledCollectiveCard.defaultProps = {
  bodyHeight: 336,
  borderRadius: 16,
  useLink: true
};
StyledCollectiveCard.__docgenInfo = {
  "description": "A card to show a collective that supports including a custom body.\n\nTODO: This component is mostly copies from ../StyledCollectiveCard.js added until we completely deprecate the discover page.",
  "methods": [],
  "displayName": "StyledCollectiveCard",
  "props": {
    "bodyHeight": {
      "defaultValue": {
        "value": "336",
        "computed": false
      },
      "description": "A fixed height for the content",
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
    "borderRadius": {
      "defaultValue": {
        "value": "16",
        "computed": false
      },
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
    },
    "useLink": {
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
    "children": {
      "description": "Displayed below the top header of the card",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "tag": {
      "description": "To replace the default tag. Set to `null` to hide tag",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "collective": {
      "description": "The collective to display",
      "type": {
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
          },
          "backgroundImageUrl": {
            "name": "string",
            "required": false
          },
          "website": {
            "name": "string",
            "required": false
          },
          "tags": {
            "name": "arrayOf",
            "value": {
              "name": "string"
            },
            "required": false
          },
          "location": {
            "name": "shape",
            "value": {
              "country": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "settings": {
            "name": "object",
            "required": false
          },
          "host": {
            "name": "shape",
            "value": {
              "id": {
                "name": "union",
                "value": [{
                  "name": "number"
                }, {
                  "name": "string"
                }],
                "required": false
              },
              "location": {
                "name": "shape",
                "value": {
                  "country": {
                    "name": "string",
                    "required": false
                  }
                },
                "required": false
              }
            },
            "required": false
          },
          "parentCollective": {
            "name": "shape",
            "value": {
              "backgroundImageUrl": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "parent": {
            "name": "shape",
            "value": {
              "backgroundImageUrl": {
                "name": "string",
                "required": false
              },
              "location": {
                "name": "shape",
                "value": {
                  "country": {
                    "name": "string",
                    "required": false
                  }
                },
                "required": false
              }
            },
            "required": false
          }
        }
      },
      "required": true
    },
    "showWebsite": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledCollectiveCard);

/***/ }),

/***/ 69836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);

const MESSAGES = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  ACTIVITY: {
    id: "ZmlNQ3",
    defaultMessage: [{
      "type": 0,
      "value": "Activity"
    }]
  },
  RANK: {
    id: "XNgXMJ",
    defaultMessage: [{
      "type": 0,
      "value": "Relevancy"
    }]
  },
  'CREATED_AT.ASC': {
    id: "d8OVmo",
    defaultMessage: [{
      "type": 0,
      "value": "Oldest created"
    }]
  },
  'CREATED_AT.DESC': {
    id: "RC6rA2",
    defaultMessage: [{
      "type": 0,
      "value": "Recently created"
    }]
  }
});

const i18nSearchSortingOptions = (intl, sortOption) => {
  const i18nMsg = MESSAGES[sortOption];
  return i18nMsg ? intl.formatMessage(i18nMsg) : sortOption;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18nSearchSortingOptions);

/***/ }),

/***/ 40868:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MockSearchPage": () => (/* binding */ SearchPage),
/* harmony export */   "addSearchPageData": () => (/* binding */ addSearchPageData),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "searchPageQuery": () => (/* binding */ searchPageQuery)
/* harmony export */ });
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69309);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51858);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_toLower__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26537);
/* harmony import */ var lodash_toLower__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_toLower__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20808);
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_pickBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_differenceWith__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22219);
/* harmony import */ var lodash_differenceWith__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_differenceWith__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styled_icons_boxicons_regular_ShareAlt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29431);
/* harmony import */ var _styled_icons_boxicons_regular_ShareAlt__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_ShareAlt__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68887);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(82525);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(32651);
/* harmony import */ var _lib_i18n_search_sorting_options__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(69836);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(97079);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(69078);
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(73908);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(16159);
/* harmony import */ var _components_Hide__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(84582);
/* harmony import */ var _components_I18nFormatters__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(88705);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(56562);
/* harmony import */ var _components_InputTypeCountry__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(32143);
/* harmony import */ var _components_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(29242);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(84842);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(79045);
/* harmony import */ var _components_search_page_SearchCollectiveCard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(47713);
/* harmony import */ var _components_SearchForm__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(72427);
/* harmony import */ var _components_StyledButton__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(87268);
/* harmony import */ var _components_StyledFilters__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(59049);
/* harmony import */ var _components_StyledHr__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(173);
/* harmony import */ var _components_StyledKeyframes__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(29925);
/* harmony import */ var _components_StyledSelectFilter__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(52847);
/* harmony import */ var _components_StyledTag__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(36422);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(90998);
/* harmony import */ var _components_ToastProvider__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ErrorPage__WEBPACK_IMPORTED_MODULE_19__, _components_Page__WEBPACK_IMPORTED_MODULE_26__, _components_ToastProvider__WEBPACK_IMPORTED_MODULE_37__]);
([_components_ErrorPage__WEBPACK_IMPORTED_MODULE_19__, _components_Page__WEBPACK_IMPORTED_MODULE_26__, _components_ToastProvider__WEBPACK_IMPORTED_MODULE_37__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



































const CollectiveCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_13___default().div.withConfig({
  displayName: "search__CollectiveCardContainer",
  componentId: "sc-1nw0kva-0"
})(["animation:", " 0.2s;"], _components_StyledKeyframes__WEBPACK_IMPORTED_MODULE_33__/* .fadeIn */ .Ji);
const AllCardsContainer = styled_components__WEBPACK_IMPORTED_MODULE_13___default()(_components_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Grid */ .rj).attrs({
  width: '100%',
  maxWidth: 1200,
  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 2fr))'
}).withConfig({
  displayName: "search__AllCardsContainer",
  componentId: "sc-1nw0kva-1"
})([""]);
const FILTERS = {
  ALL: 'ALL',
  COLLECTIVE: 'COLLECTIVE',
  EVENT: 'EVENT',
  ORGANIZATION: 'ORGANIZATION',
  HOST: 'HOST',
  PROJECT: 'PROJECT',
  FUND: 'FUND'
};
const I18nFilters = (0,react_intl__WEBPACK_IMPORTED_MODULE_12__.defineMessages)({
  [FILTERS.ALL]: {
    id: "Amount.AllShort",
    defaultMessage: [{
      "type": 0,
      "value": "All"
    }]
  },
  [FILTERS.COLLECTIVE]: {
    id: "Collectives",
    defaultMessage: [{
      "type": 0,
      "value": "Collectives"
    }]
  },
  [FILTERS.EVENT]: {
    id: "Events",
    defaultMessage: [{
      "type": 0,
      "value": "Events"
    }]
  },
  [FILTERS.ORGANIZATION]: {
    id: "TopContributors.Organizations",
    defaultMessage: [{
      "type": 0,
      "value": "Organizations"
    }]
  },
  [FILTERS.HOST]: {
    id: "searchFilter.host",
    defaultMessage: [{
      "type": 0,
      "value": "Fiscal hosts"
    }]
  },
  [FILTERS.PROJECT]: {
    id: "Projects",
    defaultMessage: [{
      "type": 0,
      "value": "Projects"
    }]
  },
  [FILTERS.FUND]: {
    id: "59l1l8",
    defaultMessage: [{
      "type": 0,
      "value": "Funds"
    }]
  }
});
const SearchFormContainer = styled_components__WEBPACK_IMPORTED_MODULE_13___default()(_components_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Box */ .xu).withConfig({
  displayName: "search__SearchFormContainer",
  componentId: "sc-1nw0kva-2"
})(["height:58px;width:608px;min-width:10rem;"]);
const FilterLabel = styled_components__WEBPACK_IMPORTED_MODULE_13___default().label.withConfig({
  displayName: "search__FilterLabel",
  componentId: "sc-1nw0kva-3"
})(["font-weight:500;font-size:12px;line-height:16px;text-transform:uppercase;padding-bottom:8px;color:#4d4f51;"]);

const constructSortByQuery = sortByValue => {
  let query = {};

  if (sortByValue === 'ACTIVITY') {
    query = {
      field: 'ACTIVITY',
      direction: 'DESC'
    };
  } else if (sortByValue === 'RANK') {
    query = {
      field: 'RANK',
      direction: 'DESC'
    };
  } else if (sortByValue === 'CREATED_AT.DESC') {
    query = {
      field: 'CREATED_AT',
      direction: 'DESC'
    };
  } else if (sortByValue === 'CREATED_AT.ASC') {
    query = {
      field: 'CREATED_AT',
      direction: 'ASC'
    };
  }

  return query;
};

const FilterButton = styled_components__WEBPACK_IMPORTED_MODULE_13___default()(_components_StyledButton__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z).attrs({
  buttonSize: 'tiny',
  buttonStyle: 'standard'
}).withConfig({
  displayName: "search__FilterButton",
  componentId: "sc-1nw0kva-4"
})(["height:22px;background-color:#f1f2f3;margin-right:8px;margin-bottom:8px;font-size:12px;font-weight:500;cursor:pointer;", ""], props => props.$isSelected && (0,styled_components__WEBPACK_IMPORTED_MODULE_13__.css)(["&,&:active,&:focus{background-color:", ";color:", ";}"], props => props.theme.colors.primary[100], props => props.theme.colors.primary[800]));
const DEFAULT_SEARCH_TYPES = ['COLLECTIVE', 'EVENT', 'ORGANIZATION', 'FUND', 'PROJECT'];

class SearchPage extends (react__WEBPACK_IMPORTED_MODULE_6___default().Component) {
  static getInitialProps({
    query
  }) {
    return {
      term: query.q || '',
      type: query.type ? decodeURIComponent(query.type).split(',') : DEFAULT_SEARCH_TYPES,
      isHost: lodash_isNil__WEBPACK_IMPORTED_MODULE_4___default()(query.isHost) ? undefined : (0,_lib_utils__WEBPACK_IMPORTED_MODULE_17__/* .parseToBoolean */ .DD)(query.isHost),
      country: query.country || null,
      sortBy: query.sortBy || (query.q ? 'RANK' : 'ACTIVITY'),
      tag: query.tag?.length > 0 ? query.tag.split(',') : [],
      limit: Number(query.limit) || 20,
      offset: Number(query.offset) || 0
    };
  }

  constructor(props) {
    super(props);

    _defineProperty(this, "changeCountry", country => {
      const {
        router,
        term
      } = this.props;
      const query = {
        q: term,
        type: router.query.type,
        sortBy: router.query.sortBy,
        tag: router.query.tag
      };

      if (country !== 'ALL') {
        query.country = [country];
      }

      router.push({
        pathname: router.pathname,
        query: lodash_pickBy__WEBPACK_IMPORTED_MODULE_3___default()(query, value => !lodash_isNil__WEBPACK_IMPORTED_MODULE_4___default()(value))
      });
    });

    _defineProperty(this, "changeSort", sortBy => {
      const {
        router,
        term
      } = this.props;
      const query = {
        q: term,
        type: router.query.type,
        isHost: router.query.isHost,
        country: router.query.country,
        tag: router.query.tag,
        sortBy: sortBy.value
      };
      router.push({
        pathname: router.pathname,
        query: lodash_pickBy__WEBPACK_IMPORTED_MODULE_3___default()(query, value => !lodash_isNil__WEBPACK_IMPORTED_MODULE_4___default()(value))
      });
    });

    _defineProperty(this, "changeTags", tag => {
      const {
        router,
        term
      } = this.props;
      let tags = router.query?.tag?.split(',');

      if (!tags || router.query?.tag?.length === 0) {
        tags = [tag];
      } else if (tags.includes(tag)) {
        tags = tags.filter(value => value !== tag);
      } else {
        tags.push(tag);
      }

      const query = {
        q: term,
        type: router.query.type,
        country: router.query.country,
        sortBy: router.query.sortBy
      };

      if (tags.length > 0) {
        query.tag = tags.join();
      }

      router.push({
        pathname: router.pathname,
        query: lodash_pickBy__WEBPACK_IMPORTED_MODULE_3___default()(query, value => !lodash_isNil__WEBPACK_IMPORTED_MODULE_4___default()(value))
      });
    });

    _defineProperty(this, "refetch", event => {
      event.preventDefault();
      const {
        target: form
      } = event;
      const {
        router
      } = this.props;
      const {
        q
      } = form;
      const query = {
        q: q.value,
        type: router.query.type,
        country: router.query.country,
        sortBy: q.value === '' && router.query.sortBy === 'RANK' ? 'ACTIVITY' : router.query.sortBy
      };
      router.push({
        pathname: router.pathname,
        query: lodash_pickBy__WEBPACK_IMPORTED_MODULE_3___default()(query, value => !lodash_isNil__WEBPACK_IMPORTED_MODULE_4___default()(value))
      });
    });

    _defineProperty(this, "onClick", filter => {
      const {
        term,
        router
      } = this.props;
      let query;

      if (filter === 'HOST') {
        query = {
          q: term,
          isHost: true
        };
      } else if (filter !== 'ALL') {
        query = {
          q: term,
          type: filter
        };
      } else {
        query = {
          q: term
        };
      }

      if (router.query.country) {
        query.country = router.query.country;
      }

      if (router.query.tag) {
        query.tag = router.query.tag;
      }

      query.sortBy = router.query.sortBy;
      router.push({
        pathname: '/search',
        query: lodash_pickBy__WEBPACK_IMPORTED_MODULE_3___default()(query, value => !lodash_isNil__WEBPACK_IMPORTED_MODULE_4___default()(value))
      });
    });

    _defineProperty(this, "handleCopy", () => {
      copy_to_clipboard__WEBPACK_IMPORTED_MODULE_10___default()(window.location.href);
      this.props.addToast({
        type: _components_ToastProvider__WEBPACK_IMPORTED_MODULE_37__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
        message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_12__.FormattedMessage, {
          id: "3x3DF3",
          defaultMessage: [{
            "type": 0,
            "value": "Search Result Copied!"
          }]
        })
      });
    });

    this.onClick = this.onClick.bind(this);
    const _term = props.term;

    if (this.props.isHost) {
      this.state = {
        filter: 'HOST',
        term: _term
      };
    } else if (this.props.type.length === 1) {
      this.state = {
        filter: this.props.type[0],
        term: _term
      };
    } else {
      this.state = {
        filter: 'ALL',
        term: _term
      };
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.term !== this.props.term) {
      this.setState({
        term: this.props.term
      });
    }
  }

  render() {
    const {
      data,
      intl
    } = this.props;
    const {
      error,
      loading,
      accounts,
      tagStats
    } = data || {};
    const tags = this.props.tag || [];

    const hiddenSelectedTags = lodash_differenceWith__WEBPACK_IMPORTED_MODULE_5___default()(tags, tagStats?.nodes, (selectedTag, {
      tag
    }) => selectedTag === tag);

    if (error) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
        data: this.props.data
      });
    }

    const {
      limit = 20,
      offset,
      totalCount = 0
    } = accounts || {};
    const showTagFilterSection = (accounts?.nodes?.length > 0 || tags.length > 0) && tagStats?.nodes?.length > 0;

    const getSortOption = value => ({
      label: (0,_lib_i18n_search_sorting_options__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(intl, value),
      value
    });

    const sortOptions = [getSortOption('ACTIVITY'), this.props.term ? getSortOption('RANK') : undefined, getSortOption('CREATED_AT.DESC'), getSortOption('CREATED_AT.ASC')];
    const selectedTypeFilter = this.props.isHost ? 'HOST' : this.props.type.length === 1 ? this.props.type[0] : 'ALL';
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsxs)(_components_Page__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
      title: "Search",
      showSearch: false,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
        backgroundImage: "url(/static/images/home/fiscalhost-blue-bg-lg.png)",
        style: {
          transform: 'rotate(180deg)'
        },
        backgroundPosition: "center top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: ['136px', '230px'],
        "data-cy": "search-banner",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
          justifyContent: "center",
          flex: "1 1 1",
          width: ['288px', 1],
          style: {
            transform: 'rotate(180deg)'
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(SearchFormContainer, {
            mb: ['20px', '48px'],
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_SearchForm__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
              borderRadius: "100px",
              fontSize: "16px",
              height: "58px",
              placeholder: intl.formatMessage({
                id: "R2x7v/",
                defaultMessage: [{
                  "type": 0,
                  "value": "Search by name, slug, tag, description..."
                }]
              }),
              value: this.state.term,
              onChange: value => this.setState({
                term: value
              }),
              onSubmit: this.refetch,
              showSearchButton: true,
              searchButtonStyles: {
                minWidth: '40px',
                height: '40px'
              }
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
        mx: "auto",
        px: 3,
        width: 1,
        maxWidth: 1200,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
          mb: 4,
          mx: "auto",
          flexDirection: ['column', 'row'],
          justifyContent: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_Hide__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
            xs: true,
            sm: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_StyledFilters__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
              filters: Object.keys(FILTERS),
              getLabel: key => intl.formatMessage(I18nFilters[key], {
                count: 10
              }),
              selected: selectedTypeFilter,
              minButtonWidth: "95px",
              onChange: filter => {
                this.setState({
                  filter: filter
                });
                this.onClick(filter);
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsxs)(_components_Hide__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
            md: true,
            lg: true,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(FilterLabel, {
              htmlFor: "collective-filter-type",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_12__.FormattedMessage, {
                id: "somORZ",
                defaultMessage: [{
                  "type": 0,
                  "value": "Profile Type"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_StyledSelectFilter__WEBPACK_IMPORTED_MODULE_34__/* .StyledSelectFilter */ .V, {
              inputId: "collective-type-filter",
              value: {
                label: intl.formatMessage(I18nFilters[selectedTypeFilter]),
                value: selectedTypeFilter
              },
              options: Object.keys(FILTERS).map(key => ({
                label: intl.formatMessage(I18nFilters[key]),
                value: key
              })),
              onChange: ({
                value
              }) => {
                this.setState({
                  filter: value
                });
                this.onClick(value);
              }
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_StyledHr__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
          mt: "30px",
          mb: "24px",
          flex: "1",
          borderStyle: "solid",
          borderColor: "rgba(50, 51, 52, 0.2)"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
          flexDirection: ['column', 'row'],
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
            pr: [0, '19px'],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(FilterLabel, {
              htmlFor: "sort-filter-type",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_12__.FormattedMessage, {
                id: "25oM9Q",
                defaultMessage: [{
                  "type": 0,
                  "value": "Sort"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_StyledSelectFilter__WEBPACK_IMPORTED_MODULE_34__/* .StyledSelectFilter */ .V, {
              inputId: "sort-filter",
              value: this.props.sortBy ? getSortOption(this.props.sortBy) : sortOptions[0],
              options: sortOptions.filter(sortOption => sortOption),
              onChange: sortBy => this.changeSort(sortBy),
              minWidth: [0, '200px']
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
            pt: ['20px', 0],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(FilterLabel, {
              htmlFor: "country-filter-type",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_12__.FormattedMessage, {
                id: "collective.country.label",
                defaultMessage: [{
                  "type": 0,
                  "value": "Country"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_InputTypeCountry__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
              inputId: "search-country-filter",
              as: _components_StyledSelectFilter__WEBPACK_IMPORTED_MODULE_34__/* .StyledSelectFilter */ .V,
              value: this.props.country || 'ALL',
              customOptions: [{
                label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_12__.FormattedMessage, {
                  id: "n6WiTf",
                  defaultMessage: [{
                    "type": 0,
                    "value": "All countries"
                  }]
                }),
                value: 'ALL'
              }],
              onChange: country => this.changeCountry(country),
              minWidth: [0, '200px'],
              fontSize: "12px"
            })]
          }), showTagFilterSection && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
            pl: [0, '23px'],
            pt: ['20px', 0],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(FilterLabel, {
              htmlFor: "tag-filter-type",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_12__.FormattedMessage, {
                id: "Tags",
                defaultMessage: [{
                  "type": 0,
                  "value": "Tags"
                }]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
              flexWrap: "wrap",
              children: [lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0___default()(tagStats?.nodes.map(node => node.tag), (lodash_toLower__WEBPACK_IMPORTED_MODULE_2___default()))?.filter(tag => !_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_14__/* .IGNORED_TAGS.includes */ .bR.includes(tag)).map(tag => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(FilterButton, {
                as: _components_StyledTag__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z,
                title: tag,
                variant: "rounded-right",
                $isSelected: tags.includes(tag),
                onClick: () => this.changeTags(tag),
                children: lodash_truncate__WEBPACK_IMPORTED_MODULE_1___default()(tag, {
                  length: 20
                })
              }, tag)), hiddenSelectedTags?.map(tag => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(FilterButton, {
                as: _components_StyledTag__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z,
                title: tag,
                variant: "rounded-right",
                $isSelected: tags.includes(tag),
                onClick: () => this.changeTags(tag),
                children: lodash_truncate__WEBPACK_IMPORTED_MODULE_1___default()(tag, {
                  length: 20
                })
              }, tag))]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
          mb: "64px",
          justifyContent: "center",
          flexWrap: "wrap",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(AllCardsContainer, {
            children: loading ? Array.from(new Array(12)).map((_, index) =>
            /*#__PURE__*/
            // eslint-disable-next-line react/no-array-index-key
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Box */ .xu, {
              my: 3,
              mx: 2,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(CollectiveCardContainer, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                  height: 336,
                  borderRadius: "16px"
                })
              })
            }, index)) : accounts?.nodes?.map(collective => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Box */ .xu, {
              my: 3,
              mx: 2,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(CollectiveCardContainer, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_search_page_SearchCollectiveCard__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                  collective: collective
                })
              }, collective.id)
            }, collective.slug))
          }), accounts?.nodes?.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
            py: 3,
            width: 1,
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_36__.H1, {
              fontSize: "32px",
              lineHeight: "40px",
              color: "black.700",
              fontWeight: 500,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_12__.FormattedMessage, {
                id: "qqqV4d",
                defaultMessage: [{
                  "type": 0,
                  "value": "No results match your search"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
              py: 32,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                src: "/static/images/empty-search.png",
                alt: "No Search Results",
                width: 101.98,
                height: 87.47
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
              color: "black.800",
              fontWeight: 400,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                fontSize: "18px",
                lineHeight: "26px",
                textAlign: "center",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_12__.FormattedMessage, {
                  id: "8SQT+a",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Try refining your search, here are some tips:"
                  }]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                fontSize: "15px",
                lineHeight: "22px",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsxs)("ul", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_12__.FormattedMessage, {
                      id: "7HOBG3",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Make sure your spelling is correct"
                      }]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_36__/* .Span */ .Dr, {
                      pt: "8px",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_12__.FormattedMessage, {
                        id: "RdCCty",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Broaden your search (e.g. search 'garden' instead of 'community garden')"
                        }]
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_36__/* .Span */ .Dr, {
                      pt: "8px",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_12__.FormattedMessage, {
                        id: "mzfp0+",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Search our "
                        }, {
                          "type": 8,
                          "value": "Link",
                          "children": [{
                            "type": 0,
                            "value": "Docs"
                          }]
                        }, {
                          "type": 0,
                          "value": " for more info about using the Open Collective platform"
                        }],
                        values: {
                          Link: (0,_components_I18nFormatters__WEBPACK_IMPORTED_MODULE_22__/* .getI18nLink */ .fw)({
                            openInNewTab: true,
                            href: 'https://opencollective.com/help'
                          })
                        }
                      })
                    })
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                fontSize: "18px",
                lineHeight: "26px",
                pt: 16,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_12__.FormattedMessage, {
                  id: "+lM4fw",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Still no luck? Contact "
                  }, {
                    "type": 8,
                    "value": "SupportLink",
                    "children": [{
                      "type": 0,
                      "value": "support"
                    }]
                  }, {
                    "type": 0,
                    "value": " or find us in "
                  }, {
                    "type": 8,
                    "value": "SlackLink",
                    "children": [{
                      "type": 0,
                      "value": "Slack"
                    }]
                  }],
                  values: {
                    SupportLink: _components_I18nFormatters__WEBPACK_IMPORTED_MODULE_22__/* .I18nSupportLink */ .wl,
                    SlackLink: (0,_components_I18nFormatters__WEBPACK_IMPORTED_MODULE_22__/* .getI18nLink */ .fw)({
                      openInNewTab: true,
                      href: 'https://slack.opencollective.com/'
                    })
                  }
                })
              })]
            })]
          })]
        }), accounts?.nodes?.length !== 0 && totalCount > limit && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          display: "flex",
          justifyContent: "center",
          fontSize: "14px",
          my: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_Pagination__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
            offset: offset,
            total: totalCount,
            limit: limit
          })
        }), accounts?.nodes?.length !== 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
          flexDirection: "column",
          alignItems: "center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsxs)(_components_StyledButton__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
            onClick: this.handleCopy,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_36__/* .Span */ .Dr, {
              pr: 1,
              fontSize: "14px",
              fontWeight: 500,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_12__.FormattedMessage, {
                id: "Pkx+Wj",
                defaultMessage: [{
                  "type": 0,
                  "value": "Share results"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_styled_icons_boxicons_regular_ShareAlt__WEBPACK_IMPORTED_MODULE_9__.ShareAlt, {
              size: "14px"
            })]
          })
        }), accounts?.nodes?.length !== 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
          py: 3,
          width: 1,
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_36__.P, {
            pt: 3,
            pb: 3,
            borderTop: "1px solid #E6E6E6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx("em", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_12__.FormattedMessage, {
                id: "7ZWOtM",
                defaultMessage: [{
                  "type": 0,
                  "value": "Can't find what you're looking for? Check our "
                }, {
                  "type": 8,
                  "value": "Link",
                  "children": [{
                    "type": 0,
                    "value": "Docs & Help!"
                  }]
                }],
                values: {
                  Link: (0,_components_I18nFormatters__WEBPACK_IMPORTED_MODULE_22__/* .getI18nLink */ .fw)({
                    href: 'https://opencollective.com/help',
                    openInNewTab: true
                  })
                }
              })
            })
          })
        })]
      })]
    });
  }

}


const searchPageQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql`
  query SearchPage(
    $term: String!
    $type: [AccountType]
    $country: [CountryISO]
    $tag: [String]
    $sortBy: OrderByInput
    $isHost: Boolean
    $limit: Int
    $offset: Int
  ) {
    accounts(
      searchTerm: $term
      type: $type
      isHost: $isHost
      limit: $limit
      offset: $offset
      skipRecentAccounts: true
      country: $country
      orderBy: $sortBy
      tag: $tag
    ) {
      nodes {
        id
        isActive
        type
        slug
        name
        location {
          id
          country
        }
        tags
        isHost
        imageUrl(height: 96)
        backgroundImageUrl(height: 208)
        description
        website
        currency
        stats {
          id
          totalAmountReceived(useCache: true) {
            currency
            valueInCents
          }
          totalAmountSpent {
            currency
            valueInCents
          }
        }
        ... on Organization {
          host {
            id
            hostFeePercent
            totalHostedCollectives
          }
        }
        ... on AccountWithParent {
          parent {
            id
            slug
            backgroundImageUrl
            location {
              id
              country
            }
          }
        }
        backers: members(role: BACKER) {
          totalCount
        }
      }
      limit
      offset
      totalCount
    }

    tagStats(searchTerm: $term) {
      nodes {
        id
        tag
      }
    }
  }
`;
const addSearchPageData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_8__.graphql)(searchPageQuery, {
  options: props => ({
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_15__/* .API_V2_CONTEXT */ .T,
    variables: {
      term: props.term,
      type: props.type,
      isHost: props.isHost,
      limit: props.limit,
      offset: props.offset,
      country: props.country,
      tag: props.tag,
      sortBy: constructSortByQuery(props.sortBy)
    }
  })
});
SearchPage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "changeCountry",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "country",
      "type": null
    }],
    "returns": null
  }, {
    "name": "changeSort",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "sortBy",
      "type": null
    }],
    "returns": null
  }, {
    "name": "changeTags",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "tag",
      "type": null
    }],
    "returns": null
  }, {
    "name": "refetch",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "event",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onClick",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "filter",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleCopy",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "SearchPage",
  "props": {
    "term": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "country": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "sortBy": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "tag": {
      "description": "",
      "type": {
        "name": "array"
      },
      "required": false
    },
    "limit": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "offset": {
      "description": "",
      "type": {
        "name": "number"
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
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "addToast": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "isHost": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "type": {
      "description": "",
      "type": {
        "name": "array"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_ToastProvider__WEBPACK_IMPORTED_MODULE_37__/* .withToasts */ .CP)((0,react_intl__WEBPACK_IMPORTED_MODULE_12__.injectIntl)((0,next_router__WEBPACK_IMPORTED_MODULE_11__.withRouter)(addSearchPageData(SearchPage)))));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 72743:
/***/ ((module) => {

module.exports = require("@apollo/client/react/components");

/***/ }),

/***/ 95159:
/***/ ((module) => {

module.exports = require("@apollo/client/react/hoc");

/***/ }),

/***/ 3115:
/***/ ((module) => {

module.exports = require("@sentry/browser");

/***/ }),

/***/ 18022:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/ChevronDown");

/***/ }),

/***/ 28054:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/ChevronRight");

/***/ }),

/***/ 52160:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/ChevronUp");

/***/ }),

/***/ 51104:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Exit");

/***/ }),

/***/ 10054:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/InfoCircle");

/***/ }),

/***/ 99812:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/LoaderAlt");

/***/ }),

/***/ 23263:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Plus");

/***/ }),

/***/ 29431:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/ShareAlt");

/***/ }),

/***/ 60476:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Support");

/***/ }),

/***/ 45933:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Github");

/***/ }),

/***/ 3592:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Mastodon");

/***/ }),

/***/ 64374:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Slack");

/***/ }),

/***/ 14638:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Twitter");

/***/ }),

/***/ 19153:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Bars");

/***/ }),

/***/ 62876:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CheckCircle");

/***/ }),

/***/ 83514:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/ExclamationCircle");

/***/ }),

/***/ 25730:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/ExclamationTriangle");

/***/ }),

/***/ 86954:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/InfoCircle");

/***/ }),

/***/ 26201:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Redo");

/***/ }),

/***/ 97881:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Times");

/***/ }),

/***/ 87208:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronDown/ChevronDown");

/***/ }),

/***/ 29872:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronUp/ChevronUp");

/***/ }),

/***/ 52021:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Settings");

/***/ }),

/***/ 73949:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/Blog");

/***/ }),

/***/ 34427:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Mail");

/***/ }),

/***/ 80924:
/***/ ((module) => {

module.exports = require("@styled-icons/octicons/Mail");

/***/ }),

/***/ 45284:
/***/ ((module) => {

module.exports = require("@styled-system/prop-types");

/***/ }),

/***/ 19099:
/***/ ((module) => {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ 68887:
/***/ ((module) => {

module.exports = require("copy-to-clipboard");

/***/ }),

/***/ 28992:
/***/ ((module) => {

module.exports = require("country-currency-emoji-flags");

/***/ }),

/***/ 69031:
/***/ ((module) => {

module.exports = require("cross-fetch");

/***/ }),

/***/ 71934:
/***/ ((module) => {

module.exports = require("currency-symbol-map");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 92869:
/***/ ((module) => {

module.exports = require("focus-trap-react");

/***/ }),

/***/ 99344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 70154:
/***/ ((module) => {

module.exports = require("load-script");

/***/ }),

/***/ 59591:
/***/ ((module) => {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ 93908:
/***/ ((module) => {

module.exports = require("lodash/debounce");

/***/ }),

/***/ 22219:
/***/ ((module) => {

module.exports = require("lodash/differenceWith");

/***/ }),

/***/ 58579:
/***/ ((module) => {

module.exports = require("lodash/flatten");

/***/ }),

/***/ 1712:
/***/ ((module) => {

module.exports = require("lodash/get");

/***/ }),

/***/ 98492:
/***/ ((module) => {

module.exports = require("lodash/groupBy");

/***/ }),

/***/ 98210:
/***/ ((module) => {

module.exports = require("lodash/has");

/***/ }),

/***/ 52626:
/***/ ((module) => {

module.exports = require("lodash/invert");

/***/ }),

/***/ 89699:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 40113:
/***/ ((module) => {

module.exports = require("lodash/isEqual");

/***/ }),

/***/ 77876:
/***/ ((module) => {

module.exports = require("lodash/isError");

/***/ }),

/***/ 86069:
/***/ ((module) => {

module.exports = require("lodash/isNil");

/***/ }),

/***/ 75795:
/***/ ((module) => {

module.exports = require("lodash/isObject");

/***/ }),

/***/ 22133:
/***/ ((module) => {

module.exports = require("lodash/isUndefined");

/***/ }),

/***/ 63901:
/***/ ((module) => {

module.exports = require("lodash/omit");

/***/ }),

/***/ 66011:
/***/ ((module) => {

module.exports = require("lodash/omitBy");

/***/ }),

/***/ 49949:
/***/ ((module) => {

module.exports = require("lodash/orderBy");

/***/ }),

/***/ 32027:
/***/ ((module) => {

module.exports = require("lodash/partition");

/***/ }),

/***/ 84159:
/***/ ((module) => {

module.exports = require("lodash/pick");

/***/ }),

/***/ 20808:
/***/ ((module) => {

module.exports = require("lodash/pickBy");

/***/ }),

/***/ 47869:
/***/ ((module) => {

module.exports = require("lodash/round");

/***/ }),

/***/ 26537:
/***/ ((module) => {

module.exports = require("lodash/toLower");

/***/ }),

/***/ 75142:
/***/ ((module) => {

module.exports = require("lodash/trim");

/***/ }),

/***/ 51858:
/***/ ((module) => {

module.exports = require("lodash/truncate");

/***/ }),

/***/ 69309:
/***/ ((module) => {

module.exports = require("lodash/uniqBy");

/***/ }),

/***/ 17809:
/***/ ((module) => {

module.exports = require("memoize-one");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 94957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 42042:
/***/ ((module) => {

module.exports = require("polished");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 13126:
/***/ ((module) => {

module.exports = require("react-intl");

/***/ }),

/***/ 42932:
/***/ ((module) => {

module.exports = require("react-popper");

/***/ }),

/***/ 35073:
/***/ ((module) => {

module.exports = require("react-scrollchor");

/***/ }),

/***/ 61929:
/***/ ((module) => {

module.exports = require("react-select");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86109:
/***/ ((module) => {

module.exports = require("sanitize-html");

/***/ }),

/***/ 73673:
/***/ ((module) => {

module.exports = require("slugify");

/***/ }),

/***/ 57518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 95834:
/***/ ((module) => {

module.exports = require("styled-system");

/***/ }),

/***/ 46555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,9156,1808,1012,7619,7632,2143,3129], () => (__webpack_exec__(40868)));
module.exports = __webpack_exports__;

})();