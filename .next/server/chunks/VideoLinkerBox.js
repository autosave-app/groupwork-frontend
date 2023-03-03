"use strict";
exports.id = 3568;
exports.ids = [3568];
exports.modules = {

/***/ 30333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_boxicons_regular_VideoPlus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93426);
/* harmony import */ var _styled_icons_boxicons_regular_VideoPlus__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_VideoPlus__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_feather_ArrowDownCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74494);
/* harmony import */ var _styled_icons_feather_ArrowDownCircle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_ArrowDownCircle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97274);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var _VideoPlayer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17425);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
const _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













const VideoPlaceholder = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
      children: children
    })
  }));
}).withConfig({
  displayName: "VideoLinkerBox__VideoPlaceholder",
  componentId: "sc-6jr0qj-0"
})(["position:relative;width:100%;padding-bottom:56.25%;background:#f7f8fa;color:#dcdee0;& > div{position:absolute;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:16px;}", ""], props => props.onClick && (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.css)(["cursor:pointer;&:hover{color:", ";& > div{transform:scale(1.05);transition:transform 0.2s;}}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.400')));
/** A container for the form used to animate the different inputs */

const MainFormContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
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

const VideoLinkerBox = ({
  url,
  onChange,
  isEditing,
  setEditing
}) => {
  return !isEditing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(VideoPlaceholder, {
    onClick: () => setEditing(true),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_icons_boxicons_regular_VideoPlus__WEBPACK_IMPORTED_MODULE_1__.VideoPlus, {
      size: "50%"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
      fontWeight: "bold",
      fontSize: "16px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "VideoLinkerBox.AddVideo",
        defaultMessage: [{
          "type": 0,
          "value": "Add a video"
        }]
      })
    })]
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(MainFormContainer, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
      width: 1,
      maxHeight: 400,
      mb: 2,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_VideoPlayer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
        url: url,
        placeholder: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(VideoPlaceholder, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_icons_feather_ArrowDownCircle__WEBPACK_IMPORTED_MODULE_2__.ArrowDownCircle, {
            size: "50%"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
            fontWeight: "bold",
            fontSize: "16px",
            textAlign: "center",
            color: "black.400",
            mt: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "VideoLinkerBox.SetUrl",
              defaultMessage: [{
                "type": 0,
                "value": "Set the video URL below. We support the following platforms: "
              }, {
                "type": 1,
                "value": "supportedVideoProviders"
              }],
              values: {
                supportedVideoProviders: _VideoPlayer__WEBPACK_IMPORTED_MODULE_9__/* .supportedVideoProviders.join */ .cr.join(', ')
              }
            })
          })]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
      type: "url",
      placeholder: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      value: url || '',
      onChange: e => onChange(e.target.value),
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoLinkerBox);

/***/ })

};
;