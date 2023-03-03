"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[730],{

/***/ 4496:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SocialLinksFormField; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7980);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89734);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67294);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60887);
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45587);
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24285);
/* harmony import */ var _styled_icons_fa_solid_Plus__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(33007);
/* harmony import */ var _styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(74684);
/* harmony import */ var _styled_icons_material_DragIndicator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(93619);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(44012);
/* harmony import */ var _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97965);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(97079);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87268);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97274);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(66943);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(85893);





var _excluded = ["value", "onChange"];

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


















function SocialLinksFormField(_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      touched = _ref.touched,
      onChange = _ref.onChange;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5__.useState(value.map(function (_ref2, i) {
    var url = _ref2.url,
        type = _ref2.type;
    return {
      url: url,
      type: type,
      sortId: i.toString()
    };
  })),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_React$useState, 2),
      items = _React$useState2[0],
      setItems = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_5__.useEffect(function () {
    onChange(items.map(function (_ref3) {
      var url = _ref3.url,
          type = _ref3.type;
      return {
        url: url,
        type: type
      };
    }));
  }, [items]);
  var onItemChange = react__WEBPACK_IMPORTED_MODULE_5__.useCallback(function (socialLink, sortId) {
    var newItems = items.map(function (item) {
      if (item.sortId === sortId) {
        return _objectSpread(_objectSpread({}, item), socialLink);
      }

      return item;
    });
    setItems(newItems);
  }, [items, onChange]);
  var onRemoveItem = react__WEBPACK_IMPORTED_MODULE_5__.useCallback(function (sortId) {
    var newItems = items.filter(function (item) {
      return item.sortId !== sortId;
    });
    setItems(newItems);
  }, [items, onChange]);
  var addItem = react__WEBPACK_IMPORTED_MODULE_5__.useCallback(function () {
    var newItems = [].concat(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1___default()(items), [{
      url: '',
      type: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.WEBSITE */ .Xu.WEBSITE
    }]).map(function (item, i) {
      return _objectSpread(_objectSpread({}, item), {}, {
        sortId: i.toString()
      });
    });
    setItems(newItems);
  }, [items, onChange]);

  function handleDragEnd(event) {
    var active = event.active,
        over = event.over;

    if (active.id !== over.id) {
      var oldIndex = items.findIndex(function (item) {
        return item.sortId === active.id;
      });
      var newIndex = items.findIndex(function (item) {
        return item.sortId === over.id;
      });
      var newItems = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_7__/* .arrayMove */ .Rp)(items, oldIndex, newIndex);
      setItems(newItems);
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_6__/* .DndContext */ .LB, {
    collisionDetection: _dnd_kit_core__WEBPACK_IMPORTED_MODULE_6__/* .closestCenter */ .pE,
    onDragEnd: handleDragEnd,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
      width: "100%",
      flexDirection: "column",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_7__/* .SortableContext */ .Fo, {
        items: items.map(function (item) {
          return item.sortId;
        }),
        strategy: _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_7__/* .verticalListSortingStrategy */ .qw,
        children: [items.map(function (socialLink) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(SocialLinkItem, {
            error: touched && !(0,_lib_utils__WEBPACK_IMPORTED_MODULE_10__/* .isValidUrl */ .jv)(socialLink.url),
            value: socialLink,
            onChange: onItemChange,
            onRemoveItem: onRemoveItem
          }, socialLink.sortId);
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
          mt: 2,
          justifyContent: "center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            disabled: value.length >= 10,
            type: "button",
            buttonSize: "tiny",
            buttonStyle: "standard",
            onClick: addItem,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_styled_icons_fa_solid_Plus__WEBPACK_IMPORTED_MODULE_17__/* .Plus */ .v, {
              size: "10px"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_15__/* .Span */ .Dr, {
              ml: 2,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                id: "FH4TgN",
                defaultMessage: [{
                  "type": 0,
                  "value": "Add social link"
                }]
              })
            })]
          })
        })]
      })
    })
  });
}

function SocialLinkTypePicker(_ref4) {
  var value = _ref4.value,
      _onChange = _ref4.onChange,
      pickerProps = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref4, _excluded);

  var options = [{
    value: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.WEBSITE.toString */ .Xu.WEBSITE.toString(),
    label: 'Website'
  }, {
    value: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.DISCORD.toString */ .Xu.DISCORD.toString(),
    label: 'Discord'
  }, {
    value: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.FACEBOOK.toString */ .Xu.FACEBOOK.toString(),
    label: 'Facebook'
  }, {
    value: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.GITHUB.toString */ .Xu.GITHUB.toString(),
    label: 'GitHub'
  }, {
    value: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.GITLAB.toString */ .Xu.GITLAB.toString(),
    label: 'GitLab'
  }, {
    value: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.GIT.toString */ .Xu.GIT.toString(),
    label: 'Git Repository'
  }, {
    value: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.INSTAGRAM.toString */ .Xu.INSTAGRAM.toString(),
    label: 'Instagram'
  }, {
    value: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.MASTODON.toString */ .Xu.MASTODON.toString(),
    label: 'Mastodon'
  }, {
    value: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.MATTERMOST.toString */ .Xu.MATTERMOST.toString(),
    label: 'Mattermost'
  }, {
    value: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.TUMBLR.toString */ .Xu.TUMBLR.toString(),
    label: 'Tumblr'
  }, {
    value: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.TWITTER.toString */ .Xu.TWITTER.toString(),
    label: 'Twitter'
  }, {
    value: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.YOUTUBE.toString */ .Xu.YOUTUBE.toString(),
    label: 'YouTube'
  }, {
    value: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.MEETUP.toString */ .Xu.MEETUP.toString(),
    label: 'Meetup'
  }, {
    value: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.LINKEDIN.toString */ .Xu.LINKEDIN.toString(),
    label: 'LinkedIn'
  }, {
    value: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.SLACK.toString */ .Xu.SLACK.toString(),
    label: 'Slack'
  }, {
    value: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.DISCOURSE.toString */ .Xu.DISCOURSE.toString(),
    label: 'Discourse'
  }, {
    value: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.PIXELFED.toString */ .Xu.PIXELFED.toString(),
    label: 'Pixelfed'
  }, {
    value: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.GHOST.toString */ .Xu.GHOST.toString(),
    label: 'Ghost'
  }, {
    value: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.PEERTUBE.toString */ .Xu.PEERTUBE.toString(),
    label: 'PeerTube'
  }, {
    value: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.TIKTOK.toString */ .Xu.TIKTOK.toString(),
    label: 'TikTok'
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_StyledSelect__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, pickerProps), {}, {
    "data-cy": "social-link-type-picker",
    value: options.find(function (o) {
      return o.value === (value === null || value === void 0 ? void 0 : value.toString());
    }),
    defaultValue: options.find(function (o) {
      return o.value === _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.WEBSITE.toString */ .Xu.WEBSITE.toString();
    }),
    onChange: function onChange(_ref5) {
      var value = _ref5.value;
      return _onChange(value);
    },
    options: lodash_sortBy__WEBPACK_IMPORTED_MODULE_4___default()(options, 'label')
  }));
}

function SocialLinkItem(_ref6) {
  var value = _ref6.value,
      error = _ref6.error,
      onChange = _ref6.onChange,
      onRemoveItem = _ref6.onRemoveItem;

  var _useSortable = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_7__/* .useSortable */ .nB)({
    id: value.sortId
  }),
      attributes = _useSortable.attributes,
      listeners = _useSortable.listeners,
      setNodeRef = _useSortable.setNodeRef,
      transform = _useSortable.transform,
      transition = _useSortable.transition;

  var style = {
    transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_8__/* .CSS.Transform.toString */ .ux.Transform.toString(transform),
    transition: transition
  };
  var onFieldChange = react__WEBPACK_IMPORTED_MODULE_5__.useCallback(function (field, fieldValue) {
    onChange(_objectSpread(_objectSpread({}, value), {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()({}, field, fieldValue)), value.sortId);
  }, [onChange, value]);
  var onUrlChange = react__WEBPACK_IMPORTED_MODULE_5__.useCallback(function (e) {
    var _typeFromUrl;

    var newUrl = e.target.value;
    onChange({
      type: (_typeFromUrl = typeFromUrl(newUrl)) !== null && _typeFromUrl !== void 0 ? _typeFromUrl : value.type,
      url: newUrl
    }, value.sortId);
  }, [onChange, value]);
  var onUrlBlur = react__WEBPACK_IMPORTED_MODULE_5__.useCallback(function () {
    var hasSchemaRegexp = /^[^:]+:\/\//;

    if (value.url.trim() === '') {
      return;
    }

    if (!value.url.match(hasSchemaRegexp)) {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        url: "https://".concat(value.url)
      }), value.sortId);
    }
  }, [onChange, value]);
  var onRemove = react__WEBPACK_IMPORTED_MODULE_5__.useCallback(function () {
    onRemoveItem(value.sortId);
  }, [onRemoveItem, value.sortId]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
    ref: setNodeRef,
    style: style,
    alignItems: "center",
    my: 1,
    gap: "5px",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", _objectSpread(_objectSpread(_objectSpread({}, listeners), attributes), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_styled_icons_material_DragIndicator__WEBPACK_IMPORTED_MODULE_19__/* .DragIndicator */ .N, {
        size: "15px",
        style: {
          cursor: 'grab'
        }
      })
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
      flexGrow: 1,
      flexWrap: "wrap",
      gap: "5px",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
        width: ['100%', '120px'],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(SocialLinkTypePicker, {
          value: value.type,
          onChange: function onChange(type) {
            return onFieldChange('type', type);
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_StyledInput__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
        autoFocus: value.url === '',
        error: error,
        flexGrow: 1,
        value: value.url,
        onBlur: onUrlBlur,
        onChange: onUrlChange,
        placeholder: "https://opencollective.com/"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      tabIndex: -1,
      padding: 0,
      width: "20px",
      height: "20px",
      type: "button",
      buttonStyle: "borderless",
      onClick: onRemove,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_20__/* .Times */ .u, {
        size: "10px"
      })
    })]
  });
}

var knownSocialLinkDomains = [{
  type: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.DISCORD */ .Xu.DISCORD,
  regexp: /^(https:\/\/)?discord.com/
}, {
  type: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.FACEBOOK */ .Xu.FACEBOOK,
  regexp: /^(https:\/\/)?(www\.)?facebook.com/
}, {
  type: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.GITHUB */ .Xu.GITHUB,
  regexp: /^(https:\/\/)?github.com/
}, {
  type: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.GITLAB */ .Xu.GITLAB,
  regexp: /^(https:\/\/)?gitlab.com/
}, {
  type: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.INSTAGRAM */ .Xu.INSTAGRAM,
  regexp: /^(https:\/\/)?(www\.)?instagram.com/
}, {
  type: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.LINKEDIN */ .Xu.LINKEDIN,
  regexp: /^(https:\/\/)?(www\.)?linkedin.com/
}, {
  type: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.MEETUP */ .Xu.MEETUP,
  regexp: /^(https:\/\/)?meetup.com/
}, {
  type: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.SLACK */ .Xu.SLACK,
  regexp: /^(https:\/\/)?[^.]+.?slack.com/
}, {
  type: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.TIKTOK */ .Xu.TIKTOK,
  regexp: /^(https:\/\/)?(www\.)?tiktok.com/
}, {
  type: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.TUMBLR */ .Xu.TUMBLR,
  regexp: /^(https:\/\/)?[^.]+\.?tumblr.com/
}, {
  type: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.TWITTER */ .Xu.TWITTER,
  regexp: /^(https:\/\/)?twitter.com/
}, {
  type: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.YOUTUBE */ .Xu.YOUTUBE,
  regexp: /^(https:\/\/)?(www\.)?youtube.com/
}];

function typeFromUrl(url) {
  var _iterator = _createForOfIteratorHelper(knownSocialLinkDomains),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var knownDomain = _step.value;

      if (url.match(knownDomain.regexp)) {
        return knownDomain.type;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return null;
}

SocialLinksFormField.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SocialLinksFormField",
  "props": {
    "value": {
      "defaultValue": {
        "value": "[]",
        "computed": false
      },
      "required": false,
      "tsType": {
        "name": "Array",
        "elements": [{
          "name": "SocialLink"
        }],
        "raw": "SocialLink[]"
      },
      "description": ""
    },
    "touched": {
      "required": false,
      "tsType": {
        "name": "boolean"
      },
      "description": ""
    },
    "onChange": {
      "required": true,
      "tsType": {
        "name": "signature",
        "type": "function",
        "raw": "(value: SocialLinkInput[]) => void",
        "signature": {
          "arguments": [{
            "name": "value",
            "type": {
              "name": "Array",
              "elements": [{
                "name": "SocialLinkInput"
              }],
              "raw": "SocialLinkInput[]"
            }
          }],
          "return": {
            "name": "void"
          }
        }
      },
      "description": ""
    }
  }
};

/***/ }),

/***/ 70730:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "addEditCollectiveMembersMutation": function() { return /* binding */ addEditCollectiveMembersMutation; },
  "default": function() { return /* binding */ onboarding_modal_OnboardingModal; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
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
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(57557);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./node_modules/lodash/map.js
var map = __webpack_require__(35161);
var map_default = /*#__PURE__*/__webpack_require__.n(map);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hoc/graphql.js + 7 modules
var graphql = __webpack_require__(16608);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(82580);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var react_intl_lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/injectIntl.js
var injectIntl = __webpack_require__(74806);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./lib/confettis.js
var confettis = __webpack_require__(19196);
// EXTERNAL MODULE: ./lib/errors/index.js + 1 modules
var errors = __webpack_require__(12136);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./lib/graphql/types/v2/graphql.ts
var v2_graphql = __webpack_require__(97965);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(97079);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/MessageBox.tsx + 2 modules
var MessageBox = __webpack_require__(86702);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledModal.tsx
var StyledModal = __webpack_require__(71792);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/Image.js
var Image = __webpack_require__(56562);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7980);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./components/CollectivePickerAsync.js
var CollectivePickerAsync = __webpack_require__(5993);
// EXTERNAL MODULE: ./components/StyledHr.tsx
var StyledHr = __webpack_require__(173);
// EXTERNAL MODULE: ./components/edit-collective/SocialLinksFormField.tsx
var SocialLinksFormField = __webpack_require__(4496);
// EXTERNAL MODULE: ./components/onboarding-modal/OnboardingProfileCard.js
var OnboardingProfileCard = __webpack_require__(14574);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/onboarding-modal/OnboardingSkipButton.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var OnboardingSkipButton = /*#__PURE__*/function (_React$Component) {
  inherits_default()(OnboardingSkipButton, _React$Component);

  var _super = _createSuper(OnboardingSkipButton);

  function OnboardingSkipButton() {
    classCallCheck_default()(this, OnboardingSkipButton);

    return _super.apply(this, arguments);
  }

  createClass_default()(OnboardingSkipButton, [{
    key: "render",
    value: function render() {
      var _this = this;

      var slug = this.props.slug;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
        type: "button",
        width: "fit-content",
        buttonStyle: "primary",
        onClick: function onClick() {
          _this.props.router.push("/".concat(slug));
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "SkipOnboarding",
          defaultMessage: [{
            "type": 0,
            "value": "Skip onboarding"
          }]
        })
      });
    }
  }]);

  return OnboardingSkipButton;
}(react.Component);

OnboardingSkipButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OnboardingSkipButton",
  "props": {
    "slug": {
      "description": "",
      "type": {
        "name": "string"
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
/* harmony default export */ var onboarding_modal_OnboardingSkipButton = ((0,router.withRouter)(OnboardingSkipButton));
;// CONCATENATED MODULE: ./components/onboarding-modal/OnboardingContentBox.js









function OnboardingContentBox_createSuper(Derived) { var hasNativeReflectConstruct = OnboardingContentBox_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function OnboardingContentBox_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }














var OnboardingContentBox = /*#__PURE__*/function (_React$Component) {
  inherits_default()(OnboardingContentBox, _React$Component);

  var _super = OnboardingContentBox_createSuper(OnboardingContentBox);

  function OnboardingContentBox(props) {
    var _this;

    classCallCheck_default()(this, OnboardingContentBox);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "removeAdmin", function (collective) {
      var filteredAdmins = _this.state.admins.filter(function (admin) {
        return admin.member.id !== collective.id;
      });

      _this.setState({
        admins: filteredAdmins
      }, function () {
        return _this.props.updateAdmins(_this.state.admins);
      });
    });

    _this.state = {
      admins: []
    };
    _this.messages = (0,react_intl_lib.defineMessages)({
      placeholder: {
        id: "onboarding.contact.placeholder",
        defaultMessage: [{
          "type": 0,
          "value": "Who do you want to invite?"
        }]
      }
    });
    return _this;
  }

  createClass_default()(OnboardingContentBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        admins: []
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          slug = _this$props.slug,
          step = _this$props.step,
          collective = _this$props.collective,
          updateAdmins = _this$props.updateAdmins,
          intl = _this$props.intl,
          values = _this$props.values,
          touched = _this$props.touched;
      var admins = this.state.admins;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        display: "flex",
        flexDirection: "column",
        width: ['90%', '80%'],
        alignItems: "center",
        children: [step === 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "336px",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Text.H1, {
            fontSize: "20px",
            lineHeight: "24px",
            fontWeight: "bold",
            color: "black.900",
            textAlign: "center",
            mb: 4,
            mx: 2,
            "data-cy": "onboarding-collective-created",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "onboarding.collective.created",
              defaultMessage: [{
                "type": 1,
                "value": "collective"
              }, {
                "type": 0,
                "value": " has been created!"
              }],
              values: {
                collective: collective.name
              }
            }), "\xA0\uD83C\uDF89"]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            display: ['block', null, 'none'],
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(onboarding_modal_OnboardingSkipButton, {
              slug: slug
            })
          })]
        }), step === 1 && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
            maxWidth: 336,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H1, {
              fontSize: "20px",
              lineHeight: "24px",
              fontWeight: "bold",
              color: "black.900",
              textAlign: "center",
              mb: 4,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "onboarding.admins.header",
                defaultMessage: [{
                  "type": 0,
                  "value": "Add administrators"
                }]
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            px: 3,
            width: "100%",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
              my: 2,
              fontSize: "12px",
              textTransform: "uppercase",
              color: "black.700",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "administrators",
                defaultMessage: [{
                  "type": 0,
                  "value": "Administrators"
                }]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
              flexGrow: 1,
              alignItems: "center",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
                width: "100%",
                ml: 2
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            px: 3,
            width: "100%",
            flexWrap: "wrap",
            "data-cy": "profile-card",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(OnboardingProfileCard/* default */.Z, {
              collective: this.props.LoggedInUser.collective
            }, this.props.LoggedInUser.collective.id), this.props.memberInvitations.map(function (admin) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(OnboardingProfileCard/* default */.Z, {
                collective: admin.memberAccount,
                isPending: true
              }, admin.memberAccount.id);
            }), admins.map(function (admin) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(OnboardingProfileCard/* default */.Z, {
                collective: admin.member,
                removeAdmin: _this2.removeAdmin
              }, admin.member.id);
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            px: 3,
            width: "100%",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
              my: 2,
              fontSize: "12px",
              textTransform: "uppercase",
              color: "black.700",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "onboarding.admins.invite",
                defaultMessage: [{
                  "type": 0,
                  "value": "Invite administrators"
                }]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
              flexGrow: 1,
              alignItems: "center",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
                width: "100%",
                ml: 2
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
            my: 2,
            px: 3,
            flexDirection: "column",
            width: "100%",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(CollectivePickerAsync/* default */.Z, {
              inputId: "onboarding-admin-picker",
              creatable: true,
              collective: null,
              types: ['USER'],
              "data-cy": "admin-picker",
              onChange: function onChange(option) {
                // only assign admins if they are not in the list already
                var duplicates = admins.filter(function (admin) {
                  return admin.member.id === option.value.id;
                });

                _this2.setState(function (state) {
                  return {
                    admins: duplicates.length ? admins : [].concat(toConsumableArray_default()(state.admins), [{
                      role: 'ADMIN',
                      member: option.value
                    }])
                  };
                }, function () {
                  return updateAdmins(_this2.state.admins);
                });
              },
              placeholder: intl.formatMessage(this.messages['placeholder'])
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            my: 2,
            fontSize: "12px",
            color: "black.500",
            textAlign: "center",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "onboarding.admins.caption",
              defaultMessage: [{
                "type": 0,
                "value": "Admins can modify settings and approve expenses."
              }]
            })
          })]
        }), step === 2 && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            maxWidth: "336px",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H1, {
              fontSize: "20px",
              lineHeight: "24px",
              fontWeight: "bold",
              color: "black.900",
              textAlign: "center",
              mb: 4,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "onboarding.contact.header",
                defaultMessage: [{
                  "type": 0,
                  "value": "Links and contact info"
                }]
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(SocialLinksFormField/* default */.Z, {
            value: values.socialLinks,
            touched: touched.socialLinks,
            onChange: function onChange(s) {
              _this2.props.setFieldValue('socialLinks', s);

              _this2.props.setFieldTouched('socialLinks');
            }
          })]
        })]
      });
    }
  }]);

  return OnboardingContentBox;
}(react.Component);

OnboardingContentBox.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "removeAdmin",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "collective",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "OnboardingContentBox",
  "props": {
    "slug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "step": {
      "description": "",
      "type": {
        "name": "number"
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
    "memberInvitations": {
      "description": "",
      "type": {
        "name": "object"
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
    "updateAdmins": {
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
    },
    "values": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "errors": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "touched": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "setFieldValue": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "setFieldTouched": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ var onboarding_modal_OnboardingContentBox = ((0,injectIntl/* default */.ZP)(OnboardingContentBox));
// EXTERNAL MODULE: ./lib/withViewport.js
var withViewport = __webpack_require__(74387);
// EXTERNAL MODULE: ./components/StyledRoundButton.js
var StyledRoundButton = __webpack_require__(90012);
;// CONCATENATED MODULE: ./components/onboarding-modal/OnboardingNavButtons.js








function OnboardingNavButtons_createSuper(Derived) { var hasNativeReflectConstruct = OnboardingNavButtons_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function OnboardingNavButtons_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }










var params = {
  0: {
    disabled: true,
    routerStepForward: 'administrators'
  },
  1: {
    disabled: false,
    routerStepBack: '',
    routerStepForward: 'contact-info'
  },
  2: {
    disabled: false,
    routerStepBack: 'administrators'
  }
};

var OnboardingNavButtons = /*#__PURE__*/function (_React$Component) {
  inherits_default()(OnboardingNavButtons, _React$Component);

  var _super = OnboardingNavButtons_createSuper(OnboardingNavButtons);

  function OnboardingNavButtons() {
    var _this;

    classCallCheck_default()(this, OnboardingNavButtons);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "getStepParams", function (step, param) {
      return params[step][param];
    });

    return _this;
  }

  createClass_default()(OnboardingNavButtons, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          step = _this$props.step,
          mode = _this$props.mode,
          slug = _this$props.slug,
          loading = _this$props.loading,
          viewport = _this$props.viewport,
          handleSubmit = _this$props.handleSubmit;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
        children: step === 2 ? /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [viewport === withViewport/* VIEWPORTS.XSMALL */.Pm.XSMALL ? /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
            type: "button",
            "data-cy": "step-back-button",
            mx: 1,
            buttonStyle: "primary",
            disabled: this.getStepParams(step, 'disabled'),
            onClick: function onClick() {
              _this2.props.router.push("/".concat(slug, "/").concat(mode, "/").concat(_this2.getStepParams(step, 'routerStepBack')));
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "contribute.prevStep",
              defaultMessage: [{
                "type": 0,
                "value": "Previous step"
              }]
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(StyledRoundButton/* default */.Z, {
            type: "button",
            "data-cy": "step-back-button",
            mx: 1,
            size: 48,
            disabled: this.getStepParams(step, 'disabled'),
            onClick: function onClick() {
              _this2.props.router.push("/".concat(slug, "/").concat(mode, "/").concat(_this2.getStepParams(step, 'routerStepBack')));
            },
            children: "\u2190"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
            buttonStyle: "primary",
            onClick: function onClick() {
              return handleSubmit;
            },
            loading: loading,
            "data-cy": "finish-button",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "Finish",
              defaultMessage: [{
                "type": 0,
                "value": "Finish"
              }]
            })
          })]
        }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [viewport === withViewport/* VIEWPORTS.XSMALL */.Pm.XSMALL ? /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
            type: "button",
            "data-cy": "step-back-button",
            mx: 1,
            buttonStyle: "primary",
            disabled: this.getStepParams(step, 'disabled'),
            onClick: function onClick() {
              _this2.props.router.push("/".concat(slug, "/").concat(mode, "/").concat(_this2.getStepParams(step, 'routerStepBack')));
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "contribute.prevStep",
              defaultMessage: [{
                "type": 0,
                "value": "Previous step"
              }]
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(StyledRoundButton/* default */.Z, {
            type: "button",
            "data-cy": "step-back-button",
            mx: 1,
            size: 48,
            disabled: this.getStepParams(step, 'disabled'),
            onClick: function onClick() {
              _this2.props.router.push("/".concat(slug, "/").concat(mode, "/").concat(_this2.getStepParams(step, 'routerStepBack')));
            },
            children: "\u2190"
          }), viewport === withViewport/* VIEWPORTS.XSMALL */.Pm.XSMALL ? /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
            type: "button",
            "data-cy": "step-forward-button",
            mx: 1,
            buttonStyle: "primary",
            onClick: function onClick() {
              _this2.props.router.push("/".concat(slug, "/").concat(mode, "/").concat(_this2.getStepParams(step, 'routerStepForward')));
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "contribute.nextStep",
              defaultMessage: [{
                "type": 0,
                "value": "Next step"
              }]
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(StyledRoundButton/* default */.Z, {
            type: "button",
            "data-cy": "step-forward-button",
            mx: 1,
            size: 48,
            onClick: function onClick() {
              _this2.props.router.push("/".concat(slug, "/").concat(mode, "/").concat(_this2.getStepParams(step, 'routerStepForward')));
            },
            children: "\u2192"
          })]
        })
      });
    }
  }]);

  return OnboardingNavButtons;
}(react.Component);

OnboardingNavButtons.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getStepParams",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "step",
      "type": null
    }, {
      "name": "param",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "OnboardingNavButtons",
  "props": {
    "step": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "slug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "mode": {
      "description": "",
      "type": {
        "name": "string"
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
    "viewport": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "handleSubmit": {
      "description": "",
      "type": {
        "name": "func"
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
/* harmony default export */ var onboarding_modal_OnboardingNavButtons = ((0,withViewport/* default */.ZP)((0,router.withRouter)(OnboardingNavButtons)));
// EXTERNAL MODULE: ./components/StepsProgress.js
var StepsProgress = __webpack_require__(65598);
;// CONCATENATED MODULE: ./components/onboarding-modal/OnboardingStepsProgress.js






function OnboardingStepsProgress_createSuper(Derived) { var hasNativeReflectConstruct = OnboardingStepsProgress_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function OnboardingStepsProgress_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var StepLabel = (0,styled_components_browser_esm/* default */.ZP)(Text/* Span */.Dr).withConfig({
  displayName: "OnboardingStepsProgress__StepLabel",
  componentId: "sc-q67br1-0"
})(["text-transform:uppercase;text-align:center;"]);
StepLabel.defaultProps = {
  color: 'black.400',
  fontSize: '10px',
  mt: 1
};
var steps = [{
  name: 'Welcome'
}, {
  name: 'Administrators'
}, {
  name: 'Contact'
}];
var OnboardingStepsProgress_params = {
  0: undefined,
  1: 'administrators',
  2: 'contact-info'
};

var OnboardingStepsProgress = /*#__PURE__*/function (_React$Component) {
  inherits_default()(OnboardingStepsProgress, _React$Component);

  var _super = OnboardingStepsProgress_createSuper(OnboardingStepsProgress);

  function OnboardingStepsProgress() {
    classCallCheck_default()(this, OnboardingStepsProgress);

    return _super.apply(this, arguments);
  }

  createClass_default()(OnboardingStepsProgress, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          slug = _this$props.slug,
          mode = _this$props.mode;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(StepsProgress/* default */.Z, {
          steps: steps,
          focus: steps[this.props.step],
          onStepSelect: function onStepSelect(step) {
            var newStep = steps.findIndex(function (element) {
              return element.name === step.name;
            });

            _this.props.router.push("/".concat(slug, "/").concat(mode, "/").concat(OnboardingStepsProgress_params[newStep] || ''));
          },
          children: function children(_ref) {
            var step = _ref.step;
            var label = null;

            if (step.name === 'Welcome') {
              label = /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "welcome",
                defaultMessage: [{
                  "type": 0,
                  "value": "Welcome"
                }]
              });
            }

            if (step.name === 'Administrators') {
              label = /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "administrators",
                defaultMessage: [{
                  "type": 0,
                  "value": "Administrators"
                }]
              });
            }

            if (step.name === 'Contact') {
              label = /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "Contact",
                defaultMessage: [{
                  "type": 0,
                  "value": "Contact"
                }]
              });
            }

            return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
              flexDirection: "column",
              alignItems: "center",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(StepLabel, {
                children: label
              })
            });
          }
        })
      });
    }
  }]);

  return OnboardingStepsProgress;
}(react.Component);

OnboardingStepsProgress.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OnboardingStepsProgress",
  "props": {
    "step": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "mode": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "slug": {
      "description": "",
      "type": {
        "name": "string"
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
/* harmony default export */ var onboarding_modal_OnboardingStepsProgress = ((0,router.withRouter)(OnboardingStepsProgress));
;// CONCATENATED MODULE: ./components/onboarding-modal/OnboardingModal.js












var _templateObject, _templateObject2, _templateObject3;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



function OnboardingModal_createSuper(Derived) { var hasNativeReflectConstruct = OnboardingModal_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function OnboardingModal_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

























var StepsProgressBox = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Box */.xu).withConfig({
  displayName: "OnboardingModal__StepsProgressBox",
  componentId: "sc-1t1aacg-0"
})(["min-height:95px;max-width:600px;@media screen and (max-width:640px){width:100%;max-width:100%;}"]);
var ResponsiveModal = (0,styled_components_browser_esm/* default */.ZP)(StyledModal/* default */.ZP).withConfig({
  displayName: "OnboardingModal__ResponsiveModal",
  componentId: "sc-1t1aacg-1"
})(["@media screen and (max-width:40em){transform:translate(0%,0%);position:fixed;top:69px;left:0px;height:calc(100vh - 70px);background:white;max-width:100%;border:none;border-radius:0;padding:0px;display:flex;flex-direction:column;justify-content:space-between;}"]);
var ResponsiveModalHeader = (0,styled_components_browser_esm/* default */.ZP)(StyledModal/* ModalHeader */.xB).withConfig({
  displayName: "OnboardingModal__ResponsiveModalHeader",
  componentId: "sc-1t1aacg-2"
})(["@media screen and (max-width:40em){padding:0px;svg{display:none;}}", "{margin-top:-100px;}"], StyledModal/* CloseIcon */.Tw);
var ResponsiveModalBody = (0,styled_components_browser_esm/* default */.ZP)(StyledModal/* ModalBody */.fe).withConfig({
  displayName: "OnboardingModal__ResponsiveModalBody",
  componentId: "sc-1t1aacg-3"
})(["@media screen and (max-width:40em){flex-grow:1;}"]);
var ResponsiveModalFooter = (0,styled_components_browser_esm/* default */.ZP)(StyledModal/* ModalFooter */.mz).withConfig({
  displayName: "OnboardingModal__ResponsiveModalFooter",
  componentId: "sc-1t1aacg-4"
})(["@media screen and (max-width:40em){padding-bottom:20px;}"]);
var ResponsiveModalOverlay = (0,styled_components_browser_esm/* default */.ZP)(StyledModal/* ModalOverlay */.ZA).withConfig({
  displayName: "OnboardingModal__ResponsiveModalOverlay",
  componentId: "sc-1t1aacg-5"
})(["", " @media screen and (max-width:40em){display:none;}"], function (overlay) {
  return overlay.noOverlay && (0,styled_components_browser_esm/* css */.iv)(["display:none;"]);
});
var ModalWithImage = (0,styled_components_browser_esm/* default */.ZP)(ResponsiveModal).withConfig({
  displayName: "OnboardingModal__ModalWithImage",
  componentId: "sc-1t1aacg-6"
})(["@media screen and (min-width:40em){background:white url('/static/images/create-collective/onboardingSuccessIllustration.png');background-repeat:no-repeat;background-size:100%;}"]);
var FormWithStyles = (0,styled_components_browser_esm/* default */.ZP)(formik_esm/* Form */.l0).withConfig({
  displayName: "OnboardingModal__FormWithStyles",
  componentId: "sc-1t1aacg-7"
})(["flex-grow:1;display:flex;flex-direction:column;justify-content:space-between;"]);
var OnboardingModal_params = {
  0: {
    height: 114,
    src: '/static/images/create-collective/onboardingWelcomeIllustration.png'
  },
  1: {
    height: 112,
    src: '/static/images/create-collective/onboardingAdminsIllustration.png'
  },
  2: {
    height: 119,
    src: '/static/images/create-collective/onboardingContactIllustration.png'
  }
};

var OnboardingModal = /*#__PURE__*/function (_React$Component) {
  inherits_default()(OnboardingModal, _React$Component);

  var _super = OnboardingModal_createSuper(OnboardingModal);

  function OnboardingModal(props) {
    var _this;

    classCallCheck_default()(this, OnboardingModal);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "setStep", function (queryStep) {
      if (queryStep === undefined) {
        _this.setState({
          step: 0
        });
      } else if (queryStep === 'administrators') {
        _this.setState({
          step: 1
        });
      } else if (queryStep === 'contact-info') {
        _this.setState({
          step: 2
        });
      } else if (queryStep === 'success') {
        _this.setState({
          step: 3
        });
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "updateAdmins", function (members) {
      _this.setState({
        members: members
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "submitAdmins", /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var errorMsg;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              _this.setState({
                isSubmitting: true
              });

              _context.next = 4;
              return _this.props.editCollectiveMembers({
                variables: {
                  collectiveId: _this.props.collective.id,
                  members: _this.state.members.map(function (member) {
                    return {
                      id: member.id,
                      role: member.role,
                      member: {
                        id: member.member.id,
                        name: member.member.name
                      }
                    };
                  })
                }
              });

            case 4:
              _context.next = 10;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              errorMsg = (0,errors/* getErrorFromGraphqlException */.H1)(_context.t0).message;
              throw new Error(errorMsg);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    })));

    defineProperty_default()(assertThisInitialized_default()(_this), "submitContact", /*#__PURE__*/function () {
      var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee2(values) {
        var collective, errorMsg;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                collective = _objectSpread(_objectSpread({}, values), {}, {
                  id: _this.props.collective.id
                });
                _context2.prev = 1;

                _this.setState({
                  isSubmitting: true
                });

                _context2.next = 5;
                return _this.props.editCollectiveContact({
                  variables: {
                    collective: collective
                  }
                });

              case 5:
                _context2.next = 11;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](1);
                errorMsg = (0,errors/* getErrorFromGraphqlException */.H1)(_context2.t0).message;
                throw new Error(errorMsg);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 7]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    defineProperty_default()(assertThisInitialized_default()(_this), "submitCollectiveInfo", /*#__PURE__*/function () {
      var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee3(values) {
        return regenerator_default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _this.submitContact(values);

              case 3:
                _context3.next = 5;
                return _this.submitAdmins();

              case 5:
                _this.props.router.push("/".concat(_this.props.collective.slug, "/").concat(_this.props.mode, "/success")).then(function () {
                  (0,confettis/* confettiFireworks */.K)(5000, {
                    zIndex: 3000
                  });
                });

                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);

                _this.setState({
                  isSubmitting: false,
                  error: _context3.t0
                });

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 8]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());

    defineProperty_default()(assertThisInitialized_default()(_this), "getStepParams", function (step, param) {
      return OnboardingModal_params[step][param];
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onClose", function () {
      _this.setState({
        noOverlay: true
      });

      _this.props.setShowOnboardingModal(false);

      _this.props.router.push("/".concat(_this.props.collective.slug));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "validateFormik", function (values) {
      var _values$socialLinks, _values$socialLinks$f;

      var errors = {};
      var isValidSocialLinks = ((_values$socialLinks = values.socialLinks) === null || _values$socialLinks === void 0 ? void 0 : (_values$socialLinks$f = _values$socialLinks.filter(function (l) {
        return !(0,utils/* isValidUrl */.jv)(l.url);
      })) === null || _values$socialLinks$f === void 0 ? void 0 : _values$socialLinks$f.length) === 0;

      if (!isValidSocialLinks) {
        errors.socialLinks = _this.props.intl.formatMessage(_this.messages.websiteError);
      }

      return errors;
    });

    _this.state = {
      step: 0,
      members: [],
      error: null,
      noOverlay: false
    };
    _this.messages = (0,react_intl_lib.defineMessages)({
      websiteError: {
        id: "onboarding.error.website",
        defaultMessage: [{
          "type": 0,
          "value": "Please enter a valid URL."
        }]
      }
    });
    return _this;
  }

  createClass_default()(OnboardingModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setStep(this.props.step);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      if (oldProps.step !== this.props.step) {
        this.setStep(this.props.step);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _collective$socialLin;

      var _this$props = this.props,
          collective = _this$props.collective,
          LoggedInUser = _this$props.LoggedInUser,
          showOnboardingModal = _this$props.showOnboardingModal,
          mode = _this$props.mode,
          data = _this$props.data;
      var _this$state = this.state,
          step = _this$state.step,
          isSubmitting = _this$state.isSubmitting,
          error = _this$state.error,
          noOverlay = _this$state.noOverlay;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [step === 3 ? /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
          children: showOnboardingModal && /*#__PURE__*/(0,jsx_runtime.jsxs)(ModalWithImage, {
            usePortal: false,
            width: "576px",
            minHeight: "456px",
            onClose: this.onClose,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalBody */.fe, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
                flexDirection: "column",
                alignItems: "center",
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                    maxWidth: "336px",
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H1, {
                      fontSize: "40px",
                      lineHeight: "44px",
                      fontWeight: "bold",
                      color: "black.900",
                      textAlign: "center",
                      mt: 6,
                      mb: 4,
                      mx: 2,
                      "data-cy": "welcome-collective",
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                        id: "onboarding.success.header",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Welcome to your new Collective!"
                        }]
                      })
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                    maxWidth: "450px",
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "black.900",
                      textAlign: "center",
                      mb: 4,
                      mx: 2,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                        id: "onboarding.success.text",
                        defaultMessage: [{
                          "type": 0,
                          "value": "You're all set! Customize the look, start accepting contributions, and interact with your community."
                        }]
                      })
                    })
                  })]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(ResponsiveModalFooter, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
                flexDirection: "column",
                alignItems: "center",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
                  buttonStyle: "primary",
                  onClick: this.onClose,
                  "data-cy": "close-button",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "Close",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Close"
                    }]
                  })
                })
              })
            })]
          })
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
          children: showOnboardingModal && /*#__PURE__*/(0,jsx_runtime.jsxs)(ResponsiveModal, {
            usePortal: false,
            width: "576px",
            minHeight: "456px",
            onClose: this.onClose,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ResponsiveModalHeader, {
              onClose: this.onClose,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(StepsProgressBox, {
                  ml: [0, '15px'],
                  mb: [3, null, 4],
                  width: [1.0, 0.8],
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(onboarding_modal_OnboardingStepsProgress, {
                    step: step,
                    mode: mode,
                    handleStep: function handleStep(step) {
                      return _this2.setState({
                        step: step
                      });
                    },
                    slug: collective.slug
                  })
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Formik */.J9, {
              validate: this.validateFormik,
              validateOnBlur: true,
              initialValues: {
                socialLinks: ((_collective$socialLin = collective.socialLinks) === null || _collective$socialLin === void 0 ? void 0 : _collective$socialLin.length) !== 0 ? map_default()(collective.socialLinks, function (sl) {
                  return omit_default()(sl, '__typename');
                }) : [{
                  type: v2_graphql/* SocialLinkType.WEBSITE */.Xu.WEBSITE,
                  url: ''
                }]
              },
              onSubmit: function onSubmit(values) {
                _this2.submitCollectiveInfo(values);
              },
              children: function children(_ref4) {
                var values = _ref4.values,
                    handleSubmit = _ref4.handleSubmit,
                    errors = _ref4.errors,
                    touched = _ref4.touched,
                    setFieldValue = _ref4.setFieldValue,
                    setFieldTouched = _ref4.setFieldTouched;
                return /*#__PURE__*/(0,jsx_runtime.jsxs)(FormWithStyles, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ResponsiveModalBody, {
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                      flexDirection: "column",
                      alignItems: "center",
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Image/* default */.Z, {
                        alt: "OnBoarding",
                        width: 160,
                        height: _this2.getStepParams(step, 'height'),
                        src: _this2.getStepParams(step, 'src')
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(onboarding_modal_OnboardingContentBox, {
                        slug: collective.slug,
                        step: step,
                        collective: collective,
                        LoggedInUser: LoggedInUser,
                        updateAdmins: _this2.updateAdmins,
                        values: values,
                        errors: errors,
                        touched: touched,
                        setFieldValue: setFieldValue,
                        setFieldTouched: setFieldTouched,
                        memberInvitations: (data === null || data === void 0 ? void 0 : data.memberInvitations) || []
                      }), error && /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
                        type: "error",
                        withIcon: true,
                        mt: 2,
                        children: error.message
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(ResponsiveModalFooter, {
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
                      flexDirection: "column",
                      alignItems: "center",
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(onboarding_modal_OnboardingNavButtons, {
                        step: step,
                        mode: mode,
                        slug: collective.slug,
                        loading: isSubmitting,
                        handleSubmit: handleSubmit
                      })
                    })
                  })]
                });
              }
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(ResponsiveModalOverlay, {
          onClick: this.onClose,
          noOverlay: noOverlay
        })]
      });
    }
  }]);

  return OnboardingModal;
}(react.Component); // GraphQL for editing Collective admins info


var editCollectiveMembersMutation = (0,helpers/* gqlV1 */.N)
/* GraphQL */
(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  mutation EditCollectiveMembers($collectiveId: Int!, $members: [MemberInputType!]!) {\n    editCoreContributors(collectiveId: $collectiveId, members: $members) {\n      id\n      members(roles: [\"ADMIN\"]) {\n        id\n        role\n        member {\n          id\n          name\n        }\n      }\n    }\n  }\n"])));
var addEditCollectiveMembersMutation = (0,graphql/* graphql */.B)(editCollectiveMembersMutation, {
  name: 'editCollectiveMembers'
}); // GraphQL for editing Collective contact info

var editCollectiveContactMutation = (0,helpers/* gqlV1 */.N)
/* GraphQL */
(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n  mutation EditCollectiveContact($collective: CollectiveInputType!) {\n    editCollective(collective: $collective) {\n      id\n      socialLinks {\n        type\n        url\n      }\n    }\n  }\n"])));
var addEditCollectiveContactMutation = (0,graphql/* graphql */.B)(editCollectiveContactMutation, {
  name: 'editCollectiveContact'
});
var addMemberInvitationQuery = (0,graphql/* graphql */.B)((0,lib/* default */.ZP)(_templateObject3 || (_templateObject3 = taggedTemplateLiteral_default()(["\n    query MemberInvitationsQuery($slug: String!) {\n      memberInvitations(account: { slug: $slug }, role: [ADMIN]) {\n        id\n        role\n        memberAccount {\n          id\n          name\n          imageUrl\n          slug\n        }\n      }\n    }\n  "]))), {
  options: function options(props) {
    return {
      variables: {
        slug: props.collective.slug
      },
      context: helpers/* API_V2_CONTEXT */.T
    };
  }
});
var addGraphql = (0,utils/* compose */.qC)(addEditCollectiveMembersMutation, addEditCollectiveContactMutation, addMemberInvitationQuery);
OnboardingModal.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "setStep",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "queryStep",
      "type": null
    }],
    "returns": null
  }, {
    "name": "updateAdmins",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "members",
      "type": null
    }],
    "returns": null
  }, {
    "name": "submitAdmins",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }, {
    "name": "submitContact",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "values",
      "type": null
    }],
    "returns": null
  }, {
    "name": "submitCollectiveInfo",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "values",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getStepParams",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "step",
      "type": null
    }, {
      "name": "param",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onClose",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "validateFormik",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "values",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "OnboardingModal",
  "props": {
    "step": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "mode": {
      "description": "",
      "type": {
        "name": "string"
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
    "LoggedInUser": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "editCollectiveMembers": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "editCollectiveContact": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "showOnboardingModal": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "setShowOnboardingModal": {
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
/* harmony default export */ var onboarding_modal_OnboardingModal = ((0,injectIntl/* default */.ZP)(addGraphql((0,router.withRouter)(OnboardingModal))));

/***/ }),

/***/ 19196:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": function() { return /* binding */ confettiFireworks; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22439);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


/**
 * Produce an animated fireworks with confettis popping all over the screen that slowly
 * fade out. For big celebrations, like a successful order or a collective freshly created.
 * Can only be used client-side.
 *
 * @param {number} durationInMilliseconds: duration for the full animation
 * @param {object} libConfettiParams: passed down to `canvas-confetti`
 */

var confettiFireworks = function confettiFireworks() {
  var durationInMilliseconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10000;
  var libConfettiParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var animationEnd = Date.now() + durationInMilliseconds;

  var randomInRange = function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  };

  var confettisParams = _objectSpread({
    disableForReducedMotion: true,
    // see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0
  }, libConfettiParams);

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    } else {
      var particleCount = 50 * (timeLeft / durationInMilliseconds);
      (0,canvas_confetti__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(_objectSpread(_objectSpread({}, confettisParams), {}, {
        particleCount: particleCount,
        origin: {
          x: randomInRange(0, 0.3),
          y: Math.random() - 0.2
        }
      }));
      (0,canvas_confetti__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(_objectSpread(_objectSpread({}, confettisParams), {}, {
        particleCount: particleCount,
        origin: {
          x: randomInRange(0.7, 1),
          y: Math.random() - 0.2
        }
      }));
    }
  }, 250);
};

/***/ })

}]);
//# sourceMappingURL=730-c9509134be6985a1.js.map