"use strict";
exports.id = 4515;
exports.ids = [4515];
exports.modules = {

/***/ 38104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3789);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_swipeable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _StyledRoundButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90012);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const CarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
  displayName: "StyledCarousel__CarouselContainer",
  componentId: "sc-198utf6-0"
})(["display:flex;transition:", ";transform:", ";"], props => props.sliding ? 'none' : 'transform 1s ease', props => {
  if (props.numSlides === 1) {
    return 'translateX(0%)';
  }

  if (props.numSlides === 2) {
    if (!props.sliding && props.direction === 'next') {
      return 'translateX(calc(-100% - 20px))';
    }

    if (!props.sliding && props.direction === 'prev') {
      return 'translateX(0%)';
    }

    if (props.direction === 'prev') {
      return 'translateX(calc(-100% - 20px))';
    }

    if (!props.sliding) {
      return 'translateX(0%)';
    }

    return 'translateX(0%)';
  }

  if (!props.sliding) {
    return 'translateX(calc(-100% - 20px))';
  }

  if (props.direction === 'prev') {
    return 'translateX(calc(2 * (-100% - 20px)))';
  }

  return 'translateX(0%)';
});
const CarouselSlot = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
  displayName: "StyledCarousel__CarouselSlot",
  componentId: "sc-198utf6-1"
})(["flex:1 0 100%;flex-basis:100%;order:", ";"], props => props.order);
const Indicator = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu).withConfig({
  displayName: "StyledCarousel__Indicator",
  componentId: "sc-198utf6-2"
})(["cursor:pointer;width:8px;height:8px;border:none;box-shadow:inset 0px 2px 2px rgba(20,20,20,0.08);border-radius:8px;background:", ";"], props => props.active ? '#DC5F7D' : '#E8E9EB');
const ControllerButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
  displayName: "StyledCarousel__ControllerButton",
  componentId: "sc-198utf6-3"
})(["padding:12px;&:active{background:#141414;}"]);

const StyledCarousel = props => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.activeIndex || 0);
  const {
    0: direction,
    1: setDirection
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: sliding,
    1: setSliding
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const getOrder = itemIndex => {
    const {
      children
    } = props;
    const numItems = children.length || 1;

    if (numItems === 2) {
      return itemIndex;
    }

    return (numItems + 1 - activeIndex + itemIndex) % numItems;
  };

  const nextSlide = () => {
    const children = props.children;
    const numItems = children.length || 1;

    if (numItems === activeIndex + 1) {
      return;
    }

    performSliding('next', activeIndex === numItems - 1 ? 0 : activeIndex + 1);
  };

  const prevSlide = () => {
    const children = props.children;
    const numItems = children.length || 1;

    if (activeIndex === 0) {
      return;
    }

    performSliding('prev', activeIndex === 0 ? numItems - 1 : activeIndex - 1);
  };

  const performSliding = (direction, activeIndex) => {
    setDirection(direction);
    setActiveIndex(activeIndex);
    setSliding(true);
    setTimeout(() => {
      setSliding(false);

      if (props.onChange) {
        props.onChange(activeIndex);
      }
    }, 50);
  };

  const handleSwipe = isNext => {
    if (isNext) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  const handleOnClickIndicator = index => {
    if (index > activeIndex) {
      performSliding('next', index);
      return;
    }

    if (index < activeIndex) {
      performSliding('prev', index);
    }
  };

  const renderRightController = () => {
    const children = props.children;
    const numItems = children.length - 1;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(ControllerButton, {
      size: 40,
      mx: 1,
      onClick: () => handleSwipe(true),
      disabled: activeIndex === numItems,
      children: "\u2192"
    });
  };

  const renderLeftController = () => {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(ControllerButton, {
      padding: "12px",
      size: 40,
      mx: 1,
      onClick: () => handleSwipe(),
      disabled: activeIndex === 0,
      children: "\u2190"
    });
  };

  const {
    children,
    showArrowController,
    controllerPosition,
    contentPosition
  } = props;
  const handlers = (0,react_swipeable__WEBPACK_IMPORTED_MODULE_1__.useSwipeable)({
    onSwipedLeft: () => handleSwipe(true),
    onSwipedRight: () => handleSwipe()
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
      justifyContent: contentPosition || 'center',
      alignItems: "center",
      width: 1,
      children: [showArrowController && controllerPosition === 'side' && renderLeftController(), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        overflow: "hidden",
        px: 2,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, handlers), {}, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(CarouselContainer, {
            sliding: sliding,
            direction: direction,
            numSlides: children.length,
            children: react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, (child, index) => {
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(CarouselSlot, {
                order: getOrder(index),
                mx: 2,
                children: child
              });
            })
          })
        }))
      }), showArrowController && controllerPosition === 'side' && renderRightController()]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      width: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: 'center',
      children: [showArrowController && controllerPosition === 'bottom' && renderLeftController(), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
        mx: 3,
        my: 3,
        children: Array.from({
          length: children.length
        }, (_, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Indicator, {
          active: i === activeIndex,
          mx: 1,
          onClick: () => handleOnClickIndicator(i)
        }, i))
      }), showArrowController && controllerPosition === 'bottom' && renderRightController()]
    })]
  }));
};

StyledCarousel.defaultProps = {
  showArrowController: true,
  controllerPosition: 'bottom'
};
StyledCarousel.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StyledCarousel",
  "props": {
    "showArrowController": {
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
    "controllerPosition": {
      "defaultValue": {
        "value": "'bottom'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "children": {
      "description": "",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "activeIndex": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "contentPosition": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "display": {
      "description": "",
      "type": {
        "name": "array"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledCarousel);

/***/ })

};
;