"use strict";
exports.id = 242;
exports.ids = [242];
exports.modules = {

/***/ 40242:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Os": () => (/* binding */ DefaultCollectiveLabel),
/* harmony export */   "W1": () => (/* binding */ CUSTOM_OPTIONS_POSITION),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "rA": () => (/* binding */ FLAG_COLLECTIVE_PICKER_COLLECTIVE),
/* harmony export */   "yZ": () => (/* binding */ FLAG_NEW_COLLECTIVE)
/* harmony export */ });
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51858);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23672);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83824);
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40113);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53493);
/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_intersection__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98492);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17809);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(memoize_one__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42932);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_popper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71564);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(82525);
/* harmony import */ var _lib_react_utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(75993);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11194);
/* harmony import */ var _CollectivePickerInviteMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(57062);
/* harmony import */ var _CollectiveTypePicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(85321);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(69078);
/* harmony import */ var _CreateCollectiveMiniForm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(34861);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(16159);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(19156);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(66943);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CreateCollectiveMiniForm__WEBPACK_IMPORTED_MODULE_18__]);
_CreateCollectiveMiniForm__WEBPACK_IMPORTED_MODULE_18__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const _excluded = ["inputId", "intl", "collectives", "customOptions", "formatOptionLabel", "getDefaultOptions", "groupByType", "onChange", "onInvite", "sortFunc", "types", "isDisabled", "menuIsOpen", "minWidth", "maxWidth", "width", "addLoggedInUserAsAdmin", "renderNewCollectiveOption", "isSearchable"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















const CollectiveTypesI18n = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__.defineMessages)({
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_13__/* .CollectiveType.COLLECTIVE */ .eV.COLLECTIVE]: {
    id: "collective.types.collective",
    defaultMessage: [{
      "type": 6,
      "value": "n",
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
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_13__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION]: {
    id: "collective.types.organization",
    defaultMessage: [{
      "type": 6,
      "value": "n",
      "options": {
        "one": {
          "value": [{
            "type": 0,
            "value": "Organization"
          }]
        },
        "other": {
          "value": [{
            "type": 0,
            "value": "Organizations"
          }]
        }
      },
      "offset": 0,
      "pluralType": "cardinal"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_13__/* .CollectiveType.USER */ .eV.USER]: {
    id: "collective.types.user",
    defaultMessage: [{
      "type": 6,
      "value": "n",
      "options": {
        "one": {
          "value": [{
            "type": 0,
            "value": "person"
          }]
        },
        "other": {
          "value": [{
            "type": 0,
            "value": "people"
          }]
        }
      },
      "offset": 0,
      "pluralType": "cardinal"
    }]
  }
});
const Messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__.defineMessages)({
  createNew: {
    id: "CollectivePicker.CreateNew",
    defaultMessage: [{
      "type": 0,
      "value": "Create new"
    }]
  },
  inviteNew: {
    id: "CollectivePicker.InviteNew",
    defaultMessage: [{
      "type": 0,
      "value": "Invite new"
    }]
  }
});
const CollectiveLabelTextContainer = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "CollectivePicker__CollectiveLabelTextContainer",
  componentId: "sc-1c34xir-0"
})(["display:flex;flex-direction:column;text-align:left;margin-left:8px;"]);
/**
 * Default label builder used to render a collective. For sections titles and custom options,
 * this will just return the default label.
 */

const DefaultCollectiveLabel = ({
  value: collective
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
  alignItems: "center",
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, {
    collective: collective,
    radius: 16
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(CollectiveLabelTextContainer, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Text__WEBPACK_IMPORTED_MODULE_22__/* .Span */ .Dr, {
      fontSize: "12px",
      fontWeight: "500",
      lineHeight: "18px",
      color: "black.700",
      children: lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default()(collective.name, {
        length: 40
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Text__WEBPACK_IMPORTED_MODULE_22__/* .Span */ .Dr, {
      fontSize: "11px",
      lineHeight: "13px",
      color: "black.500",
      children: collective.slug ? `@${collective.slug}` : collective.email || ''
    })]
  })]
});
// Some flags to differentiate options in the picker
const FLAG_COLLECTIVE_PICKER_COLLECTIVE = '__collective_picker_collective__';
const FLAG_NEW_COLLECTIVE = '__collective_picker_new__';
const FLAG_INVITE_NEW = '__collective_picker_invite_new__';
const CUSTOM_OPTIONS_POSITION = {
  TOP: 'TOP',
  BOTTOM: 'BOTTOM'
};
const {
  USER,
  ORGANIZATION,
  COLLECTIVE,
  FUND,
  EVENT,
  PROJECT
} = _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_13__/* .CollectiveType */ .eV;
const sortedAccountTypes = ['INDIVIDUAL', USER, ORGANIZATION, COLLECTIVE, FUND, EVENT, PROJECT];
/**
 * An overset og `StyledSelect` specialized to display, filter and pick a collective from a given list.
 * Accepts all the props from [StyledSelect](#!/StyledSelect).
 *
 * If you want the collectives to be automatically loaded from the API, check `CollectivePickerAsync`.
 */

class CollectivePicker extends (react__WEBPACK_IMPORTED_MODULE_6___default().PureComponent) {
  constructor(props) {
    super(props);

    _defineProperty(this, "getOptionsFromCollectives", memoize_one__WEBPACK_IMPORTED_MODULE_7___default()((collectives, groupByType, sortFunc, intl) => {
      if (!collectives || collectives.length === 0) {
        return [];
      } // If not grouped, just sort the collectives by names and return their options


      if (!groupByType) {
        return sortFunc(collectives).map(this.buildCollectiveOption);
      } // Group collectives under categories, sort the categories labels and the collectives inside them


      const collectivesByTypes = lodash_groupBy__WEBPACK_IMPORTED_MODULE_5___default()(collectives, 'type');

      const sortedActiveTypes = lodash_intersection__WEBPACK_IMPORTED_MODULE_4___default()(sortedAccountTypes, Object.keys(collectivesByTypes));

      return sortedActiveTypes.map(type => {
        const sectionI18n = CollectiveTypesI18n[type];
        const sortedCollectives = sortFunc(collectivesByTypes[type]);
        const sectionLabel = sectionI18n ? intl.formatMessage(sectionI18n, {
          n: sortedCollectives.length
        }) : type;
        return {
          label: sectionLabel || '',
          options: sortedCollectives.map(this.buildCollectiveOption)
        };
      });
    }));

    _defineProperty(this, "getAllOptions", memoize_one__WEBPACK_IMPORTED_MODULE_7___default()((collectivesOptions, customOptions, createdCollectives) => {
      const {
        creatable,
        invitable,
        intl,
        customOptionsPosition
      } = this.props;
      let options = collectivesOptions;

      if (createdCollectives.length > 0) {
        options = [...createdCollectives.map(this.buildCollectiveOption), ...options];
      }

      if (customOptions && customOptions.length > 0) {
        options = customOptionsPosition === CUSTOM_OPTIONS_POSITION.TOP ? [...customOptions, ...options] : [...options, ...customOptions];
      }

      if (invitable) {
        options = [...options, {
          label: intl.formatMessage(Messages.inviteNew).toUpperCase(),
          options: [{
            label: null,
            value: null,
            isDisabled: true,
            [FLAG_INVITE_NEW]: true,
            __background__: 'white'
          }]
        }];
      }

      if (creatable) {
        const isOnlyForUser = lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default()(this.props.types, [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_13__/* .CollectiveType.USER */ .eV.USER]);

        options = [...options, {
          label: isOnlyForUser ? intl.formatMessage(Messages.inviteNew).toUpperCase() : intl.formatMessage(Messages.createNew).toUpperCase(),
          options: [{
            label: null,
            value: null,
            isDisabled: true,
            [FLAG_NEW_COLLECTIVE]: true,
            __background__: 'white'
          }]
        }];
      }

      return options;
    }));

    _defineProperty(this, "onChange", (...args) => {
      this.props.onChange(...args);

      if (this.state.showCreatedCollective) {
        this.setState({
          showCreatedCollective: false
        });
      }
    });

    _defineProperty(this, "onInputChange", newTerm => {
      this.props.onInputChange?.(newTerm);
      this.setState({
        searchText: newTerm
      });
    });

    _defineProperty(this, "setCreateFormCollectiveType", type => {
      this.setState({
        createFormCollectiveType: type || null
      });
    });

    _defineProperty(this, "openMenu", () => this.setState({
      menuIsOpen: true
    }));

    _defineProperty(this, "closeMenu", () => this.setState({
      menuIsOpen: false
    }));

    _defineProperty(this, "getDefaultOption", (getDefaultOptionsFromProps, allOptions) => {
      if (this.state.createdCollective) {
        return this.buildCollectiveOption(this.state.createdCollective);
      } else if (getDefaultOptionsFromProps) {
        return getDefaultOptionsFromProps(this.buildCollectiveOption, allOptions);
      }
    });

    _defineProperty(this, "getValue", () => {
      if (this.props.collective !== undefined) {
        return this.buildCollectiveOption(this.props.collective);
      } else if (this.state.showCreatedCollective) {
        return this.buildCollectiveOption(lodash_last__WEBPACK_IMPORTED_MODULE_2___default()(this.state.createdCollectives));
      } else {
        return this.props.getOptions(this.buildCollectiveOption);
      }
    });

    this.containerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createRef();
    this.state = {
      createFormCollectiveType: null,
      displayInviteMenu: null,
      menuIsOpen: props.menuIsOpen,
      createdCollectives: [],
      searchText: ''
    };
  }
  /**
   * Function to generate a single select option
   */


  buildCollectiveOption(collective) {
    if (collective === null) {
      return null;
    } else {
      return {
        value: collective,
        label: collective.name,
        [FLAG_COLLECTIVE_PICKER_COLLECTIVE]: true
      };
    }
  }
  /**
   * From a collectives list, returns a list of options that can be provided to a `StyledSelect`.
   *
   * @param {Array|null} collectives
   * @param {Boolean} groupByType
   * @param {function} sortFunc
   * @param {object} intl
   */


  getMenuIsOpen(menuIsOpenFromProps) {
    if (this.state.createFormCollectiveType || this.props.isDisabled) {
      return false;
    } else if (typeof menuIsOpenFromProps !== 'undefined') {
      return menuIsOpenFromProps;
    } else {
      return this.state.menuIsOpen;
    }
  }

  render() {
    const _this$props = this.props,
          {
      inputId,
      intl,
      collectives,
      customOptions,
      formatOptionLabel,
      getDefaultOptions,
      groupByType,
      onChange,
      onInvite,
      sortFunc,
      types,
      isDisabled,
      menuIsOpen,
      minWidth,
      maxWidth,
      width,
      addLoggedInUserAsAdmin,
      renderNewCollectiveOption,
      isSearchable
    } = _this$props,
          props = _objectWithoutProperties(_this$props, _excluded);

    const {
      createFormCollectiveType,
      createdCollectives,
      displayInviteMenu,
      searchText
    } = this.state;
    const collectiveOptions = this.getOptionsFromCollectives(collectives, groupByType, sortFunc, intl);
    const allOptions = this.getAllOptions(collectiveOptions, customOptions, createdCollectives);
    const prefillValue = (0,validator__WEBPACK_IMPORTED_MODULE_12__.isEmail)(searchText) ? {
      email: searchText
    } : {
      name: searchText
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(react_popper__WEBPACK_IMPORTED_MODULE_10__.Manager, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(react_popper__WEBPACK_IMPORTED_MODULE_10__.Reference, {
        children: ({
          ref
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Container__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          position: "relative",
          minWidth: minWidth,
          maxWidth: maxWidth,
          width: width,
          ref: (0,_lib_react_utils__WEBPACK_IMPORTED_MODULE_24__/* .mergeRefs */ .l)([this.containerRef, ref]),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
            inputId: inputId,
            options: allOptions,
            defaultValue: getDefaultOptions && getDefaultOptions(this.buildCollectiveOption, allOptions),
            menuIsOpen: this.getMenuIsOpen(menuIsOpen),
            isDisabled: Boolean(createFormCollectiveType) || displayInviteMenu || isDisabled,
            onMenuOpen: this.openMenu,
            onMenuClose: this.closeMenu,
            value: this.getValue(),
            onChange: this.onChange,
            noOptionsMessage: searchText ? undefined : () => null,
            isSearchable: isSearchable ?? true,
            formatOptionLabel: (option, context) => {
              if (option[FLAG_COLLECTIVE_PICKER_COLLECTIVE]) {
                return formatOptionLabel(option, context, intl);
              } else if (option[FLAG_NEW_COLLECTIVE]) {
                return renderNewCollectiveOption ? renderNewCollectiveOption() : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_CollectiveTypePicker__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                  onChange: this.setCreateFormCollectiveType,
                  types: option.types || types
                });
              } else if (option[FLAG_INVITE_NEW]) {
                return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_CollectivePickerInviteMenu__WEBPACK_IMPORTED_MODULE_15__/* .InviteCollectiveDropdownOption */ .T, {
                  isSearching: !!searchText && !collectives.length,
                  onClick: () => {
                    onInvite?.(true);
                    onChange?.({
                      label: null,
                      value: null
                    });
                    this.setState({
                      menuIsOpen: false
                    });
                  }
                });
              } else {
                return option.label;
              }
            }
          }, props), {}, {
            onInputChange: this.onInputChange
          }))
        })
      }), createFormCollectiveType && /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_8___default().createPortal( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(react_popper__WEBPACK_IMPORTED_MODULE_10__.Popper, {
        placement: "bottom",
        children: ({
          placement,
          ref,
          style
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx("div", {
          "data-placement": placement,
          ref: ref,
          style: _objectSpread(_objectSpread({}, style), {}, {
            width: this.containerRef.current.clientWidth,
            zIndex: 9999
          }),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_StyledCard__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, _objectSpread(_objectSpread({
            p: 3,
            my: 1,
            boxShadow: "-2px 4px 7px 0 rgba(78, 78, 78, 14%)",
            maxHeight: 315,
            overflowY: "auto",
            "data-cy": "collective-mini-form-scroll"
          }, this.props.styles?.menu), {}, {
            children: createFormCollectiveType && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_CreateCollectiveMiniForm__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, _objectSpread({
              type: createFormCollectiveType,
              onCancel: this.setCreateFormCollectiveType,
              addLoggedInUserAsAdmin: addLoggedInUserAsAdmin,
              excludeAdminFields: this.props.excludeAdminFields,
              optionalFields: this.props.createCollectiveOptionalFields,
              onSuccess: collective => {
                if (onChange) {
                  onChange({
                    label: collective.name,
                    value: collective,
                    isNew: true
                  });
                }

                this.setState(state => ({
                  menuIsOpen: false,
                  createFormCollectiveType: null,
                  createdCollectives: [...state.createdCollectives, collective],
                  showCreatedCollective: true
                }));
              }
            }, prefillValue))
          }))
        })
      }), document.body)]
    });
  }

}

CollectivePicker.defaultProps = {
  groupByType: true,
  getDefaultOptions: () => undefined,
  getOptions: () => undefined,
  formatOptionLabel: DefaultCollectiveLabel,
  sortFunc: collectives => lodash_sortBy__WEBPACK_IMPORTED_MODULE_1___default()(collectives, 'name')
};
CollectivePicker.__docgenInfo = {
  "description": "An overset og `StyledSelect` specialized to display, filter and pick a collective from a given list.\nAccepts all the props from [StyledSelect](#!/StyledSelect).\n\nIf you want the collectives to be automatically loaded from the API, check `CollectivePickerAsync`.",
  "methods": [{
    "name": "buildCollectiveOption",
    "docblock": "Function to generate a single select option",
    "modifiers": [],
    "params": [{
      "name": "collective",
      "optional": false
    }],
    "returns": null,
    "description": "Function to generate a single select option"
  }, {
    "name": "onChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "...args",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onInputChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "newTerm",
      "optional": false,
      "type": null
    }],
    "returns": null
  }, {
    "name": "setCreateFormCollectiveType",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "type",
      "optional": false,
      "type": null
    }],
    "returns": null
  }, {
    "name": "getMenuIsOpen",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "menuIsOpenFromProps",
      "optional": false,
      "type": null
    }],
    "returns": null
  }, {
    "name": "openMenu",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "closeMenu",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "getDefaultOption",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "getDefaultOptionsFromProps",
      "optional": false,
      "type": null
    }, {
      "name": "allOptions",
      "optional": false,
      "type": null
    }],
    "returns": null
  }, {
    "name": "getValue",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "CollectivePicker",
  "props": {
    "groupByType": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "Whether we should group collectives by type",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "getDefaultOptions": {
      "defaultValue": {
        "value": "() => undefined",
        "computed": false
      },
      "description": "Get passed the options list, returns the default one",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "getOptions": {
      "defaultValue": {
        "value": "() => undefined",
        "computed": false
      },
      "description": "Use this to control the component",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "formatOptionLabel": {
      "defaultValue": {
        "value": "({ value: collective }) => (\n  <Flex alignItems=\"center\">\n    <Avatar collective={collective} radius={16} />\n    <CollectiveLabelTextContainer>\n      <Span fontSize=\"12px\" fontWeight=\"500\" lineHeight=\"18px\" color=\"black.700\">\n        {truncate(collective.name, { length: 40 })}\n      </Span>\n      <Span fontSize=\"11px\" lineHeight=\"13px\" color=\"black.500\">\n        {collective.slug ? `@${collective.slug}` : collective.email || ''}\n      </Span>\n    </CollectiveLabelTextContainer>\n  </Flex>\n)",
        "computed": false
      },
      "description": "Function to generate a label from the collective + index",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "sortFunc": {
      "defaultValue": {
        "value": "collectives => sortBy(collectives, 'name')",
        "computed": false
      },
      "description": "Function to sort collectives. Default to sorty by name",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "inputId": {
      "description": "The id of the search input",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "collectives": {
      "description": "The list of collectives to display",
      "type": {
        "name": "arrayOf",
        "value": {
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
            "type": {
              "name": "string",
              "required": false
            },
            "name": {
              "name": "string",
              "required": false
            }
          }
        }
      },
      "required": false
    },
    "customOptions": {
      "description": "Custom options to be passed to styled select",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "label": {
              "name": "node",
              "required": false
            },
            "value": {
              "name": "any",
              "required": false
            }
          }
        }
      },
      "required": false
    },
    "customOptionsPosition": {
      "description": "Defines if custom options are listed in the top of the list or the bottom",
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"BOTTOM\"",
          "computed": false
        }, {
          "value": "\"TOP\"",
          "computed": false
        }]
      },
      "required": false
    },
    "onChange": {
      "description": "Called when value changes",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "onInputChange": {
      "description": "Called when search input text changes",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "creatable": {
      "description": "If true, a permanent option to create a collective will be displayed in the select",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "renderNewCollectiveOption": {
      "description": "If creatable is true, this will be used to render the \"Create new ...\"",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "invitable": {
      "description": "If true, a permanent option to invite a new user will be displayed in the select",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onInvite": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "addLoggedInUserAsAdmin": {
      "description": "If true, logged in user will be added as an admin of the created account",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "excludeAdminFields": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "menuIsOpen": {
      "description": "Force menu to be open. Ignored during collective creation",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isDisabled": {
      "description": "Disabled",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "minWidth": {
      "description": "Component min width",
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
    "maxWidth": {
      "description": "Component max width",
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
    "width": {
      "description": "Component width",
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
    "types": {
      "description": "If creatable is true, only these types will be displayed in the create form",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "enum",
          "computed": true,
          "value": "Object.values(CollectiveType)"
        }
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
    "collective": {
      "description": "Use this to control the value of the component",
      "type": {
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
          "type": {
            "name": "string",
            "required": false
          },
          "name": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "createCollectiveOptionalFields": {
      "description": "A list of optional fields to include in the form",
      "type": {
        "name": "array"
      },
      "required": false
    },
    "styles": {
      "description": "StyledSelect pass-through property",
      "type": {
        "name": "object"
      },
      "required": false
    }
  },
  "composes": ["./StyledSelect"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_9__.injectIntl)(CollectivePicker));
DefaultCollectiveLabel.__docgenInfo = {
  "description": "Default label builder used to render a collective. For sections titles and custom options,\nthis will just return the default label.",
  "methods": [],
  "displayName": "DefaultCollectiveLabel",
  "props": {
    "value": {
      "description": "",
      "type": {
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
          },
          "imageUrl": {
            "name": "string",
            "required": false
          },
          "email": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ InviteCollectiveDropdownOption)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_feather_PlusCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62556);
/* harmony import */ var _styled_icons_feather_PlusCircle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_PlusCircle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56562);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87268);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









const InviteCollectiveDropdownOption = ({
  onClick,
  isSearching
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
  flexDirection: "column",
  children: [isSearching && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
    mb: "16px",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      alt: "",
      width: 48,
      height: 48,
      src: "/static/images/magnifier.png"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
      ml: "16px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__/* .Span */ .Dr, {
        fontSize: "12px",
        fontWeight: "700",
        color: "black.800",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "CollectivePicker.InviteMenu.Description",
          defaultMessage: [{
            "type": 0,
            "value": "Not found. You can invite or create a new profile."
          }]
        })
      })
    })]
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    borderRadius: "14px",
    onClick: onClick,
    "data-cy": "collective-picker-invite-button",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
      alignItems: "center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styled_icons_feather_PlusCircle__WEBPACK_IMPORTED_MODULE_1__.PlusCircle, {
        size: 24
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
        ml: "16px",
        fontSize: "11px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "CollectivePicker.InviteMenu.ButtonLabel",
          defaultMessage: [{
            "type": 0,
            "value": "Invite someone to submit an expense"
          }]
        })
      })]
    })
  })]
});
InviteCollectiveDropdownOption.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "InviteCollectiveDropdownOption",
  "props": {
    "onClick": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "isSearching": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};

/***/ }),

/***/ 85321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_feather_PlusCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62556);
/* harmony import */ var _styled_icons_feather_PlusCircle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_PlusCircle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82525);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87268);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);






/** Return the caption associated to a given collective type */




const getTypeCaption = type => {
  if (type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__/* .CollectiveType.USER */ .eV.USER) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
      id: "User.InviteNew",
      defaultMessage: [{
        "type": 0,
        "value": "Invite new User"
      }]
    });
  } else if (type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
      id: "organization.create",
      defaultMessage: [{
        "type": 0,
        "value": "Create Organization"
      }]
    });
  } else if (type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__/* .CollectiveType.COLLECTIVE */ .eV.COLLECTIVE) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
      id: "collective.create",
      defaultMessage: [{
        "type": 0,
        "value": "Create Collective"
      }]
    });
  } else {
    return null;
  }
};
/**
 * A component showing big buttons to pick between collective types (user, org...etc)
 */


const CollectiveTypePicker = ({
  types,
  onChange
}) => {
  const isSingleType = types.length === 1;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Grid */ .rj, {
    gridGap: 1,
    gridTemplateColumns: `repeat(${types.length}, 1fr)`,
    children: types.map(type => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      borderRadius: "14px",
      onClick: () => onChange(type),
      "data-cy": `collective-type-picker-${type}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
        alignItems: "center",
        flexDirection: isSingleType ? 'row' : 'column',
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styled_icons_feather_PlusCircle__WEBPACK_IMPORTED_MODULE_1__.PlusCircle, {
          size: 24
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
          ml: isSingleType ? '16px' : 0,
          fontSize: "11px",
          children: getTypeCaption(type)
        })]
      })
    }, type))
  });
};

CollectiveTypePicker.defaultProps = {
  types: [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__/* .CollectiveType.USER */ .eV.USER, _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__/* .CollectiveType.COLLECTIVE */ .eV.COLLECTIVE, _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION]
};
CollectiveTypePicker.__docgenInfo = {
  "description": "A component showing big buttons to pick between collective types (user, org...etc)",
  "methods": [],
  "displayName": "CollectiveTypePicker",
  "props": {
    "types": {
      "defaultValue": {
        "value": "[CollectiveType.USER, CollectiveType.COLLECTIVE, CollectiveType.ORGANIZATION]",
        "computed": false
      },
      "description": "List of allowed types for this collective creator",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "enum",
          "computed": true,
          "value": "Object.values(CollectiveType)"
        }
      },
      "required": false
    },
    "onChange": {
      "description": "Called when user pick a button",
      "type": {
        "name": "func"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectiveTypePicker);

/***/ }),

/***/ 34861:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59591);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99226);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82525);
/* harmony import */ var _lib_constants_roles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98216);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(32651);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97079);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16159);
/* harmony import */ var _InputTypeCountry__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(32143);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(37278);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(87268);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(87262);
/* harmony import */ var _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(75667);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(93150);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(90998);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledInputField__WEBPACK_IMPORTED_MODULE_19__, _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_20__]);
([_StyledInputField__WEBPACK_IMPORTED_MODULE_19__, _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























const CreateNewMessages = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.defineMessages)({
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_8__/* .CollectiveType.COLLECTIVE */ .eV.COLLECTIVE]: {
    id: "Collective.CreateNew",
    defaultMessage: [{
      "type": 0,
      "value": "Create new Collective"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_8__/* .CollectiveType.USER */ .eV.USER]: {
    id: "User.InviteNew",
    defaultMessage: [{
      "type": 0,
      "value": "Invite new User"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_8__/* .CollectiveType.EVENT */ .eV.EVENT]: {
    id: "Event.CreateNew",
    defaultMessage: [{
      "type": 0,
      "value": "Create new Event"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_8__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION]: {
    id: "Organization.CreateNew",
    defaultMessage: [{
      "type": 0,
      "value": "Create new Organization"
    }]
  }
});
const msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.defineMessages)({
  emailTitle: {
    id: "User.EmailAddress",
    defaultMessage: [{
      "type": 0,
      "value": "Email address"
    }]
  },
  adminEmail: {
    id: "NewOrganization.Admin.Email",
    defaultMessage: [{
      "type": 0,
      "value": "Admin email address"
    }]
  },
  adminName: {
    id: "NewOrganization.Admin.Name",
    defaultMessage: [{
      "type": 0,
      "value": "Admin name"
    }]
  },
  legalName: {
    id: "LegalName",
    defaultMessage: [{
      "type": 0,
      "value": "Legal Name"
    }]
  },
  displayName: {
    id: "Fields.displayName",
    defaultMessage: [{
      "type": 0,
      "value": "Display name"
    }]
  },
  website: {
    id: "Fields.website",
    defaultMessage: [{
      "type": 0,
      "value": "Website"
    }]
  },
  cancel: {
    id: "actions.cancel",
    defaultMessage: [{
      "type": 0,
      "value": "Cancel"
    }]
  },
  save: {
    id: "save",
    defaultMessage: [{
      "type": 0,
      "value": "Save"
    }]
  },
  saveUser: {
    id: "InviteUser",
    defaultMessage: [{
      "type": 0,
      "value": "Invite user"
    }]
  },
  invalidEmail: {
    id: "error.email.invalid",
    defaultMessage: [{
      "type": 0,
      "value": "Invalid email address"
    }]
  },
  invalidWebsite: {
    id: "error.website.invalid",
    defaultMessage: [{
      "type": 0,
      "value": "Invalid website address"
    }]
  },
  invalidName: {
    id: "error.name.invalid",
    defaultMessage: [{
      "type": 0,
      "value": "Name is required"
    }]
  },
  examples: {
    id: "examples",
    defaultMessage: [{
      "type": 0,
      "value": "e.g., "
    }, {
      "type": 1,
      "value": "examples"
    }]
  }
});
const labels = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.defineMessages)({
  'location.address': {
    id: "collective.address.label",
    defaultMessage: [{
      "type": 0,
      "value": "Address"
    }]
  },
  'location.country': {
    id: "collective.country.label",
    defaultMessage: [{
      "type": 0,
      "value": "Country"
    }]
  }
});
/** Prepare mutation variables based on collective type */

const prepareMutationVariables = collective => {
  const includeLocation = collective.location?.address || collective.location?.country;
  const locationFields = includeLocation ? ['location.address', 'location.country'] : [];

  if (collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_8__/* .CollectiveType.USER */ .eV.USER) {
    return {
      user: lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(collective, ['name', 'legalName', 'email', ...locationFields])
    };
  } else if (collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_8__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION) {
    collective.members.forEach(member => member.role = _lib_constants_roles__WEBPACK_IMPORTED_MODULE_9__/* ["default"].ADMIN */ .Z.ADMIN);
    return {
      collective: lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(collective, ['name', 'legalName', 'type', 'website', 'members', ...locationFields])
    };
  } else {
    return {
      collective: lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(collective, ['name', 'type', 'website', ...locationFields])
    };
  }
};

const createCollectiveMutation = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_11__/* .gqlV1 */ .N`
  mutation CreateCollective($collective: CollectiveInputType!) {
    createCollective(collective: $collective) {
      id
      name
      legalName
      slug
      type
      imageUrl(height: 64)
      location {
        id
        address
        country
      }
      members {
        id
        role
        member {
          id
          slug
          name
        }
      }
    }
  }
`;
const createUserMutation = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_11__/* .gqlV1 */ .N`
  mutation CreateUser($user: UserInputType!) {
    createUser(user: $user, throwIfExists: false, sendSignInLink: false) {
      user {
        id
        collective {
          id
          name
          legalName
          slug
          type
          location {
            id
            address
            country
          }
          imageUrl(height: 64)
          ... on User {
            email
          }
        }
      }
    }
  }
`;
/**
 * A mini-form to create collectives/orgs/users. Meant to be embed in popups or
 * small component where we want to provide just the essential fields.
 */

const CreateCollectiveMiniForm = ({
  type,
  onCancel,
  onSuccess,
  addLoggedInUserAsAdmin,
  LoggedInUser,
  refetchLoggedInUser,
  excludeAdminFields,
  optionalFields,
  email = '',
  name = ''
}) => {
  const isUser = type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_8__/* .CollectiveType.USER */ .eV.USER;
  const isCollective = type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_8__/* .CollectiveType.COLLECTIVE */ .eV.COLLECTIVE;
  const isOrganization = type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_8__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION;
  const noAdminFields = isOrganization && excludeAdminFields;
  const mutation = isUser ? createUserMutation : createCollectiveMutation;
  const [createCollective, {
    error: submitError
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(mutation);
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.useIntl)();
  const {
    formatMessage
  } = intl;
  const initialValues = {
    members: [{
      member: {
        email,
        name
      }
    }],
    email,
    name,
    website: ''
  };

  const validate = values => {
    const errors = {};

    if (isOrganization && !excludeAdminFields) {
      if (!lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(values, 'members[0].member.email') || !(0,_lib_utils__WEBPACK_IMPORTED_MODULE_12__/* .isValidEmail */ .vV)(lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(values, 'members[0].member.email'))) {
        errors.members = [{
          member: {
            email: formatMessage(msg.invalidEmail)
          }
        }];
      }

      if (!lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(values, 'members[0].member.name')) {
        errors.members ? errors.members[0].member.name = formatMessage(msg.invalidName) : [{
          member: {
            name: formatMessage(msg.invalidName)
          }
        }];
      }
    } else if (isUser) {
      if (!values.email || !(0,_lib_utils__WEBPACK_IMPORTED_MODULE_12__/* .isValidEmail */ .vV)(values.email)) {
        errors.email = formatMessage(msg.invalidEmail);
      }
    }

    if (!values.name) {
      errors.name = formatMessage(msg.invalidName);
    }

    return errors;
  };

  const submit = formValues => {
    let values;

    if (excludeAdminFields) {
      const clonedValues = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(_objectSpread(_objectSpread({}, formValues), {}, {
        type
      }));

      const assignAdmin = lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(clonedValues, ['name', 'legalName', 'website', 'type']);

      values = lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()(assignAdmin, {
        members: [{
          member: {
            id: LoggedInUser.CollectiveId
          }
        }]
      });
    } else {
      values = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(_objectSpread(_objectSpread({}, formValues), {}, {
        type
      }));

      if (addLoggedInUserAsAdmin && LoggedInUser && values.members) {
        values.members.push({
          member: {
            id: LoggedInUser.CollectiveId
          }
        });
      }
    }

    return createCollective({
      variables: prepareMutationVariables(values)
    }).then(({
      data
    }) => {
      if (addLoggedInUserAsAdmin) {
        refetchLoggedInUser();
      }

      return onSuccess(isUser ? data.createUser.user.collective : data.createCollective);
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
    validate: validate,
    initialValues: initialValues,
    onSubmit: submit,
    validateOnChange: true,
    children: formik => {
      const {
        values,
        errors,
        touched,
        isSubmitting
      } = formik;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_6__.Form, {
        "data-cy": "create-collective-mini-form",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Text__WEBPACK_IMPORTED_MODULE_22__.H5, {
          fontWeight: 600,
          children: CreateNewMessages[type] ? formatMessage(CreateNewMessages[type]) : null
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
          mt: 3,
          children: [(isUser || isOrganization) && !noAdminFields && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
            name: isOrganization ? 'members[0].member.email' : 'email',
            htmlFor: isOrganization ? 'members[0].member.email' : 'email',
            label: formatMessage(isOrganization ? msg.adminEmail : msg.emailTitle),
            error: isOrganization ? lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(touched, 'members[0].member.email') && lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(errors, 'members[0].member.email') : touched.email && errors.email,
            mt: 3,
            value: isOrganization ? lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(values, 'members[0].member.email') : values.email,
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(formik__WEBPACK_IMPORTED_MODULE_6__.Field, _objectSpread(_objectSpread({
              as: _StyledInput__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP
            }, inputProps), {}, {
              type: "email",
              width: "100%",
              placeholder: "e.g., jane-doe@youremail.com",
              "data-cy": "mini-form-email-field"
            }))
          }), isOrganization && !noAdminFields && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
            autoFocus: true,
            name: "members[0].member.name",
            htmlFor: "members[0].member.name",
            label: formatMessage(msg.adminName),
            error: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(touched, 'members[0].member.name') && lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(errors, 'members[0].member.name'),
            mt: 3,
            value: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(values, 'members[0].member.name'),
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(formik__WEBPACK_IMPORTED_MODULE_6__.Field, _objectSpread(_objectSpread({
              as: _StyledInput__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP
            }, inputProps), {}, {
              width: "100%",
              placeholder: "e.g., Jane Doe, Frank Zappa"
            }))
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
            autoFocus: true,
            name: "name",
            htmlFor: "name",
            label: formatMessage(msg.displayName),
            error: touched.name && errors.name,
            mt: 3,
            value: values.name,
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(formik__WEBPACK_IMPORTED_MODULE_6__.Field, _objectSpread(_objectSpread({
              as: _StyledInput__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP
            }, inputProps), {}, {
              width: "100%",
              placeholder: isUser ? 'e.g., Jane Doe, Frank Zappa' : isCollective ? 'e.g., Webpack, Babel' : 'e.g., AirBnb, TripleByte',
              "data-cy": "mini-form-name-field"
            }))
          }), (isUser || isOrganization) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
            name: "legalName",
            htmlFor: "legalName",
            required: false,
            label: formatMessage(msg.legalName),
            mt: 3,
            value: values.legalName,
            isPrivate: isUser,
            hint: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
              id: "editCollective.legalName.description",
              defaultMessage: [{
                "type": 0,
                "value": "Legal names are private and used in receipts, tax forms, payment details on expenses, and other non-public contexts. Legal names are only visible to admins."
              }]
            }),
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(formik__WEBPACK_IMPORTED_MODULE_6__.Field, _objectSpread(_objectSpread({
              as: _StyledInput__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP
            }, inputProps), {}, {
              placeholder: intl.formatMessage(msg.examples, {
                examples: isUser ? 'Jane Mary Doe, Frank Vincent Zappa' : 'Open Collective Inc.'
              }),
              width: "100%",
              "data-cy": "mini-form-legalName-field"
            }))
          }), !isUser && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
            name: "website",
            htmlFor: "website",
            label: formatMessage(msg.website),
            error: errors.website,
            mt: 3,
            value: values.website,
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(formik__WEBPACK_IMPORTED_MODULE_6__.Field, _objectSpread(_objectSpread({
              as: _StyledInput__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP
            }, inputProps), {}, {
              placeholder: "e.g., opencollective.com",
              width: "100%",
              "data-cy": "mini-form-website-field"
            }))
          }), optionalFields?.map(name => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            name: name,
            htmlFor: `createCollectiveMiniForm-${name}`,
            label: formatMessage(labels[name]),
            required: false,
            mt: 3,
            children: ({
              field,
              form
            }) => {
              switch (field.name) {
                case 'location.address':
                  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, _objectSpread({}, field));

                case 'location.country':
                  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_InputTypeCountry__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, field), {}, {
                    inputId: "location.country",
                    onChange: country => form.setFieldValue(name, country),
                    maxMenuHeight: 95
                  }));

                default:
                  return null;
              }
            }
          }, name))]
        }), submitError && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          type: "error",
          withIcon: true,
          mt: 2,
          children: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_10__/* .i18nGraphqlException */ .t2)(intl, submitError)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-end",
          borderTop: "1px solid #D7DBE0",
          mt: 4,
          pt: 3,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            mr: 2,
            minWidth: 100,
            onClick: () => onCancel(),
            disabled: isSubmitting,
            children: formatMessage(msg.cancel)
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            type: "submit",
            buttonStyle: "primary",
            minWidth: 100,
            loading: isSubmitting,
            "data-cy": "mini-form-save-button",
            children: isUser ? formatMessage(msg.saveUser) : formatMessage(msg.save)
          })]
        })]
      });
    }
  });
};

CreateCollectiveMiniForm.__docgenInfo = {
  "description": "A mini-form to create collectives/orgs/users. Meant to be embed in popups or\nsmall component where we want to provide just the essential fields.",
  "methods": [],
  "displayName": "CreateCollectiveMiniForm",
  "props": {
    "email": {
      "defaultValue": {
        "value": "''",
        "computed": false
      },
      "description": "The collective email",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "name": {
      "defaultValue": {
        "value": "''",
        "computed": false
      },
      "description": "The collective name",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "type": {
      "description": "The collective type to create",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "Object.values(CollectiveType)"
      },
      "required": true
    },
    "onCancel": {
      "description": "Called when cancel is clicked",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "onSuccess": {
      "description": "Called with the collective created when the function succeed",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "addLoggedInUserAsAdmin": {
      "description": "If true, the logged in user will be added as an admin of the collective",
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
    "refetchLoggedInUser": {
      "description": "@ignore from withUser",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "excludeAdminFields": {
      "description": "If true, this does not render the 'admin name' and 'admin email' for create org form",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "optionalFields": {
      "description": "A list of optional fields to include in the form",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "enum",
          "value": [{
            "value": "'location.address'",
            "computed": false
          }, {
            "value": "'location.country'",
            "computed": false
          }]
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_23__/* .withUser */ .ns)(CreateCollectiveMiniForm));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75667:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12136);
/* harmony import */ var _lib_form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40986);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87262);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledInputField__WEBPACK_IMPORTED_MODULE_6__]);
_StyledInputField__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const _excluded = ["name", "children", "validate", "isFastField", "flex", "width", "display"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









/**
 * A special wrapper around `StyledInputField` + Formik's `Field` component.
 * Accept all props from `StyledInputField`.
 */




const StyledInputFormikField = _ref => {
  let {
    name,
    children,
    validate = undefined,
    isFastField = false,
    flex = undefined,
    width = undefined,
    display = undefined
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const FieldComponent = isFastField ? formik__WEBPACK_IMPORTED_MODULE_1__.FastField : formik__WEBPACK_IMPORTED_MODULE_1__.Field;
  const htmlFor = props.htmlFor || `input-${name}`;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(FieldComponent, {
    name: name,
    validate: validate,
    children: ({
      field,
      form,
      meta
    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      flex: flex,
      width: width,
      display: display,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, _objectSpread(_objectSpread({
        error: Boolean(meta.error)
      }, props), {}, {
        htmlFor: htmlFor,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
          children: [children({
            form,
            meta,
            field: _objectSpread(_objectSpread({}, field), {}, {
              name: name || htmlFor,
              id: htmlFor,
              type: props.inputType,
              disabled: props.disabled,
              required: props.required,
              error: Boolean(meta.touched && meta.error)
            })
          }), meta.touched && meta.error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
            display: "block",
            color: "red.500",
            pt: 2,
            fontSize: "10px",
            children: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_3__/* .isOCError */ .Vv)(meta.error) ? (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_4__/* .formatFormErrorMessage */ .$m)(intl, meta.error) : meta.error
          })]
        })
      }))
    })
  });
};

StyledInputFormikField.__docgenInfo = {
  "description": "A special wrapper around `StyledInputField` + Formik's `Field` component.\nAccept all props from `StyledInputField`.",
  "methods": [],
  "displayName": "StyledInputFormikField",
  "props": {
    "validate": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "isFastField": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "flex": {
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
    "width": {
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
    "display": {
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
    "name": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "children": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "htmlFor": {
      "description": "the label's 'for' attribute to be used as the 'name' and 'id' for the input",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "id": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "inputType": {
      "description": "Passed to input as `type`. Adapts layout for checkboxes",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "disabled": {
      "description": "Show disabled state for field",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "required": {
      "description": "If set to false, the field will be marked as optional",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledInputFormikField);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ mergeRefs)
/* harmony export */ });
/**
 * Merge react refs.
 * Adapted from https://github.com/smooth-code/react-merge-refs
 */
const mergeRefs = refs => {
  return value => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref !== null) {
        ref.current = value;
      }
    });
  };
};

/***/ })

};
;