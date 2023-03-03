"use strict";
exports.id = 5489;
exports.ids = [5489];
exports.modules = {

/***/ 4496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SocialLinksFormField)
/* harmony export */ });
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23672);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13831);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99565);
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92813);
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_fa_solid_Plus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77192);
/* harmony import */ var _styled_icons_fa_solid_Plus__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Plus__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97881);
/* harmony import */ var _styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_icons_material_DragIndicator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68765);
/* harmony import */ var _styled_icons_material_DragIndicator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_DragIndicator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97965);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(97079);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87268);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97274);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(66943);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);

const _excluded = ["value", "onChange"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function SocialLinksFormField({
  value = [],
  touched,
  onChange
}) {
  const [items, setItems] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(value.map(({
    url,
    type
  }, i) => ({
    url,
    type,
    sortId: i.toString()
  })));
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    onChange(items.map(({
      url,
      type
    }) => ({
      url,
      type
    })));
  }, [items]);
  const onItemChange = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback((socialLink, sortId) => {
    const newItems = items.map(item => {
      if (item.sortId === sortId) {
        return _objectSpread(_objectSpread({}, item), socialLink);
      }

      return item;
    });
    setItems(newItems);
  }, [items, onChange]);
  const onRemoveItem = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(sortId => {
    const newItems = items.filter(item => item.sortId !== sortId);
    setItems(newItems);
  }, [items, onChange]);
  const addItem = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(() => {
    const newItems = [...items, {
      url: '',
      type: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.WEBSITE */ .Xu.WEBSITE
    }].map((item, i) => _objectSpread(_objectSpread({}, item), {}, {
      sortId: i.toString()
    }));
    setItems(newItems);
  }, [items, onChange]);

  function handleDragEnd(event) {
    const {
      active,
      over
    } = event;

    if (active.id !== over.id) {
      const oldIndex = items.findIndex(item => item.sortId === active.id);
      const newIndex = items.findIndex(item => item.sortId === over.id);
      const newItems = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.arrayMove)(items, oldIndex, newIndex);
      setItems(newItems);
    }
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.DndContext, {
    collisionDetection: _dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.closestCenter,
    onDragEnd: handleDragEnd,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
      width: "100%",
      flexDirection: "column",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.SortableContext, {
        items: items.map(item => item.sortId),
        strategy: _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.verticalListSortingStrategy,
        children: [items.map(socialLink => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(SocialLinkItem, {
            error: touched && !(0,_lib_utils__WEBPACK_IMPORTED_MODULE_10__/* .isValidUrl */ .jv)(socialLink.url),
            value: socialLink,
            onChange: onItemChange,
            onRemoveItem: onRemoveItem
          }, socialLink.sortId);
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
          mt: 2,
          justifyContent: "center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            disabled: value.length >= 10,
            type: "button",
            buttonSize: "tiny",
            buttonStyle: "standard",
            onClick: addItem,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_styled_icons_fa_solid_Plus__WEBPACK_IMPORTED_MODULE_5__.Plus, {
              size: "10px"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Text__WEBPACK_IMPORTED_MODULE_15__/* .Span */ .Dr, {
              ml: 2,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
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

function SocialLinkTypePicker(_ref) {
  let {
    value,
    onChange
  } = _ref,
      pickerProps = _objectWithoutProperties(_ref, _excluded);

  const options = [{
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
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, pickerProps), {}, {
    "data-cy": "social-link-type-picker",
    value: options.find(o => o.value === value?.toString()),
    defaultValue: options.find(o => o.value === _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .SocialLinkType.WEBSITE.toString */ .Xu.WEBSITE.toString()),
    onChange: ({
      value
    }) => onChange(value),
    options: lodash_sortBy__WEBPACK_IMPORTED_MODULE_0___default()(options, 'label')
  }));
}

function SocialLinkItem({
  value,
  error,
  onChange,
  onRemoveItem
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.useSortable)({
    id: value.sortId
  });
  const style = {
    transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_4__.CSS.Transform.toString(transform),
    transition
  };
  const onFieldChange = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback((field, fieldValue) => {
    onChange(_objectSpread(_objectSpread({}, value), {}, {
      [field]: fieldValue
    }), value.sortId);
  }, [onChange, value]);
  const onUrlChange = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(e => {
    const newUrl = e.target.value;
    onChange({
      type: typeFromUrl(newUrl) ?? value.type,
      url: newUrl
    }, value.sortId);
  }, [onChange, value]);
  const onUrlBlur = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(() => {
    const hasSchemaRegexp = /^[^:]+:\/\//;

    if (value.url.trim() === '') {
      return;
    }

    if (!value.url.match(hasSchemaRegexp)) {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        url: `https://${value.url}`
      }), value.sortId);
    }
  }, [onChange, value]);
  const onRemove = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(() => {
    onRemoveItem(value.sortId);
  }, [onRemoveItem, value.sortId]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
    ref: setNodeRef,
    style: style,
    alignItems: "center",
    my: 1,
    gap: "5px",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", _objectSpread(_objectSpread(_objectSpread({}, listeners), attributes), {}, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_styled_icons_material_DragIndicator__WEBPACK_IMPORTED_MODULE_7__.DragIndicator, {
        size: "15px",
        style: {
          cursor: 'grab'
        }
      })
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
      flexGrow: 1,
      flexWrap: "wrap",
      gap: "5px",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
        width: ['100%', '120px'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(SocialLinkTypePicker, {
          value: value.type,
          onChange: type => onFieldChange('type', type)
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
        autoFocus: value.url === '',
        error: error,
        flexGrow: 1,
        value: value.url,
        onBlur: onUrlBlur,
        onChange: onUrlChange,
        placeholder: "https://opencollective.com/"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      tabIndex: -1,
      padding: 0,
      width: "20px",
      height: "20px",
      type: "button",
      buttonStyle: "borderless",
      onClick: onRemove,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_6__.Times, {
        size: "10px"
      })
    })]
  });
}

const knownSocialLinkDomains = [{
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
  for (const knownDomain of knownSocialLinkDomains) {
    if (url.match(knownDomain.regexp)) {
      return knownDomain.type;
    }
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

/***/ 89686:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5993);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69078);
/* harmony import */ var _components_StyledHr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(173);
/* harmony import */ var _edit_collective_SocialLinksFormField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4496);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var _OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14574);
/* harmony import */ var _OnboardingSkipButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53939);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_2__, _OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_8__]);
([_components_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_2__, _OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














class OnboardingContentBox extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "removeAdmin", collective => {
      const filteredAdmins = this.state.admins.filter(admin => admin.member.id !== collective.id);
      this.setState({
        admins: filteredAdmins
      }, () => this.props.updateAdmins(this.state.admins));
    });

    this.state = {
      admins: []
    };
    this.messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
      placeholder: {
        id: "onboarding.contact.placeholder",
        defaultMessage: [{
          "type": 0,
          "value": "Who do you want to invite?"
        }]
      }
    });
  }

  componentDidMount() {
    this.setState({
      admins: []
    });
  }

  render() {
    const {
      slug,
      step,
      collective,
      updateAdmins,
      intl,
      values,
      touched
    } = this.props;
    const {
      admins
    } = this.state;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      display: "flex",
      flexDirection: "column",
      width: ['90%', '80%'],
      alignItems: "center",
      children: [step === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "336px",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_7__.H1, {
          fontSize: "20px",
          lineHeight: "24px",
          fontWeight: "bold",
          color: "black.900",
          textAlign: "center",
          mb: 4,
          mx: 2,
          "data-cy": "onboarding-collective-created",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
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
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          display: ['block', null, 'none'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_OnboardingSkipButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            slug: slug
          })
        })]
      }), step === 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
          maxWidth: 336,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.H1, {
            fontSize: "20px",
            lineHeight: "24px",
            fontWeight: "bold",
            color: "black.900",
            textAlign: "center",
            mb: 4,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "onboarding.admins.header",
              defaultMessage: [{
                "type": 0,
                "value": "Add administrators"
              }]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
          px: 3,
          width: "100%",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
            my: 2,
            fontSize: "12px",
            textTransform: "uppercase",
            color: "black.700",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "administrators",
              defaultMessage: [{
                "type": 0,
                "value": "Administrators"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
            flexGrow: 1,
            alignItems: "center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_StyledHr__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
              width: "100%",
              ml: 2
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
          px: 3,
          width: "100%",
          flexWrap: "wrap",
          "data-cy": "profile-card",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            collective: this.props.LoggedInUser.collective
          }, this.props.LoggedInUser.collective.id), this.props.memberInvitations.map(admin => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            collective: admin.memberAccount,
            isPending: true
          }, admin.memberAccount.id)), admins.map(admin => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            collective: admin.member,
            removeAdmin: this.removeAdmin
          }, admin.member.id))]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
          px: 3,
          width: "100%",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
            my: 2,
            fontSize: "12px",
            textTransform: "uppercase",
            color: "black.700",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "onboarding.admins.invite",
              defaultMessage: [{
                "type": 0,
                "value": "Invite administrators"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
            flexGrow: 1,
            alignItems: "center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_StyledHr__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
              width: "100%",
              ml: 2
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
          my: 2,
          px: 3,
          flexDirection: "column",
          width: "100%",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            inputId: "onboarding-admin-picker",
            creatable: true,
            collective: null,
            types: ['USER'],
            "data-cy": "admin-picker",
            onChange: option => {
              // only assign admins if they are not in the list already
              const duplicates = admins.filter(admin => admin.member.id === option.value.id);
              this.setState(state => ({
                admins: duplicates.length ? admins : [...state.admins, {
                  role: 'ADMIN',
                  member: option.value
                }]
              }), () => updateAdmins(this.state.admins));
            },
            placeholder: intl.formatMessage(this.messages['placeholder'])
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
          my: 2,
          fontSize: "12px",
          color: "black.500",
          textAlign: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "onboarding.admins.caption",
            defaultMessage: [{
              "type": 0,
              "value": "Admins can modify settings and approve expenses."
            }]
          })
        })]
      }), step === 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          maxWidth: "336px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.H1, {
            fontSize: "20px",
            lineHeight: "24px",
            fontWeight: "bold",
            color: "black.900",
            textAlign: "center",
            mb: 4,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "onboarding.contact.header",
              defaultMessage: [{
                "type": 0,
                "value": "Links and contact info"
              }]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_edit_collective_SocialLinksFormField__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          value: values.socialLinks,
          touched: touched.socialLinks,
          onChange: s => {
            this.props.setFieldValue('socialLinks', s);
            this.props.setFieldTouched('socialLinks');
          }
        })]
      })]
    });
  }

}

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_1__.injectIntl)(OnboardingContentBox));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58021:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEditCollectiveMembersMutation": () => (/* binding */ addEditCollectiveMembersMutation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63901);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53707);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_confettis__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19196);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(32651);
/* harmony import */ var _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97965);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97079);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(69078);
/* harmony import */ var _components_MessageBox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(37278);
/* harmony import */ var _components_StyledButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(87268);
/* harmony import */ var _components_StyledModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(71792);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(90998);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(16159);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(56562);
/* harmony import */ var _OnboardingContentBox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(89686);
/* harmony import */ var _OnboardingNavButtons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(57381);
/* harmony import */ var _OnboardingStepsProgress__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(64203);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_OnboardingContentBox__WEBPACK_IMPORTED_MODULE_21__]);
_OnboardingContentBox__WEBPACK_IMPORTED_MODULE_21__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

























const StepsProgressBox = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Box */ .xu).withConfig({
  displayName: "OnboardingModal__StepsProgressBox",
  componentId: "sc-1t1aacg-0"
})(["min-height:95px;max-width:600px;@media screen and (max-width:640px){width:100%;max-width:100%;}"]);
const ResponsiveModal = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_components_StyledModal__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP).withConfig({
  displayName: "OnboardingModal__ResponsiveModal",
  componentId: "sc-1t1aacg-1"
})(["@media screen and (max-width:40em){transform:translate(0%,0%);position:fixed;top:69px;left:0px;height:calc(100vh - 70px);background:white;max-width:100%;border:none;border-radius:0;padding:0px;display:flex;flex-direction:column;justify-content:space-between;}"]);
const ResponsiveModalHeader = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_components_StyledModal__WEBPACK_IMPORTED_MODULE_17__/* .ModalHeader */ .xB).withConfig({
  displayName: "OnboardingModal__ResponsiveModalHeader",
  componentId: "sc-1t1aacg-2"
})(["@media screen and (max-width:40em){padding:0px;svg{display:none;}}", "{margin-top:-100px;}"], _components_StyledModal__WEBPACK_IMPORTED_MODULE_17__/* .CloseIcon */ .Tw);
const ResponsiveModalBody = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_components_StyledModal__WEBPACK_IMPORTED_MODULE_17__/* .ModalBody */ .fe).withConfig({
  displayName: "OnboardingModal__ResponsiveModalBody",
  componentId: "sc-1t1aacg-3"
})(["@media screen and (max-width:40em){flex-grow:1;}"]);
const ResponsiveModalFooter = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_components_StyledModal__WEBPACK_IMPORTED_MODULE_17__/* .ModalFooter */ .mz).withConfig({
  displayName: "OnboardingModal__ResponsiveModalFooter",
  componentId: "sc-1t1aacg-4"
})(["@media screen and (max-width:40em){padding-bottom:20px;}"]);
const ResponsiveModalOverlay = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_components_StyledModal__WEBPACK_IMPORTED_MODULE_17__/* .ModalOverlay */ .ZA).withConfig({
  displayName: "OnboardingModal__ResponsiveModalOverlay",
  componentId: "sc-1t1aacg-5"
})(["", " @media screen and (max-width:40em){display:none;}"], overlay => overlay.noOverlay && (0,styled_components__WEBPACK_IMPORTED_MODULE_8__.css)(["display:none;"]));
const ModalWithImage = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(ResponsiveModal).withConfig({
  displayName: "OnboardingModal__ModalWithImage",
  componentId: "sc-1t1aacg-6"
})(["@media screen and (min-width:40em){background:white url('/static/images/create-collective/onboardingSuccessIllustration.png');background-repeat:no-repeat;background-size:100%;}"]);
const FormWithStyles = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(formik__WEBPACK_IMPORTED_MODULE_5__.Form).withConfig({
  displayName: "OnboardingModal__FormWithStyles",
  componentId: "sc-1t1aacg-7"
})(["flex-grow:1;display:flex;flex-direction:column;justify-content:space-between;"]);
const params = {
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

class OnboardingModal extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "setStep", queryStep => {
      if (queryStep === undefined) {
        this.setState({
          step: 0
        });
      } else if (queryStep === 'administrators') {
        this.setState({
          step: 1
        });
      } else if (queryStep === 'contact-info') {
        this.setState({
          step: 2
        });
      } else if (queryStep === 'success') {
        this.setState({
          step: 3
        });
      }
    });

    _defineProperty(this, "updateAdmins", members => {
      this.setState({
        members
      });
    });

    _defineProperty(this, "submitAdmins", async () => {
      try {
        this.setState({
          isSubmitting: true
        });
        await this.props.editCollectiveMembers({
          variables: {
            collectiveId: this.props.collective.id,
            members: this.state.members.map(member => ({
              id: member.id,
              role: member.role,
              member: {
                id: member.member.id,
                name: member.member.name
              }
            }))
          }
        });
      } catch (e) {
        const errorMsg = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_10__/* .getErrorFromGraphqlException */ .H1)(e).message;
        throw new Error(errorMsg);
      }
    });

    _defineProperty(this, "submitContact", async values => {
      const collective = _objectSpread(_objectSpread({}, values), {}, {
        id: this.props.collective.id
      });

      try {
        this.setState({
          isSubmitting: true
        });
        await this.props.editCollectiveContact({
          variables: {
            collective
          }
        });
      } catch (e) {
        const errorMsg = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_10__/* .getErrorFromGraphqlException */ .H1)(e).message;
        throw new Error(errorMsg);
      }
    });

    _defineProperty(this, "submitCollectiveInfo", async values => {
      try {
        await this.submitContact(values);
        await this.submitAdmins();
        this.props.router.push(`/${this.props.collective.slug}/${this.props.mode}/success`).then(() => {
          (0,_lib_confettis__WEBPACK_IMPORTED_MODULE_9__/* .confettiFireworks */ .K)(5000, {
            zIndex: 3000
          });
        });
      } catch (e) {
        this.setState({
          isSubmitting: false,
          error: e
        });
      }
    });

    _defineProperty(this, "getStepParams", (step, param) => {
      return params[step][param];
    });

    _defineProperty(this, "onClose", () => {
      this.setState({
        noOverlay: true
      });
      this.props.setShowOnboardingModal(false);
      this.props.router.push(`/${this.props.collective.slug}`);
    });

    _defineProperty(this, "validateFormik", values => {
      const errors = {};
      const isValidSocialLinks = values.socialLinks?.filter(l => !(0,_lib_utils__WEBPACK_IMPORTED_MODULE_13__/* .isValidUrl */ .jv)(l.url))?.length === 0;

      if (!isValidSocialLinks) {
        errors.socialLinks = this.props.intl.formatMessage(this.messages.websiteError);
      }

      return errors;
    });

    this.state = {
      step: 0,
      members: [],
      error: null,
      noOverlay: false
    };
    this.messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.defineMessages)({
      websiteError: {
        id: "onboarding.error.website",
        defaultMessage: [{
          "type": 0,
          "value": "Please enter a valid URL."
        }]
      }
    });
  }

  componentDidMount() {
    this.setStep(this.props.step);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.step !== this.props.step) {
      this.setStep(this.props.step);
    }
  }

  render() {
    const {
      collective,
      LoggedInUser,
      showOnboardingModal,
      mode,
      data
    } = this.props;
    const {
      step,
      isSubmitting,
      error,
      noOverlay
    } = this.state;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
      children: [step === 3 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: showOnboardingModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(ModalWithImage, {
          usePortal: false,
          width: "576px",
          minHeight: "456px",
          onClose: this.onClose,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_components_StyledModal__WEBPACK_IMPORTED_MODULE_17__/* .ModalBody */ .fe, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
              flexDirection: "column",
              alignItems: "center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Box */ .xu, {
                  maxWidth: "336px",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_18__.H1, {
                    fontSize: "40px",
                    lineHeight: "44px",
                    fontWeight: "bold",
                    color: "black.900",
                    textAlign: "center",
                    mt: 6,
                    mb: 4,
                    mx: 2,
                    "data-cy": "welcome-collective",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                      id: "onboarding.success.header",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Welcome to your new Collective!"
                      }]
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Box */ .xu, {
                  maxWidth: "450px",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_18__.P, {
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "black.900",
                    textAlign: "center",
                    mb: 4,
                    mx: 2,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
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
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(ResponsiveModalFooter, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
              flexDirection: "column",
              alignItems: "center",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                buttonStyle: "primary",
                onClick: this.onClose,
                "data-cy": "close-button",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
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
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: showOnboardingModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(ResponsiveModal, {
          usePortal: false,
          width: "576px",
          minHeight: "456px",
          onClose: this.onClose,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(ResponsiveModalHeader, {
            onClose: this.onClose,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(StepsProgressBox, {
                ml: [0, '15px'],
                mb: [3, null, 4],
                width: [1.0, 0.8],
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_OnboardingStepsProgress__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                  step: step,
                  mode: mode,
                  handleStep: step => this.setState({
                    step
                  }),
                  slug: collective.slug
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(formik__WEBPACK_IMPORTED_MODULE_5__.Formik, {
            validate: this.validateFormik,
            validateOnBlur: true,
            initialValues: {
              socialLinks: collective.socialLinks?.length !== 0 ? lodash_map__WEBPACK_IMPORTED_MODULE_1___default()(collective.socialLinks, sl => lodash_omit__WEBPACK_IMPORTED_MODULE_0___default()(sl, '__typename')) : [{
                type: _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_12__/* .SocialLinkType.WEBSITE */ .Xu.WEBSITE,
                url: ''
              }]
            },
            onSubmit: values => {
              this.submitCollectiveInfo(values);
            },
            children: ({
              values,
              handleSubmit,
              errors,
              touched,
              setFieldValue,
              setFieldTouched
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(FormWithStyles, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(ResponsiveModalBody, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
                  flexDirection: "column",
                  alignItems: "center",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Image__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                    alt: "OnBoarding",
                    width: 160,
                    height: this.getStepParams(step, 'height'),
                    src: this.getStepParams(step, 'src')
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_OnboardingContentBox__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                    slug: collective.slug,
                    step: step,
                    collective: collective,
                    LoggedInUser: LoggedInUser,
                    updateAdmins: this.updateAdmins,
                    values: values,
                    errors: errors,
                    touched: touched,
                    setFieldValue: setFieldValue,
                    setFieldTouched: setFieldTouched,
                    memberInvitations: data?.memberInvitations || []
                  }), error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_components_MessageBox__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    type: "error",
                    withIcon: true,
                    mt: 2,
                    children: error.message
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(ResponsiveModalFooter, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
                  flexDirection: "column",
                  alignItems: "center",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_OnboardingNavButtons__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                    step: step,
                    mode: mode,
                    slug: collective.slug,
                    loading: isSubmitting,
                    handleSubmit: handleSubmit
                  })
                })
              })]
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(ResponsiveModalOverlay, {
        onClick: this.onClose,
        noOverlay: noOverlay
      })]
    });
  }

} // GraphQL for editing Collective admins info


const editCollectiveMembersMutation = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_11__/* .gqlV1 */ .N
/* GraphQL */
`
  mutation EditCollectiveMembers($collectiveId: Int!, $members: [MemberInputType!]!) {
    editCoreContributors(collectiveId: $collectiveId, members: $members) {
      id
      members(roles: ["ADMIN"]) {
        id
        role
        member {
          id
          name
        }
      }
    }
  }
`;
const addEditCollectiveMembersMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__.graphql)(editCollectiveMembersMutation, {
  name: 'editCollectiveMembers'
}); // GraphQL for editing Collective contact info

const editCollectiveContactMutation = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_11__/* .gqlV1 */ .N
/* GraphQL */
`
  mutation EditCollectiveContact($collective: CollectiveInputType!) {
    editCollective(collective: $collective) {
      id
      socialLinks {
        type
        url
      }
    }
  }
`;
const addEditCollectiveContactMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__.graphql)(editCollectiveContactMutation, {
  name: 'editCollectiveContact'
});
const addMemberInvitationQuery = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__.graphql)(_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
    query MemberInvitationsQuery($slug: String!) {
      memberInvitations(account: { slug: $slug }, role: [ADMIN]) {
        id
        role
        memberAccount {
          id
          name
          imageUrl
          slug
        }
      }
    }
  `, {
  options: props => ({
    variables: {
      slug: props.collective.slug
    },
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_11__/* .API_V2_CONTEXT */ .T
  })
});
const addGraphql = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_13__/* .compose */ .qC)(addEditCollectiveMembersMutation, addEditCollectiveContactMutation, addMemberInvitationQuery);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_7__.injectIntl)(addGraphql((0,next_router__WEBPACK_IMPORTED_MODULE_6__.withRouter)(OnboardingModal))));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_withViewport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74387);
/* harmony import */ var _components_StyledButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87268);
/* harmony import */ var _components_StyledRoundButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90012);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const params = {
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

class OnboardingNavButtons extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "getStepParams", (step, param) => {
      return params[step][param];
    });
  }

  render() {
    const {
      step,
      mode,
      slug,
      loading,
      viewport,
      handleSubmit
    } = this.props;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      children: step === 2 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [viewport === _lib_withViewport__WEBPACK_IMPORTED_MODULE_3__/* .VIEWPORTS.XSMALL */ .Pm.XSMALL ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          type: "button",
          "data-cy": "step-back-button",
          mx: 1,
          buttonStyle: "primary",
          disabled: this.getStepParams(step, 'disabled'),
          onClick: () => {
            this.props.router.push(`/${slug}/${mode}/${this.getStepParams(step, 'routerStepBack')}`);
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "contribute.prevStep",
            defaultMessage: [{
              "type": 0,
              "value": "Previous step"
            }]
          })
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_StyledRoundButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          type: "button",
          "data-cy": "step-back-button",
          mx: 1,
          size: 48,
          disabled: this.getStepParams(step, 'disabled'),
          onClick: () => {
            this.props.router.push(`/${slug}/${mode}/${this.getStepParams(step, 'routerStepBack')}`);
          },
          children: "\u2190"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          buttonStyle: "primary",
          onClick: () => handleSubmit,
          loading: loading,
          "data-cy": "finish-button",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "Finish",
            defaultMessage: [{
              "type": 0,
              "value": "Finish"
            }]
          })
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [viewport === _lib_withViewport__WEBPACK_IMPORTED_MODULE_3__/* .VIEWPORTS.XSMALL */ .Pm.XSMALL ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          type: "button",
          "data-cy": "step-back-button",
          mx: 1,
          buttonStyle: "primary",
          disabled: this.getStepParams(step, 'disabled'),
          onClick: () => {
            this.props.router.push(`/${slug}/${mode}/${this.getStepParams(step, 'routerStepBack')}`);
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "contribute.prevStep",
            defaultMessage: [{
              "type": 0,
              "value": "Previous step"
            }]
          })
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_StyledRoundButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          type: "button",
          "data-cy": "step-back-button",
          mx: 1,
          size: 48,
          disabled: this.getStepParams(step, 'disabled'),
          onClick: () => {
            this.props.router.push(`/${slug}/${mode}/${this.getStepParams(step, 'routerStepBack')}`);
          },
          children: "\u2190"
        }), viewport === _lib_withViewport__WEBPACK_IMPORTED_MODULE_3__/* .VIEWPORTS.XSMALL */ .Pm.XSMALL ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          type: "button",
          "data-cy": "step-forward-button",
          mx: 1,
          buttonStyle: "primary",
          onClick: () => {
            this.props.router.push(`/${slug}/${mode}/${this.getStepParams(step, 'routerStepForward')}`);
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "contribute.nextStep",
            defaultMessage: [{
              "type": 0,
              "value": "Next step"
            }]
          })
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_StyledRoundButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          type: "button",
          "data-cy": "step-forward-button",
          mx: 1,
          size: 48,
          onClick: () => {
            this.props.router.push(`/${slug}/${mode}/${this.getStepParams(step, 'routerStepForward')}`);
          },
          children: "\u2192"
        })]
      })
    });
  }

}

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_withViewport__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)((0,next_router__WEBPACK_IMPORTED_MODULE_1__.withRouter)(OnboardingNavButtons)));

/***/ }),

/***/ 53939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_StyledButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87268);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






class OnboardingSkipButton extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    const {
      slug
    } = this.props;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      type: "button",
      width: "fit-content",
      buttonStyle: "primary",
      onClick: () => {
        this.props.router.push(`/${slug}`);
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "SkipOnboarding",
        defaultMessage: [{
          "type": 0,
          "value": "Skip onboarding"
        }]
      })
    });
  }

}

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_1__.withRouter)(OnboardingSkipButton));

/***/ }),

/***/ 64203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _StepsProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65598);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








const StepLabel = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Text__WEBPACK_IMPORTED_MODULE_6__/* .Span */ .Dr).withConfig({
  displayName: "OnboardingStepsProgress__StepLabel",
  componentId: "sc-q67br1-0"
})(["text-transform:uppercase;text-align:center;"]);
StepLabel.defaultProps = {
  color: 'black.400',
  fontSize: '10px',
  mt: 1
};
const steps = [{
  name: 'Welcome'
}, {
  name: 'Administrators'
}, {
  name: 'Contact'
}];
const params = {
  0: undefined,
  1: 'administrators',
  2: 'contact-info'
};

class OnboardingStepsProgress extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    const {
      slug,
      mode
    } = this.props;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_StepsProgress__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        steps: steps,
        focus: steps[this.props.step],
        onStepSelect: step => {
          const newStep = steps.findIndex(element => element.name === step.name);
          this.props.router.push(`/${slug}/${mode}/${params[newStep] || ''}`);
        },
        children: ({
          step
        }) => {
          let label = null;

          if (step.name === 'Welcome') {
            label = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "welcome",
              defaultMessage: [{
                "type": 0,
                "value": "Welcome"
              }]
            });
          }

          if (step.name === 'Administrators') {
            label = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "administrators",
              defaultMessage: [{
                "type": 0,
                "value": "Administrators"
              }]
            });
          }

          if (step.name === 'Contact') {
            label = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "Contact",
              defaultMessage: [{
                "type": 0,
                "value": "Contact"
              }]
            });
          }

          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
            flexDirection: "column",
            alignItems: "center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(StepLabel, {
              children: label
            })
          });
        }
      })
    });
  }

}

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_1__.withRouter)(OnboardingStepsProgress));

/***/ }),

/***/ 19196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ confettiFireworks)
/* harmony export */ });
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45245);
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(canvas_confetti__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * Produce an animated fireworks with confettis popping all over the screen that slowly
 * fade out. For big celebrations, like a successful order or a collective freshly created.
 * Can only be used client-side.
 *
 * @param {number} durationInMilliseconds: duration for the full animation
 * @param {object} libConfettiParams: passed down to `canvas-confetti`
 */

const confettiFireworks = (durationInMilliseconds = 10000, libConfettiParams = {}) => {
  const animationEnd = Date.now() + durationInMilliseconds;

  const randomInRange = (min, max) => Math.random() * (max - min) + min;

  const confettisParams = _objectSpread({
    disableForReducedMotion: true,
    // see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0
  }, libConfettiParams);

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    } else {
      const particleCount = 50 * (timeLeft / durationInMilliseconds);
      canvas_confetti__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread(_objectSpread({}, confettisParams), {}, {
        particleCount,
        origin: {
          x: randomInRange(0, 0.3),
          y: Math.random() - 0.2
        }
      }));
      canvas_confetti__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread(_objectSpread({}, confettisParams), {}, {
        particleCount,
        origin: {
          x: randomInRange(0.7, 1),
          y: Math.random() - 0.2
        }
      }));
    }
  }, 250);
};

/***/ })

};
;