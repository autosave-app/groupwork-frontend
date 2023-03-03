"use strict";
(() => {
var exports = {};
exports.id = 3858;
exports.ids = [3858,9139];
exports.modules = {

/***/ 3798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69078);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);

const _excluded = ["backgroundType", "backgroundOpacity"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/**
 * A specialization of `Container` that displays itself above the content, in position
 * absolute, with a dark background and content centered.
 *
 * Accepts all the props from `Container`.
 */



const ContainerOverlay = _ref => {
  let {
    backgroundType,
    backgroundOpacity
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const isDark = backgroundType === 'dark';
  const defaultOpacity = isDark ? 0.5 : 0.75;
  const opacity = !lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default()(backgroundOpacity) ? backgroundOpacity : defaultOpacity;
  const lightness = isDark ? '30' : '255';
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, _objectSpread({
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: `rgba(${lightness}, ${lightness}, ${lightness}, ${opacity})`,
    width: "100%",
    height: "100%",
    zIndex: 9999
  }, props));
};

ContainerOverlay.defaultProps = {
  backgroundType: 'white'
};
ContainerOverlay.__docgenInfo = {
  "description": "A specialization of `Container` that displays itself above the content, in position\nabsolute, with a dark background and content centered.\n\nAccepts all the props from `Container`.",
  "methods": [],
  "displayName": "ContainerOverlay",
  "props": {
    "backgroundType": {
      "defaultValue": {
        "value": "'white'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'dark'",
          "computed": false
        }, {
          "value": "'white'",
          "computed": false
        }]
      },
      "required": false
    },
    "backgroundOpacity": {
      "description": "If omitted, will use 0.5 for dark and 0.75 for black",
      "type": {
        "name": "number"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContainerOverlay);

/***/ }),

/***/ 43825:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88705);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84842);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Page__WEBPACK_IMPORTED_MODULE_4__]);
_Page__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const _excluded = ["showContactSupportLink"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







/**
 * A page to show when the feature is not supported by the collective.
 * Ensures the page is not referenced by robots.
 */




const PageFeatureNotSupported = _ref => {
  let {
    showContactSupportLink
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  const title = formatMessage({
    id: "FeatureNotSupported.title",
    defaultMessage: [{
      "type": 0,
      "value": "Page inaccessible"
    }]
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Page__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    noRobots: true,
    title: title
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      px: 2,
      py: [5, 6],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Text__WEBPACK_IMPORTED_MODULE_5__.H1, {
        fontSize: "38px",
        mb: 3,
        textAlign: "center",
        children: title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Text__WEBPACK_IMPORTED_MODULE_5__.P, {
        fontSize: "64px",
        mt: 3,
        mb: 5,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
          role: "img",
          "aria-label": "Monkey Face",
          children: "\uD83D\uDE48\uFE0F"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_5__.P, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "FeatureNotSupported.description",
          defaultMessage: [{
            "type": 0,
            "value": "This page has not been activated for this Collective or you don't have permission to see it."
          }]
        }), showContactSupportLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
          children: [' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "ContactSupportForDetails",
            defaultMessage: [{
              "type": 0,
              "value": "Please contact "
            }, {
              "type": 8,
              "value": "SupportLink",
              "children": [{
                "type": 0,
                "value": "support"
              }]
            }, {
              "type": 0,
              "value": " for more details."
            }],
            values: {
              SupportLink: _I18nFormatters__WEBPACK_IMPORTED_MODULE_3__/* .I18nSupportLink */ .wl
            }
          })]
        })]
      })]
    })
  }));
};

PageFeatureNotSupported.defaultProps = {
  showContactSupportLink: true
};
PageFeatureNotSupported.__docgenInfo = {
  "description": "A page to show when the feature is not supported by the collective.\nEnsures the page is not referenced by robots.",
  "methods": [],
  "displayName": "PageFeatureNotSupported",
  "props": {
    "showContactSupportLink": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageFeatureNotSupported);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59139:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RichTextEditor)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42038);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46555);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71564);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65985);
/* harmony import */ var _lib_styled_components_shared_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72004);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97079);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69078);
/* harmony import */ var _HTMLContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74770);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29242);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37278);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36422);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_4__]);
uuid__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const TrixEditorContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "RichTextEditor__TrixEditorContainer",
  componentId: "sc-2bze4a-0"
})(["", " trix-editor{border:none;padding:0;margin-top:8px;padding-top:8px;outline-offset:0.5em;", " &::-webkit-scrollbar{width:8px;}", " ", " &:empty:not(:focus)::before{color:", ";}figcaption{display:none;}", "}trix-toolbar{min-height:40px;background:", ";", " z-index:2;margin-bottom:8px;", " .trix-button-group{border-radius:6px;border-color:#c4c7cc;margin-bottom:0;background:white;}.trix-button{border-bottom:none;display:inline-block;height:auto;&:hover{background:", ";}&.trix-active{background:", ";}&::before,&.trix-active::before{margin:4px;}}", " @media (max-width:500px){.trix-button--icon-strike,.trix-button--icon-number-list,.trix-button--icon-decrease-nesting-level,.trix-button--icon-increase-nesting-level{display:none;}}", " .trix-button--icon-attach::before{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'/%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'/%3E%3Cpolyline points='21 15 16 10 5 21'/%3E%3C/svg%3E\");}.trix-button--video-attach::before{top:8%;bottom:4%;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-video'%3E%3Cpolygon points='23 7 16 12 23 17 23 7'%3E%3C/polygon%3E%3Crect x='1' y='5' width='15' height='14' rx='2' ry='2'%3E%3C/rect%3E%3C/svg%3E\");}}", ""], props => props.withBorders && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.css)({
  border: '1px solid',
  borderColor: !props.error ? 'black.300' : 'red.300',
  borderRadius: 10,
  padding: 3
}), _lib_styled_components_shared_styles__WEBPACK_IMPORTED_MODULE_7__/* .CustomScrollbarCSS */ .T, props => Boolean(props.editorMaxHeight) && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.css)({
  overflowY: 'scroll'
}), props => !props.withBorders && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.css)({
  outline: !props.error ? 'none' : `1px dashed ${props.theme.colors.red[300]}`,
  '&:focus': {
    outline: `1px dashed ${props.theme.colors.black[200]}`
  }
}), props => props.theme.colors.black[400], props => (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.css)({
  minHeight: props.editorMinHeight,
  maxHeight: props.editorMaxHeight
}), props => props.toolbarBackgroundColor, props => !props.withBorders && `box-shadow: 0px 5px 3px -3px rgba(0, 0, 0, 0.1);`, props => props.withBorders && `min-height: 0px; margin-bottom: 0;`, props => props.theme.colors.blue[100], props => props.theme.colors.blue[200], props => props.version === 'simplified' && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.css)({
  '.trix-button-group--file-tools': {
    display: 'none'
  },
  '.trix-button-group--block-tools .trix-button:not(.trix-button--icon-number-list):not(.trix-button--icon-bullet-list)': {
    display: 'none'
  },
  '.trix-button--icon-bullet-list': {
    borderLeft: 'none'
  }
}), props => props.withStickyToolbar && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.css)({
  position: 'sticky',
  top: props.toolbarTop || 0,
  marginTop: props.toolbarOffsetY,
  p: '10px'
}), props => props.isDisabled && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.css)({
  pointerEvents: 'none',
  cursor: 'not-allowed',
  background: '#f3f3f3',
  'trix-toolbar,.trix-button-group': {
    background: '#f3f3f3 !important'
  }
}));
const SUPPORTED_SERVICE_URLS = {
  youTube: 'https://www.youtube-nocookie.com/embed/',
  anchorFm: 'https://anchor.fm/'
};
/**
 * A React wrapper around the Trix library to edit rich text.
 * Produces HTML and clear text.
 */

class RichTextEditor extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "initialize", () => {
      if (this.Trix && this.editorRef.current) {
        // Listen for changes
        this.editorRef.current.addEventListener('trix-change', this.handleChange, false);
        this.editorRef.current.addEventListener('trix-attachment-add', this.handleUpload);
        this.editorRef.current.addEventListener('trix-file-accept', this.handleFileAccept);
        this.editorRef.current.addEventListener('trix-action-invoke', this.trixActionInvoke);
        this.editorRef.current.addEventListener('trix-initialize', event => {
          if (this.props.videoEmbedEnabled) {
            this.replaceEmbeddedIFrames(this.props.value || this.props.defaultValue);
            this.trixEmbed(event);
          } // Some special handling for links


          if (this.mainContainerRef.current) {
            // We must listen when the user presses the 'Enter' key and when the user clicks the 'Link' button as well
            const linkInput = this.mainContainerRef.current.querySelector("[data-trix-input][name='href']");
            linkInput?.addEventListener('keydown', e => {
              if (e.key === 'Enter') {
                this.handleLink();
              }
            });
            const addLinkBtn = this.mainContainerRef.current.querySelector("[data-trix-method='setAttribute']");
            addLinkBtn?.addEventListener('click', this.handleLink);
          }
        }); // Component ready!

        this.isReady = true;
      }
    });

    _defineProperty(this, "replaceEmbeddedIFrames", value => {
      const iframeRegex = new RegExp(`<iframe.+?iframe>`, 'ig');
      let match;
      let lastIndex = 0;

      while (match = iframeRegex.exec(value)) {
        if (lastIndex === 0) {
          this.getEditor().loadHTML('');
        }

        const iframe = match[0];
        const position = match.index;
        const preText = value.substring(lastIndex, position);
        this.getEditor().setSelectedRange([lastIndex, position]);
        this.getEditor().insertHTML(preText);
        const attachment = new this.Trix.Attachment({
          content: iframe
        });
        this.getEditor().insertAttachment(attachment);
        lastIndex = match.index + iframe.length;
        const postText = value.substring(lastIndex, value.length);
        this.getEditor().insertHTML(postText);
      }
    });

    _defineProperty(this, "trixEmbed", e => {
      const videoEmbedButton = `<button type="button" tabindex="-1" data-trix-action="x-video-dialog-open" title="Attach Video" class="trix-button trix-button--icon trix-button--video-attach">Attach Video</button>`;
      const videoEmbedDialog = `
            <div class="trix-dialog" data-trix-dialog="video-url" data-trix-dialog-attribute="video">
              <div class="trix-dialog__link-fields">
                <input type="url" name="video-url" class="trix-input trix-input--dialog trix-input--dialog-embed" placeholder="Enter Video URL…" aria-label="Video URL" data-trix-input="">
                <div class="trix-button-group">
                  <input type="button" class="trix-button trix-button--dialog" value="Add Video" data-trix-action="x-add-embed">
                </div>
              </div>
              <strong>Note: Only YouTube and Anchor.fm links are supported.</strong>
            </div>`;
      const {
        toolbarElement
      } = e.target;
      const attachFilesButton = toolbarElement.querySelector('[data-trix-action=attachFiles]');
      attachFilesButton.insertAdjacentHTML('afterend', videoEmbedButton);
      const trixDialog = toolbarElement.querySelector('.trix-dialog--link');
      trixDialog.insertAdjacentHTML('afterend', videoEmbedDialog);
    });

    _defineProperty(this, "trixActionInvoke", e => {
      const {
        toolbarElement
      } = e.target;

      if (e.actionName === 'x-video-dialog-open') {
        const attachVideoDialog = toolbarElement.querySelector('[data-trix-dialog=video-url]');
        const attachVideoDialogInput = toolbarElement.querySelector('.trix-input--dialog-embed');

        if (attachVideoDialog.getAttribute('data-trix-active') === '') {
          attachVideoDialog.removeAttribute('data-trix-active');
        } else {
          attachVideoDialog.setAttribute('data-trix-active', '');
          attachVideoDialogInput.removeAttribute('disabled');
        }
      } else if (e.actionName === 'x-add-embed') {
        const embedLink = toolbarElement.querySelector('.trix-input--dialog-embed').value?.trim();

        if (embedLink) {
          this.embedIframe(embedLink);
        }
      }
    });

    _defineProperty(this, "constructVideoEmbedURL", (service, id) => {
      if (service === 'youtube') {
        return `${SUPPORTED_SERVICE_URLS.youTube}${id}`;
      }
      /* else if (service === 'vimeo') {
      return `https://player.vimeo.com/video/${id}`;
      } */
      else if (service === 'anchorFm') {
        return `${SUPPORTED_SERVICE_URLS.anchorFm}${id}`;
      } else {
        return null;
      }
    });

    _defineProperty(this, "parseServiceLink", videoLink => {
      const regexps = {
        youtube: new RegExp('(?:https?://)?(?:www\\.)?youtu(?:\\.be/|be\\.com/\\S*(?:watch|embed)(?:(?:(?=/[^&\\s?]+(?!\\S))/)|(?:\\S*v=|v/)))([^&\\s?]+)', 'i'),
        vimeo: new RegExp('(http|https)?://(www\\.)?vimeo\\.com/(?:channels/(?:\\w+/)?|groups/([^/]*)/videos/|)(\\d+)(?:|/?)'),
        anchorFm: /^(http|https)?:\/\/(www\.)?anchor\.fm\/([^/]+)(\/embed)?(\/episodes\/)?([^/]+)?\/?$/
      };

      for (const service in regexps) {
        const matches = regexps[service].exec(videoLink);

        if (matches) {
          if (service === 'anchorFm') {
            const podcastName = matches[3];
            const episodeId = matches[6];
            const podcastUrl = `${podcastName}/embed`;
            return {
              service,
              id: episodeId ? `${podcastUrl}/episodes/${episodeId}` : podcastUrl
            };
          } else {
            return {
              service,
              id: matches[matches.length - 1]
            };
          }
        }
      }

      return {};
    });

    _defineProperty(this, "embedIframe", videoLink => {
      const {
        id,
        service
      } = this.parseServiceLink(videoLink);
      const embedLink = this.constructVideoEmbedURL(service, id);

      if (embedLink) {
        const sanitizedLink = embedLink.replace(/["\\]/g, ''); // Small security enhancement, prevents going out of `src`

        const videoServices = ['youtube', 'vimeo'];
        let attachmentData;

        if (videoServices.includes(service)) {
          attachmentData = {
            contentType: '--embed-iframe-video',
            content: `<iframe src="${sanitizedLink}/?showinfo=0" width="100%" height="394" frameborder="0" allowfullscreen/>`
          };
        } else {
          attachmentData = {
            contentType: `--embed-iframe-${service}`,
            content: `<iframe src="${sanitizedLink}" width="100%" frameborder="0"/>`
          };
        }

        this.getEditor().insertAttachment(new this.Trix.Attachment(attachmentData));
      }
    });

    _defineProperty(this, "handleChange", e => {
      // Trigger content formatters
      this.autolink(); // Notify parent function

      if (this.props.onChange) {
        this.props.onChange(e);
      } // Reset errors


      if (this.state.error) {
        this.setState({
          error: null
        });
      }
    });

    _defineProperty(this, "handleFileAccept", e => {
      if (!/^image\//.test(e.file.type)) {
        alert('You can only upload images.');
        e.preventDefault();
      } else if (e.file.size > 4000000) {
        // Prevent attaching files > 4MB
        alert('This file is too big (max: 4mb).');
        e.preventDefault();
      }
    });

    _defineProperty(this, "handleUpload", e => {
      const {
        attachment
      } = e;

      const attachmentContent = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(attachment, 'attachment.attributes.values.content');

      const isVideoAttachment = attachmentContent?.includes(`<iframe src="${SUPPORTED_SERVICE_URLS.youTube}`) || attachmentContent?.includes(`<iframe src="${SUPPORTED_SERVICE_URLS.anchorFm}`);

      if (isVideoAttachment) {
        return;
      } else if (!attachment.file) {
        attachment.remove(); // Remove unknown stuff, for example when copy-pasting HTML

        return;
      }

      this.props.setUploading?.(true);

      const onProgress = progress => attachment.setUploadProgress(progress);

      const onSuccess = fileURL => {
        this.props.setUploading?.(false);
        attachment.setAttributes({
          url: fileURL,
          href: fileURL
        });
      };

      const onFailure = () => {
        this.props.setUploading?.(false);
        this.setState({
          error: 'File upload failed'
        });
        attachment.remove();
      };

      (0,_lib_api__WEBPACK_IMPORTED_MODULE_6__/* .uploadImageWithXHR */ .Z4)(attachment.file, this.props.kind, {
        onProgress,
        onSuccess,
        onFailure
      });
      return e;
    });

    _defineProperty(this, "handleLink", () => {
      const urlInput = this.mainContainerRef.current?.querySelector("[data-trix-input][name='href']");
      const urlInputValue = urlInput?.value?.trim(); // Ignore missing input or empty values

      if (!urlInputValue) {
        return;
      } // Automatically add 'https://' to the url
      // eslint-disable-next-line camelcase


      if ((0,validator__WEBPACK_IMPORTED_MODULE_5__.isURL)(urlInputValue, {
        require_protocol: false
      }) && !(0,validator__WEBPACK_IMPORTED_MODULE_5__.isURL)(urlInputValue, {
        require_protocol: true
      })) {
        urlInput.value = `https://${urlInputValue}`;
      }
    });

    _defineProperty(this, "autolinkDelimiter", url => {
      let lastCharacterPosition = url.length;

      while (lastCharacterPosition > 0) {
        const lastCharacterIndex = lastCharacterPosition - 1;
        const closingPair = url[lastCharacterIndex];
        let openingPair;

        if (closingPair === ')') {
          openingPair = '(';
        } else if (closingPair === ']') {
          openingPair = '[';
        } else if (closingPair === '}') {
          openingPair = '{';
        } else if (closingPair === '"') {
          openingPair = '"';
        } else if (closingPair === "'") {
          openingPair = "'";
        } // Ensure single punctuations marks at the end of the URL are not included as part of link


        if ('?!.,:;*_~'.includes(url[lastCharacterIndex])) {
          lastCharacterPosition--;
        } else if (openingPair) {
          let opening = 0,
              closing = 0;
          /** Check to ensure that when a URL is enclosed within pair punctuations,
           * we do not include the closing punctuation as part of the link.
           * We only want to accept a closing punctuation at the end of the link,
           * if there is a corresponding opening punctuation within the URL.
           */

          for (let i = 0; i < lastCharacterPosition; i++) {
            if (url[i] === openingPair) {
              opening++;
            } else if (url[i] === closingPair) {
              closing++;
            }
          }

          if (opening >= closing) {
            break;
          }

          lastCharacterPosition--;
        } else {
          break;
        }
      }

      return lastCharacterPosition;
    });

    this.editorRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
    this.mainContainerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
    this.state = {
      id: props.id,
      error: null
    };
    this.isReady = false;

    if (false) {}
  }

  componentDidMount() {
    if (!this.state.id) {
      this.setState({
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)()
      });
    } else if (!this.isReady) {
      this.initialize();
    }
  }

  componentDidUpdate(oldProps) {
    if (!this.isReady) {
      this.initialize();
    } else if (oldProps.reset !== this.props.reset) {
      this.editorRef.current.editor.loadHTML('');
    }
  }

  componentWillUnmount() {
    if (this.isReady) {
      this.editorRef.current.removeEventListener('trix-change', this.handleChange);
      this.editorRef.current.removeEventListener('trix-attachment-add', this.handleUpload);
      this.editorRef.current.removeEventListener('trix-attachment-add', this.handleFileAccept);
      this.editorRef.current.removeEventListener('trix-action-invoke', this.trixActionInvoke);
    }
  }

  getEditor() {
    return this.editorRef.current.editor;
  }

  /** Automatically create anchors with hrefs for links */
  autolink() {
    const linkRegex = new RegExp(`(https?://\\S+\\.\\S+)\\s`, 'ig');
    const editor = this.getEditor();
    const content = editor.getDocument().toString();
    let match;

    while (match = linkRegex.exec(content)) {
      const url = match[1];

      if ((0,validator__WEBPACK_IMPORTED_MODULE_5__.isURL)(url)) {
        const position = match.index;
        const urlLength = this.autolinkDelimiter(url);
        const range = [position, position + urlLength];
        const hrefAtRange = editor.getDocument().getCommonAttributesAtRange(range).href;
        const newURL = url.slice(0, urlLength);

        if (hrefAtRange !== newURL) {
          this.updateInRange(editor, range, 0, () => {
            if (editor.canActivateAttribute('href')) {
              editor.activateAttribute('href', newURL);
            }
          });
        }
      }
    }
  }
  /** A helper used by autolink to find where the url actually ends
   * Credits:
   * https://github.com/github/cmark-gfm/blob/36c1553d2a1f04dc1628e76b18490edeff78b8d0/extensions/autolink.c#L37
   * https://github.com/vmg/redcarpet/blob/92a7b3ae2241b862e9bf45e0af3cf53ebdfb0afb/ext/redcarpet/autolink.c#L58
   */


  /** A trix helper that will apply func in range then restore base range when it's done */
  updateInRange(editor, range, offset = 0, updateFunc) {
    const baseRange = editor.getSelectedRange();
    editor.setSelectedRange(range);
    updateFunc();
    editor.setSelectedRange([baseRange[0] + offset, baseRange[1] + offset]);
  }
  /** ---- Render ---- */


  render() {
    const {
      defaultValue,
      withStickyToolbar,
      toolbarTop,
      toolbarOffsetY,
      toolbarBackgroundColor,
      autoFocus,
      placeholder,
      editorMinHeight,
      withBorders,
      inputName,
      disabled,
      error,
      fontSize,
      value,
      version,
      showCount,
      maxLength,
      editorMaxHeight
    } = this.props;
    return !this.state.id ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      maxHeight: editorMaxHeight ? editorMaxHeight + 56 : undefined,
      height: editorMinHeight ? editorMinHeight + 56 : 200
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(TrixEditorContainer, {
      withStickyToolbar: withStickyToolbar,
      toolbarTop: toolbarTop,
      toolbarOffsetY: toolbarOffsetY,
      toolbarBackgroundColor: toolbarBackgroundColor,
      editorMinHeight: editorMinHeight,
      editorMaxHeight: editorMaxHeight,
      withBorders: withBorders,
      version: version,
      isDisabled: disabled,
      error: error,
      "data-cy": this.props['data-cy'],
      ref: this.mainContainerRef,
      children: [this.state.error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        type: "error",
        mb: "36px",
        withIcon: true,
        children: this.state.error.toString()
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("input", {
        id: this.state.id,
        value: value || defaultValue,
        type: "hidden",
        name: inputName
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_HTMLContent__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        fontSize: fontSize,
        children: !showCount ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("trix-editor", {
          ref: this.editorRef,
          input: this.state.id,
          autofocus: autoFocus ? true : undefined,
          placeholder: placeholder
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          position: "relative",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("trix-editor", {
            ref: this.editorRef,
            input: this.state.id,
            autofocus: autoFocus ? true : undefined,
            placeholder: placeholder
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            position: "absolute",
            bottom: "1em",
            right: "1em",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_StyledTag__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
              textTransform: "uppercase",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("span", {
                children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_8__/* .stripHTML */ .Cb)(value || defaultValue).length
              }), maxLength && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("span", {
                children: [" / ", maxLength]
              })]
            })
          })]
        })
      })]
    });
  }

}

_defineProperty(RichTextEditor, "defaultProps", {
  withStickyToolbar: false,
  toolbarTop: 0,
  toolbarOffsetY: -62,
  // Default Trix toolbar height
  inputName: 'content',
  toolbarBackgroundColor: 'white',
  version: 'default',
  'data-cy': 'RichTextEditor',
  videoEmbedEnabled: false
});

RichTextEditor.__docgenInfo = {
  "description": "A React wrapper around the Trix library to edit rich text.\nProduces HTML and clear text.",
  "methods": [{
    "name": "getEditor",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "initialize",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "replaceEmbeddedIFrames",
    "docblock": "---- Trix handlers ----",
    "modifiers": [],
    "params": [{
      "name": "value"
    }],
    "returns": null,
    "description": "---- Trix handlers ----"
  }, {
    "name": "trixEmbed",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "trixActionInvoke",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "constructVideoEmbedURL",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "service",
      "type": null
    }, {
      "name": "id",
      "type": null
    }],
    "returns": null
  }, {
    "name": "parseServiceLink",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "videoLink",
      "type": null
    }],
    "returns": null
  }, {
    "name": "embedIframe",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "videoLink",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleFileAccept",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleUpload",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleLink",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "autolink",
    "docblock": "Automatically create anchors with hrefs for links",
    "modifiers": [],
    "params": [],
    "returns": null,
    "description": "Automatically create anchors with hrefs for links"
  }, {
    "name": "autolinkDelimiter",
    "docblock": "A helper used by autolink to find where the url actually ends\nCredits:\nhttps://github.com/github/cmark-gfm/blob/36c1553d2a1f04dc1628e76b18490edeff78b8d0/extensions/autolink.c#L37\nhttps://github.com/vmg/redcarpet/blob/92a7b3ae2241b862e9bf45e0af3cf53ebdfb0afb/ext/redcarpet/autolink.c#L58",
    "modifiers": [],
    "params": [{
      "name": "url"
    }],
    "returns": null,
    "description": "A helper used by autolink to find where the url actually ends\nCredits:\nhttps://github.com/github/cmark-gfm/blob/36c1553d2a1f04dc1628e76b18490edeff78b8d0/extensions/autolink.c#L37\nhttps://github.com/vmg/redcarpet/blob/92a7b3ae2241b862e9bf45e0af3cf53ebdfb0afb/ext/redcarpet/autolink.c#L58"
  }, {
    "name": "updateInRange",
    "docblock": "A trix helper that will apply func in range then restore base range when it's done",
    "modifiers": [],
    "params": [{
      "name": "editor"
    }, {
      "name": "range"
    }, {
      "name": "offset"
    }, {
      "name": "updateFunc"
    }],
    "returns": null,
    "description": "A trix helper that will apply func in range then restore base range when it's done"
  }],
  "displayName": "RichTextEditor",
  "props": {
    "withStickyToolbar": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "Whether the toolbar should stick to the top",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "toolbarTop": {
      "defaultValue": {
        "value": "0",
        "computed": false
      },
      "description": "If position is sticky, this prop defines the `top` property. Support responsive arrays",
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }, {
          "name": "array"
        }]
      },
      "required": false
    },
    "toolbarOffsetY": {
      "defaultValue": {
        "value": "-62",
        "computed": false
      },
      "description": "Useful to compensate the height of the toolbar when editing inline",
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }, {
          "name": "array"
        }]
      },
      "required": false
    },
    "inputName": {
      "defaultValue": {
        "value": "'content'",
        "computed": false
      },
      "description": "A name for the input",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "toolbarBackgroundColor": {
      "defaultValue": {
        "value": "'white'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "version": {
      "defaultValue": {
        "value": "'default'",
        "computed": false
      },
      "description": "This component is borderless by default. Set this to `true` to change that.",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'default'",
          "computed": false
        }, {
          "value": "'simplified'",
          "computed": false
        }]
      },
      "required": false
    },
    "data-cy": {
      "defaultValue": {
        "value": "'RichTextEditor'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "videoEmbedEnabled": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "id": {
      "description": "If not provided, an id will be automatically generated which will require a component update",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "defaultValue": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "value": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "placeholder": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "kind": {
      "description": "A unique identified for the category of uploaded files. Required if version is not \"simplified\"",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "fontSize": {
      "description": "Font size for the text",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "autoFocus": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onChange": {
      "description": "Called when text is changed with html content as first param and text content as second param",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "reset": {
      "description": "Change this prop to reset the value",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "showCount": {
      "description": "If true, max text length will be displayed at the bottom right",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "maxLength": {
      "description": "max length which is allowed",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "withBorders": {
      "description": "This component is borderless by default. Set this to `true` to change that.",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "disabled": {
      "description": "Whether the field should be disabled",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "editorMinHeight": {
      "description": "Min height for the full component",
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }, {
          "name": "array"
        }]
      },
      "required": false
    },
    "editorMaxHeight": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }, {
          "name": "array"
        }]
      },
      "required": false
    },
    "error": {
      "description": "If truthy, will display a red outline",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "setUploading": {
      "description": "Called when an image is being uploaded to set a boolean",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants_dismissable_help_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31801);
/* harmony import */ var _DismissibleMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94858);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37278);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87268);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










const CreateExpenseDismissibleIntro = ({
  collectiveName
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_DismissibleMessage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    messageId: _lib_constants_dismissable_help_message__WEBPACK_IMPORTED_MODULE_2__/* .HELP_MESSAGE.EXPENSE_CREATE_INFO */ .Zh.EXPENSE_CREATE_INFO,
    children: ({
      dismiss
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_MessageBox__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      type: "info",
      mb: 4,
      px: 0,
      py: 3,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__.P, {
        fontSize: "12px",
        lineHeight: "20px",
        color: "black.800",
        px: 24,
        "data-cy": "expense-create-help",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "CreateExpense.HelpCreateInfo",
          defaultMessage: [{
            "type": 0,
            "value": "Request payment from "
          }, {
            "type": 1,
            "value": "collective"
          }, {
            "type": 0,
            "value": ". Expenses will be processed once approved by a Collective admin. The amount, description, and your profile name are public, but attachments, payment details, and other personal info is kept private."
          }],
          values: {
            collective: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("strong", {
              children: collectiveName
            })
          }
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        asLink: true,
        onClick: dismiss,
        fontSize: "12px",
        "data-cy": "dismiss-expense-create-help",
        color: "blue.600",
        buttonSize: "tiny",
        ml: 10,
        mt: 2,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "DismissableHelp.DontShowAgain",
          defaultMessage: [{
            "type": 0,
            "value": "Ok, don’t show me again"
          }]
        })
      })]
    })
  });
};

CreateExpenseDismissibleIntro.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreateExpenseDismissibleIntro",
  "props": {
    "collectiveName": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateExpenseDismissibleIntro);

/***/ }),

/***/ 14519:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15078);
/* harmony import */ var _lib_i18n_expense__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8480);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _StyledCheckbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41433);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(173);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87262);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(66943);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledInputField__WEBPACK_IMPORTED_MODULE_8__]);
_StyledInputField__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const ExpenseRecurringForm = ({
  recurring,
  onChange
}) => {
  const [isRecurring, setRecurring] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(!!recurring);

  const handleSetRecurring = isRecurring => {
    if (!isRecurring) {
      onChange(null);
    }

    setRecurring(isRecurring);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
    mt: "50px",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      flex: "1 1",
      borderColor: "black.300",
      mb: 4
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
      color: "black.800",
      fontWeight: "700",
      fontSize: "13px",
      lineHeight: "20px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "Expense.Summary.Recurring.CheckboxTitle",
        defaultMessage: [{
          "type": 0,
          "value": "Is this a recurring expense?"
        }]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
      mt: 2,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        name: "tos",
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
          color: "black.800",
          fontWeight: "500",
          lineHeight: "16px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "Expense.Summary.Recurring.CheckboxDescription",
            defaultMessage: [{
              "type": 0,
              "value": "Choose this option to automatically submit a copy of this invoice on a periodic basis."
            }]
          })
        }),
        size: "13px",
        fontSize: "13px",
        checked: isRecurring,
        onChange: ({
          checked
        }) => handleSetRecurring(checked)
      })
    }), isRecurring && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
      flexDirection: ['column', 'row'],
      mt: 2,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        mr: [0, 3],
        mb: [2, 0],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          name: "frequency",
          htmlFor: "frequency",
          label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "Frequency",
            defaultMessage: [{
              "type": 0,
              "value": "Frequency"
            }]
          }),
          labelFontSize: "13px",
          labelFontWeight: 600,
          required: true,
          children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
            options: _lib_i18n_expense__WEBPACK_IMPORTED_MODULE_3__/* .RecurringIntervalOptions */ .wx,
            onChange: ({
              value: interval
            }) => onChange(_objectSpread(_objectSpread({}, recurring), {}, {
              interval
            })),
            menuPlacement: "auto",
            value: _lib_i18n_expense__WEBPACK_IMPORTED_MODULE_3__/* .RecurringIntervalOptions.find */ .wx.find(i => i.value === recurring?.interval),
            isSearchable: false
          }))
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          name: "endsAt",
          htmlFor: "endsAt",
          label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "EndDate",
            defaultMessage: [{
              "type": 0,
              "value": "End Date"
            }]
          }),
          labelFontSize: "13px",
          labelFontWeight: 600,
          required: false,
          children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
            type: "date",
            onChange: event => onChange(_objectSpread(_objectSpread({}, recurring), {}, {
              endsAt: (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_2__/* .getDateFromValue */ .j9)(event.target.value)
            })),
            menuPlacement: "auto",
            height: "38px",
            width: "100%",
            value: recurring?.endsAt && (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_2__/* .toIsoDateStr */ .fM)(recurring.endsAt),
            min: (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_2__/* .toIsoDateStr */ .fM)(new Date())
          }))
        })
      })]
    })]
  });
};

ExpenseRecurringForm.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpenseRecurringForm",
  "props": {
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "recurring": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "interval": {
            "name": "string",
            "required": false
          },
          "endsAt": {
            "name": "custom",
            "raw": "PropTypes.Date",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpenseRecurringForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FormPersister)
/* harmony export */ });
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1381);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35427);


class FormPersister {
  constructor(formId = null, throttlePeriod = 1000) {
    this.formId = formId;
    this.saveValues = lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(this.saveValues, throttlePeriod);
  }

  setFormId(formId) {
    this.formId = `formState-${formId}`;
  }

  saveValues(values) {
    if (this.formId) {
      (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__/* .setLocalStorage */ .qQ)(this.formId, JSON.stringify(values));
    }
  }

  loadValues() {
    if (this.formId) {
      const itemFromStorage = (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__/* .getFromLocalStorage */ .fp)(this.formId);

      if (itemFromStorage) {
        return JSON.parse(itemFromStorage);
      }
    }

    return null;
  }

  clearValues() {
    if (this.formId) {
      (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__/* .removeFromLocalStorage */ .bZ)(this.formId);
    }
  }

}

/***/ }),

/***/ 60225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68887);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);


/**
 * A custom react hook to copy values to the clipboard
 *
 * @param timeout: time before the isCopied flag is reset
 */

const useClipboard = ({
  timeout = 3000
} = {}) => {
  const [isCopied, setCopied] = react__WEBPACK_IMPORTED_MODULE_0___default().useState();
  const [updateCopyBtnTimeout, setUpdateCopyBtnTimeout] = react__WEBPACK_IMPORTED_MODULE_0___default().useState();
  return {
    isCopied,
    copy: value => {
      copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default()(value);
      setCopied(true);

      if (updateCopyBtnTimeout) {
        clearTimeout(updateCopyBtnTimeout);
      }

      const timeoutFn = setTimeout(() => {
        setCopied(false);
      }, timeout);
      setUpdateCopyBtnTimeout(timeoutFn);
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useClipboard);

/***/ }),

/***/ 72004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ CustomScrollbarCSS)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/**
 * A custom scrollbar for Chrome, more prettier than the system one.
 */

const CustomScrollbarCSS = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["@media (pointer:fine){&::-webkit-scrollbar{height:8px;margin:0 16px;}&::-webkit-scrollbar-thumb{background:#d1d1d3;border-radius:16px;&:hover{background:#aaa;}}&::-webkit-scrollbar-track{background:#f2f3f4;border-radius:20px;}&::-webkit-scrollbar-button{color:white;}}"]);

/***/ }),

/***/ 6525:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63901);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_fp_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43302);
/* harmony import */ var lodash_fp_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_allowed_features__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99708);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19878);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12136);
/* harmony import */ var _lib_expenses__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45624);
/* harmony import */ var _lib_form_persister__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(59115);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(32651);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(25896);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(97079);
/* harmony import */ var _components_collective_navbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(38208);
/* harmony import */ var _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(24839);
/* harmony import */ var _components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5824);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(69078);
/* harmony import */ var _components_ContainerOverlay__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(3798);
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(73908);
/* harmony import */ var _components_expenses_CreateExpenseDismissibleIntro__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(95340);
/* harmony import */ var _components_expenses_ExpenseForm__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(52497);
/* harmony import */ var _components_expenses_ExpenseInfoSidebar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(24018);
/* harmony import */ var _components_expenses_ExpenseNotesForm__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(12426);
/* harmony import */ var _components_expenses_ExpenseRecurringForm__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(14519);
/* harmony import */ var _components_expenses_ExpenseSummary__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(25990);
/* harmony import */ var _components_expenses_graphql_fragments__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(17738);
/* harmony import */ var _components_expenses_MobileCollectiveInfoStickyBar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(74448);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(16159);
/* harmony import */ var _components_LinkCollective__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(97619);
/* harmony import */ var _components_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(29242);
/* harmony import */ var _components_MessageBox__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(37278);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(84842);
/* harmony import */ var _components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(43825);
/* harmony import */ var _components_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(78720);
/* harmony import */ var _components_StyledButton__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(87268);
/* harmony import */ var _components_StyledCard__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(19156);
/* harmony import */ var _components_ToastProvider__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(31330);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_17__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_22__, _components_expenses_ExpenseForm__WEBPACK_IMPORTED_MODULE_24__, _components_expenses_ExpenseNotesForm__WEBPACK_IMPORTED_MODULE_26__, _components_expenses_ExpenseRecurringForm__WEBPACK_IMPORTED_MODULE_27__, _components_expenses_ExpenseSummary__WEBPACK_IMPORTED_MODULE_28__, _components_Page__WEBPACK_IMPORTED_MODULE_35__, _components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_36__, _components_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_37__, _components_ToastProvider__WEBPACK_IMPORTED_MODULE_40__]);
([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_17__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_22__, _components_expenses_ExpenseForm__WEBPACK_IMPORTED_MODULE_24__, _components_expenses_ExpenseNotesForm__WEBPACK_IMPORTED_MODULE_26__, _components_expenses_ExpenseRecurringForm__WEBPACK_IMPORTED_MODULE_27__, _components_expenses_ExpenseSummary__WEBPACK_IMPORTED_MODULE_28__, _components_Page__WEBPACK_IMPORTED_MODULE_35__, _components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_36__, _components_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_37__, _components_ToastProvider__WEBPACK_IMPORTED_MODULE_40__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











































const STEPS = _objectSpread(_objectSpread({}, _components_expenses_ExpenseForm__WEBPACK_IMPORTED_MODULE_24__/* .EXPENSE_FORM_STEPS */ .o0), {}, {
  SUMMARY: 'summary'
});

class CreateExpensePage extends (react__WEBPACK_IMPORTED_MODULE_3___default().Component) {
  static getInitialProps({
    query: {
      collectiveSlug,
      parentCollectiveSlug
    }
  }) {
    return {
      collectiveSlug,
      parentCollectiveSlug
    };
  }

  constructor(props) {
    super(props);

    _defineProperty(this, "onFormSubmit", async expense => {
      try {
        if (expense.payee.isInvite) {
          const expenseDraft = lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(expense, ['description', 'longDescription', 'tags', 'type', 'privateMessage', 'invoiceInfo', 'recipientNote', 'items', 'attachedFiles', 'payeeLocation', 'payoutMethod']);

          expenseDraft['payee'] = lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(expense.payee, ['id', 'slug', 'name', 'email', 'isInvite', 'organization']);
          const result = await this.props.draftExpenseAndInviteUser({
            variables: {
              account: {
                id: this.props.data.account.id
              },
              expense: expenseDraft
            }
          });

          if (this.state.formPersister) {
            this.state.formPersister.clearValues();
          } // Redirect to the expense page


          const legacyExpenseId = result.data.draftExpenseAndInviteUser.legacyId;
          const {
            collectiveSlug,
            parentCollectiveSlug,
            data
          } = this.props;
          const parentCollectiveSlugRoute = parentCollectiveSlug ? `${parentCollectiveSlug}/` : '';
          const collectiveType = parentCollectiveSlug ? (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_9__/* .getCollectiveTypeForUrl */ .rf)(data?.account) : undefined;
          const collectiveTypeRoute = collectiveType ? `${collectiveType}/` : '';
          await this.props.router.push(`${parentCollectiveSlugRoute}${collectiveTypeRoute}${collectiveSlug}/expenses/${legacyExpenseId}`);
        } else {
          this.setState({
            expense,
            step: STEPS.SUMMARY,
            isInitialForm: false
          });
        }
      } catch (e) {
        this.props.addToast({
          type: _components_ToastProvider__WEBPACK_IMPORTED_MODULE_40__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
          message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_11__/* .i18nGraphqlException */ .t2)(this.props.intl, e)
        });
      }
    });

    _defineProperty(this, "onSummarySubmit", async () => {
      try {
        this.setState({
          isSubmitting: true,
          error: null
        });
        const {
          expense,
          recurring
        } = this.state;
        const result = await this.props.createExpense({
          variables: {
            account: {
              id: this.props.data.account.id
            },
            expense: (0,_components_expenses_ExpenseForm__WEBPACK_IMPORTED_MODULE_24__/* .prepareExpenseForSubmit */ .dm)(expense),
            recurring
          }
        }); // Clear local storage backup if expense submitted successfully

        if (this.state.formPersister) {
          this.state.formPersister.clearValues();
        } // Redirect to the expense page


        const legacyExpenseId = result.data.createExpense.legacyId;
        const {
          collectiveSlug,
          parentCollectiveSlug,
          data
        } = this.props;
        const parentCollectiveSlugRoute = parentCollectiveSlug ? `${parentCollectiveSlug}/` : '';
        const collectiveType = parentCollectiveSlug ? (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_9__/* .getCollectiveTypeForUrl */ .rf)(data?.account) : undefined;
        const collectiveTypeRoute = collectiveType ? `${collectiveType}/` : '';
        await this.props.router.push(`${parentCollectiveSlugRoute}${collectiveTypeRoute}${collectiveSlug}/expenses/${legacyExpenseId}`);
        this.props.addToast({
          type: _components_ToastProvider__WEBPACK_IMPORTED_MODULE_40__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
          title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
            id: "Expense.Submitted",
            defaultMessage: [{
              "type": 0,
              "value": "Expense submitted"
            }]
          }),
          message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
            id: "Expense.SuccessPage",
            defaultMessage: [{
              "type": 0,
              "value": "You can edit or review updates on this page."
            }]
          })
        });
        window.scrollTo(0, 0);
      } catch (e) {
        this.props.addToast({
          type: _components_ToastProvider__WEBPACK_IMPORTED_MODULE_40__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
          message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_11__/* .i18nGraphqlException */ .t2)(this.props.intl, e)
        });
        this.setState({
          isSubmitting: false
        });
      }
    });

    _defineProperty(this, "onNotesChanges", e => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState(state => ({
        expense: _objectSpread(_objectSpread({}, state.expense), {}, {
          [name]: value
        })
      }));
    });

    this.formTopRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createRef();
    this.state = {
      step: STEPS.PAYEE,
      expense: null,
      isSubmitting: false,
      formPersister: null,
      isInitialForm: true,
      recurring: null
    };
  }

  async componentDidMount() {
    // Reset form when `resetForm` is passed in the URL
    if (this.handleResetForm()) {
      return;
    } // Re-fetch data if user is logged in


    if (this.props.LoggedInUser) {
      this.props.data.refetch();
      this.initFormPersister();
    }

    const {
      router,
      data
    } = this.props;
    const account = data?.account;
    (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_15__/* .addParentToURLIfMissing */ .Bc)(router, account, '/expenses/new');
  }

  async componentDidUpdate(oldProps, oldState) {
    // Reset form when `resetForm` is passed in the URL
    if (this.handleResetForm()) {
      return;
    } // Re-fetch data if user is logged in


    if (!oldProps.LoggedInUser && this.props.LoggedInUser) {
      this.props.data.refetch();
    } // Reset form persister when data loads or when account changes


    if (!this.state.formPersister || oldProps.data?.account?.id !== this.props.data?.account?.id) {
      this.initFormPersister();
    } // Scroll to top when switching steps


    if (oldState.step !== this.state.step && this.formTopRef.current) {
      this.formTopRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  getPageMetaData(collective) {
    const baseMetadata = (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_9__/* .getCollectivePageMetadata */ .Xq)(collective);
    const canonicalURL = `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_15__/* .getCollectivePageCanonicalURL */ .Bu)(collective)}/expenses/new`;

    if (collective) {
      return _objectSpread(_objectSpread({}, baseMetadata), {}, {
        title: `${collective.name} - New expense`,
        canonicalURL
      });
    } else {
      return _objectSpread(_objectSpread({}, baseMetadata), {}, {
        title: `New expense`,
        canonicalURL
      });
    }
  }

  buildFormPersister() {
    const {
      LoggedInUser,
      data
    } = this.props;

    if (data.account && LoggedInUser) {
      return new _lib_form_persister__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z(`expense-${data.account.id}=${LoggedInUser.id}`);
    }
  }

  handleResetForm() {
    const {
      router
    } = this.props;

    if ((0,_lib_utils__WEBPACK_IMPORTED_MODULE_16__/* .parseToBoolean */ .DD)(router.query.resetForm)) {
      const formPersister = this.buildFormPersister();

      if (formPersister) {
        formPersister.clearValues();

        const query = lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(router.query, ['resetForm']);

        const routeAs = router.asPath.split('?')[0];
        return router.push({
          pathname: '/create-expense',
          query
        }, routeAs, {
          shallow: true
        });
      }
    }
  }

  initFormPersister() {
    const formPersister = this.buildFormPersister();

    if (formPersister) {
      this.setState({
        formPersister
      });
    }
  }

  getSuggestedTags(collective) {
    const tagsStats = collective && collective.expensesTags || null;
    return tagsStats && tagsStats.map(({
      tag
    }) => tag);
  }

  render() {
    const {
      collectiveSlug,
      data,
      LoggedInUser,
      loadingLoggedInUser,
      router
    } = this.props;
    const {
      step
    } = this.state;

    if (!data.loading) {
      if (!data || data.error) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          data: data
        });
      } else if (!data.account) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          error: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_11__/* .generateNotFoundError */ .mN)(collectiveSlug),
          log: false
        });
      } else if (!(0,_lib_allowed_features__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP)(data.account, _lib_allowed_features__WEBPACK_IMPORTED_MODULE_8__/* .FEATURES.RECEIVE_EXPENSES */ .h6.RECEIVE_EXPENSES) || data.account.supportedExpenseTypes.length === 0) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {});
      } else if (data.account.isArchived) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
          showContactSupportLink: false
        });
      }
    }

    const collective = data && data.account;
    const host = collective && collective.host;
    const loggedInAccount = data && data.loggedInAccount;
    const payoutProfiles = (0,_lib_expenses__WEBPACK_IMPORTED_MODULE_12__/* .getPayoutProfiles */ .rX)(loggedInAccount);
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_Page__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, _objectSpread(_objectSpread({
      collective: collective
    }, this.getPageMetaData(collective)), {}, {
      children: !(0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_9__/* .expenseSubmissionAllowed */ .cm)(collective, LoggedInUser) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_31__/* .Flex */ .kC, {
        justifyContent: "center",
        p: 5,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_MessageBox__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
          type: "error",
          withIcon: true,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
            id: "mustBeMemberOfCollective",
            defaultMessage: [{
              "type": 0,
              "value": "You must be a member of the collective to see this page"
            }]
          })
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_collective_navbar__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          collective: collective,
          isLoading: !collective,
          callsToAction: {
            hasSubmitExpense: false,
            hasRequestGrant: false
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
          position: "relative",
          minHeight: [null, 800],
          ref: this.formTopRef,
          children: [!loadingLoggedInUser && !LoggedInUser && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_ContainerOverlay__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
            py: [2, null, 6],
            top: "0",
            position: ['fixed', null, 'absolute'],
            justifyContent: ['center', null, 'flex-start'],
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_37__/* .SignInOverlayBackground */ .g8, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .ZP, {
                showOCLogo: false,
                showSubHeading: false,
                hideFooter: true,
                routes: {
                  join: `/create-account?next=${encodeURIComponent(router.asPath)}`
                }
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_31__/* .Box */ .xu, {
            maxWidth: _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_18__/* .Dimensions.MAX_SECTION_WIDTH */ .Db.MAX_SECTION_WIDTH,
            m: "0 auto",
            px: [2, 3, 4],
            py: [4, 5],
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_31__/* .Flex */ .kC, {
              justifyContent: "space-between",
              flexDirection: ['column', 'row'],
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_31__/* .Box */ .xu, {
                minWidth: 300,
                maxWidth: ['100%', null, null, 728],
                mr: [0, 3, 5],
                mb: 5,
                flexGrow: "1",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_expenses_ExpenseSummary__WEBPACK_IMPORTED_MODULE_28__/* .SummaryHeader */ .w, {
                  fontSize: "24px",
                  lineHeight: "32px",
                  mb: 24,
                  py: 2,
                  children: step !== STEPS.SUMMARY ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                    id: "ExpenseForm.Submit",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Submit expense"
                    }]
                  }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                    id: "ExpenseSummaryTitle",
                    defaultMessage: [{
                      "type": 5,
                      "value": "type",
                      "options": {
                        "CHARGE": {
                          "value": [{
                            "type": 0,
                            "value": "Charge"
                          }]
                        },
                        "INVOICE": {
                          "value": [{
                            "type": 0,
                            "value": "Invoice"
                          }]
                        },
                        "RECEIPT": {
                          "value": [{
                            "type": 0,
                            "value": "Receipt"
                          }]
                        },
                        "GRANT": {
                          "value": [{
                            "type": 0,
                            "value": "Grant"
                          }]
                        },
                        "SETTLEMENT": {
                          "value": [{
                            "type": 0,
                            "value": "Settlement"
                          }]
                        },
                        "other": {
                          "value": [{
                            "type": 0,
                            "value": "Expense"
                          }]
                        }
                      }
                    }, {
                      "type": 0,
                      "value": " Summary to "
                    }, {
                      "type": 8,
                      "value": "LinkCollective",
                      "children": [{
                        "type": 1,
                        "value": "collectiveName"
                      }]
                    }],
                    values: {
                      type: this.state.expense?.type,
                      collectiveName: collective?.name,
                      LinkCollective: text => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_LinkCollective__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
                        collective: collective,
                        children: text
                      })
                    }
                  })
                }), data.loading || loadingLoggedInUser ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
                  width: "100%",
                  height: 400
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_31__/* .Box */ .xu, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_expenses_CreateExpenseDismissibleIntro__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                    collectiveName: collective.name
                  }), step !== STEPS.SUMMARY ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_expenses_ExpenseForm__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP, {
                    collective: collective,
                    loading: loadingLoggedInUser,
                    loggedInAccount: loggedInAccount,
                    onSubmit: this.onFormSubmit,
                    expense: this.state.expense,
                    expensesTags: this.getSuggestedTags(collective),
                    payoutProfiles: payoutProfiles,
                    formPersister: this.state.formPersister,
                    shouldLoadValuesFromPersister: this.state.isInitialForm,
                    defaultStep: step,
                    autoFocusTitle: true
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_StyledCard__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
                      p: [16, 24, 32],
                      mb: 0,
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_expenses_ExpenseSummary__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                        host: collective.host,
                        expense: _objectSpread(_objectSpread({}, this.state.expense), {}, {
                          createdByAccount: this.props.data.loggedInAccount
                        }),
                        collective: collective,
                        borderless: true,
                        isEditing: true
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_expenses_ExpenseRecurringForm__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                        recurring: this.state.recurring,
                        onChange: recurring => this.setState({
                          recurring
                        })
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_31__/* .Box */ .xu, {
                      mt: 24,
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_expenses_ExpenseNotesForm__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                        onChange: this.onNotesChanges,
                        defaultValue: this.state.expense.privateMessage
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_31__/* .Flex */ .kC, {
                        flexWrap: "wrap",
                        mt: 4,
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_StyledButton__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {
                          mt: 2,
                          minWidth: 175,
                          width: ['100%', 'auto'],
                          mx: [2, 0],
                          mr: [null, 3],
                          whiteSpace: "nowrap",
                          "data-cy": "edit-expense-btn",
                          onClick: () => this.setState({
                            step: STEPS.EXPENSE
                          }),
                          disabled: this.state.isSubmitting,
                          children: ["\u2190 ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                            id: "Expense.edit",
                            defaultMessage: [{
                              "type": 0,
                              "value": "Edit expense"
                            }]
                          })]
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {
                          buttonStyle: "primary",
                          mt: 2,
                          width: ['100%', 'auto'],
                          mx: [2, 0],
                          whiteSpace: "nowrap",
                          "data-cy": "submit-expense-btn",
                          onClick: this.onSummarySubmit,
                          loading: this.state.isSubmitting,
                          minWidth: 175,
                          children: this.state.expense?.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_10__/* ["default"].GRANT */ .Z.GRANT ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                            id: "ExpenseForm.SubmitRequest",
                            defaultMessage: [{
                              "type": 0,
                              "value": "Submit request"
                            }]
                          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                            id: "ExpenseForm.Submit",
                            defaultMessage: [{
                              "type": 0,
                              "value": "Submit expense"
                            }]
                          })
                        })]
                      })]
                    })]
                  })]
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_31__/* .Box */ .xu, {
                maxWidth: ['100%', 210, null, 275],
                mt: 70,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_expenses_ExpenseInfoSidebar__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                  isLoading: data.loading,
                  collective: collective,
                  host: host
                })
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_expenses_MobileCollectiveInfoStickyBar__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
            isLoading: data.loading,
            collective: collective,
            host: host
          })]
        })]
      })
    }));
  }

}

const hostFieldsFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`
  fragment CreateExpenseHostFields on Host {
    id
    name
    legalName
    slug
    type
    expensePolicy
    settings
    currency
    features {
      id
      MULTI_CURRENCY_EXPENSES
    }
    location {
      id
      address
      country
    }
    transferwise {
      id
      availableCurrencies
    }
    supportedPayoutMethods
    isTrustedHost
  }
`;
const createExpensePageQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`
  query CreateExpensePage($collectiveSlug: String!) {
    account(slug: $collectiveSlug, throwIfMissing: false) {
      id
      legacyId
      slug
      name
      type
      description
      settings
      twitterHandle
      imageUrl
      backgroundImageUrl
      currency
      isArchived
      isActive
      expensePolicy
      supportedExpenseTypes
      features {
        id
        ...NavbarFields
        MULTI_CURRENCY_EXPENSES
      }
      expensesTags {
        id
        tag
      }

      stats {
        id
        balanceWithBlockedFunds {
          valueInCents
          currency
        }
      }

      ... on AccountWithHost {
        isApproved
        host {
          id
          ...CreateExpenseHostFields
        }
      }

      # For Hosts with Budget capabilities

      ... on Organization {
        isHost
        isActive
        # NOTE: This will be the account itself in this case
        host {
          id
          ...CreateExpenseHostFields
        }
      }

      ... on AccountWithParent {
        parent {
          id
          slug
          expensePolicy
          imageUrl
          backgroundImageUrl
          twitterHandle
        }
      }
    }
    loggedInAccount {
      id
      ...LoggedInAccountExpensePayoutFields
    }
  }

  ${_components_expenses_graphql_fragments__WEBPACK_IMPORTED_MODULE_29__/* .loggedInAccountExpensePayoutFieldsFragment */ .sU}
  ${hostFieldsFragment}
  ${_components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_19__/* .collectiveNavbarFieldsFragment */ .AS}
`;
const addCreateExpensePageData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_5__.graphql)(createExpensePageQuery, {
  options: {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_14__/* .API_V2_CONTEXT */ .T,
    fetchPolicy: 'cache-and-network'
  }
});
const createExpenseMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`
  mutation CreateExpense(
    $expense: ExpenseCreateInput!
    $account: AccountReferenceInput!
    $recurring: RecurringExpenseInput
  ) {
    createExpense(expense: $expense, account: $account, recurring: $recurring) {
      id
      ...ExpensePageExpenseFields
    }
  }
  ${_components_expenses_graphql_fragments__WEBPACK_IMPORTED_MODULE_29__/* .expensePageExpenseFieldsFragment */ .Wg}
`;
const addCreateExpenseMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_5__.graphql)(createExpenseMutation, {
  name: 'createExpense',
  options: {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_14__/* .API_V2_CONTEXT */ .T
  }
});
const draftExpenseAndInviteUserMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`
  mutation DraftExpenseAndInviteUser($expense: ExpenseInviteDraftInput!, $account: AccountReferenceInput!) {
    draftExpenseAndInviteUser(expense: $expense, account: $account) {
      id
      ...ExpensePageExpenseFields
    }
  }
  ${_components_expenses_graphql_fragments__WEBPACK_IMPORTED_MODULE_29__/* .expensePageExpenseFieldsFragment */ .Wg}
`;
const addDraftExpenseAndInviteUserMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_5__.graphql)(draftExpenseAndInviteUserMutation, {
  name: 'draftExpenseAndInviteUser',
  options: {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_14__/* .API_V2_CONTEXT */ .T
  }
});

const addHoc = lodash_fp_compose__WEBPACK_IMPORTED_MODULE_2___default()(_components_UserProvider__WEBPACK_IMPORTED_MODULE_41__/* .withUser */ .ns, next_router__WEBPACK_IMPORTED_MODULE_6__.withRouter, addCreateExpensePageData, addCreateExpenseMutation, addDraftExpenseAndInviteUserMutation, _components_ToastProvider__WEBPACK_IMPORTED_MODULE_40__/* .withToasts */ .CP, react_intl__WEBPACK_IMPORTED_MODULE_7__.injectIntl);

CreateExpensePage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { collectiveSlug, parentCollectiveSlug } }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getPageMetaData",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "collective",
      "type": null
    }],
    "returns": null
  }, {
    "name": "buildFormPersister",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "handleResetForm",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "initFormPersister",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onFormSubmit",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "expense",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onSummarySubmit",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }, {
    "name": "onNotesChanges",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getSuggestedTags",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "collective",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "CreateExpensePage",
  "props": {
    "collectiveSlug": {
      "description": "from getInitialProps",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "parentCollectiveSlug": {
      "description": "from getInitialProps",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "LoggedInUser": {
      "description": "from withUser",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "loadingLoggedInUser": {
      "description": "from withUser",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "router": {
      "description": "from withRouter",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "intl": {
      "description": "from injectIntl",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "createExpense": {
      "description": "from apollo",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "draftExpenseAndInviteUser": {
      "description": "from apollo",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "addToast": {
      "description": "from withToast",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "data": {
      "description": "from apollo",
      "type": {
        "name": "shape",
        "value": {
          "loading": {
            "name": "bool",
            "required": false
          },
          "error": {
            "name": "any",
            "required": false
          },
          "refetch": {
            "name": "func",
            "required": false
          },
          "account": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": true
              },
              "parent": {
                "name": "object",
                "required": false
              },
              "name": {
                "name": "string",
                "required": true
              },
              "slug": {
                "name": "string",
                "required": true
              },
              "description": {
                "name": "string",
                "required": false
              },
              "type": {
                "name": "string",
                "required": true
              },
              "twitterHandle": {
                "name": "string",
                "required": false
              },
              "imageUrl": {
                "name": "string",
                "required": false
              },
              "isArchived": {
                "name": "bool",
                "required": false
              },
              "supportedExpenseTypes": {
                "name": "array",
                "required": false
              },
              "expensesTags": {
                "name": "arrayOf",
                "value": {
                  "name": "shape",
                  "value": {
                    "id": {
                      "name": "string",
                      "required": true
                    },
                    "tag": {
                      "name": "string",
                      "required": true
                    }
                  }
                },
                "required": false
              },
              "host": {
                "name": "shape",
                "value": {
                  "id": {
                    "name": "string",
                    "required": true
                  }
                },
                "required": false
              }
            },
            "required": false
          },
          "loggedInAccount": {
            "name": "shape",
            "value": {
              "adminMemberships": {
                "name": "shape",
                "value": {
                  "nodes": {
                    "name": "arrayOf",
                    "value": {
                      "name": "shape",
                      "value": {
                        "id": {
                          "name": "string",
                          "required": true
                        },
                        "account": {
                          "name": "shape",
                          "value": {
                            "id": {
                              "name": "string",
                              "required": true
                            },
                            "slug": {
                              "name": "string",
                              "required": true
                            },
                            "name": {
                              "name": "string",
                              "required": false
                            },
                            "imageUrl": {
                              "name": "string",
                              "required": false
                            }
                          },
                          "required": false
                        }
                      }
                    },
                    "required": false
                  }
                },
                "required": false
              }
            },
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addHoc(CreateExpensePage));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 72743:
/***/ ((module) => {

module.exports = require("@apollo/client/react/components");

/***/ }),

/***/ 95159:
/***/ ((module) => {

module.exports = require("@apollo/client/react/hoc");

/***/ }),

/***/ 42558:
/***/ ((module) => {

module.exports = require("@opencollective/taxes");

/***/ }),

/***/ 3115:
/***/ ((module) => {

module.exports = require("@sentry/browser");

/***/ }),

/***/ 33244:
/***/ ((module) => {

module.exports = require("@styled-icons/bootstrap/ShieldFillCheck");

/***/ }),

/***/ 7257:
/***/ ((module) => {

module.exports = require("@styled-icons/bootstrap/ShieldFillExclamation");

/***/ }),

/***/ 58847:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Check");

/***/ }),

/***/ 60080:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/CheckCircle");

/***/ }),

/***/ 18022:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/ChevronDown");

/***/ }),

/***/ 28054:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/ChevronRight");

/***/ }),

/***/ 52160:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/ChevronUp");

/***/ }),

/***/ 93842:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/DotsVerticalRounded");

/***/ }),

/***/ 95019:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Envelope");

/***/ }),

/***/ 51104:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Exit");

/***/ }),

/***/ 10054:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/InfoCircle");

/***/ }),

/***/ 99812:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/LoaderAlt");

/***/ }),

/***/ 24594:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/MinusCircle");

/***/ }),

/***/ 46529:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Planet");

/***/ }),

/***/ 23263:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Plus");

/***/ }),

/***/ 43891:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Receipt");

/***/ }),

/***/ 60476:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Support");

/***/ }),

/***/ 99232:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Undo");

/***/ }),

/***/ 60270:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Alipay");

/***/ }),

/***/ 45933:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Github");

/***/ }),

/***/ 3592:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Mastodon");

/***/ }),

/***/ 54427:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Paypal");

/***/ }),

/***/ 64374:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Slack");

/***/ }),

/***/ 14638:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Twitter");

/***/ }),

/***/ 81594:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Ban");

/***/ }),

/***/ 19153:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Bars");

/***/ }),

/***/ 41032:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CaretDown");

/***/ }),

/***/ 2331:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CaretUp");

/***/ }),

/***/ 9443:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Check");

/***/ }),

/***/ 62876:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CheckCircle");

/***/ }),

/***/ 55457:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CreditCard");

/***/ }),

/***/ 63387:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/ExchangeAlt");

/***/ }),

/***/ 83514:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/ExclamationCircle");

/***/ }),

/***/ 25730:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/ExclamationTriangle");

/***/ }),

/***/ 86954:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/InfoCircle");

/***/ }),

/***/ 87584:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/MoneyCheckAlt");

/***/ }),

/***/ 77192:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Plus");

/***/ }),

/***/ 26201:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Redo");

/***/ }),

/***/ 97881:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Times");

/***/ }),

/***/ 81551:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Undo");

/***/ }),

/***/ 8866:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/University");

/***/ }),

/***/ 56758:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/AlertTriangle");

/***/ }),

/***/ 62941:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ArrowLeft");

/***/ }),

/***/ 22198:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ArrowRight");

/***/ }),

/***/ 61975:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Calendar");

/***/ }),

/***/ 55904:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Check");

/***/ }),

/***/ 89711:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronDown");

/***/ }),

/***/ 87208:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronDown/ChevronDown");

/***/ }),

/***/ 76841:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronUp");

/***/ }),

/***/ 29872:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronUp/ChevronUp");

/***/ }),

/***/ 57847:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Download");

/***/ }),

/***/ 91090:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Edit");

/***/ }),

/***/ 40710:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/FileText");

/***/ }),

/***/ 42948:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Flag");

/***/ }),

/***/ 57153:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Info");

/***/ }),

/***/ 5889:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Link");

/***/ }),

/***/ 67520:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Maximize2");

/***/ }),

/***/ 75827:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/MessageSquare");

/***/ }),

/***/ 62556:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/PlusCircle");

/***/ }),

/***/ 52021:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Settings");

/***/ }),

/***/ 72142:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Trash2");

/***/ }),

/***/ 73949:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/Blog");

/***/ }),

/***/ 21522:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/PriceTags");

/***/ }),

/***/ 4965:
/***/ ((module) => {

module.exports = require("@styled-icons/ionicons-solid/Expand");

/***/ }),

/***/ 80950:
/***/ ((module) => {

module.exports = require("@styled-icons/material/AttachMoney");

/***/ }),

/***/ 20384:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Close");

/***/ }),

/***/ 6534:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Lock");

/***/ }),

/***/ 34427:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Mail");

/***/ }),

/***/ 33651:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Settings");

/***/ }),

/***/ 95830:
/***/ ((module) => {

module.exports = require("@styled-icons/material/ShowChart");

/***/ }),

/***/ 80924:
/***/ ((module) => {

module.exports = require("@styled-icons/octicons/Mail");

/***/ }),

/***/ 83002:
/***/ ((module) => {

module.exports = require("@styled-icons/remix-line/Question");

/***/ }),

/***/ 38164:
/***/ ((module) => {

module.exports = require("@styled-icons/remix-line/Stack");

/***/ }),

/***/ 42038:
/***/ ((module) => {

module.exports = require("@styled-system/css");

/***/ }),

/***/ 45284:
/***/ ((module) => {

module.exports = require("@styled-system/prop-types");

/***/ }),

/***/ 19099:
/***/ ((module) => {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ 68887:
/***/ ((module) => {

module.exports = require("copy-to-clipboard");

/***/ }),

/***/ 28992:
/***/ ((module) => {

module.exports = require("country-currency-emoji-flags");

/***/ }),

/***/ 69031:
/***/ ((module) => {

module.exports = require("cross-fetch");

/***/ }),

/***/ 71934:
/***/ ((module) => {

module.exports = require("currency-symbol-map");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 53291:
/***/ ((module) => {

module.exports = require("dayjs/plugin/timezone");

/***/ }),

/***/ 36619:
/***/ ((module) => {

module.exports = require("dayjs/plugin/utc");

/***/ }),

/***/ 28109:
/***/ ((module) => {

module.exports = require("file-saver");

/***/ }),

/***/ 92869:
/***/ ((module) => {

module.exports = require("focus-trap-react");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 99344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 70154:
/***/ ((module) => {

module.exports = require("load-script");

/***/ }),

/***/ 99226:
/***/ ((module) => {

module.exports = require("lodash/assign");

/***/ }),

/***/ 12154:
/***/ ((module) => {

module.exports = require("lodash/clamp");

/***/ }),

/***/ 59591:
/***/ ((module) => {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ 39131:
/***/ ((module) => {

module.exports = require("lodash/compact");

/***/ }),

/***/ 93908:
/***/ ((module) => {

module.exports = require("lodash/debounce");

/***/ }),

/***/ 90857:
/***/ ((module) => {

module.exports = require("lodash/endsWith");

/***/ }),

/***/ 92349:
/***/ ((module) => {

module.exports = require("lodash/escape");

/***/ }),

/***/ 76918:
/***/ ((module) => {

module.exports = require("lodash/find");

/***/ }),

/***/ 25359:
/***/ ((module) => {

module.exports = require("lodash/findLastIndex");

/***/ }),

/***/ 22265:
/***/ ((module) => {

module.exports = require("lodash/first");

/***/ }),

/***/ 58579:
/***/ ((module) => {

module.exports = require("lodash/flatten");

/***/ }),

/***/ 43302:
/***/ ((module) => {

module.exports = require("lodash/fp/compose");

/***/ }),

/***/ 1712:
/***/ ((module) => {

module.exports = require("lodash/get");

/***/ }),

/***/ 98492:
/***/ ((module) => {

module.exports = require("lodash/groupBy");

/***/ }),

/***/ 98210:
/***/ ((module) => {

module.exports = require("lodash/has");

/***/ }),

/***/ 41238:
/***/ ((module) => {

module.exports = require("lodash/includes");

/***/ }),

/***/ 53493:
/***/ ((module) => {

module.exports = require("lodash/intersection");

/***/ }),

/***/ 52626:
/***/ ((module) => {

module.exports = require("lodash/invert");

/***/ }),

/***/ 89699:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 40113:
/***/ ((module) => {

module.exports = require("lodash/isEqual");

/***/ }),

/***/ 77876:
/***/ ((module) => {

module.exports = require("lodash/isError");

/***/ }),

/***/ 86069:
/***/ ((module) => {

module.exports = require("lodash/isNil");

/***/ }),

/***/ 48524:
/***/ ((module) => {

module.exports = require("lodash/isNull");

/***/ }),

/***/ 75795:
/***/ ((module) => {

module.exports = require("lodash/isObject");

/***/ }),

/***/ 22133:
/***/ ((module) => {

module.exports = require("lodash/isUndefined");

/***/ }),

/***/ 51546:
/***/ ((module) => {

module.exports = require("lodash/kebabCase");

/***/ }),

/***/ 83824:
/***/ ((module) => {

module.exports = require("lodash/last");

/***/ }),

/***/ 53707:
/***/ ((module) => {

module.exports = require("lodash/map");

/***/ }),

/***/ 36625:
/***/ ((module) => {

module.exports = require("lodash/max");

/***/ }),

/***/ 61831:
/***/ ((module) => {

module.exports = require("lodash/merge");

/***/ }),

/***/ 63901:
/***/ ((module) => {

module.exports = require("lodash/omit");

/***/ }),

/***/ 66011:
/***/ ((module) => {

module.exports = require("lodash/omitBy");

/***/ }),

/***/ 49949:
/***/ ((module) => {

module.exports = require("lodash/orderBy");

/***/ }),

/***/ 96839:
/***/ ((module) => {

module.exports = require("lodash/padStart");

/***/ }),

/***/ 32027:
/***/ ((module) => {

module.exports = require("lodash/partition");

/***/ }),

/***/ 84159:
/***/ ((module) => {

module.exports = require("lodash/pick");

/***/ }),

/***/ 20808:
/***/ ((module) => {

module.exports = require("lodash/pickBy");

/***/ }),

/***/ 47869:
/***/ ((module) => {

module.exports = require("lodash/round");

/***/ }),

/***/ 24298:
/***/ ((module) => {

module.exports = require("lodash/set");

/***/ }),

/***/ 71156:
/***/ ((module) => {

module.exports = require("lodash/size");

/***/ }),

/***/ 23672:
/***/ ((module) => {

module.exports = require("lodash/sortBy");

/***/ }),

/***/ 35007:
/***/ ((module) => {

module.exports = require("lodash/startCase");

/***/ }),

/***/ 79800:
/***/ ((module) => {

module.exports = require("lodash/sumBy");

/***/ }),

/***/ 1381:
/***/ ((module) => {

module.exports = require("lodash/throttle");

/***/ }),

/***/ 75142:
/***/ ((module) => {

module.exports = require("lodash/trim");

/***/ }),

/***/ 51858:
/***/ ((module) => {

module.exports = require("lodash/truncate");

/***/ }),

/***/ 98013:
/***/ ((module) => {

module.exports = require("lodash/unescape");

/***/ }),

/***/ 18459:
/***/ ((module) => {

module.exports = require("lodash/uniq");

/***/ }),

/***/ 69309:
/***/ ((module) => {

module.exports = require("lodash/uniqBy");

/***/ }),

/***/ 73022:
/***/ ((module) => {

module.exports = require("lodash/upperCase");

/***/ }),

/***/ 57260:
/***/ ((module) => {

module.exports = require("lodash/values");

/***/ }),

/***/ 22217:
/***/ ((module) => {

module.exports = require("lodash/without");

/***/ }),

/***/ 86646:
/***/ ((module) => {

module.exports = require("lodash/zipObject");

/***/ }),

/***/ 17809:
/***/ ((module) => {

module.exports = require("memoize-one");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 94957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 42042:
/***/ ((module) => {

module.exports = require("polished");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 56358:
/***/ ((module) => {

module.exports = require("react-dropzone");

/***/ }),

/***/ 13126:
/***/ ((module) => {

module.exports = require("react-intl");

/***/ }),

/***/ 42932:
/***/ ((module) => {

module.exports = require("react-popper");

/***/ }),

/***/ 35073:
/***/ ((module) => {

module.exports = require("react-scrollchor");

/***/ }),

/***/ 61929:
/***/ ((module) => {

module.exports = require("react-select");

/***/ }),

/***/ 37597:
/***/ ((module) => {

module.exports = require("react-text-mask");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86109:
/***/ ((module) => {

module.exports = require("sanitize-html");

/***/ }),

/***/ 73673:
/***/ ((module) => {

module.exports = require("slugify");

/***/ }),

/***/ 57518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 95834:
/***/ ((module) => {

module.exports = require("styled-system");

/***/ }),

/***/ 71564:
/***/ ((module) => {

module.exports = require("validator");

/***/ }),

/***/ 2707:
/***/ ((module) => {

module.exports = import("@shopify/address");;

/***/ }),

/***/ 46555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,9156,7262,1433,1808,1012,2631,7619,7632,2143,986,242,3129,8185,5993,7965,9468,8720,7772,8208,283], () => (__webpack_exec__(6525)));
module.exports = __webpack_exports__;

})();