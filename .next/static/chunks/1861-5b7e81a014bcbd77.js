"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1861],{

/***/ 41861:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W1": function() { return /* binding */ CUSTOM_OPTIONS_POSITION; },
  "Os": function() { return /* binding */ DefaultCollectiveLabel; },
  "rA": function() { return /* binding */ FLAG_COLLECTIVE_PICKER_COLLECTIVE; },
  "yZ": function() { return /* binding */ FLAG_NEW_COLLECTIVE; },
  "ZP": function() { return /* binding */ components_CollectivePicker; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3323);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7980);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(33227);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(88361);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(92191);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);
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
// EXTERNAL MODULE: ./node_modules/lodash/truncate.js
var truncate = __webpack_require__(39138);
var truncate_default = /*#__PURE__*/__webpack_require__.n(truncate);
// EXTERNAL MODULE: ./node_modules/lodash/sortBy.js
var sortBy = __webpack_require__(89734);
var sortBy_default = /*#__PURE__*/__webpack_require__.n(sortBy);
// EXTERNAL MODULE: ./node_modules/lodash/last.js
var last = __webpack_require__(10928);
var last_default = /*#__PURE__*/__webpack_require__.n(last);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/lodash/intersection.js
var intersection = __webpack_require__(25325);
var intersection_default = /*#__PURE__*/__webpack_require__.n(intersection);
// EXTERNAL MODULE: ./node_modules/lodash/groupBy.js
var groupBy = __webpack_require__(7739);
var groupBy_default = /*#__PURE__*/__webpack_require__.n(groupBy);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/memoize-one/dist/memoize-one.esm.js
var memoize_one_esm = __webpack_require__(30845);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(73935);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/injectIntl.js
var injectIntl = __webpack_require__(74806);
// EXTERNAL MODULE: ./node_modules/react-popper/lib/esm/Manager.js
var Manager = __webpack_require__(81385);
// EXTERNAL MODULE: ./node_modules/react-popper/lib/esm/Reference.js
var Reference = __webpack_require__(63351);
// EXTERNAL MODULE: ./node_modules/react-popper/lib/esm/Popper.js
var Popper = __webpack_require__(74688);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./node_modules/validator/index.js
var validator = __webpack_require__(48966);
// EXTERNAL MODULE: ./lib/constants/collectives.js
var collectives = __webpack_require__(82525);
// EXTERNAL MODULE: ./lib/react-utils.js
var react_utils = __webpack_require__(75993);
// EXTERNAL MODULE: ./components/Avatar.tsx
var Avatar = __webpack_require__(11194);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/PlusCircle/PlusCircle.esm.js
var PlusCircle_esm = __webpack_require__(18967);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/Image.js
var Image = __webpack_require__(56562);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/CollectivePickerInviteMenu.js









var InviteCollectiveDropdownOption = function InviteCollectiveDropdownOption(_ref) {
  var onClick = _ref.onClick,
      isSearching = _ref.isSearching;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    flexDirection: "column",
    children: [isSearching && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      mb: "16px",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Image/* default */.Z, {
        alt: "",
        width: 48,
        height: 48,
        src: "/static/images/magnifier.png"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        ml: "16px",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
          fontSize: "12px",
          fontWeight: "700",
          color: "black.800",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "CollectivePicker.InviteMenu.Description",
            defaultMessage: [{
              "type": 0,
              "value": "Not found. You can invite or create a new profile."
            }]
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
      borderRadius: "14px",
      onClick: onClick,
      "data-cy": "collective-picker-invite-button",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        alignItems: "center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PlusCircle_esm/* PlusCircle */.F, {
          size: 24
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          ml: "16px",
          fontSize: "11px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
};
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
;// CONCATENATED MODULE: ./components/CollectiveTypePicker.js






/** Return the caption associated to a given collective type */




var getTypeCaption = function getTypeCaption(type) {
  if (type === collectives/* CollectiveType.USER */.eV.USER) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
      id: "User.InviteNew",
      defaultMessage: [{
        "type": 0,
        "value": "Invite new User"
      }]
    });
  } else if (type === collectives/* CollectiveType.ORGANIZATION */.eV.ORGANIZATION) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
      id: "organization.create",
      defaultMessage: [{
        "type": 0,
        "value": "Create Organization"
      }]
    });
  } else if (type === collectives/* CollectiveType.COLLECTIVE */.eV.COLLECTIVE) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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


var CollectiveTypePicker = function CollectiveTypePicker(_ref) {
  var types = _ref.types,
      onChange = _ref.onChange;
  var isSingleType = types.length === 1;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Grid */.rj, {
    gridGap: 1,
    gridTemplateColumns: "repeat(".concat(types.length, ", 1fr)"),
    children: types.map(function (type) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
        borderRadius: "14px",
        onClick: function onClick() {
          return onChange(type);
        },
        "data-cy": "collective-type-picker-".concat(type),
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          alignItems: "center",
          flexDirection: isSingleType ? 'row' : 'column',
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PlusCircle_esm/* PlusCircle */.F, {
            size: 24
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            ml: isSingleType ? '16px' : 0,
            fontSize: "11px",
            children: getTypeCaption(type)
          })]
        })
      }, type);
    })
  });
};

CollectiveTypePicker.defaultProps = {
  types: [collectives/* CollectiveType.USER */.eV.USER, collectives/* CollectiveType.COLLECTIVE */.eV.COLLECTIVE, collectives/* CollectiveType.ORGANIZATION */.eV.ORGANIZATION]
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
/* harmony default export */ var components_CollectiveTypePicker = (CollectiveTypePicker);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/CreateCollectiveMiniForm.tsx
var CreateCollectiveMiniForm = __webpack_require__(34861);
// EXTERNAL MODULE: ./components/StyledCard.tsx
var StyledCard = __webpack_require__(19156);
// EXTERNAL MODULE: ./components/StyledSelect.tsx
var StyledSelect = __webpack_require__(66943);
;// CONCATENATED MODULE: ./components/CollectivePicker.js















var _excluded = ["inputId", "intl", "collectives", "customOptions", "formatOptionLabel", "getDefaultOptions", "groupByType", "onChange", "onInvite", "sortFunc", "types", "isDisabled", "menuIsOpen", "minWidth", "maxWidth", "width", "addLoggedInUserAsAdmin", "renderNewCollectiveOption", "isSearchable"];

var _defineMessages;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





















var CollectiveTypesI18n = (0,lib.defineMessages)((_defineMessages = {}, defineProperty_default()(_defineMessages, collectives/* CollectiveType.COLLECTIVE */.eV.COLLECTIVE, {
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
}), defineProperty_default()(_defineMessages, collectives/* CollectiveType.ORGANIZATION */.eV.ORGANIZATION, {
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
}), defineProperty_default()(_defineMessages, collectives/* CollectiveType.USER */.eV.USER, {
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
}), _defineMessages));
var Messages = (0,lib.defineMessages)({
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
var CollectiveLabelTextContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "CollectivePicker__CollectiveLabelTextContainer",
  componentId: "sc-1c34xir-0"
})(["display:flex;flex-direction:column;text-align:left;margin-left:8px;"]);
/**
 * Default label builder used to render a collective. For sections titles and custom options,
 * this will just return the default label.
 */

var DefaultCollectiveLabel = function DefaultCollectiveLabel(_ref) {
  var collective = _ref.value;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    alignItems: "center",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
      collective: collective,
      radius: 16
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(CollectiveLabelTextContainer, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
        fontSize: "12px",
        fontWeight: "500",
        lineHeight: "18px",
        color: "black.700",
        children: truncate_default()(collective.name, {
          length: 40
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
        fontSize: "11px",
        lineHeight: "13px",
        color: "black.500",
        children: collective.slug ? "@".concat(collective.slug) : collective.email || ''
      })]
    })]
  });
};
// Some flags to differentiate options in the picker
var FLAG_COLLECTIVE_PICKER_COLLECTIVE = '__collective_picker_collective__';
var FLAG_NEW_COLLECTIVE = '__collective_picker_new__';
var FLAG_INVITE_NEW = '__collective_picker_invite_new__';
var CUSTOM_OPTIONS_POSITION = {
  TOP: 'TOP',
  BOTTOM: 'BOTTOM'
};
var USER = collectives/* CollectiveType.USER */.eV.USER,
    ORGANIZATION = collectives/* CollectiveType.ORGANIZATION */.eV.ORGANIZATION,
    COLLECTIVE = collectives/* CollectiveType.COLLECTIVE */.eV.COLLECTIVE,
    FUND = collectives/* CollectiveType.FUND */.eV.FUND,
    EVENT = collectives/* CollectiveType.EVENT */.eV.EVENT,
    PROJECT = collectives/* CollectiveType.PROJECT */.eV.PROJECT;
var sortedAccountTypes = ['INDIVIDUAL', USER, ORGANIZATION, COLLECTIVE, FUND, EVENT, PROJECT];
/**
 * An overset og `StyledSelect` specialized to display, filter and pick a collective from a given list.
 * Accepts all the props from [StyledSelect](#!/StyledSelect).
 *
 * If you want the collectives to be automatically loaded from the API, check `CollectivePickerAsync`.
 */

var CollectivePicker = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(CollectivePicker, _React$PureComponent);

  var _super = _createSuper(CollectivePicker);

  function CollectivePicker(props) {
    var _this;

    classCallCheck_default()(this, CollectivePicker);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "getOptionsFromCollectives", (0,memoize_one_esm/* default */.Z)(function (collectives, groupByType, sortFunc, intl) {
      if (!collectives || collectives.length === 0) {
        return [];
      } // If not grouped, just sort the collectives by names and return their options


      if (!groupByType) {
        return sortFunc(collectives).map(_this.buildCollectiveOption);
      } // Group collectives under categories, sort the categories labels and the collectives inside them


      var collectivesByTypes = groupBy_default()(collectives, 'type');

      var sortedActiveTypes = intersection_default()(sortedAccountTypes, Object.keys(collectivesByTypes));

      return sortedActiveTypes.map(function (type) {
        var sectionI18n = CollectiveTypesI18n[type];
        var sortedCollectives = sortFunc(collectivesByTypes[type]);
        var sectionLabel = sectionI18n ? intl.formatMessage(sectionI18n, {
          n: sortedCollectives.length
        }) : type;
        return {
          label: sectionLabel || '',
          options: sortedCollectives.map(_this.buildCollectiveOption)
        };
      });
    }));

    defineProperty_default()(assertThisInitialized_default()(_this), "getAllOptions", (0,memoize_one_esm/* default */.Z)(function (collectivesOptions, customOptions, createdCollectives) {
      var _this$props = _this.props,
          creatable = _this$props.creatable,
          invitable = _this$props.invitable,
          intl = _this$props.intl,
          customOptionsPosition = _this$props.customOptionsPosition;
      var options = collectivesOptions;

      if (createdCollectives.length > 0) {
        options = [].concat(toConsumableArray_default()(createdCollectives.map(_this.buildCollectiveOption)), toConsumableArray_default()(options));
      }

      if (customOptions && customOptions.length > 0) {
        options = customOptionsPosition === CUSTOM_OPTIONS_POSITION.TOP ? [].concat(toConsumableArray_default()(customOptions), toConsumableArray_default()(options)) : [].concat(toConsumableArray_default()(options), toConsumableArray_default()(customOptions));
      }

      if (invitable) {
        var _ref2;

        options = [].concat(toConsumableArray_default()(options), [{
          label: intl.formatMessage(Messages.inviteNew).toUpperCase(),
          options: [(_ref2 = {
            label: null,
            value: null,
            isDisabled: true
          }, defineProperty_default()(_ref2, FLAG_INVITE_NEW, true), defineProperty_default()(_ref2, "__background__", 'white'), _ref2)]
        }]);
      }

      if (creatable) {
        var _ref3;

        var isOnlyForUser = isEqual_default()(_this.props.types, [collectives/* CollectiveType.USER */.eV.USER]);

        options = [].concat(toConsumableArray_default()(options), [{
          label: isOnlyForUser ? intl.formatMessage(Messages.inviteNew).toUpperCase() : intl.formatMessage(Messages.createNew).toUpperCase(),
          options: [(_ref3 = {
            label: null,
            value: null,
            isDisabled: true
          }, defineProperty_default()(_ref3, FLAG_NEW_COLLECTIVE, true), defineProperty_default()(_ref3, "__background__", 'white'), _ref3)]
        }]);
      }

      return options;
    }));

    defineProperty_default()(assertThisInitialized_default()(_this), "onChange", function () {
      var _this$props2;

      (_this$props2 = _this.props).onChange.apply(_this$props2, arguments);

      if (_this.state.showCreatedCollective) {
        _this.setState({
          showCreatedCollective: false
        });
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onInputChange", function (newTerm) {
      var _this$props$onInputCh, _this$props3;

      (_this$props$onInputCh = (_this$props3 = _this.props).onInputChange) === null || _this$props$onInputCh === void 0 ? void 0 : _this$props$onInputCh.call(_this$props3, newTerm);

      _this.setState({
        searchText: newTerm
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setCreateFormCollectiveType", function (type) {
      _this.setState({
        createFormCollectiveType: type || null
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "openMenu", function () {
      return _this.setState({
        menuIsOpen: true
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "closeMenu", function () {
      return _this.setState({
        menuIsOpen: false
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getDefaultOption", function (getDefaultOptionsFromProps, allOptions) {
      if (_this.state.createdCollective) {
        return _this.buildCollectiveOption(_this.state.createdCollective);
      } else if (getDefaultOptionsFromProps) {
        return getDefaultOptionsFromProps(_this.buildCollectiveOption, allOptions);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getValue", function () {
      if (_this.props.collective !== undefined) {
        return _this.buildCollectiveOption(_this.props.collective);
      } else if (_this.state.showCreatedCollective) {
        return _this.buildCollectiveOption(last_default()(_this.state.createdCollectives));
      } else {
        return _this.props.getOptions(_this.buildCollectiveOption);
      }
    });

    _this.containerRef = /*#__PURE__*/react.createRef();
    _this.state = {
      createFormCollectiveType: null,
      displayInviteMenu: null,
      menuIsOpen: props.menuIsOpen,
      createdCollectives: [],
      searchText: ''
    };
    return _this;
  }
  /**
   * Function to generate a single select option
   */


  createClass_default()(CollectivePicker, [{
    key: "buildCollectiveOption",
    value: function buildCollectiveOption(collective) {
      if (collective === null) {
        return null;
      } else {
        return defineProperty_default()({
          value: collective,
          label: collective.name
        }, FLAG_COLLECTIVE_PICKER_COLLECTIVE, true);
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

  }, {
    key: "getMenuIsOpen",
    value: function getMenuIsOpen(menuIsOpenFromProps) {
      if (this.state.createFormCollectiveType || this.props.isDisabled) {
        return false;
      } else if (typeof menuIsOpenFromProps !== 'undefined') {
        return menuIsOpenFromProps;
      } else {
        return this.state.menuIsOpen;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          inputId = _this$props4.inputId,
          intl = _this$props4.intl,
          collectives = _this$props4.collectives,
          customOptions = _this$props4.customOptions,
          _formatOptionLabel = _this$props4.formatOptionLabel,
          getDefaultOptions = _this$props4.getDefaultOptions,
          groupByType = _this$props4.groupByType,
          onChange = _this$props4.onChange,
          onInvite = _this$props4.onInvite,
          sortFunc = _this$props4.sortFunc,
          types = _this$props4.types,
          isDisabled = _this$props4.isDisabled,
          menuIsOpen = _this$props4.menuIsOpen,
          minWidth = _this$props4.minWidth,
          maxWidth = _this$props4.maxWidth,
          width = _this$props4.width,
          addLoggedInUserAsAdmin = _this$props4.addLoggedInUserAsAdmin,
          renderNewCollectiveOption = _this$props4.renderNewCollectiveOption,
          isSearchable = _this$props4.isSearchable,
          props = objectWithoutProperties_default()(_this$props4, _excluded);

      var _this$state = this.state,
          createFormCollectiveType = _this$state.createFormCollectiveType,
          createdCollectives = _this$state.createdCollectives,
          displayInviteMenu = _this$state.displayInviteMenu,
          searchText = _this$state.searchText;
      var collectiveOptions = this.getOptionsFromCollectives(collectives, groupByType, sortFunc, intl);
      var allOptions = this.getAllOptions(collectiveOptions, customOptions, createdCollectives);
      var prefillValue = (0,validator.isEmail)(searchText) ? {
        email: searchText
      } : {
        name: searchText
      };
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(Manager/* Manager */.dK, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Reference/* Reference */.s, {
          children: function children(_ref5) {
            var ref = _ref5.ref;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
              position: "relative",
              minWidth: minWidth,
              maxWidth: maxWidth,
              width: width,
              ref: (0,react_utils/* mergeRefs */.l)([_this2.containerRef, ref]),
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledSelect/* default */.ZP, _objectSpread(_objectSpread({
                inputId: inputId,
                options: allOptions,
                defaultValue: getDefaultOptions && getDefaultOptions(_this2.buildCollectiveOption, allOptions),
                menuIsOpen: _this2.getMenuIsOpen(menuIsOpen),
                isDisabled: Boolean(createFormCollectiveType) || displayInviteMenu || isDisabled,
                onMenuOpen: _this2.openMenu,
                onMenuClose: _this2.closeMenu,
                value: _this2.getValue(),
                onChange: _this2.onChange,
                noOptionsMessage: searchText ? undefined : function () {
                  return null;
                },
                isSearchable: isSearchable !== null && isSearchable !== void 0 ? isSearchable : true,
                formatOptionLabel: function formatOptionLabel(option, context) {
                  if (option[FLAG_COLLECTIVE_PICKER_COLLECTIVE]) {
                    return _formatOptionLabel(option, context, intl);
                  } else if (option[FLAG_NEW_COLLECTIVE]) {
                    return renderNewCollectiveOption ? renderNewCollectiveOption() : /*#__PURE__*/(0,jsx_runtime.jsx)(components_CollectiveTypePicker, {
                      onChange: _this2.setCreateFormCollectiveType,
                      types: option.types || types
                    });
                  } else if (option[FLAG_INVITE_NEW]) {
                    return /*#__PURE__*/(0,jsx_runtime.jsx)(InviteCollectiveDropdownOption, {
                      isSearching: !!searchText && !collectives.length,
                      onClick: function onClick() {
                        onInvite === null || onInvite === void 0 ? void 0 : onInvite(true);
                        onChange === null || onChange === void 0 ? void 0 : onChange({
                          label: null,
                          value: null
                        });

                        _this2.setState({
                          menuIsOpen: false
                        });
                      }
                    });
                  } else {
                    return option.label;
                  }
                }
              }, props), {}, {
                onInputChange: _this2.onInputChange
              }))
            });
          }
        }), createFormCollectiveType && /*#__PURE__*/react_dom.createPortal( /*#__PURE__*/(0,jsx_runtime.jsx)(Popper/* Popper */.r, {
          placement: "bottom",
          children: function children(_ref6) {
            var _this2$props$styles;

            var placement = _ref6.placement,
                ref = _ref6.ref,
                style = _ref6.style;
            return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              "data-placement": placement,
              ref: ref,
              style: _objectSpread(_objectSpread({}, style), {}, {
                width: _this2.containerRef.current.clientWidth,
                zIndex: 9999
              }),
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCard/* default */.Z, _objectSpread(_objectSpread({
                p: 3,
                my: 1,
                boxShadow: "-2px 4px 7px 0 rgba(78, 78, 78, 14%)",
                maxHeight: 315,
                overflowY: "auto",
                "data-cy": "collective-mini-form-scroll"
              }, (_this2$props$styles = _this2.props.styles) === null || _this2$props$styles === void 0 ? void 0 : _this2$props$styles.menu), {}, {
                children: createFormCollectiveType && /*#__PURE__*/(0,jsx_runtime.jsx)(CreateCollectiveMiniForm/* default */.Z, _objectSpread({
                  type: createFormCollectiveType,
                  onCancel: _this2.setCreateFormCollectiveType,
                  addLoggedInUserAsAdmin: addLoggedInUserAsAdmin,
                  excludeAdminFields: _this2.props.excludeAdminFields,
                  optionalFields: _this2.props.createCollectiveOptionalFields,
                  onSuccess: function onSuccess(collective) {
                    if (onChange) {
                      onChange({
                        label: collective.name,
                        value: collective,
                        isNew: true
                      });
                    }

                    _this2.setState(function (state) {
                      return {
                        menuIsOpen: false,
                        createFormCollectiveType: null,
                        createdCollectives: [].concat(toConsumableArray_default()(state.createdCollectives), [collective]),
                        showCreatedCollective: true
                      };
                    });
                  }
                }, prefillValue))
              }))
            });
          }
        }), document.body)]
      });
    }
  }]);

  return CollectivePicker;
}(react.PureComponent);

CollectivePicker.defaultProps = {
  groupByType: true,
  getDefaultOptions: function getDefaultOptions() {
    return undefined;
  },
  getOptions: function getOptions() {
    return undefined;
  },
  formatOptionLabel: DefaultCollectiveLabel,
  sortFunc: function sortFunc(collectives) {
    return sortBy_default()(collectives, 'name');
  }
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
/* harmony default export */ var components_CollectivePicker = ((0,injectIntl/* default */.ZP)(CollectivePicker));
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

/***/ }),

/***/ 34861:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78718);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50361);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28583);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67294);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(46829);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82580);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(86896);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(44012);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82525);
/* harmony import */ var _lib_constants_roles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(98216);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32651);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97079);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(16159);
/* harmony import */ var _InputTypeCountry__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(32143);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(86702);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(87268);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(87262);
/* harmony import */ var _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(75667);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(93150);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(90998);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(85893);








var _defineMessages, _templateObject, _templateObject2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }























var CreateNewMessages = (0,react_intl__WEBPACK_IMPORTED_MODULE_26__.defineMessages)((_defineMessages = {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(_defineMessages, _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_9__/* .CollectiveType.COLLECTIVE */ .eV.COLLECTIVE, {
  id: "Collective.CreateNew",
  defaultMessage: [{
    "type": 0,
    "value": "Create new Collective"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(_defineMessages, _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_9__/* .CollectiveType.USER */ .eV.USER, {
  id: "User.InviteNew",
  defaultMessage: [{
    "type": 0,
    "value": "Invite new User"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(_defineMessages, _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_9__/* .CollectiveType.EVENT */ .eV.EVENT, {
  id: "Event.CreateNew",
  defaultMessage: [{
    "type": 0,
    "value": "Create new Event"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(_defineMessages, _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_9__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION, {
  id: "Organization.CreateNew",
  defaultMessage: [{
    "type": 0,
    "value": "Create new Organization"
  }]
}), _defineMessages));
var msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_26__.defineMessages)({
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
var labels = (0,react_intl__WEBPACK_IMPORTED_MODULE_26__.defineMessages)({
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

var prepareMutationVariables = function prepareMutationVariables(collective) {
  var _collective$location, _collective$location2;

  var includeLocation = ((_collective$location = collective.location) === null || _collective$location === void 0 ? void 0 : _collective$location.address) || ((_collective$location2 = collective.location) === null || _collective$location2 === void 0 ? void 0 : _collective$location2.country);
  var locationFields = includeLocation ? ['location.address', 'location.country'] : [];

  if (collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_9__/* .CollectiveType.USER */ .eV.USER) {
    return {
      user: lodash_pick__WEBPACK_IMPORTED_MODULE_3___default()(collective, ['name', 'legalName', 'email'].concat(locationFields))
    };
  } else if (collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_9__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION) {
    collective.members.forEach(function (member) {
      return member.role = _lib_constants_roles__WEBPACK_IMPORTED_MODULE_10__/* ["default"].ADMIN */ .Z.ADMIN;
    });
    return {
      collective: lodash_pick__WEBPACK_IMPORTED_MODULE_3___default()(collective, ['name', 'legalName', 'type', 'website', 'members'].concat(locationFields))
    };
  } else {
    return {
      collective: lodash_pick__WEBPACK_IMPORTED_MODULE_3___default()(collective, ['name', 'type', 'website'].concat(locationFields))
    };
  }
};

var createCollectiveMutation = (0,_lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_12__/* .gqlV1 */ .N)(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1___default()(["\n  mutation CreateCollective($collective: CollectiveInputType!) {\n    createCollective(collective: $collective) {\n      id\n      name\n      legalName\n      slug\n      type\n      imageUrl(height: 64)\n      location {\n        id\n        address\n        country\n      }\n      members {\n        id\n        role\n        member {\n          id\n          slug\n          name\n        }\n      }\n    }\n  }\n"])));
var createUserMutation = (0,_lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_12__/* .gqlV1 */ .N)(_templateObject2 || (_templateObject2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1___default()(["\n  mutation CreateUser($user: UserInputType!) {\n    createUser(user: $user, throwIfExists: false, sendSignInLink: false) {\n      user {\n        id\n        collective {\n          id\n          name\n          legalName\n          slug\n          type\n          location {\n            id\n            address\n            country\n          }\n          imageUrl(height: 64)\n          ... on User {\n            email\n          }\n        }\n      }\n    }\n  }\n"])));
/**
 * A mini-form to create collectives/orgs/users. Meant to be embed in popups or
 * small component where we want to provide just the essential fields.
 */

var CreateCollectiveMiniForm = function CreateCollectiveMiniForm(_ref) {
  var type = _ref.type,
      onCancel = _ref.onCancel,
      onSuccess = _ref.onSuccess,
      addLoggedInUserAsAdmin = _ref.addLoggedInUserAsAdmin,
      LoggedInUser = _ref.LoggedInUser,
      refetchLoggedInUser = _ref.refetchLoggedInUser,
      excludeAdminFields = _ref.excludeAdminFields,
      optionalFields = _ref.optionalFields,
      _ref$email = _ref.email,
      email = _ref$email === void 0 ? '' : _ref$email,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? '' : _ref$name;
  var isUser = type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_9__/* .CollectiveType.USER */ .eV.USER;
  var isCollective = type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_9__/* .CollectiveType.COLLECTIVE */ .eV.COLLECTIVE;
  var isOrganization = type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_9__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION;
  var noAdminFields = isOrganization && excludeAdminFields;
  var mutation = isUser ? createUserMutation : createCollectiveMutation;

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_27__.useMutation)(mutation),
      _useMutation2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_useMutation, 2),
      createCollective = _useMutation2[0],
      submitError = _useMutation2[1].error;

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z)();
  var formatMessage = intl.formatMessage;
  var initialValues = {
    members: [{
      member: {
        email: email,
        name: name
      }
    }],
    email: email,
    name: name,
    website: ''
  };

  var validate = function validate(values) {
    var errors = {};

    if (isOrganization && !excludeAdminFields) {
      if (!lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(values, 'members[0].member.email') || !(0,_lib_utils__WEBPACK_IMPORTED_MODULE_13__/* .isValidEmail */ .vV)(lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(values, 'members[0].member.email'))) {
        errors.members = [{
          member: {
            email: formatMessage(msg.invalidEmail)
          }
        }];
      }

      if (!lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(values, 'members[0].member.name')) {
        errors.members ? errors.members[0].member.name = formatMessage(msg.invalidName) : [{
          member: {
            name: formatMessage(msg.invalidName)
          }
        }];
      }
    } else if (isUser) {
      if (!values.email || !(0,_lib_utils__WEBPACK_IMPORTED_MODULE_13__/* .isValidEmail */ .vV)(values.email)) {
        errors.email = formatMessage(msg.invalidEmail);
      }
    }

    if (!values.name) {
      errors.name = formatMessage(msg.invalidName);
    }

    return errors;
  };

  var submit = function submit(formValues) {
    var values;

    if (excludeAdminFields) {
      var clonedValues = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default()(_objectSpread(_objectSpread({}, formValues), {}, {
        type: type
      }));

      var assignAdmin = lodash_pick__WEBPACK_IMPORTED_MODULE_3___default()(clonedValues, ['name', 'legalName', 'website', 'type']);

      values = lodash_assign__WEBPACK_IMPORTED_MODULE_6___default()(assignAdmin, {
        members: [{
          member: {
            id: LoggedInUser.CollectiveId
          }
        }]
      });
    } else {
      values = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default()(_objectSpread(_objectSpread({}, formValues), {}, {
        type: type
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
    }).then(function (_ref2) {
      var data = _ref2.data;

      if (addLoggedInUserAsAdmin) {
        refetchLoggedInUser();
      }

      return onSuccess(isUser ? data.createUser.user.collective : data.createCollective);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(formik__WEBPACK_IMPORTED_MODULE_8__/* .Formik */ .J9, {
    validate: validate,
    initialValues: initialValues,
    onSubmit: submit,
    validateOnChange: true,
    children: function children(formik) {
      var values = formik.values,
          errors = formik.errors,
          touched = formik.touched,
          isSubmitting = formik.isSubmitting;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_8__/* .Form */ .l0, {
        "data-cy": "create-collective-mini-form",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_23__.H5, {
          fontWeight: 600,
          children: CreateNewMessages[type] ? formatMessage(CreateNewMessages[type]) : null
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Box */ .xu, {
          mt: 3,
          children: [(isUser || isOrganization) && !noAdminFields && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_StyledInputField__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            name: isOrganization ? 'members[0].member.email' : 'email',
            htmlFor: isOrganization ? 'members[0].member.email' : 'email',
            label: formatMessage(isOrganization ? msg.adminEmail : msg.emailTitle),
            error: isOrganization ? lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(touched, 'members[0].member.email') && lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(errors, 'members[0].member.email') : touched.email && errors.email,
            mt: 3,
            value: isOrganization ? lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(values, 'members[0].member.email') : values.email,
            children: function children(inputProps) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(formik__WEBPACK_IMPORTED_MODULE_8__/* .Field */ .gN, _objectSpread(_objectSpread({
                as: _StyledInput__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP
              }, inputProps), {}, {
                type: "email",
                width: "100%",
                placeholder: "e.g., jane-doe@youremail.com",
                "data-cy": "mini-form-email-field"
              }));
            }
          }), isOrganization && !noAdminFields && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_StyledInputField__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            autoFocus: true,
            name: "members[0].member.name",
            htmlFor: "members[0].member.name",
            label: formatMessage(msg.adminName),
            error: lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(touched, 'members[0].member.name') && lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(errors, 'members[0].member.name'),
            mt: 3,
            value: lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(values, 'members[0].member.name'),
            children: function children(inputProps) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(formik__WEBPACK_IMPORTED_MODULE_8__/* .Field */ .gN, _objectSpread(_objectSpread({
                as: _StyledInput__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP
              }, inputProps), {}, {
                width: "100%",
                placeholder: "e.g., Jane Doe, Frank Zappa"
              }));
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_StyledInputField__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            autoFocus: true,
            name: "name",
            htmlFor: "name",
            label: formatMessage(msg.displayName),
            error: touched.name && errors.name,
            mt: 3,
            value: values.name,
            children: function children(inputProps) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(formik__WEBPACK_IMPORTED_MODULE_8__/* .Field */ .gN, _objectSpread(_objectSpread({
                as: _StyledInput__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP
              }, inputProps), {}, {
                width: "100%",
                placeholder: isUser ? 'e.g., Jane Doe, Frank Zappa' : isCollective ? 'e.g., Webpack, Babel' : 'e.g., AirBnb, TripleByte',
                "data-cy": "mini-form-name-field"
              }));
            }
          }), (isUser || isOrganization) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_StyledInputField__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            name: "legalName",
            htmlFor: "legalName",
            required: false,
            label: formatMessage(msg.legalName),
            mt: 3,
            value: values.legalName,
            isPrivate: isUser,
            hint: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
              id: "editCollective.legalName.description",
              defaultMessage: [{
                "type": 0,
                "value": "Legal names are private and used in receipts, tax forms, payment details on expenses, and other non-public contexts. Legal names are only visible to admins."
              }]
            }),
            children: function children(inputProps) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(formik__WEBPACK_IMPORTED_MODULE_8__/* .Field */ .gN, _objectSpread(_objectSpread({
                as: _StyledInput__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP
              }, inputProps), {}, {
                placeholder: intl.formatMessage(msg.examples, {
                  examples: isUser ? 'Jane Mary Doe, Frank Vincent Zappa' : 'Open Collective Inc.'
                }),
                width: "100%",
                "data-cy": "mini-form-legalName-field"
              }));
            }
          }), !isUser && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_StyledInputField__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            name: "website",
            htmlFor: "website",
            label: formatMessage(msg.website),
            error: errors.website,
            mt: 3,
            value: values.website,
            children: function children(inputProps) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(formik__WEBPACK_IMPORTED_MODULE_8__/* .Field */ .gN, _objectSpread(_objectSpread({
                as: _StyledInput__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP
              }, inputProps), {}, {
                placeholder: "e.g., opencollective.com",
                width: "100%",
                "data-cy": "mini-form-website-field"
              }));
            }
          }), optionalFields === null || optionalFields === void 0 ? void 0 : optionalFields.map(function (name) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
              name: name,
              htmlFor: "createCollectiveMiniForm-".concat(name),
              label: formatMessage(labels[name]),
              required: false,
              mt: 3,
              children: function children(_ref3) {
                var field = _ref3.field,
                    form = _ref3.form;

                switch (field.name) {
                  case 'location.address':
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_StyledTextarea__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, _objectSpread({}, field));

                  case 'location.country':
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_InputTypeCountry__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, field), {}, {
                      inputId: "location.country",
                      onChange: function onChange(country) {
                        return form.setFieldValue(name, country);
                      },
                      maxMenuHeight: 95
                    }));

                  default:
                    return null;
                }
              }
            }, name);
          })]
        }), submitError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_MessageBox__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          type: "error",
          withIcon: true,
          mt: 2,
          children: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_11__/* .i18nGraphqlException */ .t2)(intl, submitError)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-end",
          borderTop: "1px solid #D7DBE0",
          mt: 4,
          pt: 3,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
            mr: 2,
            minWidth: 100,
            onClick: function onClick() {
              return onCancel();
            },
            disabled: isSubmitting,
            children: formatMessage(msg.cancel)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
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
/* harmony default export */ __webpack_exports__["Z"] = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_24__/* .withUser */ .ns)(CreateCollectiveMiniForm));

/***/ }),

/***/ 32143:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_InputTypeCountry; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3323);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7980);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(33227);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(88361);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(92191);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);
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
// EXTERNAL MODULE: ./node_modules/lodash/orderBy.js
var orderBy = __webpack_require__(75472);
var orderBy_default = /*#__PURE__*/__webpack_require__.n(orderBy);
// EXTERNAL MODULE: ./node_modules/lodash/isUndefined.js
var isUndefined = __webpack_require__(52353);
var isUndefined_default = /*#__PURE__*/__webpack_require__.n(isUndefined);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/country-currency-emoji-flags/index.js
var country_currency_emoji_flags = __webpack_require__(14359);
// EXTERNAL MODULE: ./node_modules/memoize-one/dist/memoize-one.esm.js
var memoize_one_esm = __webpack_require__(30845);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/injectIntl.js
var injectIntl = __webpack_require__(74806);
;// CONCATENATED MODULE: ./lib/geolocation_api.js



/**
 * Fetch user geolocation from third party API. It is only meant to be used on
 * client side. If called from server side, this function returns null;
 *
 * @returns countryCode: {string} two-letters ISO code or null if any error occurs
 */
var fetchGeoLocation = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
    var response, body;
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (true) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", null);

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return fetch('https://wtfismyip.com/json');

          case 5:
            response = _context.sent;
            _context.next = 8;
            return response.json();

          case 8:
            body = _context.sent;
            return _context.abrupt("return", body.YourFuckingCountryCode);

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("return", null);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 12]]);
  }));

  return function fetchGeoLocation() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var geolocation_api = (fetchGeoLocation);
// EXTERNAL MODULE: ./lib/i18n/index.js
var i18n = __webpack_require__(78080);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/StyledSelect.tsx
var StyledSelect = __webpack_require__(66943);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/InputTypeCountry.js












var _excluded = ["defaultValue", "value", "intl", "onChange", "locale", "name", "inputId"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }













var InputTypeCountry = /*#__PURE__*/function (_Component) {
  inherits_default()(InputTypeCountry, _Component);

  var _super = _createSuper(InputTypeCountry);

  function InputTypeCountry(props) {
    var _this;

    classCallCheck_default()(this, InputTypeCountry);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "getOptions", (0,memoize_one_esm/* default */.Z)(function (locale) {
      var options = Object.keys(country_currency_emoji_flags.countryData).map(function (code) {
        return {
          value: code,
          country: _this.countryNames.of(code),
          label: _this.generateCountryLabel(locale, code)
        };
      });
      return [].concat(toConsumableArray_default()(_this.props.customOptions), toConsumableArray_default()(orderBy_default()(options, 'country')));
    }));

    defineProperty_default()(assertThisInitialized_default()(_this), "getSelectedOption", (0,memoize_one_esm/* default */.Z)(function (locale, country) {
      if (!country) {
        return null;
      }

      var code = country.toUpperCase();

      var customOption = _this.props.customOptions.find(function (customOption) {
        return customOption.value === code;
      });

      return customOption || {
        value: code,
        label: _this.generateCountryLabel(locale, code)
      };
    }));

    _this.countryNames = (0,i18n/* getIntlDisplayNames */._)(props.intl.locale, 'region');
    return _this;
  }

  createClass_default()(InputTypeCountry, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var country;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.props.autoDetect && !this.props.value && !this.props.defaultValue)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return geolocation_api();

              case 3:
                country = _context.sent;

                // Country may have been changed by the user by the time geolocation API respond
                if (country && !this.props.value && !this.props.defaultValue) {
                  this.props.onChange(country);
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "generateCountryLabel",
    value: function generateCountryLabel(locale, countryCode) {
      var countryName = this.countryNames.of(countryCode);
      var emoji = (0,country_currency_emoji_flags.getEmojiByCountryCode)(countryCode);
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        fontSize: this.props.fontSize,
        lineHeight: "20px",
        fontWeight: "500",
        title: countryName,
        children: [emoji && /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
          children: emoji
        }), "\xA0\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
          color: "black.800",
          children: countryName
        })]
      });
    }
  }, {
    key: "filterOptions",
    value: function filterOptions(candidate, input) {
      if (input) {
        var _candidate$data$count, _candidate$data$count2, _candidate$data$value;

        return ((_candidate$data$count = candidate.data.country) === null || _candidate$data$count === void 0 ? void 0 : (_candidate$data$count2 = _candidate$data$count.toLowerCase()) === null || _candidate$data$count2 === void 0 ? void 0 : _candidate$data$count2.includes(input.toLowerCase())) || ((_candidate$data$value = candidate.data.value) === null || _candidate$data$value === void 0 ? void 0 : _candidate$data$value.toLowerCase()) === input.toLowerCase();
      }

      return true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          defaultValue = _this$props.defaultValue,
          value = _this$props.value,
          intl = _this$props.intl,
          _onChange = _this$props.onChange,
          locale = _this$props.locale,
          name = _this$props.name,
          inputId = _this$props.inputId,
          props = objectWithoutProperties_default()(_this$props, _excluded);

      return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledSelect/* default */.ZP, _objectSpread({
        name: name,
        inputId: inputId,
        minWidth: 150,
        options: this.getOptions(locale || intl.locale, defaultValue),
        filterOption: this.filterOptions,
        onChange: function onChange(_ref) {
          var value = _ref.value;
          return _onChange(value);
        },
        value: !isUndefined_default()(value) ? this.getSelectedOption(locale || intl.locale, value) : undefined,
        defaultValue: defaultValue ? this.getSelectedOption(locale || intl.locale, defaultValue) : undefined,
        placeholder: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "InputTypeCountry.placeholder",
          defaultMessage: [{
            "type": 0,
            "value": "Please select your country"
          }]
        }),
        "data-cy": "country-select"
      }, props));
    }
  }]);

  return InputTypeCountry;
}(react.Component);

defineProperty_default()(InputTypeCountry, "defaultProps", {
  name: 'country',
  customOptions: [],
  fontSize: '14px'
});

InputTypeCountry.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "generateCountryLabel",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "locale",
      "type": null
    }, {
      "name": "countryCode",
      "type": null
    }],
    "returns": null
  }, {
    "name": "filterOptions",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "candidate",
      "type": null
    }, {
      "name": "input",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "InputTypeCountry",
  "props": {
    "name": {
      "defaultValue": {
        "value": "'country'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "customOptions": {
      "defaultValue": {
        "value": "[]",
        "computed": false
      },
      "description": "Custom options *",
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
    "fontSize": {
      "defaultValue": {
        "value": "'14px'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
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
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "locale": {
      "description": "To force a specific locale",
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
    "value": {
      "description": "Use this to control the component state",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "mode": {
      "description": "Switch between display modes",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'select'",
          "computed": false
        }, {
          "value": "'underlined'",
          "computed": false
        }]
      },
      "required": false
    },
    "autoDetect": {
      "description": "If true, we'll try to autodetect country form the IP",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "intl": {
      "description": "From injectIntl",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "required": {
      "description": "Is this input required?",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_InputTypeCountry = ((0,injectIntl/* default */.ZP)(InputTypeCountry));

/***/ }),

/***/ 75667:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82580);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86896);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12136);
/* harmony import */ var _lib_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40986);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87262);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85893);


var _excluded = ["name", "children", "validate", "isFastField", "flex", "width", "display"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









/**
 * A special wrapper around `StyledInputField` + Formik's `Field` component.
 * Accept all props from `StyledInputField`.
 */




var StyledInputFormikField = function StyledInputFormikField(_ref) {
  var name = _ref.name,
      _children = _ref.children,
      _ref$validate = _ref.validate,
      validate = _ref$validate === void 0 ? undefined : _ref$validate,
      _ref$isFastField = _ref.isFastField,
      isFastField = _ref$isFastField === void 0 ? false : _ref$isFastField,
      _ref$flex = _ref.flex,
      flex = _ref$flex === void 0 ? undefined : _ref$flex,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? undefined : _ref$width,
      _ref$display = _ref.display,
      display = _ref$display === void 0 ? undefined : _ref$display,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
  var FieldComponent = isFastField ? formik__WEBPACK_IMPORTED_MODULE_3__/* .FastField */ .Rt : formik__WEBPACK_IMPORTED_MODULE_3__/* .Field */ .gN;
  var htmlFor = props.htmlFor || "input-".concat(name);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(FieldComponent, {
    name: name,
    validate: validate,
    children: function children(_ref2) {
      var field = _ref2.field,
          form = _ref2.form,
          meta = _ref2.meta;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        flex: flex,
        width: width,
        display: display,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_StyledInputField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, _objectSpread(_objectSpread({
          error: Boolean(meta.error)
        }, props), {}, {
          htmlFor: htmlFor,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: [_children({
              form: form,
              meta: meta,
              field: _objectSpread(_objectSpread({}, field), {}, {
                name: name || htmlFor,
                id: htmlFor,
                type: props.inputType,
                disabled: props.disabled,
                required: props.required,
                error: Boolean(meta.touched && meta.error)
              })
            }), meta.touched && meta.error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
              display: "block",
              color: "red.500",
              pt: 2,
              fontSize: "10px",
              children: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_4__/* .isOCError */ .Vv)(meta.error) ? (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_5__/* .formatFormErrorMessage */ .$m)(intl, meta.error) : meta.error
            })]
          })
        }))
      });
    }
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
/* harmony default export */ __webpack_exports__["Z"] = (StyledInputFormikField);

/***/ }),

/***/ 40986:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$m": function() { return /* binding */ formatFormErrorMessage; },
/* harmony export */   "Sn": function() { return /* binding */ verifyEmailPattern; },
/* harmony export */   "VA": function() { return /* binding */ verifyValueInRange; },
/* harmony export */   "Yy": function() { return /* binding */ verifyChecked; },
/* harmony export */   "ay": function() { return /* binding */ requireFields; },
/* harmony export */   "zO": function() { return /* binding */ verifyURLPattern; },
/* harmony export */   "zy": function() { return /* binding */ verifyFieldLength; }
/* harmony export */ });
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36968);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59448);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48966);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12136);



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.defineMessages)({
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

var isEmpty = function isEmpty(value) {
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


var requireFields = function requireFields(data, requiredFields) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$stopOnFirstError = _ref.stopOnFirstError,
      stopOnFirstError = _ref$stopOnFirstError === void 0 ? false : _ref$stopOnFirstError;

  var errors = {};

  var _iterator = _createForOfIteratorHelper(requiredFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var field = _step.value;

      var value = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(data, field);

      if (isEmpty(value)) {
        lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(errors, field, (0,_errors__WEBPACK_IMPORTED_MODULE_2__/* .createError */ .Tr)(_errors__WEBPACK_IMPORTED_MODULE_2__/* .ERROR.FORM_FIELD_REQUIRED */ .pn.FORM_FIELD_REQUIRED));

        if (stopOnFirstError) {
          return errors;
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return errors;
};
var verifyFieldLength = function verifyFieldLength(intl, errors, data, field, min, max) {
  // Ignore if there's already an error on the field
  if (!errors[field]) {
    var _get2;

    var length = ((_get2 = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(data, field)) === null || _get2 === void 0 ? void 0 : _get2.length) || 0;

    if (length < min) {
      var message = intl.formatMessage(messages.minLength, {
        count: min
      });

      lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(errors, field, (0,_errors__WEBPACK_IMPORTED_MODULE_2__/* .createError */ .Tr)(_errors__WEBPACK_IMPORTED_MODULE_2__/* .ERROR.FORM_FIELD_MIN_LENGTH */ .pn.FORM_FIELD_MIN_LENGTH, {
        message: message,
        hasI18nMessage: true
      }));
    } else if (length > max) {
      var _message = intl.formatMessage(messages.maxLength, {
        count: max
      });

      lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(errors, field, (0,_errors__WEBPACK_IMPORTED_MODULE_2__/* .createError */ .Tr)(_errors__WEBPACK_IMPORTED_MODULE_2__/* .ERROR.FORM_FIELD_MAX_LENGTH */ .pn.FORM_FIELD_MAX_LENGTH, {
        message: _message,
        hasI18nMessage: true
      }));
    }
  }

  return errors;
};
var verifyValueInRange = function verifyValueInRange(intl, errors, data, field, min, max) {
  var value = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(data, field); // Ignore if there's already an error on the field


  if (!errors[field] && (value < min || value > max)) {
    var message = intl.formatMessage(messages.notInRange, {
      min: min,
      max: max
    });

    lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(errors, field, (0,_errors__WEBPACK_IMPORTED_MODULE_2__/* .createError */ .Tr)(_errors__WEBPACK_IMPORTED_MODULE_2__/* .ERROR.FORM_FIELD_VALUE_NOT_IN_RANGE */ .pn.FORM_FIELD_VALUE_NOT_IN_RANGE, {
      message: message,
      hasI18nMessage: true
    }));
  }

  return errors;
};
var verifyChecked = function verifyChecked(errors, data, field) {
  // Ignore if there's already an error on the field
  if (!errors[field] && !data[field]) {
    lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(errors, field, (0,_errors__WEBPACK_IMPORTED_MODULE_2__/* .createError */ .Tr)(_errors__WEBPACK_IMPORTED_MODULE_2__/* .ERROR.FORM_FIELD_CHECK_REQUIRED */ .pn.FORM_FIELD_CHECK_REQUIRED));
  }

  return errors;
};
var verifyEmailPattern = function verifyEmailPattern(errors, data, field) {
  var value = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(data, field);

  if (!errors[field] && value && !(0,validator__WEBPACK_IMPORTED_MODULE_4__.isEmail)(value)) {
    lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(errors, field, (0,_errors__WEBPACK_IMPORTED_MODULE_2__/* .createError */ .Tr)(_errors__WEBPACK_IMPORTED_MODULE_2__/* .ERROR.FORM_FIELD_PATTERN */ .pn.FORM_FIELD_PATTERN));
  }

  return errors;
};
var verifyURLPattern = function verifyURLPattern(errors, data, field) {
  var value = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(data, field);

  if (!errors[field] && value && !(0,validator__WEBPACK_IMPORTED_MODULE_4__.isURL)(value)) {
    lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(errors, field, (0,_errors__WEBPACK_IMPORTED_MODULE_2__/* .createError */ .Tr)(_errors__WEBPACK_IMPORTED_MODULE_2__/* .ERROR.FORM_FIELD_PATTERN */ .pn.FORM_FIELD_PATTERN));
  }

  return errors;
};
/**
 * A superset of `formatErrorMessage` that fallsback on `FORM_FIELD_INVALID_VALUE` for unknown errors.
 */

var formatFormErrorMessage = function formatFormErrorMessage(intl, error) {
  return (0,_errors__WEBPACK_IMPORTED_MODULE_2__/* .formatErrorMessage */ .jN)(intl, error, _errors__WEBPACK_IMPORTED_MODULE_2__/* .ERROR.FORM_FIELD_INVALID_VALUE */ .pn.FORM_FIELD_INVALID_VALUE);
};

/***/ }),

/***/ 78080:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": function() { return /* binding */ getIntlDisplayNames; }
/* harmony export */ });
/**
 * A dummy polyfill for `Intl.DisplayNames`. If falling back to the default string is not an acceptable option
 * feel free to add a [real polyfill](https://formatjs.io/docs/polyfills/intl-displaynames/) and remove this helper.
 */
var getIntlDisplayNames = function getIntlDisplayNames(locale, type) {
  try {
    return new Intl.DisplayNames(locale, {
      type: type
    });
  } catch (_unused) {
    return {
      of: function of(str) {
        return str;
      }
    };
  }
};

/***/ }),

/***/ 75993:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": function() { return /* binding */ mergeRefs; }
/* harmony export */ });
/**
 * Merge react refs.
 * Adapted from https://github.com/smooth-code/react-merge-refs
 */
var mergeRefs = function mergeRefs(refs) {
  return function (value) {
    refs.forEach(function (ref) {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref !== null) {
        ref.current = value;
      }
    });
  };
};

/***/ })

}]);
//# sourceMappingURL=1861-5b7e81a014bcbd77.js.map