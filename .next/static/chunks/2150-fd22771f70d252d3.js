"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2150],{

/***/ 82150:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ contribute_cards_AdminContributeCardsContainer; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@dnd-kit/core/dist/core.esm.js + 1 modules
var core_esm = __webpack_require__(60887);
// EXTERNAL MODULE: ./node_modules/@dnd-kit/sortable/dist/sortable.esm.js
var sortable_esm = __webpack_require__(45587);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./lib/constants/collectives.js
var collectives = __webpack_require__(82525);
// EXTERNAL MODULE: ./components/collective-page/ContributeCardsContainer.js
var ContributeCardsContainer = __webpack_require__(38255);
// EXTERNAL MODULE: ./components/edit-collective/tiers/EditTierModal.js + 2 modules
var EditTierModal = __webpack_require__(66981);
// EXTERNAL MODULE: ./components/contribute-cards/ContributeCardContainer.js
var ContributeCardContainer = __webpack_require__(98796);
// EXTERNAL MODULE: ./components/contribute-cards/CreateNew.js
var CreateNew = __webpack_require__(48451);
// EXTERNAL MODULE: ./node_modules/@dnd-kit/utilities/dist/utilities.esm.js
var utilities_esm = __webpack_require__(24285);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Move/Move.esm.js
var Move_esm = __webpack_require__(52549);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./components/StyledRoundButton.js
var StyledRoundButton = __webpack_require__(90012);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/contribute-cards/DraggableContributeCardWrapper.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









var MainContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "DraggableContributeCardWrapper__MainContainer",
  componentId: "sc-hsmp1o-0"
})(["position:relative;display:flex;height:100%;", " ", ""], function (props) {
  return props.isDragging && (0,styled_components_browser_esm/* css */.iv)(["outline:1px solid #99c9ff;background:#f0f8ff;border-radius:16px;& > *{opacity:0;}"]);
}, function (props) {
  return props.isDragOverlay && (0,styled_components_browser_esm/* css */.iv)(["box-shadow:0px 4px 6px rgba(26,27,31,0.16);border-radius:16px;"]);
});
var DragHandle = /*#__PURE__*/react.forwardRef(function (props, ref) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledRoundButton/* default */.Z, _objectSpread(_objectSpread({
    size: 32
  }, props), {}, {
    ref: ref,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Move_esm/* Move */.A, {
      size: 10
    })
  }));
});
DragHandle.displayName = 'DragHandle';
var StyledDragHandle = (0,styled_components_browser_esm/* default */.ZP)(DragHandle).withConfig({
  displayName: "DraggableContributeCardWrapper__StyledDragHandle",
  componentId: "sc-hsmp1o-1"
})(["position:absolute;cursor:move;top:17px;margin-left:270px;box-shadow:0px 4px 6px rgba(26,27,31,0.16);&:hover{color:", ";}@media (hover:none){display:none;}"], function (props) {
  return props.theme.colors.primary[700];
});
var ContributeCardWithDragHandle = function ContributeCardWithDragHandle(_ref) {
  var Component = _ref.Component,
      componentProps = _ref.componentProps,
      dragHandleProps = _ref.dragHandleProps,
      isDragOverlay = _ref.isDragOverlay;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(MainContainer, {
    isDragOverlay: isDragOverlay,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Component, _objectSpread({}, componentProps)), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledDragHandle, _objectSpread({}, dragHandleProps))]
  });
};
// Memoized for improved performance when dragging
var MemoizedContributeCardWithDragHandle = /*#__PURE__*/(0,react.memo)(ContributeCardWithDragHandle);
/**
 * A wrapper arround contribute cards that makes them draggable
 */

function DraggableContributeCardWrapper(props) {
  var _useSortable = (0,sortable_esm/* useSortable */.nB)({
    id: props.id
  }),
      attributes = _useSortable.attributes,
      listeners = _useSortable.listeners,
      isDragging = _useSortable.isDragging,
      setNodeRef = _useSortable.setNodeRef,
      transform = _useSortable.transform,
      transition = _useSortable.transition;

  var style = {
    transform: utilities_esm/* CSS.Transform.toString */.ux.Transform.toString(transform),
    transition: transition
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(MainContainer, {
    ref: setNodeRef,
    style: style,
    isDragging: isDragging,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(MemoizedContributeCardWithDragHandle, _objectSpread({
      dragHandleProps: _objectSpread(_objectSpread({}, attributes), listeners)
    }, props))
  });
}
ContributeCardWithDragHandle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ContributeCardWithDragHandle",
  "props": {
    "Component": {
      "description": "",
      "type": {
        "name": "any"
      },
      "required": true
    },
    "componentProps": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "dragHandleProps": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "isDragOverlay": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
DraggableContributeCardWrapper.__docgenInfo = {
  "description": "A wrapper arround contribute cards that makes them draggable",
  "methods": [],
  "displayName": "DraggableContributeCardWrapper",
  "props": {
    "id": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "required": true
    },
    "Component": {
      "description": "",
      "type": {
        "name": "any"
      },
      "required": true
    },
    "componentProps": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
;// CONCATENATED MODULE: ./components/contribute-cards/AdminContributeCardsContainer.js




function AdminContributeCardsContainer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function AdminContributeCardsContainer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? AdminContributeCardsContainer_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : AdminContributeCardsContainer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }











/**
 * Display a list of contribution cards wrapped in a DragAndDrop provider
 */




var AdminContributeCardsContainer = function AdminContributeCardsContainer(_ref) {
  var _collective$parentCol;

  var collective = _ref.collective,
      cards = _ref.cards,
      onReorder = _ref.onReorder,
      draggingId = _ref.draggingId,
      setDraggingId = _ref.setDraggingId,
      onMount = _ref.onMount,
      CardsContainer = _ref.CardsContainer,
      useTierModals = _ref.useTierModals,
      enableReordering = _ref.enableReordering,
      createNewType = _ref.createNewType,
      onTierUpdate = _ref.onTierUpdate;

  var _React$useState = react.useState(cards || []),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      items = _React$useState2[0],
      setItems = _React$useState2[1]; // Reset items if the cards order have changed


  react.useEffect(function () {
    if (!isEqual_default()(cards, items)) {
      setItems(cards);
    }
  }, [JSON.stringify(cards)]); // Save reorder to the backend if internal order has changed

  react.useEffect(function () {
    if (!isEqual_default()(cards, items)) {
      onReorder === null || onReorder === void 0 ? void 0 : onReorder(items);
    }
  }, [items]);

  function handleDragStart(event) {
    setDraggingId(event.active.id);
  }

  function handleDragEnd(event) {
    var active = event.active,
        over = event.over;

    if (active.id !== over.id) {
      setItems(function (items) {
        var oldIndex = items.findIndex(function (item) {
          return item.key === active.id;
        });
        var newIndex = items.findIndex(function (item) {
          return item.key === over.id;
        });
        return (0,sortable_esm/* arrayMove */.Rp)(items, oldIndex, newIndex);
      });
    }

    setDraggingId(null);
  }

  var _React$useState3 = react.useState(false),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      showTierModal = _React$useState4[0],
      setShowTierModal = _React$useState4[1];

  var isEvent = collective.type === collectives/* CollectiveType.EVENT */.eV.EVENT;
  var createContributionTierRoute = isEvent ? "/".concat(((_collective$parentCol = collective.parentCollective) === null || _collective$parentCol === void 0 ? void 0 : _collective$parentCol.slug) || 'collective', "/events/").concat(collective.slug, "/admin/tiers") : "/".concat(collective.slug, "/admin/tiers");
  var addNewMessage = createNewType === 'TICKET' ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
    id: "SectionTickets.CreateTicket",
    defaultMessage: [{
      "type": 0,
      "value": "Create Ticket"
    }]
  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
    id: "Contribute.CreateTier",
    defaultMessage: [{
      "type": 0,
      "value": "Create Contribution Tier"
    }]
  });
  react.useEffect(function () {
    if (onMount) {
      onMount();
    }
  }, [onMount]);
  var draggingItem = items.find(function (i) {
    return i.key === draggingId;
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(core_esm/* DndContext */.LB, {
    collisionDetection: core_esm/* closestCenter */.pE,
    onDragEnd: handleDragEnd,
    onDragStart: handleDragStart,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(sortable_esm/* SortableContext */.Fo, {
      items: items.map(function (c) {
        return c.key;
      }),
      strategy: sortable_esm/* horizontalListSortingStrategy */.PG,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(CardsContainer, {
        children: [items.map(function (_ref2) {
          var key = _ref2.key,
              Component = _ref2.Component,
              componentProps = _ref2.componentProps;
          // Add onClickEdit to the component props if we're using tier modals
          componentProps = useTierModals && componentProps.tier ? AdminContributeCardsContainer_objectSpread(AdminContributeCardsContainer_objectSpread({}, componentProps), {}, {
            onClickEdit: function onClickEdit() {
              return setShowTierModal(componentProps.tier);
            }
          }) : componentProps;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(ContributeCardContainer/* default */.Z, {
            children: cards.length === 1 || !enableReordering ? /*#__PURE__*/(0,jsx_runtime.jsx)(Component, AdminContributeCardsContainer_objectSpread({}, componentProps)) : /*#__PURE__*/(0,jsx_runtime.jsx)(DraggableContributeCardWrapper, {
              Component: Component,
              componentProps: componentProps,
              id: key
            })
          }, key);
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(ContributeCardContainer/* default */.Z, {
          children: useTierModals ? /*#__PURE__*/(0,jsx_runtime.jsx)(CreateNew/* default */.Z, {
            as: "div",
            "data-cy": "create-contribute-tier",
            onClick: function onClick() {
              return setShowTierModal('new');
            },
            children: addNewMessage
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(CreateNew/* default */.Z, {
            "data-cy": "create-contribute-tier",
            route: createContributionTierRoute,
            children: addNewMessage
          })
        }), showTierModal && /*#__PURE__*/(0,jsx_runtime.jsx)(EditTierModal/* default */.ZP, {
          tier: showTierModal === 'new' ? null : showTierModal,
          collective: collective,
          onClose: function onClose() {
            return setShowTierModal(false);
          },
          forcedType: createNewType,
          onUpdate: onTierUpdate
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(core_esm/* DragOverlay */.y9, {
        children: draggingItem ? /*#__PURE__*/(0,jsx_runtime.jsx)(ContributeCardWithDragHandle, {
          Component: draggingItem.Component,
          componentProps: draggingItem.componentProps,
          isDragOverlay: true
        }) : null
      })]
    })
  });
};

AdminContributeCardsContainer.defaultProps = {
  CardsContainer: ContributeCardsContainer/* default */.Z,
  enableReordering: true
};
AdminContributeCardsContainer.__docgenInfo = {
  "description": "Display a list of contribution cards wrapped in a DragAndDrop provider",
  "methods": [],
  "displayName": "AdminContributeCardsContainer",
  "props": {
    "CardsContainer": {
      "defaultValue": {
        "value": "ContributeCardsContainer",
        "computed": true
      },
      "description": "",
      "type": {
        "name": "elementType"
      },
      "required": false
    },
    "enableReordering": {
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
    "cards": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "key": {
              "name": "union",
              "value": [{
                "name": "string"
              }, {
                "name": "number"
              }],
              "required": false
            }
          }
        }
      },
      "required": true
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": false
          },
          "type": {
            "name": "string",
            "required": false
          },
          "parentCollective": {
            "name": "shape",
            "value": {
              "slug": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          }
        }
      },
      "required": true
    },
    "useTierModals": {
      "description": "Whether to use the new modals to edit/create tiers",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onReorder": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "setDraggingId": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "draggingId": {
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
    "onMount": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "createNewType": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "onTierUpdate": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ var contribute_cards_AdminContributeCardsContainer = (AdminContributeCardsContainer);

/***/ }),

/***/ 66981:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": function() { return /* binding */ EditTierModal; },
  "L5": function() { return /* binding */ listTierQuery; }
});

// UNUSED EXPORTS: ContributeCardPreview, EditTierForm, editTiersFieldsFragment

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(57557);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./node_modules/lodash/isNil.js
var isNil = __webpack_require__(14293);
var isNil_default = /*#__PURE__*/__webpack_require__.n(isNil);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__(46829);
// EXTERNAL MODULE: ./node_modules/@opencollective/taxes/dist/index.js
var dist = __webpack_require__(41429);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(82580);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./lib/collective.lib.js
var collective_lib = __webpack_require__(5700);
// EXTERNAL MODULE: ./lib/constants/collectives.js
var collectives = __webpack_require__(82525);
// EXTERNAL MODULE: ./lib/constants/intervals.js
var intervals = __webpack_require__(80642);
// EXTERNAL MODULE: ./lib/constants/tiers-types.js
var tiers_types = __webpack_require__(12568);
// EXTERNAL MODULE: ./lib/date-utils.js
var date_utils = __webpack_require__(15078);
// EXTERNAL MODULE: ./lib/errors/index.js + 1 modules
var errors = __webpack_require__(12136);
// EXTERNAL MODULE: ./lib/form-utils.js
var form_utils = __webpack_require__(40986);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./lib/i18n/taxes.js
var i18n_taxes = __webpack_require__(22642);
// EXTERNAL MODULE: ./lib/url-helpers.js
var url_helpers = __webpack_require__(25896);
// EXTERNAL MODULE: ./components/contribute-cards/ContributeTier.js + 1 modules
var ContributeTier = __webpack_require__(62686);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
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
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/InputField.js + 1 modules
var InputField = __webpack_require__(97038);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/InputFieldPresets.js








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var InputFieldPresetsContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "InputFieldPresets__InputFieldPresetsContainer",
  componentId: "sc-1u8titd-0"
})([".inputField{max-width:14rem;margin:0;}.form-group{margin-bottom:0;margin-left:0;margin-right:1rem;}"]);

var InputFieldPresets = /*#__PURE__*/function (_React$Component) {
  inherits_default()(InputFieldPresets, _React$Component);

  var _super = _createSuper(InputFieldPresets);

  function InputFieldPresets(props) {
    var _this;

    classCallCheck_default()(this, InputFieldPresets);

    _this = _super.call(this, props);
    _this.maxLength = 5;
    var values = props.defaultValue ? toConsumableArray_default()(props.defaultValue) : [1000];
    _this.state = {
      values: values
    };
    _this.onChange = _this.onChange.bind(assertThisInitialized_default()(_this));
    _this.handleChange = _this.handleChange.bind(assertThisInitialized_default()(_this));
    _this.renderSingleInput = _this.renderSingleInput.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(InputFieldPresets, [{
    key: "handleChange",
    value: function handleChange(index, val) {
      var _this2 = this;

      var values = this.state.values;
      values[index] = val;
      values = values.filter(function (v) {
        return v !== null;
      });
      this.setState({
        values: values
      }, function () {
        return _this2.onChange();
      });
    }
  }, {
    key: "onChange",
    value: function onChange() {
      this.props.onChange(this.state.values);
    }
  }, {
    key: "renderSingleInput",
    value: function renderSingleInput(defaultValue, index) {
      var _this3 = this;

      return /*#__PURE__*/(0,jsx_runtime.jsx)(InputField/* default */.Z, {
        name: "currency".concat(index),
        type: "currency",
        defaultValue: defaultValue,
        value: this.state.values[index],
        options: this.props.options,
        pre: this.props.pre,
        onChange: function onChange(val) {
          return _this3.handleChange(index, val);
        }
      }, "currency".concat(index));
    }
  }, {
    key: "render",
    value: function render() {
      var values = toConsumableArray_default()(this.state.values);

      if (values.length < this.maxLength) {
        values.push(null);
      }

      return /*#__PURE__*/(0,jsx_runtime.jsx)(InputFieldPresetsContainer, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          flexWrap: "wrap",
          display: "flex",
          children: values.map(this.renderSingleInput)
        })
      });
    }
  }]);

  return InputFieldPresets;
}(react.Component);

InputFieldPresets.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "handleChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "index",
      "type": null
    }, {
      "name": "val",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onChange",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderSingleInput",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "defaultValue",
      "type": null
    }, {
      "name": "index",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "InputFieldPresets",
  "props": {
    "defaultValue": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "number"
        }
      },
      "required": false
    },
    "pre": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "options": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_InputFieldPresets = (InputFieldPresets);
// EXTERNAL MODULE: ./components/InputSwitch.js
var InputSwitch = __webpack_require__(96124);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/MessageBox.tsx + 2 modules
var MessageBox = __webpack_require__(86702);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledInput.tsx
var StyledInput = __webpack_require__(97274);
// EXTERNAL MODULE: ./components/StyledInputAmount.js
var StyledInputAmount = __webpack_require__(54029);
// EXTERNAL MODULE: ./components/StyledInputFormikField.js
var StyledInputFormikField = __webpack_require__(75667);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./components/StyledModal.tsx
var StyledModal = __webpack_require__(71792);
// EXTERNAL MODULE: ./components/StyledSelect.tsx
var StyledSelect = __webpack_require__(66943);
// EXTERNAL MODULE: ./components/StyledTextarea.js
var StyledTextarea = __webpack_require__(93150);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/ToastProvider.tsx
var ToastProvider = __webpack_require__(31330);
// EXTERNAL MODULE: ./node_modules/@styled-icons/boxicons-regular/Trash/Trash.esm.js
var Trash_esm = __webpack_require__(24834);
// EXTERNAL MODULE: ./components/StyledHr.tsx
var StyledHr = __webpack_require__(173);
;// CONCATENATED MODULE: ./components/edit-collective/tiers/ConfirmTierDeleteModal.js













var CancelDeleteModalButton = (0,styled_components_browser_esm/* default */.ZP)(StyledButton/* default */.Z).withConfig({
  displayName: "ConfirmTierDeleteModal__CancelDeleteModalButton",
  componentId: "sc-1vnje3h-0"
})(["@media (max-width:700px){order:1;}"]);
var ConfirmDeleteModalButton = (0,styled_components_browser_esm/* default */.ZP)(StyledButton/* default */.Z).withConfig({
  displayName: "ConfirmTierDeleteModal__ConfirmDeleteModalButton",
  componentId: "sc-1vnje3h-1"
})(["@media (max-width:700px){order:0;}"]);
var DeleteModalActionsContainer = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Flex */.kC).withConfig({
  displayName: "ConfirmTierDeleteModal__DeleteModalActionsContainer",
  componentId: "sc-1vnje3h-2"
})(["justify-content:space-between;flex-wrap:wrap;@media (max-width:700px){gap:1em;}"]);
function ConfirmTierDeleteModal(_ref) {
  var isDeleting = _ref.isDeleting,
      onClose = _ref.onClose,
      onConfirmDelete = _ref.onConfirmDelete,
      tier = _ref.tier;

  var _React$useState = react.useState(true),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      keepRecurringContributions = _React$useState2[0],
      setKeepRecurringContributions = _React$useState2[1];

  var action = /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
    id: "FZQER9",
    defaultMessage: [{
      "type": 0,
      "value": "Delete "
    }, {
      "type": 5,
      "value": "type",
      "options": {
        "TICKET": {
          "value": [{
            "type": 0,
            "value": "Ticket"
          }]
        },
        "other": {
          "value": [{
            "type": 0,
            "value": "Tier"
          }]
        }
      }
    }],
    values: {
      type: tier.type
    }
  });

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledModal/* default */.ZP, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalHeader */.xB, {
      hideCloseIcon: true,
      children: action
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      mt: "1.2em",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "xxi1Y+",
        defaultMessage: [{
          "type": 0,
          "value": "The tier will be deleted forever and can't be retrieved."
        }]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
      my: "1.2em"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      gap: "2em",
      mb: "1.2em",
      alignItems: "center",
      justifyContent: "space-between",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        flexDirection: "column",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontWeight: "bold",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "iG8QUh",
            defaultMessage: [{
              "type": 0,
              "value": "Do you want to continue recurring contributions?"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          mt: 1,
          color: "black.500",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "FR8IoI",
            defaultMessage: [{
              "type": 0,
              "value": "If yes, you will still receive existing recurring contributions for this deleted tier."
            }]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(InputSwitch/* default */.Z, {
        checked: keepRecurringContributions,
        onChange: function onChange(event) {
          return setKeepRecurringContributions(event.target.checked);
        }
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalFooter */.mz, {
      isFullWidth: true,
      dividerMargin: "1.2em 0",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(DeleteModalActionsContainer, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CancelDeleteModalButton, {
          flexGrow: 1,
          type: "button",
          "data-cy": "cancel-delete-btn",
          disabled: isDeleting,
          buttonStyle: "secondary",
          mx: 2,
          minWidth: 100,
          onClick: onClose,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "yHvRF3",
            defaultMessage: [{
              "type": 0,
              "value": "Don't Delete"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(ConfirmDeleteModalButton, {
          flexGrow: 1,
          type: "button",
          "data-cy": "confirm-delete-btn",
          disabled: isDeleting,
          mx: 2,
          buttonStyle: "danger",
          minWidth: 100,
          onClick: function onClick() {
            return onConfirmDelete(keepRecurringContributions);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            alignItems: "center",
            justifyContent: "center",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
              alignItems: "center",
              mr: 1,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trash_esm/* Trash */.r, {
                size: "1em"
              })
            }), action]
          })
        })]
      })
    })]
  });
}
ConfirmTierDeleteModal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ConfirmTierDeleteModal",
  "props": {
    "isDeleting": {
      "description": "",
      "type": {
        "name": "bool"
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
    "onConfirmDelete": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "tier": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "type": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
;// CONCATENATED MODULE: ./components/edit-collective/tiers/EditTierModal.js








var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




































var FUND = collectives/* CollectiveType.FUND */.eV.FUND,
    PROJECT = collectives/* CollectiveType.PROJECT */.eV.PROJECT;
var TIER = tiers_types/* TierTypes.TIER */.x$.TIER,
    TICKET = tiers_types/* TierTypes.TICKET */.x$.TICKET,
    MEMBERSHIP = tiers_types/* TierTypes.MEMBERSHIP */.x$.MEMBERSHIP,
    SERVICE = tiers_types/* TierTypes.SERVICE */.x$.SERVICE,
    PRODUCT = tiers_types/* TierTypes.PRODUCT */.x$.PRODUCT,
    DONATION = tiers_types/* TierTypes.DONATION */.x$.DONATION;
var FIXED = tiers_types/* AmountTypes.FIXED */.lX.FIXED,
    FLEXIBLE = tiers_types/* AmountTypes.FLEXIBLE */.lX.FLEXIBLE;

function getTierTypeOptions(intl, collectiveType) {
  var simplifiedTierTypes = [{
    value: TIER,
    label: intl.formatMessage({
      id: "tier.type.tier",
      defaultMessage: [{
        "type": 0,
        "value": "generic tier"
      }]
    })
  }, {
    value: SERVICE,
    label: intl.formatMessage({
      id: "tier.type.service",
      defaultMessage: [{
        "type": 0,
        "value": "service (e.g., support)"
      }]
    })
  }, {
    value: PRODUCT,
    label: intl.formatMessage({
      id: "tier.type.product",
      defaultMessage: [{
        "type": 0,
        "value": "product (e.g., t-shirt)"
      }]
    })
  }, {
    value: DONATION,
    label: intl.formatMessage({
      id: "tier.type.donation",
      defaultMessage: [{
        "type": 0,
        "value": "donation (gift)"
      }]
    })
  }];
  var membershipTierType = {
    value: MEMBERSHIP,
    label: intl.formatMessage({
      id: "tier.type.membership",
      defaultMessage: [{
        "type": 0,
        "value": "membership (recurring)"
      }]
    })
  };

  if (collectiveType === PROJECT) {
    return simplifiedTierTypes;
  }

  return [].concat(simplifiedTierTypes, [membershipTierType]);
}

function getReceiptTemplates(host) {
  var _host$settings, _host$settings$invoic;

  var receiptTemplates = host === null || host === void 0 ? void 0 : (_host$settings = host.settings) === null || _host$settings === void 0 ? void 0 : (_host$settings$invoic = _host$settings.invoice) === null || _host$settings$invoic === void 0 ? void 0 : _host$settings$invoic.templates;
  var receiptTemplateTitles = [];

  if (receiptTemplates !== null && receiptTemplates !== void 0 && receiptTemplates["default"]) {
    receiptTemplateTitles.push({
      value: 'default',
      label: receiptTemplates["default"].title
    });
  }

  if (receiptTemplates !== null && receiptTemplates !== void 0 && receiptTemplates.alternative) {
    receiptTemplateTitles.push({
      value: 'alternative',
      label: receiptTemplates.alternative.title
    });
  }

  return receiptTemplateTitles;
}

function FormFields(_ref) {
  var collective = _ref.collective,
      values = _ref.values,
      hideTypeSelect = _ref.hideTypeSelect;
  var intl = (0,useIntl/* default */.Z)();
  var tierTypeOptions = getTierTypeOptions(intl, collective.type);
  var intervalOptions = [{
    value: 'flexible',
    label: intl.formatMessage({
      id: "tier.interval.flexible",
      defaultMessage: [{
        "type": 0,
        "value": "Flexible"
      }]
    })
  }, {
    value: null,
    label: intl.formatMessage({
      id: "Frequency.OneTime",
      defaultMessage: [{
        "type": 0,
        "value": "One time"
      }]
    })
  }, {
    value: 'month',
    label: intl.formatMessage({
      id: "Frequency.Monthly",
      defaultMessage: [{
        "type": 0,
        "value": "Monthly"
      }]
    })
  }, {
    value: 'year',
    label: intl.formatMessage({
      id: "Frequency.Yearly",
      defaultMessage: [{
        "type": 0,
        "value": "Yearly"
      }]
    })
  }];
  var amountTypeOptions = [{
    value: FIXED,
    label: intl.formatMessage({
      id: "tier.amountType.fixed",
      defaultMessage: [{
        "type": 0,
        "value": "Fixed amount"
      }]
    })
  }, {
    value: FLEXIBLE,
    label: intl.formatMessage({
      id: "tier.amountType.flexible",
      defaultMessage: [{
        "type": 0,
        "value": "Flexible amount"
      }]
    })
  }];
  var receiptTemplateOptions = getReceiptTemplates(collective.host);
  var taxes = (0,dist.getApplicableTaxes)(collective, collective.host, values.type);
  var formik = (0,formik_esm/* useFormikContext */.u6)(); // Enforce certain rules when updating

  react.useEffect(function () {
    // Flexible amount implies flexible interval, and vice versa
    if (values.interval === 'flexible' && values.amountType !== FLEXIBLE) {
      formik.setFieldValue('amountType', FLEXIBLE);
    } else if (values.amountType === FIXED && values.interval === 'flexible') {
      formik.setFieldValue('interval', 'onetime');
    } // No interval for products and tickets


    if ([PRODUCT, TICKET].includes(values.type)) {
      formik.setFieldValue('interval', null);
    }
  }, [values.interval, values.type]);
  react.useEffect(function () {}, [values.type]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [collective.type !== FUND && !hideTypeSelect && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
        name: "type",
        label: intl.formatMessage({
          id: "tier.type.label",
          defaultMessage: [{
            "type": 0,
            "value": "Type"
          }]
        }),
        labelFontWeight: "bold",
        mt: "3",
        children: function children(_ref2) {
          var field = _ref2.field,
              form = _ref2.form,
              loading = _ref2.loading;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledSelect/* default */.ZP, {
            inputId: field.name,
            "data-cy": "select-".concat(field.name),
            error: field.error,
            onBlur: function onBlur() {
              return form.setFieldTouched(field.name, true);
            },
            onChange: function onChange(_ref3) {
              var value = _ref3.value;
              return form.setFieldValue(field.name, value);
            },
            isLoading: loading,
            options: tierTypeOptions,
            value: tierTypeOptions.find(function (option) {
              return option.value === field.value;
            })
          });
        }
      }), taxes.map(function (_ref4) {
        var type = _ref4.type,
            percentage = _ref4.percentage;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
          mt: 3,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(_StyledMessageBox, {
            type: "info",
            withIcon: true,
            fontSize: "12px",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Text/* Span */.Dr, {
              fontWeight: "bold",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "withColon",
                defaultMessage: [{
                  "type": 1,
                  "value": "item"
                }, {
                  "type": 0,
                  "value": ":"
                }],
                values: {
                  item: (0,i18n_taxes/* i18nTaxType */.m)(intl, type)
                }
              }), ' ', percentage, "%"]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              mt: 2,
              children: (0,i18n_taxes/* i18nTaxDescription */.H)(intl, type)
            })]
          })
        }, "".concat(type, "-").concat(percentage));
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
      name: "name",
      label: intl.formatMessage({
        id: "Fields.name",
        defaultMessage: [{
          "type": 0,
          "value": "Name"
        }]
      }),
      labelFontWeight: "bold",
      mt: "3",
      required: true,
      children: function children(_ref5) {
        var field = _ref5.field;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, _objectSpread({
          "data-cy": field.name,
          placeholder: "E.g. Donation"
        }, field));
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
      name: "description",
      label: intl.formatMessage({
        id: "Fields.description",
        defaultMessage: [{
          "type": 0,
          "value": "Description"
        }]
      }),
      labelFontWeight: "bold",
      mt: "3",
      required: false,
      children: function children(_ref6) {
        var field = _ref6.field;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTextarea/* default */.Z, _objectSpread({
          "data-cy": field.name,
          maxLength: 510,
          width: "100%",
          showCount: true
        }, field));
      }
    }), [DONATION, MEMBERSHIP, TIER, SERVICE].includes(values.type) && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
      name: "interval",
      label: intl.formatMessage({
        id: "tier.interval.label",
        defaultMessage: [{
          "type": 0,
          "value": "Interval"
        }]
      }),
      labelFontWeight: "bold",
      mt: "3",
      required: true,
      children: function children(_ref7) {
        var field = _ref7.field,
            form = _ref7.form,
            loading = _ref7.loading;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledSelect/* default */.ZP, {
          inputId: field.name,
          "data-cy": "select-".concat(field.name),
          error: field.error,
          onBlur: function onBlur() {
            return form.setFieldTouched(field.name, true);
          },
          onChange: function onChange(_ref8) {
            var value = _ref8.value;
            return form.setFieldValue(field.name, value);
          },
          isLoading: loading,
          options: intervalOptions,
          value: intervalOptions.find(function (option) {
            return option.value === field.value;
          })
        });
      }
    }), values.interval !== 'flexible' && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
      name: "amountType",
      label: intl.formatMessage({
        id: "tier.amountType.label",
        defaultMessage: [{
          "type": 0,
          "value": "Amount type"
        }]
      }),
      labelFontWeight: "bold",
      mt: "3",
      children: function children(_ref9) {
        var field = _ref9.field,
            form = _ref9.form,
            loading = _ref9.loading;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledSelect/* default */.ZP, {
          inputId: field.name,
          "data-cy": field.name,
          error: field.error,
          onBlur: function onBlur() {
            return form.setFieldTouched(field.name, true);
          },
          onChange: function onChange(_ref10) {
            var value = _ref10.value;
            return form.setFieldValue(field.name, value);
          },
          isLoading: loading,
          options: amountTypeOptions,
          value: amountTypeOptions.find(function (option) {
            return option.value === field.value;
          })
        });
      }
    }), values.amountType === FIXED && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
      name: "amount",
      label: intl.formatMessage({
        id: "Fields.amount",
        defaultMessage: [{
          "type": 0,
          "value": "Amount"
        }]
      }),
      labelFontWeight: "bold",
      mt: "3",
      children: function children(_ref11) {
        var _field$value$currency, _field$value, _field$value2;

        var field = _ref11.field,
            form = _ref11.form;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputAmount/* default */.Z, {
          id: field.id,
          "data-cy": field.name,
          currency: (_field$value$currency = (_field$value = field.value) === null || _field$value === void 0 ? void 0 : _field$value.currency) !== null && _field$value$currency !== void 0 ? _field$value$currency : collective.currency,
          currencyDisplay: "CODE",
          placeholder: "0.00",
          error: field.error,
          value: (_field$value2 = field.value) === null || _field$value2 === void 0 ? void 0 : _field$value2.valueInCents,
          maxWidth: "100%",
          onChange: function onChange(value) {
            var _field$value$currency2, _field$value3;

            return form.setFieldValue(field.name, !isNil_default()(value) && !isNaN(value) ? {
              currency: (_field$value$currency2 = (_field$value3 = field.value) === null || _field$value3 === void 0 ? void 0 : _field$value3.currency) !== null && _field$value$currency2 !== void 0 ? _field$value$currency2 : collective.currency,
              valueInCents: value
            } : null);
          },
          onBlur: function onBlur() {
            return form.setFieldTouched(field.name, true);
          }
        });
      }
    }), values.amountType === FLEXIBLE && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
      name: "presets",
      label: intl.formatMessage({
        id: "tier.presets.label",
        defaultMessage: [{
          "type": 0,
          "value": "Suggested amounts"
        }]
      }),
      labelFontWeight: "bold",
      mt: "3",
      children: function children(_ref12) {
        var field = _ref12.field,
            form = _ref12.form;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(components_InputFieldPresets, _objectSpread(_objectSpread({}, field), {}, {
          defaultValue: field.value,
          onChange: function onChange(value) {
            return form.setFieldValue(field.name, value);
          }
        }));
      }
    }), values.amountType === FLEXIBLE && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
      name: "amount",
      label: intl.formatMessage({
        id: "tier.defaultAmount.label",
        defaultMessage: [{
          "type": 0,
          "value": "Default amount"
        }]
      }),
      labelFontWeight: "bold",
      mt: "3",
      children: function children(_ref13) {
        var _field$value$currency3, _field$value4, _field$value5;

        var field = _ref13.field,
            form = _ref13.form;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputAmount/* default */.Z, {
          id: field.id,
          "data-cy": field.name,
          currency: (_field$value$currency3 = (_field$value4 = field.value) === null || _field$value4 === void 0 ? void 0 : _field$value4.currency) !== null && _field$value$currency3 !== void 0 ? _field$value$currency3 : collective.currency,
          currencyDisplay: "CODE",
          placeholder: "0.00",
          error: field.error,
          value: (_field$value5 = field.value) === null || _field$value5 === void 0 ? void 0 : _field$value5.valueInCents,
          maxWidth: "100%",
          onChange: function onChange(value) {
            var _field$value$currency4, _field$value6;

            return form.setFieldValue(field.name, !isNil_default()(value) && !isNaN(value) ? {
              currency: (_field$value$currency4 = (_field$value6 = field.value) === null || _field$value6 === void 0 ? void 0 : _field$value6.currency) !== null && _field$value$currency4 !== void 0 ? _field$value$currency4 : collective.currency,
              valueInCents: value
            } : null);
          },
          onBlur: function onBlur() {
            return form.setFieldTouched(field.name, true);
          }
        });
      }
    }), values.amountType === FLEXIBLE && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
      name: "minimumAmount",
      label: intl.formatMessage({
        id: "tier.minimumAmount.label",
        defaultMessage: [{
          "type": 0,
          "value": "Minimum amount"
        }]
      }),
      labelFontWeight: "bold",
      mt: "3",
      required: true,
      children: function children(_ref14) {
        var _field$value$currency5, _field$value7, _field$value8;

        var field = _ref14.field,
            form = _ref14.form;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputAmount/* default */.Z, {
          id: field.id,
          "data-cy": field.name,
          currency: (_field$value$currency5 = (_field$value7 = field.value) === null || _field$value7 === void 0 ? void 0 : _field$value7.currency) !== null && _field$value$currency5 !== void 0 ? _field$value$currency5 : collective.currency,
          currencyDisplay: "CODE",
          placeholder: "0.00",
          error: field.error,
          value: (_field$value8 = field.value) === null || _field$value8 === void 0 ? void 0 : _field$value8.valueInCents,
          maxWidth: "100%",
          onChange: function onChange(value) {
            var _field$value$currency6, _field$value9;

            return form.setFieldValue(field.name, !isNil_default()(value) && !isNaN(value) ? {
              currency: (_field$value$currency6 = (_field$value9 = field.value) === null || _field$value9 === void 0 ? void 0 : _field$value9.currency) !== null && _field$value$currency6 !== void 0 ? _field$value$currency6 : collective.currency,
              valueInCents: value
            } : null);
          },
          onBlur: function onBlur() {
            return form.setFieldTouched(field.name, true);
          }
        });
      }
    }), ([TICKET, PRODUCT, MEMBERSHIP].includes(values.type) || values.type === TIER && ![FUND, PROJECT].includes(collective.type)) && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
        name: "maxQuantity",
        label: intl.formatMessage({
          id: "tier.maxQuantity.label",
          defaultMessage: [{
            "type": 0,
            "value": "Available quantity"
          }]
        }),
        labelFontWeight: "bold",
        mt: "3",
        required: false,
        children: function children(_ref15) {
          var field = _ref15.field;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, _objectSpread({
            "data-cy": field.name
          }, field));
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FieldDescription, {
        children: intl.formatMessage({
          id: "tier.maxQuantity.description",
          defaultMessage: [{
            "type": 0,
            "value": "Leave empty for unlimited"
          }]
        })
      })]
    }), ![FUND].includes(collective.type) && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
      name: "button",
      label: intl.formatMessage({
        id: "tier.button.label",
        defaultMessage: [{
          "type": 0,
          "value": "Button text"
        }]
      }),
      labelFontWeight: "bold",
      mt: "3",
      required: false,
      children: function children(_ref16) {
        var field = _ref16.field;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, _objectSpread({
          "data-cy": field.name
        }, field));
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
      name: "goal",
      label: intl.formatMessage({
        id: "ContributionType.Goal",
        defaultMessage: [{
          "type": 0,
          "value": "Goal"
        }]
      }),
      labelFontWeight: "bold",
      mt: "3",
      required: false,
      children: function children(_ref17) {
        var _field$value$currency7, _field$value10, _field$value11;

        var field = _ref17.field,
            form = _ref17.form;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputAmount/* default */.Z, {
          id: field.id,
          "data-cy": field.name,
          currency: (_field$value$currency7 = (_field$value10 = field.value) === null || _field$value10 === void 0 ? void 0 : _field$value10.currency) !== null && _field$value$currency7 !== void 0 ? _field$value$currency7 : collective.currency,
          currencyDisplay: "CODE",
          placeholder: "0.00",
          error: field.error,
          value: (_field$value11 = field.value) === null || _field$value11 === void 0 ? void 0 : _field$value11.valueInCents,
          maxWidth: "100%",
          onChange: function onChange(value) {
            var _field$value$currency8, _field$value12;

            return form.setFieldValue(field.name, !isNil_default()(value) && !isNaN(value) ? {
              currency: (_field$value$currency8 = (_field$value12 = field.value) === null || _field$value12 === void 0 ? void 0 : _field$value12.currency) !== null && _field$value$currency8 !== void 0 ? _field$value$currency8 : collective.currency,
              valueInCents: value
            } : null);
          },
          onBlur: function onBlur() {
            return form.setFieldTouched(field.name, true);
          }
        });
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(FieldDescription, {
      children: intl.formatMessage({
        id: "tier.goal.description",
        defaultMessage: [{
          "type": 0,
          "value": "Amount you aim to raise"
        }]
      })
    }), values.type === TICKET && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
        name: "singleTicket",
        label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "WHXII/",
          defaultMessage: [{
            "type": 0,
            "value": "Single Ticket"
          }]
        }),
        labelFontWeight: "bold",
        mt: "3",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        children: function children(_ref18) {
          var field = _ref18.field,
              form = _ref18.form;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(InputSwitch/* default */.Z, {
            name: field.name,
            checked: field.value,
            onChange: function onChange(event) {
              return form.setFieldValue(field.name, event.target.checked);
            }
          });
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FieldDescription, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "tier.singleTicketDescription",
          defaultMessage: [{
            "type": 0,
            "value": "Only allow people to buy a single ticket per order"
          }]
        })
      })]
    }), ![FUND, PROJECT].includes(collective.type) && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
        name: "useStandalonePage",
        label: intl.formatMessage({
          id: "tier.standalonePage",
          defaultMessage: [{
            "type": 0,
            "value": "Standalone page"
          }]
        }),
        labelFontWeight: "bold",
        mt: "3",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        children: function children(_ref19) {
          var field = _ref19.field,
              form = _ref19.form;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(InputSwitch/* default */.Z, {
            name: field.name,
            checked: field.value,
            onChange: function onChange(event) {
              return form.setFieldValue(field.name, event.target.checked);
            }
          });
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FieldDescription, {
        children: intl.formatMessage({
          id: "tier.standalonePageDescription",
          defaultMessage: [{
            "type": 0,
            "value": "Create a "
          }, {
            "type": 8,
            "value": "link",
            "children": [{
              "type": 0,
              "value": "standalone"
            }]
          }, {
            "type": 0,
            "value": " page for this tier? It's like a mini-crowdfunding campaign page that you can add a detailed description and video to, and link to directly"
          }]
        }, {
          link: function StandaloneTierPageLink() {
            for (var _len = arguments.length, msg = new Array(_len), _key = 0; _key < _len; _key++) {
              msg[_key] = arguments[_key];
            }

            if (!values.id) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                children: msg
              });
            } else {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                as: Link/* default */.Z,
                openInNewTab: true,
                href: {
                  pathname: "".concat((0,url_helpers/* getCollectivePageRoute */.x0)(collective), "/contribute/").concat(values.slug, "-").concat(values.id)
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  children: msg
                })
              });
            }
          }
        })
      })]
    }), receiptTemplateOptions.length > 1 && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
        name: "invoiceTemplate",
        label: intl.formatMessage({
          id: "cyMx/0",
          defaultMessage: [{
            "type": 0,
            "value": "Choose receipt"
          }]
        }),
        labelFontWeight: "bold",
        mt: "3",
        required: false,
        children: function children(_ref20) {
          var field = _ref20.field,
              form = _ref20.form,
              loading = _ref20.loading;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledSelect/* default */.ZP, {
            inputId: field.name,
            "data-cy": field.name,
            error: field.error,
            onBlur: function onBlur() {
              return form.setFieldTouched(field.name, true);
            },
            onChange: function onChange(_ref21) {
              var value = _ref21.value;
              return form.setFieldValue(field.name, value);
            },
            isLoading: loading,
            options: receiptTemplateOptions,
            value: receiptTemplateOptions.find(function (option) {
              return option.value === field.value;
            })
          });
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FieldDescription, {
        children: intl.formatMessage({
          id: "sn4ULW",
          defaultMessage: [{
            "type": 0,
            "value": "Choose between the receipts templates available."
          }]
        })
      })]
    })]
  });
}

var EditSectionContainer = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Flex */.kC).withConfig({
  displayName: "EditTierModal__EditSectionContainer",
  componentId: "sc-112v4fi-0"
})(["overflow-y:scroll;flex-grow:1;flex-direction:column;padding-right:1rem;min-width:250px;@media (min-width:700px){max-height:600px;}"]);
var PreviewSectionContainer = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Flex */.kC).withConfig({
  displayName: "EditTierModal__PreviewSectionContainer",
  componentId: "sc-112v4fi-1"
})(["overflow:hidden;max-height:600px;flex-grow:1;min-width:300px;justify-content:center;@media (max-width:700px){margin:0 -20px;}"]);
var ModalSectionContainer = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Flex */.kC).withConfig({
  displayName: "EditTierModal__ModalSectionContainer",
  componentId: "sc-112v4fi-2"
})(["@media (max-width:700px){flex-wrap:wrap;gap:2em;align-items:center;}"]);
var EditModalActionsContainer = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Flex */.kC).withConfig({
  displayName: "EditTierModal__EditModalActionsContainer",
  componentId: "sc-112v4fi-3"
})(["justify-content:right;flex-wrap:wrap;gap:1em;@media (max-width:700px){& > button{width:100%;}justify-content:center;flex-wrap:wrap;align-items:center;}"]);
var ConfirmModalButton = (0,styled_components_browser_esm/* default */.ZP)(StyledButton/* default */.Z).withConfig({
  displayName: "EditTierModal__ConfirmModalButton",
  componentId: "sc-112v4fi-4"
})(["@media (max-width:700px){order:1;}"]);
var DeleteModalButton = (0,styled_components_browser_esm/* default */.ZP)(StyledButton/* default */.Z).withConfig({
  displayName: "EditTierModal__DeleteModalButton",
  componentId: "sc-112v4fi-5"
})(["@media (max-width:700px){order:2;}"]);
var CancelModalButton = (0,styled_components_browser_esm/* default */.ZP)(StyledButton/* default */.Z).withConfig({
  displayName: "EditTierModal__CancelModalButton",
  componentId: "sc-112v4fi-6"
})(["@media (max-width:700px){order:3;}"]);
var ModalContainer = (0,styled_components_browser_esm/* default */.ZP)(StyledModal/* default */.ZP).withConfig({
  displayName: "EditTierModal__ModalContainer",
  componentId: "sc-112v4fi-7"
})(["padding-bottom:10px;"]);
var FieldDescription = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "EditTierModal__FieldDescription",
  componentId: "sc-112v4fi-8"
})(["color:#737373;font-size:1.2rem;"]);
var ContributeCardPreviewContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "EditTierModal__ContributeCardPreviewContainer",
  componentId: "sc-112v4fi-9"
})(["padding:2rem;@media (max-width:700px){padding:0;}"]);
function EditTierModal(_ref22) {
  var tier = _ref22.tier,
      collective = _ref22.collective,
      onClose = _ref22.onClose,
      onUpdate = _ref22.onUpdate,
      forcedType = _ref22.forcedType;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ModalContainer, {
    onClose: onClose,
    ignoreEscapeKey: true,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(EditTierForm, {
      tier: tier,
      collective: collective,
      onClose: onClose,
      forcedType: forcedType,
      onUpdate: onUpdate
    })
  });
}
function ContributeCardPreview(_ref23) {
  var tier = _ref23.tier,
      collective = _ref23.collective;
  var intl = (0,useIntl/* default */.Z)();

  var previewTier = _objectSpread(_objectSpread({}, tier), {}, {
    id: tier.legacyId,
    slug: 'preview-slug',
    stats: {}
  });

  if (tier.maxQuantity) {
    previewTier.stats.availableQuantity = tier.maxQuantity;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(ContributeCardPreviewContainer, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ContributeTier/* default */.Z, {
      isPreview: true,
      intl: intl,
      tier: previewTier,
      collective: collective,
      hideContributors: true
    })
  });
}
var editTiersFieldsFragment = (0,lib/* default */.ZP)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  fragment EditTiersFields on Tier {\n    id\n    legacyId\n    amount {\n      value\n      valueInCents\n      currency\n    }\n    amountType\n    availableQuantity\n    button\n    customFields\n    description\n    endsAt\n    frequency\n    goal {\n      value\n      valueInCents\n      currency\n    }\n    interval\n    invoiceTemplate\n    maxQuantity\n    minimumAmount {\n      value\n      valueInCents\n      currency\n    }\n    name\n    presets\n    slug\n    type\n    useStandalonePage\n    singleTicket\n    invoiceTemplate\n  }\n"])));
var listTierQuery = (0,lib/* default */.ZP)(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n  query AccountTiers($accountSlug: String!) {\n    account(slug: $accountSlug) {\n      id\n      ... on AccountWithContributions {\n        tiers {\n          nodes {\n            id\n            ...EditTiersFields\n          }\n        }\n      }\n      ... on Organization {\n        tiers {\n          nodes {\n            id\n            ...EditTiersFields\n          }\n        }\n      }\n    }\n  }\n  ", "\n"])), editTiersFieldsFragment);
var editTierMutation = (0,lib/* default */.ZP)(_templateObject3 || (_templateObject3 = taggedTemplateLiteral_default()(["\n  mutation EditTier($tier: TierUpdateInput!) {\n    editTier(tier: $tier) {\n      id\n      ...EditTiersFields\n    }\n  }\n  ", "\n"])), editTiersFieldsFragment);
var createTierMutation = (0,lib/* default */.ZP)(_templateObject4 || (_templateObject4 = taggedTemplateLiteral_default()(["\n  mutation CreateTier($tier: TierCreateInput!, $account: AccountReferenceInput!) {\n    createTier(tier: $tier, account: $account) {\n      id\n      ...EditTiersFields\n    }\n  }\n  ", "\n"])), editTiersFieldsFragment);
var deleteTierMutation = (0,lib/* default */.ZP)(_templateObject5 || (_templateObject5 = taggedTemplateLiteral_default()(["\n  mutation DeleteTier($tier: TierReferenceInput!, $stopRecurringContributions: Boolean! = false) {\n    deleteTier(tier: $tier, stopRecurringContributions: $stopRecurringContributions) {\n      id\n    }\n  }\n"])));

var getRequiredFields = function getRequiredFields(values) {
  var fields = ['name', 'type', 'amountType']; // Depending on amount type

  if (values.amountType === 'FIXED') {
    fields.push('amount');
  } else if (values.amountType === 'FLEXIBLE') {
    fields.push('minimumAmount');
  }

  return fields;
};

function EditTierForm(_ref24) {
  var tier = _ref24.tier,
      collective = _ref24.collective,
      onClose = _ref24.onClose,
      onUpdate = _ref24.onUpdate,
      forcedType = _ref24.forcedType;
  var intl = (0,useIntl/* default */.Z)();
  var isEditing = react.useMemo(function () {
    return !!(tier !== null && tier !== void 0 && tier.id);
  });
  var initialValues = react.useMemo(function () {
    if (isEditing) {
      return _objectSpread(_objectSpread({}, omit_default()(tier, ['__typename', 'endsAt', 'slug', 'legacyId', 'customFields', 'availableQuantity'])), {}, {
        amount: omit_default()(tier.amount, '__typename'),
        interval: (0,date_utils/* getIntervalFromContributionFrequency */.Pw)(tier.frequency),
        goal: omit_default()(tier.goal, '__typename'),
        minimumAmount: omit_default()(tier.minimumAmount, '__typename'),
        description: tier.description || '',
        presets: tier.presets || [1000],
        invoiceTemplate: tier.invoiceTemplate
      });
    } else {
      return {
        name: '',
        type: forcedType || tiers_types/* TierTypes.TIER */.x$.TIER,
        amountType: tiers_types/* AmountTypes.FIXED */.lX.FIXED,
        amount: null,
        minimumAmount: null,
        interval: intervals["default"].month,
        description: '',
        presets: [1000]
      };
    }
  }, [isEditing, tier]);
  var formMutation = isEditing ? editTierMutation : createTierMutation;

  var _useMutation = (0,client.useMutation)(formMutation, {
    context: helpers/* API_V2_CONTEXT */.T,
    update: function update(cache) {
      // Invalidate the cache for the collective page query to make sure we'll fetch the latest data next time we visit
      var __typename = collective.type === collectives/* CollectiveType.EVENT */.eV.EVENT ? 'Event' : 'Collective';

      var cachedCollective = cache.identify({
        __typename: __typename,
        id: (0,collective_lib/* getLegacyIdForCollective */.Cl)(collective)
      });

      if (cachedCollective) {
        cache.modify({
          id: cachedCollective,
          fields: {
            tiers: function tiers(_, _ref25) {
              var DELETE = _ref25.DELETE;
              return DELETE;
            }
          }
        });
      }
    }
  }),
      _useMutation2 = slicedToArray_default()(_useMutation, 1),
      submitFormMutation = _useMutation2[0];

  var _useMutation3 = (0,client.useMutation)(deleteTierMutation, {
    context: helpers/* API_V2_CONTEXT */.T
  }),
      _useMutation4 = slicedToArray_default()(_useMutation3, 2),
      deleteTier = _useMutation4[0],
      isDeleting = _useMutation4[1].loading;

  var _React$useState = react.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      isConfirmingDelete = _React$useState2[0],
      setIsConfirmingDelete = _React$useState2[1];

  var _useToasts = (0,ToastProvider/* useToasts */.e1)(),
      addToast = _useToasts.addToast;

  var onDeleteTierClick = react.useCallback( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setIsConfirmingDelete(true);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  var onConfirmDelete = react.useCallback( /*#__PURE__*/function () {
    var _ref27 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee2(keepRecurringContributions) {
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return deleteTier({
                variables: {
                  tier: {
                    id: tier.id
                  },
                  stopRecurringContributions: !keepRecurringContributions
                },
                update: function update(cache) {
                  cache.evict({
                    id: cache.identify(tier)
                  }); // Evict from GraphQL V1

                  cache.evict({
                    id: cache.identify({
                      __typename: 'Tier',
                      id: tier.legacyId
                    })
                  }); // Evict from GraphQL V2

                  cache.gc();
                }
              });

            case 3:
              onClose();
              addToast({
                type: ToastProvider/* TOAST_TYPE.SUCCESS */["do"].SUCCESS,
                message: intl.formatMessage({
                  id: "r5PByj",
                  defaultMessage: [{
                    "type": 5,
                    "value": "type",
                    "options": {
                      "TICKET": {
                        "value": [{
                          "type": 0,
                          "value": "Ticket"
                        }]
                      },
                      "other": {
                        "value": [{
                          "type": 0,
                          "value": "Tier"
                        }]
                      }
                    }
                  }, {
                    "type": 0,
                    "value": " deleted."
                  }]
                }, {
                  type: tier.type
                })
              });
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              addToast({
                type: ToastProvider/* TOAST_TYPE.ERROR */["do"].ERROR,
                message: (0,errors/* i18nGraphqlException */.t2)(intl, _context2.t0.message)
              });

            case 10:
              _context2.prev = 10;
              setIsConfirmingDelete(false);
              return _context2.finish(10);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7, 10, 13]]);
    }));

    return function (_x) {
      return _ref27.apply(this, arguments);
    };
  }(), [deleteTier]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Formik */.J9, {
      initialValues: initialValues,
      validate: function validate(values) {
        return (0,form_utils/* requireFields */.ay)(values, getRequiredFields(values));
      },
      onSubmit: /*#__PURE__*/function () {
        var _ref28 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee3(values) {
          var _values$goal, _values$amount, _values$minimumAmount;

          var tier, result;
          return regenerator_default().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  tier = _objectSpread(_objectSpread({}, omit_default()(values, ['interval'])), {}, {
                    frequency: (0,intervals.getGQLV2FrequencyFromInterval)(values.interval),
                    maxQuantity: parseInt(values.maxQuantity),
                    goal: !isNil_default()(values === null || values === void 0 ? void 0 : (_values$goal = values.goal) === null || _values$goal === void 0 ? void 0 : _values$goal.valueInCents) ? values.goal : null,
                    amount: !isNil_default()(values === null || values === void 0 ? void 0 : (_values$amount = values.amount) === null || _values$amount === void 0 ? void 0 : _values$amount.valueInCents) ? values.amount : null,
                    minimumAmount: !isNil_default()(values === null || values === void 0 ? void 0 : (_values$minimumAmount = values.minimumAmount) === null || _values$minimumAmount === void 0 ? void 0 : _values$minimumAmount.valueInCents) ? values.minimumAmount : null,
                    singleTicket: values === null || values === void 0 ? void 0 : values.singleTicket
                  });
                  _context3.prev = 1;
                  _context3.next = 4;
                  return submitFormMutation({
                    variables: {
                      tier: tier,
                      account: {
                        legacyId: collective.id
                      }
                    }
                  });

                case 4:
                  result = _context3.sent;
                  onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(result);
                  addToast({
                    type: ToastProvider/* TOAST_TYPE.SUCCESS */["do"].SUCCESS,
                    message: isEditing ? intl.formatMessage({
                      id: "SOhVsw",
                      defaultMessage: [{
                        "type": 5,
                        "value": "type",
                        "options": {
                          "TICKET": {
                            "value": [{
                              "type": 0,
                              "value": "Ticket"
                            }]
                          },
                          "other": {
                            "value": [{
                              "type": 0,
                              "value": "Tier"
                            }]
                          }
                        }
                      }, {
                        "type": 0,
                        "value": " updated."
                      }]
                    }, {
                      type: values.type
                    }) : intl.formatMessage({
                      id: "deViVP",
                      defaultMessage: [{
                        "type": 5,
                        "value": "type",
                        "options": {
                          "TICKET": {
                            "value": [{
                              "type": 0,
                              "value": "Ticket"
                            }]
                          },
                          "other": {
                            "value": [{
                              "type": 0,
                              "value": "Tier"
                            }]
                          }
                        }
                      }, {
                        "type": 0,
                        "value": " created."
                      }]
                    }, {
                      type: values.type
                    })
                  });
                  onClose();
                  _context3.next = 13;
                  break;

                case 10:
                  _context3.prev = 10;
                  _context3.t0 = _context3["catch"](1);
                  addToast({
                    type: ToastProvider/* TOAST_TYPE.ERROR */["do"].ERROR,
                    message: (0,errors/* i18nGraphqlException */.t2)(intl, _context3.t0)
                  });

                case 13:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, null, [[1, 10]]);
        }));

        return function (_x2) {
          return _ref28.apply(this, arguments);
        };
      }(),
      children: function children(_ref29) {
        var values = _ref29.values,
            isSubmitting = _ref29.isSubmitting;
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(formik_esm/* Form */.l0, {
          "data-cy": "edit-tier-modal-form",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalHeader */.xB, {
            onClose: onClose,
            hideCloseIcon: true,
            children: isEditing ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "/CCt2w",
              defaultMessage: [{
                "type": 0,
                "value": "Edit "
              }, {
                "type": 5,
                "value": "type",
                "options": {
                  "TICKET": {
                    "value": [{
                      "type": 0,
                      "value": "Ticket"
                    }]
                  },
                  "other": {
                    "value": [{
                      "type": 0,
                      "value": "Tier"
                    }]
                  }
                }
              }],
              values: {
                type: tier.type
              }
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "/XDuMs",
              defaultMessage: [{
                "type": 0,
                "value": "Create "
              }, {
                "type": 5,
                "value": "type",
                "options": {
                  "TICKET": {
                    "value": [{
                      "type": 0,
                      "value": "Ticket"
                    }]
                  },
                  "other": {
                    "value": [{
                      "type": 0,
                      "value": "Tier"
                    }]
                  }
                }
              }],
              values: {
                type: forcedType
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalBody */.fe, {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ModalSectionContainer, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(EditSectionContainer, {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormFields, {
                  collective: collective,
                  values: values,
                  tier: tier,
                  hideTypeSelect: Boolean(forcedType)
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(PreviewSectionContainer, {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(ContributeCardPreview, {
                  collective: collective,
                  tier: values
                })
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalFooter */.mz, {
            isFullWidth: true,
            dividerMargin: "1rem 0",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(EditModalActionsContainer, {
              children: [isEditing && /*#__PURE__*/(0,jsx_runtime.jsx)(DeleteModalButton, {
                type: "button",
                "data-cy": "delete-btn",
                buttonStyle: "dangerSecondary",
                minWidth: 120,
                onClick: onDeleteTierClick,
                loading: isDeleting,
                disabled: isSubmitting || isConfirmingDelete,
                marginRight: "auto",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "actions.delete",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Delete"
                  }]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(ConfirmModalButton, {
                type: "submit",
                "data-cy": "confirm-btn",
                buttonStyle: "primary",
                minWidth: 120,
                disabled: isDeleting || isConfirmingDelete,
                loading: isSubmitting,
                children: isEditing ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "save",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Save"
                  }]
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "create",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Create"
                  }]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(CancelModalButton, {
                type: "button",
                "data-cy": "cancel-btn",
                disabled: isSubmitting || isDeleting || isConfirmingDelete,
                minWidth: 100,
                onClick: onClose,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "actions.cancel",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Cancel"
                  }]
                })
              })]
            })
          })]
        });
      }
    }), isConfirmingDelete && /*#__PURE__*/(0,jsx_runtime.jsx)(ConfirmTierDeleteModal, {
      tier: tier,
      isDeleting: isDeleting,
      onClose: function onClose() {
        return setIsConfirmingDelete(false);
      },
      onConfirmDelete: onConfirmDelete
    })]
  });
}

var _StyledMessageBox = (0,styled_components_browser_esm/* default */.ZP)(MessageBox/* default */.Z).withConfig({
  displayName: "EditTierModal___StyledMessageBox",
  componentId: "sc-112v4fi-10"
})({
  flexGrow: 1
});

EditTierModal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EditTierModal",
  "props": {
    "tier": {
      "description": "",
      "type": {
        "name": "object"
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
    "onClose": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onUpdate": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "forcedType": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
ContributeCardPreview.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ContributeCardPreview",
  "props": {
    "tier": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "legacyId": {
            "name": "number",
            "required": false
          },
          "maxQuantity": {
            "name": "number",
            "required": false
          }
        }
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
EditTierForm.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EditTierForm",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "tier": {
      "description": "",
      "type": {
        "name": "object"
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
    "onUpdate": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "forcedType": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=2150-fd22771f70d252d3.js.map