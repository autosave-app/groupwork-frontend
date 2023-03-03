(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1838],{

/***/ 7742:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": function() { return /* binding */ ArrowBack; }
/* harmony export */ });
/* unused harmony export ArrowBackDimensions */
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54142);



var ArrowBack = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__.StyledIconBase, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
  }));
});
ArrowBack.displayName = 'ArrowBack';
var ArrowBackDimensions = {
  height: 24,
  width: 24
};

/***/ }),

/***/ 7883:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ArrowForward; }
/* harmony export */ });
/* unused harmony export ArrowForwardDimensions */
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54142);



var ArrowForward = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__.StyledIconBase, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
  }));
});
ArrowForward.displayName = 'ArrowForward';
var ArrowForwardDimensions = {
  height: 24,
  width: 24
};

/***/ }),

/***/ 1757:
/***/ (function(module) {

/**
 * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
 *
 * @private
 * @param {Array} props The property identifiers.
 * @param {Array} values The property values.
 * @param {Function} assignFunc The function to assign values.
 * @returns {Object} Returns the new object.
 */
function baseZipObject(props, values, assignFunc) {
  var index = -1,
      length = props.length,
      valsLength = values.length,
      result = {};

  while (++index < length) {
    var value = index < valsLength ? values[index] : undefined;
    assignFunc(result, props[index], value);
  }
  return result;
}

module.exports = baseZipObject;


/***/ }),

/***/ 7436:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(41848),
    baseIteratee = __webpack_require__(67206),
    toInteger = __webpack_require__(40554);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * This method is like `_.findIndex` except that it iterates over elements
 * of `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ];
 *
 * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
 * // => 2
 *
 * // The `_.matches` iteratee shorthand.
 * _.findLastIndex(users, { 'user': 'barney', 'active': true });
 * // => 0
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findLastIndex(users, ['active', false]);
 * // => 2
 *
 * // The `_.property` iteratee shorthand.
 * _.findLastIndex(users, 'active');
 * // => 0
 */
function findLastIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = length - 1;
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex);
    index = fromIndex < 0
      ? nativeMax(length + index, 0)
      : nativeMin(index, length - 1);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index, true);
}

module.exports = findLastIndex;


/***/ }),

/***/ 7287:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assignValue = __webpack_require__(34865),
    baseZipObject = __webpack_require__(1757);

/**
 * This method is like `_.fromPairs` except that it accepts two arrays,
 * one of property identifiers and one of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 0.4.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.zipObject(['a', 'b'], [1, 2]);
 * // => { 'a': 1, 'b': 2 }
 */
function zipObject(props, values) {
  return baseZipObject(props || [], values || [], assignValue);
}

module.exports = zipObject;


/***/ }),

/***/ 14338:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_HorizontalScroller; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(33227);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(88361);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(92191);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);
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
// EXTERNAL MODULE: ./node_modules/@styled-icons/material/ArrowBack/ArrowBack.esm.js
var ArrowBack_esm = __webpack_require__(7742);
// EXTERNAL MODULE: ./node_modules/@styled-icons/material/ArrowForward/ArrowForward.esm.js
var ArrowForward_esm = __webpack_require__(7883);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(23279);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
;// CONCATENATED MODULE: ./lib/ui-utils.js


/**
 * A debouncer for scroll functions. It is configured to trigger on trailing and
 * leading calls with a max wait of 100 to ensure everything stays responsive.
 */
var debounceScroll = function debounceScroll(func) {
  return debounce_default()(func, 100, {
    maxWait: 100,
    leading: true,
    trailing: true
  });
};
// EXTERNAL MODULE: ./lib/withViewport.js
var withViewport = __webpack_require__(74387);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/StyledRoundButton.js
var StyledRoundButton = __webpack_require__(90012);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/HorizontalScroller.js








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }












var RefContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "HorizontalScroller__RefContainer",
  componentId: "sc-1mtsz4p-0"
})(["display:flex;overflow-x:auto;scroll-behavior:smooth;max-width:100%;", ""], function (props) {
  return props.hideScrollbar && (0,styled_components_browser_esm/* css */.iv)(["scrollbar-width:none;-ms-overflow-style:none;overflow:-moz-scrollbars-none;&::-webkit-scrollbar{display:none;}"]);
});
var ControlsContainer = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Flex */.kC).withConfig({
  displayName: "HorizontalScroller__ControlsContainer",
  componentId: "sc-1mtsz4p-1"
})(["z-index:10;position:absolute;top:", ";pointer-events:none;justify-content:space-between;width:100%;"], function (props) {
  return props.controlsTopPosition ? "".concat(props.controlsTopPosition, "%") : '50%';
});
var ArrowContainer = (0,styled_components_browser_esm/* default */.ZP)(StyledRoundButton/* default */.Z).withConfig({
  displayName: "HorizontalScroller__ArrowContainer",
  componentId: "sc-1mtsz4p-2"
})(["transition:opacity 0.25s ease-in,visibility 0.25s;visibility:", ";opacity:", ";pointer-events:auto;svg{height:40px;padding 7px;}"], function (props) {
  return props.isVisible ? 'visible' : 'hidden';
}, function (props) {
  return props.isVisible ? '1' : '0';
});
/**
 * Helper to display a list of horizontally scrollable items, with two little
 * carets to navigate easily.
 */

var HorizontalScroller = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(HorizontalScroller, _React$PureComponent);

  var _super = _createSuper(HorizontalScroller);

  function HorizontalScroller(props) {
    var _this;

    classCallCheck_default()(this, HorizontalScroller);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "updateScrollInfo", debounceScroll(function () {
      if (!_this.ref.current) {
        return;
      }

      var _this$ref$current = _this.ref.current,
          offsetWidth = _this$ref$current.offsetWidth,
          scrollLeft = _this$ref$current.scrollLeft,
          scrollWidth = _this$ref$current.scrollWidth;

      _this.setState({
        canGoPrev: scrollLeft > 0,
        canGoNext: scrollLeft + offsetWidth < scrollWidth
      });
    }));

    defineProperty_default()(assertThisInitialized_default()(_this), "onPrevClick", function () {
      if (_this.ref.current) {
        _this.ref.current.scrollLeft -= _this.getScrollDistance();
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onNextClick", function () {
      if (_this.ref.current) {
        _this.ref.current.scrollLeft += _this.getScrollDistance();
      }
    });

    _this.ref = /*#__PURE__*/react.createRef();
    _this.state = {
      canGoPrev: false,
      canGoNext: false
    };
    return _this;
  }

  createClass_default()(HorizontalScroller, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.ref.current) {
        this.ref.current.addEventListener('scroll', this.updateScrollInfo, {
          passive: true
        });
        this.updateScrollInfo();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateScrollInfo();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.ref.current) {
        this.ref.current.removeEventListener('scroll', this.updateScrollInfo);
      }
    }
  }, {
    key: "getScrollDistance",
    value: function getScrollDistance() {
      var offsetWidth = this.ref.current.offsetWidth;

      if (this.props.getScrollDistance) {
        return this.props.getScrollDistance(offsetWidth);
      } else {
        // Default behavior: scroll by 75% of the full width
        var scrollPercentage = 0.75;
        return scrollPercentage * offsetWidth;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          canGoPrev = _this$state.canGoPrev,
          canGoNext = _this$state.canGoNext;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        position: "relative",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(ControlsContainer, {
          px: [2, null, 5],
          controlsTopPosition: this.props.controlsTopPosition,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ArrowContainer, {
            isVisible: canGoPrev,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowBack_esm/* ArrowBack */.x, {
              onMouseDown: canGoPrev ? this.onPrevClick : undefined
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowContainer, {
            isVisible: canGoNext,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowForward_esm/* ArrowForward */.Z, {
              onMouseDown: canGoNext ? this.onNextClick : undefined
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(RefContainer, _objectSpread(_objectSpread({}, this.props.containerProps), {}, {
          as: this.props.container,
          ref: this.ref,
          children: this.props.children
        }))]
      });
    }
  }]);

  return HorizontalScroller;
}(react.PureComponent); // We don't use the data from `withViewport`, but we use it to update the
// component when the window's width changes.


HorizontalScroller.__docgenInfo = {
  "description": "Helper to display a list of horizontally scrollable items, with two little\ncarets to navigate easily.",
  "methods": [{
    "name": "onPrevClick",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onNextClick",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "getScrollDistance",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "HorizontalScroller",
  "props": {
    "children": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": true
    },
    "container": {
      "description": "Container component where the list (children) will be inserted",
      "type": {
        "name": "elementType"
      },
      "required": false
    },
    "containerProps": {
      "description": "Passed to `container`",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "getScrollDistance": {
      "description": "Callback to get the scrolled distance when we click on prev/next controllers",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "width": {
      "description": "@ignore from withViewport",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "controlsTopPosition": {
      "description": "Set the top position of the arrows. Defaults 50%",
      "type": {
        "name": "number"
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_HorizontalScroller = ((0,withViewport/* default */.ZP)(HorizontalScroller, {
  withWidth: true
}));

/***/ }),

/***/ 69194:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(86896);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(44012);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(52015);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87268);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29925);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var _HomeNextIllustration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47667);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85893);













var IconWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu).withConfig({
  displayName: "LearnMore__IconWrapper",
  componentId: "sc-up6kkt-0"
})(["display:flex;justify-content:center;align-items:center;width:56px;height:56px;@media screen and (min-width:88em){width:56px;height:56px;}"]);
var DonateButtonBGHover = styled_components__WEBPACK_IMPORTED_MODULE_10__/* ["default"].img.attrs */ .ZP.img.attrs({
  src: '/static/images/home/donateButton-bg-withStar.png'
}).withConfig({
  displayName: "LearnMore__DonateButtonBGHover",
  componentId: "sc-up6kkt-1"
})(["position:absolute;z-index:-1;width:100%;height:100%;opacity:0;transition:opacity 0.2s;"]);
var DonateButtonBG = styled_components__WEBPACK_IMPORTED_MODULE_10__/* ["default"].img.attrs */ .ZP.img.attrs({
  src: '/static/images/home/donateButton-bg.png'
}).withConfig({
  displayName: "LearnMore__DonateButtonBG",
  componentId: "sc-up6kkt-2"
})(["position:absolute;z-index:-1;width:100%;height:100%;"]);
var DonateButtonWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu).withConfig({
  displayName: "LearnMore__DonateButtonWrapper",
  componentId: "sc-up6kkt-3"
})(["pointer-events:none;display:flex;align-items:center;justify-content:center;position:relative;&:hover{", "{opacity:1;animation:", " 1s infinite;animation-delay:0.2s;}}"], DonateButtonBGHover, (0,_StyledKeyframes__WEBPACK_IMPORTED_MODULE_5__/* .flicker */ .Uh)({
  minOpacity: 0.7
}));
var DonateButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP)(_StyledButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
  displayName: "LearnMore__DonateButton",
  componentId: "sc-up6kkt-4"
})(["pointer-events:auto;"]);
var learningChannels = [{
  id: 'slack',
  name: 'Slack',
  link: 'https://slack.opencollective.com',
  desktopItemOrder: 2
}, {
  id: 'documentation',
  name: 'Documentation',
  link: 'https://docs.opencollective.com',
  desktopItemOrder: 1
}, {
  id: 'openSourceCode',
  name: 'Open Source code',
  link: 'https://github.com/opencollective/opencollective',
  desktopItemOrder: 4
}, {
  id: 'blog',
  name: 'Blog',
  link: 'https://blog.opencollective.com',
  desktopItemOrder: 3
}, {
  id: 'openFinances',
  name: 'Open Finances',
  link: 'https://opencollective.com/opencollective',
  desktopItemOrder: 5
}, {
  id: 'openCompany',
  name: 'Open Company',
  link: 'https://drive.opencollective.com',
  desktopItemOrder: 6
}];
var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_11__.defineMessages)({
  'home.learnMore.documentation': {
    id: "home.learnMore.documentation",
    defaultMessage: [{
      "type": 0,
      "value": "Support your community with fundholding and fiscal sponsorship services."
    }]
  },
  'home.learnMore.documentation.buttonText': {
    id: "home.learnMore.buttonText",
    defaultMessage: [{
      "type": 0,
      "value": "View our documentation"
    }]
  },
  'home.learnMore.blog': {
    id: "home.learnMore.blog",
    defaultMessage: [{
      "type": 0,
      "value": "Case studies, news, and how groups around the world use Open Collective."
    }]
  },
  'home.learnMore.blog.buttonText': {
    id: "home.learnMore.blog.buttonText",
    defaultMessage: [{
      "type": 0,
      "value": "Visit our blog"
    }]
  },
  'home.learnMore.slack': {
    id: "home.learnMore.slack",
    defaultMessage: [{
      "type": 0,
      "value": "Come meet the team, chat with the community, and share your questions and stories."
    }]
  },
  'home.learnMore.slack.buttonText': {
    id: "home.learnMore.slack.buttonText",
    defaultMessage: [{
      "type": 0,
      "value": "Join our slack"
    }]
  },
  'home.learnMore.openSourceCode': {
    id: "home.learnMore.OpenSourceCode",
    defaultMessage: [{
      "type": 0,
      "value": "Our code is open source. You can contribute! Check it out on GitHub."
    }]
  },
  'home.learnMore.openSourceCode.buttonText': {
    id: "home.learnMore.openSourceCode.buttonText",
    defaultMessage: [{
      "type": 0,
      "value": "See our code base"
    }]
  },
  'home.learnMore.openFinances': {
    id: "home.learnMore.openFinances",
    defaultMessage: [{
      "type": 0,
      "value": "We operate as an Open Collective ourselves, with transparent budgets."
    }]
  },
  'home.learnMore.openFinances.buttonText': {
    id: "home.learnMore.openFinances.buttonText",
    defaultMessage: [{
      "type": 0,
      "value": "See our Collectives"
    }]
  },
  'home.learnMore.openCompany': {
    id: "home.learnMore.openCompany",
    defaultMessage: [{
      "type": 0,
      "value": "Our metrics, financials, and other documents are public."
    }]
  },
  'home.learnMore.openCompany.buttonText': {
    id: "home.learnMore.openCompany.buttonText",
    defaultMessage: [{
      "type": 0,
      "value": "See our public company"
    }]
  }
});

var LearnMore = function LearnMore(_ref) {
  var page = _ref.page;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mx: [3, 4],
    my: 4,
    display: [null, 'flex'],
    flexDirection: [null, 'column'],
    justifyContent: "center",
    alignItems: "center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      width: [null, '650px', '704px', null, '1150px'],
      display: "flex",
      flexDirection: ['column', 'row'],
      alignItems: ['center', null, null, null, 'baseline'],
      my: 4,
      ml: [3, 0],
      flexWrap: [null, 'wrap'],
      justifyContent: "space-between",
      children: learningChannels.map(function (channel) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            my: [2, null, null, null, 4],
            order: [null, channel.desktopItemOrder],
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(IconWrapper, {
              my: 2,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                width: 60,
                height: 60,
                src: "/static/images/home/".concat(channel.id, "-illustration.png"),
                alt: "".concat(channel.id, " illustration")
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu, {
              width: ['288px', '306px', null, null, '289px'],
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_7__.H3, {
                fontSize: "20px",
                lineHeight: "28px",
                letterSpacing: "-0.6px",
                mb: 2,
                color: "black.800",
                children: channel.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
                color: ['black.700', 'black.600', 'black.700'],
                fontSize: ['15px', '16px', null, null, '18px'],
                lineHeight: ['23px', '24px', null, null, '27px'],
                letterSpacing: ['-0.12px', '-0.16px'],
                mb: 3,
                children: intl.formatMessage(messages["home.learnMore.".concat(channel.id)])
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_StyledLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                href: channel.link,
                color: page === 'e2c' ? 'ocBrands.600' : '#DC5F7D',
                fontSize: "15px",
                lineHeight: "23px",
                letterSpacing: "-0.12px",
                my: 2,
                children: [intl.formatMessage(messages["home.learnMore.".concat(channel.id, ".buttonText")]), "\xA0\u2192"]
              })]
            })]
          })
        }, channel.id);
      })
    }), page !== 'e2c' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      display: "flex",
      flexDirection: ['column', 'row'],
      alignItems: "center",
      justifyContent: "center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu, {
        width: ['288px', '332px', null, null, '360px'],
        textAlign: ['center', 'left'],
        mr: [null, 4],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_7__.H3, {
          color: "primary.900",
          fontSize: "24px",
          lineHeight: "32px",
          letterSpacing: "-0.12px",
          my: 2,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            id: "home.contributeToPlatform",
            defaultMessage: [{
              "type": 0,
              "value": "Contribute to the platform!"
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
          color: "black.700",
          fontSize: "18px",
          lineHeight: "27px",
          letterSpacing: "-0.2px",
          my: 3,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            id: "home.contributeToPlatform.description",
            defaultMessage: [{
              "type": 0,
              "value": "Open Collective is free for charitable initiatives. We rely on generosity of contributors like you to make this possible."
            }]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(DonateButtonWrapper, {
        width: "287px",
        height: "300px",
        my: 3,
        ml: [null, 4],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(DonateButtonBG, {
          alt: ""
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(DonateButtonBGHover, {
          alt: ""
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          href: "/opencollective/donate",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(DonateButton, {
            buttonStyle: "marketing",
            minWidth: 97,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
              id: "home.donate",
              defaultMessage: [{
                "type": 0,
                "value": "Donate"
              }]
            })
          })
        })]
      })]
    })]
  });
};

LearnMore.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LearnMore",
  "props": {
    "page": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (LearnMore);

/***/ }),

/***/ 67712:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44012);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16159);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65106);
/* harmony import */ var _HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47667);
/* harmony import */ var _SectionSubtitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74655);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85893);










var WeAreOpen = function WeAreOpen() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, {
    display: "flex",
    flexDirection: ['column', 'row'],
    alignItems: "center",
    justifyContent: "center",
    mx: [3, 4],
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      display: "flex",
      flexDirection: 'column',
      alignItems: "center",
      width: [1, '392px', null, null, '657px'],
      mr: [null, 2, 5],
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu, {
        textAlign: ['center', 'left'],
        width: ['288px', 1],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_marketing_Text__WEBPACK_IMPORTED_MODULE_3__/* .SectionTitle */ .NZ, {
          mb: 3,
          color: "black.800",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            id: "home.weAreOpenSection.title",
            defaultMessage: [{
              "type": 0,
              "value": "We are open in every way"
            }]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu, {
        display: ['block', 'none'],
        my: 3,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          width: 224,
          height: 144,
          src: "/static/images/home/weareopen-illustration-md.png",
          alt: "We are open in every way"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu, {
        my: 2,
        width: ['288px', 1],
        textAlign: ['center', 'left'],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SectionSubtitle__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          color: ['black.600', 'black.700'],
          fontSize: ['16px', '20px'],
          lineHeight: ['24px', '28px'],
          letterSpacing: ['-0.16px', '-0.6px'],
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            id: "home.weAreOpenSection.subtitle",
            defaultMessage: [{
              "type": 0,
              "value": "We not only help you be transparent, we are too!"
            }]
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu, {
      display: ['none', 'block'],
      width: ['224px', null, null, null, '336px'],
      height: ['144px', null, null, null, '216px'],
      my: 5,
      ml: [null, null, 5],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        width: 336,
        height: 216,
        src: "/static/images/home/weareopen-illustration-md.png",
        alt: "We are open in every way"
      })
    })]
  });
};

WeAreOpen.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "WeAreOpen"
};
/* harmony default export */ __webpack_exports__["Z"] = (WeAreOpen);

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

/***/ 90739:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ e2c; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./components/collectives/sections/LearnMore.js
var LearnMore = __webpack_require__(69194);
// EXTERNAL MODULE: ./components/collectives/sections/WeAreOpen.js
var WeAreOpen = __webpack_require__(67712);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/marketing/Text.js
var Text = __webpack_require__(65106);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/e2c/ExitToCommunitySection.js








var StyledIframe = styled_components_browser_esm/* default.iframe.withConfig */.ZP.iframe.withConfig({
  displayName: "ExitToCommunitySection__StyledIframe",
  componentId: "sc-1i3nixh-0"
})(["border:0.8px solid rgba(50,51,52,0.1);border-radius:16px;"]);

var ExitToCommunity = function ExitToCommunity() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    px: "16px",
    mt: ['40px', '56px', null, null, '72px'],
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        mt: [3, 0],
        mb: "24px",
        width: ['288px', 1],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* MainTitle */.U3, {
          textAlign: "center",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "e2c.title",
            defaultMessage: [{
              "type": 0,
              "value": "Exit to Community #E2C"
            }]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: ['288px', '650px'],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* MainDescription */.WC, {
          fontSize: "18px",
          lineHeight: "26px",
          textAlign: "center",
          fontWeight: "500",
          color: "black.800",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "e2c.description",
            defaultMessage: [{
              "type": 0,
              "value": "Join us as we transition from a privately owned company to a structure that allows us to share power and revenue with you."
            }]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
        borderRadius: "16px",
        display: "flex",
        width: ['288px', '700px', '784px'],
        height: ['160px', '388px', '426px'],
        background: "black",
        mt: ['32px', '56px'],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledIframe, {
          title: "YouTube video",
          width: "100%",
          height: "100%",
          src: "https://www.youtube.com/embed/bbtQcW4E_RU",
          allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true
        })
      })]
    })
  });
};

ExitToCommunity.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExitToCommunity"
};
/* harmony default export */ var ExitToCommunitySection = (ExitToCommunity);
// EXTERNAL MODULE: ./components/collectives/HomeNextIllustration.js
var HomeNextIllustration = __webpack_require__(47667);
// EXTERNAL MODULE: ./components/I18nFormatters.js
var I18nFormatters = __webpack_require__(88705);
// EXTERNAL MODULE: ./components/Text.ts
var components_Text = __webpack_require__(90998);
;// CONCATENATED MODULE: ./components/e2c/InvestingInTheCommonsSection.js










var ListItem = styled_components_browser_esm/* default.li.withConfig */.ZP.li.withConfig({
  displayName: "InvestingInTheCommonsSection__ListItem",
  componentId: "sc-f3wfgv-0"
})(["margin-left:20px;padding-left:0;"]);
var ListWrapper = styled_components_browser_esm/* default.ul.withConfig */.ZP.ul.withConfig({
  displayName: "InvestingInTheCommonsSection__ListWrapper",
  componentId: "sc-f3wfgv-1"
})(["padding-left:20px;"]);

var InvestingInTheCommons = function InvestingInTheCommons() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    px: "16px",
    my: ['56px', '80px', '104px'],
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      width: ['288px', 1],
      mb: ['40px', '64px'],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* SectionTitle */.NZ, {
        textAlign: "center",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "e2c.investingInCommons",
          defaultMessage: [{
            "type": 0,
            "value": "Investing in the commons"
          }]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: ['column', 'row-reverse'],
      alignItems: [null, 'center'],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: ['288px', '330px', '416px'],
        height: ['288px', '354px'],
        mb: ['20px', 0],
        ml: [null, '40px', '56px'],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
          alt: "Challenging business as usual",
          src: "/static/images/e2c/challengingBusiness-illustration.png",
          width: 416,
          height: 354
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: "288px",
        textAlign: "center",
        mb: "24px",
        display: [null, 'none'],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H4, {
          fontSize: "20px",
          lineHeight: "28px",
          letterSpacing: "-0.008em",
          color: "primary.900",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "e2c.challengingBusiness",
            defaultMessage: [{
              "type": 0,
              "value": "Challenging business as usual"
            }]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        width: ['288px', '330px', '472px'],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H4, {
          mb: "24px",
          display: ['none', 'block'],
          fontSize: ['24px', '32px'],
          lineHeight: ['32px', '40px'],
          letterSpacing: "-0.008em",
          color: "primary.900",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "e2c.challengingBusiness",
            defaultMessage: [{
              "type": 0,
              "value": "Challenging business as usual"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text/* Span */.Dr, {
          fontSize: "18px",
          lineHeight: "26px",
          color: "black.800",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "e2c.challengingBusiness.description",
            defaultMessage: [{
              "type": 0,
              "value": "Many tech founders are forced to give away ownership and control to investors in order to get money as a start-up. "
            }, {
              "type": 8,
              "value": "strong",
              "children": [{
                "type": 0,
                "value": "Open Collective is different."
              }]
            }, {
              "type": 0,
              "value": " "
            }, {
              "type": 1,
              "value": "lineBreak"
            }, {
              "type": 0,
              "value": " "
            }, {
              "type": 1,
              "value": "lineBreak"
            }, {
              "type": 0,
              "value": " We raised money from people who agreed: "
            }, {
              "type": 8,
              "value": "ul",
              "children": [{
                "type": 8,
                "value": "li",
                "children": [{
                  "type": 0,
                  "value": "Investors get paid back slowly and can’t make us exploit people to create huge profits."
                }]
              }, {
                "type": 0,
                "value": " "
              }, {
                "type": 8,
                "value": "li",
                "children": [{
                  "type": 0,
                  "value": "Investors do NOT control the platform."
                }]
              }]
            }],
            values: {
              li: function li(listItem) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem, {
                  children: listItem
                });
              },
              ul: function ul(list) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(ListWrapper, {
                  children: list
                });
              },
              lineBreak: /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}),
              strong: I18nFormatters/* I18nBold */.Gl
            }
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: ['column', 'row'],
      mt: "40px",
      alignItems: [null, 'center'],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: ['288px', '330px', '416px'],
        height: ['288px', '354px'],
        mb: ['20px', 0],
        mr: [null, '40px', '56px'],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
          alt: "Transparent finances",
          src: "/static/images/e2c/transparent-finance-illustration.png",
          width: 416,
          height: 354
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: "288px",
        textAlign: "center",
        mb: "24px",
        display: [null, 'none'],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H4, {
          fontSize: "20px",
          lineHeight: "28px",
          letterSpacing: "-0.008em",
          color: "primary.900",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "e2c.transparentFinances",
            defaultMessage: [{
              "type": 0,
              "value": "Transparent finances"
            }]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        width: ['288px', '330px', '472px'],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H4, {
          mb: "24px",
          display: ['none', 'block'],
          fontSize: ['24px', '32px'],
          lineHeight: ['32px', '40px'],
          letterSpacing: "-0.008em",
          color: "primary.900",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "e2c.transparentFinances",
            defaultMessage: [{
              "type": 0,
              "value": "Transparent finances"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.P, {
          fontSize: "18px",
          lineHeight: "26px",
          color: "black.800",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "e2c.transparentFinances.description",
            defaultMessage: [{
              "type": 0,
              "value": "Open Collective launched in 2016 and raised $3M of seed investment. The platform became profitable in 2020. "
            }, {
              "type": 1,
              "value": "lineBreak"
            }, {
              "type": 1,
              "value": "lineBreak"
            }, {
              "type": 0,
              "value": " See our investors and term sheets "
            }, {
              "type": 8,
              "value": "link",
              "children": [{
                "type": 0,
                "value": "here"
              }]
            }, {
              "type": 0,
              "value": "."
            }],
            values: {
              lineBreak: /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}),
              link: (0,I18nFormatters/* getI18nLink */.fw)({
                openInNewTab: true,
                href: 'https://docs.opencollective.com/help/about/investors'
              })
            }
          })
        })]
      })]
    })]
  });
};

InvestingInTheCommons.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "InvestingInTheCommons"
};
/* harmony default export */ var InvestingInTheCommonsSection = (InvestingInTheCommons);
// EXTERNAL MODULE: ./components/collectives/SectionSubtitle.js
var SectionSubtitle = __webpack_require__(74655);
// EXTERNAL MODULE: ./components/collectives/sections/JoinUs.js
var JoinUs = __webpack_require__(78355);
;// CONCATENATED MODULE: ./components/e2c/JoinTheMovementSection.js










var JoinTheMovement = function JoinTheMovement() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(JoinUs/* JoinUsWrapper */.TE, {
    py: [5, null, null, 4],
    width: 1,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      mx: [3, 4],
      flexDirection: ['column', null, null, 'row'],
      color: "black.900",
      alignItems: 'center',
      justifyContent: "center",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        display: "flex",
        flexDirection: "column",
        alignItems: ['center', null, 'flex-start'],
        my: [2, 3, null, 5],
        mr: [null, null, null, 5],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          width: [null, '408px', '569px', '335px', '406px'],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H1, {
            mb: 2,
            mt: [5, null, null, 0],
            fontSize: ['32px', '40px', null, '52px'],
            lineHeight: ['40px', '48px', null, '56px'],
            letterSpacing: ['-1.2px', '-1.6px', null, '-2px'],
            textAlign: ['center', null, 'left'],
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "e2c.joinTheMovement",
              defaultMessage: [{
                "type": 0,
                "value": "Join the movement and support us"
              }]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          my: (null, null, null, null, 3),
          width: ['288px', '438px', null, '335px', '400px'],
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(SectionSubtitle/* default */.Z, {
            fontSize: ['20px', null, null, '24px'],
            lineHeight: ['28px', null, null, '32px'],
            letterSpacing: ['-0.6px', null, null, '-0.8px'],
            color: ['black.800', null, null, 'black.900'],
            textAlign: ['center', null, 'left'],
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "home.joinUsSection.subtitle",
              defaultMessage: [{
                "type": 0,
                "value": "Be part of the new generation of communities."
              }]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text/* Span */.Dr, {
              display: ['none', 'inline-block'],
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "wESAjS",
                defaultMessage: [{
                  "type": 0,
                  "value": "There are a couple of ways for you to contribute:"
                }]
              })
            })]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        ml: [null, null, null, 3, 6],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          mb: "16px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(JoinUs/* JoinUsActionContainer */.mi, {
            link: "https://opencollective.com/comms-docs/projects/e2c",
            title: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "financialContributions",
              defaultMessage: [{
                "type": 0,
                "value": "Financial contributions"
              }]
            }),
            description: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "vbFuLO",
              defaultMessage: [{
                "type": 0,
                "value": "Get a tax-deductible receipt with your donation"
              }]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(JoinUs/* JoinUsActionContainer */.mi, {
          link: "mailto:pia@opencollective.com",
          title: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "helpResearch",
            defaultMessage: [{
              "type": 0,
              "value": "Help us with research"
            }]
          }),
          description: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "E+4HIb",
            defaultMessage: [{
              "type": 0,
              "value": "Email us and find how you can contribute with your time to add to the research about sharing ownership within organizations."
            }]
          })
        })]
      })]
    })
  });
};

JoinTheMovement.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "JoinTheMovement"
};
/* harmony default export */ var JoinTheMovementSection = (JoinTheMovement);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
;// CONCATENATED MODULE: ./components/e2c/OCIsATechPlatformSection.js











var OCIsATechPlatform = function OCIsATechPlatform() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    px: "16px",
    my: ['56px', '80px', '104px'],
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      width: ['288px', '698px', '832px', null, '1088px'],
      mb: "40px",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* SectionTitle */.NZ, {
        textAlign: "center",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "e2c.OCIsATechPlatform",
          defaultMessage: [{
            "type": 0,
            "value": "Today, Open Collective is a tech platform that enables a network of:"
          }]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
      display: ['block', 'flex', 'none'],
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      overflowX: "scroll",
      mb: "40px",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "700px",
        height: "408px",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
          alt: "Challenging business as usual",
          src: "/static/images/e2c/network.png",
          width: 700,
          height: 408
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      width: [null, null, '956px', null, '1088px'],
      mb: "40px",
      display: ['none', null, 'block'],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
        alt: "Challenging business as usual",
        src: "/static/images/e2c/network-lg.png",
        width: 1088,
        height: 408
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      width: ['288px', '588px', '685px'],
      mb: "24px",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H2, {
        letterSpacing: ['-0.008em', '-0.04em'],
        fontSize: ['32px', '40px'],
        lineHeight: ['40px', '48px'],
        textAlign: "center",
        color: "black.900",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "e2c.OCstat",
          defaultMessage: [{
            "type": 0,
            "value": "600+ nonprofits, co-ops, and fiscal hosts to support 7000+ groups to raise and spend $35 million each year with full transparency"
          }]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      width: "194px",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
        buttonStyle: "marketingSecondary",
        buttonSize: "medium",
        href: "/search",
        fontWeight: "500",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "e2c.browseCollectives",
          defaultMessage: [{
            "type": 0,
            "value": "Browse Collectives"
          }]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      my: ['56px', '80px', '104px'],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
        src: "/static/images/e2c/oc-logo-illustration.png",
        width: 88,
        height: 87
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      width: ['288px', '100%', '784px'],
      mt: "55px",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H2, {
        letterSpacing: "-0.008em",
        fontSize: ['28px', '32px'],
        lineHeight: ['32px', '40px'],
        textAlign: "center",
        color: "black.900",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "e2c.howCanWeRepay",
          defaultMessage: [{
            "type": 0,
            "value": "How can we repay our investors, support our founders, and practice financial self-determination? "
          }, {
            "type": 1,
            "value": "lineBreak"
          }, {
            "type": 1,
            "value": "lineBreak"
          }, {
            "type": 0,
            "value": "How can we future-proof our mission?"
          }],
          values: {
            lineBreak: /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})
          }
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      width: ['286px', '432px'],
      height: ['168px', '317px'],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
        src: "/static/images/e2c/e2c-logo-illustration.png",
        width: 431,
        height: 317
      })
    })]
  });
};

OCIsATechPlatform.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OCIsATechPlatform"
};
/* harmony default export */ var OCIsATechPlatformSection = (OCIsATechPlatform);
// EXTERNAL MODULE: ./components/collectives/Newsletter.js
var Newsletter = __webpack_require__(45842);
// EXTERNAL MODULE: ./components/HorizontalScroller.js + 1 modules
var HorizontalScroller = __webpack_require__(14338);
;// CONCATENATED MODULE: ./components/e2c/ResourcesSection.js













var blogEntries = [{
  imageSrc: '/static/images/e2c/blog-1.png',
  title: "Early musings on \"Exit to Community\" for Open Collective",
  link: 'https://blog.opencollective.com/exit-to-community/',
  date: 'Oct 18 2021'
}, {
  imageSrc: '/static/images/e2c/blog-2.png',
  title: "Pathways for Open Collective\u2019s \u201CExit to Community\u201D",
  link: 'https://blog.opencollective.com/exit-to-community-part-2/',
  date: 'Oct 24 2021'
}, {
  imageSrc: '/static/images/e2c/blog-3.png',
  title: "Building Capacity for Exit to Community",
  link: 'https://blog.opencollective.com/e2c-capacity-building/',
  date: 'Mar 7 2022'
}, {
  imageSrc: '/static/images/e2c/blog-4.png',
  title: "Deep dive: community stewardship of Open Collective through a Perpetual Purpose Trust",
  link: 'https://blog.opencollective.com/ppt/',
  date: 'Mar 10 2022'
}];
var ResourceContainer = (0,styled_components_browser_esm/* default */.ZP)(Container/* default */.Z).withConfig({
  displayName: "ResourcesSection__ResourceContainer",
  componentId: "sc-199086i-0"
})(["overflow-x:auto;padding:0 16px;max-width:100%;width:300px;@media screen and (min-width:40em){width:768px;justify-content:flex-start;}@media screen and (min-width:52em){width:956px;}@media screen and (min-width:64em){width:1200px;}"]);

var ResourcesSection = function ResourcesSection() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: ['column'],
      justifyContent: "center",
      alignItems: "center",
      mt: ['25px', null, '42px'],
      mb: ['51px', '96px'],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        mb: "72px",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* SectionTitle */.NZ, {
          textAlign: "center",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "e2c.resources",
            defaultMessage: [{
              "type": 0,
              "value": "Resources"
            }]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(HorizontalScroller/* default */.Z, {
        container: ResourceContainer,
        controlsTopPosition: 30,
        containerProps: {
          hideScrollbar: true
        },
        children: blogEntries.map(function (blogEntry) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
            display: "flex",
            flexDirection: "column",
            minWidth: ['288px', '276px', '380px', null, '360px'],
            mx: ['8px', '20px'],
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              width: ['224px', '100%'],
              mb: "32px",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
                alt: "".concat(blogEntry.title, " picture"),
                src: blogEntry.imageSrc,
                width: 349,
                height: 356
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              mb: "24px",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Text.P, {
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0.06em",
                fontWeight: "500",
                color: "black.900",
                textTransform: "uppercase",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Text/* Span */.Dr, {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "Hbj3Si",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Blog Entry"
                    }]
                  })
                }), ' ', "\u2022 ", /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text/* Span */.Dr, {
                  children: blogEntry.date
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
              href: blogEntry.link,
              openInNewTab: true,
              textDecoration: "underline",
              textDecorationColor: "#141415",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                width: 1,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.P, {
                  textDecoration: "underline",
                  fontSize: "24px",
                  lineHeight: "32px",
                  letterSpacing: "-0.008em",
                  color: "black.900",
                  fontWeight: "500",
                  children: blogEntry.title
                })
              })
            })]
          }, blogEntry.link);
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(LearnWithUs, {})]
  });
};

var LearnWithUs = function LearnWithUs() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    px: "16px",
    mb: "58px",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: ['column', 'row'],
      alignItems: "center",
      justifyContent: "center",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: ['288px', '330px', '458px', null, '524px'],
        mb: ['40px', 0],
        mr: [null, '40px'],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
          alt: "Challenging business as usual",
          src: "/static/images/e2c/learnMore-illustration.png",
          width: 416,
          height: 354
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        width: ['288px', '330px', '458px', null, '524px'],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H2, {
          letterSpacing: "-0.008em",
          fontSize: "32px",
          lineHeight: "40px",
          color: "primary.900",
          mb: "24px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "e2c.learnWithUs",
            defaultMessage: [{
              "type": 0,
              "value": "Learn with us"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.P, {
          fontSize: "18px",
          lineHeight: "26px",
          color: "black.800",
          fontWeight: "500",
          mb: "24px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "e2c.learnWithUs.description",
            defaultMessage: [{
              "type": 0,
              "value": "Sign up to be notified of live conversations with our CEO Pia Mancini, Open Collective hosts, and admins from our 7000 collectives about ways to transition from a privately owned company to a structure that allows us to share power and revenue with you."
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Newsletter/* default */.Z, {})]
      })]
    })
  });
};

ResourcesSection.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ResourcesSection"
};
/* harmony default export */ var e2c_ResourcesSection = (ResourcesSection);
;// CONCATENATED MODULE: ./components/e2c/WhatDoesE2CMeanSection.js









var WhatDoesE2CMean = function WhatDoesE2CMean() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
    justifyContent: "center",
    alignItems: "center",
    px: "16px",
    my: ['56px', '80px', '104px'],
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: ['column', null, 'row-reverse'],
      justifyContent: "center",
      alignItems: "center",
      maxWidth: [null, null, null, null, '1088px'],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: ['288px', 1],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H2, {
          letterSpacing: "-0.04em",
          fontSize: ['32px', '40px'],
          lineHeight: ['40px', '48px'],
          textAlign: ['center', null, 'left'],
          color: "primary.900",
          display: [null, null, 'none'],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "e2c.whatDoesE2CMean",
            defaultMessage: [{
              "type": 0,
              "value": "What does exit to community mean?"
            }]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        my: ['31px', null, 0],
        ml: [null, null, '32px'],
        width: ['288px', '516px', '534px'],
        minWidth: [null, null, '534px'],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
          alt: "How Open Collective works",
          src: "/static/images/e2c/whatDoesE2CMean-illustration.png",
          width: 534,
          height: 357
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: ['center', null, 'flex-start'],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          width: "346px",
          display: ['none', null, 'block'],
          mb: "32px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H2, {
            letterSpacing: "-0.04em",
            fontSize: "40px",
            lineHeight: "48px",
            textAlign: ['center', null, 'left'],
            color: "primary.900",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "e2c.whatDoesE2CMean",
              defaultMessage: [{
                "type": 0,
                "value": "What does exit to community mean?"
              }]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          width: ['288px', '606px', '346px', null, '522px'],
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Text.P, {
            fontSize: ['18px', '20px'],
            lineHeight: ['26px', '28px'],
            fontWeight: "500",
            color: "black.800",
            letterSpacing: "-0.008em",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "e2c.whatDoesE2CMean.description",
              defaultMessage: [{
                "type": 0,
                "value": "Exit to Community (E2C) is an effort to develop alternatives to the standard model of the startup “exit.” Rather than simply aiming for an acquisition by a more established company or a public stock offering, startups can mature into ownership by their community of stakeholders."
              }]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Text/* Span */.Dr, {
              mt: "16px",
              display: "block",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
                children: "- Nathan Schneider"
              }), ",", ' ', /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text/* Span */.Dr, {
                textDecoration: "underline",
                children: "Director of the Media Enterprise Design Lab"
              })]
            })]
          })
        })]
      })]
    })
  });
};

WhatDoesE2CMean.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "WhatDoesE2CMean"
};
/* harmony default export */ var WhatDoesE2CMeanSection = (WhatDoesE2CMean);
// EXTERNAL MODULE: ./components/Page.js
var Page = __webpack_require__(84842);
;// CONCATENATED MODULE: ./pages/e2c.js













var messages = (0,lib.defineMessages)({
  defaultTitle: {
    id: "OC.e2c",
    defaultMessage: [{
      "type": 0,
      "value": "Exit to Community"
    }]
  }
});

var E2C = function E2C() {
  var _useIntl = (0,useIntl/* default */.Z)(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Page/* default */.Z, {
    description: formatMessage(messages.defaultTitle),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ExitToCommunitySection, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(WhatDoesE2CMeanSection, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(InvestingInTheCommonsSection, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(OCIsATechPlatformSection, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(e2c_ResourcesSection, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(WeAreOpen/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(LearnMore/* default */.Z, {
      page: "e2c"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(JoinTheMovementSection, {})]
  });
};

E2C.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "E2C"
};
/* harmony default export */ var e2c = (E2C);

/***/ }),

/***/ 6651:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/e2c",
      function () {
        return __webpack_require__(90739);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6567,1512,146,5813,4842,9870,9774,2888,179], function() { return __webpack_exec__(6651); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=e2c-447a2e759bcd9268.js.map