"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2350],{

/***/ 54646:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49376);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7980);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78718);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23279);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87794);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67294);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(15020);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(46829);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(95612);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27484);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(82580);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(44012);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(86896);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(52015);
/* harmony import */ var _lib_form_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40986);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32651);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(62131);
/* harmony import */ var _lib_policies__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(43176);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(97079);
/* harmony import */ var _CollectivePicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(41861);
/* harmony import */ var _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5993);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(16159);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(29242);
/* harmony import */ var _MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(68185);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(87268);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(173);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputAmount__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(54029);
/* harmony import */ var _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(75667);
/* harmony import */ var _StyledInputPercentage__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(69931);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(71792);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(66943);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(93150);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(31330);
/* harmony import */ var _TwoFactorAuthRequiredMessage__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(37066);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(85893);








var _excluded = ["host", "edit"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4;



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


































var EDITABLE_FIELDS = ['amount', 'description', 'expectedAt', 'fromAccount', 'fromAccountInfo', 'hostFeePercent', 'tier', 'memo', 'ponumber', 'paymentMethod'];

var debouncedLazyQuery = lodash_debounce__WEBPACK_IMPORTED_MODULE_7___default()(function (searchFunc, variables) {
  return searchFunc({
    variables: variables
  });
}, 750);

var CreatePendingContributionModalContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .ZP)(_StyledModal__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .ZP).withConfig({
  displayName: "CreatePendingOrderModal__CreatePendingContributionModalContainer",
  componentId: "sc-19ax7sb-0"
})(["width:100%;max-width:576px;padding:24px 30px;"]);

var AmountDetailsLine = function AmountDetailsLine(_ref) {
  var label = _ref.label,
      value = _ref.value,
      currency = _ref.currency,
      isLargeAmount = _ref.isLargeAmount;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
    justifyContent: "space-between",
    alignItems: "center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_32__/* .Span */ .Dr, {
      fontSize: "12px",
      lineHeight: "18px",
      fontWeight: "500",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
        id: "withColon",
        defaultMessage: [{
          "type": 1,
          "value": "item"
        }, {
          "type": 0,
          "value": ":"
        }],
        values: {
          item: label
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_32__/* .Span */ .Dr, {
      fontSize: isLargeAmount ? '18px' : '12px',
      lineHeight: isLargeAmount ? '27px' : '18px',
      fontWeight: "500",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
        amount: value,
        currency: currency
      })
    })]
  });
};

var createPendingContributionModalQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .ZP)(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5___default()(["\n  query CreatePendingContributionModal($slug: String!) {\n    host(slug: $slug) {\n      id\n      legacyId\n      type\n      isHost\n      name\n      slug\n      currency\n      settings\n\n      plan {\n        id\n        hostFees\n      }\n      policies {\n        REQUIRE_2FA_FOR_ADMINS\n      }\n      hostFeePercent\n      isTrustedHost\n    }\n  }\n"])));
var createPendingContributionModalCollectiveQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .ZP)(_templateObject2 || (_templateObject2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5___default()(["\n  query CreatePendingContributionCollective($slug: String!) {\n    account(slug: $slug) {\n      id\n      type\n      currency\n      childrenAccounts {\n        nodes {\n          id\n          type\n          legacyId\n          isHost\n          name\n          slug\n          currency\n          settings\n          imageUrl\n          currency\n          ... on AccountWithContributions {\n            tiers {\n              nodes {\n                id\n                id\n                slug\n                legacyId\n                name\n              }\n            }\n          }\n        }\n      }\n      ... on AccountWithContributions {\n        tiers {\n          nodes {\n            id\n            id\n            slug\n            legacyId\n            name\n          }\n        }\n      }\n    }\n  }\n"])));
var createPendingContributionMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .ZP)(_templateObject3 || (_templateObject3 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5___default()(["\n  mutation CreatePendingContribution($order: PendingOrderCreateInput!) {\n    createPendingOrder(order: $order) {\n      legacyId\n      id\n      status\n    }\n  }\n"])));
var editPendingContributionMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .ZP)(_templateObject4 || (_templateObject4 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5___default()(["\n  mutation EditPendingContribution($order: PendingOrderEditInput!) {\n    editPendingOrder(order: $order) {\n      legacyId\n      id\n      status\n    }\n  }\n"])));

var validate = function validate(values) {
  var errors = (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_12__/* .requireFields */ .ay)(values, ['amount.valueInCents', 'fromAccount', 'toAccount', 'expectedAt', 'fromAccountInfo.name', 'fromAccountInfo.email']);
  (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_12__/* .verifyEmailPattern */ .Sn)(errors, values, 'fromAccountInfo.email');
  return errors;
}; // Build an account reference. Compatible with accounts from V1 and V2.


var buildAccountReference = function buildAccountReference(input) {
  return typeof input.id === 'string' ? {
    id: input.id
  } : {
    legacyId: input.id
  };
};

var getTiersOptions = function getTiersOptions(intl, tiers) {
  if (!tiers) {
    return [];
  }

  return [{
    value: null,
    label: intl.formatMessage({
      id: "ozkv/Y",
      defaultMessage: [{
        "type": 0,
        "value": "No tier"
      }]
    })
  }].concat(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4___default()(tiers.map(function (tier) {
    return {
      value: tier,
      label: "#".concat(tier.legacyId, " - ").concat(tier.name)
    };
  })));
};

var Field = (0,styled_components__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .ZP)(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z).attrs({
  labelFontSize: '16px',
  labelFontWeight: '700'
}).withConfig({
  displayName: "CreatePendingOrderModal__Field",
  componentId: "sc-19ax7sb-1"
})([""]);

var CreatePendingContributionForm = function CreatePendingContributionForm(_ref2) {
  var _collective$childrenA, _values$childAccount, _host$plan, _childAccount$tiers, _collective$tiers, _host$settings, _host$settings$invoic, _receiptTemplates$def, _receiptTemplates$def2, _receiptTemplates$alt, _receiptTemplates$alt2, _edit$pendingContribu, _values$amount, _values$amount2, _values$amount3;

  var host = _ref2.host,
      onClose = _ref2.onClose,
      error = _ref2.error,
      edit = _ref2.edit;

  var _useFormikContext = (0,formik__WEBPACK_IMPORTED_MODULE_11__/* .useFormikContext */ .u6)(),
      values = _useFormikContext.values,
      isSubmitting = _useFormikContext.isSubmitting,
      setFieldValue = _useFormikContext.setFieldValue;

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z)();

  var _useLazyQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_40__.useLazyQuery)(createPendingContributionModalCollectiveQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__/* .API_V2_CONTEXT */ .T,
    variables: {
      slug: host.slug
    }
  }),
      _useLazyQuery2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useLazyQuery, 2),
      getCollectiveInfo = _useLazyQuery2[0],
      _useLazyQuery2$ = _useLazyQuery2[1],
      data = _useLazyQuery2$.data,
      collectiveLoading = _useLazyQuery2$.loading;

  react__WEBPACK_IMPORTED_MODULE_9__.useEffect(function () {
    var _values$toAccount;

    if ((_values$toAccount = values.toAccount) !== null && _values$toAccount !== void 0 && _values$toAccount.slug) {
      debouncedLazyQuery(getCollectiveInfo, {
        slug: values.toAccount.slug
      });
    }
  }, [values.toAccount]);
  react__WEBPACK_IMPORTED_MODULE_9__.useEffect(function () {
    var _data$account;

    setFieldValue('amount.currency', (data === null || data === void 0 ? void 0 : (_data$account = data.account) === null || _data$account === void 0 ? void 0 : _data$account.currency) || host.currency);
  }, [data === null || data === void 0 ? void 0 : data.account]);
  var collective = data === null || data === void 0 ? void 0 : data.account;
  var currency = (collective === null || collective === void 0 ? void 0 : collective.currency) || host.currency;
  var childrenOptions = (collective === null || collective === void 0 ? void 0 : (_collective$childrenA = collective.childrenAccounts) === null || _collective$childrenA === void 0 ? void 0 : _collective$childrenA.nodes) || [];
  var childAccount = ((_values$childAccount = values.childAccount) === null || _values$childAccount === void 0 ? void 0 : _values$childAccount.id) && childrenOptions.find(function (option) {
    var _values$childAccount2;

    return option.id === ((_values$childAccount2 = values.childAccount) === null || _values$childAccount2 === void 0 ? void 0 : _values$childAccount2.id);
  });
  var canAddHostFee = host === null || host === void 0 ? void 0 : (_host$plan = host.plan) === null || _host$plan === void 0 ? void 0 : _host$plan.hostFees;
  var hostFeePercent = host.hostFeePercent;
  var tiersOptions = childAccount ? getTiersOptions(intl, (childAccount === null || childAccount === void 0 ? void 0 : (_childAccount$tiers = childAccount.tiers) === null || _childAccount$tiers === void 0 ? void 0 : _childAccount$tiers.nodes) || []) : getTiersOptions(intl, (collective === null || collective === void 0 ? void 0 : (_collective$tiers = collective.tiers) === null || _collective$tiers === void 0 ? void 0 : _collective$tiers.nodes) || []);
  var receiptTemplates = host === null || host === void 0 ? void 0 : (_host$settings = host.settings) === null || _host$settings === void 0 ? void 0 : (_host$settings$invoic = _host$settings.invoice) === null || _host$settings$invoic === void 0 ? void 0 : _host$settings$invoic.templates;
  var receiptTemplateTitles = [];

  if ((receiptTemplates === null || receiptTemplates === void 0 ? void 0 : (_receiptTemplates$def = receiptTemplates["default"]) === null || _receiptTemplates$def === void 0 ? void 0 : (_receiptTemplates$def2 = _receiptTemplates$def.title) === null || _receiptTemplates$def2 === void 0 ? void 0 : _receiptTemplates$def2.length) > 0) {
    var _receiptTemplates$def3;

    receiptTemplateTitles.push({
      value: 'default',
      label: receiptTemplates === null || receiptTemplates === void 0 ? void 0 : (_receiptTemplates$def3 = receiptTemplates["default"]) === null || _receiptTemplates$def3 === void 0 ? void 0 : _receiptTemplates$def3.title
    });
  }

  if ((receiptTemplates === null || receiptTemplates === void 0 ? void 0 : (_receiptTemplates$alt = receiptTemplates.alternative) === null || _receiptTemplates$alt === void 0 ? void 0 : (_receiptTemplates$alt2 = _receiptTemplates$alt.title) === null || _receiptTemplates$alt2 === void 0 ? void 0 : _receiptTemplates$alt2.length) > 0) {
    var _receiptTemplates$alt3;

    receiptTemplateTitles.push({
      value: 'alternative',
      label: receiptTemplates === null || receiptTemplates === void 0 ? void 0 : (_receiptTemplates$alt3 = receiptTemplates.alternative) === null || _receiptTemplates$alt3 === void 0 ? void 0 : _receiptTemplates$alt3.title
    });
  }

  var defaultSources = [{
    value: host,
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_CollectivePicker__WEBPACK_IMPORTED_MODULE_16__/* .DefaultCollectiveLabel */ .Os, {
      value: host
    })
  }];
  var expectedAtOptions = [{
    value: dayjs__WEBPACK_IMPORTED_MODULE_10___default()().add(1, 'month'),
    label: intl.formatMessage({
      id: "xjMZQI",
      defaultMessage: [{
        "type": 0,
        "value": "Within "
      }, {
        "type": 1,
        "value": "n"
      }, {
        "type": 0,
        "value": " "
      }, {
        "type": 6,
        "value": "n",
        "options": {
          "one": {
            "value": [{
              "type": 0,
              "value": "month"
            }]
          },
          "other": {
            "value": [{
              "type": 0,
              "value": "months"
            }]
          }
        },
        "offset": 0,
        "pluralType": "cardinal"
      }]
    }, {
      n: 1
    })
  }, {
    value: dayjs__WEBPACK_IMPORTED_MODULE_10___default()().add(3, 'month'),
    label: intl.formatMessage({
      id: "xjMZQI",
      defaultMessage: [{
        "type": 0,
        "value": "Within "
      }, {
        "type": 1,
        "value": "n"
      }, {
        "type": 0,
        "value": " "
      }, {
        "type": 6,
        "value": "n",
        "options": {
          "one": {
            "value": [{
              "type": 0,
              "value": "month"
            }]
          },
          "other": {
            "value": [{
              "type": 0,
              "value": "months"
            }]
          }
        },
        "offset": 0,
        "pluralType": "cardinal"
      }]
    }, {
      n: 3
    })
  }, {
    value: dayjs__WEBPACK_IMPORTED_MODULE_10___default()().add(6, 'month'),
    label: intl.formatMessage({
      id: "xjMZQI",
      defaultMessage: [{
        "type": 0,
        "value": "Within "
      }, {
        "type": 1,
        "value": "n"
      }, {
        "type": 0,
        "value": " "
      }, {
        "type": 6,
        "value": "n",
        "options": {
          "one": {
            "value": [{
              "type": 0,
              "value": "month"
            }]
          },
          "other": {
            "value": [{
              "type": 0,
              "value": "months"
            }]
          }
        },
        "offset": 0,
        "pluralType": "cardinal"
      }]
    }, {
      n: 6
    })
  }, {
    value: dayjs__WEBPACK_IMPORTED_MODULE_10___default()().add(1, 'year'),
    label: intl.formatMessage({
      id: "bBxR0J",
      defaultMessage: [{
        "type": 0,
        "value": "Within "
      }, {
        "type": 1,
        "value": "n"
      }, {
        "type": 0,
        "value": " "
      }, {
        "type": 6,
        "value": "n",
        "options": {
          "one": {
            "value": [{
              "type": 0,
              "value": "year"
            }]
          },
          "other": {
            "value": [{
              "type": 0,
              "value": "years"
            }]
          }
        },
        "offset": 0,
        "pluralType": "cardinal"
      }]
    }, {
      n: 1
    })
  }];

  if (edit !== null && edit !== void 0 && (_edit$pendingContribu = edit.pendingContributionData) !== null && _edit$pendingContribu !== void 0 && _edit$pendingContribu.expectedAt) {
    expectedAtOptions.push({
      value: dayjs__WEBPACK_IMPORTED_MODULE_10___default()(edit.pendingContributionData.expectedAt),
      label: intl.formatMessage({
        defaultMessage: [{
          "type": 0,
          "value": "Around "
        }, {
          "type": 1,
          "value": "date"
        }],
        id: "Fields.expectedAt.date"
      }, {
        date: dayjs__WEBPACK_IMPORTED_MODULE_10___default()(edit.pendingContributionData.expectedAt).format('MMMM D, YYYY')
      })
    });
  }

  var paymentMethodOptions = [{
    value: 'UNKNOWN',
    label: intl.formatMessage({
      id: "Unknown",
      defaultMessage: [{
        "type": 0,
        "value": "Unknown"
      }]
    })
  }, {
    value: 'BANK_TRANSFER',
    label: intl.formatMessage({
      id: "Aj4Xx4",
      defaultMessage: [{
        "type": 0,
        "value": "Bank Transfer"
      }]
    })
  }, {
    value: 'CHECK',
    label: intl.formatMessage({
      id: "Check",
      defaultMessage: [{
        "type": 0,
        "value": "Check"
      }]
    })
  }];
  var hostFee = ((_values$amount = values.amount) === null || _values$amount === void 0 ? void 0 : _values$amount.valueInCents) && Math.round(values.amount.valueInCents * (values.hostFeePercent / 100));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_11__/* .Form */ .l0, {
    "data-cy": "create-pending-contribution-form",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_28__/* .ModalBody */ .fe, {
      mt: "24px",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(Field, {
        name: "toAccount",
        htmlFor: "CreatePendingContribution-toAccount",
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
          id: "Lv3vva",
          defaultMessage: [{
            "type": 0,
            "value": "Create pending order for:"
          }]
        }),
        labelFontSize: "16px",
        labelFontWeight: "700",
        children: function children(_ref3) {
          var form = _ref3.form,
              field = _ref3.field;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            inputId: field.id,
            "data-cy": "create-pending-contribution-to",
            types: ['COLLECTIVE', 'ORGANIZATION', 'FUND'],
            error: field.error,
            hostCollectiveIds: [host.legacyId],
            onBlur: function onBlur() {
              return form.setFieldTouched(field.name, true);
            },
            onChange: function onChange(_ref4) {
              var value = _ref4.value;
              return form.setFieldValue(field.name, value);
            },
            collective: field.value,
            disabled: edit
          });
        }
      }), !edit && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(Field, {
        name: "childAccount",
        htmlFor: "CreatePendingContribution-childAccount",
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
          id: "9IRZG8",
          defaultMessage: [{
            "type": 0,
            "value": "Select event or project:"
          }]
        }),
        labelFontSize: "16px",
        labelFontWeight: "700",
        mt: 3,
        required: false,
        children: function children(_ref5) {
          var form = _ref5.form,
              field = _ref5.field;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_CollectivePicker__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
            inputId: field.id,
            "data-cy": "create-pending-contribution-child",
            error: field.error,
            onBlur: function onBlur() {
              return form.setFieldTouched(field.name, true);
            },
            onChange: function onChange(_ref6) {
              var value = _ref6.value;
              return form.setFieldValue(field.name, value ? {
                id: value === null || value === void 0 ? void 0 : value.id
              } : null);
            },
            isLoading: collectiveLoading,
            collectives: childrenOptions,
            customOptions: [{
              value: null,
              label: intl.formatMessage({
                id: "450Fty",
                defaultMessage: [{
                  "type": 0,
                  "value": "None"
                }]
              })
            }],
            isSearchable: childrenOptions.length > 10,
            collective: childAccount,
            disabled: !values.toAccount
          });
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(Field, {
        name: "tier",
        htmlFor: "CreatePendingContribution-tier",
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
          id: "b07w+D",
          defaultMessage: [{
            "type": 0,
            "value": "Tier"
          }]
        }),
        mt: 3,
        required: false,
        children: function children(_ref7) {
          var form = _ref7.form,
              field = _ref7.field;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_StyledSelect__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP, {
            inputId: field.id,
            "data-cy": "create-pending-contribution-tier",
            error: field.error,
            onBlur: function onBlur() {
              return form.setFieldTouched(field.name, true);
            },
            onChange: function onChange(_ref8) {
              var value = _ref8.value;
              return form.setFieldValue(field.name, value);
            },
            isLoading: collectiveLoading,
            options: tiersOptions,
            disabled: !values.toAccount,
            isSearchable: tiersOptions.length > 10,
            value: tiersOptions.find(function (option) {
              var _option$value;

              return !values.tier ? option.value === null : ((_option$value = option.value) === null || _option$value === void 0 ? void 0 : _option$value.id) === values.tier.id;
            })
          });
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(Field, {
        name: "fromAccount",
        htmlFor: "CreatePendingContribution-fromAccount",
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
          id: "8XrwYZ",
          defaultMessage: [{
            "type": 0,
            "value": "Who is this contribution from?"
          }]
        }),
        mt: 3,
        required: true,
        children: function children(_ref9) {
          var form = _ref9.form,
              field = _ref9.field;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            inputId: field.id,
            "data-cy": "create-pending-contribution-source",
            types: ['USER', 'ORGANIZATION'],
            creatable: true,
            error: field.error,
            createCollectiveOptionalFields: ['location.address', 'location.country'],
            onBlur: function onBlur() {
              return form.setFieldTouched(field.name, true);
            },
            customOptions: defaultSources,
            onChange: function onChange(_ref10) {
              var value = _ref10.value;
              return form.setFieldValue(field.name, value);
            },
            collective: field.value
          });
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(Field, {
        name: "fromAccountInfo.name",
        htmlFor: "CreatePendingContribution-fromAccountInfo-name",
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
          id: "ContactName",
          defaultMessage: [{
            "type": 0,
            "value": "Contact name"
          }]
        }),
        mt: 3,
        required: true,
        children: function children(_ref11) {
          var field = _ref11.field;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_StyledInput__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP, _objectSpread({
            "data-cy": "create-pending-contribution-contact-name"
          }, field));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(Field, {
        name: "fromAccountInfo.email",
        htmlFor: "CreatePendingContribution-fromAccountInfo-email",
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
          id: "Fields.fromAccountInfo.email",
          defaultMessage: [{
            "type": 0,
            "value": "Contact email"
          }]
        }),
        hint: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
          id: "Fields.fromAccountInfo.email.hint",
          defaultMessage: [{
            "type": 0,
            "value": "All communication email will be sent to this email address."
          }]
        }),
        mt: 3,
        required: true,
        children: function children(_ref12) {
          var field = _ref12.field;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_StyledInput__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP, _objectSpread({
            type: "email",
            placeholder: "e.g., yourname@yourhost.com",
            "data-cy": "create-pending-contribution-fromAccountInfo-email"
          }, field));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(Field, {
        name: "ponumber",
        htmlFor: "CreatePendingContribution-ponumber",
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
          id: "Fields.PONumber",
          defaultMessage: [{
            "type": 0,
            "value": "PO Number"
          }]
        }),
        mt: 3,
        hint: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
          id: "3Il70r",
          defaultMessage: [{
            "type": 0,
            "value": "External reference code for this order. This is usually a reference number from the contributor accounting system."
          }]
        }),
        required: false,
        children: function children(_ref13) {
          var field = _ref13.field;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_StyledInput__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP, _objectSpread({
            type: "text",
            "data-cy": "create-pending-contribution-ponumber"
          }, field));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(Field, {
        name: "memo",
        htmlFor: "CreatePendingContribution-memo",
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
          id: "Expense.PrivateNote",
          defaultMessage: [{
            "type": 0,
            "value": "Private note"
          }]
        }),
        mt: 3,
        required: false,
        children: function children(_ref14) {
          var field = _ref14.field;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_StyledTextarea__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, _objectSpread({
            "data-cy": "create-pending-contribution-memo"
          }, field));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
        mt: 3,
        flexWrap: "wrap",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(Field, {
          name: "amount.valueInCents",
          htmlFor: "CreatePendingContribution-amount",
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
            id: "Fields.amount",
            defaultMessage: [{
              "type": 0,
              "value": "Amount"
            }]
          }),
          required: true,
          flex: "1 1",
          children: function children(_ref15) {
            var form = _ref15.form,
                field = _ref15.field;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_StyledInputAmount__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
              id: field.id,
              "data-cy": "create-pending-contribution-amount",
              currency: currency,
              placeholder: "0.00",
              error: field.error,
              value: field.value,
              maxWidth: "100%",
              onChange: function onChange(value) {
                return form.setFieldValue(field.name, value);
              },
              onBlur: function onBlur() {
                return form.setFieldTouched(field.name, true);
              },
              currencyDisplay: undefined,
              min: undefined,
              max: undefined,
              precision: undefined,
              defaultValue: undefined,
              isEmpty: undefined,
              hasCurrencyPicker: undefined,
              onCurrencyChange: undefined,
              availableCurrencies: undefined
            });
          }
        }), ( true) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(Field, {
          name: "hostFeePercent",
          htmlFor: "CreatePendingContribution-hostFeePercent",
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)("span", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
              id: "NJsELs",
              defaultMessage: [{
                "type": 0,
                "value": "Host Fee"
              }]
            }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_StyledTooltip__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
              content: function content() {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
                  id: "AddFundsModal.hostFee.tooltip",
                  defaultMessage: [{
                    "type": 0,
                    "value": "The default host fee percentage is set up in your host settings. The host fee is charged by the fiscal host to the collectives for the financial services provided."
                  }]
                });
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_41__/* .InfoCircle */ .Z, {
                size: 16
              })
            })]
          }),
          ml: 3,
          required: false,
          children: function children(_ref16) {
            var form = _ref16.form,
                field = _ref16.field;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_StyledInputPercentage__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
              id: field.id,
              placeholder: hostFeePercent,
              value: field.value,
              error: field.error,
              onChange: function onChange(value) {
                return form.setFieldValue(field.name, value);
              },
              onBlur: function onBlur() {
                return form.setFieldTouched(field.name, true);
              },
              maxWidth: "100%"
            });
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(Field, {
        name: "expectedAt",
        htmlFor: "CreatePendingContribution-expectedAt",
        mt: 3,
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
          id: "Fields.expectedAt",
          defaultMessage: [{
            "type": 0,
            "value": "When are these funds expected to arrive?"
          }]
        }),
        hint: values.expectedAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
          id: "Fields.expectedAt.date",
          defaultMessage: [{
            "type": 0,
            "value": "Around "
          }, {
            "type": 1,
            "value": "date"
          }],
          values: {
            date: dayjs__WEBPACK_IMPORTED_MODULE_10___default()(values.expectedAt).format('DD/MM/YYYY')
          }
        }),
        required: true,
        children: function children(_ref17) {
          var form = _ref17.form,
              field = _ref17.field;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_StyledSelect__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP, {
            inputId: field.id,
            "data-cy": "create-pending-contribution-expectedAt",
            error: field.error,
            onBlur: function onBlur() {
              return form.setFieldTouched(field.name, true);
            },
            onChange: function onChange(_ref18) {
              var value = _ref18.value;
              return form.setFieldValue(field.name, value);
            },
            options: expectedAtOptions,
            value: expectedAtOptions.find(function (option) {
              return dayjs__WEBPACK_IMPORTED_MODULE_10___default()(values.expectedAt).isSame(option.value);
            })
          });
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(Field, {
        name: "paymentMethod",
        htmlFor: "CreatePendingContribution-.paymentMethod",
        mt: 3,
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
          id: "Fields.paymentMethod",
          defaultMessage: [{
            "type": 0,
            "value": "Payment method"
          }]
        }),
        required: false,
        children: function children(_ref19) {
          var form = _ref19.form,
              field = _ref19.field;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_StyledSelect__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP, {
            inputId: field.id,
            "data-cy": "create-pending-contribution-.paymentMethod",
            error: field.error,
            onBlur: function onBlur() {
              return form.setFieldTouched(field.name, true);
            },
            onChange: function onChange(_ref20) {
              var value = _ref20.value;
              return form.setFieldValue(field.name, value);
            },
            options: paymentMethodOptions,
            value: paymentMethodOptions.find(function (option) {
              return option.value === values.paymentMethod;
            })
          });
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(Field, {
        name: "description",
        htmlFor: "CreatePendingContribution-description",
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
          id: "Fields.description",
          defaultMessage: [{
            "type": 0,
            "value": "Description"
          }]
        }),
        mt: 3,
        required: false,
        children: function children(_ref21) {
          var field = _ref21.field;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_StyledInput__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
            "data-cy": "create-pending-contribution-description"
          }, field), {}, {
            placeholder: values.toAccount && "Financial contribution to ".concat(values.toAccount.name)
          }));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_32__.P, {
        fontSize: "14px",
        lineHeight: "17px",
        fontWeight: "500",
        mt: 4,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
          id: "Details",
          defaultMessage: [{
            "type": 0,
            "value": "Details"
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_StyledHr__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
        my: 2,
        borderColor: "black.300"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(AmountDetailsLine, {
        value: ((_values$amount2 = values.amount) === null || _values$amount2 === void 0 ? void 0 : _values$amount2.valueInCents) || 0,
        currency: currency,
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
          id: "AddFundsModal.fundingAmount",
          defaultMessage: [{
            "type": 0,
            "value": "Funding amount"
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(AmountDetailsLine, {
        value: hostFee || 0,
        currency: currency,
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
          id: "AddFundsModal.hostFees",
          defaultMessage: [{
            "type": 0,
            "value": "Host fee charged to collective ("
          }, {
            "type": 1,
            "value": "hostFees"
          }, {
            "type": 0,
            "value": ")"
          }],
          values: {
            hostFees: "".concat(values.hostFeePercent, "%")
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_StyledHr__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
        my: 2,
        borderColor: "black.300"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(AmountDetailsLine, {
        value: ((_values$amount3 = values.amount) === null || _values$amount3 === void 0 ? void 0 : _values$amount3.valueInCents) - hostFee || 0,
        currency: currency,
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
          id: "AddFundsModal.netAmount",
          defaultMessage: [{
            "type": 0,
            "value": "Net amount received by collective"
          }]
        }),
        isLargeAmount: true
      }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
        error: error,
        mt: 3,
        fontSize: "13px"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_StyledModal__WEBPACK_IMPORTED_MODULE_28__/* .ModalFooter */ .mz, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
        justifyContent: "space-between",
        flexWrap: "wrap",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          mx: 2,
          mb: 1,
          minWidth: 100,
          onClick: onClose,
          type: "button",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
            id: "actions.cancel",
            defaultMessage: [{
              "type": 0,
              "value": "Cancel"
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          type: "submit",
          "data-cy": "create-pending-contribution-submit-btn",
          buttonStyle: "primary",
          mx: 2,
          mb: 1,
          minWidth: 120,
          loading: isSubmitting,
          children: edit ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
            id: "dIbvMd",
            defaultMessage: [{
              "type": 0,
              "value": "Edit pending contribution"
            }]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
            id: "qISY+c",
            defaultMessage: [{
              "type": 0,
              "value": "Create pending contribution"
            }]
          })
        })]
      })
    })]
  });
};

var CreatePendingContributionModal = function CreatePendingContributionModal(_ref22) {
  var _edit$pendingContribu2, _edit$pendingContribu3, _edit$pendingContribu4, _edit$pendingContribu5, _edit$pendingContribu6;

  var _host = _ref22.host,
      edit = _ref22.edit,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref22, _excluded);

  var _useLoggedInUser = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(),
      LoggedInUser = _useLoggedInUser.LoggedInUser;

  var _useToasts = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_33__/* .useToasts */ .e1)(),
      addToast = _useToasts.addToast;

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_40__.useQuery)(createPendingContributionModalQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__/* .API_V2_CONTEXT */ .T,
    variables: {
      slug: _host.slug
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading;

  var host = data === null || data === void 0 ? void 0 : data.host;

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_40__.useMutation)(createPendingContributionMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__/* .API_V2_CONTEXT */ .T
  }),
      _useMutation2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useMutation, 2),
      createPendingOrder = _useMutation2[0],
      createOrderError = _useMutation2[1].error;

  var _useMutation3 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_40__.useMutation)(editPendingContributionMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__/* .API_V2_CONTEXT */ .T
  }),
      _useMutation4 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useMutation3, 2),
      editPendingOrder = _useMutation4[0],
      editOrderError = _useMutation4[1].error; // No modal if logged-out


  if (!LoggedInUser) {
    return null;
  }

  var handleClose = function handleClose() {
    props.onClose();
  };

  var initialValues = edit ? _objectSpread(_objectSpread({}, edit), {}, {
    fromAccountInfo: (_edit$pendingContribu2 = edit.pendingContributionData) === null || _edit$pendingContribu2 === void 0 ? void 0 : _edit$pendingContribu2.fromAccountInfo,
    expectedAt: (_edit$pendingContribu3 = edit.pendingContributionData) === null || _edit$pendingContribu3 === void 0 ? void 0 : _edit$pendingContribu3.expectedAt,
    ponumber: (_edit$pendingContribu4 = edit.pendingContributionData) === null || _edit$pendingContribu4 === void 0 ? void 0 : _edit$pendingContribu4.ponumber,
    memo: (_edit$pendingContribu5 = edit.pendingContributionData) === null || _edit$pendingContribu5 === void 0 ? void 0 : _edit$pendingContribu5.memo,
    paymentMethod: (_edit$pendingContribu6 = edit.pendingContributionData) === null || _edit$pendingContribu6 === void 0 ? void 0 : _edit$pendingContribu6.paymentMethod
  }) : {
    hostFeePercent: host === null || host === void 0 ? void 0 : host.hostFeePercent
  };
  var error = createOrderError || editOrderError;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(CreatePendingContributionModalContainer, _objectSpread(_objectSpread({}, props), {}, {
    trapFocus: true,
    onClose: handleClose,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_StyledModal__WEBPACK_IMPORTED_MODULE_28__/* .ModalHeader */ .xB, {
      children: edit ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
        id: "sMnp2d",
        defaultMessage: [{
          "type": 0,
          "value": "Edit Pending Contribution #"
        }, {
          "type": 1,
          "value": "id"
        }],
        values: {
          id: edit.legacyId
        }
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
        id: "1i8Ufu",
        defaultMessage: [{
          "type": 0,
          "value": "Create Pending Contribution"
        }]
      })
    }), loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
      mt: 2,
      height: 200
    }) : (0,_lib_policies__WEBPACK_IMPORTED_MODULE_42__/* .require2FAForAdmins */ .u)(host) && !LoggedInUser.hasTwoFactorAuth ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(_TwoFactorAuthRequiredMessage__WEBPACK_IMPORTED_MODULE_34__/* .TwoFactorAuthRequiredMessage */ .l, {
      borderWidth: 0,
      noTitle: true
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(formik__WEBPACK_IMPORTED_MODULE_11__/* .Formik */ .J9, {
      initialValues: initialValues,
      enableReinitialize: true,
      validate: validate,
      onSubmit: /*#__PURE__*/function () {
        var _ref23 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee(values) {
          var _props$onSuccess;

          var order, result, _order, _result;

          return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!edit) {
                    _context.next = 8;
                    break;
                  }

                  order = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_15__/* .omitDeep */ .Cd)(_objectSpread(_objectSpread({
                    id: edit.id
                  }, lodash_pick__WEBPACK_IMPORTED_MODULE_6___default()(values, EDITABLE_FIELDS)), {}, {
                    fromAccount: buildAccountReference(values.fromAccount),
                    tier: !values.tier ? null : {
                      id: values.tier.id
                    },
                    expectedAt: values.expectedAt ? dayjs__WEBPACK_IMPORTED_MODULE_10___default()(values.expectedAt).format() : null
                  }), ['__typename']);
                  _context.next = 4;
                  return editPendingOrder({
                    variables: {
                      order: order
                    }
                  });

                case 4:
                  result = _context.sent;
                  addToast({
                    type: _ToastProvider__WEBPACK_IMPORTED_MODULE_33__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
                    message: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
                      id: "tUgAsm",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Pending order #"
                      }, {
                        "type": 1,
                        "value": "orderId"
                      }, {
                        "type": 0,
                        "value": " updated"
                      }],
                      values: {
                        orderId: result.data.editPendingOrder.legacyId
                      }
                    })
                  });
                  _context.next = 13;
                  break;

                case 8:
                  _order = _objectSpread(_objectSpread({}, values), {}, {
                    fromAccount: buildAccountReference(values.fromAccount),
                    toAccount: values.childAccount ? buildAccountReference(values.childAccount) : buildAccountReference(values.toAccount),
                    childAccount: undefined,
                    tier: !values.tier ? null : {
                      id: values.tier.id
                    },
                    expectedAt: values.expectedAt ? dayjs__WEBPACK_IMPORTED_MODULE_10___default()(values.expectedAt).format() : null
                  });
                  _context.next = 11;
                  return createPendingOrder({
                    variables: {
                      order: _order
                    }
                  });

                case 11:
                  _result = _context.sent;
                  addToast({
                    type: _ToastProvider__WEBPACK_IMPORTED_MODULE_33__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
                    message: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
                      id: "JssJhj",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Pending order created with reference #"
                      }, {
                        "type": 1,
                        "value": "orderId"
                      }],
                      values: {
                        orderId: _result.data.createPendingOrder.legacyId
                      }
                    })
                  });

                case 13:
                  props === null || props === void 0 ? void 0 : (_props$onSuccess = props.onSuccess) === null || _props$onSuccess === void 0 ? void 0 : _props$onSuccess.call(props);
                  handleClose();

                case 15:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref23.apply(this, arguments);
        };
      }(),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx)(CreatePendingContributionForm, {
        host: host,
        onClose: handleClose,
        loading: loading,
        error: error,
        edit: edit
      })
    })]
  }));
};

CreatePendingContributionModal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreatePendingContributionModal",
  "props": {
    "host": {
      "required": true,
      "tsType": {
        "name": "CreatePendingContributionModalQuery['host']",
        "raw": "CreatePendingContributionModalQuery['host']"
      },
      "description": ""
    },
    "edit": {
      "required": false,
      "tsType": {
        "name": "Partial",
        "elements": [{
          "name": "OrderPageQuery['order']",
          "raw": "OrderPageQuery['order']"
        }],
        "raw": "Partial<OrderPageQuery['order']>"
      },
      "description": ""
    },
    "onClose": {
      "required": true,
      "tsType": {
        "name": "signature",
        "type": "function",
        "raw": "() => void",
        "signature": {
          "arguments": [],
          "return": {
            "name": "void"
          }
        }
      },
      "description": ""
    },
    "onSuccess": {
      "required": false,
      "tsType": {
        "name": "signature",
        "type": "function",
        "raw": "() => void",
        "signature": {
          "arguments": [],
          "return": {
            "name": "void"
          }
        }
      },
      "description": ""
    },
    "loading": {
      "required": false,
      "tsType": {
        "name": "boolean"
      },
      "description": ""
    },
    "error": {
      "required": false,
      "tsType": {
        "name": "any"
      },
      "description": ""
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (CreatePendingContributionModal);

/***/ }),

/***/ 5455:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86896);
/* harmony import */ var _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24317);
/* harmony import */ var _lib_i18n_order_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(732);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36422);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85893);


var _excluded = ["status"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








var getTagType = function getTagType(status) {
  if ([_lib_constants_order_status__WEBPACK_IMPORTED_MODULE_3__/* .ORDER_STATUS.ERROR */ .D.ERROR, _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_3__/* .ORDER_STATUS.EXPIRED */ .D.EXPIRED, _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_3__/* .ORDER_STATUS.CANCELLED */ .D.CANCELLED, _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_3__/* .ORDER_STATUS.REJECTED */ .D.REJECTED, _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_3__/* .ORDER_STATUS.DISPUTED */ .D.DISPUTED, _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_3__/* .ORDER_STATUS.IN_REVIEW */ .D.IN_REVIEW].includes(status)) {
    return 'error';
  } else if ([_lib_constants_order_status__WEBPACK_IMPORTED_MODULE_3__/* .ORDER_STATUS.ACTIVE */ .D.ACTIVE, _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_3__/* .ORDER_STATUS.PAID */ .D.PAID].includes(status)) {
    return 'success';
  } else {
    return 'info';
  }
};

var OrderStatusTag = function OrderStatusTag(_ref) {
  var status = _ref.status,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_StyledTag__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    type: getTagType(status),
    fontWeight: "600",
    letterSpacing: "0.8px",
    textTransform: "uppercase",
    "data-cy": "order-status-msg",
    fontSize: "10px"
  }, props), {}, {
    children: (0,_lib_i18n_order_status__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(intl, status)
  }));
};

OrderStatusTag.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OrderStatusTag",
  "props": {
    "status": {
      "description": "",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "Object.values(ORDER_STATUS)"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (OrderStatusTag);

/***/ }),

/***/ 16120:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ orders_ProcessOrderButtons; },
  "H": function() { return /* binding */ hasProcessButtons; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__(46829);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-solid/Check/Check.esm.js
var Check_esm = __webpack_require__(46336);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-solid/Times/Times.esm.js
var Times_esm = __webpack_require__(74684);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./lib/errors/index.js + 1 modules
var errors = __webpack_require__(12136);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./components/ConfirmationModal.js
var ConfirmationModal = __webpack_require__(47988);
// EXTERNAL MODULE: ./node_modules/@styled-icons/boxicons-regular/InfoCircle/InfoCircle.esm.js
var InfoCircle_esm = __webpack_require__(95612);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(97079);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/FormattedMoneyAmount.js
var FormattedMoneyAmount = __webpack_require__(27596);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledHr.tsx
var StyledHr = __webpack_require__(173);
// EXTERNAL MODULE: ./components/StyledInput.tsx
var StyledInput = __webpack_require__(97274);
// EXTERNAL MODULE: ./components/StyledInputAmount.js
var StyledInputAmount = __webpack_require__(54029);
// EXTERNAL MODULE: ./components/StyledInputPercentage.js
var StyledInputPercentage = __webpack_require__(69931);
// EXTERNAL MODULE: ./components/StyledModal.tsx
var StyledModal = __webpack_require__(71792);
// EXTERNAL MODULE: ./components/StyledTooltip.js
var StyledTooltip = __webpack_require__(88609);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/ToastProvider.tsx
var ToastProvider = __webpack_require__(31330);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/ContributionConfirmationModal.js




var _templateObject;























var confirmContributionMutation = (0,lib/* default */.ZP)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  mutation ConfirmContribution($order: OrderUpdateInput!, $action: ProcessOrderAction!) {\n    processPendingOrder(order: $order, action: $action) {\n      id\n      status\n      permissions {\n        id\n        canMarkAsPaid\n        canMarkAsExpired\n      }\n      amount {\n        currency\n        valueInCents\n      }\n      platformTipAmount {\n        currency\n        valueInCents\n      }\n    }\n  }\n"])));

var ContributionConfirmationModal = function ContributionConfirmationModal(_ref) {
  var _order$platformTipAmo;

  var order = _ref.order,
      onClose = _ref.onClose,
      onSuccess = _ref.onSuccess;
  var defaultHostFeePercent = order.hostFeePercent || order.toAccount.bankTransfersHostFeePercent;
  var platformTipAmount = ((_order$platformTipAmo = order.platformTipAmount) === null || _order$platformTipAmo === void 0 ? void 0 : _order$platformTipAmo.valueInCents) || 0;
  var amountInitiated = order.amount.valueInCents + platformTipAmount;
  var currency = order.amount.currency;

  var _useState = (0,react.useState)(amountInitiated),
      amountReceived = _useState[0],
      setAmountReceived = _useState[1];

  var _useState2 = (0,react.useState)(platformTipAmount),
      platformTip = _useState2[0],
      setPlatformTip = _useState2[1];

  var _useState3 = (0,react.useState)(0),
      paymentProcessorFee = _useState3[0],
      setPaymentProcessorFee = _useState3[1];

  var _useState4 = (0,react.useState)(defaultHostFeePercent),
      hostFeePercent = _useState4[0],
      setHostFeePercent = _useState4[1];

  var _useState5 = (0,react.useState)((0,utils/* getCurrentDateInUTC */.qo)()),
      processedAt = _useState5[0],
      setProcessedAt = _useState5[1];

  var intl = (0,useIntl/* default */.Z)();

  var _useToasts = (0,ToastProvider/* useToasts */.e1)(),
      addToast = _useToasts.addToast;

  var _useMutation = (0,client.useMutation)(confirmContributionMutation, {
    context: helpers/* API_V2_CONTEXT */.T
  }),
      _useMutation2 = slicedToArray_default()(_useMutation, 2),
      confirmOrder = _useMutation2[0],
      loading = _useMutation2[1].loading;

  var amount = amountReceived - platformTip;
  var hostFee = Math.round(amount * hostFeePercent) / 100;
  var netAmount = amount - paymentProcessorFee - hostFee;
  var canAddHostFee = !order.toAccount.isHost;

  var triggerAction = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var _order$platformTipAmo2;

      var orderUpdate;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!loading) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              orderUpdate = {
                id: order.id
              };

              if (amount !== order.amount.valueInCents) {
                orderUpdate.amount = {
                  valueInCents: amount,
                  currency: currency
                };
              }

              if (paymentProcessorFee !== 0) {
                orderUpdate.paymentProcessorFee = {
                  valueInCents: paymentProcessorFee,
                  currency: currency
                };
              }

              if (platformTip !== ((_order$platformTipAmo2 = order.platformTipAmount) === null || _order$platformTipAmo2 === void 0 ? void 0 : _order$platformTipAmo2.valueInCents)) {
                orderUpdate.platformTip = {
                  valueInCents: platformTip,
                  currency: currency
                };
              }

              if (defaultHostFeePercent !== hostFeePercent) {
                orderUpdate.hostFeePercent = hostFeePercent;
              }

              if (processedAt) {
                orderUpdate.processedAt = new Date(processedAt);
              }

              _context.prev = 8;
              _context.next = 11;
              return confirmOrder({
                variables: {
                  order: orderUpdate,
                  action: 'MARK_AS_PAID'
                }
              });

            case 11:
              addToast({
                type: ToastProvider/* TOAST_TYPE.SUCCESS */["do"].SUCCESS,
                message: intl.formatMessage({
                  id: "76o3Hn",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Order confirmed successfully"
                  }]
                })
              });
              onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess();
              onClose();
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](8);
              addToast({
                type: ToastProvider/* TOAST_TYPE.ERROR */["do"].ERROR,
                message: (0,errors/* i18nGraphqlException */.t2)(intl, _context.t0)
              });

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[8, 16]]);
    }));

    return function triggerAction() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledModal/* default */.ZP, {
    width: "578px",
    onClose: onClose,
    trapFocus: true,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* CollectiveModalHeader */.I4, {
      collective: order.toAccount,
      customText: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "nvYvGO",
        defaultMessage: [{
          "type": 0,
          "value": "Confirm contribution to "
        }, {
          "type": 1,
          "value": "payee"
        }],
        values: {
          payee: order.toAccount.name
        }
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledModal/* ModalBody */.fe, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        mt: 3,
        fontSize: "13px",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "o9RoEi",
          defaultMessage: [{
            "type": 0,
            "value": "Confirm the amount of funds you have received in your host account."
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
        mt: 4,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          justifyContent: "space-between",
          alignItems: ['left', 'center'],
          flexDirection: ['column', 'row'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "700",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "aQgOGz",
              defaultMessage: [{
                "type": 0,
                "value": "Amount initiated by "
              }, {
                "type": 1,
                "value": "contributor"
              }],
              values: {
                contributor: order.fromAccount.name
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "700",
            mt: ['8px', 0],
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
              width: "142px",
              amount: amountInitiated,
              currency: currency,
              precision: 2,
              amountStyles: null
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
        borderStyle: "solid",
        mt: "16px",
        mb: "16px"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          justifyContent: "space-between",
          alignItems: ['left', 'center'],
          flexDirection: ['column', 'row'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "u6JRVj",
              defaultMessage: [{
                "type": 0,
                "value": "Amount received"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputAmount/* default */.Z, {
            name: "amountReceived",
            "data-cy": "amount-received",
            width: "142px",
            currency: currency,
            onChange: function onChange(value) {
              return setAmountReceived(value);
            },
            value: amountReceived
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
        borderStyle: "dashed",
        mt: "16px",
        mb: "16px"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          justifyContent: "space-between",
          alignItems: ['left', 'center'],
          flexDirection: ['column', 'row'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "contribution.paymentFee",
              defaultMessage: [{
                "type": 0,
                "value": "Payment processor fee"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputAmount/* default */.Z, {
            name: "paymentProcessorFee",
            "data-cy": "payment-processor-fee",
            width: "142px",
            currency: currency,
            onChange: function onChange(value) {
              return setPaymentProcessorFee(value);
            },
            value: paymentProcessorFee
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
        borderStyle: "dashed",
        mt: "16px",
        mb: "16px"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          justifyContent: "space-between",
          alignItems: ['left', 'center'],
          flexDirection: ['column', 'row'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "Ng5BqM",
              defaultMessage: [{
                "type": 0,
                "value": "Platform tip amount"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputAmount/* default */.Z, {
            name: "platformTip",
            "data-cy": "platform-tip",
            width: "142px",
            currency: currency,
            onChange: function onChange(value) {
              return setPlatformTip(value);
            },
            value: platformTip
          })]
        })
      }), canAddHostFee && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
          borderStyle: "dashed",
          mt: "16px",
          mb: "16px"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            justifyContent: "space-between",
            alignItems: ['left', 'center'],
            flexDirection: ['column', 'row'],
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "400",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "HostFee",
                defaultMessage: [{
                  "type": 0,
                  "value": "Host fee"
                }]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputPercentage/* default */.Z, {
              name: "hostFeePercent",
              "data-cy": "host-fee-percent",
              value: hostFeePercent,
              onChange: function onChange(value) {
                return setHostFeePercent(value);
              }
            })]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
        borderStyle: "dashed",
        mt: "16px",
        mb: "16px"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          justifyContent: "space-between",
          alignItems: ['left', 'center'],
          flexDirection: ['column', 'row'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "expense.incurredAt",
                defaultMessage: [{
                  "type": 0,
                  "value": "Date"
                }]
              }), " ", /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTooltip/* default */.Z, {
                content: function content() {
                  return /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "mqg/wj",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Date the funds were received."
                    }]
                  });
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(InfoCircle_esm/* InfoCircle */.Z, {
                  size: 16
                })
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, {
            name: "processedAt",
            type: "date",
            "data-cy": "processedAt",
            defaultValue: processedAt,
            onChange: function onChange(e) {
              return setProcessedAt(e.target.value);
            }
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
        borderStyle: "dashed",
        mt: "16px",
        mb: "16px"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          justifyContent: ['center', 'right'],
          alignItems: "center",
          flexWrap: ['wrap', 'nowrap'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "500",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "btq6d3",
              defaultMessage: [{
                "type": 0,
                "value": "Amount for "
              }, {
                "type": 1,
                "value": "collective"
              }, {
                "type": 0,
                "value": ":"
              }],
              values: {
                collective: order.toAccount.name
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "700",
            ml: "16px",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
              amount: amount,
              currency: currency,
              precision: 2,
              amountStyles: null
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
        borderStyle: "dashed",
        mt: "16px",
        mb: "16px"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          justifyContent: ['center', 'right'],
          alignItems: "center",
          flexWrap: ['wrap', 'nowrap'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
            fontSize: "12px",
            lineHeight: "20px",
            fontWeight: "500",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "ll2h1q",
              defaultMessage: [{
                "type": 0,
                "value": "Payment Processor Fee:"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            fontSize: "14px",
            lineHeight: "24px",
            fontWeight: "700",
            ml: "16px",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
              amount: paymentProcessorFee,
              currency: currency,
              precision: 2,
              amountStyles: null
            })
          })]
        }), canAddHostFee && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          justifyContent: ['center', 'right'],
          alignItems: "center",
          flexWrap: ['wrap', 'nowrap'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
            fontSize: "12px",
            lineHeight: "20px",
            fontWeight: "500",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "X9OWwg",
              defaultMessage: [{
                "type": 0,
                "value": "Host Fee:"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            fontSize: "14px",
            lineHeight: "24px",
            fontWeight: "700",
            ml: "16px",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
              amount: hostFee,
              currency: currency,
              precision: 2,
              amountStyles: null
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          justifyContent: ['center', 'right'],
          alignItems: "center",
          flexWrap: ['wrap', 'nowrap'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
            fontSize: "12px",
            lineHeight: "20px",
            fontWeight: "500",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "KItvFZ",
              defaultMessage: [{
                "type": 0,
                "value": "Net Amount for "
              }, {
                "type": 1,
                "value": "collective"
              }, {
                "type": 0,
                "value": ":"
              }],
              values: {
                collective: order.toAccount.name
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            fontSize: "14px",
            lineHeight: "24px",
            fontWeight: "700",
            ml: "16px",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
              amount: netAmount,
              currency: currency,
              precision: 2,
              amountStyles: null
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalFooter */.mz, {
      isFullWidth: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        display: "flex",
        justifyContent: ['center', 'flex-end'],
        flexWrap: "Wrap",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
          buttonStyle: "secondary",
          onClick: onClose,
          mr: [0, '16px'],
          mb: ['16px', 0],
          minWidth: ['268px', 0],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "actions.cancel",
            defaultMessage: [{
              "type": 0,
              "value": "Cancel"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
          minWidth: 240,
          buttonStyle: "primary",
          type: "submit",
          onClick: function onClick() {
            return triggerAction();
          },
          "data-cy": "order-confirmation-modal-submit",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "k/uy+b",
            defaultMessage: [{
              "type": 0,
              "value": "Confirm contribution"
            }]
          })
        })]
      })
    })]
  });
};

ContributionConfirmationModal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ContributionConfirmationModal",
  "props": {
    "order": {
      "description": "the order that is being confirmed",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "onClose": {
      "description": "handles how the modal is closed",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "onSuccess": {
      "description": "Called if the action request is successfull",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_ContributionConfirmationModal = (ContributionConfirmationModal);
;// CONCATENATED MODULE: ./components/orders/ProcessOrderButtons.js





var ProcessOrderButtons_templateObject;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
















var processPendingOrderMutation = (0,lib/* default */.ZP)(ProcessOrderButtons_templateObject || (ProcessOrderButtons_templateObject = taggedTemplateLiteral_default()(["\n  mutation ProcessPendingOrder($id: String!, $action: ProcessOrderAction!) {\n    processPendingOrder(order: { id: $id }, action: $action) {\n      id\n      status\n      permissions {\n        id\n        canMarkAsPaid\n        canMarkAsExpired\n      }\n    }\n  }\n"])));
var ButtonLabel = styled_components_browser_esm/* default.span.withConfig */.ZP.span.withConfig({
  displayName: "ProcessOrderButtons__ButtonLabel",
  componentId: "sc-nmqw8x-0"
})({
  marginLeft: 6
});
var usablePermissions = ['canMarkAsPaid', 'canMarkAsExpired'];
/**
 * A small helper to know if expense process buttons should be displayed
 */

var hasProcessButtons = function hasProcessButtons(permissions) {
  return Object.keys(permissions).some(function (permission) {
    return usablePermissions.includes(permission) && Boolean(permissions[permission]);
  });
};
/**
 * All the buttons to process an expense, displayed in a React.Fragment to let the parent
 * in charge of the layout.
 */

var ProcessOrderButtons = function ProcessOrderButtons(_ref) {
  var order = _ref.order,
      permissions = _ref.permissions,
      onSuccess = _ref.onSuccess;
  var intl = (0,useIntl/* default */.Z)();

  var _useToasts = (0,ToastProvider/* useToasts */.e1)(),
      addToast = _useToasts.addToast;

  var _React$useState = react.useState(null),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      selectedAction = _React$useState2[0],
      setSelectedAction = _React$useState2[1];

  var mutationOptions = {
    context: helpers/* API_V2_CONTEXT */.T
  };

  var _useMutation = (0,client.useMutation)(processPendingOrderMutation, mutationOptions),
      _useMutation2 = slicedToArray_default()(_useMutation, 2),
      processOrder = _useMutation2[0],
      loading = _useMutation2[1].loading;

  var _React$useState3 = react.useState(false),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      hasConfirm = _React$useState4[0],
      setConfirm = _React$useState4[1];

  var _React$useState5 = react.useState(false),
      _React$useState6 = slicedToArray_default()(_React$useState5, 2),
      showContributionConfirmationModal = _React$useState6[0],
      setShowContributionConfirmationModal = _React$useState6[1];

  var triggerAction = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(action) {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!loading) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              setSelectedAction(action);
              setConfirm(false);
              _context.prev = 4;
              _context.next = 7;
              return processOrder({
                variables: {
                  id: order.id,
                  action: action
                }
              });

            case 7:
              onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess();
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](4);
              addToast({
                type: ToastProvider/* TOAST_TYPE.ERROR */["do"].ERROR,
                message: (0,errors/* i18nGraphqlException */.t2)(intl, _context.t0)
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 10]]);
    }));

    return function triggerAction(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getButtonProps = function getButtonProps(action) {
    var isSelectedAction = selectedAction === action;
    return {
      'data-cy': "".concat(action, "-button"),
      buttonSize: 'tiny',
      minWidth: 130,
      mx: 2,
      mt: 2,
      py: '9px',
      disabled: loading && !isSelectedAction,
      loading: loading && isSelectedAction,
      onClick: function onClick() {
        setSelectedAction(action);
        setConfirm(true);
      }
    };
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [permissions.canMarkAsPaid && /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, _objectSpread(_objectSpread({}, getButtonProps('MARK_AS_PAID')), {}, {
      onClick: function onClick() {
        return setShowContributionConfirmationModal(true);
      },
      buttonStyle: "successSecondary",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Check_esm/* Check */.J, {
        size: 12
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ButtonLabel, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "order.markAsCompleted",
          defaultMessage: [{
            "type": 0,
            "value": "Mark as completed"
          }]
        })
      })]
    })), permissions.canMarkAsExpired && /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, _objectSpread(_objectSpread({}, getButtonProps('MARK_AS_EXPIRED')), {}, {
      buttonStyle: "dangerSecondary",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Times_esm/* Times */.u, {
        size: 14
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ButtonLabel, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "order.markAsExpired",
          defaultMessage: [{
            "type": 0,
            "value": "Mark as expired"
          }]
        })
      })]
    })), hasConfirm && /*#__PURE__*/(0,jsx_runtime.jsxs)(ConfirmationModal/* default */.Z, {
      onClose: function onClose() {
        return setConfirm(false);
      },
      continueHandler: function continueHandler() {
        return triggerAction(selectedAction);
      },
      isDanger: selectedAction === 'MARK_AS_EXPIRED',
      isSuccess: selectedAction === 'MARK_AS_PAID',
      continueLabel: selectedAction === 'MARK_AS_EXPIRED' ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "order.markAsExpired",
        defaultMessage: [{
          "type": 0,
          "value": "Mark as expired"
        }]
      }) : undefined,
      header: selectedAction === 'MARK_AS_PAID' ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "Order.MarkPaidConfirm",
        defaultMessage: [{
          "type": 0,
          "value": "Mark this order as paid?"
        }]
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "Order.MarkExpiredConfirm",
        defaultMessage: [{
          "type": 0,
          "value": "Mark this order as expired?"
        }]
      }),
      children: [selectedAction === 'MARK_AS_PAID' && /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "Order.MarkPaidConfirmDetails",
        defaultMessage: [{
          "type": 0,
          "value": "Confirm you have received the funds for this contribution."
        }]
      }), selectedAction === 'MARK_AS_EXPIRED' && /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "Order.MarkPaidExpiredDetails",
        defaultMessage: [{
          "type": 0,
          "value": "This contribution will be marked as expired removed from Pending Contributions. You can find this page by searching for its ID in the search bar or through the status filter in the Financial Contributions page."
        }]
      })]
    }), showContributionConfirmationModal && /*#__PURE__*/(0,jsx_runtime.jsx)(components_ContributionConfirmationModal, {
      order: order,
      onClose: function onClose() {
        return setShowContributionConfirmationModal(false);
      },
      onSuccess: onSuccess
    })]
  });
};

ProcessOrderButtons.__docgenInfo = {
  "description": "All the buttons to process an expense, displayed in a React.Fragment to let the parent\nin charge of the layout.",
  "methods": [],
  "displayName": "ProcessOrderButtons",
  "props": {
    "permissions": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "canMarkAsExpired": {
            "name": "bool",
            "required": false
          },
          "canMarkAsPaid": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": true
    },
    "order": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "legacyId": {
            "name": "number",
            "required": false
          },
          "paymentMethod": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": true
    },
    "onError": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onSuccess": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ var orders_ProcessOrderButtons = (ProcessOrderButtons);

/***/ }),

/***/ 1059:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": function() { return /* binding */ i18nPaymentMethodProviderType; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59448);
/* harmony import */ var _constants_payment_methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1808);


var _defineMessages;

 // TODO(paymentMethodType): migrate to service+type


var i18nTypes = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)((_defineMessages = {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_payment_methods__WEBPACK_IMPORTED_MODULE_1__/* .GQLV2_PAYMENT_METHOD_LEGACY_TYPES.CREDIT_CARD */ .oy.CREDIT_CARD, {
  id: "CreditCard",
  defaultMessage: [{
    "type": 0,
    "value": "Credit Card"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_payment_methods__WEBPACK_IMPORTED_MODULE_1__/* .GQLV2_PAYMENT_METHOD_LEGACY_TYPES.BANK_TRANSFER */ .oy.BANK_TRANSFER, {
  id: "Manual",
  defaultMessage: [{
    "type": 0,
    "value": "Manual (Bank Transfer)"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_payment_methods__WEBPACK_IMPORTED_MODULE_1__/* .GQLV2_PAYMENT_METHOD_LEGACY_TYPES.GIFT_CARD */ .oy.GIFT_CARD, {
  id: "GiftCard",
  defaultMessage: [{
    "type": 0,
    "value": "Gift Card"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_payment_methods__WEBPACK_IMPORTED_MODULE_1__/* .GQLV2_PAYMENT_METHOD_LEGACY_TYPES.PREPAID_BUDGET */ .oy.PREPAID_BUDGET, {
  id: "Prepaid",
  defaultMessage: [{
    "type": 0,
    "value": "Prepaid Card"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_payment_methods__WEBPACK_IMPORTED_MODULE_1__/* .GQLV2_PAYMENT_METHOD_LEGACY_TYPES.ACCOUNT_BALANCE */ .oy.ACCOUNT_BALANCE, {
  id: "ServiceBalance",
  defaultMessage: [{
    "type": 1,
    "value": "service"
  }, {
    "type": 0,
    "value": " balance"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_payment_methods__WEBPACK_IMPORTED_MODULE_1__/* .GQLV2_PAYMENT_METHOD_LEGACY_TYPES.CRYPTO */ .oy.CRYPTO, {
  id: "Crypto",
  defaultMessage: [{
    "type": 0,
    "value": "Crypto"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, "CHECK", {
  id: "Check",
  defaultMessage: [{
    "type": 0,
    "value": "Check"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, "UNKNOWN", {
  id: "Unknown",
  defaultMessage: [{
    "type": 0,
    "value": "Unknown"
  }]
}), _defineMessages));
/**
 * Similar to ``, but specialized for the GQLV2's `PaymentMethodType`
 * from `paymentMethod.providerType`
 */

var i18nPaymentMethodProviderType = function i18nPaymentMethodProviderType(intl, providerType) {
  if (providerType === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_1__/* .GQLV2_PAYMENT_METHOD_LEGACY_TYPES.PAYPAL */ .oy.PAYPAL) {
    return 'PayPal';
  } else if (i18nTypes[providerType]) {
    return intl.formatMessage(i18nTypes[providerType], {
      service: 'Open Collective'
    });
  } else {
    return providerType;
  }
};

/***/ })

}]);
//# sourceMappingURL=2350-9bd2a7978c3b5c9f.js.map