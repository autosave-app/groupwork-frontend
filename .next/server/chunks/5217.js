"use strict";
exports.id = 5217;
exports.ids = [5217];
exports.modules = {

/***/ 5217:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_feather_Clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94997);
/* harmony import */ var _styled_icons_feather_Clock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Clock__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_feather_MapPin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4840);
/* harmony import */ var _styled_icons_feather_MapPin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_MapPin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82114);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _DefinedTerm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78317);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92129);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97619);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51082);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(88609);
/* harmony import */ var _TruncatedTextWithTooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(92582);
/* harmony import */ var _HeroNote__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(43423);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DefinedTerm__WEBPACK_IMPORTED_MODULE_6__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_11__, _TruncatedTextWithTooltip__WEBPACK_IMPORTED_MODULE_12__]);
([_DefinedTerm__WEBPACK_IMPORTED_MODULE_6__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_11__, _TruncatedTextWithTooltip__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const FormattedDateProps = (value, timeZone) => ({
  value,
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone
});

const FormattedTimeProps = (value, timeZone) => ({
  value,
  timeZone
});

const Timerange = ({
  startsAt,
  endsAt,
  timezone,
  isSameDay
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedDate, _objectSpread({}, FormattedDateProps(startsAt, timezone))), ", ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedTime, _objectSpread({}, FormattedTimeProps(startsAt, timezone))), ' ', endsAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: ["-", ' ', !isSameDay && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedDate, _objectSpread({}, FormattedDateProps(endsAt, timezone))), ",", ' ']
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedTime, _objectSpread({}, FormattedTimeProps(endsAt, timezone))), ' ']
    }), "(UTC", (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)().tz(timezone).format('Z'), ")"]
  });
};

class HeroEventDetails extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  isNotLocalTimeZone() {
    if (this.props.collective.timezone) {
      const eventTimezone = (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)().tz(this.props.collective.timezone).format('Z');
      const browserTimezone = (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)().tz(_lib_dayjs__WEBPACK_IMPORTED_MODULE_4__/* ["default"].tz.guess */ .Z.tz.guess()).format('Z');
      return eventTimezone !== browserTimezone;
    }
  }

  isSameDay(startsAt, endsAt, timezone) {
    if (!endsAt) {
      return true;
    }

    const tzStartsAt = _lib_dayjs__WEBPACK_IMPORTED_MODULE_4__/* ["default"].tz */ .Z.tz(new Date(startsAt), timezone);
    const tzEndsAt = _lib_dayjs__WEBPACK_IMPORTED_MODULE_4__/* ["default"].tz */ .Z.tz(new Date(endsAt), timezone);
    return tzStartsAt.isSame(tzEndsAt, 'day');
  }

  render() {
    const {
      collective,
      host,
      displayedConnectedAccount
    } = this.props;
    const {
      startsAt,
      endsAt,
      timezone,
      location,
      parentCollective
    } = collective;
    const parentIsHost = host && collective.parentCollective?.id === host.id;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [startsAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_HeroNote__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_styled_icons_feather_Clock__WEBPACK_IMPORTED_MODULE_1__.Clock, {
          size: 16
        }), this.isNotLocalTimeZone() ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            place: "bottom",
            content: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(Timerange, {
                startsAt: startsAt,
                endsAt: endsAt,
                timezone: _lib_dayjs__WEBPACK_IMPORTED_MODULE_4__/* ["default"].tz.guess */ .Z.tz.guess(),
                isSameDay: this.isSameDay(startsAt, endsAt, _lib_dayjs__WEBPACK_IMPORTED_MODULE_4__/* ["default"].tz.guess */ .Z.tz.guess())
              }), ' ', "(", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "EventCover.LocalTime",
                defaultMessage: [{
                  "type": 0,
                  "value": "Your Time"
                }]
              }), ")"]
            }),
            children: props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", _objectSpread(_objectSpread({}, props), {}, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(Timerange, {
                startsAt: startsAt,
                endsAt: endsAt,
                timezone: timezone,
                isSameDay: this.isSameDay(startsAt, endsAt, timezone)
              })
            }))
          })
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(Timerange, {
          startsAt: startsAt,
          endsAt: endsAt,
          timezone: timezone,
          isSameDay: this.isSameDay(startsAt, endsAt, timezone)
        })]
      }), location.name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_HeroNote__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_styled_icons_feather_MapPin__WEBPACK_IMPORTED_MODULE_2__.MapPin, {
          size: 16
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          href: "#section-location",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("span", {
            children: location.name
          })
        })]
      }), Boolean(!parentIsHost && parentCollective) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_HeroNote__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("span", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "Event.CreatedBy",
            defaultMessage: [{
              "type": 0,
              "value": "Created by: "
            }, {
              "type": 1,
              "value": "CollectiveLink"
            }],
            values: {
              CollectiveLink: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                href: `/${parentCollective.slug}`,
                children: parentCollective.name
              })
            }
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
        alignItemt: true,
        children: [host && collective.isApproved && host.id !== collective.id && !collective.isHost && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          mr: 1,
          color: "black.700",
          my: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "Collective.Hero.Host",
            defaultMessage: [{
              "type": 1,
              "value": "FiscalHost"
            }, {
              "type": 0,
              "value": ": "
            }, {
              "type": 1,
              "value": "hostName"
            }],
            values: {
              FiscalHost: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_DefinedTerm__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                term: _DefinedTerm__WEBPACK_IMPORTED_MODULE_6__/* .Terms.FISCAL_HOST */ .F.FISCAL_HOST,
                color: "black.700"
              }),
              hostName: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                as: _LinkCollective__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                collective: host,
                "data-cy": "fiscalHostName",
                noTitle: true,
                color: "black.700",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_TruncatedTextWithTooltip__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                  value: host.name,
                  cursor: "pointer"
                })
              })
            }
          })
        }), displayedConnectedAccount && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          mx: 1,
          color: "black.700",
          my: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "Collective.Hero.ParentCollective",
            defaultMessage: [{
              "type": 0,
              "value": "Part of: "
            }, {
              "type": 1,
              "value": "parentName"
            }],
            values: {
              parentName: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                as: _LinkCollective__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                collective: displayedConnectedAccount.collective,
                noTitle: true,
                color: "black.700",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_TruncatedTextWithTooltip__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                  value: displayedConnectedAccount.collective.name,
                  cursor: "pointer"
                })
              })
            }
          })
        })]
      })]
    });
  }

}

HeroEventDetails.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "isNotLocalTimeZone",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "isSameDay",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "startsAt",
      "type": null
    }, {
      "name": "endsAt",
      "type": null
    }, {
      "name": "timezone",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "HeroEventDetails",
  "props": {
    "host": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "displayedConnectedAccount": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "number",
            "required": false
          },
          "startsAt": {
            "name": "string",
            "required": false
          },
          "endsAt": {
            "name": "string",
            "required": false
          },
          "timezone": {
            "name": "string",
            "required": true
          },
          "location": {
            "name": "object",
            "required": false
          },
          "parentCollective": {
            "name": "object",
            "required": false
          },
          "isApproved": {
            "name": "bool",
            "required": false
          },
          "isHost": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroEventDetails);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const HeroNote = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "HeroNote",
  componentId: "sc-lq1ich-0"
})(["display:flex;align-items:center;margin:5px 0;font-size:16px;svg{flex:0 0 auto;margin-right:6px;}a{color:#333;&:focus{color:", ";text-decoration:none;}&:hover{color:", ";text-decoration:none;}}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.themeGet)('colors.primary.700'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.themeGet)('colors.primary.400'));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroNote);

/***/ })

};
;