"use strict";
exports.id = 5593;
exports.ids = [5593];
exports.modules = {

/***/ 75593:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51858);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23672);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_maxBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11341);
/* harmony import */ var lodash_maxBy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_maxBy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93908);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46555);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17632);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69078);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29925);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_8__]);
uuid__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const getProgressColor = theme => theme.colors.primary[600];

const getEmptyProgressColor = () => '#e2e2e2';

const MAX_TITLE_LENGTH = 32;
const GoalContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
  displayName: "GoalsCover__GoalContainer",
  componentId: "sc-1y3145p-0"
})(["position:absolute;top:0;left:0;text-align:right;transition:width 3s;height:25px;color:", ";border-right:1px solid ", ";width:", ";z-index:", ";transition:", ";.caption{display:inline-block;padding:1rem 0.5rem 1rem 0.5rem;font-size:13px;line-height:15px;}.label{background:rgb(245,247,250);padding:0;line-height:1.5;font-size:13px;text-align:right;color:inherit;white-space:nowrap;}.amount{font-weight:500;}.interval{color:#aaaeb3;font-size:10px;font-weight:normal;}", " ", " ", " ", " ", " ", ""], props => props.theme.colors.black[700], props => props.goal.isReached ? getProgressColor(props.theme) : getEmptyProgressColor(props.theme), props => `${props.goal.progress * 100}%`, props => ['balance', 'yearlyBudget'].includes(props.goal.slug) ? 310 : (20 - props.index) * 10, props => !props.goal.animateProgress ? 'opacity 0.3s, height 1s, padding-top 1s' : 'opacity 2s, height 1s, padding-top 1s, width 2s ease-in-out;', props => props.goal.isReached && (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.css)(["color:", ";"], props.theme.colors.black[800]), props => props.goal.isReached && props.goal.position === 'below' && (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.css)(["border-top:4px solid ", ";"], getProgressColor(props.theme)), props => props.goal.position === 'above' && (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.css)(["border-bottom:4px solid ", ";top:auto;bottom:76px;.caption{margin-top:-5.5rem;}"], getEmptyProgressColor(props.theme)), props => {
  if (props.goal.level === 1) {
    if (props.goal.position === 'below') {
      return (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.css)(["height:50px;padding-top:4rem;border-right-style:dotted;border-right-color:", ";"], props.theme.colors.primary[300]);
    } else {
      return (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.css)(["height:70px;"]);
    }
  }
}, props => {
  if (props.goal.isOverlapping) {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.css)(["opacity:0.2;"]);
  } else {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.css)(["animation:", " 0.3s;"], _StyledKeyframes__WEBPACK_IMPORTED_MODULE_11__/* .fadeIn */ .Ji);
  }
}, props => props.goal.hidden && (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.css)(["opacity:0;"]));
const BarContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
  displayName: "GoalsCover__BarContainer",
  componentId: "sc-1y3145p-1"
})(["position:relative;width:100%;margin:6rem auto 1rem;min-height:80px;.withGoals{margin-top:10rem;}.max-level-above-1{margin-top:15rem;}@media (max-width:1400px){width:90%;}@media (max-width:420px){width:95%;}"]);

class GoalsCover extends (react__WEBPACK_IMPORTED_MODULE_5___default().Component) {
  constructor(props) {
    super(props);
    this.renderGoal = this.renderGoal.bind(this);
    this.updateGoals = lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(this.updateGoals.bind(this), 100, {
      maxWait: 200
    });
    this.labelsRefs = {};
    this.messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)({
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

    const maxGoal = lodash_maxBy__WEBPACK_IMPORTED_MODULE_2___default()(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(props.collective, 'settings.goals', []), g => g.title ? g.amount : 0);

    this.currentProgress = maxGoal ? this.getMaxCurrentAchievement() / maxGoal.amount : 1.0;
    this.interpolation = props.interpolation || lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(props.collective, 'settings.goalsInterpolation', 'auto');
    this.state = _objectSpread({}, this.populateGoals(true, true));
  }

  componentDidMount() {
    this.setState(_objectSpread(_objectSpread({}, this.populateGoals(false, true)), {}, {
      firstMount: true
    }));
    window.addEventListener('resize', this.updateGoals);
  }

  componentDidUpdate(oldProps) {
    if (this.state.firstMount || this.props.collective !== oldProps.collective) {
      this.updateGoals();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateGoals);
  }

  updateGoals(firstMount = false) {
    this.setState(_objectSpread(_objectSpread({}, this.populateGoals()), {}, {
      firstMount
    }));
  }
  /** Returns a percentage (0.0-1.0) that represent X position */


  getTranslatedPercentage(x) {
    const interpolation = this.props.interpolation || this.interpolation;

    if (interpolation === 'logarithm' || interpolation === 'auto' && this.currentProgress <= 0.3) {
      // See https://www.desmos.com/calculator/30pua5xx7q
      return -1 * Math.pow(x - 1, 2) + 1;
    }

    return x;
  }
  /** Create goal object with correct defaults and store a ref for React */


  createGoal(slug, params) {
    this.labelsRefs[slug] = this.labelsRefs[slug] || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createRef();
    return _objectSpread(_objectSpread({
      precision: 0,
      isReached: false,
      level: 0,
      position: 'above'
    }, params), {}, {
      slug
    });
  }
  /** Returns the main goals current progress, either max balance or annual budget */


  getMaxCurrentAchievement() {
    const {
      collective
    } = this.props;
    return Math.max(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(collective, 'stats.balance'), lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(collective, 'stats.yearlyBudget', 0));
  }
  /**
   * Returns the base goals (balance, yearly budget...) without custom goals.
   * All goals returned here have a slug prefilled.
   */


  getInitialGoals() {
    const {
      intl,
      collective
    } = this.props;

    const settingGoals = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(this.props.collective, 'settings.goals', []);

    const hasMonthlyGoal = settingGoals.some(goal => goal.type === 'monthlyBudget'); // Always show current balance

    const goals = [this.createGoal('balance', {
      animateProgress: true,
      title: intl.formatMessage(this.messages['bar.balance']),
      amount: lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(collective, 'stats.balance'),
      precision: 2,
      position: 'below',
      isReached: true
    })]; // Add yearly and monthly budgets

    if (lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(collective, 'stats.yearlyBudget') > 0 && lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(collective, 'stats.yearlyBudget') !== lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(collective, 'stats.balance')) {
      if (hasMonthlyGoal) {
        goals.push(this.createGoal('monthlyBudget', {
          animateProgress: true,
          title: intl.formatMessage(this.messages['bar.monthlyBudget']),
          amount: lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(collective, 'stats.yearlyBudget') / 12,
          precision: 0,
          position: 'below',
          isReached: true
        }));
      } else {
        goals.push(this.createGoal('yearlyBudget', {
          animateProgress: true,
          title: intl.formatMessage(this.messages['bar.yearlyBudget']),
          amount: lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(collective, 'stats.yearlyBudget'),
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


  getCustomGoals(maxCustomGoalsToShow) {
    const settingsGoals = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(this.props.collective, 'settings.goals', []);

    const sortedGoals = lodash_sortBy__WEBPACK_IMPORTED_MODULE_1___default()(settingsGoals, 'amount');

    const goals = sortedGoals.map((goal, idx) => this.createGoal(`goal-${idx}-${goal.key || (0,uuid__WEBPACK_IMPORTED_MODULE_8__.v4)()}`, goal)); // No need to remove goals

    if (goals.length <= maxCustomGoalsToShow) {
      return goals;
    } // Filter goals, ensure we keep the last one


    const lastGoal = goals[goals.length - 1];

    if (!maxCustomGoalsToShow) {
      return [lastGoal];
    }

    return [...goals.slice(0, maxCustomGoalsToShow - 1), lastGoal];
  }
  /**
   * If a ref exists for this goal, get its real with. Otherwise estimate
   * it based on its title (for initial rendering and server-side rendering)
   */


  getGoalLabelWidthInPx(goal) {
    const ref = this.labelsRefs[goal.slug];

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


  percentageToPx(availWidth, percentage) {
    const progressBarPercentageWidth = availWidth > 420 ? 0.8 : 0.95;
    const progressBarWidthInPx = availWidth * progressBarPercentageWidth;
    return percentage * progressBarWidthInPx;
  }
  /** Given a pixels size, returns its value as a percentage of availWidth */


  pxToPercentage(availWidth, widthInPx) {
    return widthInPx / availWidth;
  }
  /** Returns the overlap size if any, 0 otherwise */


  goalsOverlapInPx(availWidth, maxAmount, prevGoal, goal) {
    if (!prevGoal) {
      return 0;
    } // No overlap is possible if not at the same position or level


    if (goal.position !== prevGoal.position || goal.level !== prevGoal.level) {
      return 0;
    } // Get position and distance between the markers


    const prevX = this.percentageToPx(availWidth, this.getTranslatedPercentage(prevGoal.amount / maxAmount));
    const curX = this.percentageToPx(availWidth, this.getTranslatedPercentage(goal.amount / maxAmount));
    const prevWidth = this.getGoalLabelWidthInPx(prevGoal); // If goal is at the far left of the graphic, label will be moved to the right

    const xLabelOffset = prevX - prevWidth;
    const distance = xLabelOffset < 0 ? curX - prevX + xLabelOffset : curX - prevX; // Calculate overlap size

    const curWidth = this.getGoalLabelWidthInPx(goal);
    const offset = distance - curWidth;
    return offset < 0 ? -offset : 0;
  }
  /**
   * Test goals position against the first previous goal on the same position / level
   *
   * @returns {goal, overlap}
   */


  overlapWithPrev(availWidth, maxAmount, prevGoals, goal) {
    for (let i = prevGoals.length - 1; i >= 0; i--) {
      const prevGoal = prevGoals[i];

      if (goal.position === prevGoal.position && goal.level === prevGoal.level) {
        return {
          prevGoal,
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


  populateGoals(isServerSide, isInitialRender) {
    // Show only one custom goal on mobile
    let maxLevelAbove = 0;
    let availWidth = 700;
    let maxCustomGoalsToShow = 10;

    if (isServerSide) {
      maxCustomGoalsToShow = 0;
    } else {
      availWidth = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(window, 'screen.availWidth') || 560;

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


    const initialGoals = this.getInitialGoals();
    const customGoals = this.getCustomGoals(maxCustomGoalsToShow);

    const goals = lodash_sortBy__WEBPACK_IMPORTED_MODULE_1___default()([...initialGoals, ...customGoals], 'amount');

    const maxAmount = lodash_maxBy__WEBPACK_IMPORTED_MODULE_2___default()(goals, g => g.amount).amount;

    const maxAchievedYet = this.getMaxCurrentAchievement(); // Set goals positions

    for (let i = 0; i < goals.length; i++) {
      const isLastGoal = i === goals.length - 1;
      const goal = goals[i];
      goal.progress = this.getTranslatedPercentage(goal.amount / maxAmount);
      goal.isReached = goal.isReached || maxAchievedYet > goal.amount;
      goal.hidden = false;
      const prevGoals = goals.slice(0, i);

      const overlapWithPrev = goal => this.overlapWithPrev(availWidth, maxAmount, prevGoals, goal);

      const {
        prevGoal,
        overlap
      } = overlapWithPrev(goal); // -- Overlap 😱 --

      if (overlap > 0) {
        // 1st strategy: we change the level by 1
        const newLevel = Number(!prevGoal.level);

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
            const newProgress = goal.progress + this.pxToPercentage(availWidth, overlap);
            goal.progress = newProgress <= 1 ? newProgress : 1;
          } else {
            prevGoal.isOverlapping = true;
            const newProgress = prevGoal.progress - this.pxToPercentage(availWidth, overlap);
            prevGoal.progress = newProgress >= 0 ? newProgress : 0;
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
    }

    return {
      goals,
      maxAmount,
      maxLevelAbove,
      hasCustomGoals: customGoals.length > 0
    };
  }

  getDivTitle(title, description) {
    if (title && description) {
      return `${title}\n\n${description}`;
    } else {
      return title || description || '';
    }
  }

  renderGoal(goal, index) {
    const {
      collective,
      intl
    } = this.props;
    const slug = goal.slug;
    const amount = (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_9__/* .formatCurrency */ .xG)(goal.amount || 0, collective.currency, {
      precision: goal.precision || 0,
      locale: intl.locale
    });
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(GoalContainer, {
      className: `goal ${goal.slug}`,
      goal: goal,
      index: index,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "caption",
        title: this.getDivTitle(goal.title, goal.description),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
          className: "label",
          ref: this.labelsRefs[goal.slug],
          children: goal.title ? lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default()(goal.title, {
            length: MAX_TITLE_LENGTH
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
            id: "ContributionType.Goal",
            defaultMessage: [{
              "type": 0,
              "value": "Goal"
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: "amount",
          children: [amount, (goal.type === 'yearlyBudget' || goal.type === 'monthlyBudget') && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
            className: "interval",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
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

  render() {
    const {
      collective
    } = this.props;

    if (!collective) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {});
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(BarContainer, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        className: `max-level-above-${this.state.maxLevelAbove} ${this.state.hasCustomGoals ? 'withGoals' : ''}`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          children: this.state.goals && this.state.goals.map((goal, index) => {
            return this.renderGoal(goal, index);
          })
        })
      })
    });
  }

}

_defineProperty(GoalsCover, "defaultProps", {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_6__.injectIntl)(GoalsCover));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;