"use strict";
(() => {
var exports = {};
exports.id = 3289;
exports.ids = [3289,2903];
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

/***/ }),

/***/ 74290:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_allowed_features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99708);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15078);
/* harmony import */ var _lib_dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82114);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_mutations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79618);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25896);
/* harmony import */ var _Body__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1259);
/* harmony import */ var _collective_navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38208);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(69078);
/* harmony import */ var _CreateEventForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(76165);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11333);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(42352);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(88705);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(92129);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(37278);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(87268);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_collective_navbar__WEBPACK_IMPORTED_MODULE_10__, _CreateEventForm__WEBPACK_IMPORTED_MODULE_12__, _Footer__WEBPACK_IMPORTED_MODULE_13__, _Header__WEBPACK_IMPORTED_MODULE_14__]);
([_collective_navbar__WEBPACK_IMPORTED_MODULE_10__, _CreateEventForm__WEBPACK_IMPORTED_MODULE_12__, _Footer__WEBPACK_IMPORTED_MODULE_13__, _Header__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);























class CreateEvent extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    const timezone = _lib_dayjs__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tz.guess */ .Z.tz.guess();
    const startsAt = (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)().tz(timezone).set('hour', 19).set('minute', 0).set('second', 0);
    const endsAt = (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)().tz(timezone).set('hour', 20).set('minute', 0).set('second', 0);
    this.state = {
      event: {
        parentCollective: props.parentCollective,
        timezone,
        // "Europe/Brussels", // "America/New_York"
        startsAt: (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_4__/* .convertDateToApiUtc */ .Zz)(startsAt, timezone),
        endsAt: (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_4__/* .convertDateToApiUtc */ .Zz)(endsAt, timezone)
      },
      result: {}
    };
    this.createEvent = this.createEvent.bind(this);
    this.handleTemplateChange = this.handleTemplateChange.bind(this);
    this.error = this.error.bind(this);
    this.resetError = this.resetError.bind(this);
  }

  error(msg) {
    this.setState({
      result: {
        error: msg
      }
    });
  }

  resetError() {
    this.error();
  }

  async createEvent(EventInputType) {
    const {
      parentCollective
    } = this.props;
    this.setState({
      status: 'loading'
    });
    EventInputType.type = 'EVENT';
    EventInputType.ParentCollectiveId = parentCollective.id;
    EventInputType.settings = {
      disableCustomContributions: true
    };

    try {
      const res = await this.props.createCollective(EventInputType);
      const event = res.data.createCollective;
      this.setState({
        status: 'idle',
        result: {
          success: `Event created successfully.`
        }
      });
      await this.props.refetchLoggedInUser();
      await this.props.router.push({
        pathname: `/${parentCollective.slug}/events/${event.slug}`,
        query: {
          status: 'eventCreated'
        }
      });
      window.scrollTo(0, 0);
    } catch (err) {
      const errorMsg = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_6__/* .getErrorFromGraphqlException */ .H1)(err).message;
      this.setState({
        status: 'idle',
        result: {
          error: errorMsg
        }
      });
      throw new Error(errorMsg);
    }
  }

  async handleTemplateChange(event) {
    delete event.id;
    delete event.slug;
    this.setState({
      event
    });
  }

  render() {
    const {
      parentCollective,
      LoggedInUser
    } = this.props;
    const isAdmin = LoggedInUser && LoggedInUser.isAdminOfCollective(parentCollective);
    const collective = parentCollective || {};
    const title = `Create a New ${collective.name} Event`;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
      className: "CreateEvent",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Header__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        title: title,
        className: this.state.status,
        LoggedInUser: this.props.LoggedInUser
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Body__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_collective_navbar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          collective: collective,
          isAdmin: isAdmin
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("div", {
          className: "content",
          children: !isAdmin ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            margin: "0 auto",
            textAlign: "center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("p", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "events.create.login",
                defaultMessage: [{
                  "type": 0,
                  "value": "You need to be logged as a team member of this Collective to create an event."
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("p", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Link__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                href: `/signin?next=/${collective.slug}/events/new`,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                  buttonStyle: "primary",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                    id: "signIn",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Sign In"
                    }]
                  })
                })
              })
            })]
          }) : collective.isFrozen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_MessageBox__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            withIcon: true,
            type: "warning",
            my: 5,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "10vwJU",
              defaultMessage: [{
                "type": 0,
                "value": "This account is currently frozen and cannot be used to create events."
              }]
            }), ' ', (0,_lib_allowed_features__WEBPACK_IMPORTED_MODULE_3__/* .isFeatureEnabled */ .cr)(collective.host, _lib_allowed_features__WEBPACK_IMPORTED_MODULE_3__/* .FEATURES.CONTACT_FORM */ .h6.CONTACT_FORM) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "KxBiJC",
              defaultMessage: [{
                "type": 0,
                "value": "Please "
              }, {
                "type": 8,
                "value": "ContactLink",
                "children": [{
                  "type": 0,
                  "value": "contact"
                }]
              }, {
                "type": 0,
                "value": " your fiscal host for more details."
              }],
              values: {
                ContactLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_15__/* .getI18nLink */ .fw)({
                  href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_8__/* .getCollectivePageRoute */ .x0)(collective.host)}/contact`
                })
              }
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_CreateEventForm__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
              event: this.state.event,
              onSubmit: this.createEvent,
              onChange: this.resetError,
              loading: this.state.status === 'loading' || this.state.result.success
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              textAlign: "center",
              marginBottom: "5rem",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Container__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                style: {
                  color: 'green'
                },
                children: this.state.result.success
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Container__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                style: {
                  color: 'red'
                },
                children: this.state.result.error
              })]
            })]
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})]
    });
  }

}

CreateEvent.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "error",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "msg",
      "type": null
    }],
    "returns": null
  }, {
    "name": "resetError",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "createEvent",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "EventInputType",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleTemplateChange",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "event",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "CreateEvent",
  "props": {
    "parentCollective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "createCollective": {
      "description": "",
      "type": {
        "name": "func"
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
      "required": true
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_19__/* .withUser */ .ns)((0,_lib_graphql_mutations__WEBPACK_IMPORTED_MODULE_7__/* .addCreateCollectiveMutation */ .Z)((0,next_router__WEBPACK_IMPORTED_MODULE_1__.withRouter)(CreateEvent))));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76165:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24298);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15078);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99591);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87268);
/* harmony import */ var _TimezonePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20634);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_InputField__WEBPACK_IMPORTED_MODULE_6__]);
_InputField__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class CreateEventForm extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTimezoneChange = this.handleTimezoneChange.bind(this);

    const event = _objectSpread({}, props.event || {});

    event.slug = event.slug ? event.slug.replace(/.*\//, '') : '';
    this.state = {
      event,
      disabled: false,
      showDeleteModal: false,
      validStartDate: true,
      validEndDate: true,
      endsAtDate: dayjs__WEBPACK_IMPORTED_MODULE_2___default()(event.endsAt).tz(event.timezone).format('YYYY-MM-DDTHH:mm'),
      endAtDateTouched: false
    };
    this.messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.defineMessages)({
      'slug.label': {
        id: "collective.slug.label",
        defaultMessage: [{
          "type": 0,
          "value": "url"
        }]
      },
      'type.label': {
        id: "event.type.label",
        defaultMessage: [{
          "type": 0,
          "value": "Type"
        }]
      },
      'name.label': {
        id: "Fields.name",
        defaultMessage: [{
          "type": 0,
          "value": "Name"
        }]
      },
      'amount.label': {
        id: "Fields.amount",
        defaultMessage: [{
          "type": 0,
          "value": "Amount"
        }]
      },
      'description.label': {
        id: "collective.description.label",
        defaultMessage: [{
          "type": 0,
          "value": "Short description"
        }]
      },
      'longDescription.label': {
        id: "event.longDescription.label",
        defaultMessage: [{
          "type": 0,
          "value": "Long description"
        }]
      },
      'startsAt.label': {
        id: "startDateAndTime",
        defaultMessage: [{
          "type": 0,
          "value": "start date and time"
        }]
      },
      'endsAt.label': {
        id: "event.endsAt.label",
        defaultMessage: [{
          "type": 0,
          "value": "end date and time"
        }]
      },
      'location.label': {
        id: "event.location.label",
        defaultMessage: [{
          "type": 0,
          "value": "location"
        }]
      },
      'privateInstructions.label': {
        id: "event.privateInstructions.label",
        defaultMessage: [{
          "type": 0,
          "value": "Private instructions"
        }]
      },
      privateInstructionsDescription: {
        id: "event.privateInstructions.description",
        defaultMessage: [{
          "type": 0,
          "value": "These instructions will be provided by email to the participants."
        }]
      },
      inValidDateError: {
        id: "6DCLcI",
        defaultMessage: [{
          "type": 0,
          "value": "Please enter a valid date"
        }]
      }
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.event && (!prevProps.event || this.props.event.name !== prevProps.event.name)) {
      this.setState({
        event: this.props.event
      });
    }
  }

  handleChange(fieldname, value) {
    const event = {};

    if (value !== undefined) {
      lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(event, fieldname, value);
    }

    if (fieldname === 'startsAt') {
      const isValid = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(value).isValid();
      this.setState({
        validStartDate: isValid,
        disabled: !isValid
      });

      if (isValid && !this.state.endsAtDateTouched) {
        const endsAtDate = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(value).add(1, 'hour').tz(this.state.event.timezone).format('YYYY-MM-DDTHH:mm');
        this.setState({
          endsAtDate
        });
        event[fieldname] = (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_4__/* .convertDateToApiUtc */ .Zz)(value, this.state.event.timezone);
        event['endsAt'] = (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_4__/* .convertDateToApiUtc */ .Zz)(endsAtDate, this.state.event.timezone);
      }
    } else if (fieldname === 'endsAt') {
      const isValid = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(value).isValid();
      this.setState({
        validEndDate: isValid,
        disabled: !isValid
      });

      if (isValid) {
        this.setState({
          endsAtDate: value,
          endsAtDateTouched: true
        });
        event[fieldname] = (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_4__/* .convertDateToApiUtc */ .Zz)(value, this.state.event.timezone);
      }
    } else if (fieldname === 'timezone') {
      if (value) {
        const timezone = this.state.event.timezone;
        const startsAt = this.state.event.startsAt;
        const endsAt = this.state.event.endsAt;
        event.startsAt = (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_4__/* .convertDateToApiUtc */ .Zz)((0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_4__/* .convertDateFromApiUtc */ .cq)(startsAt, timezone), value);
        event.endsAt = (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_4__/* .convertDateToApiUtc */ .Zz)((0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_4__/* .convertDateFromApiUtc */ .cq)(endsAt, timezone), value);
        event.timezone = value;
      }
    } else if (fieldname === 'name') {
      if (!event['name'].trim()) {
        this.setState({
          disabled: true
        });
      } else {
        this.setState({
          disabled: false
        });
      }
    }

    this.setState(state => {
      return {
        event: _objectSpread(_objectSpread({}, state.event), event)
      };
    });
  }

  handleTimezoneChange(timezone) {
    this.handleChange('timezone', timezone.value);
  }

  async handleSubmit() {
    this.props.onSubmit(_objectSpread({}, this.state.event));
  }

  getFieldDefaultValue(field) {
    if (field.name === 'startsAt' || field.name === 'endsAt') {
      return field.defaultValue;
    } else {
      return this.state.event[field.name] || field.defaultValue;
    }
  }

  render() {
    const {
      event,
      loading,
      intl
    } = this.props;

    if (!event.parentCollective) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {});
    }

    const isNew = !(event && event.id);
    const submitBtnLabel = loading ? 'loading' : isNew ? 'Create Event' : 'Save';
    this.fields = [{
      name: 'name',
      maxLength: 255,
      placeholder: ''
    }, {
      name: 'description',
      type: 'text',
      maxLength: 255,
      placeholder: ''
    }, {
      name: 'startsAt',
      type: 'datetime-local',
      defaultValue: dayjs__WEBPACK_IMPORTED_MODULE_2___default()(this.state.event.startsAt).tz(this.state.event.timezone).format('YYYY-MM-DDTHH:mm'),
      required: true,
      error: !this.state.validStartDate ? intl.formatMessage(this.messages.inValidDateError) : null
    }, {
      name: 'endsAt',
      type: 'datetime-local',
      value: this.state.endsAtDate,
      required: true,
      error: !this.state.validEndDate ? intl.formatMessage(this.messages.inValidDateError) : null
    }, {
      name: 'timezone',
      type: 'TimezonePicker'
    }, {
      name: 'location',
      placeholder: '',
      type: 'location'
    }, {
      name: 'privateInstructions',
      description: intl.formatMessage(this.messages.privateInstructionsDescription),
      type: 'textarea',
      maxLength: 10000
    }];
    this.fields = this.fields.map(field => {
      if (this.messages[`${field.name}.label`]) {
        field.label = intl.formatMessage(this.messages[`${field.name}.label`]);
      }

      if (this.messages[`${field.name}.description`]) {
        field.description = intl.formatMessage(this.messages[`${field.name}.description`]);
      }

      return field;
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "EditEventForm",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        maxWidth: "700px",
        margin: "0 auto",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
          className: "inputs",
          children: this.fields.map(field => field.name === 'timezone' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_TimezonePicker__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            label: "Timezone",
            selectedTimezone: this.state.event.timezone,
            onChange: this.handleTimezoneChange,
            mx: "2px",
            my: 2
          }, field.name) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_InputField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            defaultValue: this.getFieldDefaultValue(field),
            value: field.value,
            validate: field.validate,
            ref: field.name,
            name: field.name,
            label: field.label,
            description: field.description,
            placeholder: field.placeholder,
            type: field.type,
            error: field.error,
            pre: field.pre,
            context: {
              timezone: this.state.event.timezone
            },
            onChange: value => this.handleChange(field.name, value),
            onKeyDown: event => {
              if ((field.name === 'startsAt' || field.name === 'endsAt') && event.key === 'Backspace') {
                event.preventDefault();
              }
            },
            min: field.min,
            overflow: "hidden",
            required: field.required
          }, field.name))
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        margin: "5rem auto 1rem",
        textAlign: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          buttonStyle: "primary",
          onClick: this.handleSubmit,
          disabled: this.state.disabled,
          loading: loading,
          children: submitBtnLabel
        })
      })]
    });
  }

}

CreateEventForm.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "handleChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "fieldname",
      "type": null
    }, {
      "name": "value",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleTimezoneChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "timezone",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleSubmit",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }, {
    "name": "getFieldDefaultValue",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "field",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "CreateEventForm",
  "props": {
    "event": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "loading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onSubmit": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_3__.injectIntl)(CreateEventForm));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 79618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ editCollectiveMutation),
/* harmony export */   "Z": () => (/* binding */ addCreateCollectiveMutation)
/* harmony export */ });
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32651);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51719);




const createCollectiveMutation = _helpers__WEBPACK_IMPORTED_MODULE_2__/* .gqlV1 */ .N
/* GraphQL */
`
  mutation CreateCollective($collective: CollectiveInputType!) {
    createCollective(collective: $collective) {
      id
      name
      slug
      type
      website
      twitterHandle
      isIncognito
    }
  }
`;
const editCollectiveMutation = _helpers__WEBPACK_IMPORTED_MODULE_2__/* .gqlV1 */ .N
/* GraphQL */
`
  mutation EditCollective($collective: CollectiveInputType!) {
    editCollective(collective: $collective) {
      id
      ...EditCollectivePageFields
    }
  }

  ${_queries__WEBPACK_IMPORTED_MODULE_3__/* .editCollectivePageFieldsFragment */ .s9}
`;
const addCreateCollectiveMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__.graphql)(createCollectiveMutation, {
  props: ({
    mutate
  }) => ({
    createCollective: async collective => {
      const CollectiveInputType = lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(collective, ['slug', 'type', 'name', 'image', 'description', 'longDescription', 'location', 'privateInstructions', 'twitterHandle', 'githubHandle', 'website', 'tags', 'startsAt', 'endsAt', 'timezone', 'currency', 'quantity', 'HostCollectiveId', 'ParentCollectiveId', 'isIncognito', 'settings']);

      CollectiveInputType.tiers = (collective.tiers || []).map(tier => lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(tier, ['type', 'name', 'description', 'amount', 'maxQuantity']));
      CollectiveInputType.location = lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(collective.location, ['name', 'address', 'lat', 'long', 'country']);
      return await mutate({
        variables: {
          collective: CollectiveInputType
        }
      });
    }
  })
});

/***/ }),

/***/ 59293:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLegacyCollectiveData": () => (/* binding */ addLegacyCollectiveData),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51719);
/* harmony import */ var _components_CreateEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74290);
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73908);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_CreateEvent__WEBPACK_IMPORTED_MODULE_3__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_4__]);
([_components_CreateEvent__WEBPACK_IMPORTED_MODULE_3__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








class CreateEventPage extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  static getInitialProps({
    query: {
      parentCollectiveSlug
    }
  }) {
    const scripts = {
      googleMaps: true
    }; // Used in <InputTypeLocation>

    return {
      slug: parentCollectiveSlug,
      scripts
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {
      data,
      loadingLoggedInUser
    } = this.props;

    if (loadingLoggedInUser || !data.Collective) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        loading: loadingLoggedInUser,
        data: data
      });
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_CreateEvent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      parentCollective: data.Collective
    });
  }

}

const addLegacyCollectiveData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__.graphql)(_lib_graphql_queries__WEBPACK_IMPORTED_MODULE_2__/* .legacyCollectiveQuery */ .pY);
CreateEventPage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { parentCollectiveSlug } }",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "CreateEventPage",
  "props": {
    "slug": {
      "description": "",
      "type": {
        "name": "string"
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
    "loadingLoggedInUser": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_5__/* .withUser */ .ns)(addLegacyCollectiveData(CreateEventPage)));
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

/***/ 13831:
/***/ ((module) => {

module.exports = require("@dnd-kit/core");

/***/ }),

/***/ 99565:
/***/ ((module) => {

module.exports = require("@dnd-kit/sortable");

/***/ }),

/***/ 92813:
/***/ ((module) => {

module.exports = require("@dnd-kit/utilities");

/***/ }),

/***/ 27943:
/***/ ((module) => {

module.exports = require("@material-ui/core/Switch");

/***/ }),

/***/ 48308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 42558:
/***/ ((module) => {

module.exports = require("@opencollective/taxes");

/***/ }),

/***/ 3115:
/***/ ((module) => {

module.exports = require("@sentry/browser");

/***/ }),

/***/ 33244:
/***/ ((module) => {

module.exports = require("@styled-icons/bootstrap/ShieldFillCheck");

/***/ }),

/***/ 7257:
/***/ ((module) => {

module.exports = require("@styled-icons/bootstrap/ShieldFillExclamation");

/***/ }),

/***/ 58847:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Check");

/***/ }),

/***/ 60080:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/CheckCircle");

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

/***/ 93842:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/DotsVerticalRounded");

/***/ }),

/***/ 95019:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Envelope");

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

/***/ 24594:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/MinusCircle");

/***/ }),

/***/ 46529:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Planet");

/***/ }),

/***/ 23263:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Plus");

/***/ }),

/***/ 43891:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Receipt");

/***/ }),

/***/ 60476:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Support");

/***/ }),

/***/ 99232:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Undo");

/***/ }),

/***/ 60270:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Alipay");

/***/ }),

/***/ 45933:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Github");

/***/ }),

/***/ 3592:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Mastodon");

/***/ }),

/***/ 54427:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Paypal");

/***/ }),

/***/ 64374:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Slack");

/***/ }),

/***/ 14638:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Twitter");

/***/ }),

/***/ 81594:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Ban");

/***/ }),

/***/ 19153:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Bars");

/***/ }),

/***/ 41032:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CaretDown");

/***/ }),

/***/ 2331:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CaretUp");

/***/ }),

/***/ 9443:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Check");

/***/ }),

/***/ 62876:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CheckCircle");

/***/ }),

/***/ 55457:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CreditCard");

/***/ }),

/***/ 63387:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/ExchangeAlt");

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

/***/ 87584:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/MoneyCheckAlt");

/***/ }),

/***/ 77192:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Plus");

/***/ }),

/***/ 26201:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Redo");

/***/ }),

/***/ 97881:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Times");

/***/ }),

/***/ 8866:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/University");

/***/ }),

/***/ 56758:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/AlertTriangle");

/***/ }),

/***/ 62941:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ArrowLeft");

/***/ }),

/***/ 22198:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ArrowRight");

/***/ }),

/***/ 61975:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Calendar");

/***/ }),

/***/ 89711:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronDown");

/***/ }),

/***/ 87208:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronDown/ChevronDown");

/***/ }),

/***/ 76841:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronUp");

/***/ }),

/***/ 29872:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronUp/ChevronUp");

/***/ }),

/***/ 57847:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Download");

/***/ }),

/***/ 40710:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/FileText");

/***/ }),

/***/ 57153:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Info");

/***/ }),

/***/ 67520:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Maximize2");

/***/ }),

/***/ 75827:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/MessageSquare");

/***/ }),

/***/ 62556:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/PlusCircle");

/***/ }),

/***/ 52021:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Settings");

/***/ }),

/***/ 72142:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Trash2");

/***/ }),

/***/ 73949:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/Blog");

/***/ }),

/***/ 21522:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/PriceTags");

/***/ }),

/***/ 4965:
/***/ ((module) => {

module.exports = require("@styled-icons/ionicons-solid/Expand");

/***/ }),

/***/ 80950:
/***/ ((module) => {

module.exports = require("@styled-icons/material/AttachMoney");

/***/ }),

/***/ 93974:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Clear");

/***/ }),

/***/ 20384:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Close");

/***/ }),

/***/ 6534:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Lock");

/***/ }),

/***/ 34427:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Mail");

/***/ }),

/***/ 33651:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Settings");

/***/ }),

/***/ 95830:
/***/ ((module) => {

module.exports = require("@styled-icons/material/ShowChart");

/***/ }),

/***/ 80924:
/***/ ((module) => {

module.exports = require("@styled-icons/octicons/Mail");

/***/ }),

/***/ 83002:
/***/ ((module) => {

module.exports = require("@styled-icons/remix-line/Question");

/***/ }),

/***/ 38164:
/***/ ((module) => {

module.exports = require("@styled-icons/remix-line/Stack");

/***/ }),

/***/ 45284:
/***/ ((module) => {

module.exports = require("@styled-system/prop-types");

/***/ }),

/***/ 19099:
/***/ ((module) => {

module.exports = require("@styled-system/theme-get");

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

/***/ 53291:
/***/ ((module) => {

module.exports = require("dayjs/plugin/timezone");

/***/ }),

/***/ 36619:
/***/ ((module) => {

module.exports = require("dayjs/plugin/utc");

/***/ }),

/***/ 28109:
/***/ ((module) => {

module.exports = require("file-saver");

/***/ }),

/***/ 92869:
/***/ ((module) => {

module.exports = require("focus-trap-react");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 99344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 70154:
/***/ ((module) => {

module.exports = require("load-script");

/***/ }),

/***/ 99226:
/***/ ((module) => {

module.exports = require("lodash/assign");

/***/ }),

/***/ 12154:
/***/ ((module) => {

module.exports = require("lodash/clamp");

/***/ }),

/***/ 59591:
/***/ ((module) => {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ 39131:
/***/ ((module) => {

module.exports = require("lodash/compact");

/***/ }),

/***/ 93908:
/***/ ((module) => {

module.exports = require("lodash/debounce");

/***/ }),

/***/ 90857:
/***/ ((module) => {

module.exports = require("lodash/endsWith");

/***/ }),

/***/ 76918:
/***/ ((module) => {

module.exports = require("lodash/find");

/***/ }),

/***/ 25359:
/***/ ((module) => {

module.exports = require("lodash/findLastIndex");

/***/ }),

/***/ 22265:
/***/ ((module) => {

module.exports = require("lodash/first");

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

/***/ 41238:
/***/ ((module) => {

module.exports = require("lodash/includes");

/***/ }),

/***/ 53493:
/***/ ((module) => {

module.exports = require("lodash/intersection");

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

/***/ 48524:
/***/ ((module) => {

module.exports = require("lodash/isNull");

/***/ }),

/***/ 75795:
/***/ ((module) => {

module.exports = require("lodash/isObject");

/***/ }),

/***/ 22133:
/***/ ((module) => {

module.exports = require("lodash/isUndefined");

/***/ }),

/***/ 83824:
/***/ ((module) => {

module.exports = require("lodash/last");

/***/ }),

/***/ 53707:
/***/ ((module) => {

module.exports = require("lodash/map");

/***/ }),

/***/ 36625:
/***/ ((module) => {

module.exports = require("lodash/max");

/***/ }),

/***/ 61831:
/***/ ((module) => {

module.exports = require("lodash/merge");

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

/***/ 96839:
/***/ ((module) => {

module.exports = require("lodash/padStart");

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

/***/ 24298:
/***/ ((module) => {

module.exports = require("lodash/set");

/***/ }),

/***/ 71156:
/***/ ((module) => {

module.exports = require("lodash/size");

/***/ }),

/***/ 23672:
/***/ ((module) => {

module.exports = require("lodash/sortBy");

/***/ }),

/***/ 35007:
/***/ ((module) => {

module.exports = require("lodash/startCase");

/***/ }),

/***/ 79800:
/***/ ((module) => {

module.exports = require("lodash/sumBy");

/***/ }),

/***/ 75142:
/***/ ((module) => {

module.exports = require("lodash/trim");

/***/ }),

/***/ 51858:
/***/ ((module) => {

module.exports = require("lodash/truncate");

/***/ }),

/***/ 18459:
/***/ ((module) => {

module.exports = require("lodash/uniq");

/***/ }),

/***/ 69309:
/***/ ((module) => {

module.exports = require("lodash/uniqBy");

/***/ }),

/***/ 73022:
/***/ ((module) => {

module.exports = require("lodash/upperCase");

/***/ }),

/***/ 22217:
/***/ ((module) => {

module.exports = require("lodash/without");

/***/ }),

/***/ 86646:
/***/ ((module) => {

module.exports = require("lodash/zipObject");

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

/***/ 48580:
/***/ ((module) => {

module.exports = require("react-geosuggest");

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

/***/ 31325:
/***/ ((module) => {

module.exports = require("react-select/creatable");

/***/ }),

/***/ 37597:
/***/ ((module) => {

module.exports = require("react-text-mask");

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

/***/ 71564:
/***/ ((module) => {

module.exports = require("validator");

/***/ }),

/***/ 85598:
/***/ ((module) => {

module.exports = import("react-animate-height");;

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,9156,7262,1433,1808,1012,2631,7619,7632,2143,986,242,3129,8185,5993,7965,9468,7772,8208,9591], () => (__webpack_exec__(59293)));
module.exports = __webpack_exports__;

})();