"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2645],{

/***/ 32645:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ hero_HeroEventDetails; }
});

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
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Clock/Clock.esm.js
var Clock_esm = __webpack_require__(48143);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@styled-icons/styled-icon/index.esm.js
var index_esm = __webpack_require__(54142);
;// CONCATENATED MODULE: ./node_modules/@styled-icons/feather/MapPin/MapPin.esm.js



var MapPin = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "none",
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke": "currentColor",
    "strokeLinecap": "round",
    "strokeLinejoin": "round"
  };
  return /*#__PURE__*/react.createElement(index_esm.StyledIconBase, (0,esm_extends/* default */.Z)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react.createElement("path", {
    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 12,
    cy: 10,
    r: 3
  }));
});
MapPin.displayName = 'MapPin';
var MapPinDimensions = {
  height: 24,
  width: 24
};
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./lib/dayjs.js
var dayjs = __webpack_require__(82114);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/DefinedTerm.js
var DefinedTerm = __webpack_require__(78317);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/LinkCollective.js
var LinkCollective = __webpack_require__(97619);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./components/StyledTooltip.js
var StyledTooltip = __webpack_require__(88609);
// EXTERNAL MODULE: ./components/TruncatedTextWithTooltip.js
var TruncatedTextWithTooltip = __webpack_require__(92582);
// EXTERNAL MODULE: ./node_modules/@styled-system/theme-get/dist/index.esm.js
var dist_index_esm = __webpack_require__(50056);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
;// CONCATENATED MODULE: ./components/collective-page/hero/HeroNote.js


var HeroNote = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "HeroNote",
  componentId: "sc-lq1ich-0"
})(["display:flex;align-items:center;margin:5px 0;font-size:16px;svg{flex:0 0 auto;margin-right:6px;}a{color:#333;&:focus{color:", ";text-decoration:none;}&:hover{color:", ";text-decoration:none;}}"], (0,dist_index_esm/* themeGet */.R)('colors.primary.700'), (0,dist_index_esm/* themeGet */.R)('colors.primary.400'));
/* harmony default export */ var hero_HeroNote = (HeroNote);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/collective-page/hero/HeroEventDetails.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


















var FormattedDateProps = function FormattedDateProps(value, timeZone) {
  return {
    value: value,
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: timeZone
  };
};

var FormattedTimeProps = function FormattedTimeProps(value, timeZone) {
  return {
    value: value,
    timeZone: timeZone
  };
};

var Timerange = function Timerange(_ref) {
  var startsAt = _ref.startsAt,
      endsAt = _ref.endsAt,
      timezone = _ref.timezone,
      isSameDay = _ref.isSameDay;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lib.FormattedDate, _objectSpread({}, FormattedDateProps(startsAt, timezone))), ", ", /*#__PURE__*/(0,jsx_runtime.jsx)(lib.FormattedTime, _objectSpread({}, FormattedTimeProps(startsAt, timezone))), ' ', endsAt && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: ["-", ' ', !isSameDay && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lib.FormattedDate, _objectSpread({}, FormattedDateProps(endsAt, timezone))), ",", ' ']
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib.FormattedTime, _objectSpread({}, FormattedTimeProps(endsAt, timezone))), ' ']
    }), "(UTC", (0,dayjs/* default */.Z)().tz(timezone).format('Z'), ")"]
  });
};

var HeroEventDetails = /*#__PURE__*/function (_React$Component) {
  inherits_default()(HeroEventDetails, _React$Component);

  var _super = _createSuper(HeroEventDetails);

  function HeroEventDetails() {
    classCallCheck_default()(this, HeroEventDetails);

    return _super.apply(this, arguments);
  }

  createClass_default()(HeroEventDetails, [{
    key: "isNotLocalTimeZone",
    value: function isNotLocalTimeZone() {
      if (this.props.collective.timezone) {
        var eventTimezone = (0,dayjs/* default */.Z)().tz(this.props.collective.timezone).format('Z');
        var browserTimezone = (0,dayjs/* default */.Z)().tz(dayjs/* default.tz.guess */.Z.tz.guess()).format('Z');
        return eventTimezone !== browserTimezone;
      }
    }
  }, {
    key: "isSameDay",
    value: function isSameDay(startsAt, endsAt, timezone) {
      if (!endsAt) {
        return true;
      }

      var tzStartsAt = dayjs/* default.tz */.Z.tz(new Date(startsAt), timezone);
      var tzEndsAt = dayjs/* default.tz */.Z.tz(new Date(endsAt), timezone);
      return tzStartsAt.isSame(tzEndsAt, 'day');
    }
  }, {
    key: "render",
    value: function render() {
      var _collective$parentCol,
          _this = this;

      var _this$props = this.props,
          collective = _this$props.collective,
          host = _this$props.host,
          displayedConnectedAccount = _this$props.displayedConnectedAccount;
      var startsAt = collective.startsAt,
          endsAt = collective.endsAt,
          timezone = collective.timezone,
          location = collective.location,
          parentCollective = collective.parentCollective;
      var parentIsHost = host && ((_collective$parentCol = collective.parentCollective) === null || _collective$parentCol === void 0 ? void 0 : _collective$parentCol.id) === host.id;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [startsAt && /*#__PURE__*/(0,jsx_runtime.jsxs)(hero_HeroNote, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Clock_esm/* Clock */.S, {
            size: 16
          }), this.isNotLocalTimeZone() ? /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTooltip/* default */.Z, {
              place: "bottom",
              content: function content() {
                return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Timerange, {
                    startsAt: startsAt,
                    endsAt: endsAt,
                    timezone: dayjs/* default.tz.guess */.Z.tz.guess(),
                    isSameDay: _this.isSameDay(startsAt, endsAt, dayjs/* default.tz.guess */.Z.tz.guess())
                  }), ' ', "(", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "EventCover.LocalTime",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Your Time"
                    }]
                  }), ")"]
                });
              },
              children: function children(props) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _objectSpread(_objectSpread({}, props), {}, {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(Timerange, {
                    startsAt: startsAt,
                    endsAt: endsAt,
                    timezone: timezone,
                    isSameDay: _this.isSameDay(startsAt, endsAt, timezone)
                  })
                }));
              }
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Timerange, {
            startsAt: startsAt,
            endsAt: endsAt,
            timezone: timezone,
            isSameDay: this.isSameDay(startsAt, endsAt, timezone)
          })]
        }), location.name && /*#__PURE__*/(0,jsx_runtime.jsxs)(hero_HeroNote, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(MapPin, {
            size: 16
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: "#section-location",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              children: location.name
            })
          })]
        }), Boolean(!parentIsHost && parentCollective) && /*#__PURE__*/(0,jsx_runtime.jsx)(hero_HeroNote, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "Event.CreatedBy",
              defaultMessage: [{
                "type": 0,
                "value": "Created by: "
              }, {
                "type": 1,
                "value": "CollectiveLink"
              }],
              values: {
                CollectiveLink: /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
                  href: "/".concat(parentCollective.slug),
                  children: parentCollective.name
                })
              }
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          alignItemt: true,
          children: [host && collective.isApproved && host.id !== collective.id && !collective.isHost && /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
            mr: 1,
            color: "black.700",
            my: 2,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
                FiscalHost: /*#__PURE__*/(0,jsx_runtime.jsx)(DefinedTerm/* default */.Z, {
                  term: DefinedTerm/* Terms.FISCAL_HOST */.F.FISCAL_HOST,
                  color: "black.700"
                }),
                hostName: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                  as: LinkCollective/* default */.Z,
                  collective: host,
                  "data-cy": "fiscalHostName",
                  noTitle: true,
                  color: "black.700",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(TruncatedTextWithTooltip/* default */.Z, {
                    value: host.name,
                    cursor: "pointer"
                  })
                })
              }
            })
          }), displayedConnectedAccount && /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
            mx: 1,
            color: "black.700",
            my: 2,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "Collective.Hero.ParentCollective",
              defaultMessage: [{
                "type": 0,
                "value": "Part of: "
              }, {
                "type": 1,
                "value": "parentName"
              }],
              values: {
                parentName: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                  as: LinkCollective/* default */.Z,
                  collective: displayedConnectedAccount.collective,
                  noTitle: true,
                  color: "black.700",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(TruncatedTextWithTooltip/* default */.Z, {
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
  }]);

  return HeroEventDetails;
}(react.Component);

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
/* harmony default export */ var hero_HeroEventDetails = (HeroEventDetails);

/***/ })

}]);
//# sourceMappingURL=2645.667c0d4ef28d8e2b.js.map