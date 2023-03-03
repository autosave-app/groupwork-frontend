(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8816],{

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

/***/ 52903:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export searchTagsQuery */
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7980);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23279);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67294);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(15020);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(46829);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60887);
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45587);
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24285);
/* harmony import */ var react_animate_height__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29244);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(86896);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(44012);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(73254);
/* harmony import */ var react_select_creatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(83739);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(82525);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32651);
/* harmony import */ var _lib_theme_colors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(38268);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(16159);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(36422);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(85893);






var _excluded = ["innerProps"],
    _excluded2 = ["innerProps"];

var _templateObject;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


















var searchTagsQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP)(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4___default()(["\n  query SearchTags($term: String) {\n    tagStats(tagSearchTerm: $term) {\n      nodes {\n        id\n        tag\n      }\n    }\n  }\n"])));

var MultiValue = function MultiValue(props) {
  // This prevents the menu from being opened/closed when the user clicks
  // on a value to begin dragging it
  var onMouseDown = function onMouseDown(e) {
    e.preventDefault();
    e.stopPropagation();
  };

  var _useSortable = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_8__/* .useSortable */ .nB)({
    id: props.data.value
  }),
      attributes = _useSortable.attributes,
      isDragging = _useSortable.isDragging,
      listeners = _useSortable.listeners,
      setNodeRef = _useSortable.setNodeRef,
      transform = _useSortable.transform,
      transition = _useSortable.transition;

  var style = {
    transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_9__/* .CSS.Translate.toString */ .ux.Translate.toString(transform),
    transition: transition,
    opacity: isDragging ? '0.4' : undefined
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", _objectSpread(_objectSpread(_objectSpread({
    style: style,
    ref: setNodeRef
  }, attributes), listeners), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_StyledTag__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
      m: "4px",
      variant: "rounded-right",
      maxHeight: "none",
      style: {
        cursor: 'grab'
      },
      onMouseDown: onMouseDown,
      closeButtonProps: _objectSpread(_objectSpread({}, props.removeProps), {}, {
        isFocused: props.isFocused,
        onPointerDown: function onPointerDown(e) {
          return e.stopPropagation();
        }
      }),
      children: props.children
    })
  }));
};

var Input = function Input(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_20__.c.Input, _objectSpread(_objectSpread({}, props), {}, {
    "data-cy": 'tags-select-input'
  }));
};

var Option = function Option(_ref) {
  var innerProps = _ref.innerProps,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default()(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_20__.c.Option, _objectSpread(_objectSpread({}, props), {}, {
    innerProps: _objectSpread(_objectSpread({}, innerProps), {}, {
      'data-cy': "tags-select-option-".concat(props.data['value'])
    })
  }));
};

var SelectContainer = function SelectContainer(_ref2) {
  var innerProps = _ref2.innerProps,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default()(_ref2, _excluded2);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_20__.c.SelectContainer, _objectSpread(_objectSpread({}, props), {}, {
    innerProps: _objectSpread(_objectSpread({}, innerProps), {}, {
      'data-cy': 'tags-select'
    })
  }));
};

var debouncedSearch = lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default()(function (searchFunc, variables) {
  return searchFunc({
    variables: variables
  });
}, 500);

function CollectiveTagsInput(_ref3) {
  var _ref3$defaultValue = _ref3.defaultValue,
      defaultValue = _ref3$defaultValue === void 0 ? [] : _ref3$defaultValue,
      onChange = _ref3.onChange,
      _ref3$suggestedTags = _ref3.suggestedTags,
      suggestedTags = _ref3$suggestedTags === void 0 ? [] : _ref3$suggestedTags;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)();

  var _useLazyQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_22__.useLazyQuery)(searchTagsQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__/* .API_V2_CONTEXT */ .T
  }),
      _useLazyQuery2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_useLazyQuery, 2),
      searchTags = _useLazyQuery2[0],
      _useLazyQuery2$ = _useLazyQuery2[1],
      fetching = _useLazyQuery2$.loading,
      data = _useLazyQuery2$.data;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      debouncing = _useState[0],
      setDebouncing = _useState[1];

  var loading = fetching || debouncing;

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      input = _useState2[0],
      setInput = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),
      options = _useState3[0],
      setOptions = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)((defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.map(function (tag) {
    return {
      label: tag,
      value: tag
    };
  })) || []),
      selected = _useState4[0],
      setSelected = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null),
      draggingTag = _useState5[0],
      setDraggingTag = _useState5[1];

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    onChange(selected);
  }, [selected]);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    if (input !== null && input !== void 0 && input.length) {
      setDebouncing(true);
      debouncedSearch(searchTags, {
        term: input
      });
    } else {
      // Skip debouncing when input is empty (on initial load for instance)
      searchTags();
    }
  }, [input]);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    if (!fetching) {
      var _data$tagStats;

      setOptions((data === null || data === void 0 ? void 0 : (_data$tagStats = data.tagStats) === null || _data$tagStats === void 0 ? void 0 : _data$tagStats.nodes.filter(function (_ref4) {
        var tag = _ref4.tag;
        return !_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_12__/* .IGNORED_TAGS.includes */ .bR.includes(tag);
      }).map(function (_ref5) {
        var tag = _ref5.tag;
        return {
          label: tag,
          value: tag
        };
      })) || []);
      setDebouncing(false);
    }
  }, [fetching, data]);

  function handleDragOver(event) {
    var active = event.active,
        over = event.over;

    if (over && active.id !== over.id) {
      setSelected(function (selected) {
        var oldIndex = selected.findIndex(function (item) {
          return item.value === active.id;
        });
        var newIndex = selected.findIndex(function (item) {
          return item.value === over.id;
        });
        return (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_8__/* .arrayMove */ .Rp)(selected, oldIndex, newIndex);
      });
    }
  } // Fix to avoid infinite loop caused by dragging over two items with variable sizes: https://github.com/clauderic/dnd-kit/issues/44#issuecomment-1018686592


  var debouncedDragOver = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default()(handleDragOver, 40, {
    trailing: false,
    leading: true
  }), []);

  function handleDragStart(event) {
    setDraggingTag(event.active.id);
  }

  function handleDragEnd() {
    setDraggingTag(null);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_7__/* .DndContext */ .LB, {
      onDragStart: handleDragStart,
      onDragOver: debouncedDragOver,
      onDragEnd: handleDragEnd,
      onDragCancel: handleDragEnd,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_8__/* .SortableContext */ .Fo, {
        items: selected.map(function (o) {
          return o.value;
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_select_creatable__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
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
            MultiValue: MultiValue,
            SelectContainer: SelectContainer,
            Input: Input,
            Option: Option
          },
          onKeyDown: function onKeyDown(e) {
            // Stop enter key from closing the menu and submitting the form when it's loading and there are no options
            if (e.key === 'Enter' && loading && options.length === 0) {
              e.preventDefault();
            }
          },
          onInputChange: function onInputChange(value) {
            return setInput(value);
          },
          options: options,
          isLoading: loading,
          onChange: function onChange(selectedOptions) {
            return setSelected(selectedOptions);
          },
          styles: {
            menuPortal: function menuPortal(styles) {
              return _objectSpread(_objectSpread({}, styles), {}, {
                zIndex: 9999
              });
            },
            control: function control(baseStyles, state) {
              return _objectSpread(_objectSpread({}, baseStyles), {}, {
                boxShadow: "inset 0px 2px 2px ".concat(_lib_theme_colors__WEBPACK_IMPORTED_MODULE_14__/* ["default"].primary[50] */ .Z.primary[50]),
                borderColor: state.isFocused ? _lib_theme_colors__WEBPACK_IMPORTED_MODULE_14__/* ["default"].primary[500] */ .Z.primary[500] : _lib_theme_colors__WEBPACK_IMPORTED_MODULE_14__/* ["default"].black[300] */ .Z.black[300],
                '&:hover': {
                  borderColor: state.isFocused ? _lib_theme_colors__WEBPACK_IMPORTED_MODULE_14__/* ["default"].primary[500] */ .Z.primary[500] : _lib_theme_colors__WEBPACK_IMPORTED_MODULE_14__/* ["default"].primary[300] */ .Z.primary[300]
                }
              });
            }
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_7__/* .DragOverlay */ .y9, {
        children: draggingTag ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_StyledTag__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
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
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_animate_height__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      height: (suggestedTags === null || suggestedTags === void 0 ? void 0 : suggestedTags.length) > 0 ? 'auto' : 0,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .kC, {
        mt: 2,
        gap: '6px',
        flexWrap: "wrap",
        alignItems: 'center',
        children: [suggestedTags && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_17__/* .Span */ .Dr, {
          color: "black.600",
          mr: 1,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
            id: "W4zXqr",
            defaultMessage: [{
              "type": 0,
              "value": "Popular tags:"
            }]
          })
        }), suggestedTags === null || suggestedTags === void 0 ? void 0 : suggestedTags.map(function (tag) {
          var isSelected = selected.some(function (_ref6) {
            var value = _ref6.value;
            return value === tag;
          });
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_StyledTag__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            variant: "rounded-right",
            type: "button",
            tabIndex: -1,
            closeButtonProps: false,
            style: {
              opacity: isSelected ? 0.5 : 1,
              cursor: 'pointer'
            },
            onClick: function onClick() {
              return isSelected ? setSelected(selected.filter(function (_ref7) {
                var value = _ref7.value;
                return value !== tag;
              })) : setSelected([].concat(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(selected), [{
                value: tag,
                label: tag
              }]));
            },
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
/* harmony default export */ __webpack_exports__["Z"] = (CollectiveTagsInput);

/***/ }),

/***/ 29242:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52015);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16678);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29925);




var AnimateBackground = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* .keyframes */ .F4)(["0%{background-position:-100% 0;}100%{background-position:100% 0;}"]);
/**
 * A loading container that will show an animated block instead of a blank space.
 */

var LoadingPlaceholder = styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "LoadingPlaceholder",
  componentId: "sc-bny1ps-0"
})(["animation:", " 1s linear infinite,", " 1s linear infinite;background:linear-gradient(to right,#eee 2%,#ddd 18%,#eee 33%);background-size:200%;width:100%;", " ", " ", ""], AnimateBackground, (0,_StyledKeyframes__WEBPACK_IMPORTED_MODULE_1__/* .flicker */ .Uh)({
  minOpacity: 0.8
}), styled_system__WEBPACK_IMPORTED_MODULE_0__/* .border */ .Cg, styled_system__WEBPACK_IMPORTED_MODULE_0__/* .layout */ .bK, styled_system__WEBPACK_IMPORTED_MODULE_0__/* .space */ .Dh);
LoadingPlaceholder.propTypes = {
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)])
};
LoadingPlaceholder.defaultProps = {
  height: '100%',
  borderRadius: '2%'
};
/** @component */

/* harmony default export */ __webpack_exports__["Z"] = (LoadingPlaceholder);

/***/ }),

/***/ 36718:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony exports getKeyExtractor, getItems */
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52353);
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13311);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67294);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52015);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16678);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85893);




var _excluded = ["children", "id", "name", "onChange", "options", "keyGetter", "disabled", "containerProps", "labelProps", "radioSize", "data-cy"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






/**
 * Returns a function that will return a unique key from iteratee. As we rely on
 * <input/> only a string key is valid.
 *
 * @param {array|object} options: an options iterable
 * @param {string|function} keyGetter: a key to get value from, or an extract func
 */



var getKeyExtractor = function getKeyExtractor(options, keyGetter) {
  if (typeof keyGetter === 'function') {
    return function (item) {
      return keyGetter(item).toString();
    };
  } else if (typeof keyGetter === 'string') {
    return function (item) {
      return item[keyGetter].toString();
    };
  } else if (Array.isArray(options)) {
    return function (item) {
      return item.toString();
    };
  } else {
    return function (_item, key) {
      return key.toString();
    };
  }
};
var RadioInput = styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"].input.withConfig */ .ZP.input.withConfig({
  displayName: "StyledRadioList__RadioInput",
  componentId: "sc-vf87vx-0"
})(["", " &[type='radio']{margin:0;cursor:pointer;&:focus{outline:none;filter:drop-shadow(0px 0px 4px ", ");}}"], styled_system__WEBPACK_IMPORTED_MODULE_5__/* .size */ .dp, function (props) {
  return props.theme.colors.primary[500];
});
/**
 * Convert a list of items to an object like {key, value} to be used in selects
 * and other lists.
 *
 * @param {object[] | string[]} options a list of items to transform to be used in list
 * @param {string | func} key a string to get the unique key from objects, or
 *  a function that get passed the object and returns a key. If not passed, the
 *  JSON representation of the item will be used. This can have very bad performances
 *  impact, so we should avoid using it.
 */

var getItems = function getItems(options, keyGetter) {
  var keyExtractor = getKeyExtractor(options, keyGetter);
  return Object.keys(options).reduce(function (items, key) {
    return items.concat({
      key: keyExtractor(options[key], key),
      value: options[key]
    });
  }, []);
};
var RadioListContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
  displayName: "StyledRadioList__RadioListContainer",
  componentId: "sc-vf87vx-1"
})(["& > *:first-child > *{border-radius:15px 15px 0 0;}& > *:last-child > *{border-radius:0 0 15px 15px;}"]);
/**
 * Component for controlling a list of radio inputs
 */

var StyledRadioList = function StyledRadioList(_ref) {
  var children = _ref.children,
      id = _ref.id,
      name = _ref.name,
      _onChange = _ref.onChange,
      options = _ref.options,
      keyGetter = _ref.keyGetter,
      disabled = _ref.disabled,
      containerProps = _ref.containerProps,
      labelProps = _ref.labelProps,
      radioSize = _ref.radioSize,
      dataCy = _ref['data-cy'],
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(props.defaultValue),
      localStateSelected = _useState[0],
      setSelected = _useState[1];

  var keyExtractor = getKeyExtractor(options, keyGetter);
  var items = getItems(options, keyExtractor);
  var defaultValueStr = props.defaultValue !== undefined && props.defaultValue.toString();
  var checkedItem = !lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default()(props.value) ? props.value : localStateSelected;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RadioListContainer, _objectSpread(_objectSpread({
    id: id,
    as: "fieldset",
    border: "none",
    m: 0,
    p: 0,
    "data-cy": dataCy
  }, containerProps), {}, {
    children: items.map(function (_ref2, index) {
      var value = _ref2.value,
          key = _ref2.key;
      var isDisabled = disabled || value && value.disabled; // disable a specific option or entire options

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, _objectSpread(_objectSpread({
        as: "label",
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        htmlFor: id && key + id,
        width: 1,
        m: 0,
        disabled: isDisabled
      }, labelProps), {}, {
        children: children({
          checked: key === checkedItem,
          index: index,
          key: key,
          value: value,
          radio: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RadioInput, {
            type: "radio",
            name: name,
            id: id && key + id,
            value: key,
            size: radioSize,
            defaultChecked: lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default()(props.defaultValue) ? undefined : defaultValueStr === key,
            checked: lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default()(props.value) ? undefined : props.value === key,
            disabled: isDisabled // disable a specific option or entire options
            ,
            "data-cy": "radio-select",
            onChange: function onChange(event) {
              event.stopPropagation();
              var target = event.target;

              var selectedItem = lodash_find__WEBPACK_IMPORTED_MODULE_3___default()(items, function (item) {
                return item.key === target.value;
              });

              _onChange({
                type: 'fieldset',
                name: name,
                key: selectedItem.key,
                value: selectedItem.value
              });

              setSelected(target.value);
            }
          })
        })
      }), key);
    })
  }));
};

var defaultChild = function defaultChild(_ref3) {
  var value = _ref3.value,
      radio = _ref3.radio;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
    mb: 2,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
      as: "span",
      mr: 2,
      children: radio
    }), value]
  });
};

StyledRadioList.defaultProps = {
  children: defaultChild,
  onChange: function onChange() {} // noop

};
StyledRadioList.displayName = 'StyledRadioList';
StyledRadioList.__docgenInfo = {
  "description": "Component for controlling a list of radio inputs",
  "methods": [],
  "displayName": "StyledRadioList",
  "props": {
    "children": {
      "defaultValue": {
        "value": "({ value, radio }) => (\n  <Box mb={2}>\n    <Box as=\"span\" mr={2}>\n      {radio}\n    </Box>\n    {value}\n  </Box>\n)",
        "computed": false
      },
      "description": "render function used to display an option\n@param {Object} props - Properties use for rendering each radio input\n@param {*} props.key - unqiue key for the option derived from `options`\n@param {*} props.value - value for the option derived from `options`\n@param {boolean} props.checked - true if the radio item is selected\n@param {number} props.index - order index of the option\n@param {Component} props.radio - radio input component",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onChange": {
      "defaultValue": {
        "value": "() => {}",
        "computed": false
      },
      "description": "event handler for when a selection is made",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "defaultValue": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }, {
          "name": "shape",
          "value": "PropTypes.shape()",
          "computed": true
        }]
      },
      "required": false
    },
    "id": {
      "description": "element id for forms",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "name": {
      "description": "element name for radio inputs",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "value": {
      "description": "for controlled components",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }, {
          "name": "object"
        }]
      },
      "required": false
    },
    "options": {
      "description": "list or map of options to display",
      "type": {
        "name": "union",
        "value": [{
          "name": "arrayOf",
          "value": {
            "name": "union",
            "value": [{
              "name": "string"
            }, {
              "name": "number"
            }, {
              "name": "shape",
              "value": "PropTypes.shape()",
              "computed": true
            }]
          }
        }, {
          "name": "objectOf",
          "value": {
            "name": "union",
            "value": [{
              "name": "string"
            }, {
              "name": "number"
            }, {
              "name": "shape",
              "value": "PropTypes.shape()",
              "computed": true
            }]
          }
        }]
      },
      "required": true
    },
    "keyGetter": {
      "description": "A key name of a getter function to extract the unique key from option",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "func"
        }]
      },
      "required": false
    },
    "containerProps": {
      "description": "To pass to the fieldset container",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "labelProps": {
      "description": "To pass to the label container",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "disabled": {
      "description": "If true, user won't be able to interact with the element",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "radioSize": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "data-cy": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["ZP"] = (StyledRadioList);

/***/ }),

/***/ 47667:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56562);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85893);


var _excluded = ["display"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




/*
 * Illustrations that use the next/image component.
 */



function NextIllustration(_ref) {
  var display = _ref.display,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
    display: display,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread({}, props))
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
/* harmony default export */ __webpack_exports__["Z"] = (NextIllustration);

/***/ }),

/***/ 99849:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dx": function() { return /* binding */ Title; },
/* harmony export */   "VY": function() { return /* binding */ Content; },
/* harmony export */   "Z0": function() { return /* binding */ Separator; },
/* harmony export */   "ZP": function() { return /* binding */ FAQ; },
/* harmony export */   "kS": function() { return /* binding */ Entry; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33227);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88361);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85971);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52715);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91193);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(22733);
/* harmony import */ var _styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(54590);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50056);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(44012);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(52015);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16678);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85893);







var _excluded = ["children"],
    _excluded2 = ["title", "children", "withBorderLeft", "withNewButtons", "titleProps"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }











/** Main entry container */



var Entry = styled_components__WEBPACK_IMPORTED_MODULE_14__/* ["default"].details.withConfig */ .ZP.details.withConfig({
  displayName: "FAQ__Entry",
  componentId: "sc-1qzv7kx-0"
})(["&[open]{border-color:", ";summary::after{content:'\u2212';}}summary{padding-top:", "px;padding-bottom:", "px;font-size:13px;font-weight:500;color:", ";list-style:none;&:hover{color:", ";}button{display:none;}}summary:focus{outline:1px dashed ", ";outline-offset:", "px;}summary::after{content:'+';display:inline-block;padding-left:", "px;color:", ";font-weight:bold;}summary::-webkit-details-marker{display:none;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('colors.primary.500'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('space.2'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('space.2'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('colors.black.800'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('colors.black.700'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('colors.black.200'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('space.1'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('space.2'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('colors.black.600'));
var CollapseBtn = styled_components__WEBPACK_IMPORTED_MODULE_14__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "FAQ__CollapseBtn",
  componentId: "sc-1qzv7kx-1"
})(["display:flex;justify-content:center;align-items:center;border-radius:50%;border:1px solid #dcdee0;svg{stroke-width:1.5;}[data-item='chevron-up']{margin-top:-5%;}[data-item='chevron-down']{margin-top:5%;}", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_9__/* .size */ .dp, styled_system__WEBPACK_IMPORTED_MODULE_9__/* .space */ .Dh);
/** Entry title */

var Title = (0,styled_components__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP)(function (_ref) {
  var children = _ref.children,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6___default()(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("summary", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(CollapseBtn, {
      size: 18,
      ml: 3,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_15__/* .ChevronUp */ .Kh, {
        size: "1em",
        "data-item": "chevron-up",
        style: {
          marginTop: -1
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_16__/* .ChevronDown */ ._M, {
        size: "1em",
        "data-item": "chevron-down"
      })]
    })]
  }));
}).withConfig({
  displayName: "FAQ__Title",
  componentId: "sc-1qzv7kx-2"
})(["cursor:pointer;display:flex;justify-content:space-between;align-items:baseline;"]);
/** Entry content (hidden by default) */

var Content = (0,styled_components__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu).withConfig({
  displayName: "FAQ__Content",
  componentId: "sc-1qzv7kx-3"
})([""]);
Content.defaultProps = {
  py: 2,
  fontSize: '13px',
  color: 'black.600'
};
var Separator = styled_components__WEBPACK_IMPORTED_MODULE_14__/* ["default"].hr.withConfig */ .ZP.hr.withConfig({
  displayName: "FAQ__Separator",
  componentId: "sc-1qzv7kx-4"
})(["background:", ";width:100%;"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('colors.black.400'));
/** A simple wrapper to group entries */

var EntryContainer = styled_components__WEBPACK_IMPORTED_MODULE_14__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "FAQ__EntryContainer",
  componentId: "sc-1qzv7kx-5"
})(["", "{", " ", "}"], Entry, function (props) {
  return props.withNewButtons ? (0,styled_components__WEBPACK_IMPORTED_MODULE_14__/* .css */ .iv)(["[data-item='chevron-up']{display:none;}&[open]{[data-item='chevron-up']{display:inline-block;}[data-item='chevron-down']{display:none;}}summary::after{display:none;}button{display:block;}"]) : (0,styled_components__WEBPACK_IMPORTED_MODULE_14__/* .css */ .iv)(["", "{display:none;}"], CollapseBtn);
}, function (props) {
  return props.withBorderLeft && (0,styled_components__WEBPACK_IMPORTED_MODULE_14__/* .css */ .iv)(["border-left:1px solid #dcdee0;padding-left:8px;&:focus-within,&:hover{border-color:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('colors.primary.500'));
});
/**
 * A small FAQ with expendable contents.
 */

var FAQ = /*#__PURE__*/function (_Component) {
  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2___default()(FAQ, _Component);

  var _super = _createSuper(FAQ);

  function FAQ() {
    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, FAQ);

    return _super.apply(this, arguments);
  }

  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(FAQ, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          children = _this$props.children,
          withBorderLeft = _this$props.withBorderLeft,
          withNewButtons = _this$props.withNewButtons,
          titleProps = _this$props.titleProps,
          props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6___default()(_this$props, _excluded2);

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, props), {}, {
        children: [title !== null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_12__.P, _objectSpread(_objectSpread({
          fontWeight: "bold",
          mb: 1,
          color: "black.900"
        }, titleProps), {}, {
          children: title || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            id: "FAQ",
            defaultMessage: [{
              "type": 0,
              "value": "FAQ"
            }]
          })
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(EntryContainer, {
          withBorderLeft: withBorderLeft,
          withNewButtons: withNewButtons,
          children: children
        })]
      }));
    }
  }]);

  return FAQ;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component);


FAQ.__docgenInfo = {
  "description": "A small FAQ with expendable contents.",
  "methods": [],
  "displayName": "FAQ",
  "props": {
    "children": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "title": {
      "description": "The title to display above entries. Set to null to disable it.",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "titleProps": {
      "description": "Props for styling the title",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "withBorderLeft": {
      "description": "If true, a border will be displayed on the left",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "withNewButtons": {
      "description": "If true, will display a button with a chevron instead of the `+` sign",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  },
  "composes": ["../Grid"]
};

/***/ }),

/***/ 34622:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ osc_host_application; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__(46829);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var react_intl_lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./lib/constants/collectives.js
var collectives = __webpack_require__(82525);
// EXTERNAL MODULE: ./lib/errors/index.js + 1 modules
var errors = __webpack_require__(12136);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7980);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@styled-icons/icomoon/ArrowLeft2/ArrowLeft2.esm.js
var ArrowLeft2_esm = __webpack_require__(90477);
// EXTERNAL MODULE: ./node_modules/@styled-icons/icomoon/ArrowRight2/ArrowRight2.esm.js
var ArrowRight2_esm = __webpack_require__(44205);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(82580);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/spdx-license-list/index.js
var spdx_license_list = __webpack_require__(865);
// EXTERNAL MODULE: ./lib/collective.lib.js
var collective_lib = __webpack_require__(5700);
// EXTERNAL MODULE: ./lib/form-utils.js
var form_utils = __webpack_require__(40986);
// EXTERNAL MODULE: ./components/CollectivePickerAsync.js
var CollectivePickerAsync = __webpack_require__(5993);
// EXTERNAL MODULE: ./components/collectives/HomeNextIllustration.js
var HomeNextIllustration = __webpack_require__(47667);
// EXTERNAL MODULE: ./components/CollectiveTagsInput.tsx
var CollectiveTagsInput = __webpack_require__(52903);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/I18nFormatters.js
var I18nFormatters = __webpack_require__(88705);
// EXTERNAL MODULE: ./components/LoadingPlaceholder.tsx
var LoadingPlaceholder = __webpack_require__(29242);
// EXTERNAL MODULE: ./components/MessageBox.tsx + 2 modules
var MessageBox = __webpack_require__(86702);
// EXTERNAL MODULE: ./components/onboarding-modal/OnboardingProfileCard.js
var OnboardingProfileCard = __webpack_require__(14574);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledCheckbox.js
var StyledCheckbox = __webpack_require__(41433);
// EXTERNAL MODULE: ./components/StyledHr.tsx
var StyledHr = __webpack_require__(173);
// EXTERNAL MODULE: ./components/StyledInput.tsx
var StyledInput = __webpack_require__(97274);
// EXTERNAL MODULE: ./components/StyledInputFormikField.js
var StyledInputFormikField = __webpack_require__(75667);
// EXTERNAL MODULE: ./components/StyledInputGroup.js
var StyledInputGroup = __webpack_require__(32631);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./components/StyledSelect.tsx
var StyledSelect = __webpack_require__(66943);
// EXTERNAL MODULE: ./components/StyledTextarea.js
var StyledTextarea = __webpack_require__(93150);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/ChevronDown/ChevronDown.js
var ChevronDown = __webpack_require__(22733);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/ChevronUp/ChevronUp.js
var ChevronUp = __webpack_require__(54590);
// EXTERNAL MODULE: ./node_modules/react-animate-height/dist/esm/index.js
var esm = __webpack_require__(29244);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./components/Image.js
var Image = __webpack_require__(56562);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/osc-host-application/CollapseSection.js














var Content = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "CollapseSection__Content",
  componentId: "sc-1ks032i-0"
})(["opacity:", ";transition:opacity 0.5s;"], function (props) {
  return props.isExpanded ? '1' : '0';
});

var CollapseSection = function CollapseSection(_ref) {
  var title = _ref.title,
      isExpanded = _ref.isExpanded,
      toggleExpanded = _ref.toggleExpanded,
      subtitle = _ref.subtitle,
      imageSrc = _ref.imageSrc,
      children = _ref.children;

  var _useState = (0,react.useState)(isExpanded ? 'auto' : 0),
      height = _useState[0],
      setHeight = _useState[1];

  (0,react.useEffect)(function () {
    setHeight(isExpanded ? 'auto' : 0);
  }, [isExpanded]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      mt: 32,
      gridGap: "12px",
      alignItems: "flex-start",
      mb: 3,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Image/* default */.Z, {
        src: imageSrc,
        width: 48,
        height: 48
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        flex: "1",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          alignItems: "center",
          justifyContent: "stretch",
          gap: 12,
          mb: 3,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H4, {
            fontSize: "18px",
            lineHeight: "24px",
            color: "black.900",
            children: title
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
            flex: "1"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
            buttonSize: "tiny",
            type: "button",
            onClick: toggleExpanded,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
              alignItems: "center",
              gridGap: "8px",
              children: isExpanded ? /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ChevronUp/* ChevronUp */.Kh, {
                  size: 16
                }), " ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "ShowLess",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Show Less"
                  }]
                })]
              }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ChevronDown/* ChevronDown */._M, {
                  size: 16
                }), " ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "Expand",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Expand"
                  }]
                })]
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "14px",
          lineHeight: "20px",
          color: "black.700",
          children: subtitle
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* default */.Z, {
      id: "example-panel",
      duration: 500,
      height: height // see props documentation below
      ,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Content, {
        isExpanded: isExpanded,
        children: children
      })
    })]
  });
};

CollapseSection.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CollapseSection",
  "props": {
    "title": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": true
    },
    "subtitle": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": true
    },
    "imageSrc": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "children": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": true
    },
    "isExpanded": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": true
    },
    "toggleExpanded": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    }
  }
};
/* harmony default export */ var osc_host_application_CollapseSection = (CollapseSection);
// EXTERNAL MODULE: ./components/StyledCard.tsx
var StyledCard = __webpack_require__(19156);
;// CONCATENATED MODULE: ./components/osc-host-application/ProjectTypeSelect.js









var ProjectTypeOptionContainer = styled_components_browser_esm/* default.label.withConfig */.ZP.label.withConfig({
  displayName: "ProjectTypeSelect__ProjectTypeOptionContainer",
  componentId: "sc-ye95hq-0"
})(["display:flex;align-items:baseline;padding:15px 16px;margin-bottom:0;cursor:pointer;background:white;justify-content:flex-start;flex:1;border-top:1px solid #dcdee0;border-left:1px solid #dcdee0;margin-top:-1px;margin-left:-1px;input[type='radio']{margin-right:4px;}"]);

var ProjectTypeOption = function ProjectTypeOption(_ref) {
  var name = _ref.name,
      value = _ref.value,
      label = _ref.label,
      description = _ref.description,
      isChecked = _ref.isChecked,
      onChange = _ref.onChange,
      iconSrc = _ref.iconSrc;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ProjectTypeOptionContainer, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      mr: 2,
      alignSelf: 'center',
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
        type: "radio",
        name: name,
        value: value,
        checked: isChecked,
        onChange: onChange
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      mr: 3,
      flexShrink: "0",
      alignSelf: "center",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Image/* default */.Z, {
        src: iconSrc,
        width: 48,
        height: 48
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        fontSize: "16px",
        fontWeight: "bold",
        mb: 2,
        children: label
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        fontSize: "12px",
        color: "black.600",
        fontWeight: "normal",
        children: description
      })]
    })]
  });
};

var Fieldset = styled_components_browser_esm/* default.fieldset.withConfig */.ZP.fieldset.withConfig({
  displayName: "ProjectTypeSelect__Fieldset",
  componentId: "sc-ye95hq-1"
})(["border:none;padding:0;margin:0;"]);
var msg = (0,react_intl_lib.defineMessages)({
  code: {
    id: "HostApplication.ProjectTypeSelect.code",
    defaultMessage: [{
      "type": 0,
      "value": "Code"
    }]
  },
  codeDescription: {
    id: "HostApplication.ProjectTypeSelect.codeDescription",
    defaultMessage: [{
      "type": 0,
      "value": "My project is primarily concerned with the development and maintenance of a specific codebase."
    }]
  },
  community: {
    id: "community",
    defaultMessage: [{
      "type": 0,
      "value": "Community"
    }]
  },
  communityDescription: {
    id: "HostApplication.ProjectTypeSelect.communityDescription",
    defaultMessage: [{
      "type": 0,
      "value": "My project is not strongly associated with a specific codebase."
    }]
  }
});

var ProjectTypeSelect = function ProjectTypeSelect(_ref2) {
  var name = _ref2.name,
      value = _ref2.value,
      onChange = _ref2.onChange,
      error = _ref2.error;
  var intl = (0,useIntl/* default */.Z)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledCard/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Fieldset, {
        onChange: onChange,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          flexDirection: ['column', 'row'],
          overflow: "hidden",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ProjectTypeOption, {
            name: name,
            value: "CODE",
            label: intl.formatMessage(msg.code),
            description: intl.formatMessage(msg.codeDescription),
            isChecked: value === 'CODE',
            onChange: onChange,
            iconSrc: "/static/images/night-sky.png"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ProjectTypeOption, {
            name: name,
            value: "COMMUNITY",
            label: intl.formatMessage(msg.community),
            description: intl.formatMessage(msg.communityDescription),
            isChecked: value === 'COMMUNITY',
            onChange: onChange,
            iconSrc: "/static/images/community.png"
          })]
        })
      })
    }), error]
  });
};

ProjectTypeSelect.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ProjectTypeSelect",
  "props": {
    "name": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "value": {
      "description": "",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'CODE'",
          "computed": false
        }, {
          "value": "'COMMUNITY'",
          "computed": false
        }]
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
    "error": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    }
  }
};
/* harmony default export */ var osc_host_application_ProjectTypeSelect = (/*#__PURE__*/react.memo(ProjectTypeSelect));
;// CONCATENATED MODULE: ./components/osc-host-application/ApplicationForm.js






var _templateObject, _templateObject2;



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





































var createCollectiveMutation = (0,lib/* default */.ZP)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  mutation CreateCollective(\n    $collective: CollectiveCreateInput!\n    $host: AccountReferenceInput\n    $user: IndividualCreateInput\n    $message: String\n    $applicationData: JSON\n    $inviteMembers: [InviteMemberInput]\n  ) {\n    createCollective(\n      collective: $collective\n      host: $host\n      user: $user\n      message: $message\n      applicationData: $applicationData\n      inviteMembers: $inviteMembers\n    ) {\n      id\n      slug\n      isApproved\n      host {\n        id\n        slug\n      }\n    }\n  }\n"])));
var applyToHostMutation = (0,lib/* default */.ZP)(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n  mutation ApplyToHost(\n    $collective: AccountReferenceInput!\n    $host: AccountReferenceInput!\n    $message: String\n    $applicationData: JSON\n    $inviteMembers: [InviteMemberInput]\n  ) {\n    applyToHost(\n      collective: $collective\n      host: $host\n      message: $message\n      applicationData: $applicationData\n      inviteMembers: $inviteMembers\n    ) {\n      id\n      slug\n      ... on AccountWithHost {\n        isApproved\n        host {\n          id\n          slug\n        }\n      }\n    }\n  }\n"])));
var messages = (0,react_intl_lib.defineMessages)({
  nameLabel: {
    id: "createCollective.form.nameLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Collective name"
    }]
  },
  suggestedLabel: {
    id: "createCollective.form.suggestedLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Suggested"
    }]
  },
  descriptionLabel: {
    id: "createCollective.form.descriptionLabel",
    defaultMessage: [{
      "type": 0,
      "value": "What does your Collective do?"
    }]
  },
  tagsLabel: {
    id: "Tags",
    defaultMessage: [{
      "type": 0,
      "value": "Tags"
    }]
  },
  descriptionHint: {
    id: "createCollective.form.descriptionHint",
    defaultMessage: [{
      "type": 0,
      "value": "Write a short description (150 characters max)"
    }]
  },
  descriptionPlaceholder: {
    id: "create.collective.placeholder",
    defaultMessage: [{
      "type": 0,
      "value": "Making the world a better place"
    }]
  },
  errorSlugHyphen: {
    id: "createCollective.form.error.slug.hyphen",
    defaultMessage: [{
      "type": 0,
      "value": "Collective slug URL cannot start or end with a hyphen"
    }]
  },
  name: {
    id: "OCFHostApplication.name.label",
    defaultMessage: [{
      "type": 0,
      "value": "Your Name"
    }]
  },
  email: {
    id: "Form.yourEmail",
    defaultMessage: [{
      "type": 0,
      "value": "Your email address"
    }]
  },
  slug: {
    id: "createCollective.form.slugLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Set your URL"
    }]
  },
  repositoryUrl: {
    id: "HostApplication.form.RepositoryUrlLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Your Repository or Organization"
    }]
  },
  repositoryLicense: {
    id: "HostApplication.form.license",
    defaultMessage: [{
      "type": 0,
      "value": "License"
    }]
  },
  tellUsMoreLabel: {
    id: "HostApplication.form.tellUsMoreLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Tell us a little about your project, what you're working on and what you need from us."
    }]
  },
  tellUsMorePlaceholder: {
    id: "HostApplication.form.tellUsMorePlaceHolder",
    defaultMessage: [{
      "type": 0,
      "value": "Please include all the info you think is valuable of your Collective"
    }]
  },
  tellUsMoreHelpText: {
    id: "HostApplication.form.tellUsMoreHelpText",
    defaultMessage: [{
      "type": 0,
      "value": "We want to know more about you and how we can help you."
    }]
  },
  linksToPreviousEvents: {
    id: "HostApplication.form.linksToPreviousEvents",
    defaultMessage: [{
      "type": 0,
      "value": "Links to previous events (if any)"
    }]
  },
  linksToPreviousEventsPlaceholder: {
    id: "HostApplication.form.linksToPreviousEventsPlaceholder",
    defaultMessage: [{
      "type": 0,
      "value": "Enter URL of previous events."
    }]
  },
  linksToPreviousEventsHelpText: {
    id: "HostApplication.form.linksToPreviousEventsHelpText",
    defaultMessage: [{
      "type": 0,
      "value": "YouTube, Discord, Disqus, Meetup, Eventbrite events etc are all welcome. We just want to understand your community presence."
    }]
  },
  amountOfMembers: {
    id: "HostApplication.form.amountOfMembers",
    defaultMessage: [{
      "type": 0,
      "value": "How many members do you have?"
    }]
  },
  extraLicenseInfo: {
    id: "HostApplication.form.extraLicenseInfo",
    defaultMessage: [{
      "type": 0,
      "value": "Extra information about your license(s)"
    }]
  },
  extraLicenseInfoHelpText: {
    id: "HostApplication.form.extraLicenseInfoHelpText",
    defaultMessage: [{
      "type": 0,
      "value": "If your license is unrecognized or have more than one license, add information here"
    }]
  },
  publicInformation: {
    id: "HostApplication.form.publicInformation",
    defaultMessage: [{
      "type": 0,
      "value": "This information is public. Please do not add any personal information such as names or addresses in this field."
    }]
  },
  aboutYourCommunityTitle: {
    id: "HostApplication.form.aboutYourCommunity",
    defaultMessage: [{
      "type": 0,
      "value": "About your Community "
    }, {
      "type": 1,
      "value": "optional"
    }]
  },
  aboutYourCommunitySubtitle: {
    id: "HostApplication.form.aboutYourCommunity.subtitle",
    defaultMessage: [{
      "type": 0,
      "value": "If applicable, please share information about your community and your events so we can properly consider your application."
    }]
  },
  aboutYourCodeTitle: {
    id: "HostApplication.form.code",
    defaultMessage: [{
      "type": 0,
      "value": "About your Code "
    }, {
      "type": 1,
      "value": "optional"
    }]
  },
  aboutYourCodeSubtitle: {
    id: "HostApplication.form.code.subtitle",
    defaultMessage: [{
      "type": 0,
      "value": "If a codebase is central to your community's work please share information about your code and license so we can properly consider your application."
    }]
  }
});

var useApplicationMutation = function useApplicationMutation(canApplyWithCollective) {
  return (0,client.useMutation)(canApplyWithCollective ? applyToHostMutation : createCollectiveMutation, {
    context: helpers/* API_V2_CONTEXT */.T
  });
};

var ApplicationForm = function ApplicationForm(_ref) {
  var _initialValues$applic;

  var LoggedInUser = _ref.LoggedInUser,
      loadingLoggedInUser = _ref.loadingLoggedInUser,
      initialValues = _ref.initialValues,
      setInitialValues = _ref.setInitialValues,
      loadingCollective = _ref.loadingCollective,
      canApplyWithCollective = _ref.canApplyWithCollective,
      router = _ref.router,
      collectiveWithSlug = _ref.collective,
      host = _ref.host,
      refetchLoggedInUser = _ref.refetchLoggedInUser,
      popularTags = _ref.popularTags;
  var intl = (0,useIntl/* default */.Z)();

  var _useApplicationMutati = useApplicationMutation(canApplyWithCollective),
      _useApplicationMutati2 = slicedToArray_default()(_useApplicationMutati, 2),
      submitApplication = _useApplicationMutati2[0],
      _useApplicationMutati3 = _useApplicationMutati2[1],
      submitting = _useApplicationMutati3.loading,
      error = _useApplicationMutati3.error;

  var _useState = (0,react.useState)(false),
      codeSectionExpanded = _useState[0],
      setCodeSectionExpanded = _useState[1];

  var _useState2 = (0,react.useState)(false),
      communitySectionExpanded = _useState2[0],
      setCommunitySectionExpanded = _useState2[1];

  (0,react.useEffect)(function () {
    var _ref2 = (initialValues === null || initialValues === void 0 ? void 0 : initialValues.applicationData) || {},
        typeOfProject = _ref2.typeOfProject;

    setCodeSectionExpanded(typeOfProject === 'CODE');
  }, [initialValues === null || initialValues === void 0 ? void 0 : (_initialValues$applic = initialValues.applicationData) === null || _initialValues$applic === void 0 ? void 0 : _initialValues$applic.typeOfProject]);

  var validate = function validate(values) {
    var errors = (0,form_utils/* requireFields */.ay)(values, ['user.name', 'user.email', 'collective.name', 'collective.slug', 'message', 'collective.description', 'applicationData.typeOfProject']);
    (0,form_utils/* verifyEmailPattern */.Sn)(errors, values, 'user.email');
    (0,form_utils/* verifyFieldLength */.zy)(intl, errors, values, 'collective.description', 1, 150);
    (0,form_utils/* verifyURLPattern */.zO)(errors, values, 'applicationData.repositoryUrl');
    (0,form_utils/* verifyChecked */.Yy)(errors, values, 'termsOfServiceOC');
    return errors;
  };

  var submit = /*#__PURE__*/function () {
    var _ref4 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(_ref3) {
      var user, collective, applicationData, inviteMembers, message, variables, response, resCollective;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user = _ref3.user, collective = _ref3.collective, applicationData = _ref3.applicationData, inviteMembers = _ref3.inviteMembers, message = _ref3.message;
              variables = {
                collective: _objectSpread({}, canApplyWithCollective ? {
                  id: collectiveWithSlug.id,
                  slug: collectiveWithSlug.slug
                } : _objectSpread(_objectSpread({}, collective), {}, {
                  repositoryUrl: applicationData.repositoryUrl
                })),
                host: {
                  legacyId: collectives/* OPENSOURCE_COLLECTIVE_ID */.kp
                },
                user: user,
                applicationData: applicationData,
                inviteMembers: inviteMembers.map(function (invite) {
                  return _objectSpread(_objectSpread({}, invite), {}, {
                    memberAccount: {
                      legacyId: invite.memberAccount.id
                    }
                  });
                }),
                message: message
              };
              _context.next = 4;
              return submitApplication({
                variables: variables
              });

            case 4:
              response = _context.sent;
              resCollective = response.data.createCollective || response.data.applyToHost;

              if (!resCollective) {
                _context.next = 17;
                break;
              }

              if (!resCollective.isApproved) {
                _context.next = 14;
                break;
              }

              _context.next = 10;
              return refetchLoggedInUser();

            case 10:
              _context.next = 12;
              return router.push("/".concat(resCollective.slug, "/onboarding"));

            case 12:
              _context.next = 16;
              break;

            case 14:
              _context.next = 16;
              return router.push('/opensource/apply/success');

            case 16:
              window.scrollTo(0, 0);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function submit(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  if (error) {
    // Scroll the user to the top in order to see the error message
    window.scrollTo(0, 0);
  } // Turn licenses into an array and sort them on label/name


  var spdxLicenseList = Object.keys(spdx_license_list).map(function (key) {
    return {
      label: spdx_license_list[key].name,
      value: key,
      key: key
    };
  }).sort(function (a, b) {
    return a.label.localeCompare(b.label);
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      mt: ['24px', '48px'],
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        flexDirection: ['column', 'row'],
        alignItems: "center",
        justifyContent: "center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          width: '160px',
          height: '160px',
          mb: "24px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
            alt: "Open Source Collective logotype",
            src: "/static/images/osc-logo.png",
            width: 160,
            height: 160
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          textAlign: ['center', 'left'],
          width: ['288px', '488px'],
          mb: 4,
          ml: [null, '24px'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H1, {
            fontSize: "32px",
            lineHeight: "40px",
            letterSpacing: "-0.008em",
            color: "black.900",
            textAlign: ['center', 'left'],
            mb: "14px",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "HostApplication.header",
              defaultMessage: [{
                "type": 0,
                "value": "Apply with your Collective"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "500",
            color: "black.700",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "HostApplication.form.subheading",
              defaultMessage: [{
                "type": 0,
                "value": "Introduce your Collective, please incude as much context as possible so we can give you the best service we can! Have doubts? "
              }, {
                "type": 1,
                "value": "faqLink"
              }],
              values: {
                faqLink: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                  href: "https://docs.oscollective.org/faq/general",
                  openInNewTab: true,
                  color: "purple.500",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "HostApplication.form.readFaqs",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Read our FAQs"
                    }]
                  })
                })
              }
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
      justifyContent: "center",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        flexDirection: "column",
        flex: '1',
        maxWidth: "993px",
        children: [error && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
          alignItems: "center",
          justifyContent: "center",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
            type: "error",
            withIcon: true,
            mb: [1, 3],
            children: (0,errors/* i18nGraphqlException */.t2)(intl, error)
          })
        }), loadingCollective ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
          width: ['256px', '484px', '664px'],
          height: 463,
          mb: 4,
          mt: [3, 0],
          mr: [null, '36px', null, null, '102px'],
          borderRadius: "8px"
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Formik */.J9, {
          initialValues: initialValues,
          onSubmit: submit,
          validate: validate,
          children: function children(formik) {
            var _host$policies, _values$inviteMembers, _values$user, _values$inviteMembers2, _host$policies2;

            var values = formik.values,
                touched = formik.touched,
                setFieldValue = formik.setFieldValue,
                setValues = formik.setValues,
                handleSubmit = formik.handleSubmit;

            var handleSlugChange = function handleSlugChange(e) {
              if (!touched.slug) {
                setFieldValue('collective.slug', (0,collective_lib/* suggestSlug */.e4)(e.target.value));
              }
            };

            if (!loadingLoggedInUser && LoggedInUser && !values.user.name && !values.user.email) {
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                user: {
                  name: LoggedInUser.collective.name,
                  email: LoggedInUser.email
                }
              }, collectiveWithSlug && {
                collective: {
                  name: collectiveWithSlug.name,
                  slug: collectiveWithSlug.slug,
                  description: collectiveWithSlug.description
                }
              }));
            }

            return /*#__PURE__*/(0,jsx_runtime.jsxs)(formik_esm/* Form */.l0, {
              "data-cy": "ccf-form",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
                justifyContent: "center",
                flexDirection: "column",
                mb: 4,
                mt: [3, 0],
                border: "1px solid #DCDEE0",
                padding: ['16px', '32px'],
                display: "flex",
                borderRadius: "8px",
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                  alignItems: "center",
                  justifyContent: "stretch",
                  gap: 12,
                  mb: 3,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H4, {
                    fontSize: "18px",
                    lineHeight: "24px",
                    color: "black.900",
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "HostApplication.form.mainInfo",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Main info"
                      }]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
                    flex: "1"
                  })]
                }), !LoggedInUser && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Grid */.rj, {
                  gridTemplateColumns: ['1fr', 'repeat(2, minmax(0, 1fr))'],
                  gridGap: 3,
                  py: 2,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
                      label: intl.formatMessage(messages.name),
                      labelFontSize: "16px",
                      labelProps: {
                        fontWeight: '600'
                      },
                      disabled: !!LoggedInUser,
                      name: "user.name",
                      htmlFor: "name",
                      my: 2,
                      required: true,
                      children: function children(_ref5) {
                        var field = _ref5.field;
                        return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, _objectSpread({
                          type: "text",
                          placeholder: "Thomas Anderson",
                          px: "7px"
                        }, field));
                      }
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
                      label: intl.formatMessage(messages.email),
                      labelFontSize: "16px",
                      labelProps: {
                        fontWeight: '600'
                      },
                      disabled: !!LoggedInUser,
                      name: "user.email",
                      htmlFor: "email",
                      type: "email",
                      required: true,
                      children: function children(_ref6) {
                        var field = _ref6.field;
                        return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, _objectSpread({
                          type: "email",
                          placeholder: "tanderson@gmail.com",
                          px: "7px"
                        }, field));
                      }
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                      fontSize: "11px",
                      lineHeight: "16px",
                      color: "black.600",
                      mt: "6px",
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                        id: "OCFHostApplication.applicationForm.emailInstruction",
                        defaultMessage: [{
                          "type": 0,
                          "value": "We will use this email to create your account."
                        }]
                      })
                    })]
                  })]
                }), !canApplyWithCollective && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Grid */.rj, {
                    gridTemplateColumns: ['1fr', 'repeat(2, minmax(0, 1fr))'],
                    gridGap: 3,
                    mb: 3,
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
                        label: intl.formatMessage(messages.nameLabel),
                        labelFontSize: "16px",
                        labelProps: {
                          fontWeight: '600'
                        },
                        name: "collective.name",
                        htmlFor: "initiativeName",
                        required: true,
                        onChange: handleSlugChange,
                        children: function children(_ref7) {
                          var field = _ref7.field;
                          return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, _objectSpread({
                            type: "text",
                            placeholder: "e.g Agora Collective",
                            px: "7px"
                          }, field));
                        }
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
                        label: intl.formatMessage(messages.slug),
                        helpText: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                          id: "03Q893",
                          defaultMessage: [{
                            "type": 0,
                            "value": "This can be edited later"
                          }]
                        }),
                        labelFontSize: "16px",
                        labelProps: {
                          fontWeight: '600'
                        },
                        name: "collective.slug",
                        htmlFor: "slug",
                        required: true,
                        children: function children(_ref8) {
                          var field = _ref8.field;
                          return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputGroup/* default */.Z, _objectSpread(_objectSpread({
                            prepend: "opencollective.com/",
                            type: "url",
                            placeholder: "agora"
                          }, field), {}, {
                            onChange: function onChange(e) {
                              return setFieldValue('collective.slug', e.target.value);
                            },
                            prependProps: {
                              color: '#9D9FA3'
                            }
                          }));
                        }
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                        fontSize: "11px",
                        lineHeight: "16px",
                        color: "black.600",
                        mt: "6px",
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                          id: "createCollective.form.suggestedLabel",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Suggested"
                          }]
                        })
                      })]
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
                    mb: 3,
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
                      name: "collective.description",
                      htmlFor: "description",
                      labelFontSize: "16px",
                      labelProps: {
                        fontWeight: '600'
                      },
                      label: intl.formatMessage(messages.descriptionLabel),
                      required: true,
                      "data-cy": "ccf-form-description",
                      children: function children(_ref9) {
                        var field = _ref9.field;
                        return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTextarea/* default */.Z, _objectSpread(_objectSpread({}, field), {}, {
                          rows: 3,
                          width: "100%",
                          maxLength: 150,
                          showCount: true,
                          placeholder: intl.formatMessage(messages.descriptionPlaceholder)
                        }));
                      }
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                      fontSize: "13px",
                      lineHeight: "20px",
                      color: "black.600",
                      mt: "6px",
                      children: intl.formatMessage(messages.descriptionHint)
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
                      name: "collective.tags",
                      htmlFor: "tags",
                      labelFontSize: "16px",
                      labelProps: {
                        fontWeight: '600'
                      },
                      label: intl.formatMessage(messages.tagsLabel),
                      "data-cy": "ccf-form-tags",
                      children: function children(_ref10) {
                        var field = _ref10.field;
                        return /*#__PURE__*/(0,jsx_runtime.jsx)(CollectiveTagsInput/* default */.Z, _objectSpread(_objectSpread({}, field), {}, {
                          defaultValue: field.value,
                          onChange: function onChange(tags) {
                            setFieldValue('collective.tags', tags.map(function (t) {
                              return t.value;
                            }));
                          },
                          suggestedTags: popularTags
                        }));
                      }
                    })
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
                  mb: 3,
                  mt: '40px',
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                    alignItems: "center",
                    justifyContent: "stretch",
                    gap: 12,
                    mb: 3,
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H4, {
                      fontSize: "18px",
                      lineHeight: "24px",
                      color: "black.900",
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                        id: "HostApplication.form.typeOfProject",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Type of Project"
                        }]
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
                      flex: "1"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                    fontSize: "14px",
                    lineHeight: "20px",
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "HostApplication.form.typeOfProject.description",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Open Source Collective hosts open source software projects and adjacent communities (meetup groups, educational programs and mentorship schemes etc). What is the primary focus of your project?"
                      }]
                    })
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
                  name: "applicationData.typeOfProject",
                  htmlFor: "typeOfProject",
                  required: true,
                  children: function children(_ref11) {
                    var field = _ref11.field;
                    return /*#__PURE__*/(0,jsx_runtime.jsx)(osc_host_application_ProjectTypeSelect, _objectSpread(_objectSpread({}, field), {}, {
                      onChange: function onChange(e) {
                        var value = e.target.value;

                        if (value === 'COMMUNITY') {
                          setCommunitySectionExpanded(true);

                          if (!values.applicationData.repositoryUrl) {
                            setCodeSectionExpanded(false);
                          }
                        } else if (value === 'CODE') {
                          setCodeSectionExpanded(true);
                          setCommunitySectionExpanded(false);
                        }

                        setFieldValue('applicationData.typeOfProject', value);
                      }
                    }));
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)(osc_host_application_CollapseSection, {
                  title: intl.formatMessage(messages.aboutYourCodeTitle, {
                    optional: values.applicationData.typeOfProject === 'COMMUNITY' ? /*#__PURE__*/(0,jsx_runtime.jsxs)(Text/* Span */.Dr, {
                      fontWeight: 400,
                      color: "black.700",
                      children: ["(", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                        id: "forms.optional",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Optional"
                        }]
                      }), ")"]
                    }) : null
                  }),
                  isExpanded: codeSectionExpanded,
                  toggleExpanded: function toggleExpanded() {
                    return setCodeSectionExpanded(!codeSectionExpanded);
                  },
                  imageSrc: "/static/images/night-sky.png",
                  subtitle: intl.formatMessage(messages.aboutYourCodeSubtitle),
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Grid */.rj, {
                    gridTemplateColumns: ['1fr', 'repeat(2, minmax(0, 1fr))'],
                    gridGap: 3,
                    pt: 2,
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
                        label: intl.formatMessage(messages.repositoryUrl),
                        labelFontSize: "16px",
                        labelProps: {
                          fontWeight: '600'
                        },
                        name: "applicationData.repositoryUrl",
                        htmlFor: "repositoryUrl",
                        required: values.applicationData.typeOfProject === 'CODE' || undefined,
                        children: function children(_ref12) {
                          var field = _ref12.field;
                          return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputGroup/* default */.Z, _objectSpread(_objectSpread({
                            type: "url",
                            placeholder: "https://github.com"
                          }, field), {}, {
                            onChange: function onChange(e) {
                              return setFieldValue('applicationData.repositoryUrl', e.target.value);
                            }
                          }));
                        }
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                        fontSize: "13px",
                        lineHeight: "20px",
                        color: "black.600",
                        mt: "6px",
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                          id: "HostApplication.repositoryUrlHint",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Can be GitHub, GitLab or any URL"
                          }]
                        })
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
                      label: intl.formatMessage(messages.repositoryLicense),
                      labelFontSize: "16px",
                      labelProps: {
                        fontWeight: '600'
                      },
                      name: "applicationData.licenseSpdxId",
                      htmlFor: "licenseSpdxId",
                      children: function children(_ref13) {
                        var field = _ref13.field;
                        return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledSelect/* default */.ZP, _objectSpread(_objectSpread({
                          inputId: field.id,
                          options: spdxLicenseList
                        }, field), {}, {
                          value: spdxLicenseList.find(function (option) {
                            return option.value === field.value;
                          }),
                          onChange: function onChange(_ref14) {
                            var value = _ref14.value;
                            setFieldValue('applicationData.licenseSpdxId', value);
                          }
                        }));
                      }
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
                    mt: 20,
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
                      name: "applicationData.extraLicenseInfo",
                      htmlFor: "extraLicenseInformation",
                      labelFontSize: "16px",
                      labelProps: {
                        fontWeight: '600'
                      },
                      label: intl.formatMessage(messages.extraLicenseInfo),
                      children: function children(_ref15) {
                        var field = _ref15.field;
                        return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTextarea/* default */.Z, _objectSpread(_objectSpread({}, field), {}, {
                          rows: 4,
                          placeholder: intl.formatMessage(messages.extraLicenseInfoHelpText)
                        }));
                      }
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                      fontSize: "13px",
                      lineHeight: "20px",
                      color: "black.700",
                      mt: 2,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, _objectSpread({}, messages.extraLicenseInfoHelpText))
                    })]
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)(osc_host_application_CollapseSection, {
                  title: intl.formatMessage(messages.aboutYourCommunityTitle, {
                    optional: values.applicationData.typeOfProject === 'CODE' ? /*#__PURE__*/(0,jsx_runtime.jsxs)(Text/* Span */.Dr, {
                      fontWeight: 400,
                      color: "black.700",
                      children: ["(", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                        id: "forms.optional",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Optional"
                        }]
                      }), ")"]
                    }) : null
                  }),
                  isExpanded: communitySectionExpanded,
                  toggleExpanded: function toggleExpanded() {
                    return setCommunitySectionExpanded(!communitySectionExpanded);
                  },
                  imageSrc: "/static/images/community.png",
                  subtitle: intl.formatMessage(messages.aboutYourCommunitySubtitle),
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Grid */.rj, {
                    gridTemplateColumns: ['1fr', 'repeat(2, minmax(0, 1fr))'],
                    gridGap: 3,
                    pt: 2,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
                        label: intl.formatMessage(messages.amountOfMembers),
                        labelFontSize: "16px",
                        labelProps: {
                          fontWeight: '600'
                        },
                        name: "applicationData.amountOfMembers",
                        htmlFor: "amountOfMembers",
                        required: values.applicationData.typeOfProject === 'COMMUNITY' || undefined,
                        children: function children(_ref16) {
                          var field = _ref16.field;
                          return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputGroup/* default */.Z, _objectSpread(_objectSpread({
                            placeholder: "0-10"
                          }, field), {}, {
                            onChange: function onChange(e) {
                              return setFieldValue('applicationData.amountOfMembers', e.target.value);
                            }
                          }));
                        }
                      })
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
                    mt: 20,
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
                      name: "applicationData.previousEvents",
                      htmlFor: "previousEvents",
                      labelFontSize: "16px",
                      labelProps: {
                        fontWeight: '600'
                      },
                      label: intl.formatMessage(messages.linksToPreviousEvents),
                      children: function children(_ref17) {
                        var field = _ref17.field;
                        return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTextarea/* default */.Z, _objectSpread(_objectSpread({}, field), {}, {
                          rows: 4,
                          placeholder: intl.formatMessage(messages.linksToPreviousEventsPlaceholder)
                        }));
                      }
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                      fontSize: "13px",
                      lineHeight: "20px",
                      color: "black.700",
                      mt: 2,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, _objectSpread({}, messages.linksToPreviousEventsHelpText))
                    })]
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                  alignItems: "center",
                  justifyContent: "stretch",
                  gap: 12,
                  mt: 32,
                  mb: 3,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H4, {
                    fontSize: "18px",
                    lineHeight: "24px",
                    color: "black.900",
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "HostApplication.form.team",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Your team"
                      }]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
                    flex: "1"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
                  mb: 2,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Text.H4, {
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "black.800",
                    mb: 0,
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "AddedAdministrators",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Added Administrators"
                      }]
                    }), (host === null || host === void 0 ? void 0 : (_host$policies = host.policies) === null || _host$policies === void 0 ? void 0 : _host$policies.COLLECTIVE_MINIMUM_ADMINS) && /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                      fontWeight: "300",
                      fontSize: "11px",
                      color: "black.700",
                      letterSpacing: "0.06em",
                      children: " (".concat(1 + ((_values$inviteMembers = values.inviteMembers) === null || _values$inviteMembers === void 0 ? void 0 : _values$inviteMembers.length), "/").concat(host.policies.COLLECTIVE_MINIMUM_ADMINS.numberOfAdmins, ")")
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                    width: "100%",
                    flexWrap: "wrap",
                    "data-cy": "profile-card",
                    children: [LoggedInUser ? /*#__PURE__*/(0,jsx_runtime.jsx)(OnboardingProfileCard/* default */.Z, {
                      collective: LoggedInUser.collective
                    }, LoggedInUser.collective.id) : ((_values$user = values.user) === null || _values$user === void 0 ? void 0 : _values$user.name) && /*#__PURE__*/(0,jsx_runtime.jsx)(OnboardingProfileCard/* default */.Z, {
                      collective: values.user
                    }, "0"), (_values$inviteMembers2 = values.inviteMembers) === null || _values$inviteMembers2 === void 0 ? void 0 : _values$inviteMembers2.map(function (invite) {
                      return /*#__PURE__*/(0,jsx_runtime.jsx)(OnboardingProfileCard/* default */.Z, {
                        collective: invite.memberAccount,
                        removeAdmin: function removeAdmin() {
                          return setFieldValue('inviteMembers', values.inviteMembers.filter(function (i) {
                            return i.memberAccount.id !== invite.memberAccount.id;
                          }));
                        }
                      }, invite.memberAccount.id);
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H4, {
                      mt: 2,
                      fontSize: "16px",
                      color: "black.800",
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                        id: "InviteAdministrators",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Invite Administrators"
                        }]
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(CollectivePickerAsync/* default */.Z, {
                      inputId: "onboarding-admin-picker",
                      creatable: true,
                      collective: null,
                      types: ['USER'],
                      "data-cy": "admin-picker",
                      filterResults: function filterResults(collectives) {
                        return collectives.filter(function (collective) {
                          return !values.inviteMembers.some(function (invite) {
                            return invite.memberAccount.id === collective.id;
                          });
                        });
                      },
                      onChange: function onChange(option) {
                        setFieldValue('inviteMembers', [].concat(toConsumableArray_default()(values.inviteMembers), [{
                          role: 'ADMIN',
                          memberAccount: option.value
                        }]));
                      }
                    })]
                  }), (host === null || host === void 0 ? void 0 : (_host$policies2 = host.policies) === null || _host$policies2 === void 0 ? void 0 : _host$policies2.COLLECTIVE_MINIMUM_ADMINS) && /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
                    type: "info",
                    mt: 3,
                    fontSize: "13px",
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "GTK0Wf",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Your selected Fiscal Host requires you to add a minimum of "
                      }, {
                        "type": 6,
                        "value": "numberOfAdmins",
                        "options": {
                          "one": {
                            "value": [{
                              "type": 7
                            }, {
                              "type": 0,
                              "value": " admin"
                            }]
                          },
                          "other": {
                            "value": [{
                              "type": 7
                            }, {
                              "type": 0,
                              "value": " admins"
                            }]
                          }
                        },
                        "offset": 0,
                        "pluralType": "cardinal"
                      }, {
                        "type": 0,
                        "value": ". You can manage your admins from the Collective Settings."
                      }],
                      values: host.policies.COLLECTIVE_MINIMUM_ADMINS
                    })
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
                  mt: 24,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
                    name: "message",
                    htmlFor: "apply-create-message",
                    required: true,
                    labelFontSize: "16px",
                    labelProps: {
                      fontWeight: '600'
                    },
                    label: intl.formatMessage(messages.tellUsMoreLabel),
                    "data-cy": "ccf-form-message",
                    children: function children(_ref18) {
                      var field = _ref18.field;
                      return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTextarea/* default */.Z, _objectSpread(_objectSpread({}, field), {}, {
                        rows: 6,
                        placeholder: intl.formatMessage(messages.tellUsMorePlaceholder)
                      }));
                    }
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                    fontSize: "13px",
                    lineHeight: "20px",
                    color: "black.700",
                    mt: 2,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, _objectSpread({}, messages.tellUsMoreHelpText))
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                  mb: 2,
                  mt: 40,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {})
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
                  display: "flex",
                  alignSelf: "flex-start",
                  alignItems: "center",
                  my: 2,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                    mr: 3,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
                      name: "termsOfServiceOC",
                      required: true,
                      children: function children(_ref19) {
                        var field = _ref19.field;
                        return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCheckbox/* default */.Z, {
                          size: "16px",
                          name: field.name,
                          required: field.required,
                          checked: field.value,
                          onChange: function onChange(_ref20) {
                            var checked = _ref20.checked;
                            return setFieldValue(field.name, checked);
                          },
                          error: field.error,
                          label: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                            ml: 1,
                            fontSize: "12px",
                            lineHeight: "16px",
                            fontWeight: "400",
                            color: "black.800",
                            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                              id: "OC.tos.label",
                              defaultMessage: [{
                                "type": 0,
                                "value": "I agree with the "
                              }, {
                                "type": 8,
                                "value": "TOSLink",
                                "children": [{
                                  "type": 0,
                                  "value": "terms of service"
                                }]
                              }, {
                                "type": 0,
                                "value": " of Open Collective."
                              }],
                              values: {
                                TOSLink: (0,I18nFormatters/* getI18nLink */.fw)({
                                  href: '/tos',
                                  color: '#6F5AFA',
                                  openInNewTab: true,
                                  onClick: function onClick(e) {
                                    return e.stopPropagation();
                                  } // don't check the checkbox when clicking on the link

                                })
                              }
                            })
                          })
                        });
                      }
                    })
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
                justifyContent: "center",
                mb: 48,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Grid */.rj, {
                  gridTemplateColumns: ['1fr', '1fr 1fr'],
                  gridGap: '32px',
                  maxWidth: 672,
                  px: 48,
                  flex: "1",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
                    buttonStyle: "purpleSecondary",
                    buttonSize: "large",
                    textAlign: "center",
                    onClick: function onClick() {
                      setInitialValues(_objectSpread(_objectSpread({}, initialValues), values));
                      window && window.history.back();
                    },
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ArrowLeft2_esm/* ArrowLeft2 */.b, {
                      size: "14px"
                    }), "\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "Back",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Back"
                      }]
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
                    type: "submit",
                    textAlign: "center",
                    buttonSize: "large",
                    buttonStyle: "purple",
                    onSubmit: handleSubmit,
                    loading: submitting,
                    "data-cy": "ccf-form-submit",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "actions.submitApplication",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Submit application"
                      }]
                    }), "\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowRight2_esm/* ArrowRight2 */.a, {
                      size: "14px"
                    })]
                  })]
                })
              })]
            });
          }
        })]
      })
    })]
  });
};

ApplicationForm.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ApplicationForm",
  "props": {
    "loadingLoggedInUser": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "LoggedInUser": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "refetchLoggedInUser": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "initialValues": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "setInitialValues": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
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
          "type": {
            "name": "string",
            "required": false
          },
          "isAdmin": {
            "name": "bool",
            "required": false
          },
          "description": {
            "name": "custom",
            "raw": "PropTypes.description",
            "required": false
          }
        }
      },
      "required": false
    },
    "host": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "slug": {
            "name": "string",
            "required": false
          },
          "policies": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": false
    },
    "popularTags": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "loadingCollective": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "canApplyWithCollective": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "router": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ var osc_host_application_ApplicationForm = ((0,next_router.withRouter)(ApplicationForm));
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(33227);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(88361);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(85971);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(52715);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(91193);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(65985);
// EXTERNAL MODULE: ./components/faqs/FAQ.js
var FAQ = __webpack_require__(99849);
;// CONCATENATED MODULE: ./components/faqs/GithubRepositoriesFAQ.js


function GithubRepositoriesFAQ_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function GithubRepositoriesFAQ_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? GithubRepositoriesFAQ_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : GithubRepositoriesFAQ_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







/**
 * FAQ associated to the `GithubRepositories` component.
 */




var GithubRepositoriesFAQ = function GithubRepositoriesFAQ(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(FAQ/* default */.ZP, GithubRepositoriesFAQ_objectSpread(GithubRepositoriesFAQ_objectSpread({
    withBorderLeft: true,
    withNewButtons: true
  }, props), {}, {
    titleProps: {
      fontSize: '16px',
      mb: 2
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(FAQ/* Entry */.kS, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FAQ/* Title */.Dx, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "GithubRepositories.faq.host.title",
          defaultMessage: [{
            "type": 0,
            "value": "Who will hold money for my Collective?"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FAQ/* Content */.VY, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "GithubRepositories.faq.host.content",
          defaultMessage: [{
            "type": 0,
            "value": "Open Source Collective 501(c)(6) is a US non-profit that was created to serve as Fiscal Host (aka fiscal sponsor) to open source projects using Open Collective. Learn more about OSC at https://oscollective.org."
          }]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FAQ/* Entry */.kS, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FAQ/* Title */.Dx, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "GithubRepositories.faq.cost.title",
          defaultMessage: [{
            "type": 0,
            "value": "What is the cost?"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FAQ/* Content */.VY, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "GithubRepositories.faq.cost.content",
          defaultMessage: [{
            "type": 0,
            "value": "The fee is 10% of funds raised. This fee covers overheads like accounting, banking, legal, admin, and liability, so you don't have to set up your own foundation or take risk on personally."
          }]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      mt: 3,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledLink/* default */.Z, {
        href: "https://docs.oscollective.org/faq",
        background: "#f3f1fe",
        padding: "8px 16px",
        borderRadius: "100px",
        fontWeight: "500",
        openInNewTab: true,
        color: "#6F5AFA",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "moreInfo",
          defaultMessage: [{
            "type": 0,
            "value": "More info"
          }]
        }), " ", /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowRight2_esm/* ArrowRight2 */.a, {
          size: "13px"
        })]
      })
    })]
  }));
};

GithubRepositoriesFAQ.__docgenInfo = {
  "description": "FAQ associated to the `GithubRepositories` component.",
  "methods": [],
  "displayName": "GithubRepositoriesFAQ"
};
/* harmony default export */ var faqs_GithubRepositoriesFAQ = (GithubRepositoriesFAQ);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/Loading.js
var Loading = __webpack_require__(53169);
// EXTERNAL MODULE: ./components/StyledInputField.js
var StyledInputField = __webpack_require__(87262);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3323);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@styled-icons/styled-icon/index.esm.js
var index_esm = __webpack_require__(54142);
;// CONCATENATED MODULE: ./node_modules/@styled-icons/octicons/Search/Search.esm.js



var Search = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/react.createElement(index_esm.StyledIconBase, (0,esm_extends/* default */.Z)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 16 16"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M11.5 7a4.499 4.499 0 1 1-8.998 0A4.499 4.499 0 0 1 11.5 7zm-.82 4.74a6 6 0 1 1 1.06-1.06l3.04 3.04a.75.75 0 1 1-1.06 1.06l-3.04-3.04z"
  }));
});
Search.displayName = 'Search';
var SearchDimensions = {
  height: 16,
  width: 16
};
// EXTERNAL MODULE: ./node_modules/@styled-system/theme-get/dist/index.esm.js
var dist_index_esm = __webpack_require__(50056);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(97079);
// EXTERNAL MODULE: ./components/StyledRadioList.js
var StyledRadioList = __webpack_require__(36718);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-brands/Github/Github.esm.js
var Github_esm = __webpack_require__(44498);
;// CONCATENATED MODULE: ./node_modules/@styled-icons/fa-solid/Star/Star.esm.js



var Star = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/react.createElement(index_esm.StyledIconBase, (0,esm_extends/* default */.Z)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 576 512"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    d: "M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2L316.9 18z"
  }));
});
Star.displayName = 'Star';
var StarDimensions = {
  height: 512,
  width: 576
};
;// CONCATENATED MODULE: ./components/osc-host-application/GithubRepositoryEntry.js









var RepositoryEntry = function RepositoryEntry(_ref) {
  var radio = _ref.radio,
      value = _ref.value;
  var type = value.owner.type;
  var repositoryTypeName = type === 'User' ? 'Personal Repo' : 'Organization Repo';
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "start",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        alignItems: "center",
        flexGrow: "1",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
          mr: 4,
          children: radio
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
          mr: 3,
          color: "black.300",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Github_esm/* Github */.E, {
            size: 40
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          flexDirection: "column",
          flex: "1",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontWeight: 500,
            fontSize: "1.4rem",
            children: value.full_name
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            justifyContent: "space-between",
            flexGrow: "1",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
              textTransform: "uppercase",
              fontWeight: 600,
              color: "black.500",
              fontSize: "1rem",
              mt: 2,
              letterSpacing: "0.4px",
              children: repositoryTypeName
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              display: ['block', null, 'none'],
              ml: 3,
              mr: 1,
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                gap: 4,
                color: "black.600",
                mt: 1,
                alignItems: "center",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                  fontWeight: 600,
                  fontSize: "1.2rem",
                  lineHeight: "1.4rem",
                  children: value.stargazers_count
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Star, {
                  size: 12
                })]
              })
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        display: ['none', null, 'block'],
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          gap: 4,
          color: "black.600",
          mt: 1,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontWeight: 600,
            fontSize: "1.2rem",
            lineHeight: "1.4rem",
            children: value.stargazers_count
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Star, {
            size: 12
          })]
        })
      })]
    }), value.description && /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      color: "black.700",
      fontSize: "1.2rem",
      lineHeight: "1.8rem",
      fontWeight: "400",
      width: 1,
      ml: 4,
      mt: 3,
      px: 2,
      children: value.description
    })]
  });
};

RepositoryEntry.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "RepositoryEntry",
  "props": {
    "radio": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "value": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "description": {
            "name": "string",
            "required": false
          },
          "owner": {
            "name": "object",
            "required": false
          },
          "stargazers_count": {
            "name": "number",
            "required": false
          },
          "full_name": {
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
    "checked": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ var GithubRepositoryEntry = (RepositoryEntry);
;// CONCATENATED MODULE: ./components/osc-host-application/GithubRepositories.js


var _excluded = ["repositories", "setGithubInfo"];

function GithubRepositories_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function GithubRepositories_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? GithubRepositories_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : GithubRepositories_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
















var SearchIcon = (0,styled_components_browser_esm/* default */.ZP)(Search).withConfig({
  displayName: "GithubRepositories__SearchIcon",
  componentId: "sc-1gcx3g7-0"
})(["color:", ";"], (0,dist_index_esm/* themeGet */.R)('colors.black.300'));
var RepositoryEntryContainer = (0,styled_components_browser_esm/* default */.ZP)(Container/* default */.Z).withConfig({
  displayName: "GithubRepositories__RepositoryEntryContainer",
  componentId: "sc-1gcx3g7-1"
})(["cursor:pointer;border-bottom:1px solid ", ";&:hover{background:", ";}"], (0,dist_index_esm/* themeGet */.R)('colors.black.200'), (0,dist_index_esm/* themeGet */.R)('colors.black.50'));
var GithubRepositories_messages = (0,react_intl_lib.defineMessages)({
  filterByName: {
    id: "Filter.ByName",
    defaultMessage: [{
      "type": 0,
      "value": "Filter by name"
    }]
  }
});
/**
 * Component for displaying list of public repositories
 */

var GithubRepositories = function GithubRepositories(_ref) {
  var repositories = _ref.repositories,
      setGithubInfo = _ref.setGithubInfo,
      fieldProps = objectWithoutProperties_default()(_ref, _excluded);

  var _useIntl = (0,useIntl/* default */.Z)(),
      formatMessage = _useIntl.formatMessage;

  var _useState = (0,react.useState)(),
      search = _useState[0],
      setSearch = _useState[1];

  if (search) {
    var test = new RegExp((0,utils/* escapeInput */.nL)(search), 'i');
    repositories = repositories.filter(function (repository) {
      return repository.name.match(test);
    });
  }

  var showSearch = true; // repositories.length >= 5;

  return /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledCard/* default */.Z, {
      children: [showSearch && /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        display: "flex",
        borderBottom: "1px solid",
        borderColor: "black.200",
        px: [2, 4],
        py: 1,
        alignItems: "center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SearchIcon, {
          size: "16"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, {
          bare: true,
          type: "text",
          fontSize: "14px",
          lineHeight: "20px",
          placeholder: formatMessage(GithubRepositories_messages.filterByName),
          onChange: function onChange(_ref2) {
            var target = _ref2.target;
            setSearch(target.value);
          },
          ml: 2
        })]
      }), repositories.length === 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
        my: 3,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H4, {
          textAlign: "center",
          fontSize: "1.4rem",
          color: "black.400",
          children: "No repository match"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        maxHeight: "420px",
        overflow: "auto",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledRadioList/* default */.ZP, GithubRepositories_objectSpread(GithubRepositories_objectSpread({}, fieldProps), {}, {
          options: repositories,
          onChange: function onChange(_ref3) {
            var _value$license;

            var value = _ref3.value;
            setGithubInfo({
              handle: "".concat(value.owner.login, "/").concat(value.name),
              licenseSpdxId: (_value$license = value.license) === null || _value$license === void 0 ? void 0 : _value$license.spdx_id
            });
          },
          keyGetter: "name",
          children: function children(_ref4) {
            var value = _ref4.value,
                radio = _ref4.radio;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(RepositoryEntryContainer, {
              px: [2, 4],
              py: 3,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(GithubRepositoryEntry, {
                radio: radio,
                value: value
              })
            });
          }
        }))
      })]
    })
  });
};

GithubRepositories.__docgenInfo = {
  "description": "Component for displaying list of public repositories",
  "methods": [],
  "displayName": "GithubRepositories",
  "props": {
    "repositories": {
      "description": "List of public repositories",
      "type": {
        "name": "array"
      },
      "required": true
    },
    "setGithubInfo": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    }
  }
};
/* harmony default export */ var osc_host_application_GithubRepositories = (GithubRepositories);
;// CONCATENATED MODULE: ./components/osc-host-application/ConnectGithub.js








function ConnectGithub_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ConnectGithub_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ConnectGithub_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ConnectGithub_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




















var ConnectGithub = /*#__PURE__*/function (_React$Component) {
  inherits_default()(ConnectGithub, _React$Component);

  var _super = _createSuper(ConnectGithub);

  function ConnectGithub(props) {
    var _this;

    classCallCheck_default()(this, ConnectGithub);

    _this = _super.call(this, props);
    _this.state = {
      loadingRepos: false,
      repositories: [],
      error: null
    };
    return _this;
  }

  createClass_default()(ConnectGithub, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var repositories;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  loadingRepos: true
                });
                _context.prev = 1;
                _context.next = 4;
                return (0,api/* getGithubRepos */.UG)(this.props.router.query.token);

              case 4:
                repositories = _context.sent;

                if (repositories.length !== 0) {
                  this.setState({
                    repositories: repositories,
                    loadingRepos: false
                  });
                } else {
                  this.setState({
                    loadingRepos: false,
                    error: "We couldn't find any repositories with at least 100 stars linked to this account"
                  });
                }

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                this.setState({
                  loadingRepos: false,
                  error: _context.t0.toString()
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 8]]);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          repositories = _this$state.repositories,
          loadingRepos = _this$state.loadingRepos,
          error = _this$state.error;
      var query = this.props.router.query;
      var nextLinkPath = query.collectiveSlug ? "/opensource/apply/form?collectiveSlug=".concat(query.collectiveSlug) : '/opensource/apply/form';
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        flexDirection: "column",
        m: [3, 0],
        mb: 4,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
          flexDirection: "column",
          my: [2, 4],
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            flexDirection: ['column', 'row'],
            alignItems: "center",
            justifyContent: "center",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              width: '160px',
              height: '160px',
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
                alt: "Open Source Collective logotype",
                src: "/static/images/osc-logo.png",
                width: 160,
                height: 160
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
              textAlign: ['center', 'left'],
              width: ['288px', '404px'],
              ml: [null, '24px'],
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H1, {
                fontSize: "32px",
                lineHeight: "40px",
                letterSpacing: "-0.008em",
                color: "black.900",
                textAlign: ['center', 'left'],
                mb: "14px",
                "data-cy": "connect-github-header",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "openSourceApply.GithubRepositories.title",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Pick a repository"
                  }]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: "500",
                color: "black.700",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "collective.subtitle.seeRepo",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Don't see the repository you're looking for? "
                  }, {
                    "type": 1,
                    "value": "helplink"
                  }, {
                    "type": 0,
                    "value": "."
                  }],
                  values: {
                    helplink: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                      href: "https://docs.opencollective.com/help/collectives/osc-verification",
                      openInNewTab: true,
                      color: "purple.500",
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                        id: "getHelp",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Get help"
                        }]
                      })
                    })
                  }
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: "500",
                color: "black.700",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "kwIdJS",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Want to apply using an "
                  }, {
                    "type": 8,
                    "value": "AltVerificationLink",
                    "children": [{
                      "type": 0,
                      "value": "alternative verification criteria"
                    }]
                  }, {
                    "type": 0,
                    "value": "? "
                  }, {
                    "type": 8,
                    "value": "ApplyLink",
                    "children": [{
                      "type": 0,
                      "value": "Click here"
                    }]
                  }, {
                    "type": 0,
                    "value": "."
                  }],
                  values: {
                    ApplyLink: (0,I18nFormatters/* getI18nLink */.fw)({
                      as: Link/* default */.Z,
                      href: {
                        pathname: "/opensource/create/form",
                        query: {
                          hostTos: true
                        }
                      },
                      color: 'purple.500'
                    }),
                    AltVerificationLink: (0,I18nFormatters/* getI18nLink */.fw)({
                      openInNewTab: true,
                      href: 'https://www.oscollective.org/#criteria',
                      color: 'purple.500'
                    })
                  }
                })
              })]
            })]
          })
        }), error && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
          alignItems: "center",
          justifyContent: "center",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
            type: "error",
            withIcon: true,
            mb: [1, 3],
            children: error
          })
        }), loadingRepos && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          pb: 4,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Loading/* default */.Z, {})
        }), repositories.length !== 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
          justifyContent: "center",
          px: [2, 4],
          width: 1,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Grid */.rj, {
            gridTemplateColumns: ['1fr', 'repeat(4, minmax(0, 1fr))'],
            gridGap: '48px',
            maxWidth: "1200px",
            position: "relative",
            flexGrow: 1,
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
              gridColumn: [null, '1/4', '1/4', '2/4'],
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
                htmlFor: "collective",
                children: function children(fieldProps) {
                  return /*#__PURE__*/(0,jsx_runtime.jsx)(osc_host_application_GithubRepositories, ConnectGithub_objectSpread(ConnectGithub_objectSpread({}, fieldProps), {}, {
                    repositories: repositories,
                    setGithubInfo: function setGithubInfo(githubInfo) {
                      return _this2.props.setGithubInfo(githubInfo);
                    }
                  }));
                }
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Grid */.rj, {
                gridTemplateColumns: ['1fr', 'repeat(2, minmax(0, 1fr))'],
                gridGap: '32px',
                my: 4,
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
                  buttonStyle: "purpleSecondary",
                  buttonSize: "large",
                  textAlign: "center",
                  onClick: function onClick() {
                    return window && window.history.back();
                  },
                  children: ["\u2190\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "Back",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Back"
                    }]
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
                  textAlign: "center",
                  buttonSize: "large",
                  buttonStyle: "purple",
                  disabled: this.props.nextDisabled,
                  onClick: function onClick() {
                    _this2.props.router.push(nextLinkPath);
                  },
                  "data-cy": "connect-github-continue",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "Pagination.Next",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Next"
                    }]
                  }), " \xA0\u2192"]
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(faqs_GithubRepositoriesFAQ, {
              display: ['none', 'block'],
              width: 1,
              flexGrow: 1,
              alignSelf: "flex-start",
              position: "sticky",
              top: 0,
              pt: 3
            })]
          })
        })]
      });
    }
  }]);

  return ConnectGithub;
}(react.Component);

ConnectGithub.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ConnectGithub",
  "props": {
    "router": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "setGithubInfo": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "nextDisabled": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ var osc_host_application_ConnectGithub = ((0,next_router.withRouter)(ConnectGithub));
// EXTERNAL MODULE: ./lib/local-storage.ts
var local_storage = __webpack_require__(35427);
;// CONCATENATED MODULE: ./components/osc-host-application/ApplicationDescription.js







var ApplicationDescription = function ApplicationDescription() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      mb: 3,
      fontSize: "15px",
      lineHeight: "22px",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "createcollective.opensource.p1",
        defaultMessage: [{
          "type": 0,
          "value": "You're creating software. You don't want to worry about creating a legal entity or bank account, taxes, invoices, and a bunch of other admin. Let us take care of all that, so you can stay focused on your project."
        }]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      mb: 3,
      fontSize: "15px",
      lineHeight: "22px",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "createcollective.opensource.p2",
        defaultMessage: [{
          "type": 0,
          "value": "We have created the "
        }, {
          "type": 1,
          "value": "osclink"
        }, {
          "type": 0,
          "value": ", a non-profit umbrella organization, to serve the open source community. To join, you need to meet our "
        }, {
          "type": 1,
          "value": "criterialink"
        }, {
          "type": 0,
          "value": "."
        }],
        values: {
          osclink: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
            href: "https://opencollective.com/opensource",
            openInNewTab: true,
            color: "purple.500",
            children: "Open Source Collective"
          }),
          criterialink: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
            href: "https://www.oscollective.org/#criteria",
            openInNewTab: true,
            color: "purple.500",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "verificationCriteria",
              defaultMessage: [{
                "type": 0,
                "value": "verification criteria"
              }]
            })
          })
        }
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      mb: 3,
      fontWeight: 700,
      fontSize: "15px",
      lineHeight: "22px",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "createcollective.opensource.p3",
        defaultMessage: [{
          "type": 0,
          "value": "Fees: 10% of funds raised."
        }]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      mb: 3,
      fontSize: "15px",
      lineHeight: "22px",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "createcollective.opensource.p4",
        defaultMessage: [{
          "type": 0,
          "value": "Our fees cover operating costs like accounting, payments, tax reporting, invoices, legal liability, use of the Open Collective Platform, and providing support. We also run a range of initiatives to support a sustainable and healthy open source ecosystem. Join us!"
        }]
      })
    })]
  });
};

ApplicationDescription.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ApplicationDescription"
};
/* harmony default export */ var osc_host_application_ApplicationDescription = (ApplicationDescription);
;// CONCATENATED MODULE: ./components/osc-host-application/TermsOfFiscalSponsorship.js


function TermsOfFiscalSponsorship_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function TermsOfFiscalSponsorship_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? TermsOfFiscalSponsorship_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : TermsOfFiscalSponsorship_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

















var TermsOfFiscalSponsorship_messages = (0,react_intl_lib.defineMessages)({
  acceptTermsOfFiscalSponsorship: {
    id: "createCollective.acceptTermsOfFiscalSponsorship",
    defaultMessage: [{
      "type": 0,
      "value": "Please accept the terms of fiscal sponsorship"
    }]
  }
});
var FISCAL_SPONSOR_TERMS = 'https://docs.google.com/document/u/1/d/e/2PACX-1vQbiyK2Fe0jLdh4vb9BfHY4bJ1LCo4Qvy0jg9P29ZkiC8y_vKJ_1fNgIbV0p6UdvbcT8Ql1gVto8bf9/pub';

var getGithubConnectUrl = function getGithubConnectUrl(collectiveSlug) {
  var urlParams = new URLSearchParams(TermsOfFiscalSponsorship_objectSpread({
    context: 'createCollective'
  }, collectiveSlug ? {
    CollectiveId: collectiveSlug
  } : null));
  var accessToken = (0,local_storage/* getFromLocalStorage */.fp)(local_storage/* LOCAL_STORAGE_KEYS.ACCESS_TOKEN */.dA.ACCESS_TOKEN);

  if (accessToken) {
    urlParams.set('access_token', accessToken);
  }

  return "/api/connected-accounts/github?".concat(urlParams.toString());
};

var TermsOfFiscalSponsorship = function TermsOfFiscalSponsorship(_ref) {
  var checked = _ref.checked,
      onChecked = _ref.onChecked;

  var _useIntl = (0,useIntl/* default */.Z)(),
      formatMessage = _useIntl.formatMessage;

  var router = (0,next_router.useRouter)();

  var _useState = (0,react.useState)(),
      error = _useState[0],
      setError = _useState[1];

  var collectiveSlug = router.query.collectiveSlug;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    mt: ['24px', '48px'],
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: ['column', 'row'],
      alignItems: "center",
      justifyContent: "center",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: '160px',
        height: '160px',
        mb: "24px",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
          alt: "Open Source Collective logotype",
          src: "/static/images/osc-logo.png",
          width: 160,
          height: 160
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        textAlign: ['center', 'left'],
        width: ['288px', '488px'],
        mb: 4,
        ml: [null, '24px'],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H1, {
          fontSize: "32px",
          lineHeight: "40px",
          letterSpacing: "-0.008em",
          color: "black.900",
          textAlign: ['center', 'left'],
          mb: "14px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "HostApplication.header",
            defaultMessage: [{
              "type": 0,
              "value": "Apply with your Collective"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "500",
          color: "black.700",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "collective.subtitle.opensource",
            defaultMessage: [{
              "type": 0,
              "value": "Open source projects are invited to join the Open Source Collective Fiscal Host."
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
      width: ['288px', '672px'],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(osc_host_application_ApplicationDescription, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
        display: "flex",
        alignSelf: "flex-start",
        alignItems: "center",
        mb: 4,
        mt: 4,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          mr: 3,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCheckbox/* default */.Z, {
            name: "TOSAgreement",
            checked: checked,
            onChange: function onChange(_ref2) {
              var checked = _ref2.checked;
              return onChecked(checked);
            },
            label: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
              ml: 1,
              fontSize: "12px",
              lineHeight: "18px",
              fontWeight: "400",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "OCFHostApplication.tosCheckBoxLabel",
                defaultMessage: [{
                  "type": 0,
                  "value": "I agree with the "
                }, {
                  "type": 8,
                  "value": "TOSLink",
                  "children": [{
                    "type": 0,
                    "value": "terms of fiscal sponsorship"
                  }]
                }, {
                  "type": 0,
                  "value": "."
                }],
                values: {
                  TOSLink: (0,I18nFormatters/* getI18nLink */.fw)({
                    href: FISCAL_SPONSOR_TERMS,
                    openInNewTabNoFollow: true,
                    onClick: function onClick(e) {
                      return e.stopPropagation();
                    },
                    // don't check the checkbox when clicking on the link
                    color: 'purple.500'
                  })
                }
              })
            })
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
      width: ['288px', '672px'],
      mb: "100px",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Grid */.rj, {
        gridTemplateColumns: ['1fr', '1fr 1fr'],
        gridGap: '32px',
        mb: 4,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
          textAlign: "center",
          buttonSize: "large",
          buttonStyle: "purple",
          onClick: function onClick() {
            if (!checked) {
              setError(formatMessage(TermsOfFiscalSponsorship_messages.acceptTermsOfFiscalSponsorship));
            } else {
              window.location.href = getGithubConnectUrl(collectiveSlug);
            }
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "createcollective.opensource.VerifyGithub",
            defaultMessage: [{
              "type": 0,
              "value": "Verify using GitHub"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
          href: {
            pathname: "/opensource/apply/form",
            query: TermsOfFiscalSponsorship_objectSpread({}, collectiveSlug && {
              collectiveSlug: collectiveSlug
            })
          },
          onClick: function onClick(e) {
            if (!checked) {
              e.preventDefault();
              setError(formatMessage(TermsOfFiscalSponsorship_messages.acceptTermsOfFiscalSponsorship));
            }
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
            textAlign: "center",
            buttonSize: "large",
            buttonStyle: "purpleSecondary",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "createcollective.opensource.ManualVerification",
              defaultMessage: [{
                "type": 0,
                "value": "Request manual verification"
              }]
            })
          })
        })]
      }), error && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
        alignItems: "center",
        justifyContent: "center",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
          type: "error",
          withIcon: true,
          mb: [1, 3],
          children: error
        })
      })]
    })]
  });
};

TermsOfFiscalSponsorship.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TermsOfFiscalSponsorship",
  "props": {
    "checked": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onChecked": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ var osc_host_application_TermsOfFiscalSponsorship = (TermsOfFiscalSponsorship);
;// CONCATENATED MODULE: ./components/osc-host-application/YourInitiativeIsNearlyThere.js











var YourInitiativeIsNearlyThere_Link = (0,styled_components_browser_esm/* default */.ZP)(StyledLink/* default */.Z).withConfig({
  displayName: "YourInitiativeIsNearlyThere__Link",
  componentId: "sc-bch789-0"
})(["margin-left:8px;margin-right:8px;color:#313233;text-decoration:underline !important;font-weight:400;"]);

var YourInitiativeIsNearlyThere = function YourInitiativeIsNearlyThere() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    mt: ['24px', '48px'],
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: 'column',
      alignItems: "center",
      justifyContent: "center",
      mb: [null, 3],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: ['288px', '360px'],
        height: ('128px', '160px'),
        mb: "24px",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
          alt: "Open Source Collective logotype",
          src: "/static/images/osc-logo.png",
          width: 240,
          height: 240
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        textAlign: "center",
        width: ['288px', '404px'],
        mb: "14px",
        ml: [null, '24px'],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H1, {
          fontSize: "32px",
          lineHeight: "40px",
          letterSpacing: "-0.008em",
          color: "black.900",
          textAlign: "center",
          mb: "14px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "OCFHostApplication.yourInitiativeIsNearlyThere",
            defaultMessage: [{
              "type": 0,
              "value": "Your initiative is nearly there!"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "500",
          color: "black.800",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "HostApplication.yourInitiativeIsNearlyThere.description",
            defaultMessage: [{
              "type": 0,
              "value": "We will review it and let you know by mail if we need you for anything during the process. "
            }, {
              "type": 1,
              "value": "lineBreak"
            }, {
              "type": 1,
              "value": "lineBreak"
            }, {
              "type": 0,
              "value": " In the meantime, you can use these useful links."
            }],
            values: {
              lineBreak: /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})
            }
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(YourInitiativeIsNearlyThere_Link, {
          href: "/",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "home",
            defaultMessage: [{
              "type": 0,
              "value": "Home"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(YourInitiativeIsNearlyThere_Link, {
          href: "/help",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "community.support",
            defaultMessage: [{
              "type": 0,
              "value": "Support"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(YourInitiativeIsNearlyThere_Link, {
          href: "https://slack.opencollective.com/",
          children: "Slack"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(YourInitiativeIsNearlyThere_Link, {
          href: "https://blog.opencollective.com/",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "company.blog",
            defaultMessage: [{
              "type": 0,
              "value": "Blog"
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      my: "48px",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "500",
        color: "black.800",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "OCFHostApplication.partnerProjects",
          defaultMessage: [{
            "type": 0,
            "value": "These projects are trusting us:"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        display: "flex",
        alignItems: "center",
        justifyContent: ['flex-start', 'center'],
        mt: 4,
        width: ['288px', '672px'],
        overflow: "auto",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "208px",
          height: "204px",
          borderRadius: "12px",
          border: "1px solid #E8E9EB",
          padding: "16px",
          flexDirection: "column",
          mr: "24px",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            width: "80px",
            height: "80px",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
              alt: "Chrome logo",
              src: "/static/images/ocf-host-application/chrome-logo.png",
              width: 80,
              height: 80
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
            width: "176px",
            textAlign: "center",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H3, {
              fontSize: "20px",
              color: "black.900",
              lineHeight: "28px",
              my: 2,
              children: "Chrome's Web Fund"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
              fontSize: "14px",
              color: "black.800",
              lineHeight: "20px",
              fontWeight: "500",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "OCFHostApplication.weAreAFund",
                defaultMessage: [{
                  "type": 0,
                  "value": "We are a fund"
                }]
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "208px",
          height: "204px",
          borderRadius: "12px",
          border: "1px solid #E8E9EB",
          padding: "16px",
          flexDirection: "column",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            width: "80px",
            height: "80px",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
              alt: "CVKey logo",
              src: "/static/images/ocf-host-application/cvKey-logo.png",
              width: 80,
              height: 80
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
            width: "176px",
            textAlign: "center",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H3, {
              fontSize: "20px",
              color: "black.900",
              lineHeight: "28px",
              my: 2,
              children: "CVKey Project Fund"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
              fontSize: "14px",
              color: "black.800",
              lineHeight: "20px",
              fontWeight: "500",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "OCFHostApplication.weAreAFund",
                defaultMessage: [{
                  "type": 0,
                  "value": "We are a fund"
                }]
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "208px",
          height: "204px",
          borderRadius: "12px",
          border: "1px solid #E8E9EB",
          padding: "16px",
          flexDirection: "column",
          ml: "24px",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            width: "80px",
            height: "80px",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
              alt: "WTV logo",
              src: "/static/images/ocf-host-application/wtv-logo.svg",
              width: 80,
              height: 80
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
            width: "176px",
            textAlign: "center",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H3, {
              fontSize: "20px",
              color: "black.900",
              lineHeight: "28px",
              my: 2,
              children: "#Walkthevote Project"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
              fontSize: "16px",
              color: "black.800",
              lineHeight: "20px",
              fontWeight: "500",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "OCFHostApplication.weAreAFund",
                defaultMessage: [{
                  "type": 0,
                  "value": "We are a fund"
                }]
              })
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
        my: "40px",
        href: "https://docs.oscollective.org/" // width={['286px', '215px']}
        ,
        buttonStyle: "purple",
        buttonSize: "medium",
        openInNewTab: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "OCFHostApplication.visitDocumentation",
          defaultMessage: [{
            "type": 0,
            "value": "Visit the documentation "
          }, {
            "type": 1,
            "value": "arrowRight"
          }],
          values: {
            arrowRight: /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowRight2_esm/* ArrowRight2 */.a, {
              size: "14px"
            })
          }
        })
      })]
    })]
  });
};

YourInitiativeIsNearlyThere.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "YourInitiativeIsNearlyThere"
};
/* harmony default export */ var osc_host_application_YourInitiativeIsNearlyThere = (YourInitiativeIsNearlyThere);
// EXTERNAL MODULE: ./components/Page.js
var Page = __webpack_require__(84842);
// EXTERNAL MODULE: ./components/ToastProvider.tsx
var ToastProvider = __webpack_require__(31330);
// EXTERNAL MODULE: ./components/UserProvider.js + 2 modules
var UserProvider = __webpack_require__(51927);
;// CONCATENATED MODULE: ./pages/osc-host-application.js




var osc_host_application_templateObject, osc_host_application_templateObject2;

function osc_host_application_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function osc_host_application_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? osc_host_application_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : osc_host_application_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

















var oscCollectiveApplicationQuery = (0,lib/* default */.ZP)(osc_host_application_templateObject || (osc_host_application_templateObject = taggedTemplateLiteral_default()(["\n  query OscCollectiveApplicationPage($slug: String) {\n    account(slug: $slug) {\n      id\n      slug\n      description\n      name\n      type\n      isAdmin\n      ... on AccountWithHost {\n        host {\n          id\n          name\n        }\n      }\n    }\n  }\n"])));
var oscHostApplicationPageQuery = (0,lib/* default */.ZP)(osc_host_application_templateObject2 || (osc_host_application_templateObject2 = taggedTemplateLiteral_default()(["\n  query OscHostApplicationPage {\n    account(slug: \"opensource\") {\n      id\n      slug\n      policies {\n        COLLECTIVE_MINIMUM_ADMINS {\n          numberOfAdmins\n        }\n      }\n    }\n    tagStats(host: { slug: \"opensource\" }, limit: 6) {\n      nodes {\n        id\n        tag\n      }\n    }\n  }\n"])));
var osc_host_application_messages = (0,react_intl_lib.defineMessages)({
  'error.title': {
    id: "error.title",
    defaultMessage: [{
      "type": 0,
      "value": "Validation Failed"
    }]
  },
  'error.unauthorized.description': {
    id: "error.unauthorized.description",
    defaultMessage: [{
      "type": 0,
      "value": "You have to be an admin of "
    }, {
      "type": 1,
      "value": "name"
    }, {
      "type": 0,
      "value": " to apply with this initiative."
    }]
  },
  'error.existingHost.description': {
    id: "error.existingHost.description",
    defaultMessage: [{
      "type": 0,
      "value": "This collective is already hosted by "
    }, {
      "type": 1,
      "value": "hostName"
    }, {
      "type": 0,
      "value": "."
    }]
  }
});
var formValues = {
  user: {
    name: '',
    email: ''
  },
  collective: {
    name: '',
    slug: '',
    description: '',
    tags: []
  },
  applicationData: {
    typeOfProject: null,
    repositoryUrl: '',
    licenseSpdxId: null,
    extraLicenseInfo: '',
    amountOfMembers: '',
    linksToPreviousEvents: ''
  },
  termsOfServiceOC: false,
  inviteMembers: []
};

var formatNameFromSlug = function formatNameFromSlug(repoName) {
  // replaces dash and underscore with space, then capitalises the words
  return repoName.replace(/[-_]/g, ' ').replace(/(?:^|\s)\S/g, function (words) {
    return words.toUpperCase();
  });
};

var OSCHostApplication = function OSCHostApplication(_ref) {
  var _collective$host;

  var loadingLoggedInUser = _ref.loadingLoggedInUser,
      LoggedInUser = _ref.LoggedInUser,
      refetchLoggedInUser = _ref.refetchLoggedInUser;

  var _useState = (0,react.useState)(false),
      checkedTermsOfFiscalSponsorship = _useState[0],
      setCheckedTermsOfFiscalSponsorship = _useState[1];

  var _useState2 = (0,react.useState)(formValues),
      initialValues = _useState2[0],
      setInitialValues = _useState2[1];

  var intl = (0,useIntl/* default */.Z)();
  var router = (0,next_router.useRouter)();

  var _useToasts = (0,ToastProvider/* useToasts */.e1)(),
      addToast = _useToasts.addToast;

  var step = router.query.step || 'intro';
  var collectiveSlug = router.query.collectiveSlug;

  var _useQuery = (0,client.useQuery)(oscHostApplicationPageQuery, {
    context: helpers/* API_V2_CONTEXT */.T
  }),
      hostData = _useQuery.data;

  var _useQuery2 = (0,client.useQuery)(oscCollectiveApplicationQuery, {
    context: helpers/* API_V2_CONTEXT */.T,
    variables: {
      slug: collectiveSlug
    },
    skip: !(LoggedInUser && collectiveSlug && step === 'form'),
    onError: function onError(error) {
      addToast({
        type: ToastProvider/* TOAST_TYPE.ERROR */["do"].ERROR,
        title: intl.formatMessage(osc_host_application_messages['error.title']),
        message: (0,errors/* i18nGraphqlException */.t2)(intl, error)
      });
    }
  }),
      data = _useQuery2.data,
      loadingCollective = _useQuery2.loading;

  var collective = data === null || data === void 0 ? void 0 : data.account;
  var canApplyWithCollective = collective && collective.isAdmin && collective.type === collectives/* CollectiveType.COLLECTIVE */.eV.COLLECTIVE;
  var hasHost = collective && (collective === null || collective === void 0 ? void 0 : (_collective$host = collective.host) === null || _collective$host === void 0 ? void 0 : _collective$host.id);
  var popularTags = hostData === null || hostData === void 0 ? void 0 : hostData.tagStats.nodes.map(function (_ref2) {
    var tag = _ref2.tag;
    return tag;
  }).filter(function (tag) {
    return !collectives/* IGNORED_TAGS.includes */.bR.includes(tag);
  });
  react.useEffect(function () {
    if (collectiveSlug && collective && (!canApplyWithCollective || hasHost)) {
      addToast({
        type: ToastProvider/* TOAST_TYPE.ERROR */["do"].ERROR,
        title: intl.formatMessage(osc_host_application_messages['error.title']),
        message: hasHost ? intl.formatMessage(osc_host_application_messages['error.existingHost.description'], {
          hostName: collective.host.name
        }) : intl.formatMessage(osc_host_application_messages['error.unauthorized.description'], {
          name: collective.name
        })
      });
    }
  }, [collectiveSlug, collective]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Page/* default */.Z, {
    title: "Open Source Collective application",
    children: [step === 'intro' && /*#__PURE__*/(0,jsx_runtime.jsx)(osc_host_application_TermsOfFiscalSponsorship, {
      checked: checkedTermsOfFiscalSponsorship,
      onChecked: setCheckedTermsOfFiscalSponsorship
    }), step === 'pick-repo' && /*#__PURE__*/(0,jsx_runtime.jsx)(osc_host_application_ConnectGithub, {
      setGithubInfo: function setGithubInfo() {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            handle = _ref3.handle,
            licenseSpdxId = _ref3.licenseSpdxId;

        var _ref4 = (handle === null || handle === void 0 ? void 0 : handle.split('/')) || [],
            _ref5 = slicedToArray_default()(_ref4, 2),
            owner = _ref5[0],
            repo = _ref5[1];

        setInitialValues(osc_host_application_objectSpread(osc_host_application_objectSpread({}, initialValues), {}, {
          collective: osc_host_application_objectSpread(osc_host_application_objectSpread({}, initialValues.collective), {}, {
            name: handle ? formatNameFromSlug(repo !== null && repo !== void 0 ? repo : owner) : '',
            slug: handle ? repo !== null && repo !== void 0 ? repo : owner : ''
          }),
          applicationData: osc_host_application_objectSpread(osc_host_application_objectSpread({}, initialValues.applicationData), {}, {
            typeOfProject: handle ? 'CODE' : null,
            repositoryUrl: handle ? "https://github.com/".concat(handle) : '',
            licenseSpdxId: licenseSpdxId,
            useGithubValidation: true
          })
        }));
      },
      router: router,
      nextDisabled: !initialValues.applicationData.repositoryUrl
    }), step === 'form' && /*#__PURE__*/(0,jsx_runtime.jsx)(osc_host_application_ApplicationForm, {
      initialValues: initialValues,
      setInitialValues: setInitialValues,
      loadingLoggedInUser: loadingLoggedInUser,
      LoggedInUser: LoggedInUser,
      collective: collective,
      host: hostData === null || hostData === void 0 ? void 0 : hostData.account,
      loadingCollective: loadingCollective,
      canApplyWithCollective: canApplyWithCollective && !hasHost,
      refetchLoggedInUser: refetchLoggedInUser,
      popularTags: popularTags
    }), step === 'success' && /*#__PURE__*/(0,jsx_runtime.jsx)(osc_host_application_YourInitiativeIsNearlyThere, {})]
  });
};

OSCHostApplication.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OSCHostApplication",
  "props": {
    "loadingLoggedInUser": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "LoggedInUser": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "refetchLoggedInUser": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ var osc_host_application = ((0,UserProvider/* withUser */.ns)(OSCHostApplication));

/***/ }),

/***/ 75539:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/osc-host-application",
      function () {
        return __webpack_require__(34622);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6567,1512,8966,8027,5126,295,6277,146,5813,4842,4154,1012,1861,4691,9774,2888,179], function() { return __webpack_exec__(75539); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=osc-host-application-37ed0f411fc8a8e2.js.map