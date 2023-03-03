(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2169],{

/***/ 65598:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46336);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50056);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44012);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52015);
/* harmony import */ var _lib_withViewport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74387);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _StyledSpinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(771);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85893);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }













var Circle = styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"].svg.withConfig */ .ZP.svg.withConfig({
  displayName: "StepsProgress__Circle",
  componentId: "sc-1xgfvkb-0"
})(["circle{fill:", ";stroke:#c4c7cc;stroke-width:1px;", " ", " ", "}text{font-size:14px;", "}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__/* .themeGet */ .R)('colors.white.full'), function (props) {
  return !props.disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* .css */ .iv)(["stroke:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__/* .themeGet */ .R)('colors.primary.600'));
}, function (props) {
  return !props.disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* .css */ .iv)(["cursor:pointer;stroke-width:2px;&:hover{fill:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__/* .themeGet */ .R)('colors.black.100'));
}, function (props) {
  return props.checked && (props.disabled ? (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* .css */ .iv)(["fill:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__/* .themeGet */ .R)('colors.black.500')) : (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* .css */ .iv)(["fill:", ";&:hover{fill:", ";})"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__/* .themeGet */ .R)('colors.primary.600'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__/* .themeGet */ .R)('colors.primary.400')));
}, function (props) {
  return !props.disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* .css */ .iv)(["fill:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__/* .themeGet */ .R)('colors.primary.600'));
});
var Bubble = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC).withConfig({
  displayName: "StepsProgress__Bubble",
  componentId: "sc-1xgfvkb-1"
})(["justify-content:center;align-items:center;flex:0 0 34px;height:34px;width:34px;border-radius:16px;cursor:default;color:#c4c7cc;background:", ";transition:box-shadow 0.3s,background 0.3s;z-index:2;", " ", " ", " ", ""], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__/* .themeGet */ .R)('colors.white.full'), function (props) {
  return !props.disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* .css */ .iv)(["color:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__/* .themeGet */ .R)('colors.primary.600'));
}, function (props) {
  return !props.disabled && props.onClick && (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* .css */ .iv)(["cursor:pointer;&:hover{background:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__/* .themeGet */ .R)('colors.black.100'));
}, function (props) {
  return props.checked && (props.disabled ? (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* .css */ .iv)(["background:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__/* .themeGet */ .R)('colors.black.500')) : (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* .css */ .iv)(["background:", ";&:hover{background:", ";})"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__/* .themeGet */ .R)('colors.primary.600'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__/* .themeGet */ .R)('colors.primary.400')));
}, function (props) {
  return props.focus && (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* .css */ .iv)(["box-shadow:0 0 0 4px ", ";"], function (props) {
    return props.theme.colors.primary[100];
  });
});
/**
 * Border generated with https://gigacore.github.io/demos/svg-stroke-dasharray-generator/
 * to have a consistent result across browsers.
 */

var SeparatorLine = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)(function (props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, _objectSpread(_objectSpread({
    alignItems: "center"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("svg", {
      width: "100%",
      height: "2",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("line", {
        strokeDasharray: "5%",
        x1: "0",
        y1: "0",
        x2: "100%",
        y2: "0"
      })
    })
  }));
}).withConfig({
  displayName: "StepsProgress__SeparatorLine",
  componentId: "sc-1xgfvkb-2"
})(["height:100%;z-index:1;flex-grow:1;flex-shrink:1;line{stroke-width:1;stroke:#c4c7cc;transition:stroke 0.3s;}", " ", ""], function (props) {
  return props.active && (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* .css */ .iv)(["line{stroke:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__/* .themeGet */ .R)('colors.primary.400'));
}, function (props) {
  return props.transparent && (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* .css */ .iv)(["visibility:hidden;"]);
});
var StepMobile = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC).withConfig({
  displayName: "StepsProgress__StepMobile",
  componentId: "sc-1xgfvkb-3"
})(["width:100%;align-items:center;"]);
var StepsOuter = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC).withConfig({
  displayName: "StepsProgress__StepsOuter",
  componentId: "sc-1xgfvkb-4"
})(["padding:12px 16px;@media (max-width:640px){background:#f5f7fa;}"]);
var StepsMobileLeft = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu).withConfig({
  displayName: "StepsProgress__StepsMobileLeft",
  componentId: "sc-1xgfvkb-5"
})(["flex-grow:2;flex-direction:column;"]);
var StepsMobileRight = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC).withConfig({
  displayName: "StepsProgress__StepsMobileRight",
  componentId: "sc-1xgfvkb-6"
})(["margin-left:auto;width:56px;height:56px;align-items:center;justify-content:center;flex-shrink:0;position:relative;"]);
var PieProgressWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "StepsProgress__PieProgressWrapper",
  componentId: "sc-1xgfvkb-7"
})(["left:0;position:absolute;top:0;width:100%;height:100%;z-index:0;"]);
var PieProgress = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu).withConfig({
  displayName: "StepsProgress__PieProgress",
  componentId: "sc-1xgfvkb-8"
})(["left:0;position:absolute;top:0;width:100%;height:100%;border-radius:50%;overflow:hidden;", " ", ""], function (props) {
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* .css */ .iv)(["clip:rect(0,", "px,", "px,", "px);"], props.pieSize, props.pieSize, props.pieSize / 2);
}, function (props) {
  return props.progress && props.progress > 50 && (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* .css */ .iv)(["clip:rect(auto,auto,auto,auto);"]);
});
var PieShadow = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu).withConfig({
  displayName: "StepsProgress__PieShadow",
  componentId: "sc-1xgfvkb-9"
})(["width:100%;height:100%;", " border-radius:50%;"], function (props) {
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* .css */ .iv)(["border:", "px solid ", ";"], props.pieSize / 10, props.bgColor);
});
var PieHalfCircle = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu).withConfig({
  displayName: "StepsProgress__PieHalfCircle",
  componentId: "sc-1xgfvkb-10"
})(["width:100%;height:100%;position:absolute;left:0;top:0;", " border-radius:50%;", ""], function (props) {
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* .css */ .iv)(["border:", "px solid #3498db;clip:rect(0,", "px,", "px,0);"], props.pieSize / 10, props.pieSize / 2, props.pieSize);
}, function (props) {
  return props.progress && (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* .css */ .iv)(["border-color:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__/* .themeGet */ .R)('colors.primary.500'));
});
var PieHalfCircleLeft = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)(PieHalfCircle).withConfig({
  displayName: "StepsProgress__PieHalfCircleLeft",
  componentId: "sc-1xgfvkb-11"
})(["", ""], function (props) {
  return props.progress && (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* .css */ .iv)(["transform:rotate(", "deg);"], props.progress * 3.6);
});
var PieHalfCircleRight = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)(PieHalfCircle).withConfig({
  displayName: "StepsProgress__PieHalfCircleRight",
  componentId: "sc-1xgfvkb-12"
})(["", ""], function (props) {
  return props.progress && props.progress > 50 ? (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* .css */ .iv)(["transform:rotate(180deg);"]) : (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* .css */ .iv)(["display:none;"]);
});

var getBubbleContent = function getBubbleContent(idx, checked, disabled, focused, loading) {
  if (loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_StyledSpinner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      color: checked ? '#FFFFFF' : 'primary.700',
      size: 14
    });
  } else if (checked) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_10__/* .Check */ .J, {
      color: "white",
      size: 14
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(Circle, {
    disabled: disabled,
    checked: checked,
    focus: focused,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("circle", {
      cx: "50%",
      cy: "50%",
      r: "16px"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("text", {
      x: "50%",
      y: "51%",
      dominantBaseline: "middle",
      textAnchor: "middle",
      children: idx + 1
    })]
  });
};
/**
 * Shows numerated steps circles that can be clicked.
 */


var StepsProgress = function StepsProgress(_ref) {
  var steps = _ref.steps,
      disabledStepNames = _ref.disabledStepNames,
      children = _ref.children,
      focus = _ref.focus,
      loadingStep = _ref.loadingStep,
      onStepSelect = _ref.onStepSelect,
      allCompleted = _ref.allCompleted,
      stepWidth = _ref.stepWidth,
      viewport = _ref.viewport;
  var focusIdx = focus ? steps.findIndex(function (step) {
    return step.name === focus.name;
  }) : -1;
  var mobileStepIdx = allCompleted ? steps.length - 1 : focusIdx > -1 ? focusIdx : 0;
  var mobileNextStepName = mobileStepIdx < steps.length - 1 ? steps[mobileStepIdx + 1].name : null;
  var mobileNextStepIdx = mobileNextStepName ? steps.findIndex(function (step) {
    return step.name === mobileNextStepName;
  }) : -1;
  var mobileNextStep = mobileNextStepIdx !== -1 && steps[mobileNextStepIdx];
  var progress = allCompleted ? 100 : 100 / steps.length * (mobileStepIdx + 1);
  var bgColor = '#D9DBDD';
  var pieSize = '56';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(StepsOuter, {
    "data-cy": "steps-progress",
    children: [(viewport === _lib_withViewport__WEBPACK_IMPORTED_MODULE_3__/* .VIEWPORTS.XSMALL */ .Pm.XSMALL || viewport === _lib_withViewport__WEBPACK_IMPORTED_MODULE_3__/* .VIEWPORTS.UNKNOWN */ .Pm.UNKNOWN) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      display: ['block', null, 'none'],
      width: "100%",
      "data-cy": "progress-destkop",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(StepMobile, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(StepsMobileLeft, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
            color: "black.900",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "26px",
            mb: 1,
            children: steps[mobileStepIdx].label || steps[mobileStepIdx].name
          }), mobileNextStep && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
            color: "black.700",
            fontSize: "12px",
            lineHeight: "18px",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              id: "StepsProgress.mobile.next",
              defaultMessage: [{
                "type": 0,
                "value": "Next: "
              }, {
                "type": 1,
                "value": "stepName"
              }],
              values: {
                stepName: mobileNextStep.label || mobileNextStep.name
              }
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(StepsMobileRight, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(PieProgressWrapper, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(PieProgress, {
              progress: progress,
              pieSize: pieSize,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(PieHalfCircleLeft, {
                progress: progress,
                pieSize: pieSize
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(PieHalfCircleRight, {
                progress: progress,
                pieSize: pieSize
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(PieShadow, {
              pieSize: pieSize,
              bgColor: bgColor
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
            color: "black.700",
            fontSize: "12px",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              id: "StepsProgress.mobile.status",
              defaultMessage: [{
                "type": 1,
                "value": "from"
              }, {
                "type": 0,
                "value": " of "
              }, {
                "type": 1,
                "value": "to"
              }],
              values: {
                from: mobileStepIdx + 1,
                to: steps.length
              }
            })
          })]
        })]
      })
    }), (viewport !== _lib_withViewport__WEBPACK_IMPORTED_MODULE_3__/* .VIEWPORTS.XSMALL */ .Pm.XSMALL || viewport === _lib_withViewport__WEBPACK_IMPORTED_MODULE_3__/* .VIEWPORTS.UNKNOWN */ .Pm.UNKNOWN) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      display: ['none', null, 'flex'],
      "data-cy": "progress-destkop",
      children: steps.map(function (step, idx) {
        var stepName = step.name;
        var checked = idx < focusIdx || allCompleted;
        var focused = idx === focusIdx;
        var disabled = disabledStepNames.includes(stepName);
        var loading = loadingStep && stepName === loadingStep.name;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_StyledFlex, {
          "data-cy": "progress-step-".concat(stepName),
          flexDirection: "column",
          alignItems: "center",
          "data-disabled": disabled,
          $_css: stepWidth,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_StyledFlex2, {
            alignItems: "center",
            mb: 2,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(SeparatorLine, {
              active: checked || focused,
              transparent: idx === 0
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Bubble, {
              disabled: disabled,
              onClick: disabled ? undefined : onStepSelect && function () {
                return onStepSelect(step);
              },
              checked: checked,
              focus: focused,
              children: getBubbleContent(idx, checked, disabled, focused, loading)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(SeparatorLine, {
              active: checked,
              transparent: idx === steps.length - 1
            })]
          }), children && children({
            step: step,
            checked: checked,
            focused: focused
          })]
        }, stepName);
      })
    })]
  });
};

StepsProgress.defaultProps = {
  focused: null,
  loadingStep: null,
  disabledStepNames: [],
  stepWidth: '100%'
};
StepsProgress.__docgenInfo = {
  "description": "Shows numerated steps circles that can be clicked.",
  "methods": [],
  "displayName": "StepsProgress",
  "props": {
    "focused": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "required": false
    },
    "loadingStep": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "description": "Step will show a loading spinner",
      "type": {
        "name": "custom",
        "raw": "stepType"
      },
      "required": false
    },
    "disabledStepNames": {
      "defaultValue": {
        "value": "[]",
        "computed": false
      },
      "description": "A list of steps that will be disabled (unclickable). Steps must exist in `steps`",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "stepWidth": {
      "defaultValue": {
        "value": "'100%'",
        "computed": false
      },
      "description": "Base step width",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "required": false
    },
    "steps": {
      "description": "The list of steps. Each step **must** be unique",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "custom",
          "raw": "stepType"
        }
      },
      "required": true
    },
    "children": {
      "description": "A renderer func. Gets passed an object like `{step, checked, focused}`",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "focus": {
      "description": "The currently focused step, or null if none focused yet",
      "type": {
        "name": "custom",
        "raw": "stepType"
      },
      "required": false
    },
    "onStepSelect": {
      "description": "Called when a step is clicked",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "allCompleted": {
      "description": "If true, all steps will be marked as completed",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "viewport": {
      "description": "@ignore from withViewport",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "Object.values(VIEWPORTS)"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = ((0,_lib_withViewport__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(StepsProgress));

var _StyledFlex = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC).withConfig({
  displayName: "StepsProgress___StyledFlex",
  componentId: "sc-1xgfvkb-13"
})(function (p) {
  return {
    flexGrow: 1,
    flexBasis: p.$_css
  };
});

var _StyledFlex2 = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC).withConfig({
  displayName: "StepsProgress___StyledFlex2",
  componentId: "sc-1xgfvkb-14"
})({
  width: '100%'
});

/***/ }),

/***/ 74387:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pm": function() { return /* binding */ VIEWPORTS; }
/* harmony export */ });
/* unused harmony exports BREAKPOINTS_NAMES, BREAKPOINTS_WIDTHS, BREAKPOINTS, viewportIsAbove, isDesktopOrAbove, getViewportFromWidth */
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33227);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88361);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92191);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85971);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52715);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91193);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7287);
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_zipObject__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18446);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_findLastIndex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7436);
/* harmony import */ var lodash_findLastIndex__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_findLastIndex__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23279);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(67294);
/* harmony import */ var _theme_breakpoints__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(74200);
/* harmony import */ var _theme_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(13875);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85893);












function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




/**
 * Defines all the breakpoints names as passed by `withViewport`
 */


var VIEWPORTS = {
  XSMALL: 'XSMALL',
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
  UNKNOWN: 'UNKNOWN'
}; // Please keep the same length for these two arrays

var BREAKPOINTS_NAMES = [VIEWPORTS.XSMALL, VIEWPORTS.SMALL, VIEWPORTS.MEDIUM, VIEWPORTS.LARGE];
var BREAKPOINTS_WIDTHS = BREAKPOINTS_NAMES.map(function (_, idx) {
  return (0,_theme_helpers__WEBPACK_IMPORTED_MODULE_13__/* .emToPx */ .x8)(_theme_breakpoints__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z[idx]);
});
var BREAKPOINTS = lodash_zipObject__WEBPACK_IMPORTED_MODULE_7___default()(BREAKPOINTS_NAMES, BREAKPOINTS_WIDTHS);
/**
 * Helper to check if a viewport is superior or equal to another one.
 * Always returns false for `UNKNOWN`
 *
 * @param {VIEWPORTS} viewport
 * @param {VIEWPORTS} breakpointName
 */

var viewportIsAbove = function viewportIsAbove(viewport, breakpointName) {
  return BREAKPOINTS_NAMES.indexOf(viewport) >= BREAKPOINTS_NAMES.indexOf(breakpointName);
};
/**
 * Returns true if viewport is not `UNKNOWN` and is >= desktop.
 *
 * @param {VIEWPORTS} viewport
 */

var isDesktopOrAbove = function isDesktopOrAbove(viewport) {
  return BREAKPOINTS_NAMES.indexOf(viewport) >= BREAKPOINTS_NAMES.indexOf(VIEWPORTS.MEDIUM);
};
/** Returns the name of the viewport (see `BREAKPOINTS_NAMES`) */

var getViewportFromWidth = function getViewportFromWidth(width) {
  var breakpointIdx = lodash_findLastIndex__WEBPACK_IMPORTED_MODULE_9___default()(BREAKPOINTS_WIDTHS, function (b) {
    return width >= b;
  });

  return breakpointIdx === -1 ? BREAKPOINTS_NAMES[0] : BREAKPOINTS_NAMES[breakpointIdx];
};
/** Function to build component's state */

var getStateBuilder = function getStateBuilder(withWidth, withHeight) {
  if (withWidth && withHeight) {
    return function (width, height, viewport) {
      return {
        width: width,
        height: height,
        viewport: viewport
      };
    };
  } else if (withWidth) {
    return function (width, height, viewport) {
      return {
        width: width,
        viewport: viewport
      };
    };
  } else if (withHeight) {
    return function (width, height, viewport) {
      return {
        height: height,
        viewport: viewport
      };
    };
  } else {
    return function (width, height, viewport) {
      return {
        viewport: viewport
      };
    };
  }
};
/**
 * Watch window resize and provide info about the screen size. Has default to
 * properly render on SSR (customizable with `defaultViewport`).
 *
 * @param {ReactNode} ChildComponent
 * @param {object} options
 *  - `withWidth` (default: false) - pass the width of the window
 *  - `withHeight` (default: false) - pass the height of the window
 *  - `defaultViewport` (default: UNKNOWN) - if detection fails, fallback on this screen size
 */


var withViewport = function withViewport(ChildComponent, options) {
  var _ref = options || {},
      withWidth = _ref.withWidth,
      withHeight = _ref.withHeight,
      _ref$defaultViewport = _ref.defaultViewport,
      defaultViewport = _ref$defaultViewport === void 0 ? VIEWPORTS.UNKNOWN : _ref$defaultViewport;

  var buildState = getStateBuilder(withWidth || false, withHeight || false);
  return /*#__PURE__*/function (_React$Component) {
    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3___default()(Viewport, _React$Component);

    var _super = _createSuper(Viewport);

    // Default height usually doesn't matters much, so we use the width as default
    function Viewport(props) {
      var _this;

      _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, Viewport);

      _this = _super.call(this, props); // Always initialize without `window`, to make sure SSR and client render are the same
      // Could trigger "DOM not matching" errors otherwise

      _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "doResize", function () {
        var viewport = getViewportFromWidth(window.innerWidth);
        var state = buildState(window.innerWidth, window.innerHeight, viewport);

        if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_8___default()(_this.state, state)) {
          _this.setState(state);
        }
      });

      _this.state = buildState(BREAKPOINTS[defaultViewport] || BREAKPOINTS_WIDTHS[0], BREAKPOINTS[defaultViewport] || BREAKPOINTS_WIDTHS[0], defaultViewport);
      return _this;
    }

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(Viewport, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.doResize();
        this.onResize = lodash_debounce__WEBPACK_IMPORTED_MODULE_10___default()(this.doResize, 500, {
          maxWait: 300
        });
        window.addEventListener('resize', this.onResize);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ChildComponent, _objectSpread(_objectSpread({}, this.state), this.props));
      }
    }]);

    return Viewport;
  }(react__WEBPACK_IMPORTED_MODULE_11__.Component);
};

/* harmony default export */ __webpack_exports__["ZP"] = (withViewport);

/***/ }),

/***/ 86004:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ createOrganization; }
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
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7980);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(92191);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hoc/graphql.js + 7 modules
var graphql = __webpack_require__(16608);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./lib/errors/index.js + 1 modules
var errors = __webpack_require__(12136);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(97079);
// EXTERNAL MODULE: ./components/onboarding-modal/OnboardingModal.js + 4 modules
var OnboardingModal = __webpack_require__(70730);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./node_modules/lodash/trim.js
var trim = __webpack_require__(92742);
var trim_default = /*#__PURE__*/__webpack_require__.n(trim);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(82580);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var react_intl_lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/injectIntl.js
var injectIntl = __webpack_require__(74806);
// EXTERNAL MODULE: ./node_modules/slugify/slugify.js
var slugify = __webpack_require__(31304);
var slugify_default = /*#__PURE__*/__webpack_require__.n(slugify);
// EXTERNAL MODULE: ./node_modules/validator/index.js
var validator = __webpack_require__(48966);
// EXTERNAL MODULE: ./components/create-collective/CreateCollectiveForm.js
var CreateCollectiveForm = __webpack_require__(16856);
// EXTERNAL MODULE: ./components/onboarding-modal/OnboardingProfileCard.js
var OnboardingProfileCard = __webpack_require__(14574);
// EXTERNAL MODULE: ./components/CollectivePickerAsync.js
var CollectivePickerAsync = __webpack_require__(5993);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/MessageBox.tsx + 2 modules
var MessageBox = __webpack_require__(86702);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledCheckbox.js
var StyledCheckbox = __webpack_require__(41433);
// EXTERNAL MODULE: ./components/StyledHr.tsx
var StyledHr = __webpack_require__(173);
// EXTERNAL MODULE: ./components/StyledInput.tsx
var StyledInput = __webpack_require__(97274);
// EXTERNAL MODULE: ./components/StyledInputField.js
var StyledInputField = __webpack_require__(87262);
// EXTERNAL MODULE: ./components/StyledInputGroup.js
var StyledInputGroup = __webpack_require__(32631);
// EXTERNAL MODULE: ./components/StyledTextarea.js
var StyledTextarea = __webpack_require__(93150);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/UserProvider.js + 2 modules
var UserProvider = __webpack_require__(51927);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/CreateOrganizationForm.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
























var orgMessages = (0,react_intl_lib.defineMessages)({
  nameLabel: {
    id: "Organization.Name",
    defaultMessage: [{
      "type": 0,
      "value": "Organization name"
    }]
  },
  legalNameLabel: {
    id: "LegalName",
    defaultMessage: [{
      "type": 0,
      "value": "Legal Name"
    }]
  },
  slugLabel: {
    id: "createCollective.form.slugLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Set your URL"
    }]
  },
  descriptionPlaceholder: {
    id: "create.collective.placeholder",
    defaultMessage: [{
      "type": 0,
      "value": "Making the world a better place"
    }]
  },
  websiteLabel: {
    id: "createOrg.form.websiteLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Organization website"
    }]
  },
  suggestedLabel: {
    id: "createCollective.form.suggestedLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Suggested"
    }]
  },
  descriptionLabel: {
    id: "ExpenseForm.inviteeOrgDescriptionLabel",
    defaultMessage: [{
      "type": 0,
      "value": "What does your organization do?"
    }]
  },
  descriptionHint: {
    id: "createCollective.form.descriptionHint",
    defaultMessage: [{
      "type": 0,
      "value": "Write a short description (150 characters max)"
    }]
  },
  errorName: {
    id: "createCollective.form.error.name",
    defaultMessage: [{
      "type": 0,
      "value": "Please use fewer than 50 characters"
    }]
  },
  errorDescription: {
    id: "createCollective.form.error.description",
    defaultMessage: [{
      "type": 0,
      "value": "Please use fewer than 160 characters"
    }]
  },
  errorSlug: {
    id: "createCollective.form.error.slug",
    defaultMessage: [{
      "type": 0,
      "value": "Please use fewer than 30 characters"
    }]
  },
  errorSlugHyphen: {
    id: "createOrg.form.error.slug.hyphen",
    defaultMessage: [{
      "type": 0,
      "value": "Organization URL slug cannot start or end with a hyphen (-)"
    }]
  },
  errorWebsite: {
    id: "createOrg.form.error.website",
    defaultMessage: [{
      "type": 0,
      "value": "Enter a valid website, e.g., www.example.com or example.org"
    }]
  }
});
var placeholders = {
  name: {
    id: 'placeholder.name',
    defaultMessage: 'e.g., Salesforce, Airbnb'
  },
  examples: {
    id: 'examples',
    defaultMessage: 'e.g., {examples}'
  },
  slug: {
    id: 'placeholder.slug',
    defaultMessage: 'Airbnb'
  },
  description: {
    id: 'placeholderdescription',
    defaultMessage: 'Making a world a better place'
  },
  website: {
    id: 'placeholder.website',
    defaultMessage: 'www.example.com'
  },
  username: {
    id: 'placeholder.username',
    defaultMessage: 'User name'
  }
};

var CreateOrganizationForm = function CreateOrganizationForm(props) {
  var intl = props.intl,
      error = props.error,
      loading = props.loading,
      LoggedInUser = props.LoggedInUser,
      onSubmit = props.onSubmit,
      updateAdmins = props.updateAdmins;

  var _useState = (0,react.useState)(false),
      authorization = _useState[0],
      setAuthorization = _useState[1];

  var _useState2 = (0,react.useState)([]),
      admins = _useState2[0],
      setAdmins = _useState2[1];

  var initialValues = {
    name: '',
    legalName: '',
    slug: '',
    description: '',
    website: '',
    coAdmin: ''
  };

  var validate = function validate(values) {
    var errors = {};

    if (values.name.length > 50) {
      errors.name = intl.formatMessage(orgMessages.errorName);
    }

    if (values.legalName.length > 255) {
      errors.legalName = intl.formatMessage(orgMessages.errorName);
    }

    if (values.slug.length > 30) {
      errors.slug = intl.formatMessage(orgMessages.errorSlug);
    }

    if (values.slug !== trim_default()(values.slug, '-')) {
      errors.slug = intl.formatMessage(orgMessages.errorSlugHyphen);
    }

    if (values.description.length > 150) {
      errors.description = intl.formatMessage(orgMessages.errorDescription);
    }

    if (values.website) {
      // Prepend https:// before validation if the URL doesn't start with a protocol
      var websiteUrl = values.website.match(/^\w+:\/\/.*/) ? values.website : "https://".concat(values.website);

      if (!(0,validator.isURL)(websiteUrl)) {
        errors.website = intl.formatMessage(orgMessages.errorWebsite);
      }
    }

    return errors;
  };

  var submit = function submit(values) {
    var name = values.name,
        legalName = values.legalName,
        slug = values.slug,
        description = values.description,
        website = values.website;
    onSubmit({
      name: name,
      legalName: legalName,
      slug: slug,
      description: description,
      website: website,
      authorization: authorization
    });
  };

  var removeAdmin = function removeAdmin(collective) {
    var filteredAdmins = admins.filter(function (admin) {
      return admin.member.id !== collective.id;
    });
    setAdmins(filteredAdmins);
    updateAdmins(admins);
  }; // Update admins whenever there is a change


  (0,react.useEffect)(function () {
    if (admins.length) {
      updateAdmins(admins);
    }
  }, [admins]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
    flexDirection: "column",
    justifyContent: "center",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Formik */.J9, {
      validate: validate,
      initialValues: initialValues,
      onSubmit: submit,
      validateOnChange: true,
      children: function children(formik) {
        var values = formik.values,
            handleSubmit = formik.handleSubmit,
            errors = formik.errors,
            touched = formik.touched,
            setFieldValue = formik.setFieldValue;

        var suggestedSlug = function suggestedSlug(value) {
          var slugOptions = {
            replacement: '-',
            lower: true,
            strict: true
          };
          return trim_default()(slugify_default()(value, slugOptions), '-');
        };

        var handleSlugChange = function handleSlugChange(e) {
          if (!touched.slug) {
            setFieldValue('slug', suggestedSlug(e.target.value));
          }
        };

        return /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Form */.l0, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
            flexDirection: "column",
            alignItems: "center",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
              mx: 2,
              maxWidth: "992px",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                flexDirection: "column",
                my: [0, 2],
                mb: [24, 28, 28, 58],
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                  children: /*#__PURE__*/(0,jsx_runtime.jsxs)(CreateCollectiveForm/* BackButton */.x, {
                    asLink: true,
                    onClick: function onClick() {
                      return window && window.history.back();
                    },
                    px: [0, 2],
                    children: ["\u2190\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "Back",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Back"
                      }]
                    })]
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                  alignItems: "center",
                  px: [0, 2],
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H1, {
                    fontSize: "28px",
                    lineHeight: "36px",
                    fontWeight: "500",
                    textAlign: ['left', 'left', 'left', 'center'],
                    color: "black.900",
                    letterSpacing: "1px",
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "organization.create",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Create Organization"
                      }]
                    })
                  })
                }), error && !loading && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
                  alignItems: "center",
                  justifyContent: "center",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
                    type: "error",
                    withIcon: true,
                    mt: [1, 3],
                    "data-cy": "cof-error-message",
                    children: error
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
                display: "flex",
                flexDirection: ['column', 'row', 'row'],
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                  flexDirection: "column",
                  mx: [1, 10, 10],
                  maxWidth: [320, 350, 472],
                  justifyContent: "space-around",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H4, {
                    color: "black.900",
                    fontSize: "18px",
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "CreateProfile.OrgInfo",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Organization info"
                      }]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
                    name: "name",
                    htmlFor: "name",
                    error: touched.name && errors.name,
                    label: intl.formatMessage(orgMessages.nameLabel),
                    labelFontSize: "13px",
                    labelColor: "black.700",
                    labelFontWeight: "600",
                    fontSize: "18px",
                    value: values.name,
                    onChange: handleSlugChange,
                    required: true,
                    mt: 3,
                    "data-cy": "cof-form-name",
                    children: function children(inputProps) {
                      return /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, _objectSpread(_objectSpread({
                        as: StyledInput/* default */.ZP
                      }, inputProps), {}, {
                        placeholder: intl.formatMessage(placeholders.name)
                      }));
                    }
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
                    name: "legalName",
                    htmlFor: "legalName",
                    label: intl.formatMessage(orgMessages.legalNameLabel),
                    labelFontSize: "13px",
                    labelColor: "black.700",
                    labelFontWeight: "600",
                    fontSize: "18px",
                    value: values.legalName,
                    required: false,
                    mt: 3,
                    isPrivate: true,
                    "data-cy": "cof-form-legalName",
                    hint: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "editCollective.legalName.description",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Legal names are private and used in receipts, tax forms, payment details on expenses, and other non-public contexts. Legal names are only visible to admins."
                      }]
                    }),
                    children: function children(inputProps) {
                      return /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, _objectSpread(_objectSpread({
                        as: StyledInput/* default */.ZP
                      }, inputProps), {}, {
                        placeholder: intl.formatMessage(placeholders.examples, {
                          examples: 'Salesforce, Inc., Airbnb, Inc.'
                        })
                      }));
                    }
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
                    name: "slug",
                    htmlFor: "slug",
                    error: touched.slug && errors.slug,
                    label: intl.formatMessage(orgMessages.slugLabel),
                    labelFontSize: "13px",
                    labelColor: "black.700",
                    labelFontWeight: "600",
                    fontSize: "19px",
                    value: values.slug,
                    required: true,
                    mt: 3,
                    "data-cy": "cof-form-slug",
                    children: function children(inputProps) {
                      return /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, _objectSpread(_objectSpread({
                        onChange: function onChange(e) {
                          setFieldValue('slug', e.target.value);
                        },
                        as: StyledInputGroup/* default */.Z
                      }, inputProps), {}, {
                        prepend: "opencollective.com/",
                        placeholder: intl.formatMessage(placeholders.slug)
                      }));
                    }
                  }), values.name.length > 0 && !touched.slug && /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                    fontSize: "11px",
                    mt: 2,
                    mb: 2,
                    children: intl.formatMessage(orgMessages.suggestedLabel)
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
                    htmlFor: "description",
                    error: touched.description && errors.description,
                    label: intl.formatMessage(orgMessages.descriptionLabel),
                    labelFontSize: "13px",
                    labelColor: "black.700",
                    labelFontWeight: "600",
                    fontSize: "13px",
                    required: true,
                    mt: 3,
                    "data-cy": "cof-org-description",
                    children: function children(inputProps) {
                      return /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, _objectSpread(_objectSpread({
                        as: StyledTextarea/* default */.Z,
                        onChange: function onChange(e) {
                          setFieldValue('description', e.target.value);
                        }
                      }, inputProps), {}, {
                        name: "description",
                        minHeight: 80,
                        maxHeight: 80,
                        minLength: 5,
                        maxLength: 150,
                        width: "100%",
                        value: values.description,
                        placeholder: intl.formatMessage(orgMessages.descriptionPlaceholder)
                      }));
                    }
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                    fontSize: "11px",
                    mt: 2,
                    mb: 2,
                    children: intl.formatMessage(orgMessages.descriptionHint)
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
                    name: "website",
                    htmlFor: "website",
                    error: touched.website && errors.website,
                    label: intl.formatMessage(orgMessages.websiteLabel),
                    labelFontSize: "13px",
                    labelColor: "black.700",
                    labelFontWeight: "600",
                    value: values.website,
                    required: false,
                    mt: 3,
                    mb: 2,
                    "data-cy": "cof-org-website",
                    children: function children(inputProps) {
                      return /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, _objectSpread(_objectSpread({
                        onChange: function onChange(e) {
                          setFieldValue('website', e.target.value);
                        },
                        as: StyledInputGroup/* default */.Z
                      }, inputProps), {}, {
                        prepend: "https://",
                        placeholder: intl.formatMessage(placeholders.website)
                      }));
                    }
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                  flexDirection: "column",
                  maxWidth: [320, 350, 472],
                  mt: [3, 0],
                  mx: [1, 10, 10],
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H4, {
                    color: "black.900",
                    fontSize: "18px",
                    mb: [3, 1],
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "administrators",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Administrators"
                      }]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                    fontSize: "14px",
                    mb: 3,
                    mt: 2,
                    lineHeight: "21px",
                    color: "black.700",
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "coAdminsDescription",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Organization admins can make changes and represent this organization on the platform."
                      }]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
                    border: "1px solid #E6E8EB",
                    borderRadius: "16px",
                    p: 3,
                    height: "auto",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
                        mr: 2,
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                          fontSize: "9px",
                          color: "black.700",
                          fontWeight: "500",
                          textTransform: "uppercase",
                          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                            id: "Admins",
                            defaultMessage: [{
                              "type": 0,
                              "value": "Admins"
                            }]
                          })
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
                        flex: "1",
                        borderStyle: "solid",
                        borderColor: "black.300",
                        width: [100, 110, 120]
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
                      "data-cy": "org-profile-card",
                      mt: 2,
                      children: admins.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                        width: "100%",
                        flexWrap: "wrap",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(OnboardingProfileCard/* default */.Z, {
                          collective: LoggedInUser.collective
                        }, LoggedInUser.collective.id), admins.map(function (admin) {
                          return /*#__PURE__*/(0,jsx_runtime.jsx)(OnboardingProfileCard/* default */.Z, {
                            collective: admin.member,
                            removeAdmin: removeAdmin
                          }, admin.member.id);
                        })]
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                      mt: 4,
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
                        mr: 2,
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                          fontSize: "9px",
                          color: "black.700",
                          fontWeight: "500",
                          textTransform: "uppercase",
                          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                            id: "inviteAdmin",
                            defaultMessage: [{
                              "type": 0,
                              "value": "Invite co-admin"
                            }]
                          })
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
                        flex: "1",
                        borderStyle: "solid",
                        borderColor: "black.300",
                        width: [100, 110, 120]
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(CollectivePickerAsync/* default */.Z, {
                      inputId: "admin-picker-org",
                      mt: 2,
                      creatable: true,
                      collective: null,
                      types: ['USER'],
                      "data-cy": "admin-picker-org",
                      value: "pp",
                      onChange: function onChange(option) {
                        var duplicates = admins.filter(function (admin) {
                          return admin.member.id === option.value.id;
                        });
                        setAdmins(duplicates.length ? admins : [].concat(toConsumableArray_default()(admins), [{
                          role: 'ADMIN',
                          member: option.value
                        }]));
                      },
                      placeholder: intl.formatMessage(placeholders.username)
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                flexDirection: "column",
                my: 4,
                mx: 2,
                maxWidth: [320, 350, 450],
                color: "black.800",
                letterSpacing: "0.2px",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledCheckbox/* default */.Z, {
                  name: "authorization",
                  required: true,
                  fontSize: "12px",
                  label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "U+G/IY",
                    defaultMessage: [{
                      "type": 0,
                      "value": "I certify that I am authorized to represent this organization"
                    }]
                  }),
                  onChange: function onChange(_ref) {
                    var checked = _ref.checked;
                    setAuthorization(checked);
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
                  justifyContent: ['center', 'left'],
                  my: 4,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
                    fontSize: "13px",
                    minWidth: "148px",
                    minHeight: "36px",
                    buttonStyle: "primary",
                    type: "submit",
                    loading: loading,
                    onSubmit: handleSubmit,
                    "data-cy": "cof-form-submit",
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "organization.create",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Create Organization"
                      }]
                    })
                  })
                })]
              })]
            })
          })
        });
      }
    })
  });
};

CreateOrganizationForm.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreateOrganizationForm",
  "props": {
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
    "loading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "error": {
      "description": "",
      "type": {
        "name": "string"
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
    }
  }
};
/* harmony default export */ var components_CreateOrganizationForm = ((0,injectIntl/* default */.ZP)((0,router.withRouter)((0,UserProvider/* withUser */.ns)(CreateOrganizationForm))));
// EXTERNAL MODULE: ./components/SignInOrJoinFree.js + 2 modules
var SignInOrJoinFree = __webpack_require__(41448);
;// CONCATENATED MODULE: ./components/CreateOrganization.js











var _templateObject;



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


















var CreateOrganization = /*#__PURE__*/function (_React$Component) {
  inherits_default()(CreateOrganization, _React$Component);

  var _super = _createSuper(CreateOrganization);

  function CreateOrganization(props) {
    var _this;

    classCallCheck_default()(this, CreateOrganization);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "updateAdmins", function (admins) {
      _this.setState({
        admins: admins
      });
    });

    _this.state = {
      collective: {
        type: 'ORGANIZATION'
      },
      result: {},
      admins: []
    };
    _this.createOrganization = _this.createOrganization.bind(assertThisInitialized_default()(_this));
    _this.error = _this.error.bind(assertThisInitialized_default()(_this));
    _this.resetError = _this.resetError.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(CreateOrganization, [{
    key: "error",
    value: function error(msg) {
      this.setState({
        result: {
          error: msg
        }
      });
    }
  }, {
    key: "resetError",
    value: function resetError() {
      this.error();
    }
  }, {
    key: "createOrganization",
    value: function () {
      var _createOrganization = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(organization) {
        var _this2 = this;

        var response, member, adminList, errorMsg;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (organization.authorization) {
                  _context.next = 3;
                  break;
                }

                this.setState({
                  result: {
                    error: 'Verify that you are an authorized organization representative'
                  }
                });
                return _context.abrupt("return");

              case 3:
                this.setState({
                  status: 'loading'
                });
                delete organization.authorization;
                _context.prev = 5;
                _context.next = 8;
                return this.props.createOrganization({
                  variables: {
                    organization: organization
                  }
                });

              case 8:
                response = _context.sent;

                if (!response) {
                  _context.next = 19;
                  break;
                }

                _context.next = 12;
                return this.props.refetchLoggedInUser();

              case 12:
                _context.next = 14;
                return this.props.LoggedInUser.memberOf.filter(function (member) {
                  return member.collective.id === response.data.createOrganization.legacyId;
                });

              case 14:
                member = _context.sent;
                adminList = this.state.admins.filter(function (admin) {
                  if (admin.member.id !== _this2.props.LoggedInUser.collective.id) {
                    return admin;
                  }
                });
                this.setState({
                  admins: [].concat(toConsumableArray_default()(adminList), [{
                    role: 'ADMIN',
                    member: this.props.LoggedInUser.collective,
                    id: member[0].id
                  }])
                });
                _context.next = 19;
                return this.props.editCollectiveMembers({
                  variables: {
                    collectiveId: response.data.createOrganization.legacyId,
                    members: this.state.admins.map(function (member) {
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

              case 19:
                _context.next = 21;
                return this.props.refetchLoggedInUser();

              case 21:
                this.props.router.push({
                  pathname: "/".concat(response.data.createOrganization.slug),
                  query: {
                    status: 'collectiveCreated'
                  }
                }).then(function () {
                  return window.scrollTo(0, 0);
                });
                _context.next = 29;
                break;

              case 24:
                _context.prev = 24;
                _context.t0 = _context["catch"](5);
                errorMsg = (0,errors/* getErrorFromGraphqlException */.H1)(_context.t0).message;
                this.setState({
                  result: {
                    error: errorMsg
                  },
                  status: 'error'
                });
                throw new Error(errorMsg);

              case 29:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 24]]);
      }));

      function createOrganization(_x) {
        return _createOrganization.apply(this, arguments);
      }

      return createOrganization;
    }()
  }, {
    key: "render",
    value: function render() {
      var LoggedInUser = this.props.LoggedInUser;
      var _this$state = this.state,
          result = _this$state.result,
          collective = _this$state.collective,
          status = _this$state.status;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        children: [!LoggedInUser && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          flexDirection: "column",
          alignItems: "center",
          mb: 5,
          p: 2,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            flexDirection: "column",
            p: 4,
            mt: 2,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              mb: 3,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H1, {
                fontSize: "32px",
                lineHeight: "36px",
                fontWeight: "bold",
                textAlign: "center",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "collective.create.join",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Join Open Collective"
                  }]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              textAlign: "center",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                fontSize: "14px",
                color: "black.600",
                mb: 1,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "organization.create.createOrSignIn",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Create an account (or sign in) to create an organization."
                  }]
                })
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(SignInOrJoinFree/* default */.ZP, {})]
        }), LoggedInUser && /*#__PURE__*/(0,jsx_runtime.jsx)(components_CreateOrganizationForm, {
          collective: collective,
          onSubmit: this.createOrganization,
          onChange: this.resetError,
          error: result.error,
          updateAdmins: this.updateAdmins,
          loading: status === 'loading'
        })]
      });
    }
  }]);

  return CreateOrganization;
}(react.Component);

var createOrganizationMutation = (0,lib/* default */.ZP)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  mutation CreateOrganization($organization: OrganizationCreateInput!) {\n    createOrganization(organization: $organization) {\n      id\n      name\n      slug\n      description\n      website\n      legacyId\n    }\n  }\n"])));
var addCreateOrganizationMutation = (0,graphql/* graphql */.B)(createOrganizationMutation, {
  name: 'createOrganization',
  options: {
    context: helpers/* API_V2_CONTEXT */.T
  }
});
var addGraphql = (0,utils/* compose */.qC)(addCreateOrganizationMutation, OnboardingModal.addEditCollectiveMembersMutation);
CreateOrganization.__docgenInfo = {
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
    "name": "updateAdmins",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "admins",
      "type": null
    }],
    "returns": null
  }, {
    "name": "createOrganization",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "organization",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "CreateOrganization",
  "props": {
    "createOrganization": {
      "description": "",
      "type": {
        "name": "func"
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
/* harmony default export */ var components_CreateOrganization = (addGraphql((0,router.withRouter)(CreateOrganization)));
// EXTERNAL MODULE: ./components/ErrorPage.js
var ErrorPage = __webpack_require__(73908);
// EXTERNAL MODULE: ./components/Page.js
var Page = __webpack_require__(84842);
;// CONCATENATED MODULE: ./pages/createOrganization.js






function createOrganization_createSuper(Derived) { var hasNativeReflectConstruct = createOrganization_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function createOrganization_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var CreateOrganizationPage = /*#__PURE__*/function (_React$Component) {
  inherits_default()(CreateOrganizationPage, _React$Component);

  var _super = createOrganization_createSuper(CreateOrganizationPage);

  function CreateOrganizationPage(props) {
    classCallCheck_default()(this, CreateOrganizationPage);

    return _super.call(this, props);
  }

  createClass_default()(CreateOrganizationPage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          LoggedInUser = _this$props.LoggedInUser,
          loadingLoggedInUser = _this$props.loadingLoggedInUser,
          refetchLoggedInUser = _this$props.refetchLoggedInUser;

      if (loadingLoggedInUser) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(ErrorPage/* default */.Z, {
          loading: true
        });
      }

      return /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_CreateOrganization, {
          LoggedInUser: LoggedInUser,
          refetchLoggedInUser: refetchLoggedInUser
        })
      });
    }
  }]);

  return CreateOrganizationPage;
}(react.Component);

CreateOrganizationPage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreateOrganizationPage",
  "props": {
    "LoggedInUser": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "loadingLoggedInUser": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "refetchLoggedInUser": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    }
  }
};
/* harmony default export */ var createOrganization = ((0,UserProvider/* withUser */.ns)(CreateOrganizationPage));

/***/ }),

/***/ 9767:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/createOrganization",
      function () {
        return __webpack_require__(86004);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6567,1512,8966,8027,5126,295,2325,146,5813,4842,4154,1012,1861,7965,4691,1448,730,6856,9774,2888,179], function() { return __webpack_exec__(9767); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=createOrganization-a24d13470b6a3050.js.map