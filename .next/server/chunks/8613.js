"use strict";
exports.id = 8613;
exports.ids = [8613];
exports.modules = {

/***/ 23009:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69078);
/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99591);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_InputField__WEBPACK_IMPORTED_MODULE_3__]);
_InputField__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const InputFieldPresetsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "InputFieldPresets__InputFieldPresetsContainer",
  componentId: "sc-1u8titd-0"
})([".inputField{max-width:14rem;margin:0;}.form-group{margin-bottom:0;margin-left:0;margin-right:1rem;}"]);

class InputFieldPresets extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.maxLength = 5;
    const values = props.defaultValue ? [...props.defaultValue] : [1000];
    this.state = {
      values
    };
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderSingleInput = this.renderSingleInput.bind(this);
  }

  handleChange(index, val) {
    let {
      values
    } = this.state;
    values[index] = val;
    values = values.filter(v => v !== null);
    this.setState({
      values
    }, () => this.onChange());
  }

  onChange() {
    this.props.onChange(this.state.values);
  }

  renderSingleInput(defaultValue, index) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_InputField__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      name: `currency${index}`,
      type: "currency",
      defaultValue: defaultValue,
      value: this.state.values[index],
      options: this.props.options,
      pre: this.props.pre,
      onChange: val => this.handleChange(index, val)
    }, `currency${index}`);
  }

  render() {
    const values = [...this.state.values];

    if (values.length < this.maxLength) {
      values.push(null);
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(InputFieldPresetsContainer, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        flexWrap: "wrap",
        display: "flex",
        children: values.map(this.renderSingleInput)
      })
    });
  }

}

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputFieldPresets);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38613:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40113);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13831);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99565);
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82525);
/* harmony import */ var _collective_page_ContributeCardsContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38255);
/* harmony import */ var _edit_collective_tiers_EditTierModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48329);
/* harmony import */ var _ContributeCardContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98796);
/* harmony import */ var _CreateNew__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48451);
/* harmony import */ var _DraggableContributeCardWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57625);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_edit_collective_tiers_EditTierModal__WEBPACK_IMPORTED_MODULE_7__]);
_edit_collective_tiers_EditTierModal__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











/**
 * Display a list of contribution cards wrapped in a DragAndDrop provider
 */




const AdminContributeCardsContainer = ({
  collective,
  cards,
  onReorder,
  draggingId,
  setDraggingId,
  onMount,
  CardsContainer,
  useTierModals,
  enableReordering,
  createNewType,
  onTierUpdate
}) => {
  const [items, setItems] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(cards || []); // Reset items if the cards order have changed

  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default()(cards, items)) {
      setItems(cards);
    }
  }, [JSON.stringify(cards)]); // Save reorder to the backend if internal order has changed

  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default()(cards, items)) {
      onReorder?.(items);
    }
  }, [items]);

  function handleDragStart(event) {
    setDraggingId(event.active.id);
  }

  function handleDragEnd(event) {
    const {
      active,
      over
    } = event;

    if (active.id !== over.id) {
      setItems(items => {
        const oldIndex = items.findIndex(item => item.key === active.id);
        const newIndex = items.findIndex(item => item.key === over.id);
        return (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.arrayMove)(items, oldIndex, newIndex);
      });
    }

    setDraggingId(null);
  }

  const [showTierModal, setShowTierModal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const isEvent = collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_5__/* .CollectiveType.EVENT */ .eV.EVENT;
  const createContributionTierRoute = isEvent ? `/${collective.parentCollective?.slug || 'collective'}/events/${collective.slug}/admin/tiers` : `/${collective.slug}/admin/tiers`;
  const addNewMessage = createNewType === 'TICKET' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
    id: "SectionTickets.CreateTicket",
    defaultMessage: [{
      "type": 0,
      "value": "Create Ticket"
    }]
  }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
    id: "Contribute.CreateTier",
    defaultMessage: [{
      "type": 0,
      "value": "Create Contribution Tier"
    }]
  });
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    if (onMount) {
      onMount();
    }
  }, [onMount]);
  const draggingItem = items.find(i => i.key === draggingId);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.DndContext, {
    collisionDetection: _dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.closestCenter,
    onDragEnd: handleDragEnd,
    onDragStart: handleDragStart,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.SortableContext, {
      items: items.map(c => c.key),
      strategy: _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.horizontalListSortingStrategy,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(CardsContainer, {
        children: [items.map(({
          key,
          Component,
          componentProps
        }) => {
          // Add onClickEdit to the component props if we're using tier modals
          componentProps = useTierModals && componentProps.tier ? _objectSpread(_objectSpread({}, componentProps), {}, {
            onClickEdit: () => setShowTierModal(componentProps.tier)
          }) : componentProps;
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ContributeCardContainer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            children: cards.length === 1 || !enableReordering ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Component, _objectSpread({}, componentProps)) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_DraggableContributeCardWrapper__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              Component: Component,
              componentProps: componentProps,
              id: key
            })
          }, key);
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ContributeCardContainer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          children: useTierModals ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_CreateNew__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            as: "div",
            "data-cy": "create-contribute-tier",
            onClick: () => setShowTierModal('new'),
            children: addNewMessage
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_CreateNew__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            "data-cy": "create-contribute-tier",
            route: createContributionTierRoute,
            children: addNewMessage
          })
        }), showTierModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_edit_collective_tiers_EditTierModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
          tier: showTierModal === 'new' ? null : showTierModal,
          collective: collective,
          onClose: () => setShowTierModal(false),
          forcedType: createNewType,
          onUpdate: onTierUpdate
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.DragOverlay, {
        children: draggingItem ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_DraggableContributeCardWrapper__WEBPACK_IMPORTED_MODULE_10__/* .ContributeCardWithDragHandle */ .S, {
          Component: draggingItem.Component,
          componentProps: draggingItem.componentProps,
          isDragOverlay: true
        }) : null
      })]
    })
  });
};

AdminContributeCardsContainer.defaultProps = {
  CardsContainer: _collective_page_ContributeCardsContainer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminContributeCardsContainer);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ ContributeCardWithDragHandle),
/* harmony export */   "Z": () => (/* binding */ DraggableContributeCardWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99565);
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92813);
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_feather_Move__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13371);
/* harmony import */ var _styled_icons_feather_Move__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Move__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _StyledRoundButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90012);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "DraggableContributeCardWrapper__MainContainer",
  componentId: "sc-hsmp1o-0"
})(["position:relative;display:flex;height:100%;", " ", ""], props => props.isDragging && (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.css)(["outline:1px solid #99c9ff;background:#f0f8ff;border-radius:16px;& > *{opacity:0;}"]), props => props.isDragOverlay && (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.css)(["box-shadow:0px 4px 6px rgba(26,27,31,0.16);border-radius:16px;"]));
const DragHandle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef((props, ref) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread(_objectSpread({
  size: 32
}, props), {}, {
  ref: ref,
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styled_icons_feather_Move__WEBPACK_IMPORTED_MODULE_3__.Move, {
    size: 10
  })
})));
DragHandle.displayName = 'DragHandle';
const StyledDragHandle = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(DragHandle).withConfig({
  displayName: "DraggableContributeCardWrapper__StyledDragHandle",
  componentId: "sc-hsmp1o-1"
})(["position:absolute;cursor:move;top:17px;margin-left:270px;box-shadow:0px 4px 6px rgba(26,27,31,0.16);&:hover{color:", ";}@media (hover:none){display:none;}"], props => props.theme.colors.primary[700]);
const ContributeCardWithDragHandle = ({
  Component,
  componentProps,
  dragHandleProps,
  isDragOverlay
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(MainContainer, {
    isDragOverlay: isDragOverlay,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Component, _objectSpread({}, componentProps)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(StyledDragHandle, _objectSpread({}, dragHandleProps))]
  });
};
// Memoized for improved performance when dragging
const MemoizedContributeCardWithDragHandle = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(ContributeCardWithDragHandle);
/**
 * A wrapper arround contribute cards that makes them draggable
 */

function DraggableContributeCardWrapper(props) {
  const {
    attributes,
    listeners,
    isDragging,
    setNodeRef,
    transform,
    transition
  } = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_1__.useSortable)({
    id: props.id
  });
  const style = {
    transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.CSS.Transform.toString(transform),
    transition
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(MainContainer, {
    ref: setNodeRef,
    style: style,
    isDragging: isDragging,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(MemoizedContributeCardWithDragHandle, _objectSpread({
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

/***/ }),

/***/ 26125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ConfirmTierDeleteModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_boxicons_regular_Trash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50359);
/* harmony import */ var _styled_icons_boxicons_regular_Trash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_Trash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _InputSwitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96124);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87268);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(173);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71792);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);












const CancelDeleteModalButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_StyledButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
  displayName: "ConfirmTierDeleteModal__CancelDeleteModalButton",
  componentId: "sc-1vnje3h-0"
})(["@media (max-width:700px){order:1;}"]);
const ConfirmDeleteModalButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_StyledButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
  displayName: "ConfirmTierDeleteModal__ConfirmDeleteModalButton",
  componentId: "sc-1vnje3h-1"
})(["@media (max-width:700px){order:0;}"]);
const DeleteModalActionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC).withConfig({
  displayName: "ConfirmTierDeleteModal__DeleteModalActionsContainer",
  componentId: "sc-1vnje3h-2"
})(["justify-content:space-between;flex-wrap:wrap;@media (max-width:700px){gap:1em;}"]);
function ConfirmTierDeleteModal({
  isDeleting,
  onClose,
  onConfirmDelete,
  tier
}) {
  const [keepRecurringContributions, setKeepRecurringContributions] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true);

  const action = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_8__/* .ModalHeader */ .xB, {
      hideCloseIcon: true,
      children: action
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
      mt: "1.2em",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "xxi1Y+",
        defaultMessage: [{
          "type": 0,
          "value": "The tier will be deleted forever and can't be retrieved."
        }]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      my: "1.2em"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
      gap: "2em",
      mb: "1.2em",
      alignItems: "center",
      justifyContent: "space-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
        flexDirection: "column",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
          fontWeight: "bold",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "iG8QUh",
            defaultMessage: [{
              "type": 0,
              "value": "Do you want to continue recurring contributions?"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
          mt: 1,
          color: "black.500",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "FR8IoI",
            defaultMessage: [{
              "type": 0,
              "value": "If yes, you will still receive existing recurring contributions for this deleted tier."
            }]
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_InputSwitch__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        checked: keepRecurringContributions,
        onChange: event => setKeepRecurringContributions(event.target.checked)
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_8__/* .ModalFooter */ .mz, {
      isFullWidth: true,
      dividerMargin: "1.2em 0",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(DeleteModalActionsContainer, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(CancelDeleteModalButton, {
          flexGrow: 1,
          type: "button",
          "data-cy": "cancel-delete-btn",
          disabled: isDeleting,
          buttonStyle: "secondary",
          mx: 2,
          minWidth: 100,
          onClick: onClose,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "yHvRF3",
            defaultMessage: [{
              "type": 0,
              "value": "Don't Delete"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(ConfirmDeleteModalButton, {
          flexGrow: 1,
          type: "button",
          "data-cy": "confirm-delete-btn",
          disabled: isDeleting,
          mx: 2,
          buttonStyle: "danger",
          minWidth: 100,
          onClick: () => onConfirmDelete(keepRecurringContributions),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
            alignItems: "center",
            justifyContent: "center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
              alignItems: "center",
              mr: 1,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_icons_boxicons_regular_Trash__WEBPACK_IMPORTED_MODULE_1__.Trash, {
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

/***/ }),

/***/ 48329:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L5": () => (/* binding */ listTierQuery),
/* harmony export */   "ZP": () => (/* binding */ EditTierModal)
/* harmony export */ });
/* unused harmony exports ContributeCardPreview, editTiersFieldsFragment, EditTierForm */
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63901);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _opencollective_taxes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42558);
/* harmony import */ var _opencollective_taxes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_opencollective_taxes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82525);
/* harmony import */ var _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80642);
/* harmony import */ var _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12568);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15078);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(12136);
/* harmony import */ var _lib_form_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(40986);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(32651);
/* harmony import */ var _lib_i18n_taxes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(22642);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(25896);
/* harmony import */ var _contribute_cards_ContributeTier__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(78826);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(16159);
/* harmony import */ var _InputFieldPresets__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(23009);
/* harmony import */ var _InputSwitch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(96124);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(92129);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(37278);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(87268);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputAmount__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(54029);
/* harmony import */ var _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(75667);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(51082);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(71792);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(66943);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(93150);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(31330);
/* harmony import */ var _ConfirmTierDeleteModal__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(26125);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contribute_cards_ContributeTier__WEBPACK_IMPORTED_MODULE_18__, _InputFieldPresets__WEBPACK_IMPORTED_MODULE_20__, _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_27__, _ToastProvider__WEBPACK_IMPORTED_MODULE_33__]);
([_contribute_cards_ContributeTier__WEBPACK_IMPORTED_MODULE_18__, _InputFieldPresets__WEBPACK_IMPORTED_MODULE_20__, _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_27__, _ToastProvider__WEBPACK_IMPORTED_MODULE_33__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




































const {
  FUND,
  PROJECT
} = _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_9__/* .CollectiveType */ .eV;
const {
  TIER,
  TICKET,
  MEMBERSHIP,
  SERVICE,
  PRODUCT,
  DONATION
} = _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_11__/* .TierTypes */ .x$;
const {
  FIXED,
  FLEXIBLE
} = _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_11__/* .AmountTypes */ .lX;

function getTierTypeOptions(intl, collectiveType) {
  const simplifiedTierTypes = [{
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
  const membershipTierType = {
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

  return [...simplifiedTierTypes, membershipTierType];
}

function getReceiptTemplates(host) {
  const receiptTemplates = host?.settings?.invoice?.templates;
  const receiptTemplateTitles = [];

  if (receiptTemplates?.default) {
    receiptTemplateTitles.push({
      value: 'default',
      label: receiptTemplates.default.title
    });
  }

  if (receiptTemplates?.alternative) {
    receiptTemplateTitles.push({
      value: 'alternative',
      label: receiptTemplates.alternative.title
    });
  }

  return receiptTemplateTitles;
}

function FormFields({
  collective,
  values,
  hideTypeSelect
}) {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.useIntl)();
  const tierTypeOptions = getTierTypeOptions(intl, collective.type);
  const intervalOptions = [{
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
  const amountTypeOptions = [{
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
  const receiptTemplateOptions = getReceiptTemplates(collective.host);
  const taxes = (0,_opencollective_taxes__WEBPACK_IMPORTED_MODULE_5__.getApplicableTaxes)(collective, collective.host, values.type);
  const formik = (0,formik__WEBPACK_IMPORTED_MODULE_6__.useFormikContext)(); // Enforce certain rules when updating

  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(() => {
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
  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(() => {}, [values.type]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
    children: [collective.type !== FUND && !hideTypeSelect && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
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
        children: ({
          field,
          form,
          loading
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .ZP, {
          inputId: field.name,
          "data-cy": `select-${field.name}`,
          error: field.error,
          onBlur: () => form.setFieldTouched(field.name, true),
          onChange: ({
            value
          }) => form.setFieldValue(field.name, value),
          isLoading: loading,
          options: tierTypeOptions,
          value: tierTypeOptions.find(option => option.value === field.value)
        })
      }), taxes.map(({
        type,
        percentage
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
        mt: 3,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_StyledMessageBox, {
          type: "info",
          withIcon: true,
          fontSize: "12px",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_32__/* .Span */ .Dr, {
            fontWeight: "bold",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
              id: "withColon",
              defaultMessage: [{
                "type": 1,
                "value": "item"
              }, {
                "type": 0,
                "value": ":"
              }],
              values: {
                item: (0,_lib_i18n_taxes__WEBPACK_IMPORTED_MODULE_16__/* .i18nTaxType */ .m)(intl, type)
              }
            }), ' ', percentage, "%"]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Box */ .xu, {
            mt: 2,
            children: (0,_lib_i18n_taxes__WEBPACK_IMPORTED_MODULE_16__/* .i18nTaxDescription */ .H)(intl, type)
          })]
        })
      }, `${type}-${percentage}`))]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
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
      children: ({
        field
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .ZP, _objectSpread({
        "data-cy": field.name,
        placeholder: "E.g. Donation"
      }, field))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
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
      children: ({
        field
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, _objectSpread({
        "data-cy": field.name,
        maxLength: 510,
        width: "100%",
        showCount: true
      }, field))
    }), [DONATION, MEMBERSHIP, TIER, SERVICE].includes(values.type) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
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
      children: ({
        field,
        form,
        loading
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .ZP, {
        inputId: field.name,
        "data-cy": `select-${field.name}`,
        error: field.error,
        onBlur: () => form.setFieldTouched(field.name, true),
        onChange: ({
          value
        }) => form.setFieldValue(field.name, value),
        isLoading: loading,
        options: intervalOptions,
        value: intervalOptions.find(option => option.value === field.value)
      })
    }), values.interval !== 'flexible' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
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
      children: ({
        field,
        form,
        loading
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .ZP, {
        inputId: field.name,
        "data-cy": field.name,
        error: field.error,
        onBlur: () => form.setFieldTouched(field.name, true),
        onChange: ({
          value
        }) => form.setFieldValue(field.name, value),
        isLoading: loading,
        options: amountTypeOptions,
        value: amountTypeOptions.find(option => option.value === field.value)
      })
    }), values.amountType === FIXED && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
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
      children: ({
        field,
        form
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledInputAmount__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
        id: field.id,
        "data-cy": field.name,
        currency: field.value?.currency ?? collective.currency,
        currencyDisplay: "CODE",
        placeholder: "0.00",
        error: field.error,
        value: field.value?.valueInCents,
        maxWidth: "100%",
        onChange: value => form.setFieldValue(field.name, !lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(value) && !isNaN(value) ? {
          currency: field.value?.currency ?? collective.currency,
          valueInCents: value
        } : null),
        onBlur: () => form.setFieldTouched(field.name, true)
      })
    }), values.amountType === FLEXIBLE && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
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
      children: ({
        field,
        form
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_InputFieldPresets__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, field), {}, {
        defaultValue: field.value,
        onChange: value => form.setFieldValue(field.name, value)
      }))
    }), values.amountType === FLEXIBLE && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
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
      children: ({
        field,
        form
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledInputAmount__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
        id: field.id,
        "data-cy": field.name,
        currency: field.value?.currency ?? collective.currency,
        currencyDisplay: "CODE",
        placeholder: "0.00",
        error: field.error,
        value: field.value?.valueInCents,
        maxWidth: "100%",
        onChange: value => form.setFieldValue(field.name, !lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(value) && !isNaN(value) ? {
          currency: field.value?.currency ?? collective.currency,
          valueInCents: value
        } : null),
        onBlur: () => form.setFieldTouched(field.name, true)
      })
    }), values.amountType === FLEXIBLE && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
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
      children: ({
        field,
        form
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledInputAmount__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
        id: field.id,
        "data-cy": field.name,
        currency: field.value?.currency ?? collective.currency,
        currencyDisplay: "CODE",
        placeholder: "0.00",
        error: field.error,
        value: field.value?.valueInCents,
        maxWidth: "100%",
        onChange: value => form.setFieldValue(field.name, !lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(value) && !isNaN(value) ? {
          currency: field.value?.currency ?? collective.currency,
          valueInCents: value
        } : null),
        onBlur: () => form.setFieldTouched(field.name, true)
      })
    }), ([TICKET, PRODUCT, MEMBERSHIP].includes(values.type) || values.type === TIER && ![FUND, PROJECT].includes(collective.type)) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
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
        children: ({
          field
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .ZP, _objectSpread({
          "data-cy": field.name
        }, field))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(FieldDescription, {
        children: intl.formatMessage({
          id: "tier.maxQuantity.description",
          defaultMessage: [{
            "type": 0,
            "value": "Leave empty for unlimited"
          }]
        })
      })]
    }), ![FUND].includes(collective.type) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
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
      children: ({
        field
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .ZP, _objectSpread({
        "data-cy": field.name
      }, field))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
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
      children: ({
        field,
        form
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledInputAmount__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
        id: field.id,
        "data-cy": field.name,
        currency: field.value?.currency ?? collective.currency,
        currencyDisplay: "CODE",
        placeholder: "0.00",
        error: field.error,
        value: field.value?.valueInCents,
        maxWidth: "100%",
        onChange: value => form.setFieldValue(field.name, !lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(value) && !isNaN(value) ? {
          currency: field.value?.currency ?? collective.currency,
          valueInCents: value
        } : null),
        onBlur: () => form.setFieldTouched(field.name, true)
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(FieldDescription, {
      children: intl.formatMessage({
        id: "tier.goal.description",
        defaultMessage: [{
          "type": 0,
          "value": "Amount you aim to raise"
        }]
      })
    }), values.type === TICKET && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
        name: "singleTicket",
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
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
        children: ({
          field,
          form
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_InputSwitch__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
          name: field.name,
          checked: field.value,
          onChange: event => form.setFieldValue(field.name, event.target.checked)
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(FieldDescription, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "tier.singleTicketDescription",
          defaultMessage: [{
            "type": 0,
            "value": "Only allow people to buy a single ticket per order"
          }]
        })
      })]
    }), ![FUND, PROJECT].includes(collective.type) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
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
        children: ({
          field,
          form
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_InputSwitch__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
          name: field.name,
          checked: field.value,
          onChange: event => form.setFieldValue(field.name, event.target.checked)
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(FieldDescription, {
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
          link: function StandaloneTierPageLink(...msg) {
            if (!values.id) {
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx("span", {
                children: msg
              });
            } else {
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                as: _Link__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z,
                openInNewTab: true,
                href: {
                  pathname: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_17__/* .getCollectivePageRoute */ .x0)(collective)}/contribute/${values.slug}-${values.id}`
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx("span", {
                  children: msg
                })
              });
            }
          }
        })
      })]
    }), receiptTemplateOptions.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
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
        children: ({
          field,
          form,
          loading
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .ZP, {
          inputId: field.name,
          "data-cy": field.name,
          error: field.error,
          onBlur: () => form.setFieldTouched(field.name, true),
          onChange: ({
            value
          }) => form.setFieldValue(field.name, value),
          isLoading: loading,
          options: receiptTemplateOptions,
          value: receiptTemplateOptions.find(option => option.value === field.value)
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(FieldDescription, {
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

const EditSectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC).withConfig({
  displayName: "EditTierModal__EditSectionContainer",
  componentId: "sc-112v4fi-0"
})(["overflow-y:scroll;flex-grow:1;flex-direction:column;padding-right:1rem;min-width:250px;@media (min-width:700px){max-height:600px;}"]);
const PreviewSectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC).withConfig({
  displayName: "EditTierModal__PreviewSectionContainer",
  componentId: "sc-112v4fi-1"
})(["overflow:hidden;max-height:600px;flex-grow:1;min-width:300px;justify-content:center;@media (max-width:700px){margin:0 -20px;}"]);
const ModalSectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC).withConfig({
  displayName: "EditTierModal__ModalSectionContainer",
  componentId: "sc-112v4fi-2"
})(["@media (max-width:700px){flex-wrap:wrap;gap:2em;align-items:center;}"]);
const EditModalActionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC).withConfig({
  displayName: "EditTierModal__EditModalActionsContainer",
  componentId: "sc-112v4fi-3"
})(["justify-content:right;flex-wrap:wrap;gap:1em;@media (max-width:700px){& > button{width:100%;}justify-content:center;flex-wrap:wrap;align-items:center;}"]);
const ConfirmModalButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_StyledButton__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z).withConfig({
  displayName: "EditTierModal__ConfirmModalButton",
  componentId: "sc-112v4fi-4"
})(["@media (max-width:700px){order:1;}"]);
const DeleteModalButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_StyledButton__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z).withConfig({
  displayName: "EditTierModal__DeleteModalButton",
  componentId: "sc-112v4fi-5"
})(["@media (max-width:700px){order:2;}"]);
const CancelModalButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_StyledButton__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z).withConfig({
  displayName: "EditTierModal__CancelModalButton",
  componentId: "sc-112v4fi-6"
})(["@media (max-width:700px){order:3;}"]);
const ModalContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_StyledModal__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP).withConfig({
  displayName: "EditTierModal__ModalContainer",
  componentId: "sc-112v4fi-7"
})(["padding-bottom:10px;"]);
const FieldDescription = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "EditTierModal__FieldDescription",
  componentId: "sc-112v4fi-8"
})(["color:#737373;font-size:1.2rem;"]);
const ContributeCardPreviewContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "EditTierModal__ContributeCardPreviewContainer",
  componentId: "sc-112v4fi-9"
})(["padding:2rem;@media (max-width:700px){padding:0;}"]);
function EditTierModal({
  tier,
  collective,
  onClose,
  onUpdate,
  forcedType
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(ModalContainer, {
    onClose: onClose,
    ignoreEscapeKey: true,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(EditTierForm, {
      tier: tier,
      collective: collective,
      onClose: onClose,
      forcedType: forcedType,
      onUpdate: onUpdate
    })
  });
}
function ContributeCardPreview({
  tier,
  collective
}) {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.useIntl)();

  const previewTier = _objectSpread(_objectSpread({}, tier), {}, {
    id: tier.legacyId,
    slug: 'preview-slug',
    stats: {}
  });

  if (tier.maxQuantity) {
    previewTier.stats.availableQuantity = tier.maxQuantity;
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(ContributeCardPreviewContainer, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_contribute_cards_ContributeTier__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
      isPreview: true,
      intl: intl,
      tier: previewTier,
      collective: collective,
      hideContributors: true
    })
  });
}
const editTiersFieldsFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`
  fragment EditTiersFields on Tier {
    id
    legacyId
    amount {
      value
      valueInCents
      currency
    }
    amountType
    availableQuantity
    button
    customFields
    description
    endsAt
    frequency
    goal {
      value
      valueInCents
      currency
    }
    interval
    invoiceTemplate
    maxQuantity
    minimumAmount {
      value
      valueInCents
      currency
    }
    name
    presets
    slug
    type
    useStandalonePage
    singleTicket
    invoiceTemplate
  }
`;
const listTierQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`
  query AccountTiers($accountSlug: String!) {
    account(slug: $accountSlug) {
      id
      ... on AccountWithContributions {
        tiers {
          nodes {
            id
            ...EditTiersFields
          }
        }
      }
      ... on Organization {
        tiers {
          nodes {
            id
            ...EditTiersFields
          }
        }
      }
    }
  }
  ${editTiersFieldsFragment}
`;
const editTierMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`
  mutation EditTier($tier: TierUpdateInput!) {
    editTier(tier: $tier) {
      id
      ...EditTiersFields
    }
  }
  ${editTiersFieldsFragment}
`;
const createTierMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`
  mutation CreateTier($tier: TierCreateInput!, $account: AccountReferenceInput!) {
    createTier(tier: $tier, account: $account) {
      id
      ...EditTiersFields
    }
  }
  ${editTiersFieldsFragment}
`;
const deleteTierMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`
  mutation DeleteTier($tier: TierReferenceInput!, $stopRecurringContributions: Boolean! = false) {
    deleteTier(tier: $tier, stopRecurringContributions: $stopRecurringContributions) {
      id
    }
  }
`;

const getRequiredFields = values => {
  const fields = ['name', 'type', 'amountType']; // Depending on amount type

  if (values.amountType === 'FIXED') {
    fields.push('amount');
  } else if (values.amountType === 'FLEXIBLE') {
    fields.push('minimumAmount');
  }

  return fields;
};

function EditTierForm({
  tier,
  collective,
  onClose,
  onUpdate,
  forcedType
}) {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.useIntl)();
  const isEditing = react__WEBPACK_IMPORTED_MODULE_3___default().useMemo(() => !!tier?.id);
  const initialValues = react__WEBPACK_IMPORTED_MODULE_3___default().useMemo(() => {
    if (isEditing) {
      return _objectSpread(_objectSpread({}, lodash_omit__WEBPACK_IMPORTED_MODULE_0___default()(tier, ['__typename', 'endsAt', 'slug', 'legacyId', 'customFields', 'availableQuantity'])), {}, {
        amount: lodash_omit__WEBPACK_IMPORTED_MODULE_0___default()(tier.amount, '__typename'),
        interval: (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_12__/* .getIntervalFromContributionFrequency */ .Pw)(tier.frequency),
        goal: lodash_omit__WEBPACK_IMPORTED_MODULE_0___default()(tier.goal, '__typename'),
        minimumAmount: lodash_omit__WEBPACK_IMPORTED_MODULE_0___default()(tier.minimumAmount, '__typename'),
        description: tier.description || '',
        presets: tier.presets || [1000],
        invoiceTemplate: tier.invoiceTemplate
      });
    } else {
      return {
        name: '',
        type: forcedType || _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_11__/* .TierTypes.TIER */ .x$.TIER,
        amountType: _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_11__/* .AmountTypes.FIXED */ .lX.FIXED,
        amount: null,
        minimumAmount: null,
        interval: _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_10__["default"].month,
        description: '',
        presets: [1000]
      };
    }
  }, [isEditing, tier]);
  const formMutation = isEditing ? editTierMutation : createTierMutation;
  const [submitFormMutation] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(formMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_15__/* .API_V2_CONTEXT */ .T,
    update: cache => {
      // Invalidate the cache for the collective page query to make sure we'll fetch the latest data next time we visit
      const __typename = collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_9__/* .CollectiveType.EVENT */ .eV.EVENT ? 'Event' : 'Collective';

      const cachedCollective = cache.identify({
        __typename,
        id: (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_8__/* .getLegacyIdForCollective */ .Cl)(collective)
      });

      if (cachedCollective) {
        cache.modify({
          id: cachedCollective,
          fields: {
            tiers: (_, {
              DELETE
            }) => DELETE
          }
        });
      }
    }
  });
  const [deleteTier, {
    loading: isDeleting
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(deleteTierMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_15__/* .API_V2_CONTEXT */ .T
  });
  const [isConfirmingDelete, setIsConfirmingDelete] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(false);
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_33__/* .useToasts */ .e1)();
  const onDeleteTierClick = react__WEBPACK_IMPORTED_MODULE_3___default().useCallback(async () => {
    setIsConfirmingDelete(true);
  }, []);
  const onConfirmDelete = react__WEBPACK_IMPORTED_MODULE_3___default().useCallback(async keepRecurringContributions => {
    try {
      await deleteTier({
        variables: {
          tier: {
            id: tier.id
          },
          stopRecurringContributions: !keepRecurringContributions
        },
        update: cache => {
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
      onClose();
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_33__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
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
    } catch (e) {
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_33__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_13__/* .i18nGraphqlException */ .t2)(intl, e.message)
      });
    } finally {
      setIsConfirmingDelete(false);
    }
  }, [deleteTier]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
      initialValues: initialValues,
      validate: values => (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_14__/* .requireFields */ .ay)(values, getRequiredFields(values)),
      onSubmit: async values => {
        const tier = _objectSpread(_objectSpread({}, lodash_omit__WEBPACK_IMPORTED_MODULE_0___default()(values, ['interval'])), {}, {
          frequency: (0,_lib_constants_intervals__WEBPACK_IMPORTED_MODULE_10__.getGQLV2FrequencyFromInterval)(values.interval),
          maxQuantity: parseInt(values.maxQuantity),
          goal: !lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(values?.goal?.valueInCents) ? values.goal : null,
          amount: !lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(values?.amount?.valueInCents) ? values.amount : null,
          minimumAmount: !lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(values?.minimumAmount?.valueInCents) ? values.minimumAmount : null,
          singleTicket: values?.singleTicket
        });

        try {
          const result = await submitFormMutation({
            variables: {
              tier,
              account: {
                legacyId: collective.id
              }
            }
          });
          onUpdate?.(result);
          addToast({
            type: _ToastProvider__WEBPACK_IMPORTED_MODULE_33__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
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
        } catch (e) {
          addToast({
            type: _ToastProvider__WEBPACK_IMPORTED_MODULE_33__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
            message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_13__/* .i18nGraphqlException */ .t2)(intl, e)
          });
        }
      },
      children: ({
        values,
        isSubmitting
      }) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_6__.Form, {
          "data-cy": "edit-tier-modal-form",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_29__/* .ModalHeader */ .xB, {
            onClose: onClose,
            hideCloseIcon: true,
            children: isEditing ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
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
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
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
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_29__/* .ModalBody */ .fe, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(ModalSectionContainer, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(EditSectionContainer, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(FormFields, {
                  collective: collective,
                  values: values,
                  tier: tier,
                  hideTypeSelect: Boolean(forcedType)
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(PreviewSectionContainer, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(ContributeCardPreview, {
                  collective: collective,
                  tier: values
                })
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_29__/* .ModalFooter */ .mz, {
            isFullWidth: true,
            dividerMargin: "1rem 0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(EditModalActionsContainer, {
              children: [isEditing && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(DeleteModalButton, {
                type: "button",
                "data-cy": "delete-btn",
                buttonStyle: "dangerSecondary",
                minWidth: 120,
                onClick: onDeleteTierClick,
                loading: isDeleting,
                disabled: isSubmitting || isConfirmingDelete,
                marginRight: "auto",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                  id: "actions.delete",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Delete"
                  }]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(ConfirmModalButton, {
                type: "submit",
                "data-cy": "confirm-btn",
                buttonStyle: "primary",
                minWidth: 120,
                disabled: isDeleting || isConfirmingDelete,
                loading: isSubmitting,
                children: isEditing ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                  id: "save",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Save"
                  }]
                }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                  id: "create",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Create"
                  }]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(CancelModalButton, {
                type: "button",
                "data-cy": "cancel-btn",
                disabled: isSubmitting || isDeleting || isConfirmingDelete,
                minWidth: 100,
                onClick: onClose,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
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
    }), isConfirmingDelete && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_ConfirmTierDeleteModal__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
      tier: tier,
      isDeleting: isDeleting,
      onClose: () => setIsConfirmingDelete(false),
      onConfirmDelete: onConfirmDelete
    })]
  });
}

var _StyledMessageBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_MessageBox__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z).withConfig({
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
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;