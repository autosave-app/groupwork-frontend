(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[5593],{

/***/ 84753:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseExtremum = __webpack_require__(56029),
    baseGt = __webpack_require__(53325),
    baseIteratee = __webpack_require__(67206);

/**
 * This method is like `_.max` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.maxBy(objects, function(o) { return o.n; });
 * // => { 'n': 2 }
 *
 * // The `_.property` iteratee shorthand.
 * _.maxBy(objects, 'n');
 * // => { 'n': 2 }
 */
function maxBy(array, iteratee) {
  return (array && array.length)
    ? baseExtremum(array, baseIteratee(iteratee, 2), baseGt)
    : undefined;
}

module.exports = maxBy;


/***/ }),

/***/ 75593:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7980);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33227);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88361);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92191);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85971);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52715);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91193);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39138);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89734);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_maxBy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84753);
/* harmony import */ var lodash_maxBy__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_maxBy__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23279);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(44012);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(74806);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(52015);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(57632);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(17632);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(69078);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(29925);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(85893);














function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }











var getProgressColor = function getProgressColor(theme) {
  return theme.colors.primary[600];
};

var getEmptyProgressColor = function getEmptyProgressColor() {
  return '#e2e2e2';
};

var MAX_TITLE_LENGTH = 32;
var GoalContainer = styled_components__WEBPACK_IMPORTED_MODULE_18__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "GoalsCover__GoalContainer",
  componentId: "sc-1y3145p-0"
})(["position:absolute;top:0;left:0;text-align:right;transition:width 3s;height:25px;color:", ";border-right:1px solid ", ";width:", ";z-index:", ";transition:", ";.caption{display:inline-block;padding:1rem 0.5rem 1rem 0.5rem;font-size:13px;line-height:15px;}.label{background:rgb(245,247,250);padding:0;line-height:1.5;font-size:13px;text-align:right;color:inherit;white-space:nowrap;}.amount{font-weight:500;}.interval{color:#aaaeb3;font-size:10px;font-weight:normal;}", " ", " ", " ", " ", " ", ""], function (props) {
  return props.theme.colors.black[700];
}, function (props) {
  return props.goal.isReached ? getProgressColor(props.theme) : getEmptyProgressColor(props.theme);
}, function (props) {
  return "".concat(props.goal.progress * 100, "%");
}, function (props) {
  return ['balance', 'yearlyBudget'].includes(props.goal.slug) ? 310 : (20 - props.index) * 10;
}, function (props) {
  return !props.goal.animateProgress ? 'opacity 0.3s, height 1s, padding-top 1s' : 'opacity 2s, height 1s, padding-top 1s, width 2s ease-in-out;';
}, function (props) {
  return props.goal.isReached && (0,styled_components__WEBPACK_IMPORTED_MODULE_18__/* .css */ .iv)(["color:", ";"], props.theme.colors.black[800]);
}, function (props) {
  return props.goal.isReached && props.goal.position === 'below' && (0,styled_components__WEBPACK_IMPORTED_MODULE_18__/* .css */ .iv)(["border-top:4px solid ", ";"], getProgressColor(props.theme));
}, function (props) {
  return props.goal.position === 'above' && (0,styled_components__WEBPACK_IMPORTED_MODULE_18__/* .css */ .iv)(["border-bottom:4px solid ", ";top:auto;bottom:76px;.caption{margin-top:-5.5rem;}"], getEmptyProgressColor(props.theme));
}, function (props) {
  if (props.goal.level === 1) {
    if (props.goal.position === 'below') {
      return (0,styled_components__WEBPACK_IMPORTED_MODULE_18__/* .css */ .iv)(["height:50px;padding-top:4rem;border-right-style:dotted;border-right-color:", ";"], props.theme.colors.primary[300]);
    } else {
      return (0,styled_components__WEBPACK_IMPORTED_MODULE_18__/* .css */ .iv)(["height:70px;"]);
    }
  }
}, function (props) {
  if (props.goal.isOverlapping) {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_18__/* .css */ .iv)(["opacity:0.2;"]);
  } else {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_18__/* .css */ .iv)(["animation:", " 0.3s;"], _StyledKeyframes__WEBPACK_IMPORTED_MODULE_16__/* .fadeIn */ .Ji);
  }
}, function (props) {
  return props.goal.hidden && (0,styled_components__WEBPACK_IMPORTED_MODULE_18__/* .css */ .iv)(["opacity:0;"]);
});
var BarContainer = styled_components__WEBPACK_IMPORTED_MODULE_18__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "GoalsCover__BarContainer",
  componentId: "sc-1y3145p-1"
})(["position:relative;width:100%;margin:6rem auto 1rem;min-height:80px;.withGoals{margin-top:10rem;}.max-level-above-1{margin-top:15rem;}@media (max-width:1400px){width:90%;}@media (max-width:420px){width:95%;}"]);

var GoalsCover = /*#__PURE__*/function (_React$Component) {
  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_4___default()(GoalsCover, _React$Component);

  var _super = _createSuper(GoalsCover);

  function GoalsCover(props) {
    var _this;

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, GoalsCover);

    _this = _super.call(this, props);
    _this.renderGoal = _this.renderGoal.bind(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.updateGoals = lodash_debounce__WEBPACK_IMPORTED_MODULE_12___default()(_this.updateGoals.bind(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3___default()(_this)), 100, {
      maxWait: 200
    });
    _this.labelsRefs = {};
    _this.messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_19__.defineMessages)({
      'bar.balance': {
        id: "cover.bar.balance",
        defaultMessage: [{
          "type": 0,
          "value": "Today's Balance"
        }]
      },
      'bar.yearlyBudget': {
        id: "cover.bar.yearlyBudget",
        defaultMessage: [{
          "type": 0,
          "value": "Estimated Annual Budget"
        }]
      },
      'bar.monthlyBudget': {
        id: "cover.bar.monthlyBudget",
        defaultMessage: [{
          "type": 0,
          "value": "Estimated Monthly Budget"
        }]
      }
    });

    var maxGoal = lodash_maxBy__WEBPACK_IMPORTED_MODULE_10___default()(lodash_get__WEBPACK_IMPORTED_MODULE_11___default()(props.collective, 'settings.goals', []), function (g) {
      return g.title ? g.amount : 0;
    });

    _this.currentProgress = maxGoal ? _this.getMaxCurrentAchievement() / maxGoal.amount : 1.0;
    _this.interpolation = props.interpolation || lodash_get__WEBPACK_IMPORTED_MODULE_11___default()(props.collective, 'settings.goalsInterpolation', 'auto');
    _this.state = _objectSpread({}, _this.populateGoals(true, true));
    return _this;
  }

  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(GoalsCover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState(_objectSpread(_objectSpread({}, this.populateGoals(false, true)), {}, {
        firstMount: true
      }));
      window.addEventListener('resize', this.updateGoals);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      if (this.state.firstMount || this.props.collective !== oldProps.collective) {
        this.updateGoals();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateGoals);
    }
  }, {
    key: "updateGoals",
    value: function updateGoals() {
      var firstMount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.setState(_objectSpread(_objectSpread({}, this.populateGoals()), {}, {
        firstMount: firstMount
      }));
    }
    /** Returns a percentage (0.0-1.0) that represent X position */

  }, {
    key: "getTranslatedPercentage",
    value: function getTranslatedPercentage(x) {
      var interpolation = this.props.interpolation || this.interpolation;

      if (interpolation === 'logarithm' || interpolation === 'auto' && this.currentProgress <= 0.3) {
        // See https://www.desmos.com/calculator/30pua5xx7q
        return -1 * Math.pow(x - 1, 2) + 1;
      }

      return x;
    }
    /** Create goal object with correct defaults and store a ref for React */

  }, {
    key: "createGoal",
    value: function createGoal(slug, params) {
      this.labelsRefs[slug] = this.labelsRefs[slug] || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createRef();
      return _objectSpread(_objectSpread({
        precision: 0,
        isReached: false,
        level: 0,
        position: 'above'
      }, params), {}, {
        slug: slug
      });
    }
    /** Returns the main goals current progress, either max balance or annual budget */

  }, {
    key: "getMaxCurrentAchievement",
    value: function getMaxCurrentAchievement() {
      var collective = this.props.collective;
      return Math.max(lodash_get__WEBPACK_IMPORTED_MODULE_11___default()(collective, 'stats.balance'), lodash_get__WEBPACK_IMPORTED_MODULE_11___default()(collective, 'stats.yearlyBudget', 0));
    }
    /**
     * Returns the base goals (balance, yearly budget...) without custom goals.
     * All goals returned here have a slug prefilled.
     */

  }, {
    key: "getInitialGoals",
    value: function getInitialGoals() {
      var _this$props = this.props,
          intl = _this$props.intl,
          collective = _this$props.collective;

      var settingGoals = lodash_get__WEBPACK_IMPORTED_MODULE_11___default()(this.props.collective, 'settings.goals', []);

      var hasMonthlyGoal = settingGoals.some(function (goal) {
        return goal.type === 'monthlyBudget';
      }); // Always show current balance

      var goals = [this.createGoal('balance', {
        animateProgress: true,
        title: intl.formatMessage(this.messages['bar.balance']),
        amount: lodash_get__WEBPACK_IMPORTED_MODULE_11___default()(collective, 'stats.balance'),
        precision: 2,
        position: 'below',
        isReached: true
      })]; // Add yearly and monthly budgets

      if (lodash_get__WEBPACK_IMPORTED_MODULE_11___default()(collective, 'stats.yearlyBudget') > 0 && lodash_get__WEBPACK_IMPORTED_MODULE_11___default()(collective, 'stats.yearlyBudget') !== lodash_get__WEBPACK_IMPORTED_MODULE_11___default()(collective, 'stats.balance')) {
        if (hasMonthlyGoal) {
          goals.push(this.createGoal('monthlyBudget', {
            animateProgress: true,
            title: intl.formatMessage(this.messages['bar.monthlyBudget']),
            amount: lodash_get__WEBPACK_IMPORTED_MODULE_11___default()(collective, 'stats.yearlyBudget') / 12,
            precision: 0,
            position: 'below',
            isReached: true
          }));
        } else {
          goals.push(this.createGoal('yearlyBudget', {
            animateProgress: true,
            title: intl.formatMessage(this.messages['bar.yearlyBudget']),
            amount: lodash_get__WEBPACK_IMPORTED_MODULE_11___default()(collective, 'stats.yearlyBudget'),
            precision: 0,
            position: 'below',
            isReached: true
          }));
        }
      } // Animate only the most advanced one


      if (goals.length === 2) {
        if (goals[0].amount <= goals[1].amount) {
          goals[0].animateProgress = false;
        } else {
          goals[1].animateProgress = false;
        }
      }

      return goals;
    }
    /**
     * Get at most `maxCustomGoalsToShow` custom goals. If goals are filtered,
     * we make sure to always return the last one to have a complete progress bar.
     *
     * Also adds a unique slug to goals.
     */

  }, {
    key: "getCustomGoals",
    value: function getCustomGoals(maxCustomGoalsToShow) {
      var _this2 = this;

      var settingsGoals = lodash_get__WEBPACK_IMPORTED_MODULE_11___default()(this.props.collective, 'settings.goals', []);

      var sortedGoals = lodash_sortBy__WEBPACK_IMPORTED_MODULE_9___default()(settingsGoals, 'amount');

      var goals = sortedGoals.map(function (goal, idx) {
        return _this2.createGoal("goal-".concat(idx, "-").concat(goal.key || (0,uuid__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)()), goal);
      }); // No need to remove goals

      if (goals.length <= maxCustomGoalsToShow) {
        return goals;
      } // Filter goals, ensure we keep the last one


      var lastGoal = goals[goals.length - 1];

      if (!maxCustomGoalsToShow) {
        return [lastGoal];
      }

      return [].concat(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(goals.slice(0, maxCustomGoalsToShow - 1)), [lastGoal]);
    }
    /**
     * If a ref exists for this goal, get its real with. Otherwise estimate
     * it based on its title (for initial rendering and server-side rendering)
     */

  }, {
    key: "getGoalLabelWidthInPx",
    value: function getGoalLabelWidthInPx(goal) {
      var ref = this.labelsRefs[goal.slug];

      if (ref && ref.current) {
        return ref.current.offsetWidth + 15; // Add a bigger hit box
      } else if (goal.title) {
        return Math.min(MAX_TITLE_LENGTH, goal.title.length) * 8;
      } else {
        // When there's no title we just show a single word - "Goal".
        // 12 characters should be enough for most languages.
        return 12 * 8;
      }
    }
    /** Given a percent size, returns its value in pixels */

  }, {
    key: "percentageToPx",
    value: function percentageToPx(availWidth, percentage) {
      var progressBarPercentageWidth = availWidth > 420 ? 0.8 : 0.95;
      var progressBarWidthInPx = availWidth * progressBarPercentageWidth;
      return percentage * progressBarWidthInPx;
    }
    /** Given a pixels size, returns its value as a percentage of availWidth */

  }, {
    key: "pxToPercentage",
    value: function pxToPercentage(availWidth, widthInPx) {
      return widthInPx / availWidth;
    }
    /** Returns the overlap size if any, 0 otherwise */

  }, {
    key: "goalsOverlapInPx",
    value: function goalsOverlapInPx(availWidth, maxAmount, prevGoal, goal) {
      if (!prevGoal) {
        return 0;
      } // No overlap is possible if not at the same position or level


      if (goal.position !== prevGoal.position || goal.level !== prevGoal.level) {
        return 0;
      } // Get position and distance between the markers


      var prevX = this.percentageToPx(availWidth, this.getTranslatedPercentage(prevGoal.amount / maxAmount));
      var curX = this.percentageToPx(availWidth, this.getTranslatedPercentage(goal.amount / maxAmount));
      var prevWidth = this.getGoalLabelWidthInPx(prevGoal); // If goal is at the far left of the graphic, label will be moved to the right

      var xLabelOffset = prevX - prevWidth;
      var distance = xLabelOffset < 0 ? curX - prevX + xLabelOffset : curX - prevX; // Calculate overlap size

      var curWidth = this.getGoalLabelWidthInPx(goal);
      var offset = distance - curWidth;
      return offset < 0 ? -offset : 0;
    }
    /**
     * Test goals position against the first previous goal on the same position / level
     *
     * @returns {goal, overlap}
     */

  }, {
    key: "overlapWithPrev",
    value: function overlapWithPrev(availWidth, maxAmount, prevGoals, goal) {
      for (var i = prevGoals.length - 1; i >= 0; i--) {
        var prevGoal = prevGoals[i];

        if (goal.position === prevGoal.position && goal.level === prevGoal.level) {
          return {
            prevGoal: prevGoal,
            overlap: this.goalsOverlapInPx(availWidth, maxAmount, prevGoal, goal)
          };
        }
      }

      return {
        prevGoal: null,
        overlap: 0
      };
    }
    /** @returns {Object} {goals, hasCustomGoals, maxAmount, maxLevelAbove} */

  }, {
    key: "populateGoals",
    value: function populateGoals(isServerSide, isInitialRender) {
      var _this3 = this;

      // Show only one custom goal on mobile
      var maxLevelAbove = 0;
      var availWidth = 700;
      var maxCustomGoalsToShow = 10;

      if (isServerSide) {
        maxCustomGoalsToShow = 0;
      } else {
        availWidth = lodash_get__WEBPACK_IMPORTED_MODULE_11___default()(window, 'screen.availWidth') || 560;

        if (availWidth <= 560) {
          maxCustomGoalsToShow = 0;
        } else if (availWidth < 728) {
          maxCustomGoalsToShow = 1;
        } else if (availWidth < 896) {
          maxCustomGoalsToShow = 2;
        } else if (availWidth < 1120) {
          maxCustomGoalsToShow = 3;
        }
      } // Get all goals sorted by amount


      var initialGoals = this.getInitialGoals();
      var customGoals = this.getCustomGoals(maxCustomGoalsToShow);

      var goals = lodash_sortBy__WEBPACK_IMPORTED_MODULE_9___default()([].concat(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(initialGoals), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(customGoals)), 'amount');

      var maxAmount = lodash_maxBy__WEBPACK_IMPORTED_MODULE_10___default()(goals, function (g) {
        return g.amount;
      }).amount;

      var maxAchievedYet = this.getMaxCurrentAchievement(); // Set goals positions

      var _loop = function _loop(i) {
        var isLastGoal = i === goals.length - 1;
        var goal = goals[i];
        goal.progress = _this3.getTranslatedPercentage(goal.amount / maxAmount);
        goal.isReached = goal.isReached || maxAchievedYet > goal.amount;
        goal.hidden = false;
        var prevGoals = goals.slice(0, i);

        var overlapWithPrev = function overlapWithPrev(goal) {
          return _this3.overlapWithPrev(availWidth, maxAmount, prevGoals, goal);
        };

        var _overlapWithPrev = overlapWithPrev(goal),
            prevGoal = _overlapWithPrev.prevGoal,
            overlap = _overlapWithPrev.overlap; // -- Overlap 😱 --


        if (overlap > 0) {
          // 1st strategy: we change the level by 1
          var newLevel = Number(!prevGoal.level);

          if (overlapWithPrev(_objectSpread(_objectSpread({}, goal), {}, {
            level: newLevel
          })).overlap === 0) {
            goal.level = newLevel;

            if (goal.position === 'above') {
              maxLevelAbove = Math.max(maxLevelAbove, newLevel);
            }
          } else {
            // 2nd strategy: we shift by given offset, and we change opacity
            // - of the prev goal if this is last goal, of the current otherwise
            // Will not shift at less than 0% or more than 100%
            if (!isLastGoal) {
              goal.isOverlapping = true;

              var newProgress = goal.progress + _this3.pxToPercentage(availWidth, overlap);

              goal.progress = newProgress <= 1 ? newProgress : 1;
            } else {
              prevGoal.isOverlapping = true;

              var _newProgress = prevGoal.progress - _this3.pxToPercentage(availWidth, overlap);

              prevGoal.progress = _newProgress >= 0 ? _newProgress : 0;
            }
          }
        } // Change progress to animate goal. Never animate the last goal as it would
        // result in a partial progress bar for first rendering. Hide when rendered
        // on server side to avoid getting the marker stuck while waiting for
        // re-hydrating


        if (goal.animateProgress && !isLastGoal) {
          if (isServerSide) {
            goal.hidden = true;
          }

          if (isInitialRender) {
            goal.progress = 0;
          }
        }
      };

      for (var i = 0; i < goals.length; i++) {
        _loop(i);
      }

      return {
        goals: goals,
        maxAmount: maxAmount,
        maxLevelAbove: maxLevelAbove,
        hasCustomGoals: customGoals.length > 0
      };
    }
  }, {
    key: "getDivTitle",
    value: function getDivTitle(title, description) {
      if (title && description) {
        return "".concat(title, "\n\n").concat(description);
      } else {
        return title || description || '';
      }
    }
  }, {
    key: "renderGoal",
    value: function renderGoal(goal, index) {
      var _this$props2 = this.props,
          collective = _this$props2.collective,
          intl = _this$props2.intl;
      var slug = goal.slug;
      var amount = (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_14__/* .formatCurrency */ .xG)(goal.amount || 0, collective.currency, {
        precision: goal.precision || 0,
        locale: intl.locale
      });
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(GoalContainer, {
        className: "goal ".concat(goal.slug),
        goal: goal,
        index: index,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: "caption",
          title: this.getDivTitle(goal.title, goal.description),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
            className: "label",
            ref: this.labelsRefs[goal.slug],
            children: goal.title ? lodash_truncate__WEBPACK_IMPORTED_MODULE_8___default()(goal.title, {
              length: MAX_TITLE_LENGTH
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
              id: "ContributionType.Goal",
              defaultMessage: [{
                "type": 0,
                "value": "Goal"
              }]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "amount",
            children: [amount, (goal.type === 'yearlyBudget' || goal.type === 'monthlyBudget') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
              className: "interval",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
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
                  interval: goal.type === 'yearlyBudget' ? 'year' : 'month'
                }
              })
            })]
          })]
        })
      }, slug);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var collective = this.props.collective;

      if (!collective) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {});
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(BarContainer, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          className: "max-level-above-".concat(this.state.maxLevelAbove, " ").concat(this.state.hasCustomGoals ? 'withGoals' : ''),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            children: this.state.goals && this.state.goals.map(function (goal, index) {
              return _this4.renderGoal(goal, index);
            })
          })
        })
      });
    }
  }]);

  return GoalsCover;
}(react__WEBPACK_IMPORTED_MODULE_13__.Component);

_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(GoalsCover, "defaultProps", {
  interpolation: 'auto'
});

GoalsCover.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "updateGoals",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "firstMount",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getTranslatedPercentage",
    "docblock": "Returns a percentage (0.0-1.0) that represent X position",
    "modifiers": [],
    "params": [{
      "name": "x"
    }],
    "returns": null,
    "description": "Returns a percentage (0.0-1.0) that represent X position"
  }, {
    "name": "createGoal",
    "docblock": "Create goal object with correct defaults and store a ref for React",
    "modifiers": [],
    "params": [{
      "name": "slug"
    }, {
      "name": "params"
    }],
    "returns": null,
    "description": "Create goal object with correct defaults and store a ref for React"
  }, {
    "name": "getMaxCurrentAchievement",
    "docblock": "Returns the main goals current progress, either max balance or annual budget",
    "modifiers": [],
    "params": [],
    "returns": null,
    "description": "Returns the main goals current progress, either max balance or annual budget"
  }, {
    "name": "getInitialGoals",
    "docblock": "Returns the base goals (balance, yearly budget...) without custom goals.\nAll goals returned here have a slug prefilled.",
    "modifiers": [],
    "params": [],
    "returns": null,
    "description": "Returns the base goals (balance, yearly budget...) without custom goals.\nAll goals returned here have a slug prefilled."
  }, {
    "name": "getCustomGoals",
    "docblock": "Get at most `maxCustomGoalsToShow` custom goals. If goals are filtered,\nwe make sure to always return the last one to have a complete progress bar.\n\nAlso adds a unique slug to goals.",
    "modifiers": [],
    "params": [{
      "name": "maxCustomGoalsToShow"
    }],
    "returns": null,
    "description": "Get at most `maxCustomGoalsToShow` custom goals. If goals are filtered,\nwe make sure to always return the last one to have a complete progress bar.\n\nAlso adds a unique slug to goals."
  }, {
    "name": "getGoalLabelWidthInPx",
    "docblock": "If a ref exists for this goal, get its real with. Otherwise estimate\nit based on its title (for initial rendering and server-side rendering)",
    "modifiers": [],
    "params": [{
      "name": "goal"
    }],
    "returns": null,
    "description": "If a ref exists for this goal, get its real with. Otherwise estimate\nit based on its title (for initial rendering and server-side rendering)"
  }, {
    "name": "percentageToPx",
    "docblock": "Given a percent size, returns its value in pixels",
    "modifiers": [],
    "params": [{
      "name": "availWidth"
    }, {
      "name": "percentage"
    }],
    "returns": null,
    "description": "Given a percent size, returns its value in pixels"
  }, {
    "name": "pxToPercentage",
    "docblock": "Given a pixels size, returns its value as a percentage of availWidth",
    "modifiers": [],
    "params": [{
      "name": "availWidth"
    }, {
      "name": "widthInPx"
    }],
    "returns": null,
    "description": "Given a pixels size, returns its value as a percentage of availWidth"
  }, {
    "name": "goalsOverlapInPx",
    "docblock": "Returns the overlap size if any, 0 otherwise",
    "modifiers": [],
    "params": [{
      "name": "availWidth"
    }, {
      "name": "maxAmount"
    }, {
      "name": "prevGoal"
    }, {
      "name": "goal"
    }],
    "returns": null,
    "description": "Returns the overlap size if any, 0 otherwise"
  }, {
    "name": "overlapWithPrev",
    "docblock": "Test goals position against the first previous goal on the same position / level\n\n@returns {goal, overlap}",
    "modifiers": [],
    "params": [{
      "name": "availWidth"
    }, {
      "name": "maxAmount"
    }, {
      "name": "prevGoals"
    }, {
      "name": "goal"
    }],
    "returns": null,
    "description": "Test goals position against the first previous goal on the same position / level"
  }, {
    "name": "populateGoals",
    "docblock": "@returns {Object} {goals, hasCustomGoals, maxAmount, maxLevelAbove}",
    "modifiers": [],
    "params": [{
      "name": "isServerSide"
    }, {
      "name": "isInitialRender"
    }],
    "returns": {
      "description": "{goals, hasCustomGoals, maxAmount, maxLevelAbove}",
      "type": {
        "name": "Object"
      }
    },
    "description": null
  }, {
    "name": "getDivTitle",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "title",
      "type": null
    }, {
      "name": "description",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderGoal",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "goal",
      "type": null
    }, {
      "name": "index",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "GoalsCover",
  "props": {
    "interpolation": {
      "defaultValue": {
        "value": "'auto'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'linear'",
          "computed": false
        }, {
          "value": "'logarithm'",
          "computed": false
        }, {
          "value": "'auto'",
          "computed": false
        }]
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
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_intl__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .ZP)(GoalsCover));

/***/ })

}]);
//# sourceMappingURL=5593.604e07eb5084f233.js.map