"use strict";
exports.id = 2221;
exports.ids = [2221,7667,2903,6465];
exports.modules = {

/***/ 20167:
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
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51082);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const CollapsableText = ({
  text,
  maxLength
}) => {
  const [isCollapsed, setCollapsed] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);

  if (!text) {
    return null;
  } else if (text.length <= maxLength) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
      children: text
    });
  } else if (isCollapsed) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
      children: [lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default()(text, {
        length: maxLength
      }), ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        href: "#",
        onClick: e => {
          e.preventDefault();
          e.stopPropagation();
          setCollapsed(false);
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "ContributeCard.ReadMore",
          defaultMessage: [{
            "type": 0,
            "value": "Read more"
          }]
        })
      })]
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
      children: [text, ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        href: "#",
        onClick: e => {
          e.preventDefault();
          e.stopPropagation();
          setCollapsed(true);
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "Hide",
          defaultMessage: [{
            "type": 0,
            "value": "Hide"
          }]
        })
      })]
    });
  }
};

CollapsableText.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CollapsableText",
  "props": {
    "maxLength": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": true
    },
    "text": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollapsableText);

/***/ }),

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

/***/ }),

/***/ 3798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69078);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);

const _excluded = ["backgroundType", "backgroundOpacity"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/**
 * A specialization of `Container` that displays itself above the content, in position
 * absolute, with a dark background and content centered.
 *
 * Accepts all the props from `Container`.
 */



const ContainerOverlay = _ref => {
  let {
    backgroundType,
    backgroundOpacity
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const isDark = backgroundType === 'dark';
  const defaultOpacity = isDark ? 0.5 : 0.75;
  const opacity = !lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default()(backgroundOpacity) ? backgroundOpacity : defaultOpacity;
  const lightness = isDark ? '30' : '255';
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, _objectSpread({
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: `rgba(${lightness}, ${lightness}, ${lightness}, ${opacity})`,
    width: "100%",
    height: "100%",
    zIndex: 9999
  }, props));
};

ContainerOverlay.defaultProps = {
  backgroundType: 'white'
};
ContainerOverlay.__docgenInfo = {
  "description": "A specialization of `Container` that displays itself above the content, in position\nabsolute, with a dark background and content centered.\n\nAccepts all the props from `Container`.",
  "methods": [],
  "displayName": "ContainerOverlay",
  "props": {
    "backgroundType": {
      "defaultValue": {
        "value": "'white'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'dark'",
          "computed": false
        }, {
          "value": "'white'",
          "computed": false
        }]
      },
      "required": false
    },
    "backgroundOpacity": {
      "description": "If omitted, will use 0.5 for dark and 0.75 for black",
      "type": {
        "name": "number"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContainerOverlay);

/***/ }),

/***/ 42388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92129);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);



/**
 * `Contributor` type is meant to surface all types of contributors, even the one that
 * may not be registered yet on Open Collective -- for example, Github contributors.
 * The component will automatically fallback on displaying a `span` if the contributor
 * cannot be linked to on Open Collective.
 *
 * In the future it may also link to external profiles like Github.
 */



const LinkContributor = ({
  contributor,
  children
}) => {
  if (contributor.isGuest) {
    return children || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "profile.guest",
      defaultMessage: [{
        "type": 0,
        "value": "Guest"
      }]
    });
  } else if (contributor.isIncognito) {
    return children || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "profile.incognito",
      defaultMessage: [{
        "type": 0,
        "value": "Incognito"
      }]
    });
  } else if (contributor.collectiveSlug) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      href: `/${contributor.collectiveSlug}`,
      children: children || contributor.name
    });
  } else {
    return children || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
      children: contributor.name
    });
  }
};

LinkContributor.__docgenInfo = {
  "description": "`Contributor` type is meant to surface all types of contributors, even the one that\nmay not be registered yet on Open Collective -- for example, Github contributors.\nThe component will automatically fallback on displaying a `span` if the contributor\ncannot be linked to on Open Collective.\n\nIn the future it may also link to external profiles like Github.",
  "methods": [],
  "displayName": "LinkContributor",
  "props": {
    "contributor": {
      "description": "The contributor to link to",
      "type": {
        "name": "shape",
        "value": {
          "collectiveSlug": {
            "name": "string",
            "required": false
          },
          "name": {
            "name": "string",
            "required": false
          },
          "isIncognito": {
            "name": "bool",
            "required": false
          },
          "isGuest": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": true
    },
    "children": {
      "description": "By default we show the name in the link. Use this prop to override this",
      "type": {
        "name": "node"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkContributor);

/***/ }),

/***/ 87819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Location)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(13126);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "validator"
var external_validator_ = __webpack_require__(71564);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/Map.js






const tile2Long = (tile, zoom) => {
  // see https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#ECMAScript_.28JavaScript.2FActionScript.2C_etc..29
  return tile / Math.pow(2, zoom) * 360 - 180;
};

const tile2Lat = (tile, zoom) => {
  const n = Math.PI - 2 * Math.PI * tile / Math.pow(2, zoom);
  return 180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
};

const long2tile = (long, zoom) => {
  return Math.floor((long + 180) / 360 * Math.pow(2, zoom));
};

const lat2tile = (lat, zoom) => {
  return Math.floor((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, zoom));
};

const makeBbox = ({
  x,
  y,
  zoom
}) => {
  // https://wiki.openstreetmap.org/wiki/Slippy_Map
  const south = tile2Lat(y + 1, zoom);
  const north = tile2Lat(y, zoom);
  const west = tile2Long(x, zoom);
  const east = tile2Long(x + 1, zoom);
  return `${west}%2C${south}%2C${east}%2C${north}`;
};

const Map = ({
  lat,
  long
}) => {
  const {
    0: src,
    1: prepareMap
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    const zoom = 16;
    const x = long2tile(long, zoom);
    const y = lat2tile(lat, zoom);
    const bbox = makeBbox({
      x,
      y,
      zoom
    }); // Set iframe url after component has mounted to prevent https://github.com/opencollective/opencollective/issues/2845

    const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&marker=${lat}%2C${long}&layers=ND`;
    prepareMap(src);
  }, [lat, long]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: {
      width: '100%',
      height: '100%'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("iframe", {
      title: "Open Street Map",
      width: "100%",
      height: "100%",
      frameBorder: "0",
      scrolling: "no",
      src: src
    }), /*#__PURE__*/jsx_runtime_.jsx(StyledLink/* default */.Z, {
      openInNewTab: true,
      href: `https://www.openstreetmap.org/?mlat=${lat}&amp;mlon=${long}#map=16/${lat}/${long}`,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
        id: "map.viewLarger",
        defaultMessage: [{
          "type": 0,
          "value": "View Larger Map"
        }]
      })
    })]
  });
};

Map.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Map",
  "props": {
    "lat": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "long": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "address": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const components_Map = (Map);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
;// CONCATENATED MODULE: ./components/Location.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const LocationSection = external_styled_components_default().section.withConfig({
  displayName: "Location__LocationSection",
  componentId: "sc-f2g6cd-0"
})(["text-align:center;"]);

class Location extends (external_react_default()).Component {
  render() {
    if (!this.props.location) {
      return null;
    }

    const {
      name,
      address,
      lat,
      long,
      country
    } = this.props.location;

    if (name === 'Online') {
      if (address && (0,external_validator_.isURL)(address)) {
        return /*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
          flexDirection: "Column",
          alignItems: "center",
          children: /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
            textAlign: "center",
            children: /*#__PURE__*/jsx_runtime_.jsx(StyledLink/* default */.Z, {
              openInNewTabNoFollow: true,
              href: address,
              children: address
            })
          })
        });
      } else {
        return /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
          textAlign: "center",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "Location.online",
            defaultMessage: [{
              "type": 0,
              "value": "Online"
            }]
          })
        });
      }
    } else if (!name && !address && !lat && !long && !country) {
      return null;
    }

    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(LocationSection, {
      id: "location",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
        margin: "30px 10px",
        children: [this.props.showTitle && /*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: "Location"
        }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
          "font-size": "1.7rem",
          margin: "5px 0px",
          children: name
        }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
          className: "address",
          color: "black.600",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledLink/* default */.Z, {
            href: `https://www.openstreetmap.org/?mlat=${lat}&amp;mlon=${long}#map=16/${lat}/${long}`,
            openInNewTab: true,
            children: [address, country ? `, ${country}` : '']
          })
        })]
      }), lat && long && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "map",
        children: /*#__PURE__*/jsx_runtime_.jsx(components_Map, {
          lat: lat,
          long: long
        })
      })]
    });
  }

}

_defineProperty(Location, "defaultProps", {
  showTitle: true
});

Location.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Location",
  "props": {
    "showTitle": {
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
    "location": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const components_Location = (Location);

/***/ }),

/***/ 25087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "a_": () => (/* binding */ NotificationBarLink),
/* harmony export */   "z2": () => (/* binding */ NotificationBarButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20384);
/* harmony import */ var _styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92129);
/* harmony import */ var _StyledLinkButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67001);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const NotificationBarLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
  displayName: "NotificationBar__NotificationBarLink",
  componentId: "sc-h69lzm-0"
})(["color:", ";font-weight:700;text-decoration-line:underline;text-decoration-thickness:2px;font-size:1.4rem;line-height:2rem;"], props => props.theme.colors.blue[900]);
const NotificationBarButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_StyledLinkButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).withConfig({
  displayName: "NotificationBar__NotificationBarButton",
  componentId: "sc-h69lzm-1"
})(["color:", ";font-weight:700;text-decoration-line:underline;text-decoration-thickness:2px;font-size:1.4rem;line-height:2rem;"], props => props.theme.colors.blue[900]);
const CloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_1__.Close).withConfig({
  displayName: "NotificationBar__CloseIcon",
  componentId: "sc-h69lzm-2"
})(["font-size:12px;width:24px;height:24px;padding:4px;background:#fff;color:", ";border-radius:99999px;cursor:pointer;"], props => props.theme.colors.blue[900]);
const NotificationBarContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
  displayName: "NotificationBar__NotificationBarContainer",
  componentId: "sc-h69lzm-3"
})(["background-color:", ";color:", ";position:relative;"], props => getBackgroundColor(props.type), props => props.theme.colors.blue[900]);

const getBackgroundColor = type => {
  switch (type) {
    case 'warning':
      return (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.yellow.100');

    case 'error':
      return (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.red.100');

    case 'success':
      return (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.green.100');

    case 'info':
    default:
      return (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.blue.200');
  }
};

const NotificationBar = ({
  title,
  description,
  type,
  actions,
  inline,
  dismiss
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(NotificationBarContainer, {
    "data-cy": "notification-bar",
    type: type,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    padding: "12px 25px",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center",
      flex: "1",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        maxWidth: inline ? '1200px' : '672px',
        children: [title && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H1, _objectSpread(_objectSpread(_objectSpread({
          fontSize: "1.4rem",
          lineHeight: "2rem",
          mx: "4px",
          textAlign: "center",
          letterSpacing: "0px"
        }, description && {
          mb: '6px'
        }), inline && {
          display: 'inline'
        }), {}, {
          children: title
        })), description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, _objectSpread(_objectSpread(_objectSpread({
          fontSize: "1.4rem",
          lineHeight: "2rem",
          textAlign: "center",
          letterSpacing: "0px",
          mx: "4px"
        }, inline && {
          display: 'inline'
        }), actions && {
          mb: '6px'
        }), {}, {
          children: description
        })), actions && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          display: inline ? 'inline-flex' : 'block',
          mx: "4px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
            justifyContent: "center",
            gridGap: "8px",
            children: Array.isArray(actions) ? actions.map(action => action) : actions
          })
        })]
      })
    }), dismiss && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledLinkButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      onClick: dismiss,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(CloseIcon, {})
    })]
  });
};

NotificationBar.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NotificationBar",
  "props": {
    "title": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "description": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "type": {
      "description": "",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'info'",
          "computed": false
        }, {
          "value": "'success'",
          "computed": false
        }, {
          "value": "'error'",
          "computed": false
        }, {
          "value": "'warning'",
          "computed": false
        }]
      },
      "required": false
    },
    "inline": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "actions": {
      "description": "",
      "type": {
        "name": "enum",
        "value": [{
          "value": "PropTypes.node",
          "computed": true
        }, {
          "value": "PropTypes.arrayOf(PropTypes.node)",
          "computed": true
        }]
      },
      "required": false
    },
    "dismiss": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationBar);

/***/ }),

/***/ 75052:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17632);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32651);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97079);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87268);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ToastProvider__WEBPACK_IMPORTED_MODULE_11__]);
_ToastProvider__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















class SendMoneyToCollectiveBtn extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {};
  }

  componentDidUpdate(prevProps) {
    if (this.props.isTransferApproved !== prevProps.isTransferApproved) {
      this.onClick();
    }
  }

  async onClick() {
    const {
      currency,
      amount,
      fromCollective,
      toCollective,
      description,
      data,
      LoggedInUser
    } = this.props;

    if (!LoggedInUser || !LoggedInUser.isAdminOfCollectiveOrHost(fromCollective) || !lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(data, 'account')) {
      return;
    }

    const paymentMethods = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(data, 'account.paymentMethods');

    if (!paymentMethods || paymentMethods.length === 0) {
      this.props.addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_11__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
          id: "+H8kCF",
          defaultMessage: [{
            "type": 0,
            "value": "We couldn't find a payment method to make this transaction"
          }]
        })
      });
      return;
    }

    this.setState({
      loading: true
    });
    const order = {
      amount: {
        valueInCents: amount,
        currency
      },
      toAccount: lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(toCollective, ['slug']),
      fromAccount: lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(fromCollective, ['slug']),
      description,
      paymentMethod: {
        id: paymentMethods[0].id
      },
      frequency: 'ONETIME',
      isBalanceTransfer: true
    };

    try {
      await this.props.sendMoneyToCollective({
        variables: {
          order
        },
        // We need to update the store manually because the response comes from API V2
        update: (store, {
          data: {
            createOrder
          }
        }) => {
          const balance = createOrder.order.fromAccount.stats.balance.valueInCents;
          store.writeFragment({
            fragment: collectiveBalanceFragment,
            id: `CollectiveStatsType:${fromCollective.id}`,
            data: {
              id: fromCollective.id,
              balance
            }
          });
        }
      });
      this.props.addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_11__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
        message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
          id: "TSybob",
          defaultMessage: [{
            "type": 0,
            "value": "Balance sent to "
          }, {
            "type": 1,
            "value": "toCollectiveName"
          }],
          values: {
            toCollectiveName: toCollective.name
          }
        })
      });
      this.setState({
        loading: false
      });
    } catch (e) {
      this.setState({
        loading: false
      });
      this.props.addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_11__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        message: e.message
      });
    }
  }

  render() {
    const {
      amount,
      currency,
      toCollective,
      intl,
      customButton
    } = this.props;
    const {
      locale
    } = intl;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
      className: "SendMoneyToCollectiveBtn",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
        justifyContent: "center",
        mb: 1,
        children: customButton ? customButton({
          onClick: this.props.confirmTransfer || this.onClick,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: [this.state.loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
              id: "form.processing",
              defaultMessage: [{
                "type": 0,
                "value": "processing"
              }]
            }), !this.state.loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
              id: "SendMoneyToCollective.btn",
              defaultMessage: [{
                "type": 0,
                "value": "Send "
              }, {
                "type": 1,
                "value": "amount"
              }, {
                "type": 0,
                "value": " to "
              }, {
                "type": 1,
                "value": "collective"
              }],
              values: {
                amount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .formatCurrency */ .xG)(amount, currency, locale),
                collective: toCollective.name
              }
            })]
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          onClick: this.props.confirmTransfer || this.onClick,
          children: [this.state.loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
            id: "form.processing",
            defaultMessage: [{
              "type": 0,
              "value": "processing"
            }]
          }), !this.state.loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
            id: "SendMoneyToCollective.btn",
            defaultMessage: [{
              "type": 0,
              "value": "Send "
            }, {
              "type": 1,
              "value": "amount"
            }, {
              "type": 0,
              "value": " to "
            }, {
              "type": 1,
              "value": "collective"
            }],
            values: {
              amount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .formatCurrency */ .xG)(amount, currency, locale),
              collective: toCollective.name
            }
          })]
        })
      })
    });
  }

}

const paymentMethodsQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  query SendMoneyToCollectivePaymentMethods($slug: String) {
    account(slug: $slug) {
      id
      paymentMethods(service: OPENCOLLECTIVE, type: COLLECTIVE) {
        id
        service
        name
      }
    }
  }
`;
const addPaymentMethodsData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__.graphql)(paymentMethodsQuery, {
  options: props => ({
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__/* .API_V2_CONTEXT */ .T,
    variables: {
      slug: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(props, 'fromCollective.slug')
    }
  }),
  skip: props => {
    return !props.LoggedInUser;
  }
});
const collectiveBalanceFragment = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__/* .gqlV1 */ .N
/* GraphQL */
`
  fragment StatFieldsFragment on CollectiveStatsType {
    id
    balance
  }
`;
const sendMoneyToCollectiveMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  mutation SendMoneyToCollective($order: OrderCreateInput!) {
    createOrder(order: $order) {
      order {
        id
        fromAccount {
          id
          stats {
            id
            balance {
              valueInCents
            }
          }
        }
      }
    }
  }
`;
const addSendMoneyToCollectiveMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__.graphql)(sendMoneyToCollectiveMutation, {
  name: 'sendMoneyToCollective',
  options: {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__/* .API_V2_CONTEXT */ .T
  }
});
const addGraphql = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_8__/* .compose */ .qC)(addPaymentMethodsData, addSendMoneyToCollectiveMutation);
SendMoneyToCollectiveBtn.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "onClick",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }],
  "displayName": "SendMoneyToCollectiveBtn",
  "props": {
    "amount": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": true
    },
    "currency": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "description": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "fromCollective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "toCollective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "LoggedInUser": {
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
      "required": true
    },
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "sendMoneyToCollective": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "confirmTransfer": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "isTransferApproved": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "customButton": {
      "description": "",
      "type": {
        "name": "custom",
        "raw": "PropTypes.function"
      },
      "required": false
    },
    "addToast": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addGraphql((0,_ToastProvider__WEBPACK_IMPORTED_MODULE_11__/* .withToasts */ .CP)((0,react_intl__WEBPACK_IMPORTED_MODULE_5__.injectIntl)(SendMoneyToCollectiveBtn))));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12154);
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_clamp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const BackgroundBar = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "StyledProgressBar__BackgroundBar",
  componentId: "sc-cpgzll-0"
})(["position:relative;", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_3__.layout, styled_system__WEBPACK_IMPORTED_MODULE_3__.color, styled_system__WEBPACK_IMPORTED_MODULE_3__.border);
const ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "StyledProgressBar__ProgressBar",
  componentId: "sc-cpgzll-1"
})(["position:absolute;", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_3__.layout, styled_system__WEBPACK_IMPORTED_MODULE_3__.color, styled_system__WEBPACK_IMPORTED_MODULE_3__.border);
/**
 * A progress bar that displays the current advancement.
 */

const StyledProgressBar = ({
  percentage,
  color,
  backgroundColor,
  height,
  borderRadius
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(BackgroundBar, {
    bg: backgroundColor,
    height: height,
    borderRadius: borderRadius,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(ProgressBar, {
      width: `${lodash_clamp__WEBPACK_IMPORTED_MODULE_0___default()(percentage, 0, 1) * 100}%`,
      bg: color,
      height: height,
      borderRadius: borderRadius
    })
  });
};

StyledProgressBar.defaultProps = {
  height: 4,
  backgroundColor: 'rgba(9, 10, 10, 0.04)',
  color: 'green.500',
  borderRadius: 16
};
StyledProgressBar.__docgenInfo = {
  "description": "A progress bar that displays the current advancement.",
  "methods": [],
  "displayName": "StyledProgressBar",
  "props": {
    "height": {
      "defaultValue": {
        "value": "4",
        "computed": false
      },
      "description": "Height",
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
    "backgroundColor": {
      "defaultValue": {
        "value": "'rgba(9, 10, 10, 0.04)'",
        "computed": false
      },
      "description": "Color of the unfilled bar",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "color": {
      "defaultValue": {
        "value": "'green.500'",
        "computed": false
      },
      "description": "Color of the filled bar",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "borderRadius": {
      "defaultValue": {
        "value": "16",
        "computed": false
      },
      "description": "Border-radius",
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
    "percentage": {
      "description": "Current progress, between 0 and 1",
      "type": {
        "name": "number"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledProgressBar);

/***/ }),

/***/ 38255:
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
/* harmony import */ var _lib_styled_components_shared_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72004);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24839);





/** An horizontally scrollable container to display contribute cards cards */

const ContributeCardsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ContributeCardsContainer",
  componentId: "sc-r47cn4-0"
})(["", " padding:16px 0;overflow-x:auto;position:relative;", " ", " ", " &:not(:hover){&::-webkit-scrollbar-thumb{background:transparent;}&::-webkit-scrollbar-track{background:transparent;}}@supports (width:fit-content){@media (min-width:", "px){margin:0 auto;min-width:", "px;width:fit-content;max-width:100%;}}@supports not (width:fit-content){@media (min-width:", "px){padding-left:calc((100% - ", "px) / 2);}}"], styled_system__WEBPACK_IMPORTED_MODULE_2__.display, props => props.disableScroll && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["overflow-x:hidden;"]), props => !props.disableScrollSnapping && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["scroll-behavior:smooth;@media (hover:none){scroll-snap-type:x mandatory;}"]), _lib_styled_components_shared_styles__WEBPACK_IMPORTED_MODULE_3__/* .CustomScrollbarCSS */ .T, _constants__WEBPACK_IMPORTED_MODULE_4__/* .Dimensions.MAX_SECTION_WIDTH */ .Db.MAX_SECTION_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_4__/* .Dimensions.MAX_SECTION_WIDTH */ .Db.MAX_SECTION_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_4__/* .Dimensions.MAX_SECTION_WIDTH */ .Db.MAX_SECTION_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_4__/* .Dimensions.MAX_SECTION_WIDTH */ .Db.MAX_SECTION_WIDTH + 10);
ContributeCardsContainer.defaultProps = {
  display: 'flex'
};
ContributeCardsContainer.propTypes = {
  disableScrollSnapping: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool)
};
/** @component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContributeCardsContainer);

/***/ }),

/***/ 8914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J7": () => (/* binding */ editCollectiveBackgroundMutation),
/* harmony export */   "U0": () => (/* binding */ editCollectiveSettingsMutation),
/* harmony export */   "fN": () => (/* binding */ editCollectiveLongDescriptionMutation),
/* harmony export */   "jt": () => (/* binding */ editAccountSettingMutation),
/* harmony export */   "zk": () => (/* binding */ editCollectiveAvatarMutation)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32651);


const editCollectiveSettingsMutation = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_1__/* .gqlV1 */ .N
/* GraphQL */
`
  mutation EditCollectiveSettings($id: Int!, $settings: JSON) {
    editCollective(collective: { id: $id, settings: $settings }) {
      id
      settings
    }
  }
`;
const editAccountSettingMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation EditAccountSetting($collectiveId: Int!, $key: AccountSettingsKey!, $value: JSON!) {
    editAccountSetting(account: { legacyId: $collectiveId }, key: $key, value: $value) {
      id
      settings
    }
  }
`;
/** A mutation used by child components to update the collective */

const editCollectiveLongDescriptionMutation = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_1__/* .gqlV1 */ .N
/* GraphQL */
`
  mutation EditCollectiveLongDescription($id: Int!, $longDescription: String) {
    editCollective(collective: { id: $id, longDescription: $longDescription }) {
      id
      longDescription
    }
  }
`;
const editCollectiveAvatarMutation = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_1__/* .gqlV1 */ .N
/* GraphQL */
`
  mutation EditCollectiveAvatar($id: Int!, $image: String) {
    editCollective(collective: { id: $id, image: $image }) {
      id
      image
      imageUrl(height: 256)
    }
  }
`;
const editCollectiveBackgroundMutation = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_1__/* .gqlV1 */ .N
/* GraphQL */
`
  mutation EditCollectiveBackground($id: Int!, $settings: JSON, $backgroundImage: String) {
    editCollective(collective: { id: $id, settings: $settings, backgroundImage: $backgroundImage }) {
      id
      settings
      backgroundImage
      backgroundImageUrl
    }
  }
`;

/***/ }),

/***/ 47667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16159);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56562);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["display"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/*
 * Illustrations that use the next/image component.
 */



function NextIllustration(_ref) {
  let {
    display
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .xu, {
    display: display,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, _objectSpread({}, props))
  });
}

NextIllustration.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NextIllustration",
  "props": {
    "display": {
      "description": "",
      "type": {
        "name": "array"
      },
      "required": false
    },
    "src": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "width": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "height": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextIllustration);

/***/ }),

/***/ 56127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(450);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87268);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(173);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36422);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90998);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19146);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
const _excluded = ["intl", "title", "type", "route", "buttonText", "children", "contributors", "stats", "hideContributors", "image", "disableCTA", "hideCTA", "onClickEdit", "tier", "isPreview"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














/** The main container */



const StyledContributeCard = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Contribute__StyledContributeCard",
  componentId: "sc-wvawme-0"
})(["display:flex;flex-direction:column;width:", "px;flex:0 0 ", "px;height:100%;border-radius:", "px;border:1px solid #dcdee0;background:white;transition:border-color 0.2s,box-shadow 0.2s,opacity 0.2s;&:hover{border:1px solid ", ";box-shadow:0px 8px 12px rgba(20,20,20,0.16);}"], _constants__WEBPACK_IMPORTED_MODULE_13__/* .CONTRIBUTE_CARD_WIDTH */ .TJ, _constants__WEBPACK_IMPORTED_MODULE_13__/* .CONTRIBUTE_CARD_WIDTH */ .TJ, _constants__WEBPACK_IMPORTED_MODULE_13__/* .CONTRIBUTE_CARD_BORDER_RADIUS */ .zx, props => props.theme.colors.primary[600]);
/** Tier card banner */

const CoverImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Contribute__CoverImage",
  componentId: "sc-wvawme-1"
})(["height:104px;background-repeat:no-repeat;background-size:cover;padding:16px;position:relative;border-radius:16px 16px 0 0;", ";"], props => {
  const primary = props.theme.colors.primary;
  const radial = `radial-gradient(circle, ${primary[300]} 0%, ${primary[800]} 100%), `;
  const image = props.image ? `url(${props.image}), ` : '';

  const applyGrayscale = (isDisabled, contributionType) => {
    if (isDisabled) {
      return 'filter: grayscale(0.75);';
    } else if (contributionType === _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.EVENT_PASSED */ .S.EVENT_PASSED) {
      return 'filter: grayscale(0.50);';
    }
  };

  return (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["background:", " ", " ", ";", ""], image, radial, primary[500], applyGrayscale(props.isDisabled, props.contributionType));
});
/** Tier's description */

const Description = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Contribute__Description",
  componentId: "sc-wvawme-2"
})(["overflow-wrap:break-word;margin:8px 0;font-size:14px;letter-spacing:-0.2px;line-height:20px;height:100%;flex:1 1;color:#4e5052;"]);
/** Translations */

const I18nContributionType = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_CUSTOM */ .S.FINANCIAL_CUSTOM]: {
    id: "ContributionType.Custom",
    defaultMessage: [{
      "type": 0,
      "value": "Custom contribution"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_CRYPTO */ .S.FINANCIAL_CRYPTO]: {
    id: "ContributionType.Crypto",
    defaultMessage: [{
      "type": 0,
      "value": "Crypto contribution"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_ONE_TIME */ .S.FINANCIAL_ONE_TIME]: {
    id: "ContributionType.OneTime",
    defaultMessage: [{
      "type": 0,
      "value": "One-time contribution"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_RECURRING */ .S.FINANCIAL_RECURRING]: {
    id: "ContributionType.Recurring",
    defaultMessage: [{
      "type": 0,
      "value": "Recurring contribution"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_GOAL */ .S.FINANCIAL_GOAL]: {
    id: "ContributionType.Goal",
    defaultMessage: [{
      "type": 0,
      "value": "Goal"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.EVENT_PARTICIPATE */ .S.EVENT_PARTICIPATE]: {
    id: "ContributionType.Event",
    defaultMessage: [{
      "type": 0,
      "value": "Event"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.EVENT_PASSED */ .S.EVENT_PASSED]: {
    id: "ContributionType.EventPassed",
    defaultMessage: [{
      "type": 0,
      "value": "Past event"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.TIER_PASSED */ .S.TIER_PASSED]: {
    id: "ContributionType.TierPassed",
    defaultMessage: [{
      "type": 0,
      "value": "Past tier"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.PRODUCT */ .S.PRODUCT]: {
    id: "ContributionType.Product",
    defaultMessage: [{
      "type": 0,
      "value": "Product"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.TICKET */ .S.TICKET]: {
    id: "ContributionType.Ticket",
    defaultMessage: [{
      "type": 0,
      "value": "Ticket"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.MEMBERSHIP */ .S.MEMBERSHIP]: {
    id: "ContributionType.Membership",
    defaultMessage: [{
      "type": 0,
      "value": "Membership"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.CHILD_COLLECTIVE */ .S.CHILD_COLLECTIVE]: {
    id: "ContributionType.ChildCollective",
    defaultMessage: [{
      "type": 0,
      "value": "Connected Collective"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.PROJECT */ .S.PROJECT]: {
    id: "ContributionType.Project",
    defaultMessage: [{
      "type": 0,
      "value": "Project"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.ARCHIVED_PROJECT */ .S.ARCHIVED_PROJECT]: {
    id: "ContributionType.ArchivedProject",
    defaultMessage: [{
      "type": 0,
      "value": "Archived Project"
    }]
  }
});

const getContributeCTA = type => {
  switch (type) {
    case _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.TICKET */ .S.TICKET:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "ContributeCard.BtnEvent",
        defaultMessage: [{
          "type": 0,
          "value": "RSVP"
        }]
      });

    case _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.EVENT_PARTICIPATE */ .S.EVENT_PARTICIPATE:
    case _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.EVENT_PASSED */ .S.EVENT_PASSED:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "ContributeCard.BtnViewEvent",
        defaultMessage: [{
          "type": 0,
          "value": "View Event"
        }]
      });

    case _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.CHILD_COLLECTIVE */ .S.CHILD_COLLECTIVE:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "ContributeCard.SeeCollective",
        defaultMessage: [{
          "type": 0,
          "value": "View Collective"
        }]
      });

    case _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.PROJECT */ .S.PROJECT:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "ContributeCard.SeeMore",
        defaultMessage: [{
          "type": 0,
          "value": "See More"
        }]
      });

    default:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "Contribute",
        defaultMessage: [{
          "type": 0,
          "value": "Contribute"
        }]
      });
  }
};

const getFooterHeading = type => {
  switch (type) {
    case _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.TICKET */ .S.TICKET:
    case _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.EVENT_PARTICIPATE */ .S.EVENT_PARTICIPATE:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "ContributeCard.footer.ticket",
        defaultMessage: [{
          "type": 0,
          "value": "Attending"
        }]
      });

    case _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.EVENT_PASSED */ .S.EVENT_PASSED:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "ContributeCard.footer.pastEvent",
        defaultMessage: [{
          "type": 0,
          "value": "Attended by"
        }]
      });

    default:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "ContributeCard.latestActivity",
        defaultMessage: [{
          "type": 0,
          "value": "Latest activity by"
        }]
      });
  }
};

const getCTAButtonStyle = type => {
  if (type === _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.TICKET */ .S.TICKET) {
    return 'secondary';
  } else if (type === _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.EVENT_PASSED */ .S.EVENT_PASSED) {
    return 'standard';
  } else {
    return 'primary';
  }
};
/**
 * A contribute card with a "Contribute" call to action
 */


const ContributeCard = _ref => {
  let {
    intl,
    title,
    type,
    route,
    buttonText,
    children,
    contributors,
    stats,
    hideContributors,
    image,
    disableCTA,
    hideCTA,
    onClickEdit,
    tier,
    isPreview
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const totalContributors = stats && stats.all || contributors && contributors.length || 0;

  if (isPreview) {
    route = '#';
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(StyledContributeCard, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(CoverImage, {
      image: image,
      isDisabled: disableCTA,
      contributionType: type,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        position: "absolute",
        bottom: "8px",
        left: "16px",
        background: "white",
        color: "black.700",
        fontWeight: "700",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        fontSize: "12px",
        children: intl.formatMessage(I18nContributionType[type])
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      px: 3,
      py: 3,
      flexDirection: "column",
      justifyContent: "space-between",
      flex: "1",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
        flexDirection: "column",
        flex: "1 1",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          fontSize: "20px",
          mt: 1,
          mb: 2,
          fontWeight: "bold",
          "data-cy": "contribute-title",
          color: "black.900",
          children: title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(Description, {
          "data-cy": "contribute-description",
          children: children
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        children: [!disableCTA && !hideCTA && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          href: route,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            buttonStyle: getCTAButtonStyle(type),
            width: 1,
            mb: 2,
            mt: 3,
            "data-cy": "contribute-btn",
            children: buttonText || getContributeCTA(type)
          })
        }), !hideContributors && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          mt: 3,
          height: 60,
          children: contributors && contributors.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
              alignItems: "center",
              mt: 3,
              mb: 2,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
                color: "black.700",
                fontSize: "12px",
                lineHeight: "16px",
                fontWeight: "500",
                letterSpacing: "0.06em",
                pr: 2,
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                children: getFooterHeading(type)
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                flex: "1",
                borderStyle: "solid",
                borderColor: "#DCDEE0"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
              children: [contributors.slice(0, _constants__WEBPACK_IMPORTED_MODULE_13__/* .MAX_CONTRIBUTORS_PER_CONTRIBUTE_CARD */ .Dc).map(contributor => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
                mx: 1,
                children: contributor.collectiveSlug ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                  href: `/${contributor.collectiveSlug}`,
                  title: contributor.name,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_4__/* .ContributorAvatar */ .BD, {
                    contributor: contributor,
                    radius: 32
                  })
                }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_4__/* .ContributorAvatar */ .BD, {
                  contributor: contributor,
                  radius: 32,
                  title: contributor.name
                })
              }, contributor.id)), totalContributors > _constants__WEBPACK_IMPORTED_MODULE_13__/* .MAX_CONTRIBUTORS_PER_CONTRIBUTE_CARD */ .Dc && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                ml: 2,
                pt: "0.7em",
                fontSize: "11px",
                fontWeight: "bold",
                color: "black.600",
                children: ["+ ", totalContributors - _constants__WEBPACK_IMPORTED_MODULE_13__/* .MAX_CONTRIBUTORS_PER_CONTRIBUTE_CARD */ .Dc]
              })]
            })]
          })
        }), onClickEdit && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            buttonStyle: "secondary",
            width: 1,
            mb: 2,
            mt: 3,
            "data-cy": "edit-btn",
            onClick: onClickEdit,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
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
            })
          })
        })]
      })]
    })]
  }));
};

ContributeCard.__docgenInfo = {
  "description": "A contribute card with a \"Contribute\" call to action",
  "methods": [],
  "displayName": "ContributeCard",
  "props": {
    "title": {
      "description": "Contribution title",
      "type": {
        "name": "node"
      },
      "required": true
    },
    "type": {
      "description": "Type of the contribution",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "Object.values(ContributionTypes)"
      },
      "required": true
    },
    "route": {
      "description": "Route for the contribute button",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "buttonText": {
      "description": "A custom button text to override the default one",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "image": {
      "description": "An image to display on the card hero",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "children": {
      "description": "The card body",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "disableCTA": {
      "description": "If true, the call to action will not be displayed",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "hideCTA": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "contributors": {
      "description": "Contributors",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "id": {
              "name": "string",
              "required": true
            },
            "name": {
              "name": "string",
              "required": true
            },
            "image": {
              "name": "string",
              "required": false
            },
            "collectiveSlug": {
              "name": "string",
              "required": false
            }
          }
        }
      },
      "required": false
    },
    "stats": {
      "description": "Contributors stats",
      "type": {
        "name": "shape",
        "value": {
          "all": {
            "name": "number",
            "required": false
          },
          "users": {
            "name": "number",
            "required": false
          },
          "organizations": {
            "name": "number",
            "required": false
          }
        }
      },
      "required": false
    },
    "hideContributors": {
      "description": "If true, contributors will not be displayed",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "intl": {
      "description": "@ignore from injectIntl",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "router": {
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
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "isPreview": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onClickEdit": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_1__.injectIntl)(ContributeCard));

/***/ }),

/***/ 98796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "f": () => (/* binding */ CONTRIBUTE_CARD_PADDING_X)
/* harmony export */ });
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42038);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16159);



const CONTRIBUTE_CARD_PADDING_X = [15, 18];
const ContributeCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu).attrs({
  px: CONTRIBUTE_CARD_PADDING_X
}).withConfig({
  displayName: "ContributeCardContainer",
  componentId: "sc-1p8faz7-0"
})((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  scrollSnapAlign: ['center', null, 'start']
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContributeCardContainer);

/***/ }),

/***/ 9881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(450);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25896);
/* harmony import */ var _Contribute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56127);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
const _excluded = ["intl", "collective", "contributors", "stats"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  title: {
    id: "CollectivePage.Contribute.Crypto.title",
    defaultMessage: [{
      "type": 0,
      "value": "Crypto Contribution"
    }]
  },
  description: {
    id: "CollectivePage.Contribute.Crypto.Description",
    defaultMessage: [{
      "type": 0,
      "value": "Make a crypto contribution."
    }]
  }
});

const ContributeCrypto = _ref => {
  let {
    intl,
    collective,
    contributors,
    stats
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Contribute__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    route: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getCollectivePageRoute */ .x0)(collective)}/donate/crypto`,
    type: _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_2__/* .ContributionTypes.FINANCIAL_CRYPTO */ .S.FINANCIAL_CRYPTO,
    title: intl.formatMessage(messages.title),
    contributors: contributors,
    stats: stats
  }, props), {}, {
    children: intl.formatMessage(messages.description)
  }));
};

ContributeCrypto.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ContributeCrypto",
  "props": {
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "stats": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "contributors": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": true
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_1__.injectIntl)(ContributeCrypto));

/***/ }),

/***/ 35744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(450);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25896);
/* harmony import */ var _Contribute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56127);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
const _excluded = ["intl", "collective", "contributors", "stats"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  title: {
    id: "Donation",
    defaultMessage: [{
      "type": 0,
      "value": "Donation"
    }]
  },
  description: {
    id: "CollectivePage.Contribute.Custom.Description",
    defaultMessage: [{
      "type": 0,
      "value": "Make a custom one-time or recurring contribution."
    }]
  }
});

const ContributeCustom = _ref => {
  let {
    intl,
    collective,
    contributors,
    stats
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Contribute__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    route: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getCollectivePageRoute */ .x0)(collective)}/donate`,
    type: _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_2__/* .ContributionTypes.FINANCIAL_CUSTOM */ .S.FINANCIAL_CUSTOM,
    title: intl.formatMessage(messages.title),
    contributors: contributors,
    stats: stats
  }, props), {}, {
    children: intl.formatMessage(messages.description)
  }));
};

ContributeCustom.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ContributeCustom",
  "props": {
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "stats": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "contributors": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": true
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_1__.injectIntl)(ContributeCustom));

/***/ }),

/***/ 78826:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51858);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(450);
/* harmony import */ var _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80642);
/* harmony import */ var _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12568);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17632);
/* harmony import */ var _lib_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47162);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62131);
/* harmony import */ var _lib_tier_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36648);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25896);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97079);
/* harmony import */ var _CollapsableText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20167);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(92129);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(51082);
/* harmony import */ var _StyledProgressBar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6121);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(90998);
/* harmony import */ var _Contribute__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(56127);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_18__]);
_StyledTooltip__WEBPACK_IMPORTED_MODULE_18__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const _excluded = ["intl", "collective", "tier", "isPreview"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }























const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  fallbackDescription: {
    id: "TierCard.DefaultDescription",
    defaultMessage: [{
      "type": 5,
      "value": "tierName",
      "options": {
        "backer": {
          "value": [{
            "type": 0,
            "value": "Become a backer"
          }]
        },
        "sponsor": {
          "value": [{
            "type": 0,
            "value": "Become a sponsor"
          }]
        },
        "other": {
          "value": [{
            "type": 0,
            "value": "Join us"
          }]
        }
      }
    }, {
      "type": 5,
      "value": "minAmount",
      "options": {
        "0": {
          "value": []
        },
        "other": {
          "value": [{
            "type": 0,
            "value": " for "
          }, {
            "type": 1,
            "value": "minAmountWithCurrency"
          }, {
            "type": 0,
            "value": " "
          }, {
            "type": 5,
            "value": "interval",
            "options": {
              "month": {
                "value": [{
                  "type": 0,
                  "value": "per month"
                }]
              },
              "year": {
                "value": [{
                  "type": 0,
                  "value": "per year"
                }]
              },
              "other": {
                "value": []
              }
            }
          }]
        }
      }
    }, {
      "type": 0,
      "value": " and support us"
    }]
  }
});

const getContributionTypeFromTier = (tier, isPassed) => {
  if (isPassed) {
    return _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.TIER_PASSED */ .S.TIER_PASSED;
  } else if ((0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .graphqlAmountValueInCents */ .kJ)(tier.goal) > 0) {
    return _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_GOAL */ .S.FINANCIAL_GOAL;
  } else if (tier.type === _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_5__/* .TierTypes.PRODUCT */ .x$.PRODUCT) {
    return _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.PRODUCT */ .S.PRODUCT;
  } else if (tier.type === _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_5__/* .TierTypes.TICKET */ .x$.TICKET) {
    return _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.TICKET */ .S.TICKET;
  } else if (tier.type === _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_5__/* .TierTypes.MEMBERSHIP */ .x$.MEMBERSHIP) {
    return _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.MEMBERSHIP */ .S.MEMBERSHIP;
  } else if (tier.interval) {
    if (tier.interval === _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_4__["default"].flexible) {
      return _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_CUSTOM */ .S.FINANCIAL_CUSTOM;
    } else {
      return _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_RECURRING */ .S.FINANCIAL_RECURRING;
    }
  } else {
    return _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_ONE_TIME */ .S.FINANCIAL_ONE_TIME;
  }
};

const TierTitle = ({
  collective,
  tier
}) => {
  const name = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_11__/* .capitalize */ .kC)(tier.name);

  if (!tier.useStandalonePage) {
    return name;
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
      content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "ContributeTier.GoToPage",
        defaultMessage: [{
          "type": 0,
          "value": "Go to full details page"
        }]
      }),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        as: _Link__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
        href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getCollectivePageRoute */ .x0)(collective)}/contribute/${tier.slug}-${tier.legacyId || tier.id}`,
        color: "black.900",
        hoverColor: "black.900",
        underlineOnHover: true,
        children: name
      })
    });
  }
};

const canContribute = (collective, LoggedInUser) => {
  if (!collective.isActive) {
    return false;
  } else if (collective.type === 'EVENT') {
    return !(0,_lib_events__WEBPACK_IMPORTED_MODULE_7__/* .isPastEvent */ .Up)(collective) || Boolean(LoggedInUser.isAdminOfCollectiveOrHost(collective));
  } else {
    return true;
  }
};

const ContributeTier = _ref => {
  let {
    intl,
    collective,
    tier,
    isPreview
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    LoggedInUser
  } = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
  const {
    stats
  } = tier;
  const currency = tier.currency || collective.currency;
  const isFlexibleAmount = tier.amountType === 'FLEXIBLE';
  const isFlexibleInterval = tier.interval === _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_4__["default"].flexible;
  const minAmount = isFlexibleAmount ? tier.minimumAmount : tier.amount;
  const amountRaised = stats?.[tier.interval && !isFlexibleInterval ? 'totalRecurringDonations' : 'totalDonated'] || 0;
  const tierIsExpired = (0,_lib_tier_utils__WEBPACK_IMPORTED_MODULE_9__/* .isTierExpired */ .l_)(tier);
  const tierType = getContributionTypeFromTier(tier, tierIsExpired);
  const hasNoneLeft = stats?.availableQuantity === 0;
  const canContributeToCollective = canContribute(collective, LoggedInUser);
  const isDisabled = !canContributeToCollective || tierIsExpired || hasNoneLeft;
  const tierLegacyId = tier.legacyId || tier.id;
  let description = tier.description;

  if (!tier.description) {
    description = intl.formatMessage(messages.fallbackDescription, {
      minAmount: minAmount || 0,
      tierName: tier.name,
      minAmountWithCurrency: minAmount && (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .formatCurrency */ .xG)(minAmount, currency, {
        locale: intl.locale
      }),
      interval: tier.interval ?? ''
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Contribute__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    route: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getCollectivePageRoute */ .x0)(collective)}/contribute/${tier.slug}-${tierLegacyId}/checkout`,
    title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(TierTitle, {
      collective: collective,
      tier: tier
    }),
    type: tierType,
    buttonText: tier.button,
    contributors: tier.contributors,
    stats: stats?.contributors,
    "data-cy": "contribute-card-tier",
    isPreview: isPreview,
    disableCTA: !isPreview && isDisabled,
    tier: tier,
    collective: collective
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
        children: [tier.maxQuantity > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
          fontSize: "1.1rem",
          color: "#e69900",
          textTransform: "uppercase",
          fontWeight: "500",
          letterSpacing: "1px",
          mb: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "tier.limited",
            values: {
              maxQuantity: tier.maxQuantity,
              availableQuantity: (stats?.availableQuantity ?? tier.availableQuantity) || 0
            },
            defaultMessage: [{
              "type": 0,
              "value": "LIMITED: "
            }, {
              "type": 1,
              "value": "availableQuantity"
            }, {
              "type": 0,
              "value": " LEFT OUT OF "
            }, {
              "type": 1,
              "value": "maxQuantity"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
          mb: 2,
          lineHeight: "22px",
          children: tier.useStandalonePage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
            children: [lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default()(description, {
              length: 150
            }), ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
              as: _Link__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
              whiteSpace: "nowrap",
              href: isPreview ? '#' : `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getCollectivePageRoute */ .x0)(collective)}/contribute/${tier.slug}-${tierLegacyId}`,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "ContributeCard.ReadMore",
                defaultMessage: [{
                  "type": 0,
                  "value": "Read more"
                }]
              })
            })]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_CollapsableText__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            text: description,
            maxLength: 150
          })
        }), tierType === _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_GOAL */ .S.FINANCIAL_GOAL && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
          mb: 1,
          mt: 3,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
            fontSize: "12px",
            color: "black.600",
            fontWeight: "400",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "Tier.AmountRaised",
              defaultMessage: [{
                "type": 1,
                "value": "amount"
              }, {
                "type": 0,
                "value": " of "
              }, {
                "type": 1,
                "value": "goalWithInterval"
              }, {
                "type": 0,
                "value": " raised"
              }],
              values: {
                amount: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                  amountStyles: {
                    fontWeight: '700',
                    color: 'black.700'
                  },
                  amount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .graphqlAmountValueInCents */ .kJ)(amountRaised),
                  currency: currency,
                  precision: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .getPrecisionFromAmount */ .vx)((0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .graphqlAmountValueInCents */ .kJ)(amountRaised))
                }),
                goalWithInterval: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                  amountStyles: {
                    fontWeight: '700',
                    color: 'black.700'
                  },
                  amount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .graphqlAmountValueInCents */ .kJ)(tier.goal),
                  currency: currency,
                  interval: tier.interval !== _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_4__["default"].flexible ? tier.interval : null,
                  precision: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .getPrecisionFromAmount */ .vx)((0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .graphqlAmountValueInCents */ .kJ)(tier.goal))
                })
              }
            }), ` (${Math.round(amountRaised / (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .graphqlAmountValueInCents */ .kJ)(tier.goal) * 100)}%)`]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
            mt: 1,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledProgressBar__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
              percentage: amountRaised / (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .graphqlAmountValueInCents */ .kJ)(tier.goal)
            })
          })]
        })]
      }), !isDisabled && (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .graphqlAmountValueInCents */ .kJ)(minAmount) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
        mt: 3,
        color: "black.700",
        children: [isFlexibleAmount && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__/* .Span */ .Dr, {
          display: "block",
          fontSize: "10px",
          textTransform: "uppercase",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "ContributeTier.StartsAt",
            defaultMessage: [{
              "type": 0,
              "value": "Starts at"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__/* .Span */ .Dr, {
          display: "block",
          "data-cy": "amount",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            amount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .graphqlAmountValueInCents */ .kJ)(minAmount),
            interval: tier.interval && tier.interval !== _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_4__["default"].flexible ? tier.interval : null,
            currency: currency,
            amountStyles: {
              fontSize: '24px',
              lineHeight: '32px',
              fontWeight: 'bold',
              color: 'black.900'
            },
            precision: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .getPrecisionFromAmount */ .vx)((0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .graphqlAmountValueInCents */ .kJ)(minAmount))
          })
        })]
      })]
    })
  }));
};

ContributeTier.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ContributeTier",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": true
          },
          "currency": {
            "name": "string",
            "required": true
          },
          "isActive": {
            "name": "bool",
            "required": false
          },
          "parentCollective": {
            "name": "shape",
            "value": {
              "slug": {
                "name": "string",
                "required": true
              }
            },
            "required": false
          }
        }
      },
      "required": false
    },
    "tier": {
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
          "legacyId": {
            "name": "number",
            "required": false
          },
          "slug": {
            "name": "string",
            "required": true
          },
          "name": {
            "name": "string",
            "required": true
          },
          "description": {
            "name": "string",
            "required": false
          },
          "currency": {
            "name": "string",
            "required": false
          },
          "useStandalonePage": {
            "name": "bool",
            "required": false
          },
          "interval": {
            "name": "string",
            "required": false
          },
          "amountType": {
            "name": "string",
            "required": false
          },
          "endsAt": {
            "name": "string",
            "required": false
          },
          "button": {
            "name": "string",
            "required": false
          },
          "goal": {
            "name": "union",
            "value": [{
              "name": "number"
            }, {
              "name": "object"
            }],
            "required": false
          },
          "minimumAmount": {
            "name": "union",
            "value": [{
              "name": "number"
            }, {
              "name": "object"
            }],
            "required": false
          },
          "amount": {
            "name": "union",
            "value": [{
              "name": "number"
            }, {
              "name": "object"
            }],
            "required": false
          },
          "maxQuantity": {
            "name": "number",
            "required": false
          },
          "availableQuantity": {
            "name": "number",
            "required": false
          },
          "stats": {
            "name": "shape",
            "value": {
              "totalRecurringDonations": {
                "name": "number",
                "required": false
              },
              "totalDonated": {
                "name": "number",
                "required": false
              },
              "contributors": {
                "name": "object",
                "required": false
              },
              "availableQuantity": {
                "name": "number",
                "required": false
              }
            },
            "required": false
          },
          "contributors": {
            "name": "arrayOf",
            "value": {
              "name": "object"
            },
            "required": false
          }
        }
      },
      "required": false
    },
    "intl": {
      "description": "@ignore",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "isPreview": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)(ContributeTier));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92129);
/* harmony import */ var _StyledRoundButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90012);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90998);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19146);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
const _excluded = ["route", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const CreateNewCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
  displayName: "CreateNew__CreateNewCard",
  componentId: "sc-1lycy8r-0"
})(["display:block;background:white;height:100%;width:", "px;border-radius:", "px;border:1px dashed #c0c5cc;padding:32px;cursor:pointer;a{text-decoration:none;display:block;}&:hover{background:", ";}"], _constants__WEBPACK_IMPORTED_MODULE_7__/* .CONTRIBUTE_CARD_WIDTH */ .TJ, _constants__WEBPACK_IMPORTED_MODULE_7__/* .CONTRIBUTE_CARD_BORDER_RADIUS */ .zx, props => props.theme.colors.black[50]);
/**
 * A special card dedicated to admins to show them a `Create new ...` card (ex: Create new tier).
 */

const CreateNew = _ref => {
  let {
    route,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(CreateNewCard, _objectSpread(_objectSpread({}, props), {}, {
    href: route,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, {
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          buttonStyle: "primary",
          fontSize: 25,
          children: "+"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Text__WEBPACK_IMPORTED_MODULE_5__.P, {
          mt: 3,
          color: "black.700",
          children: children
        })]
      })
    })
  }));
};

CreateNew.__docgenInfo = {
  "description": "A special card dedicated to admins to show them a `Create new ...` card (ex: Create new tier).",
  "methods": [],
  "displayName": "CreateNew",
  "props": {
    "route": {
      "description": "The link to redirect to when users click",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "children": {
      "description": "The label/description",
      "type": {
        "name": "node"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateNew);

/***/ }),

/***/ 94549:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10054);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_fa_solid_Ban__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81594);
/* harmony import */ var _styled_icons_fa_solid_Ban__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Ban__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9443);
/* harmony import */ var _styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87268);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var _ApplicationRejectionReasonModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95621);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_7__]);
_StyledTooltip__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const AcceptRejectButtons = ({
  collective,
  isLoading,
  onApprove,
  onReject,
  disabled,
  disabledMessage,
  customButton
}) => {
  const {
    0: showRejectModal,
    1: setShowRejectModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: action,
    1: setAction
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
    alignItems: "baseline",
    gap: "10px",
    children: [disabledMessage && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      content: disabledMessage,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
        color: "black.600",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_1__.InfoCircle, {
          size: 24
        })
      })
    }), customButton ? customButton({
      onClick: () => {
        setAction('APPROVE');
        onApprove();
      },
      disabled: disabled || isLoading,
      loading: isLoading && action === 'APPROVE',
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "actions.approve",
        defaultMessage: [{
          "type": 0,
          "value": "Approve"
        }]
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      minWidth: 100,
      buttonSize: "tiny",
      buttonStyle: "successSecondary",
      height: 32,
      disabled: disabled || isLoading,
      loading: isLoading && action === 'APPROVE',
      "data-cy": `${collective.slug}-approve`,
      onClick: () => {
        setAction('APPROVE');
        onApprove();
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_3__.Check, {
        size: 12
      }), "\xA0 ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "actions.approve",
        defaultMessage: [{
          "type": 0,
          "value": "Approve"
        }]
      })]
    }), customButton ? customButton({
      onClick: () => setShowRejectModal(true),
      disabled: isLoading,
      loading: isLoading && action === 'REJECT',
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "actions.reject",
        defaultMessage: [{
          "type": 0,
          "value": "Reject"
        }]
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      minWidth: 100,
      buttonSize: "tiny",
      buttonStyle: "dangerSecondary",
      height: 32,
      onClick: () => setShowRejectModal(true),
      disabled: isLoading,
      loading: isLoading && action === 'REJECT',
      "data-cy": `${collective.slug}-reject`,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_icons_fa_solid_Ban__WEBPACK_IMPORTED_MODULE_2__.Ban, {
        size: 12
      }), "\xA0 ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "actions.reject",
        defaultMessage: [{
          "type": 0,
          "value": "Reject"
        }]
      })]
    }), showRejectModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_ApplicationRejectionReasonModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      collective: collective,
      onClose: () => setShowRejectModal(false),
      onConfirm: message => {
        setAction('REJECT');
        setShowRejectModal(false);
        onReject(message);
      }
    })]
  });
};

AcceptRejectButtons.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AcceptRejectButtons",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "number",
            "required": false
          },
          "slug": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "isLoading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "disabled": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "disabledMessage": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "onApprove": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onReject": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "customButton": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AcceptRejectButtons);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_feather_Lock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(371);
/* harmony import */ var _styled_icons_feather_Lock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Lock__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97619);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87268);
/* harmony import */ var _StyledCheckbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41433);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51082);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71792);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(93150);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);

const _excluded = ["collective", "onClose", "onConfirm"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

















const ApplicationMessageModal = _ref => {
  let {
    collective,
    onClose,
    onConfirm
  } = _ref,
      modalProps = _objectWithoutProperties(_ref, _excluded);

  const {
    0: message,
    1: setMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: isPrivate,
    1: setIsPrivate
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
    onClose: onClose,
    width: "576px"
  }, modalProps), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_11__/* .ModalHeader */ .xB, {
      hideCloseIcon: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
        justifyContent: "space-between",
        flexDirection: ['column', 'row'],
        width: "100%",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
            collective: collective,
            radius: 40
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
            ml: 3,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__.P, {
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "bold",
              children: collective.name
            }), collective.website && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__.P, {
              fontSize: "12px",
              lineHeight: "16px",
              fontWeight: "400",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                href: collective.website,
                color: "black.700",
                openInNewTabNoFollow: true,
                children: collective.website
              })
            })]
          })]
        }), collective.admins.totalCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          mt: [3, 0],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
            alignItems: "center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__/* .Span */ .Dr, {
              color: "black.500",
              fontSize: "12px",
              fontWeight: "500",
              letterSpacing: "0.06em",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "Admins",
                defaultMessage: [{
                  "type": 0,
                  "value": "Admins"
                }]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
            mt: 2,
            alignItems: "center",
            children: [collective.admins.nodes.slice(0, 6).map(admin => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
              mr: 1,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                collective: admin.account,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
                  collective: admin.account,
                  radius: "24px"
                })
              })
            }, admin.id)), collective.admins.totalCount > 6 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
              ml: 2,
              pt: "0.7em",
              fontSize: "12px",
              color: "black.600",
              children: ["+ ", collective.admins.totalCount - 6]
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_11__/* .ModalBody */ .fe, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__.P, {
        fontSize: "16px",
        lineHeight: "24px",
        mb: 2,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "SendMessageTo",
          defaultMessage: [{
            "type": 0,
            "value": "Send a message to "
          }, {
            "type": 1,
            "value": "accountName"
          }],
          values: {
            accountName: collective.name
          }
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__.P, {
        color: "black.700",
        lineHeight: "20px",
        mb: 2,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "HostApplicationMessageInfo",
          defaultMessage: [{
            "type": 0,
            "value": "The message will be public by default. If you want it to be private, tick the private checkbox."
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          width: "100%",
          resize: "none",
          autoSize: true,
          minHeight: 200,
          value: message,
          onChange: ({
            target
          }) => setMessage(target.value),
          showCount: true,
          minLength: 3,
          maxLength: 3000
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          mt: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            name: "private",
            checked: isPrivate,
            onChange: ({
              checked
            }) => setIsPrivate(checked),
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_13__/* .Span */ .Dr, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_styled_icons_feather_Lock__WEBPACK_IMPORTED_MODULE_2__.Lock, {
                size: "1em"
              }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledSpan, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                  id: "ApplicationMessageModal.Private",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Private (email to the Collective admins)"
                  }]
                })
              })]
            })
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_11__/* .ModalFooter */ .mz, {
      isFullWidth: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        display: "flex",
        justifyContent: "flex-end",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          buttonStyle: "secondary",
          mx: 20,
          minWidth: 95,
          onClick: onClose,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "actions.cancel",
            defaultMessage: [{
              "type": 0,
              "value": "Cancel"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          buttonStyle: "primary",
          "data-cy": "action",
          minWidth: 95,
          onClick: () => onConfirm(message, isPrivate, () => setMessage('')),
          disabled: !message,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "SendMessage",
            defaultMessage: [{
              "type": 0,
              "value": "Send message"
            }]
          })
        })]
      })
    })]
  }));
};

ApplicationMessageModal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ApplicationMessageModal",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "onConfirm": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "onClose": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApplicationMessageModal);

var _StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Text__WEBPACK_IMPORTED_MODULE_13__/* .Span */ .Dr).withConfig({
  displayName: "ApplicationMessageModal___StyledSpan",
  componentId: "sc-1emfj6v-0"
})({
  verticalAlign: 'middle'
});

/***/ }),

/***/ 95621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_feather_Lock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(371);
/* harmony import */ var _styled_icons_feather_Lock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Lock__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97619);
/* harmony import */ var _LinkContributor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42388);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87268);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51082);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71792);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93150);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
const _excluded = ["collective", "onClose", "onConfirm"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
















const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  placeholder: {
    id: "appRejectionReason.placeholder",
    defaultMessage: [{
      "type": 0,
      "value": "Why is this application being rejected?"
    }]
  }
});

const ApplicationRejectionReasonModal = _ref => {
  let {
    collective,
    onClose,
    onConfirm
  } = _ref,
      modalProps = _objectWithoutProperties(_ref, _excluded);

  const {
    0: rejectionReason,
    1: setRejectionReason
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const isLegacyAPI = !collective.admins;
  const admins = collective.admins?.nodes || collective.coreContributors; // compatibility with GQLV1

  const totalAdminCount = collective.admins?.totalCount || admins.length;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
    onClose: onClose,
    width: "576px"
  }, modalProps), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_10__/* .ModalHeader */ .xB, {
      hideCloseIcon: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
        justifyContent: "space-between",
        flexDirection: ['column', 'row'],
        width: "100%",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
            collective: collective,
            radius: 40
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
            ml: 3,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.P, {
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "bold",
              children: collective.name
            }), collective.website && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.P, {
              fontSize: "12px",
              lineHeight: "16px",
              fontWeight: "400",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                href: collective.website,
                color: "black.700",
                openInNewTabNoFollow: true,
                children: collective.website
              })
            })]
          })]
        }), totalAdminCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
          mt: [3, 0],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
            alignItems: "center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
              color: "black.500",
              fontSize: "12px",
              fontWeight: "500",
              letterSpacing: "0.06em",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "Admins",
                defaultMessage: [{
                  "type": 0,
                  "value": "Admins"
                }]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
            mt: 2,
            alignItems: "center",
            children: [admins.slice(0, 6).map(admin => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
              mr: 1,
              children: isLegacyAPI ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_LinkContributor__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                contributor: admin,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_3__/* .ContributorAvatar */ .BD, {
                  contributor: admin,
                  radius: "24px"
                })
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                collective: admin.account,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
                  collective: admin.account,
                  radius: "24px"
                })
              })
            }, admin.id)), totalAdminCount > 6 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
              ml: 2,
              pt: "0.7em",
              fontSize: "12px",
              color: "black.600",
              children: ["+ ", totalAdminCount - 6]
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_10__/* .ModalBody */ .fe, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.P, {
        color: "red.900",
        fontSize: "16px",
        lineHeight: "24px",
        mb: 2,
        mt: 26,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "OptionalFieldLabel",
          defaultMessage: [{
            "type": 1,
            "value": "field"
          }, {
            "type": 0,
            "value": " (optional)"
          }],
          values: {
            field: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "ApplicationRejectionReasonModal.Help",
              defaultMessage: [{
                "type": 0,
                "value": "Help "
              }, {
                "type": 1,
                "value": "accountName"
              }, {
                "type": 0,
                "value": " understand why you rejected their application"
              }],
              values: {
                accountName: collective.name
              }
            })
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_12__.P, {
        color: "black.700",
        lineHeight: "20px",
        mb: 2,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "PrivateMessageToCollectiveAdmins",
          defaultMessage: [{
            "type": 0,
            "value": "The message will be sent as a private email to the admins."
          }]
        }), "\xA0\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_styled_icons_feather_Lock__WEBPACK_IMPORTED_MODULE_1__.Lock, {
          size: "1.1em"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          width: "100%",
          resize: "none",
          autoSize: true,
          minHeight: 200,
          value: rejectionReason,
          onChange: ({
            target
          }) => setRejectionReason(target.value),
          placeholder: intl.formatMessage(messages.placeholder)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.P, {
          mt: 1,
          fontSize: "11px",
          color: "black.600",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "forms.optional",
            defaultMessage: [{
              "type": 0,
              "value": "Optional"
            }]
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_10__/* .ModalFooter */ .mz, {
      isFullWidth: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        display: "flex",
        justifyContent: "flex-end",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          buttonStyle: "dangerSecondary",
          mx: 20,
          minWidth: 95,
          onClick: onClose,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "actions.cancel",
            defaultMessage: [{
              "type": 0,
              "value": "Cancel"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          buttonStyle: "danger",
          "data-cy": "action",
          minWidth: 95,
          onClick: () => onConfirm(rejectionReason),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "actions.reject",
            defaultMessage: [{
              "type": 0,
              "value": "Reject"
            }]
          })
        })]
      })
    })]
  }));
};

ApplicationRejectionReasonModal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ApplicationRejectionReasonModal",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "onConfirm": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "onClose": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApplicationRejectionReasonModal);

/***/ }),

/***/ 46875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_boxicons_regular_CheckShield__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47435);
/* harmony import */ var _styled_icons_boxicons_regular_CheckShield__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_CheckShield__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_fa_solid_Ban__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81594);
/* harmony import */ var _styled_icons_fa_solid_Ban__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Ban__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9443);
/* harmony import */ var _styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14195);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var spdx_license_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84103);
/* harmony import */ var spdx_license_list__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(spdx_license_list__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16159);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90998);
/* harmony import */ var _applications_InfoSectionHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(86433);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);















dayjs__WEBPACK_IMPORTED_MODULE_4___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_5___default()));

const FieldWithValidationBadge = ({
  field,
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
    alignItems: "center",
    gridGap: "8px",
    children: [field.isValid ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_3__.Check, {
      size: "12",
      color: "#256643"
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_styled_icons_fa_solid_Ban__WEBPACK_IMPORTED_MODULE_2__.Ban, {
      size: "12",
      color: "#cc2955"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
      children: children({
        field
      })
    })]
  });
};

const msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)({
  license: {
    id: "PendingApplication.RepoInfo.License",
    defaultMessage: [{
      "type": 0,
      "value": "License: "
    }, {
      "type": 1,
      "value": "license"
    }]
  },
  licenseManually: {
    id: "PendingApplication.RepoInfo.LicenseManually",
    defaultMessage: [{
      "type": 0,
      "value": "(user specified \""
    }, {
      "type": 1,
      "value": "license"
    }, {
      "type": 0,
      "value": "\" manually)"
    }]
  },
  lastCommitTimeAgo: {
    id: "PendingApplication.RepoInfo.LastCommitTimeAgo",
    defaultMessage: [{
      "type": 0,
      "value": "Last commit "
    }, {
      "type": 1,
      "value": "timeAgo"
    }]
  },
  orgAccount: {
    id: "PendingApplication.RepoInfo.OrgAccount",
    defaultMessage: [{
      "type": 0,
      "value": "Organization account"
    }]
  },
  personalAccount: {
    id: "PendingApplication.RepoInfo.PersonalAccount",
    defaultMessage: [{
      "type": 0,
      "value": "Personal account"
    }]
  },
  isFork: {
    id: "PendingApplication.RepoInfo.IsFork",
    defaultMessage: [{
      "type": 0,
      "value": "This is a fork"
    }]
  },
  isNotFork: {
    id: "PendingApplication.RepoInfo.IsNotFork",
    defaultMessage: [{
      "type": 0,
      "value": "This is not a fork"
    }]
  },
  collaboratorsCount: {
    id: "PendingApplication.RepoInfo.CollaboratorsCount",
    defaultMessage: [{
      "type": 1,
      "value": "count"
    }, {
      "type": 0,
      "value": " collaborators"
    }]
  },
  starsCount: {
    id: "PendingApplication.RepoInfo.StarsCount",
    defaultMessage: [{
      "type": 1,
      "value": "count"
    }, {
      "type": 0,
      "value": " stars"
    }]
  },
  isRepoAdmin: {
    id: "PendingApplication.RepoInfo.IsRepoAdmin",
    defaultMessage: [{
      "type": 0,
      "value": "User is admin of the repository"
    }]
  },
  isNotRepoAdmin: {
    id: "PendingApplication.RepoInfo.IsNotRepoAdmin",
    defaultMessage: [{
      "type": 0,
      "value": "User is not admin of the repository"
    }]
  }
});

function ValidatedRepositoryInfo({
  customData
}) {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)();
  const {
    repositoryUrl,
    licenseSpdxId,
    validatedRepositoryInfo
  } = customData;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    mb: 3,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_applications_InfoSectionHeader__WEBPACK_IMPORTED_MODULE_12__/* .InfoSectionHeader */ .f, {
      icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_styled_icons_boxicons_regular_CheckShield__WEBPACK_IMPORTED_MODULE_1__.CheckShield, {
        size: 16,
        color: "#75777A"
      }),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
        id: "PendingApplication.RepoInfo.Header",
        defaultMessage: [{
          "type": 0,
          "value": "Validated repository information"
        }]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
      flexDirection: "column",
      gridGap: '6px',
      mb: 4,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
        mb: 1,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          href: repositoryUrl,
          children: repositoryUrl.split('//')[1]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(FieldWithValidationBadge, {
        field: validatedRepositoryInfo.fields.licenseSpdxId,
        children: ({
          field
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
          children: [intl.formatMessage(msg.license, {
            license: !field?.value || field.value === 'NOASSERTION' ? 'Not found' : `${field.value} (${(spdx_license_list__WEBPACK_IMPORTED_MODULE_7___default())[field.value]?.name || 'Unknown'})`
          }), ' ', licenseSpdxId && licenseSpdxId !== field?.value && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__/* .Span */ .Dr, {
            color: "black.600",
            children: intl.formatMessage(msg.licenseManually, {
              license: licenseSpdxId
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(FieldWithValidationBadge, {
        field: validatedRepositoryInfo.fields.lastCommitDate,
        children: ({
          field
        }) => intl.formatMessage(msg.lastCommitTimeAgo, {
          timeAgo: field ? dayjs__WEBPACK_IMPORTED_MODULE_4___default()(field.value).fromNow() : 'not found'
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(FieldWithValidationBadge, {
        field: validatedRepositoryInfo.fields.isOwnedByOrg,
        children: ({
          field
        }) => field.value ? intl.formatMessage(msg.orgAccount) : intl.formatMessage(msg.personalAccount)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(FieldWithValidationBadge, {
        field: validatedRepositoryInfo.fields.isFork,
        children: ({
          field
        }) => field.value ? intl.formatMessage(msg.isFork) : intl.formatMessage(msg.isNotFork)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(FieldWithValidationBadge, {
        field: validatedRepositoryInfo.fields.collaboratorsCount,
        children: ({
          field
        }) => intl.formatMessage(msg.collaboratorsCount, {
          count: field.value
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(FieldWithValidationBadge, {
        field: validatedRepositoryInfo.fields.starsCount,
        children: ({
          field
        }) => intl.formatMessage(msg.starsCount, {
          count: field.value
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(FieldWithValidationBadge, {
        field: validatedRepositoryInfo.fields.isAdmin,
        children: ({
          field
        }) => field.value ? intl.formatMessage(msg.isRepoAdmin) : intl.formatMessage(msg.isNotRepoAdmin)
      })]
    })]
  });
}

ValidatedRepositoryInfo.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ValidatedRepositoryInfo",
  "props": {
    "customData": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "repositoryUrl": {
            "name": "string",
            "required": true
          },
          "licenseSpdxId": {
            "name": "string",
            "required": false
          },
          "validatedRepositoryInfo": {
            "name": "shape",
            "value": {
              "fields": {
                "name": "shape",
                "value": {
                  "licenseSpdxId": {
                    "name": "custom",
                    "raw": "ValidatedFieldPropType",
                    "required": false
                  },
                  "lastCommitDate": {
                    "name": "custom",
                    "raw": "ValidatedFieldPropType",
                    "required": false
                  },
                  "isOwnedByOrg": {
                    "name": "custom",
                    "raw": "ValidatedFieldPropType",
                    "required": false
                  },
                  "isFork": {
                    "name": "custom",
                    "raw": "ValidatedFieldPropType",
                    "required": false
                  },
                  "collaboratorsCount": {
                    "name": "custom",
                    "raw": "ValidatedFieldPropType",
                    "required": false
                  },
                  "starsCount": {
                    "name": "custom",
                    "raw": "ValidatedFieldPropType",
                    "required": false
                  },
                  "isAdmin": {
                    "name": "custom",
                    "raw": "ValidatedFieldPropType",
                    "required": false
                  }
                },
                "required": true
              }
            },
            "required": true
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidatedRepositoryInfo);

/***/ }),

/***/ 86433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ InfoSectionHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16159);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(173);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const InfoSectionHeader = ({
  children,
  icon = null
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
  alignItems: "center",
  mb: 3,
  children: [icon && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .xu, {
    mr: 2,
    children: icon
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
    fontSize: "11px",
    fontWeight: "500",
    color: "black.500",
    textTransform: "uppercase",
    mr: 2,
    children: children
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    borderColor: "black.200",
    flex: "1 1"
  })]
});
InfoSectionHeader.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "InfoSectionHeader",
  "props": {
    "icon": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "required": false,
      "tsType": {
        "name": "ReactReactNode",
        "raw": "React.ReactNode"
      },
      "description": ""
    },
    "children": {
      "required": true,
      "tsType": {
        "name": "ReactReactNode",
        "raw": "React.ReactNode"
      },
      "description": ""
    }
  }
};

/***/ }),

/***/ 87659:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PT": () => (/* binding */ processApplicationMutation),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "qM": () => (/* binding */ processApplicationAccountFields)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_feather_AlertTriangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56758);
/* harmony import */ var _styled_icons_feather_AlertTriangle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_AlertTriangle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_feather_ExternalLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70441);
/* harmony import */ var _styled_icons_feather_ExternalLink__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_ExternalLink__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_feather_Mail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71362);
/* harmony import */ var _styled_icons_feather_Mail__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Mail__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5700);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(32651);
/* harmony import */ var _lib_i18n_ocf_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13124);
/* harmony import */ var _lib_styled_components_shared_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72004);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(16159);
/* harmony import */ var _I18nCollectiveTags__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(82497);
/* harmony import */ var _icons_CommentIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6845);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(92129);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(97619);
/* harmony import */ var _ocf_host_application_ApplicationForm__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(48247);
/* harmony import */ var _StyledCollectiveCard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(41216);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(173);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(51082);
/* harmony import */ var _StyledRoundButton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(90012);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(36422);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(31330);
/* harmony import */ var _AcceptRejectButtons__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(94549);
/* harmony import */ var _ApplicationMessageModal__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(49407);
/* harmony import */ var _ValidatedRepositoryInfo__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(46875);
/* harmony import */ var _InfoSectionHeader__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(86433);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ocf_host_application_ApplicationForm__WEBPACK_IMPORTED_MODULE_21__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_27__, _ToastProvider__WEBPACK_IMPORTED_MODULE_29__, _AcceptRejectButtons__WEBPACK_IMPORTED_MODULE_30__]);
([_ocf_host_application_ApplicationForm__WEBPACK_IMPORTED_MODULE_21__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_27__, _ToastProvider__WEBPACK_IMPORTED_MODULE_29__, _AcceptRejectButtons__WEBPACK_IMPORTED_MODULE_30__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

const _excluded = ["host", "application"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




































const ApplicationBody = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
  displayName: "PendingApplication__ApplicationBody",
  componentId: "sc-rzlnb-0"
})(["height:267px;overflow-y:auto;", " ", " @media (pointer:fine){&::-webkit-scrollbar{width:4px;border-radius:8px;}}"], styled_system__WEBPACK_IMPORTED_MODULE_8__.padding, _lib_styled_components_shared_styles__WEBPACK_IMPORTED_MODULE_13__/* .CustomScrollbarCSS */ .T);
const CollectiveCardBody = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
  displayName: "PendingApplication__CollectiveCardBody",
  componentId: "sc-rzlnb-1"
})(["padding:8px 16px 16px 16px;overflow-y:auto;height:100%;", " @media (pointer:fine){&::-webkit-scrollbar{width:4px;border-radius:8px;}}"], _lib_styled_components_shared_styles__WEBPACK_IMPORTED_MODULE_13__/* .CustomScrollbarCSS */ .T);
const processApplicationAccountFields = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  fragment ProcessHostApplicationFields on AccountWithHost {
    isActive
    approvedAt
    isApproved
    host {
      id
    }
  }
`;
const processApplicationMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  mutation ProcessHostApplication(
    $host: AccountReferenceInput!
    $account: AccountReferenceInput!
    $action: ProcessHostApplicationAction!
    $message: String
  ) {
    processHostApplication(host: $host, account: $account, action: $action, message: $message) {
      account {
        id
        ... on AccountWithHost {
          ...ProcessHostApplicationFields
        }
      }
      conversation {
        id
        slug
      }
    }
  }
  ${processApplicationAccountFields}
`;
const msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)({
  approved: {
    id: "HostApplication.Approved",
    defaultMessage: [{
      "type": 1,
      "value": "name"
    }, {
      "type": 0,
      "value": " has been approved"
    }]
  },
  rejected: {
    id: "HostApplication.Rejected",
    defaultMessage: [{
      "type": 1,
      "value": "name"
    }, {
      "type": 0,
      "value": " has been rejected"
    }]
  }
});
const ACTIONS = {
  APPROVE: 'APPROVE',
  REJECT: 'REJECT',
  SEND_PRIVATE_MESSAGE: 'SEND_PRIVATE_MESSAGE',
  SEND_PUBLIC_MESSAGE: 'SEND_PUBLIC_MESSAGE'
};

const StatusTag = ({
  status
}) => {
  const tagProps = {
    textTransform: 'uppercase',
    mr: 2
  };

  switch (status) {
    case 'PENDING':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, tagProps), {}, {
        type: "warning",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "Pending",
          defaultMessage: [{
            "type": 0,
            "value": "Pending"
          }]
        })
      }));

    case 'APPROVED':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, tagProps), {}, {
        type: "success",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "PendingApplication.Approved",
          defaultMessage: [{
            "type": 0,
            "value": "Approved"
          }]
        })
      }));

    case 'REJECTED':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, tagProps), {}, {
        type: "error",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "PendingApplication.Rejected",
          defaultMessage: [{
            "type": 0,
            "value": "Rejected"
          }]
        })
      }));

    default:
      return null;
  }
};

const getStatus = (isDone, latestAction) => {
  if (!isDone) {
    return 'PENDING';
  } else if (latestAction === ACTIONS.REJECT) {
    return 'REJECTED';
  } else if (latestAction === ACTIONS.APPROVE) {
    return 'APPROVED';
  }
};

const getSuccessToast = (intl, action, collective, result) => {
  if (action === ACTIONS.SEND_PRIVATE_MESSAGE || action === ACTIONS.SEND_PUBLIC_MESSAGE) {
    const conversation = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(result, 'data.processHostApplication.conversation');

    return {
      type: _ToastProvider__WEBPACK_IMPORTED_MODULE_29__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
      duration: 10000,
      title: conversation ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
        id: "Conversation.created",
        defaultMessage: [{
          "type": 0,
          "value": "Conversation created"
        }]
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
        id: "MessageSent",
        defaultMessage: [{
          "type": 0,
          "value": "Message sent"
        }]
      }),
      message: conversation && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_StyledLink__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
        as: _Link__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z,
        openInNewTab: true,
        href: `/${collective.slug}/conversations/${conversation.slug}-${conversation.id}`,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "Conversation.view",
          defaultMessage: [{
            "type": 0,
            "value": "View Conversation"
          }]
        }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_styled_icons_feather_ExternalLink__WEBPACK_IMPORTED_MODULE_4__.ExternalLink, {
          size: "1em",
          style: {
            verticalAlign: 'middle'
          }
        })]
      })
    };
  } else if (action === ACTIONS.APPROVE) {
    return {
      type: _ToastProvider__WEBPACK_IMPORTED_MODULE_29__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
      message: intl.formatMessage(msg.approved, {
        name: collective.name
      })
    };
  } else if (action === ACTIONS.REJECT) {
    return {
      type: _ToastProvider__WEBPACK_IMPORTED_MODULE_29__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
      message: intl.formatMessage(msg.rejected, {
        name: collective.name
      })
    };
  } else {
    return {
      type: _ToastProvider__WEBPACK_IMPORTED_MODULE_29__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS
    };
  }
};

const UserInputContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_Text__WEBPACK_IMPORTED_MODULE_28__.P).attrs({
  fontSize: '14px',
  lineHeight: '24px',
  fontStyle: 'italic',
  color: 'black.800',
  fontWeight: '400'
}).withConfig({
  displayName: "PendingApplication__UserInputContainer",
  componentId: "sc-rzlnb-2"
})([""]);

const PendingApplication = _ref => {
  let {
    host,
    application
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)();
  const [isDone, setIsDone] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [latestAction, setLatestAction] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
  const [showContactModal, setShowContactModal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_29__/* .useToasts */ .e1)();
  const collective = application.account;
  const [callProcessApplication, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(processApplicationMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_11__/* .API_V2_CONTEXT */ .T
  });
  const hasNothingToShow = !application.message && !application.customData;
  const requiresMinimumNumberOfAdmins = host?.policies?.COLLECTIVE_MINIMUM_ADMINS?.numberOfAdmins > 1;
  const hasEnoughAdmins = requiresMinimumNumberOfAdmins && application.account.admins.totalCount >= host.policies.COLLECTIVE_MINIMUM_ADMINS.numberOfAdmins;
  const hasEnoughInvitedAdmins = requiresMinimumNumberOfAdmins && application.account.admins.totalCount + application.account.memberInvitations.length >= host.policies.COLLECTIVE_MINIMUM_ADMINS.numberOfAdmins;

  const processApplication = async (action, message, onSuccess) => {
    setIsDone(false);
    setLatestAction(action);

    try {
      const variables = {
        host: {
          id: host.id
        },
        account: {
          id: collective.id
        },
        action,
        message
      };
      const result = await callProcessApplication({
        variables
      });
      addToast(getSuccessToast(intl, action, collective, result));

      if (action === ACTIONS.APPROVE || action === ACTIONS.REJECT) {
        setIsDone(true);
      }

      if (onSuccess) {
        onSuccess();
      }

      return result;
    } catch (e) {
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_29__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_10__/* .i18nGraphqlException */ .t2)(intl, e)
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
    id: `application-${collective.legacyId}`,
    display: "flex",
    flexDirection: ['column', 'row'],
    border: "1px solid #DCDEE0",
    borderRadius: "16px",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledCollectiveCard__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, _objectSpread(_objectSpread({
      collective: collective,
      bodyHeight: 258,
      width: ['100%', 224],
      borderRadius: [16, '16px 0 0 16px'],
      borderWidth: "0",
      showWebsite: true,
      tag: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
        mt: 12,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(StatusTag, {
          status: getStatus(isDone, latestAction)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
          variant: "rounded-right",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_I18nCollectiveTags__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            tags: (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_9__/* .getCollectiveMainTag */ .CJ)(lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(collective, 'host.id'), collective.tags, collective.type)
          })
        })]
      })
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(CollectiveCardBody, {
        children: [collective.admins.totalCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Box */ .xu, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
            alignItems: "center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_28__/* .Span */ .Dr, {
              color: "black.500",
              fontSize: "9px",
              textTransform: "uppercase",
              fontWeight: "500",
              letterSpacing: "0.06em",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "Admins",
                defaultMessage: [{
                  "type": 0,
                  "value": "Admins"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
              borderColor: "black.300",
              flex: "1 1",
              ml: 2
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
            mt: 2,
            alignItems: "center",
            children: [collective.admins.nodes.slice(0, 6).map(admin => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Box */ .xu, {
              mr: 1,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                collective: admin.account,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, {
                  collective: admin.account,
                  radius: "24px"
                })
              })
            }, admin.id)), collective.admins.totalCount > 6 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
              ml: 2,
              pt: "0.7em",
              fontSize: "12px",
              color: "black.600",
              children: ["+ ", collective.admins.totalCount - 6]
            })]
          })]
        }), collective.description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Box */ .xu, {
          mt: 3,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
            alignItems: "center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_28__/* .Span */ .Dr, {
              color: "black.500",
              fontSize: "9px",
              textTransform: "uppercase",
              fontWeight: "500",
              letterSpacing: "0.06em",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "OurPurpose",
                defaultMessage: [{
                  "type": 0,
                  "value": "Our purpose"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
              borderColor: "black.300",
              flex: "1 1",
              ml: 2
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_28__.P, {
            mt: 1,
            fontSize: "12px",
            lineHeight: "18px",
            color: "black.800",
            children: collective.description
          })]
        })]
      })
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
      background: "white",
      flex: "1 1",
      borderLeft: [null, '1px solid #DCDEE0'],
      borderRadius: [16, '0 16px 16px 0'],
      minWidth: 300,
      display: "flex",
      flexDirection: "column",
      alignItems: "space-between",
      height: 332,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Container__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        px: "4px",
        position: "relative",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(ApplicationBody, {
          p: [12, 22],
          children: [application.customData?.validatedRepositoryInfo && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_ValidatedRepositoryInfo__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
            customData: application.customData
          }), (application.message || hasNothingToShow) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Box */ .xu, {
            mb: 3,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_InfoSectionHeader__WEBPACK_IMPORTED_MODULE_33__/* .InfoSectionHeader */ .f, {
              icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_icons_CommentIcon__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                size: 16
              }),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "PendingApplication.Message",
                defaultMessage: [{
                  "type": 0,
                  "value": "Message to Fiscal Host"
                }]
              })
            }), application.message ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(UserInputContainer, {
              as: "q",
              children: application.message
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_28__.P, {
              color: "black.500",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "NoMessage",
                defaultMessage: [{
                  "type": 0,
                  "value": "No message provided"
                }]
              })
            })]
          }), application.customData && Object.keys(application.customData).map(key => {
            // Don't show repository info twice as it is displayed on top in a special component
            if (key === 'validatedRepositoryInfo' || key === 'repositoryUrl' && application.customData.validatedRepositoryInfo || key === 'licenseSpdxId' && application.customData.validatedRepositoryInfo) {
              return null;
            }

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
              mb: 3,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_InfoSectionHeader__WEBPACK_IMPORTED_MODULE_33__/* .InfoSectionHeader */ .f, {
                children: (0,_lib_i18n_ocf_form__WEBPACK_IMPORTED_MODULE_12__/* .i18nOCFApplicationFormLabel */ .R)(intl, key)
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(UserInputContainer, {
                children: _ocf_host_application_ApplicationForm__WEBPACK_IMPORTED_MODULE_21__/* .APPLICATION_DATA_AMOUNT_FIELDS.includes */ .d.includes(key) && typeof application.customData[key] === 'number' ? `${application.customData[key] / 100}$` : application.customData[key]
              })]
            }, key);
          })]
        })
      }), !isDone && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        display: "flex",
        p: 3,
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: "1px solid #DCDEE0",
        boxShadow: "0px -2px 4px 0px rgb(49 50 51 / 6%)",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
          alignItems: "center",
          gap: "10px",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
            size: 32,
            onClick: () => setShowContactModal(true),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_styled_icons_feather_Mail__WEBPACK_IMPORTED_MODULE_5__.Mail, {
              size: 15,
              color: "#4E5052"
            })
          }), requiresMinimumNumberOfAdmins && hasEnoughInvitedAdmins && !hasEnoughAdmins && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
            content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
              id: "Lg6nmh",
              defaultMessage: [{
                "type": 0,
                "value": "This collective doesn’t satisfy the minimum admin requirements as admin invitations are still pending."
              }]
            }),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_28__/* .Span */ .Dr, {
              color: "red.600",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_styled_icons_feather_AlertTriangle__WEBPACK_IMPORTED_MODULE_3__.AlertTriangle, {
                size: 24
              })
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_AcceptRejectButtons__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
          collective: collective,
          isLoading: loading,
          disabled: requiresMinimumNumberOfAdmins && !hasEnoughInvitedAdmins,
          disabledMessage: requiresMinimumNumberOfAdmins && !hasEnoughInvitedAdmins && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
            id: "mqX77s",
            defaultMessage: [{
              "type": 0,
              "value": "You can not approve this collective as it doesn’t satisfy the minimum admin policy set by you."
            }]
          }),
          onApprove: () => processApplication(ACTIONS.APPROVE),
          onReject: message => processApplication(ACTIONS.REJECT, message)
        })]
      })]
    }), showContactModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_ApplicationMessageModal__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
      collective: collective,
      onClose: () => setShowContactModal(false),
      onConfirm: (message, isPrivate, resetMessage) => {
        setShowContactModal(false);
        const action = isPrivate ? ACTIONS.SEND_PRIVATE_MESSAGE : ACTIONS.SEND_PUBLIC_MESSAGE;
        processApplication(action, message, resetMessage);
      }
    })]
  });
};

PendingApplication.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PendingApplication",
  "props": {
    "host": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "policies": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": true
    },
    "application": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "message": {
            "name": "string",
            "required": false
          },
          "customData": {
            "name": "object",
            "required": false
          },
          "account": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": true
              },
              "legacyId": {
                "name": "number",
                "required": false
              },
              "slug": {
                "name": "string",
                "required": false
              },
              "name": {
                "name": "string",
                "required": false
              },
              "description": {
                "name": "string",
                "required": false
              },
              "isApproved": {
                "name": "bool",
                "required": false
              },
              "tags": {
                "name": "array",
                "required": false
              },
              "type": {
                "name": "string",
                "required": false
              },
              "host": {
                "name": "shape",
                "value": {
                  "id": {
                    "name": "string",
                    "required": false
                  }
                },
                "required": false
              },
              "memberInvitations": {
                "name": "array",
                "required": false
              },
              "admins": {
                "name": "shape",
                "value": {
                  "totalCount": {
                    "name": "number",
                    "required": false
                  },
                  "nodes": {
                    "name": "array",
                    "required": false
                  }
                },
                "required": false
              }
            },
            "required": true
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PendingApplication);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styled_icons_feather_MessageSquare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75827);
/* harmony import */ var _styled_icons_feather_MessageSquare__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_MessageSquare__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styled_icons_feather_MessageSquare__WEBPACK_IMPORTED_MODULE_0__.MessageSquare).withConfig({
  displayName: "CommentIcon",
  componentId: "sc-hzbk8p-0"
})(["transform:scaleX(-1);"]));

/***/ }),

/***/ 50559:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "n": () => (/* binding */ getSubscriptionStartDate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1808);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15078);
/* harmony import */ var _components_icons_CreditCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47483);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _NewCreditCardForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86501);
/* harmony import */ var _PayWithPaypalButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49160);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87268);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NewCreditCardForm__WEBPACK_IMPORTED_MODULE_7__, _ToastProvider__WEBPACK_IMPORTED_MODULE_10__]);
([_NewCreditCardForm__WEBPACK_IMPORTED_MODULE_7__, _ToastProvider__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











/** Return the next charge date, or `undefined` if subscription is past due */



const getSubscriptionStartDate = order => {
  if (order.nextChargeDate && dayjs__WEBPACK_IMPORTED_MODULE_1___default()(order.nextChargeDate).isAfter(dayjs__WEBPACK_IMPORTED_MODULE_1___default()())) {
    return order.nextChargeDate;
  }
};
const STRIPE = 'stripe';

const AddPaymentMethod = ({
  onStripeReady,
  onPaypalSuccess,
  setNewPaymentMethodInfo,
  order,
  isSubmitting
}) => {
  const host = order.toAccount.host;
  const hasStripe = host.supportedPaymentMethods.includes(_lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_3__/* .GQLV2_SUPPORTED_PAYMENT_METHOD_TYPES.CREDIT_CARD */ .fY.CREDIT_CARD);
  const hasPaypal = host.supportedPaymentMethods.includes(_lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_3__/* .GQLV2_SUPPORTED_PAYMENT_METHOD_TYPES.PAYPAL */ .fY.PAYPAL);
  const defaultProvider = hasStripe && !hasPaypal ? STRIPE : null;
  const [selectedProvider, setSelectedProvider] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(defaultProvider);
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_10__/* .useToasts */ .e1)();

  if (!selectedProvider) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      flexDirection: "column",
      children: [hasStripe && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        buttonSize: "small",
        "data-cy": "add-pm-select-provider-credit-card-btn",
        onClick: () => setSelectedProvider(STRIPE),
        mb: 2,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_icons_CreditCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          size: 24
        }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "CreditCard",
          defaultMessage: [{
            "type": 0,
            "value": "Credit Card"
          }]
        })]
      }), host.paypalClientId && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_PayWithPaypalButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        totalAmount: order.totalAmount.valueInCents,
        currency: order.totalAmount.currency,
        interval: (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_4__/* .getIntervalFromContributionFrequency */ .Pw)(order.frequency),
        host: host,
        collective: order.toAccount,
        tier: order.tier,
        style: {
          height: 45,
          size: 'small'
        },
        subscriptionStartDate: getSubscriptionStartDate(order),
        isSubmitting: isSubmitting,
        onError: e => addToast({
          type: _ToastProvider__WEBPACK_IMPORTED_MODULE_10__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
          title: e.message
        }),
        onSuccess: ({
          subscriptionId
        }) => {
          onPaypalSuccess({
            service: _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_3__/* .PAYMENT_METHOD_SERVICE.PAYPAL */ .tp.PAYPAL,
            type: _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_3__/* .PAYMENT_METHOD_TYPE.SUBSCRIPTION */ .td.SUBSCRIPTION,
            paypalInfo: {
              subscriptionId
            }
          });
        }
      })]
    });
  } else if (selectedProvider === STRIPE) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_NewCreditCardForm__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      name: "newCreditCardInfo",
      profileType: 'USER',
      onChange: setNewPaymentMethodInfo,
      onReady: onStripeReady,
      hasSaveCheckBox: false,
      isCompact: true
    });
  }
};

AddPaymentMethod.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AddPaymentMethod",
  "props": {
    "setNewPaymentMethodInfo": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onStripeReady": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onPaypalSuccess": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "isSubmitting": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "order": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "totalAmount": {
            "name": "object",
            "required": false
          },
          "frequency": {
            "name": "string",
            "required": false
          },
          "toAccount": {
            "name": "object",
            "required": false
          },
          "tier": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddPaymentMethod);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43072:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$B": () => (/* binding */ addCreditCardMutation),
/* harmony export */   "SF": () => (/* binding */ confirmCreditCardMutation),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69309);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61831);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_first__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22265);
/* harmony import */ var lodash_first__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_first__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64515);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styled_icons_boxicons_regular_Lock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11515);
/* harmony import */ var _styled_icons_boxicons_regular_Lock__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_Lock__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1808);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(32651);
/* harmony import */ var _lib_payment_method_label__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51515);
/* harmony import */ var _lib_payment_method_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(91337);
/* harmony import */ var _lib_stripe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(79936);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(88705);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(29242);
/* harmony import */ var _StripeProvider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(41499);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(87268);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(173);
/* harmony import */ var _StyledRadioList__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(36718);
/* harmony import */ var _StyledRoundButton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(90012);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(31330);
/* harmony import */ var _AddPaymentMethod__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(50559);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ToastProvider__WEBPACK_IMPORTED_MODULE_27__, _AddPaymentMethod__WEBPACK_IMPORTED_MODULE_28__]);
([_ToastProvider__WEBPACK_IMPORTED_MODULE_27__, _AddPaymentMethod__WEBPACK_IMPORTED_MODULE_28__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
































const PaymentMethodBox = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC).withConfig({
  displayName: "UpdatePaymentMethodPopUp__PaymentMethodBox",
  componentId: "sc-1vnnhkx-0"
})(["border-top:1px solid ", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_10__.themeGet)('colors.black.300'));
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_11__.defineMessages)({
  updatePaymentMethod: {
    id: "subscription.menu.editPaymentMethod",
    defaultMessage: [{
      "type": 0,
      "value": "Update payment method"
    }]
  },
  addPaymentMethod: {
    id: "subscription.menu.addPaymentMethod",
    defaultMessage: [{
      "type": 0,
      "value": "Add new payment method"
    }]
  }
});
const paymentMethodFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql`
  fragment UpdatePaymentMethodFragment on PaymentMethod {
    id
    name
    data
    service
    type
    balance {
      value
      valueInCents
      currency
    }
    account {
      id
    }
  }
`;
const paymentMethodsQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql`
  query UpdatePaymentMethodPopUpPaymentMethod($accountId: String!, $orderId: String!) {
    account(id: $accountId) {
      id
      paymentMethods(type: [CREDITCARD, GIFTCARD, PREPAID, COLLECTIVE]) {
        id
        ...UpdatePaymentMethodFragment
      }
    }
    order(order: { id: $orderId }) {
      id
      paymentMethod {
        id
        ...UpdatePaymentMethodFragment
      }
    }
  }
  ${paymentMethodFragment}
`;
const updatePaymentMethodMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql`
  mutation UpdatePaymentMethod(
    $order: OrderReferenceInput!
    $paymentMethod: PaymentMethodReferenceInput
    $paypalSubscriptionId: String
  ) {
    updateOrder(order: $order, paymentMethod: $paymentMethod, paypalSubscriptionId: $paypalSubscriptionId) {
      id
      status
      paymentMethod {
        id
        service
        name
        type
        data
        expiryDate
        balance {
          value
          valueInCents
          currency
        }
      }
    }
  }
`;
const paymentMethodResponseFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql`
  fragment paymentMethodResponseFragment on CreditCardWithStripeError {
    paymentMethod {
      id
    }
    stripeError {
      message
      response
    }
  }
`;
const addCreditCardMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql`
  mutation AddCreditCardRecurringContributions(
    $creditCardInfo: CreditCardCreateInput!
    $name: String!
    $account: AccountReferenceInput!
  ) {
    addCreditCard(creditCardInfo: $creditCardInfo, name: $name, account: $account) {
      ...paymentMethodResponseFragment
    }
  }
  ${paymentMethodResponseFragment}
`;
const confirmCreditCardMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql`
  mutation ConfirmCreditCardRecurringContributions($paymentMethod: PaymentMethodReferenceInput!) {
    confirmCreditCard(paymentMethod: $paymentMethod) {
      ...paymentMethodResponseFragment
    }
  }
  ${paymentMethodResponseFragment}
`;
const mutationOptions = {
  context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_14__/* .API_V2_CONTEXT */ .T
};

const sortAndFilterPaymentMethods = (paymentMethods, contribution, addedPaymentMethod, existingPaymentMethod) => {
  if (!paymentMethods) {
    return null;
  }

  const minBalance = contribution.amount.valueInCents;

  const uniquePMs = lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0___default()(paymentMethods, 'id');

  const getIsDisabled = pm => pm.balance.valueInCents < minBalance; // Make sure we always include the current payment method


  if (existingPaymentMethod && !uniquePMs.some(pm => pm.id === existingPaymentMethod.id)) {
    uniquePMs.unshift(existingPaymentMethod);
  }

  uniquePMs.sort((pm1, pm2) => {
    // Put disabled PMs at the end
    if (getIsDisabled(pm1) && !getIsDisabled(pm2)) {
      return 1;
    } else if (getIsDisabled(pm2) && !getIsDisabled(pm1)) {
      return -1;
    } // If we've just added a PM, put it at the top of the list


    if (addedPaymentMethod) {
      if (addedPaymentMethod.id === pm1.id) {
        return -1;
      } else if (addedPaymentMethod.id === pm2.id) {
        return 1;
      }
    } // Put the PM that matches this recurring contribution just after the newly added


    if (existingPaymentMethod) {
      if (existingPaymentMethod.id === pm1.id) {
        return -1;
      } else if (existingPaymentMethod.id === pm2.id) {
        return 1;
      }
    }

    return 0;
  });
  return uniquePMs.map(pm => ({
    key: `pm-${pm.id}`,
    title: (0,_lib_payment_method_label__WEBPACK_IMPORTED_MODULE_15__/* .getPaymentMethodName */ .d0)(pm),
    subtitle: (0,_lib_payment_method_utils__WEBPACK_IMPORTED_MODULE_16__/* .getPaymentMethodMetadata */ .Og)(pm),
    icon: (0,_lib_payment_method_utils__WEBPACK_IMPORTED_MODULE_16__/* .getPaymentMethodIcon */ .AM)(pm),
    paymentMethod: pm,
    disabled: getIsDisabled(pm),
    id: pm.id,
    CollectiveId: pm.account?.id
  }));
};

const useUpdatePaymentMethod = contribution => {
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .useToasts */ .e1)();
  const [submitUpdatePaymentMethod, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(updatePaymentMethodMutation, mutationOptions);
  return {
    isSubmitting: loading,
    updatePaymentMethod: async paymentMethod => {
      const hasUpdate = !contribution.paymentMethod || paymentMethod.id !== contribution.paymentMethod.id;

      try {
        if (hasUpdate) {
          const variables = {
            order: {
              id: contribution.id
            }
          };

          if (paymentMethod.service === _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_12__/* .PAYMENT_METHOD_SERVICE.PAYPAL */ .tp.PAYPAL) {
            variables.paypalSubscriptionId = paymentMethod.paypalInfo.subscriptionId;
          } else {
            variables.paymentMethod = {
              id: paymentMethod.value ? paymentMethod.value.id : paymentMethod.id
            };
          }

          await submitUpdatePaymentMethod({
            variables
          });
        }

        addToast({
          type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
          message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
            id: "subscription.createSuccessUpdated",
            defaultMessage: [{
              "type": 0,
              "value": "Your recurring contribution has been "
            }, {
              "type": 8,
              "value": "strong",
              "children": [{
                "type": 0,
                "value": "updated"
              }]
            }, {
              "type": 0,
              "value": "."
            }],
            values: _I18nFormatters__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP
          })
        });
      } catch (error) {
        const errorMsg = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_13__/* .getErrorFromGraphqlException */ .H1)(error).message;
        addToast({
          type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
          message: errorMsg
        });
        return false;
      }
    }
  };
};

const UpdatePaymentMethodPopUp = ({
  contribution,
  onCloseEdit,
  loadStripe,
  account
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_11__.useIntl)();
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .useToasts */ .e1)(); // state management

  const {
    0: showAddPaymentMethod,
    1: setShowAddPaymentMethod
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const {
    0: selectedPaymentMethod,
    1: setSelectedPaymentMethod
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
  const {
    0: loadingSelectedPaymentMethod,
    1: setLoadingSelectedPaymentMethod
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);
  const {
    0: stripe,
    1: setStripe
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
  const {
    0: stripeElements,
    1: setStripeElements
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
  const {
    0: newPaymentMethodInfo,
    1: setNewPaymentMethodInfo
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
  const {
    0: addedPaymentMethod,
    1: setAddedPaymentMethod
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
  const {
    0: addingPaymentMethod,
    1: setAddingPaymentMethod
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const {
    isSubmitting,
    updatePaymentMethod
  } = useUpdatePaymentMethod(contribution); // GraphQL mutations and queries

  const {
    data,
    refetch
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery)(paymentMethodsQuery, {
    variables: {
      accountId: account.id,
      orderId: contribution.id
    },
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_14__/* .API_V2_CONTEXT */ .T,
    fetchPolicy: 'network-only'
  });
  const [submitAddPaymentMethod] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(addCreditCardMutation, mutationOptions);
  const [submitConfirmPaymentMethodMutation] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(confirmCreditCardMutation, mutationOptions);

  const handleAddPaymentMethodResponse = async response => {
    const {
      paymentMethod,
      stripeError
    } = response;

    if (stripeError) {
      return handleStripeError(paymentMethod, stripeError);
    } else {
      return handleSuccess(paymentMethod);
    }
  };

  const handleStripeError = async (paymentMethod, stripeError) => {
    const {
      message,
      response
    } = stripeError;

    if (!response) {
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        message: message
      });
      setAddingPaymentMethod(false);
      return false;
    }

    const stripe = await (0,_lib_stripe__WEBPACK_IMPORTED_MODULE_17__/* .getStripe */ .d2)();
    const result = await stripe.handleCardSetup(response.setupIntent.client_secret);

    if (result.error) {
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        message: result.error.message
      });
      setAddingPaymentMethod(false);
      return false;
    } else {
      try {
        const response = await submitConfirmPaymentMethodMutation({
          variables: {
            paymentMethod: {
              id: paymentMethod.id
            }
          }
        });
        return handleSuccess(response.data.confirmCreditCard.paymentMethod);
      } catch (error) {
        addToast({
          type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
          message: error.message
        });
        setAddingPaymentMethod(false);
        return false;
      }
    }
  };

  const handleSuccess = paymentMethod => {
    setAddingPaymentMethod(false);
    refetch();
    setAddedPaymentMethod(paymentMethod);
    setShowAddPaymentMethod(false);
    setLoadingSelectedPaymentMethod(true);
  }; // load stripe on mount


  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    loadStripe();
  }, []); // data handling

  const paymentMethods = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(data, 'account.paymentMethods', null);

  const existingPaymentMethod = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(data, 'order.paymentMethod', null);

  const filterPaymentMethodsParams = [paymentMethods, contribution, addedPaymentMethod, existingPaymentMethod];
  const paymentOptions = react__WEBPACK_IMPORTED_MODULE_6___default().useMemo(() => sortAndFilterPaymentMethods(...filterPaymentMethodsParams), filterPaymentMethodsParams);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    if (!paymentOptions) {
      return;
    }

    if (selectedPaymentMethod === null && contribution.paymentMethod) {
      setSelectedPaymentMethod(lodash_first__WEBPACK_IMPORTED_MODULE_4___default()(paymentOptions.filter(option => option.id === contribution.paymentMethod.id)));
    } else if (addedPaymentMethod) {
      setSelectedPaymentMethod(paymentOptions.find(option => option.id === addedPaymentMethod.id));
    }

    setLoadingSelectedPaymentMethod(false);
  }, [paymentOptions, addedPaymentMethod]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
      width: 1,
      alignItems: "center",
      justifyContent: "center",
      minHeight: 50,
      px: 3,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
        my: 2,
        fontSize: "12px",
        textTransform: "uppercase",
        color: "black.700",
        children: showAddPaymentMethod ? intl.formatMessage(messages.addPaymentMethod) : intl.formatMessage(messages.updatePaymentMethod)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
        flexGrow: 1,
        alignItems: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
          width: "100%",
          mx: 2
        })
      }), showAddPaymentMethod ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_styled_icons_boxicons_regular_Lock__WEBPACK_IMPORTED_MODULE_9__.Lock, {
        size: 20
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
        size: 24,
        onClick: () => setShowAddPaymentMethod(true),
        "data-cy": "recurring-contribution-add-pm-button",
        children: "+"
      })]
    }), showAddPaymentMethod ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .xu, {
      px: 1,
      pt: 2,
      pb: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_AddPaymentMethod__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
        order: contribution,
        isSubmitting: isSubmitting,
        setNewPaymentMethodInfo: setNewPaymentMethodInfo,
        onStripeReady: ({
          stripe,
          stripeElements
        }) => {
          setStripe(stripe);
          setStripeElements(stripeElements);
        },
        onPaypalSuccess: async paypalPaymentMethod => {
          await updatePaymentMethod(paypalPaymentMethod);
          onCloseEdit();
        }
      })
    }) : loadingSelectedPaymentMethod ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
      height: 100
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledRadioList__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP, {
      id: "PaymentMethod",
      name: `${contribution.id}-PaymentMethod`,
      keyGetter: "key",
      options: paymentOptions,
      onChange: setSelectedPaymentMethod,
      value: selectedPaymentMethod?.key,
      children: ({
        radio,
        value: {
          title,
          subtitle,
          icon
        }
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(PaymentMethodBox, {
        minHeight: 50,
        py: 2,
        bg: "white.full",
        "data-cy": "recurring-contribution-pm-box",
        px: 3,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .xu, {
            as: "span",
            mr: 3,
            flexWrap: "wrap",
            children: radio
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledFlex, {
            mr: 2,
            children: icon
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
            flexDirection: "column",
            width: "100%",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
              fontSize: "12px",
              fontWeight: subtitle ? 600 : 400,
              color: "black.900",
              overflowWrap: "anywhere",
              children: title
            }), subtitle && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "18px",
              color: "black.500",
              overflowWrap: "anywhere",
              children: subtitle
            })]
          })]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
      flexGrow: 1 / 4,
      width: 1,
      alignItems: "center",
      justifyContent: "center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
        flexGrow: 1,
        alignItems: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
          width: "100%"
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
      flexGrow: 1 / 4,
      width: 1,
      alignItems: "center",
      justifyContent: "center",
      minHeight: 50,
      children: showAddPaymentMethod ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          buttonSize: "tiny",
          minWidth: 75,
          onClick: () => {
            setNewPaymentMethodInfo(null);
            onCloseEdit();
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
            id: "actions.cancel",
            defaultMessage: [{
              "type": 0,
              "value": "Cancel"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          ml: 2,
          minWidth: 75,
          buttonSize: "tiny",
          buttonStyle: "secondary",
          disabled: newPaymentMethodInfo ? !newPaymentMethodInfo.value?.complete : true,
          type: "submit",
          loading: addingPaymentMethod,
          "data-cy": "recurring-contribution-submit-pm-button",
          onClick: async () => {
            setAddingPaymentMethod(true);

            if (!stripe) {
              addToast({
                type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
                  id: "Stripe.Initialization.Error",
                  defaultMessage: [{
                    "type": 0,
                    "value": "There was a problem initializing the payment form. Please reload the page and try again."
                  }]
                })
              });
              setAddingPaymentMethod(false);
              return false;
            }

            const cardElement = stripeElements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_8__.CardElement);
            const {
              token,
              error
            } = await stripe.createToken(cardElement);

            if (error) {
              addToast({
                type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                message: error.message
              });
              return false;
            }

            const newStripePaymentMethod = (0,_lib_stripe__WEBPACK_IMPORTED_MODULE_17__/* .stripeTokenToPaymentMethod */ .kJ)(token);

            const newCreditCardInfo = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()(newStripePaymentMethod.data, lodash_pick__WEBPACK_IMPORTED_MODULE_1___default()(newStripePaymentMethod, ['token']));

            try {
              const res = await submitAddPaymentMethod({
                variables: {
                  creditCardInfo: newCreditCardInfo,
                  name: lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(newStripePaymentMethod, 'name'),
                  account: {
                    id: account.id
                  }
                }
              });
              return handleAddPaymentMethodResponse(res.data.addCreditCard);
            } catch (error) {
              const errorMsg = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_13__/* .getErrorFromGraphqlException */ .H1)(error).message;
              addToast({
                type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                message: errorMsg
              });
              setAddingPaymentMethod(false);
              return false;
            }
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
            id: "save",
            defaultMessage: [{
              "type": 0,
              "value": "Save"
            }]
          })
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          buttonSize: "tiny",
          minWidth: 75,
          onClick: onCloseEdit,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
            id: "actions.cancel",
            defaultMessage: [{
              "type": 0,
              "value": "Cancel"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          ml: 2,
          minWidth: 75,
          buttonSize: "tiny",
          buttonStyle: "secondary",
          loading: isSubmitting,
          "data-cy": "recurring-contribution-update-pm-button",
          onClick: () => updatePaymentMethod(selectedPaymentMethod).then(onCloseEdit),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
            id: "actions.update",
            defaultMessage: [{
              "type": 0,
              "value": "Update"
            }]
          })
        })]
      })
    })]
  });
};

UpdatePaymentMethodPopUp.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "UpdatePaymentMethodPopUp",
  "props": {
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "contribution": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "onCloseEdit": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "loadStripe": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "account": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_StripeProvider__WEBPACK_IMPORTED_MODULE_21__/* .withStripeLoader */ .kc)(UpdatePaymentMethodPopUp));

var _StyledFlex = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC).withConfig({
  displayName: "UpdatePaymentMethodPopUp___StyledFlex",
  componentId: "sc-1vnnhkx-1"
})({
  flexBasis: '26px'
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wi": () => (/* binding */ extractSeriesFromTimeSeries),
/* harmony export */   "yc": () => (/* binding */ alignSeries),
/* harmony export */   "zz": () => (/* binding */ formatAmountForLegend)
/* harmony export */ });
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18459);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74292);
/* harmony import */ var lodash_identity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_identity__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98492);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58579);
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_flatten__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_difference__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77047);
/* harmony import */ var lodash_difference__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_difference__WEBPACK_IMPORTED_MODULE_5__);







/**
 * If a date doesn't have any data attached, API returns nothing.
 * But we need to make sure all series show 0 in these cases rather than `NaN` which
 * is shown by default by Apex charts.
 */
const alignSeries = (series, sort = (a, b) => new Date(a.x) - new Date(b.x)) => {
  const indexesBySeries = series.map(singleSeries => singleSeries.data.map(d => d.x));

  const uniqueIndexes = lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default()(lodash_flatten__WEBPACK_IMPORTED_MODULE_4___default()(indexesBySeries));

  indexesBySeries.forEach((_, idx) => {
    const missingIndexes = lodash_difference__WEBPACK_IMPORTED_MODULE_5___default()(uniqueIndexes, indexesBySeries[idx]);

    if (missingIndexes.length) {
      series[idx].data.push(...missingIndexes.map(x => ({
        x,
        y: 0
      })));
    }

    series[idx].data.sort(sort);
  });
  return series;
};
const extractSeriesFromTimeSeries = (timeSeries, {
  x,
  y,
  group,
  groupNameTransformer = (lodash_identity__WEBPACK_IMPORTED_MODULE_1___default())
}) => {
  const groups = lodash_groupBy__WEBPACK_IMPORTED_MODULE_2___default()(timeSeries, group);

  const categories = Object.keys(groups);
  const series = categories.map(name => {
    const data = groups[name].map(value => ({
      x: lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(value, x),
      y: lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(value, y)
    }));
    return {
      name: groupNameTransformer(name),
      data
    };
  });
  return {
    series,
    categories
  };
};
const formatAmountForLegend = (value, currency, locale, isCompactNotation = true) => {
  return new Intl.NumberFormat(locale, {
    currency,
    style: 'currency',
    notation: isCompactNotation ? 'compact' : 'standard'
  }).format(value);
};

/***/ }),

/***/ 450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ ContributionTypes)
/* harmony export */ });
/** Defines contributions types */
const ContributionTypes = {
  FINANCIAL_CUSTOM: 'FINANCIAL_CUSTOM',
  FINANCIAL_CRYPTO: 'FINANCIAL_CRYPTO',
  FINANCIAL_ONE_TIME: 'FINANCIAL_ONE_TIME',
  FINANCIAL_RECURRING: 'FINANCIAL_RECURRING',
  FINANCIAL_GOAL: 'FINANCIAL_GOAL',
  PRODUCT: 'PRODUCT',
  TICKET: 'TICKET',
  MEMBERSHIP: 'MEMBERSHIP',
  EVENT_PARTICIPATE: 'EVENT_PARTICIPATE',
  EVENT_PASSED: 'EVENT_PASSED',
  TIER_PASSED: 'TIER_PASSED',
  CHILD_COLLECTIVE: 'CHILD_COLLECTIVE',
  PROJECT: 'PROJECT',
  ARCHIVED_PROJECT: 'ARCHIVED_PROJECT'
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ContributionTypes)));

/***/ }),

/***/ 66465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_roles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98216);


const RolesTranslations = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].HOST */ .Z.HOST]: {
    id: "Member.Role.HOST",
    defaultMessage: [{
      "type": 0,
      "value": "Host"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].ADMIN */ .Z.ADMIN]: {
    id: "Member.Role.ADMIN",
    defaultMessage: [{
      "type": 0,
      "value": "Admin"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].MEMBER */ .Z.MEMBER]: {
    id: "Member.Role.MEMBER",
    defaultMessage: [{
      "type": 0,
      "value": "Core Contributor"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].CONTRIBUTOR */ .Z.CONTRIBUTOR]: {
    id: "Member.Role.CONTRIBUTOR",
    defaultMessage: [{
      "type": 0,
      "value": "Contributor"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].BACKER */ .Z.BACKER]: {
    id: "Member.Role.BACKER",
    defaultMessage: [{
      "type": 0,
      "value": "Financial Contributor"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].ATTENDEE */ .Z.ATTENDEE]: {
    id: "Member.Role.ATTENDEE",
    defaultMessage: [{
      "type": 0,
      "value": "Attendee"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].FOLLOWER */ .Z.FOLLOWER]: {
    id: "Member.Role.FOLLOWER",
    defaultMessage: [{
      "type": 0,
      "value": "Follower"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].ACCOUNTANT */ .Z.ACCOUNTANT]: {
    id: "Member.Role.ACCOUNTANT",
    defaultMessage: [{
      "type": 0,
      "value": "Accountant"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].CONNECTED_COLLECTIVE */ .Z.CONNECTED_COLLECTIVE]: {
    id: "Member.Role.ConnectedAccount",
    defaultMessage: [{
      "type": 0,
      "value": "Connected"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].CONNECTED_ACCOUNT */ .Z.CONNECTED_ACCOUNT]: {
    id: "Member.Role.ConnectedAccount",
    defaultMessage: [{
      "type": 0,
      "value": "Connected"
    }]
  }
});
/**
 * Translate a member role
 *
 * @param {func} `formatMessage` - see `injectIntl` or `useIntl`
 * @param {string} `role` - see `roles`
 */

const formatMemberRole = (intl, role) => {
  const i18nMsg = RolesTranslations[role];
  return i18nMsg ? intl.formatMessage(i18nMsg) : role;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatMemberRole);

/***/ }),

/***/ 72004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ CustomScrollbarCSS)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/**
 * A custom scrollbar for Chrome, more prettier than the system one.
 */

const CustomScrollbarCSS = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["@media (pointer:fine){&::-webkit-scrollbar{height:8px;margin:0 16px;}&::-webkit-scrollbar-thumb{background:#d1d1d3;border-radius:16px;&:hover{background:#aaa;}}&::-webkit-scrollbar-track{background:#f2f3f4;border-radius:20px;}&::-webkit-scrollbar-button{color:white;}}"]);

/***/ })

};
;