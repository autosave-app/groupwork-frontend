"use strict";
exports.id = 7897;
exports.ids = [7897];
exports.modules = {

/***/ 68654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82525);
/* harmony import */ var _lib_image_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89314);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97079);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69078);
/* harmony import */ var _Currency__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(93129);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(92129);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).withConfig({
  displayName: "CollectiveCard__CardWrapper",
  componentId: "sc-1fihsat-0"
})(["display:flex;flex-direction:column;justify-content:space-between;cursor:pointer;vertical-align:top;position:relative;box-sizing:border-box;width:215px;min-height:380px;border-radius:15px;background-color:#ffffff;box-shadow:0 1px 3px 0 rgba(45,77,97,0.2);overflow:hidden;text-decoration:none !important;", ""], styled_system__WEBPACK_IMPORTED_MODULE_4__.width);
const NameWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).withConfig({
  displayName: "CollectiveCard__NameWrapper",
  componentId: "sc-1fihsat-1"
})(["min-height:20px;font-size:14px;margin:5px;font-weight:700;text-align:center;color:#303233;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"]);
const MembershipWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).withConfig({
  displayName: "CollectiveCard__MembershipWrapper",
  componentId: "sc-1fihsat-2"
})(["border-top:1px solid #f2f2f2;padding:1rem;color:#303233;"]);
const StatsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(MembershipWrapper).withConfig({
  displayName: "CollectiveCard__StatsWrapper",
  componentId: "sc-1fihsat-3"
})(["display:flex;width:100%;box-sizing:border-box;justify-content:space-around;"]);
const ValueWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).withConfig({
  displayName: "CollectiveCard__ValueWrapper",
  componentId: "sc-1fihsat-4"
})(["font-weight:normal;text-align:center;color:#303233;font-size:1.4rem;margin:3px 2px 0px;text-align:center;margin:auto;"]);
const LabelWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).withConfig({
  displayName: "CollectiveCard__LabelWrapper",
  componentId: "sc-1fihsat-5"
})(["font-size:9px;text-align:center;font-weight:300;color:#a8afb3;text-transform:uppercase;text-align:center;margin:auto;"]);
const CommaList = styled_components__WEBPACK_IMPORTED_MODULE_3___default().ul.withConfig({
  displayName: "CollectiveCard__CommaList",
  componentId: "sc-1fihsat-6"
})(["display:inline;list-style:none;padding:0px;li{display:inline;}li::after{content:', ';}li:last-child::after{content:'';}"]);

class CollectiveCard extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
    this.messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
      'membership.role.host': {
        id: "Member.Role.HOST",
        defaultMessage: [{
          "type": 0,
          "value": "Host"
        }]
      },
      'roles.admin.label': {
        id: "Member.Role.ADMIN",
        defaultMessage: [{
          "type": 0,
          "value": "Admin"
        }]
      },
      'roles.member.label': {
        id: "Member.Role.MEMBER",
        defaultMessage: [{
          "type": 0,
          "value": "Core Contributor"
        }]
      },
      'tier.name.sponsor': {
        id: "tier.name.sponsor",
        defaultMessage: [{
          "type": 0,
          "value": "sponsor"
        }]
      },
      'tier.name.backer': {
        id: "tier.name.backer",
        defaultMessage: [{
          "type": 0,
          "value": "backer"
        }]
      }
    });
  }

  render() {
    const {
      intl,
      collective,
      membership
    } = this.props;
    let {
      memberships
    } = this.props;
    memberships = memberships || (membership ? [membership] : []);

    const getTierName = membership => {
      const tierName = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(membership, 'tier.name');

      const role = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(membership, 'role');

      if (!tierName) {
        switch (role) {
          case 'HOST':
            return intl.formatMessage(this.messages['membership.role.host']);

          case 'ADMIN':
            return intl.formatMessage(this.messages['roles.admin.label']);

          case 'MEMBER':
            return intl.formatMessage(this.messages['roles.member.label']);

          default:
            if (collective.type === 'ORGANIZATION') {
              return intl.formatMessage(this.messages['tier.name.sponsor']);
            } else {
              return intl.formatMessage(this.messages['tier.name.backer']);
            }

        }
      }

      return tierName;
    };

    const membershipDates = memberships.map(m => m.createdAt);
    membershipDates.sort((a, b) => {
      return b - a;
    });
    const oldestMembershipDate = membershipDates.length ? membershipDates[0] : null;
    const roles = new Set(memberships.map(m => getTierName(m)));
    const coverStyle = {};
    const backgroundImage = (0,_lib_image_utils__WEBPACK_IMPORTED_MODULE_6__/* .imagePreview */ .Z_)(collective.backgroundImage || lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(collective, 'parentCollective.backgroundImage'), _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_5__/* .defaultBackgroundImage.COLLECTIVE */ .am.COLLECTIVE, {
      width: 400
    });

    if (!coverStyle.backgroundImage && backgroundImage) {
      coverStyle.backgroundImage = `url('${backgroundImage}')`;
      coverStyle.backgroundSize = 'cover';
      coverStyle.backgroundPosition = 'center center';
    }

    const truncatedDescription = collective.description && (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__/* .firstSentence */ .u5)(collective.description, 80);
    const description = collective.description;
    let route;

    if (collective.type === 'EVENT') {
      route = `/${collective.parentCollective?.slug || 'collective'}/events/${collective.slug}`;
    } else {
      route = `/${collective.slug}`;
    }

    const backersCount = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(collective, 'backers.totalCount');

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Link__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      href: route,
      target: "_top",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(CardWrapper, _objectSpread(_objectSpread({
        className: `CollectiveCard ${collective.type}`
      }, this.props), {}, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "14rem",
          borderBottom: "5px solid #46b0ed",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            style: coverStyle
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            display: "flex",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            left: "0",
            right: "0",
            top: "0",
            bottom: "0",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
              collective: collective,
              radius: 65
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          padding: "1rem",
          minHeight: "11rem",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(NameWrapper, {
            children: collective.name
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            fontWeight: "normal",
            textAlign: "center",
            color: "#787d80",
            fontSize: "1.2rem",
            lineHeight: "1.3",
            margin: "0 5px",
            minHeight: "50px",
            title: description,
            children: truncatedDescription
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          fontSize: "1.1rem",
          width: "100%",
          minHeight: "6rem",
          textAlign: "center",
          children: [collective.type === 'COLLECTIVE' && backersCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(StatsWrapper, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: "backers",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(ValueWrapper, {
                children: backersCount
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(LabelWrapper, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                  id: "collective.card.stats.backers",
                  defaultMessage: [{
                    "type": 6,
                    "value": "n",
                    "options": {
                      "one": {
                        "value": [{
                          "type": 0,
                          "value": "backer"
                        }]
                      },
                      "other": {
                        "value": [{
                          "type": 0,
                          "value": "backers"
                        }]
                      }
                    },
                    "offset": 0,
                    "pluralType": "cardinal"
                  }],
                  values: {
                    n: backersCount
                  }
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: "yearlyBudget",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(ValueWrapper, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Currency__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                  value: collective.stats.yearlyBudget.valueInCents,
                  currency: collective.stats.yearlyBudget.currency
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(LabelWrapper, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                  id: "collective.card.stats.yearlyBudget",
                  defaultMessage: [{
                    "type": 0,
                    "value": "yearly budget"
                  }]
                })
              })]
            })]
          }), collective.memberOf && collective.memberOf.totalCount > 0 && collective.type === 'ORGANIZATION' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(StatsWrapper, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: "backers",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(ValueWrapper, {
                children: collective.memberOf.totalCount
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(LabelWrapper, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                  id: "collective.card.memberOf.count",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Contributor to "
                  }, {
                    "type": 6,
                    "value": "n",
                    "options": {
                      "one": {
                        "value": [{
                          "type": 0,
                          "value": "Collective"
                        }]
                      },
                      "other": {
                        "value": [{
                          "type": 0,
                          "value": "Collectives"
                        }]
                      }
                    },
                    "offset": 0,
                    "pluralType": "cardinal"
                  }],
                  values: {
                    n: collective.memberOf.totalCount
                  }
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: "yearlyBudget",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(ValueWrapper, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Currency__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                  value: collective.stats.totalAmountSpent.valueInCents,
                  currency: collective.stats.totalAmountSpent.currency
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(LabelWrapper, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                  id: "AmountContributed",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Contributed"
                  }]
                })
              })]
            })]
          }), collective.stats && collective.stats.collectives && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(StatsWrapper, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: "backers",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(ValueWrapper, {
                children: lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(collective, 'stats.collectives.hosted')
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(LabelWrapper, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                  id: "collective.card.collectives.count",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Hosted "
                  }, {
                    "type": 6,
                    "value": "n",
                    "options": {
                      "one": {
                        "value": [{
                          "type": 0,
                          "value": "Collective"
                        }]
                      },
                      "other": {
                        "value": [{
                          "type": 0,
                          "value": "Collectives"
                        }]
                      }
                    },
                    "offset": 0,
                    "pluralType": "cardinal"
                  }],
                  values: {
                    n: lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(collective, 'stats.collectives.hosted')
                  }
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: "currency",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(ValueWrapper, {
                children: collective.currency
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(LabelWrapper, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                  id: "currency",
                  defaultMessage: [{
                    "type": 0,
                    "value": "currency"
                  }]
                })
              })]
            })]
          }), roles && roles.size > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(MembershipWrapper, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
              minHeight: "13px",
              fontWeight: "700",
              letterSpacing: "3px",
              color: "#75cc1f",
              textTransform: "uppercase",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(CommaList, {
                children: Array.from(roles).map(role => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("li", {
                  children: role
                }, role))
              })
            }), oldestMembershipDate && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
              minHeight: "18px",
              fontSize: "12px",
              fontWeight: "500",
              lineHeight: "1.5",
              textAlign: "center",
              color: "#aab0b3",
              textTransform: "capitalize",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "membership.since",
                defaultMessage: [{
                  "type": 0,
                  "value": "since "
                }, {
                  "type": 1,
                  "value": "date"
                }],
                values: {
                  date: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedDate, {
                    value: oldestMembershipDate,
                    month: "long",
                    year: "numeric"
                  })
                }
              })
            })]
          }), memberships.map(membership => membership.role === 'BACKER' && lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(membership, 'stats.totalDonations') > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(MembershipWrapper, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
              fontSize: "2rem",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Currency__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                value: lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(membership, 'stats.totalDonations'),
                currency: lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(membership, 'collective.currency')
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "membership.totalDonations.title",
              defaultMessage: [{
                "type": 0,
                "value": "Amount contributed"
              }]
            })]
          }, membership.id))]
        })]
      }))
    });
  }

}

CollectiveCard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CollectiveCard",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "membership": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "memberships": {
      "description": "",
      "type": {
        "name": "array"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)(CollectiveCard));

/***/ }),

/***/ 12665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const ErrorComponent = ({
  message
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: "Error",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_Text__WEBPACK_IMPORTED_MODULE_1__.H1, {
      textAlign: "center",
      padding: "8rem",
      children: message || 'unknown error'
    })
  });
};

ErrorComponent.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ErrorComponent",
  "props": {
    "message": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorComponent);

/***/ })

};
;