"use strict";
exports.id = 2903;
exports.ids = [2903];
exports.modules = {

/***/ 52903:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export searchTagsQuery */
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93908);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13831);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99565);
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92813);
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_animate_height__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85598);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61929);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_select_creatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31325);
/* harmony import */ var react_select_creatable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_select_creatable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82525);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(32651);
/* harmony import */ var _lib_theme_colors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18490);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16159);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(36422);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_animate_height__WEBPACK_IMPORTED_MODULE_6__]);
react_animate_height__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const _excluded = ["innerProps"],
      _excluded2 = ["innerProps"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const searchTagsQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  query SearchTags($term: String) {
    tagStats(tagSearchTerm: $term) {
      nodes {
        id
        tag
      }
    }
  }
`;

const MultiValue = props => {
  // This prevents the menu from being opened/closed when the user clicks
  // on a value to begin dragging it
  const onMouseDown = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    transform,
    transition
  } = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_4__.useSortable)({
    id: props.data.value
  });
  const style = {
    transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_5__.CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? '0.4' : undefined
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", _objectSpread(_objectSpread(_objectSpread({
    style: style,
    ref: setNodeRef
  }, attributes), listeners), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
      m: "4px",
      variant: "rounded-right",
      maxHeight: "none",
      style: {
        cursor: 'grab'
      },
      onMouseDown: onMouseDown,
      closeButtonProps: _objectSpread(_objectSpread({}, props.removeProps), {}, {
        isFocused: props.isFocused,
        onPointerDown: e => e.stopPropagation()
      }),
      children: props.children
    })
  }));
};

const Input = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_select__WEBPACK_IMPORTED_MODULE_8__.components.Input, _objectSpread(_objectSpread({}, props), {}, {
    "data-cy": 'tags-select-input'
  }));
};

const Option = _ref => {
  let {
    innerProps
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_select__WEBPACK_IMPORTED_MODULE_8__.components.Option, _objectSpread(_objectSpread({}, props), {}, {
    innerProps: _objectSpread(_objectSpread({}, innerProps), {}, {
      'data-cy': `tags-select-option-${props.data['value']}`
    })
  }));
};

const SelectContainer = _ref2 => {
  let {
    innerProps
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_select__WEBPACK_IMPORTED_MODULE_8__.components.SelectContainer, _objectSpread(_objectSpread({}, props), {}, {
    innerProps: _objectSpread(_objectSpread({}, innerProps), {}, {
      'data-cy': 'tags-select'
    })
  }));
};

const debouncedSearch = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()((searchFunc, variables) => {
  return searchFunc({
    variables
  });
}, 500);

function CollectiveTagsInput({
  defaultValue = [],
  onChange,
  suggestedTags = []
}) {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.useIntl)();
  const [searchTags, {
    loading: fetching,
    data
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery)(searchTagsQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_11__/* .API_V2_CONTEXT */ .T
  });
  const {
    0: debouncing,
    1: setDebouncing
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const loading = fetching || debouncing;
  const {
    0: input,
    1: setInput
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: options,
    1: setOptions
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: selected,
    1: setSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValue?.map(tag => ({
    label: tag,
    value: tag
  })) || []);
  const {
    0: draggingTag,
    1: setDraggingTag
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    onChange(selected);
  }, [selected]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (input?.length) {
      setDebouncing(true);
      debouncedSearch(searchTags, {
        term: input
      });
    } else {
      // Skip debouncing when input is empty (on initial load for instance)
      searchTags();
    }
  }, [input]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!fetching) {
      setOptions(data?.tagStats?.nodes.filter(({
        tag
      }) => !_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_10__/* .IGNORED_TAGS.includes */ .bR.includes(tag)).map(({
        tag
      }) => ({
        label: tag,
        value: tag
      })) || []);
      setDebouncing(false);
    }
  }, [fetching, data]);

  function handleDragOver(event) {
    const {
      active,
      over
    } = event;

    if (over && active.id !== over.id) {
      setSelected(selected => {
        const oldIndex = selected.findIndex(item => item.value === active.id);
        const newIndex = selected.findIndex(item => item.value === over.id);
        return (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_4__.arrayMove)(selected, oldIndex, newIndex);
      });
    }
  } // Fix to avoid infinite loop caused by dragging over two items with variable sizes: https://github.com/clauderic/dnd-kit/issues/44#issuecomment-1018686592


  const debouncedDragOver = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(handleDragOver, 40, {
    trailing: false,
    leading: true
  }), []);

  function handleDragStart(event) {
    setDraggingTag(event.active.id);
  }

  function handleDragEnd() {
    setDraggingTag(null);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.DndContext, {
      onDragStart: handleDragStart,
      onDragOver: debouncedDragOver,
      onDragEnd: handleDragEnd,
      onDragCancel: handleDragEnd,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_4__.SortableContext, {
        items: selected.map(o => o.value),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((react_select_creatable__WEBPACK_IMPORTED_MODULE_9___default()), {
          openMenuOnFocus: true,
          placeholder: intl.formatMessage({
            id: "collective.tags.input.placeholder",
            defaultMessage: [{
              "type": 0,
              "value": "+ Add tags"
            }]
          }),
          isMulti: true,
          value: selected,
          menuPortalTarget: document.body,
          components: {
            MultiValue,
            SelectContainer,
            Input,
            Option
          },
          onKeyDown: e => {
            // Stop enter key from closing the menu and submitting the form when it's loading and there are no options
            if (e.key === 'Enter' && loading && options.length === 0) {
              e.preventDefault();
            }
          },
          onInputChange: value => setInput(value),
          options: options,
          isLoading: loading,
          onChange: selectedOptions => setSelected(selectedOptions),
          styles: {
            menuPortal: styles => _objectSpread(_objectSpread({}, styles), {}, {
              zIndex: 9999
            }),
            control: (baseStyles, state) => _objectSpread(_objectSpread({}, baseStyles), {}, {
              boxShadow: `inset 0px 2px 2px ${_lib_theme_colors__WEBPACK_IMPORTED_MODULE_12__/* ["default"].primary[50] */ .Z.primary[50]}`,
              borderColor: state.isFocused ? _lib_theme_colors__WEBPACK_IMPORTED_MODULE_12__/* ["default"].primary[500] */ .Z.primary[500] : _lib_theme_colors__WEBPACK_IMPORTED_MODULE_12__/* ["default"].black[300] */ .Z.black[300],
              '&:hover': {
                borderColor: state.isFocused ? _lib_theme_colors__WEBPACK_IMPORTED_MODULE_12__/* ["default"].primary[500] */ .Z.primary[500] : _lib_theme_colors__WEBPACK_IMPORTED_MODULE_12__/* ["default"].primary[300] */ .Z.primary[300]
              }
            })
          }
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.DragOverlay, {
        children: draggingTag ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          m: "4px",
          variant: "rounded-right",
          style: {
            cursor: 'grabbing',
            color: 'black'
          },
          maxHeight: "none",
          backgroundColor: "black.200",
          closeButtonProps: true,
          children: draggingTag
        }) : null
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_animate_height__WEBPACK_IMPORTED_MODULE_6__["default"], {
      height: suggestedTags?.length > 0 ? 'auto' : 0,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
        mt: 2,
        gap: '6px',
        flexWrap: "wrap",
        alignItems: 'center',
        children: [suggestedTags && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Text__WEBPACK_IMPORTED_MODULE_15__/* .Span */ .Dr, {
          color: "black.600",
          mr: 1,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
            id: "W4zXqr",
            defaultMessage: [{
              "type": 0,
              "value": "Popular tags:"
            }]
          })
        }), suggestedTags?.map(tag => {
          const isSelected = selected.some(({
            value
          }) => value === tag);
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            variant: "rounded-right",
            type: "button",
            tabIndex: -1,
            closeButtonProps: false,
            style: {
              opacity: isSelected ? 0.5 : 1,
              cursor: 'pointer'
            },
            onClick: () => isSelected ? setSelected(selected.filter(({
              value
            }) => value !== tag)) : setSelected([...selected, {
              value: tag,
              label: tag
            }]),
            children: tag
          }, tag);
        })]
      })
    })]
  });
}

CollectiveTagsInput.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CollectiveTagsInput",
  "props": {
    "defaultValue": {
      "defaultValue": {
        "value": "[]",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "suggestedTags": {
      "defaultValue": {
        "value": "[]",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "preload": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectiveTagsInput);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;