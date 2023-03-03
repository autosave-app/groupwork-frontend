"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3568],{

/***/ 94782:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_VideoLinkerBox; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3323);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@styled-icons/styled-icon/index.esm.js
var index_esm = __webpack_require__(54142);
;// CONCATENATED MODULE: ./node_modules/@styled-icons/boxicons-regular/VideoPlus/VideoPlus.esm.js



var VideoPlus = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/react.createElement(index_esm.StyledIconBase, (0,esm_extends/* default */.Z)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react.createElement("path", {
    d: "M11 8H9v3H6v2h3v3h2v-3h3v-2h-3z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M18 7c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-3.333L22 17V7l-4 3.333V7zm-1.999 10H4V7h12v5l.001 5z"
  }));
});
VideoPlus.displayName = 'VideoPlus';
var VideoPlusDimensions = {
  height: 24,
  width: 24
};
;// CONCATENATED MODULE: ./node_modules/@styled-icons/feather/ArrowDownCircle/ArrowDownCircle.esm.js



var ArrowDownCircle = /*#__PURE__*/react.forwardRef(function (props, ref) {
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
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 10
  }), /*#__PURE__*/react.createElement("polyline", {
    points: "8 12 12 16 16 12"
  }), /*#__PURE__*/react.createElement("line", {
    x1: 12,
    x2: 12,
    y1: 8,
    y2: 16
  }));
});
ArrowDownCircle.displayName = 'ArrowDownCircle';
var ArrowDownCircleDimensions = {
  height: 24,
  width: 24
};
// EXTERNAL MODULE: ./node_modules/@styled-system/theme-get/dist/index.esm.js
var dist_index_esm = __webpack_require__(50056);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/StyledInput.tsx
var StyledInput = __webpack_require__(97274);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/VideoPlayer.js
var VideoPlayer = __webpack_require__(17425);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/VideoLinkerBox.js


var _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }













var VideoPlaceholder = (0,styled_components_browser_esm/* default */.ZP)(function (_ref) {
  var children = _ref.children,
      props = objectWithoutProperties_default()(_ref, _excluded);

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: children
    })
  }));
}).withConfig({
  displayName: "VideoLinkerBox__VideoPlaceholder",
  componentId: "sc-6jr0qj-0"
})(["position:relative;width:100%;padding-bottom:56.25%;background:#f7f8fa;color:#dcdee0;& > div{position:absolute;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:16px;}", ""], function (props) {
  return props.onClick && (0,styled_components_browser_esm/* css */.iv)(["cursor:pointer;&:hover{color:", ";& > div{transform:scale(1.05);transition:transform 0.2s;}}"], (0,dist_index_esm/* themeGet */.R)('colors.black.400'));
});
/** A container for the form used to animate the different inputs */

var MainFormContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "VideoLinkerBox__MainFormContainer",
  componentId: "sc-6jr0qj-1"
})(["position:relative;input{box-shadow:0px 2px 7px -6px #696969;}"]);
/**
 * A video placeholder that user can click on to upload a new video.
 * This component doesn't provide save and cancel buttons, nor
 * does it manages internal state.
 *
 * A good way to use it is to wrap it with `InlineEditField`. You can
 * check `components/tier-page/TierVideo.js` for an example.
 */

var VideoLinkerBox = function VideoLinkerBox(_ref2) {
  var url = _ref2.url,
      _onChange = _ref2.onChange,
      isEditing = _ref2.isEditing,
      setEditing = _ref2.setEditing;
  return !isEditing ? /*#__PURE__*/(0,jsx_runtime.jsxs)(VideoPlaceholder, {
    onClick: function onClick() {
      return setEditing(true);
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(VideoPlus, {
      size: "50%"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      fontWeight: "bold",
      fontSize: "16px",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "VideoLinkerBox.AddVideo",
        defaultMessage: [{
          "type": 0,
          "value": "Add a video"
        }]
      })
    })]
  }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(MainFormContainer, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      width: 1,
      maxHeight: 400,
      mb: 2,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(VideoPlayer/* default */.ZP, {
        url: url,
        placeholder: /*#__PURE__*/(0,jsx_runtime.jsxs)(VideoPlaceholder, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ArrowDownCircle, {
            size: "50%"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontWeight: "bold",
            fontSize: "16px",
            textAlign: "center",
            color: "black.400",
            mt: 2,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "VideoLinkerBox.SetUrl",
              defaultMessage: [{
                "type": 0,
                "value": "Set the video URL below. We support the following platforms: "
              }, {
                "type": 1,
                "value": "supportedVideoProviders"
              }],
              values: {
                supportedVideoProviders: VideoPlayer/* supportedVideoProviders.join */.cr.join(', ')
              }
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, {
      type: "url",
      placeholder: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      value: url || '',
      onChange: function onChange(e) {
        return _onChange(e.target.value);
      },
      width: 1,
      autoFocus: true
    })]
  });
};

VideoLinkerBox.__docgenInfo = {
  "description": "A video placeholder that user can click on to upload a new video.\nThis component doesn't provide save and cancel buttons, nor\ndoes it manages internal state.\n\nA good way to use it is to wrap it with `InlineEditField`. You can\ncheck `components/tier-page/TierVideo.js` for an example.",
  "methods": [],
  "displayName": "VideoLinkerBox",
  "props": {
    "url": {
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
      "required": true
    },
    "isEditing": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "setEditing": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    }
  }
};
/* harmony default export */ var components_VideoLinkerBox = (VideoLinkerBox);

/***/ })

}]);
//# sourceMappingURL=VideoLinkerBox.9cd1fcefbd58eb09.js.map