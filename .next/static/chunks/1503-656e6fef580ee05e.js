"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1503],{

/***/ 27132:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52015);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16678);


var SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"].h2.withConfig */ .ZP.h2.withConfig({
  displayName: "SectionTitle",
  componentId: "sc-5q044q-0"
})(["word-break:break-word;", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_0__/* .color */ .$_, styled_system__WEBPACK_IMPORTED_MODULE_0__/* .display */ .jf, styled_system__WEBPACK_IMPORTED_MODULE_0__/* .space */ .Dh, styled_system__WEBPACK_IMPORTED_MODULE_0__/* .typography */ .cp);
SectionTitle.defaultProps = {
  fontSize: '32px',
  lineHeight: '36px',
  fontWeight: 'normal',
  color: 'black.900',
  mb: 3
};
/* harmony default export */ __webpack_exports__["Z"] = (SectionTitle);

/***/ }),

/***/ 94605:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": function() { return /* binding */ recurring_contributions_RecurringContributionsContainer; }
});

// UNUSED EXPORTS: FILTERS, I18nFilters

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3323);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./lib/constants/order-status.js
var order_status = __webpack_require__(24317);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/Image.js
var Image = __webpack_require__(56562);
// EXTERNAL MODULE: ./components/LoadingPlaceholder.tsx
var LoadingPlaceholder = __webpack_require__(29242);
// EXTERNAL MODULE: ./components/StyledKeyframes.js
var StyledKeyframes = __webpack_require__(29925);
// EXTERNAL MODULE: ./components/StyledSelectFilter.js
var StyledSelectFilter = __webpack_require__(52847);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/UserProvider.js + 2 modules
var UserProvider = __webpack_require__(51927);
// EXTERNAL MODULE: ./node_modules/lodash/isNil.js
var isNil = __webpack_require__(14293);
var isNil_default = /*#__PURE__*/__webpack_require__.n(isNil);
// EXTERNAL MODULE: ./lib/payment_method_label.js
var payment_method_label = __webpack_require__(51515);
// EXTERNAL MODULE: ./lib/payment-method-utils.js
var payment_method_utils = __webpack_require__(91337);
// EXTERNAL MODULE: ./components/Avatar.tsx
var Avatar = __webpack_require__(11194);
// EXTERNAL MODULE: ./components/FormattedMoneyAmount.js
var FormattedMoneyAmount = __webpack_require__(27596);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledCollectiveCard.js
var StyledCollectiveCard = __webpack_require__(41216);
// EXTERNAL MODULE: ./components/StyledTag.js
var StyledTag = __webpack_require__(36422);
// EXTERNAL MODULE: ./components/StyledTooltip.js
var StyledTooltip = __webpack_require__(88609);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var graphql_tag_lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__(46829);
// EXTERNAL MODULE: ./node_modules/@styled-icons/boxicons-regular/CreditCard/CreditCard.esm.js
var CreditCard_esm = __webpack_require__(25022);
// EXTERNAL MODULE: ./node_modules/@styled-icons/boxicons-regular/Dollar/Dollar.esm.js
var Dollar_esm = __webpack_require__(82054);
// EXTERNAL MODULE: ./node_modules/@styled-icons/boxicons-regular/XCircle/XCircle.esm.js
var XCircle_esm = __webpack_require__(38868);
// EXTERNAL MODULE: ./node_modules/@styled-system/theme-get/dist/index.esm.js
var index_esm = __webpack_require__(50056);
// EXTERNAL MODULE: ./lib/errors/index.js + 1 modules
var errors = __webpack_require__(12136);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./components/I18nFormatters.js
var I18nFormatters = __webpack_require__(88705);
// EXTERNAL MODULE: ./components/StyledHr.tsx
var StyledHr = __webpack_require__(173);
// EXTERNAL MODULE: ./components/StyledRadioList.js
var StyledRadioList = __webpack_require__(36718);
// EXTERNAL MODULE: ./components/StyledTextarea.js
var StyledTextarea = __webpack_require__(93150);
// EXTERNAL MODULE: ./components/ToastProvider.tsx
var ToastProvider = __webpack_require__(31330);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7980);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/lodash/startCase.js
var startCase = __webpack_require__(18029);
var startCase_default = /*#__PURE__*/__webpack_require__.n(startCase);
// EXTERNAL MODULE: ./node_modules/lodash/last.js
var last = __webpack_require__(10928);
var last_default = /*#__PURE__*/__webpack_require__.n(last);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/first.js
var first = __webpack_require__(8804);
var first_default = /*#__PURE__*/__webpack_require__.n(first);
// EXTERNAL MODULE: ./lib/constants/intervals.js
var intervals = __webpack_require__(80642);
// EXTERNAL MODULE: ./lib/constants/payment-methods.js
var payment_methods = __webpack_require__(1808);
// EXTERNAL MODULE: ./lib/constants/tiers-types.js
var tiers_types = __webpack_require__(12568);
// EXTERNAL MODULE: ./lib/currency-utils.js
var currency_utils = __webpack_require__(17632);
// EXTERNAL MODULE: ./lib/date-utils.js
var date_utils = __webpack_require__(15078);
// EXTERNAL MODULE: ./lib/tier-utils.js
var tier_utils = __webpack_require__(36648);
// EXTERNAL MODULE: ./components/PayWithPaypalButton.js + 1 modules
var PayWithPaypalButton = __webpack_require__(49160);
// EXTERNAL MODULE: ./components/StyledInputAmount.js
var StyledInputAmount = __webpack_require__(54029);
// EXTERNAL MODULE: ./components/StyledSelect.tsx
var StyledSelect = __webpack_require__(66943);
// EXTERNAL MODULE: ./components/recurring-contributions/AddPaymentMethod.js
var AddPaymentMethod = __webpack_require__(50559);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/recurring-contributions/UpdateOrderPopUp.js









var _templateObject, _templateObject2;






























var TierBox = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Flex */.kC).withConfig({
  displayName: "UpdateOrderPopUp__TierBox",
  componentId: "sc-1lnx91y-0"
})(["border-top:1px solid ", ";"], (0,index_esm/* themeGet */.R)('colors.black.300'));
var messages = (0,lib.defineMessages)({
  customTier: {
    id: "ContributionType.Custom",
    defaultMessage: [{
      "type": 0,
      "value": "Custom contribution"
    }]
  }
});
var updateOrderMutation = (0,graphql_tag_lib/* default */.ZP)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  mutation UpdateOrder(\n    $order: OrderReferenceInput!\n    $amount: AmountInput\n    $tier: TierReferenceInput\n    $paypalSubscriptionId: String\n  ) {\n    updateOrder(order: $order, amount: $amount, tier: $tier, paypalSubscriptionId: $paypalSubscriptionId) {\n      id\n      status\n      frequency\n      amount {\n        value\n        currency\n      }\n      tier {\n        id\n        name\n      }\n    }\n  }\n"])));
var tiersQuery = (0,graphql_tag_lib/* default */.ZP)(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n  query UpdateOrderPopUpTiers($slug: String!) {\n    account(slug: $slug) {\n      id\n      slug\n      name\n      type\n      currency\n      settings\n      ... on AccountWithContributions {\n        tiers {\n          nodes {\n            id\n            name\n            interval\n            amount {\n              value\n              valueInCents\n              currency\n            }\n            minimumAmount {\n              value\n              valueInCents\n              currency\n            }\n            amountType\n            presets\n          }\n        }\n      }\n    }\n  }\n"]))); // TODO: internationalize me

var OTHER_LABEL = 'Other';

var useUpdateOrder = function useUpdateOrder(_ref) {
  var contribution = _ref.contribution,
      onSuccess = _ref.onSuccess;

  var _useToasts = (0,ToastProvider/* useToasts */.e1)(),
      addToast = _useToasts.addToast;

  var _useMutation = (0,client.useMutation)(updateOrderMutation, {
    context: helpers/* API_V2_CONTEXT */.T
  }),
      _useMutation2 = slicedToArray_default()(_useMutation, 2),
      submitUpdateOrder = _useMutation2[0],
      loading = _useMutation2[1].loading;

  return {
    isSubmittingOrder: loading,
    updateOrder: function () {
      var _updateOrder = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(selectedTier, selectedAmountOption, inputAmountValue) {
        var paypalSubscriptionId,
            errorMsg,
            _args = arguments;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                paypalSubscriptionId = _args.length > 3 && _args[3] !== undefined ? _args[3] : null;
                _context.prev = 1;
                _context.next = 4;
                return submitUpdateOrder({
                  variables: {
                    order: {
                      id: contribution.id
                    },
                    paypalSubscriptionId: paypalSubscriptionId,
                    amount: {
                      valueInCents: selectedAmountOption.label === OTHER_LABEL ? inputAmountValue : selectedAmountOption.value
                    },
                    tier: {
                      id: (selectedTier === null || selectedTier === void 0 ? void 0 : selectedTier.id) || null
                    }
                  }
                });

              case 4:
                addToast({
                  type: ToastProvider/* TOAST_TYPE.SUCCESS */["do"].SUCCESS,
                  message: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
                    values: I18nFormatters/* default */.ZP
                  })
                });
                onSuccess();
                _context.next = 13;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                errorMsg = (0,errors/* getErrorFromGraphqlException */.H1)(_context.t0).message;
                addToast({
                  type: ToastProvider/* TOAST_TYPE.ERROR */["do"].ERROR,
                  message: errorMsg
                });
                return _context.abrupt("return", false);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8]]);
      }));

      function updateOrder(_x, _x2, _x3) {
        return _updateOrder.apply(this, arguments);
      }

      return updateOrder;
    }()
  };
};

var getTierAmountOptions = function getTierAmountOptions(selectedTier, contribution, locale) {
  var currency = contribution.amount.currency;

  var buildOptionFromAmount = function buildOptionFromAmount(amount) {
    return {
      label: (0,currency_utils/* formatCurrency */.xG)(amount, currency, {
        locale: locale
      }),
      value: amount
    };
  };

  if (selectedTier && !(selectedTier !== null && selectedTier !== void 0 && selectedTier.flexible)) {
    return [buildOptionFromAmount(selectedTier.amount)];
  } else {
    // TODO: use getTierPresets from tier-utils
    var presets = (selectedTier === null || selectedTier === void 0 ? void 0 : selectedTier.presets) || tier_utils/* DEFAULT_PRESETS */.pP;
    var otherValue = null; // The way it's currently implemented, it doesn't need a value

    return [].concat(toConsumableArray_default()(presets.map(buildOptionFromAmount)), [{
      label: OTHER_LABEL,
      value: otherValue
    }]);
  }
};

var getContributeOptions = function getContributeOptions(intl, contribution, tiers, disableCustomContributions) {
  var tierOptions = (tiers || []).filter(function (tier) {
    return tier.interval !== null;
  }).map(function (tier) {
    return {
      key: "".concat(contribution.id, "-tier-").concat(tier.id),
      title: tier.name,
      flexible: tier.amountType === tiers_types/* AmountTypes.FLEXIBLE */.lX.FLEXIBLE,
      amount: tier.amountType === tiers_types/* AmountTypes.FLEXIBLE */.lX.FLEXIBLE ? tier.minimumAmount.valueInCents : tier.amount.valueInCents,
      id: tier.id,
      currency: tier.amount.currency,
      interval: tier.interval,
      presets: tier.presets,
      minimumAmount: tier.amountType === tiers_types/* AmountTypes.FLEXIBLE */.lX.FLEXIBLE ? tier.minimumAmount.valueInCents : tier_utils/* DEFAULT_MINIMUM_AMOUNT */.hs
    };
  });

  if (!disableCustomContributions) {
    tierOptions.unshift({
      key: "".concat(contribution.id, "-custom-tier"),
      title: intl.formatMessage(messages.customTier),
      flexible: true,
      amount: tier_utils/* DEFAULT_MINIMUM_AMOUNT */.hs,
      id: null,
      currency: contribution.amount.currency,
      interval: contribution.frequency.toLowerCase().slice(0, -2),
      presets: tier_utils/* DEFAULT_PRESETS */.pP,
      minimumAmount: tier_utils/* DEFAULT_MINIMUM_AMOUNT */.hs,
      isCustom: true
    });
  }

  return tierOptions;
};

var geSelectedContributeOption = function geSelectedContributeOption(contribution, tiersOptions) {
  var defaultContribution = tiersOptions.find(function (option) {
    return option.isCustom;
  }) || tiersOptions.find(function (option) {
    return option.interval;
  });

  if (!contribution.tier) {
    return defaultContribution;
  } else {
    // for some collectives if a tier has been deleted it won't have moved the contribution
    // to the custom 'null' tier so we have to check for that
    var matchedTierOption = tiersOptions.find(function (option) {
      return option.id === contribution.tier.id;
    });
    return !matchedTierOption ? defaultContribution : matchedTierOption;
  }
};

var useContributeOptions = function useContributeOptions(order, tiers, tiersLoading, disableCustomContributions) {
  var intl = (0,useIntl/* default */.Z)();

  var _useState = (0,react.useState)(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = (0,react.useState)(null),
      selectedContributeOption = _useState2[0],
      setSelectedContributeOption = _useState2[1];

  var _useState3 = (0,react.useState)(null),
      amountOptions = _useState3[0],
      setAmountOptions = _useState3[1];

  var _useState4 = (0,react.useState)(null),
      selectedAmountOption = _useState4[0],
      setSelectedAmountOption = _useState4[1];

  var _useState5 = (0,react.useState)(null),
      inputAmountValue = _useState5[0],
      setInputAmountValue = _useState5[1];

  var contributeOptions = react.useMemo(function () {
    return getContributeOptions(intl, order, tiers, disableCustomContributions);
  }, [intl, order, tiers, disableCustomContributions]);

  if (!contributeOptions.length === 0) {
    throw new Error('Could not compute at least one contribution option.');
  }

  if (contributeOptions && !selectedContributeOption && !tiersLoading) {
    var selectedContribution = geSelectedContributeOption(order, contributeOptions);

    if (!selectedContribution) {
      throw new Error('Could not compute a selected contribution option.');
    }

    setSelectedContributeOption(selectedContribution);
    setLoading(false);
  }

  (0,react.useEffect)(function () {
    if (selectedContributeOption !== null) {
      var _order$tier;

      var options = getTierAmountOptions(selectedContributeOption, order, intl.locale);
      setAmountOptions(options);
      var option;

      if ((selectedContributeOption.id || null) !== (((_order$tier = order.tier) === null || _order$tier === void 0 ? void 0 : _order$tier.id) || null)) {
        // Just pick first if tier is different than current one
        option = first_default()(options);
      } else {
        // Find one of the presets, or default to the last one which is supposed to be "Other" by convention
        option = options.find(function (option) {
          return option.value === order.amount.valueInCents;
        }) || last_default()(options);
      }

      setSelectedAmountOption(option);
      setInputAmountValue(option.value || order.amount.valueInCents);
    }
  }, [selectedContributeOption]);
  return {
    loading: loading,
    contributeOptions: contributeOptions,
    amountOptions: amountOptions,
    selectedContributeOption: selectedContributeOption,
    selectedAmountOption: selectedAmountOption,
    inputAmountValue: inputAmountValue,
    setSelectedContributeOption: setSelectedContributeOption,
    setSelectedAmountOption: setSelectedAmountOption,
    setInputAmountValue: setInputAmountValue
  };
};

var ContributionInterval = function ContributionInterval(_ref2) {
  var _contribution$tier;

  var tier = _ref2.tier,
      contribution = _ref2.contribution;
  var isActiveTier = ((_contribution$tier = contribution.tier) === null || _contribution$tier === void 0 ? void 0 : _contribution$tier.id) && contribution.tier.id === tier.id;
  var interval = null;

  if (isActiveTier) {
    interval = (0,date_utils/* getIntervalFromContributionFrequency */.Pw)(contribution.frequency);
  } else if ((tier === null || tier === void 0 ? void 0 : tier.interval) === intervals["default"].flexible) {
    // TODO: We should ideally have a select for that
    interval = (0,date_utils/* getIntervalFromContributionFrequency */.Pw)(contribution.frequency) || intervals["default"].month;
  } else if (tier !== null && tier !== void 0 && tier.interval && tier.interval !== intervals["default"].flexible) {
    interval = tier.interval;
  } // Show message only if there's an active interval


  if (interval) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      fontSize: "12px",
      fontWeight: "500",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "tier.interval",
        defaultMessage: [{
          "type": 0,
          "value": "per "
        }, {
          "type": 5,
          "value": "interval",
          "options": {
            "month": {
              "value": [{
                "type": 0,
                "value": "month"
              }]
            },
            "year": {
              "value": [{
                "type": 0,
                "value": "year"
              }]
            },
            "other": {
              "value": []
            }
          }
        }],
        values: {
          interval: interval
        }
      })
    });
  } else {
    return null;
  }
};

var UpdateOrderPopUp = function UpdateOrderPopUp(_ref3) {
  var _contribution$platfor;

  var contribution = _ref3.contribution,
      onCloseEdit = _ref3.onCloseEdit;
  // GraphQL mutations and queries
  var queryVariables = {
    slug: contribution.toAccount.slug
  };

  var _useQuery = (0,client.useQuery)(tiersQuery, {
    variables: queryVariables,
    context: helpers/* API_V2_CONTEXT */.T
  }),
      data = _useQuery.data,
      tiersLoading = _useQuery.loading; // state management


  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale;

  var _useToasts2 = (0,ToastProvider/* useToasts */.e1)(),
      addToast = _useToasts2.addToast;

  var _useUpdateOrder = useUpdateOrder({
    contribution: contribution,
    onSuccess: onCloseEdit
  }),
      isSubmittingOrder = _useUpdateOrder.isSubmittingOrder,
      updateOrder = _useUpdateOrder.updateOrder;

  var tiers = get_default()(data, 'account.tiers.nodes', null);

  var disableCustomContributions = get_default()(data, 'account.settings.disableCustomContributions', false);

  var contributeOptionsState = useContributeOptions(contribution, tiers, tiersLoading, disableCustomContributions);
  var amountOptions = contributeOptionsState.amountOptions,
      inputAmountValue = contributeOptionsState.inputAmountValue,
      contributeOptions = contributeOptionsState.contributeOptions,
      selectedContributeOption = contributeOptionsState.selectedContributeOption,
      selectedAmountOption = contributeOptionsState.selectedAmountOption,
      setInputAmountValue = contributeOptionsState.setInputAmountValue,
      setSelectedContributeOption = contributeOptionsState.setSelectedContributeOption;
  var selectedTier = selectedContributeOption !== null && selectedContributeOption !== void 0 && selectedContributeOption.isCustom ? null : selectedContributeOption;
  var isPaypal = contribution.paymentMethod.service === payment_methods/* PAYMENT_METHOD_SERVICE.PAYPAL */.tp.PAYPAL;
  var tipAmount = ((_contribution$platfor = contribution.platformTipAmount) === null || _contribution$platfor === void 0 ? void 0 : _contribution$platfor.valueInCents) || 0;
  var newAmount = (selectedAmountOption === null || selectedAmountOption === void 0 ? void 0 : selectedAmountOption.label) === OTHER_LABEL ? inputAmountValue : selectedAmountOption === null || selectedAmountOption === void 0 ? void 0 : selectedAmountOption.value;
  var newTotalAmount = newAmount + tipAmount; // For now tip can't be updated, we're just carrying it over
  // When we change the amount option (One of the presets or Other)

  var setSelectedAmountOption = function setSelectedAmountOption(_ref4) {
    var label = _ref4.label,
        value = _ref4.value;

    // Always set "Other" input value to the last one selected
    // "Other" itself doesn't have a pre-defined value
    if (label !== OTHER_LABEL) {
      setInputAmountValue(value);
    }

    contributeOptionsState.setSelectedAmountOption({
      label: label,
      value: value
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      width: 1,
      alignItems: "center",
      justifyContent: "center",
      minHeight: 50,
      px: 3,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        my: 2,
        fontSize: "12px",
        textTransform: "uppercase",
        color: "black.700",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "subscription.menu.updateTier",
          defaultMessage: [{
            "type": 0,
            "value": "Update tier"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
        flexGrow: 1,
        alignItems: "center",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
          width: "100%",
          mx: 2
        })
      })]
    }), tiersLoading || contributeOptionsState.loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
      height: 100
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(StyledRadioList/* default */.ZP, {
      id: "ContributionTier",
      name: "".concat(contribution.id, "-ContributionTier"),
      keyGetter: "key",
      options: contributeOptions,
      onChange: function onChange(_ref5) {
        var value = _ref5.value;
        return setSelectedContributeOption(value);
      },
      value: selectedContributeOption === null || selectedContributeOption === void 0 ? void 0 : selectedContributeOption.key,
      children: function children(_ref6) {
        var radio = _ref6.radio,
            checked = _ref6.checked,
            _ref6$value = _ref6.value,
            id = _ref6$value.id,
            title = _ref6$value.title,
            subtitle = _ref6$value.subtitle,
            amount = _ref6$value.amount,
            flexible = _ref6$value.flexible,
            currency = _ref6$value.currency,
            interval = _ref6$value.interval,
            minimumAmount = _ref6$value.minimumAmount;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(TierBox, {
          minHeight: 50,
          py: 2,
          px: 3,
          bg: "white.full",
          "data-cy": "recurring-contribution-tier-box",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            alignItems: "center",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              as: "span",
              mr: 3,
              flexWrap: "wrap",
              children: radio
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              flexDirection: "column",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                fontWeight: subtitle ? 600 : 400,
                color: "black.900",
                children: startCase_default()(title)
              }), checked && flexible ? /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  onClick: function onClick(e) {
                    return e.preventDefault();
                  },
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledSelect/* default */.ZP, {
                    inputId: "tier-amount-select-".concat(contribution.id),
                    "data-cy": "tier-amount-select",
                    onChange: setSelectedAmountOption,
                    value: selectedAmountOption,
                    options: amountOptions,
                    my: 2,
                    minWidth: 150,
                    isSearchable: false
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(ContributionInterval, {
                  contribution: contribution,
                  tier: {
                    id: id,
                    interval: interval
                  }
                }), (selectedAmountOption === null || selectedAmountOption === void 0 ? void 0 : selectedAmountOption.label) === OTHER_LABEL && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                  flexDirection: "column",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                    fontSize: "12px",
                    fontWeight: "600",
                    my: 2,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "RecurringContributions.customAmount",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Custom amount"
                      }]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputAmount/* default */.Z, {
                      type: "number",
                      "data-cy": "recurring-contribution-custom-amount-input",
                      currency: currency,
                      value: inputAmountValue,
                      onChange: setInputAmountValue,
                      min: tier_utils/* DEFAULT_MINIMUM_AMOUNT */.hs,
                      precision: 2,
                      px: "2px"
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                    fontSize: "12px",
                    fontWeight: "600",
                    my: 2,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      defaultMessage: [{
                        "type": 0,
                        "value": "Min. amount: "
                      }, {
                        "type": 1,
                        "value": "minAmount"
                      }],
                      id: "RecurringContributions.minAmount",
                      values: {
                        minAmount: (0,currency_utils/* formatCurrency */.xG)(minimumAmount, currency, {
                          locale: locale
                        })
                      }
                    })
                  })]
                })]
              }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
                children: [flexible && /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "18px",
                  color: "black.500",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "ContributeTier.StartsAt",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Starts at"
                    }]
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                  fontWeight: 400,
                  color: "black.900",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
                    amount: amount,
                    interval: interval.toLowerCase(),
                    currency: currency
                  })
                })]
              })]
            })]
          })
        });
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
      flexGrow: 1 / 4,
      width: 1,
      alignItems: "center",
      justifyContent: "center",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
        flexGrow: 1,
        alignItems: "center",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
          width: "100%"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexGrow: 1 / 4,
      width: 1,
      alignItems: "center",
      justifyContent: "center",
      minHeight: 50,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
        buttonSize: "tiny",
        minWidth: 75,
        onClick: onCloseEdit,
        height: 25,
        mr: 2,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "actions.cancel",
          defaultMessage: [{
            "type": 0,
            "value": "Cancel"
          }]
        })
      }), isPaypal && selectedAmountOption ? /*#__PURE__*/(0,jsx_runtime.jsx)(PayWithPaypalButton/* default */.Z, {
        isLoading: !selectedAmountOption,
        isSubmitting: isSubmittingOrder,
        totalAmount: newTotalAmount,
        currency: contribution.amount.currency,
        interval: (selectedContributeOption === null || selectedContributeOption === void 0 ? void 0 : selectedContributeOption.interval) || (0,date_utils/* getIntervalFromContributionFrequency */.Pw)(contribution.frequency),
        host: contribution.toAccount.host,
        collective: contribution.toAccount,
        tier: selectedTier,
        style: {
          height: 25,
          size: 'small'
        },
        subscriptionStartDate: (0,AddPaymentMethod/* getSubscriptionStartDate */.n)(contribution),
        onError: function onError(e) {
          return addToast({
            type: ToastProvider/* TOAST_TYPE.ERROR */["do"].ERROR,
            title: e.message
          });
        },
        onSuccess: function onSuccess(_ref7) {
          var subscriptionId = _ref7.subscriptionId;
          return updateOrder(selectedTier, selectedAmountOption, inputAmountValue, subscriptionId);
        }
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
        height: 25,
        minWidth: 75,
        buttonSize: "tiny",
        buttonStyle: "secondary",
        loading: isSubmittingOrder,
        "data-cy": "recurring-contribution-update-order-button",
        onClick: function onClick() {
          return updateOrder(selectedTier, selectedAmountOption, inputAmountValue);
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "actions.update",
          defaultMessage: [{
            "type": 0,
            "value": "Update"
          }]
        })
      })]
    })]
  });
};

UpdateOrderPopUp.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "UpdateOrderPopUp",
  "props": {
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
    }
  }
};
/* harmony default export */ var recurring_contributions_UpdateOrderPopUp = (UpdateOrderPopUp);
// EXTERNAL MODULE: ./components/recurring-contributions/UpdatePaymentMethodPopUp.js
var UpdatePaymentMethodPopUp = __webpack_require__(43072);
;// CONCATENATED MODULE: ./components/recurring-contributions/RecurringContributionsPopUp.js




var RecurringContributionsPopUp_templateObject;
























 //  Styled components



var RedXCircle = (0,styled_components_browser_esm/* default */.ZP)(XCircle_esm/* XCircle */.a).withConfig({
  displayName: "RecurringContributionsPopUp__RedXCircle",
  componentId: "sc-crmtoj-0"
})(["color:", ";"], (0,index_esm/* themeGet */.R)('colors.red.500'));
var GrayXCircle = (0,styled_components_browser_esm/* default */.ZP)(XCircle_esm/* XCircle */.a).withConfig({
  displayName: "RecurringContributionsPopUp__GrayXCircle",
  componentId: "sc-crmtoj-1"
})(["color:", ";cursor:pointer;"], (0,index_esm/* themeGet */.R)('colors.black.500'));
var MenuItem = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Flex */.kC).attrs({
  px: 3
}).withConfig({
  displayName: "RecurringContributionsPopUp__MenuItem",
  componentId: "sc-crmtoj-2"
})(["cursor:pointer;"]);
var PopUpMenu = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Flex */.kC).withConfig({
  displayName: "RecurringContributionsPopUp__PopUpMenu",
  componentId: "sc-crmtoj-3"
})(["position:absolute;bottom:0;z-index:998;background:white;border-radius:8px;box-shadow:0px 2px 7px rgba(0,0,0,0.5);min-height:180px;max-height:360px;width:100%;overflow-y:auto;padding:4px 0;animation:", " 0.2s;"], StyledKeyframes/* slideInUp */.MP);
var MenuSection = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Flex */.kC).attrs({
  flexDirection: 'column',
  width: 1
}).withConfig({
  displayName: "RecurringContributionsPopUp__MenuSection",
  componentId: "sc-crmtoj-4"
})([""]);
var i18nReasons = (0,lib.defineMessages)({
  NO_LONGER_WANT_TO_SUPPORT: {
    id: "subscription.cancel.reason1",
    defaultMessage: [{
      "type": 0,
      "value": "No longer want to back the collective"
    }]
  },
  UPDATING_ORDER: {
    id: "subscription.cancel.reason2",
    defaultMessage: [{
      "type": 0,
      "value": "Changing payment method or amount"
    }]
  },
  OTHER: {
    id: "subscription.cancel.other",
    defaultMessage: [{
      "type": 0,
      "value": "Other"
    }]
  }
}); // GraphQL

var cancelRecurringContributionMutation = (0,graphql_tag_lib/* default */.ZP)(RecurringContributionsPopUp_templateObject || (RecurringContributionsPopUp_templateObject = taggedTemplateLiteral_default()(["\n  mutation CancelRecurringContribution($order: OrderReferenceInput!, $reason: String!, $reasonCode: String!) {\n    cancelOrder(order: $order, reason: $reason, reasonCode: $reasonCode) {\n      id\n      status\n    }\n  }\n"])));

var RecurringContributionsPopUp = function RecurringContributionsPopUp(_ref) {
  var contribution = _ref.contribution,
      status = _ref.status,
      onCloseEdit = _ref.onCloseEdit,
      account = _ref.account;

  var _useToasts = (0,ToastProvider/* useToasts */.e1)(),
      addToast = _useToasts.addToast;

  var _useState = (0,react.useState)('mainMenu'),
      menuState = _useState[0],
      setMenuState = _useState[1];

  var intl = (0,useIntl/* default */.Z)();

  var _useState2 = (0,react.useState)('NO_LONGER_WANT_TO_SUPPORT'),
      cancelReason = _useState2[0],
      setCancelReason = _useState2[1];

  var _useState3 = (0,react.useState)(''),
      cancelReasonMessage = _useState3[0],
      setCancelReasonMessage = _useState3[1];

  var _useMutation = (0,client.useMutation)(cancelRecurringContributionMutation, {
    context: helpers/* API_V2_CONTEXT */.T
  }),
      _useMutation2 = slicedToArray_default()(_useMutation, 2),
      submitCancellation = _useMutation2[0],
      loadingCancellation = _useMutation2[1].loading;

  var mainMenu = menuState === 'mainMenu' && (status === 'ACTIVE' || status === 'ERROR');
  var cancelMenu = menuState === 'cancelMenu';
  var updateOrderMenu = menuState === 'updateOrderMenu';
  var paymentMethodMenu = menuState === 'paymentMethodMenu';
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(PopUpMenu, {
    "data-cy": "recurring-contribution-menu",
    children: [mainMenu && /*#__PURE__*/(0,jsx_runtime.jsxs)(MenuSection, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        flexGrow: 1 / 4,
        width: 1,
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          my: 2,
          fontSize: "12px",
          textTransform: "uppercase",
          color: "black.700",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "header.options",
            defaultMessage: [{
              "type": 0,
              "value": "Options"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
          flexGrow: 1,
          alignItems: "center",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
            width: "100%",
            mx: 2
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(GrayXCircle, {
          size: 26,
          onClick: onCloseEdit
        })]
      }), account.type !== 'COLLECTIVE' && /*#__PURE__*/(0,jsx_runtime.jsxs)(MenuItem, {
        flexGrow: 1 / 4,
        width: 1,
        alignItems: "center",
        justifyContent: "space-around",
        onClick: function onClick() {
          setMenuState('paymentMethodMenu');
        },
        "data-cy": "recurring-contribution-menu-payment-option",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
          width: 1 / 6,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(CreditCard_esm/* CreditCard */.a, {
            size: 20
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
          flexGrow: 1,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "14px",
            fontWeight: "400",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "subscription.menu.editPaymentMethod",
              defaultMessage: [{
                "type": 0,
                "value": "Update payment method"
              }]
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(MenuItem, {
        flexGrow: 1 / 4,
        width: 1,
        alignItems: "center",
        justifyContent: "space-between",
        onClick: function onClick() {
          setMenuState('updateOrderMenu');
        },
        "data-cy": "recurring-contribution-menu-tier-option",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
          width: 1 / 6,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Dollar_esm/* Dollar */.B, {
            size: 20
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
          flexGrow: 1,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "14px",
            fontWeight: "400",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "subscription.menu.updateAmount",
              defaultMessage: [{
                "type": 0,
                "value": "Update amount"
              }]
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(MenuItem, {
        flexGrow: 1 / 4,
        width: 1,
        alignItems: "center",
        justifyContent: "center",
        onClick: function onClick() {
          setMenuState('cancelMenu');
        },
        "data-cy": "recurring-contribution-menu-cancel-option",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
          width: 1 / 6,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(RedXCircle, {
            size: 20
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
          flexGrow: 1,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "14px",
            fontWeight: "400",
            color: "red.500",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "subscription.menu.cancelContribution",
              defaultMessage: [{
                "type": 0,
                "value": "Cancel contribution"
              }]
            })
          })
        })]
      })]
    }), cancelMenu && /*#__PURE__*/(0,jsx_runtime.jsxs)(MenuSection, {
      "data-cy": "recurring-contribution-cancel-menu",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        flexGrow: 1 / 4,
        width: 1,
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          my: 2,
          fontSize: "12px",
          textTransform: "uppercase",
          color: "black.700",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "subscription.menu.cancelContribution",
            defaultMessage: [{
              "type": 0,
              "value": "Cancel contribution"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
          flexGrow: 1,
          alignItems: "center",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
            width: "100%",
            mx: 2
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(GrayXCircle, {
          size: 26,
          onClick: onCloseEdit
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
        flexGrow: 1 / 4,
        width: 1,
        alignItems: "center",
        justifyContent: "center",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
          p: 3,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "15px",
            fontWeight: "bold",
            mb: "10",
            lineHeight: "20px",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "subscription.cancel.question",
              defaultMessage: [{
                "type": 0,
                "value": "Why are you cancelling your subscription today? 🥺"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
            my: 2,
            borderColor: "black.200"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledRadioList/* default */.ZP, {
            id: "cancel-reason-radio-list",
            defaultValue: "NO_LONGER_WANT_TO_SUPPORT",
            onChange: function onChange(e) {
              return setCancelReason(e.key);
            },
            name: "cancellation-reason",
            options: ['NO_LONGER_WANT_TO_SUPPORT', 'UPDATING_ORDER', 'OTHER'],
            children: function children(_ref2) {
              var value = _ref2.value,
                  radio = _ref2.radio;
              return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
                display: "flex",
                alignItems: "center",
                my: 2,
                "data-cy": value,
                fontWeight: "normal",
                fontSize: "12px",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                  mx: 2,
                  children: radio
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  children: intl.formatMessage(i18nReasons[value])
                })]
              });
            }
          }), cancelReason === 'OTHER' && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTextarea/* default */.Z, {
            "data-cy": "cancellation-text-area",
            onChange: function onChange(e) {
              return setCancelReasonMessage(e.target.value);
            },
            value: cancelReasonMessage,
            fontSize: "12px",
            placeholder: intl.formatMessage({
              id: "41Cgcs",
              defaultMessage: [{
                "type": 0,
                "value": "Provide more details (optional)"
              }]
            }),
            height: 70,
            width: "100%",
            resize: "none"
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
        flexGrow: 1 / 4,
        width: 1,
        alignItems: "center",
        justifyContent: "center",
        my: 1,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
          flexGrow: 1,
          alignItems: "center",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
            width: "100%"
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
        flexGrow: 1 / 4,
        width: 1,
        alignItems: "center",
        justifyContent: "center",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
          buttonSize: "tiny",
          buttonStyle: "secondary",
          minWidth: 75,
          loading: loadingCancellation,
          "data-cy": "recurring-contribution-cancel-yes",
          onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
            var errorMsg;
            return regenerator_default().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return submitCancellation({
                      variables: {
                        order: {
                          id: contribution.id
                        },
                        reason: cancelReason === 'OTHER' ? cancelReasonMessage : '',
                        reasonCode: cancelReason
                      }
                    });

                  case 3:
                    onCloseEdit();
                    addToast({
                      type: ToastProvider/* TOAST_TYPE.INFO */["do"].INFO,
                      message: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                        id: "subscription.createSuccessCancel",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Your recurring contribution has been "
                        }, {
                          "type": 8,
                          "value": "strong",
                          "children": [{
                            "type": 0,
                            "value": "cancelled"
                          }]
                        }, {
                          "type": 0,
                          "value": "."
                        }],
                        values: I18nFormatters/* default */.ZP
                      })
                    });
                    _context.next = 11;
                    break;

                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](0);
                    errorMsg = (0,errors/* getErrorFromGraphqlException */.H1)(_context.t0).message;
                    addToast({
                      type: ToastProvider/* TOAST_TYPE.ERROR */["do"].ERROR,
                      message: errorMsg
                    });

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[0, 7]]);
          })),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "submit",
            defaultMessage: [{
              "type": 0,
              "value": "Submit"
            }]
          })
        })
      })]
    }), paymentMethodMenu && /*#__PURE__*/(0,jsx_runtime.jsx)(MenuSection, {
      "data-cy": "recurring-contribution-payment-menu",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(UpdatePaymentMethodPopUp/* default */.ZP, {
        setMenuState: setMenuState,
        contribution: contribution,
        onCloseEdit: onCloseEdit,
        account: contribution.fromAccount || account
      })
    }), updateOrderMenu && /*#__PURE__*/(0,jsx_runtime.jsx)(MenuSection, {
      "data-cy": "recurring-contribution-order-menu",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(recurring_contributions_UpdateOrderPopUp, {
        setMenuState: setMenuState,
        contribution: contribution,
        onCloseEdit: onCloseEdit
      })
    })]
  });
};

RecurringContributionsPopUp.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "RecurringContributionsPopUp",
  "props": {
    "contribution": {
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
    "status": {
      "description": "",
      "type": {
        "name": "string"
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
    "account": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    }
  }
};
/* harmony default export */ var recurring_contributions_RecurringContributionsPopUp = ((0,UserProvider/* withUser */.ns)(RecurringContributionsPopUp));
;// CONCATENATED MODULE: ./components/recurring-contributions/RecurringContributionsCard.js





var _excluded = ["collective", "status", "contribution", "account", "isEditing", "canEdit", "isAdmin", "onCloseEdit", "onEdit", "showPaymentMethod"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


















var RecurringContributionsCard_messages = (0,lib.defineMessages)({
  manage: {
    id: "Edit",
    defaultMessage: [{
      "type": 0,
      "value": "Edit"
    }]
  },
  tag: {
    id: "Subscriptions.Status",
    defaultMessage: [{
      "type": 5,
      "value": "status",
      "options": {
        "ACTIVE": {
          "value": [{
            "type": 0,
            "value": "Active contribution"
          }]
        },
        "CANCELLED": {
          "value": [{
            "type": 0,
            "value": "Cancelled contribution"
          }]
        },
        "ERROR": {
          "value": [{
            "type": 0,
            "value": "Error"
          }]
        },
        "REJECTED": {
          "value": [{
            "type": 0,
            "value": "Rejected contribution"
          }]
        },
        "other": {
          "value": []
        }
      }
    }]
  }
});

var RecurringContributionsCard = function RecurringContributionsCard(_ref) {
  var _contribution$fromAcc, _contribution$platfor;

  var collective = _ref.collective,
      status = _ref.status,
      contribution = _ref.contribution,
      account = _ref.account,
      isEditing = _ref.isEditing,
      canEdit = _ref.canEdit,
      isAdmin = _ref.isAdmin,
      onCloseEdit = _ref.onCloseEdit,
      onEdit = _ref.onEdit,
      showPaymentMethod = _ref.showPaymentMethod,
      props = objectWithoutProperties_default()(_ref, _excluded);

  var _useIntl = (0,useIntl/* default */.Z)(),
      formatMessage = _useIntl.formatMessage;

  var isError = status === order_status/* ORDER_STATUS.ERROR */.D.ERROR;
  var isRejected = status === order_status/* ORDER_STATUS.REJECTED */.D.REJECTED;
  var isActive = status === order_status/* ORDER_STATUS.ACTIVE */.D.ACTIVE || isError;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledCollectiveCard/* default */.Z, _objectSpread(_objectSpread({}, props), {}, {
    collective: collective,
    bodyHeight: "350px",
    tag: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTag/* default */.Z, {
      display: "inline-block",
      textTransform: "uppercase",
      my: 2,
      type: isError || isRejected ? 'error' : undefined,
      children: formatMessage(RecurringContributionsCard_messages.tag, {
        status: status
      })
    }),
    children: [Boolean((_contribution$fromAcc = contribution.fromAccount) === null || _contribution$fromAcc === void 0 ? void 0 : _contribution$fromAcc.isIncognito) && /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
      position: "absolute",
      right: "12px",
      top: "12px",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTooltip/* default */.Z, {
        content: function content() {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "RecurringContribution.Incognito",
            defaultMessage: [{
              "type": 0,
              "value": "This is an incognito recurring contribution, only you can see it."
            }]
          });
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_StyledContainer, {
          borderRadius: "100%",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
            collective: contribution.fromAccount,
            radius: 36
          })
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
      p: 3,
      pt: 0,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        mb: 3,
        children: [showPaymentMethod && contribution.paymentMethod && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          mb: 3,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            mb: 2,
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            children: "Payment method"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            alignItems: "center",
            height: "28px",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              mr: 2,
              children: (0,payment_method_utils/* getPaymentMethodIcon */.AM)(contribution.paymentMethod, account)
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(_StyledFlex, {
              flexDirection: "column",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                fontSize: "11px",
                lineHeight: "14px",
                fontWeight: "bold",
                truncateOverflow: true,
                title: (0,payment_method_label/* getPaymentMethodName */.d0)(contribution.paymentMethod),
                children: (0,payment_method_label/* getPaymentMethodName */.d0)(contribution.paymentMethod)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                fontSize: "11px",
                color: "black.700",
                truncateOverflow: true,
                children: (0,payment_method_utils/* getPaymentMethodMetadata */.Og)(contribution.paymentMethod)
              })]
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "membership.totalDonations.title",
              defaultMessage: [{
                "type": 0,
                "value": "Amount contributed"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "bold",
            "data-cy": "recurring-contribution-amount-contributed",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
              amount: contribution.totalAmount.valueInCents,
              interval: contribution.frequency.toLowerCase().slice(0, -2),
              currency: contribution.totalAmount.currency
            })
          }), !isNil_default()((_contribution$platfor = contribution.platformTipAmount) === null || _contribution$platfor === void 0 ? void 0 : _contribution$platfor.valueInCents) && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTooltip/* default */.Z, {
            content: function content() {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "Subscriptions.FeesOnTopTooltip",
                defaultMessage: [{
                  "type": 0,
                  "value": "Contribution plus Platform Tip"
                }]
              });
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Text.P, {
              fontSize: "12px",
              lineHeight: "20px",
              color: "black.700",
              children: ["(", /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
                amount: contribution.amount.valueInCents,
                currency: contribution.amount.currency,
                showCurrencyCode: false,
                precision: "auto",
                amountStyles: {
                  fontWeight: 'normal',
                  color: 'black.700'
                }
              }), ' + ', /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
                amount: contribution.platformTipAmount.valueInCents,
                currency: contribution.amount.currency,
                showCurrencyCode: false,
                precision: "auto",
                amountStyles: {
                  fontWeight: 'normal',
                  color: 'black.700'
                }
              }), ")"]
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        mb: 3,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "Subscriptions.ContributedToDate",
            defaultMessage: [{
              "type": 0,
              "value": "Contributed to date"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "14px",
          lineHeight: "20px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
            amount: contribution.totalDonations.valueInCents,
            currency: contribution.totalDonations.currency
          })
        })]
      }), isAdmin && isActive && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
        buttonSize: "tiny",
        onClick: onEdit,
        disabled: !canEdit,
        "data-cy": "recurring-contribution-edit-activate-button",
        width: "100%",
        children: formatMessage(RecurringContributionsCard_messages.manage)
      })]
    }), isEditing && /*#__PURE__*/(0,jsx_runtime.jsx)(recurring_contributions_RecurringContributionsPopUp, {
      contribution: contribution,
      status: status,
      onCloseEdit: onCloseEdit,
      account: account
    })]
  }));
};

RecurringContributionsCard.defaultProps = {
  showPaymentMethod: true
};
RecurringContributionsCard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "RecurringContributionsCard",
  "props": {
    "showPaymentMethod": {
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
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "isEditing": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isAdmin": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "canEdit": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onCloseEdit": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onEdit": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "contribution": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "amount": {
            "name": "object",
            "required": true
          },
          "totalAmount": {
            "name": "object",
            "required": true
          },
          "platformTipAmount": {
            "name": "object",
            "required": false
          },
          "frequency": {
            "name": "string",
            "required": true
          },
          "totalDonations": {
            "name": "object",
            "required": true
          },
          "paymentMethod": {
            "name": "object",
            "required": false
          },
          "fromAccount": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": false
    },
    "status": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "LoggedInUser": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
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
/* harmony default export */ var recurring_contributions_RecurringContributionsCard = (RecurringContributionsCard);

var _StyledContainer = (0,styled_components_browser_esm/* default */.ZP)(Container/* default */.Z).withConfig({
  displayName: "RecurringContributionsCard___StyledContainer",
  componentId: "sc-1weisk8-0"
})({
  filter: 'drop-shadow(-1px 1px 2px #dcdcdc)'
});

var _StyledFlex = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Flex */.kC).withConfig({
  displayName: "RecurringContributionsCard___StyledFlex",
  componentId: "sc-1weisk8-1"
})({
  position: 'relative',
  minWidth: 0
});
;// CONCATENATED MODULE: ./components/collective-page/images/EmptyCollectivesSectionImage.svg
/* harmony default export */ var EmptyCollectivesSectionImage = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzA5IiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwOSAyMDAiIGZpbGw9Im5vbmUiIAogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgb3BhY2l0eT0iMC42NCI+CiAgICA8cGF0aCBvcGFjaXR5PSIwLjY0IiBkPSJNMjMyLjg5MiAxOTkuNTI3QzI1OC41MzQgMTk5LjUyNyAyNzkuMzIgMTc4Ljc4MyAyNzkuMzIgMTUzLjE5NUMyNzkuMzIgMTI3LjYwNiAyNTguNTM0IDEwNi44NjMgMjMyLjg5MiAxMDYuODYzQzIwNy4yNSAxMDYuODYzIDE4Ni40NjMgMTI3LjYwNiAxODYuNDYzIDE1My4xOTVDMTg2LjQ2MyAxNzguNzgzIDIwNy4yNSAxOTkuNTI3IDIzMi44OTIgMTk5LjUyN1oiIGZpbGw9IiNFN0VFRkEiLz4KICAgIDxwYXRoIG9wYWNpdHk9IjAuNjQiIGQ9Ik0yOS4yMDUxIDE3NC4xMTlDNDUuMzM0NiAxNzQuMTE5IDU4LjQxMDEgMTYxLjA3MSA1OC40MTAxIDE0NC45NzVDNTguNDEwMSAxMjguODc5IDQ1LjMzNDYgMTE1LjgzIDI5LjIwNTEgMTE1LjgzQzEzLjA3NTYgMTE1LjgzIDAgMTI4Ljg3OSAwIDE0NC45NzVDMCAxNjEuMDcxIDEzLjA3NTYgMTc0LjExOSAyOS4yMDUxIDE3NC4xMTlaIiBmaWxsPSIjRTdFRUZBIi8+CiAgICA8cGF0aCBvcGFjaXR5PSIwLjY0IiBkPSJNMjM3LjAxIDUwLjgxNTlDMjQ2LjMxNiA1MC44MTU5IDI1My44NiA0My4yODggMjUzLjg2IDM0LjAwMThDMjUzLjg2IDI0LjcxNTcgMjQ2LjMxNiAxNy4xODc3IDIzNy4wMSAxNy4xODc3QzIyNy43MDUgMTcuMTg3NyAyMjAuMTYxIDI0LjcxNTcgMjIwLjE2MSAzNC4wMDE4QzIyMC4xNjEgNDMuMjg4IDIyNy43MDUgNTAuODE1OSAyMzcuMDEgNTAuODE1OVoiIGZpbGw9IiNFN0VFRkEiLz4KICAgIDxwYXRoIG9wYWNpdHk9IjAuNjQiIGQ9Ik0xOTUuMDc1IDE3LjE4NzdDMTk5LjgzMSAxNy4xODc3IDIwMy42ODcgMTMuMzQwMSAyMDMuNjg3IDguNTkzODZDMjAzLjY4NyAzLjg0NzYgMTk5LjgzMSAwIDE5NS4wNzUgMEMxOTAuMzE5IDAgMTg2LjQ2MyAzLjg0NzYgMTg2LjQ2MyA4LjU5Mzg2QzE4Ni40NjMgMTMuMzQwMSAxOTAuMzE5IDE3LjE4NzcgMTk1LjA3NSAxNy4xODc3WiIgZmlsbD0iI0U3RUVGQSIvPgogICAgPHBhdGggb3BhY2l0eT0iMC42NCIgZD0iTTMwMy43NTggMTk5QzMwNi42NTMgMTk5IDMwOSAxOTYuNjU4IDMwOSAxOTMuNzY5QzMwOSAxOTAuODggMzA2LjY1MyAxODguNTM4IDMwMy43NTggMTg4LjUzOEMzMDAuODYzIDE4OC41MzggMjk4LjUxNiAxOTAuODggMjk4LjUxNiAxOTMuNzY5QzI5OC41MTYgMTk2LjY1OCAzMDAuODYzIDE5OSAzMDMuNzU4IDE5OVoiIGZpbGw9IiNFN0VERjYiLz4KICAgIDxwYXRoIG9wYWNpdHk9IjAuNjQiIGQ9Ik0xNC4yMjgxIDU5Ljc4MzRDMTcuMTIzMiA1OS43ODM0IDE5LjQ3MDEgNTcuNDQxNCAxOS40NzAxIDU0LjU1MjNDMTkuNDcwMSA1MS42NjMzIDE3LjEyMzIgNDkuMzIxMyAxNC4yMjgxIDQ5LjMyMTNDMTEuMzMzMSA0OS4zMjEzIDguOTg2MjEgNTEuNjYzMyA4Ljk4NjIxIDU0LjU1MjNDOC45ODYyMSA1Ny40NDE0IDExLjMzMzEgNTkuNzgzNCAxNC4yMjgxIDU5Ljc4MzRaIiBmaWxsPSIjRTdFRUZBIi8+CiAgICA8cGF0aCBvcGFjaXR5PSIwLjY0IiBkPSJNNTUgMTk2Ljk2N0M1OS40MTgzIDE5Ni45NjcgNjMgMTkzLjM5MiA2MyAxODguOTgzQzYzIDE4NC41NzQgNTkuNDE4MyAxODEgNTUgMTgxQzUwLjU4MTcgMTgxIDQ3IDE4NC41NzQgNDcgMTg4Ljk4M0M0NyAxOTMuMzkyIDUwLjU4MTcgMTk2Ljk2NyA1NSAxOTYuOTY3WiIgZmlsbD0iI0RFRTZGNCIvPgogICAgPHBhdGggb3BhY2l0eT0iMC42NCIgZD0iTTg2LjkzMDkgMTIxLjY3NUMxMTEuNzQ2IDEyMS42NzUgMTMxLjg2MiAxMDEuNjAxIDEzMS44NjIgNzYuODM3NUMxMzEuODYyIDUyLjA3NDUgMTExLjc0NiAzMiA4Ni45MzA5IDMyQzYyLjExNjIgMzIgNDIgNTIuMDc0NSA0MiA3Ni44Mzc1QzQyIDEwMS42MDEgNjIuMTE2MiAxMjEuNjc1IDg2LjkzMDkgMTIxLjY3NVoiIGZpbGw9IiNFN0VFRkEiLz4KICAgIDxwYXRoIG9wYWNpdHk9IjAuNjQiIGQ9Ik0xNDEuNTMyIDE5Ni41MzhDMTg0Ljk1OCAxOTYuNTM4IDIyMC4xNjEgMTYxLjQwOCAyMjAuMTYxIDExOC4wNzJDMjIwLjE2MSA3NC43MzY3IDE4NC45NTggMzkuNjA2NCAxNDEuNTMyIDM5LjYwNjRDOTguMTA2NyAzOS42MDY0IDYyLjkwMzMgNzQuNzM2NyA2Mi45MDMzIDExOC4wNzJDNjIuOTAzMyAxNjEuNDA4IDk4LjEwNjcgMTk2LjUzOCAxNDEuNTMyIDE5Ni41MzhaIiBmaWxsPSIjREJFN0Y5Ii8+CiAgPC9nPgogIDxwYXRoIGQ9Ik0yNjcuMjggODQuNzAyMUwyMDQuNjc5IDcxLjM5NTdDMjAwLjM1NyA3MC40NzcxIDE5Ni4xMDkgNzMuMjM1OSAxOTUuMTkgNzcuNTU3NkwxNzguNTU4IDE1NS44MDlDMTc3LjYzOSAxNjAuMTMxIDE4MC4zOTggMTY0LjM3OSAxODQuNzE5IDE2NS4yOThMMjQ3LjMyMSAxNzguNjA0QzI1MS42NDMgMTc5LjUyMyAyNTUuODkxIDE3Ni43NjQgMjU2LjgwOSAxNzIuNDQyTDI3My40NDIgOTQuMTkwNUMyNzQuMzYxIDg5Ljg2ODggMjcxLjYwMiA4NS42MjA3IDI2Ny4yOCA4NC43MDIxWiIgZmlsbD0id2hpdGUiIHN0cm9rZT0iI0Q1REFFMCIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtZGFzaGFycmF5PSIyIDIiLz4KICA8cGF0aCBkPSJNMTIxLjMyMSA3MS4zOTU4TDU4LjcxOTUgODQuNzAyMkM1NC4zOTc3IDg1LjYyMDggNTEuNjM5IDg5Ljg2ODkgNTIuNTU3NiA5NC4xOTA3TDY5LjE5MDUgMTcyLjQ0MkM3MC4xMDkxIDE3Ni43NjQgNzQuMzU3MyAxNzkuNTIzIDc4LjY3OSAxNzguNjA0TDE0MS4yOCAxNjUuMjk4QzE0NS42MDIgMTY0LjM3OSAxNDguMzYxIDE2MC4xMzEgMTQ3LjQ0MiAxNTUuODFMMTMwLjgwOSA3Ny41NTc3QzEyOS44OTEgNzMuMjM2IDEyNS42NDMgNzAuNDc3MiAxMjEuMzIxIDcxLjM5NThaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjRDVEQUUwIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1kYXNoYXJyYXk9IjIgMiIvPgogIDxwYXRoIGQ9Ik0xOTUgNTZIMTMxQzEyNi41ODIgNTYgMTIzIDU5LjU4MTcgMTIzIDY0VjE0NEMxMjMgMTQ4LjQxOCAxMjYuNTgyIDE1MiAxMzEgMTUySDE5NUMxOTkuNDE4IDE1MiAyMDMgMTQ4LjQxOCAyMDMgMTQ0VjY0QzIwMyA1OS41ODE3IDE5OS40MTggNTYgMTk1IDU2WiIgZmlsbD0id2hpdGUiIHN0cm9rZT0iI0Q1REFFMCIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtZGFzaGFycmF5PSIyIDIiLz4KICA8cGF0aCBvcGFjaXR5PSIwLjQ1NTMzMyIgZD0iTTE2MyAxMjlDMTc2LjI1NSAxMjkgMTg3IDExOC4yNTUgMTg3IDEwNUMxODcgOTEuNzQ1MiAxNzYuMjU1IDgxIDE2MyA4MUMxNDkuNzQ1IDgxIDEzOSA5MS43NDUyIDEzOSAxMDVDMTM5IDExOC4yNTUgMTQ5Ljc0NSAxMjkgMTYzIDEyOVoiIGZpbGw9IiNENURBRTAiLz4KICA8cGF0aCBkPSJNMTYzIDEyMC42QzE2NC4zMjYgMTIwLjYgMTY1LjQgMTE5LjUyNiAxNjUuNCAxMTguMkMxNjUuNCAxMTYuODc1IDE2NC4zMjYgMTE1LjggMTYzIDExNS44QzE2MS42NzUgMTE1LjggMTYwLjYgMTE2Ljg3NSAxNjAuNiAxMTguMkMxNjAuNiAxMTkuNTI2IDE2MS42NzUgMTIwLjYgMTYzIDEyMC42WiIgZmlsbD0iI0MyQzZDQyIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUwLjM2MiAxMTFDMTUyLjY2MSAxMTEgMTU0LjYgMTA5LjU2MSAxNTQuNiAxMDcuMzA2QzE1NC42IDEwNS44ODEgMTUyLjIxNSAxMDYuMDU2IDE1Mi4yMTUgMTA3LjA5QzE1Mi4yMTUgMTA5LjEwNyAxNDguNjM1IDEwOS4xMjggMTQ4LjYzNSAxMDcuMDlDMTQ4LjY1MiAxMDUuOTQyIDE0Ni4yIDEwNS43OTMgMTQ2LjIgMTA3LjMwNkMxNDYuMiAxMDkuNTYxIDE0OC4wNjMgMTExIDE1MC4zNjIgMTExWiIgZmlsbD0iI0MyQzZDQyIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTc1LjU2MiAxMTFDMTc3Ljg2MSAxMTEgMTc5LjggMTA5LjU2MSAxNzkuOCAxMDcuMzA2QzE3OS44IDEwNS44ODEgMTc3LjQxNSAxMDYuMDU2IDE3Ny40MTUgMTA3LjA5QzE3Ny40MTUgMTA5LjEwNyAxNzMuODM0IDEwOS4xMjggMTczLjgzNCAxMDcuMDlDMTczLjg1MiAxMDUuOTQyIDE3MS40IDEwNS43OTMgMTcxLjQgMTA3LjMwNkMxNzEuNCAxMDkuNTYxIDE3My4yNjMgMTExIDE3NS41NjIgMTExWiIgZmlsbD0iI0MyQzZDQyIvPgo8L3N2Zz4K");
;// CONCATENATED MODULE: ./components/recurring-contributions/RecurringContributionsContainer.js



var RecurringContributionsContainer_excluded = ["recurringContributions", "account", "LoggedInUser", "isLoading", "displayFilters"];

var _defineMessages;

function RecurringContributionsContainer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function RecurringContributionsContainer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? RecurringContributionsContainer_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : RecurringContributionsContainer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

















var FILTERS = {
  ACTIVE: 'ACTIVE',
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY',
  CANCELLED: 'CANCELLED'
};
var I18nFilters = (0,lib.defineMessages)((_defineMessages = {}, defineProperty_default()(_defineMessages, FILTERS.ACTIVE, {
  id: "Subscriptions.Active",
  defaultMessage: [{
    "type": 0,
    "value": "Active"
  }]
}), defineProperty_default()(_defineMessages, FILTERS.MONTHLY, {
  id: "Frequency.Monthly",
  defaultMessage: [{
    "type": 0,
    "value": "Monthly"
  }]
}), defineProperty_default()(_defineMessages, FILTERS.YEARLY, {
  id: "Frequency.Yearly",
  defaultMessage: [{
    "type": 0,
    "value": "Yearly"
  }]
}), defineProperty_default()(_defineMessages, FILTERS.CANCELLED, {
  id: "Subscriptions.Cancelled",
  defaultMessage: [{
    "type": 0,
    "value": "Cancelled"
  }]
}), _defineMessages));
var CollectiveCardContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "RecurringContributionsContainer__CollectiveCardContainer",
  componentId: "sc-1511ja7-0"
})(["animation:", " 0.2s;"], StyledKeyframes/* fadeIn */.Ji);

var filterContributions = function filterContributions(contributions, filterName) {
  var isActive = function isActive(_ref) {
    var status = _ref.status;
    return status === order_status/* ORDER_STATUS.ACTIVE */.D.ACTIVE || status === order_status/* ORDER_STATUS.ERROR */.D.ERROR;
  };

  var isInactive = function isInactive(_ref2) {
    var status = _ref2.status;
    return status === order_status/* ORDER_STATUS.CANCELLED */.D.CANCELLED || status === order_status/* ORDER_STATUS.REJECTED */.D.REJECTED;
  };

  switch (filterName) {
    case FILTERS.ACTIVE:
      return contributions.filter(isActive);

    case FILTERS.MONTHLY:
      return contributions.filter(function (contrib) {
        return isActive(contrib) && contrib.frequency === 'MONTHLY';
      });

    case FILTERS.YEARLY:
      return contributions.filter(function (contrib) {
        return isActive(contrib) && contrib.frequency === 'YEARLY';
      });

    case FILTERS.CANCELLED:
      return contributions.filter(isInactive);

    default:
      return [];
  }
};

var RecurringContributionsContainer = function RecurringContributionsContainer(_ref3) {
  var recurringContributions = _ref3.recurringContributions,
      account = _ref3.account,
      LoggedInUser = _ref3.LoggedInUser,
      isLoading = _ref3.isLoading,
      displayFilters = _ref3.displayFilters,
      props = objectWithoutProperties_default()(_ref3, RecurringContributionsContainer_excluded);

  var isAdmin = Boolean(LoggedInUser === null || LoggedInUser === void 0 ? void 0 : LoggedInUser.isAdminOfCollective(account));
  var intl = (0,useIntl/* default */.Z)();

  var _React$useState = react.useState(),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      editingContributionId = _React$useState2[0],
      setEditingContributionId = _React$useState2[1];

  var _React$useState3 = react.useState(FILTERS.ACTIVE),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      filter = _React$useState4[0],
      setFilter = _React$useState4[1];

  var displayedRecurringContributions = react.useMemo(function () {
    var filteredContributions = filterContributions((recurringContributions === null || recurringContributions === void 0 ? void 0 : recurringContributions.nodes) || [], filter);
    return isAdmin ? filteredContributions : filteredContributions.filter(function (contrib) {
      return contrib.status !== order_status/* ORDER_STATUS.ERROR */.D.ERROR;
    });
  }, [recurringContributions, filter, isAdmin]); // Reset edit when changing filters and contribution is not in the list anymore

  react.useEffect(function () {
    if (!displayedRecurringContributions.some(function (c) {
      return c.id === editingContributionId;
    })) {
      setEditingContributionId(null);
    }
  }, [displayedRecurringContributions]);
  var filterOptions = react.useMemo(function () {
    return [{
      value: FILTERS.ACTIVE,
      label: intl.formatMessage(I18nFilters[FILTERS.ACTIVE])
    }, {
      value: FILTERS.MONTHLY,
      label: intl.formatMessage(I18nFilters[FILTERS.MONTHLY])
    }, {
      value: FILTERS.YEARLY,
      label: intl.formatMessage(I18nFilters[FILTERS.YEARLY])
    }, {
      value: FILTERS.CANCELLED,
      label: intl.formatMessage(I18nFilters[FILTERS.CANCELLED])
    }];
  });

  if (isLoading) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
      maxHeight: "400px",
      mt: 3
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, RecurringContributionsContainer_objectSpread(RecurringContributionsContainer_objectSpread({}, props), {}, {
    children: [displayFilters && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      mb: 3,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledSelectFilter/* StyledSelectFilter */.V, {
        inputId: "recurring-contribution-interval",
        onChange: function onChange(_ref4) {
          var value = _ref4.value;
          return setFilter(value);
        },
        value: {
          value: filter,
          label: intl.formatMessage(I18nFilters[filter])
        },
        options: filterOptions,
        maxWidth: "180px",
        disabled: isLoading,
        "data-cy": "recurring-contributions-interval"
      })
    }), displayedRecurringContributions.length ? /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Grid */.rj, {
      gridGap: 24,
      gridTemplateColumns: "repeat(auto-fill, minmax(275px, 1fr))",
      my: 2,
      children: displayedRecurringContributions.map(function (contribution) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(CollectiveCardContainer, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(recurring_contributions_RecurringContributionsCard, {
            collective: contribution.toAccount,
            status: contribution.status,
            contribution: contribution,
            position: "relative",
            account: account,
            isAdmin: isAdmin,
            isEditing: contribution.id === editingContributionId,
            canEdit: isAdmin && !editingContributionId,
            onEdit: function onEdit() {
              return setEditingContributionId(contribution.id);
            },
            onCloseEdit: function onCloseEdit() {
              return setEditingContributionId(null);
            },
            showPaymentMethod: isAdmin,
            "data-cy": "recurring-contribution-card"
          })
        }, contribution.id);
      })
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: "column",
      alignItems: "center",
      py: 4,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Image/* default */.Z, {
        src: EmptyCollectivesSectionImage,
        alt: "",
        width: 309,
        height: 200
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        color: "black.600",
        fontSize: "16px",
        mt: 5,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "RecurringContributions.none",
          defaultMessage: [{
            "type": 0,
            "value": "No recurring contributions to see here! 👀"
          }]
        })
      })]
    })]
  }));
};

RecurringContributionsContainer.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "RecurringContributionsContainer",
  "props": {
    "recurringContributions": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "account": {
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
      "required": false
    },
    "displayFilters": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isLoading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ var recurring_contributions_RecurringContributionsContainer = ((0,UserProvider/* withUser */.ns)(RecurringContributionsContainer));

/***/ }),

/***/ 19471:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": function() { return /* binding */ manageContributionsQuery; }
/* harmony export */ });
/* unused harmony export managedOrderFragment */
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15020);
/* harmony import */ var _collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5824);


var _templateObject, _templateObject2;



var managedOrderFragment = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  fragment ManagedOrderFields on Order {\n    id\n    legacyId\n    nextChargeDate\n    paymentMethod {\n      id\n      service\n      name\n      type\n      expiryDate\n      data\n      balance {\n        value\n        valueInCents\n        currency\n      }\n    }\n    amount {\n      value\n      valueInCents\n      currency\n    }\n    totalAmount {\n      value\n      valueInCents\n      currency\n    }\n    status\n    description\n    createdAt\n    frequency\n    tier {\n      id\n      name\n    }\n    totalDonations {\n      value\n      valueInCents\n      currency\n    }\n    fromAccount {\n      id\n      name\n      slug\n      isIncognito\n      type\n    }\n    toAccount {\n      id\n      slug\n      name\n      type\n      description\n      tags\n      imageUrl\n      settings\n      ... on AccountWithHost {\n        host {\n          id\n          slug\n          paypalClientId\n          supportedPaymentMethods\n        }\n      }\n      ... on Organization {\n        host {\n          id\n          slug\n          paypalClientId\n          supportedPaymentMethods\n        }\n      }\n    }\n    platformTipAmount {\n      value\n      valueInCents\n    }\n  }\n"])));
var manageContributionsQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_templateObject2 || (_templateObject2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  query RecurringContributions($slug: String!) {\n    account(slug: $slug) {\n      id\n      legacyId\n      slug\n      name\n      type\n      settings\n      imageUrl\n      features {\n        id\n        ...NavbarFields\n      }\n      ... on AccountWithParent {\n        parent {\n          id\n          slug\n        }\n      }\n      orders(filter: OUTGOING, onlySubscriptions: true, includeIncognito: true) {\n        totalCount\n        nodes {\n          id\n          ...ManagedOrderFields\n        }\n      }\n    }\n  }\n  ", "\n  ", "\n"])), _collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_1__/* .collectiveNavbarFieldsFragment */ .AS, managedOrderFragment);

/***/ })

}]);
//# sourceMappingURL=1503-656e6fef580ee05e.js.map