"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9139],{

/***/ 59139:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RichTextEditor; }
/* harmony export */ });
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
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67294);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(37947);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(52015);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(57632);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(48966);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65985);
/* harmony import */ var _lib_styled_components_shared_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72004);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97079);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(69078);
/* harmony import */ var _HTMLContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(74770);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29242);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(86702);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(36422);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(85893);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
















var TrixEditorContainer = styled_components__WEBPACK_IMPORTED_MODULE_18__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "RichTextEditor__TrixEditorContainer",
  componentId: "sc-2bze4a-0"
})(["", " trix-editor{border:none;padding:0;margin-top:8px;padding-top:8px;outline-offset:0.5em;", " &::-webkit-scrollbar{width:8px;}", " ", " &:empty:not(:focus)::before{color:", ";}figcaption{display:none;}", "}trix-toolbar{min-height:40px;background:", ";", " z-index:2;margin-bottom:8px;", " .trix-button-group{border-radius:6px;border-color:#c4c7cc;margin-bottom:0;background:white;}.trix-button{border-bottom:none;display:inline-block;height:auto;&:hover{background:", ";}&.trix-active{background:", ";}&::before,&.trix-active::before{margin:4px;}}", " @media (max-width:500px){.trix-button--icon-strike,.trix-button--icon-number-list,.trix-button--icon-decrease-nesting-level,.trix-button--icon-increase-nesting-level{display:none;}}", " .trix-button--icon-attach::before{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'/%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'/%3E%3Cpolyline points='21 15 16 10 5 21'/%3E%3C/svg%3E\");}.trix-button--video-attach::before{top:8%;bottom:4%;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-video'%3E%3Cpolygon points='23 7 16 12 23 17 23 7'%3E%3C/polygon%3E%3Crect x='1' y='5' width='15' height='14' rx='2' ry='2'%3E%3C/rect%3E%3C/svg%3E\");}}", ""], function (props) {
  return props.withBorders && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_19__/* .css */ .iv)({
    border: '1px solid',
    borderColor: !props.error ? 'black.300' : 'red.300',
    borderRadius: 10,
    padding: 3
  });
}, _lib_styled_components_shared_styles__WEBPACK_IMPORTED_MODULE_10__/* .CustomScrollbarCSS */ .T, function (props) {
  return Boolean(props.editorMaxHeight) && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_19__/* .css */ .iv)({
    overflowY: 'scroll'
  });
}, function (props) {
  return !props.withBorders && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_19__/* .css */ .iv)({
    outline: !props.error ? 'none' : "1px dashed ".concat(props.theme.colors.red[300]),
    '&:focus': {
      outline: "1px dashed ".concat(props.theme.colors.black[200])
    }
  });
}, function (props) {
  return props.theme.colors.black[400];
}, function (props) {
  return (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_19__/* .css */ .iv)({
    minHeight: props.editorMinHeight,
    maxHeight: props.editorMaxHeight
  });
}, function (props) {
  return props.toolbarBackgroundColor;
}, function (props) {
  return !props.withBorders && "box-shadow: 0px 5px 3px -3px rgba(0, 0, 0, 0.1);";
}, function (props) {
  return props.withBorders && "min-height: 0px; margin-bottom: 0;";
}, function (props) {
  return props.theme.colors.blue[100];
}, function (props) {
  return props.theme.colors.blue[200];
}, function (props) {
  return props.version === 'simplified' && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_19__/* .css */ .iv)({
    '.trix-button-group--file-tools': {
      display: 'none'
    },
    '.trix-button-group--block-tools .trix-button:not(.trix-button--icon-number-list):not(.trix-button--icon-bullet-list)': {
      display: 'none'
    },
    '.trix-button--icon-bullet-list': {
      borderLeft: 'none'
    }
  });
}, function (props) {
  return props.withStickyToolbar && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_19__/* .css */ .iv)({
    position: 'sticky',
    top: props.toolbarTop || 0,
    marginTop: props.toolbarOffsetY,
    p: '10px'
  });
}, function (props) {
  return props.isDisabled && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_19__/* .css */ .iv)({
    pointerEvents: 'none',
    cursor: 'not-allowed',
    background: '#f3f3f3',
    'trix-toolbar,.trix-button-group': {
      background: '#f3f3f3 !important'
    }
  });
});
var SUPPORTED_SERVICE_URLS = {
  youTube: 'https://www.youtube-nocookie.com/embed/',
  anchorFm: 'https://anchor.fm/'
};
/**
 * A React wrapper around the Trix library to edit rich text.
 * Produces HTML and clear text.
 */

var RichTextEditor = /*#__PURE__*/function (_React$Component) {
  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3___default()(RichTextEditor, _React$Component);

  var _super = _createSuper(RichTextEditor);

  function RichTextEditor(props) {
    var _this;

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, RichTextEditor);

    _this = _super.call(this, props);

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "initialize", function () {
      if (_this.Trix && _this.editorRef.current) {
        // Listen for changes
        _this.editorRef.current.addEventListener('trix-change', _this.handleChange, false);

        _this.editorRef.current.addEventListener('trix-attachment-add', _this.handleUpload);

        _this.editorRef.current.addEventListener('trix-file-accept', _this.handleFileAccept);

        _this.editorRef.current.addEventListener('trix-action-invoke', _this.trixActionInvoke);

        _this.editorRef.current.addEventListener('trix-initialize', function (event) {
          if (_this.props.videoEmbedEnabled) {
            _this.replaceEmbeddedIFrames(_this.props.value || _this.props.defaultValue);

            _this.trixEmbed(event);
          } // Some special handling for links


          if (_this.mainContainerRef.current) {
            // We must listen when the user presses the 'Enter' key and when the user clicks the 'Link' button as well
            var linkInput = _this.mainContainerRef.current.querySelector("[data-trix-input][name='href']");

            linkInput === null || linkInput === void 0 ? void 0 : linkInput.addEventListener('keydown', function (e) {
              if (e.key === 'Enter') {
                _this.handleLink();
              }
            });

            var addLinkBtn = _this.mainContainerRef.current.querySelector("[data-trix-method='setAttribute']");

            addLinkBtn === null || addLinkBtn === void 0 ? void 0 : addLinkBtn.addEventListener('click', _this.handleLink);
          }
        }); // Component ready!


        _this.isReady = true;
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "replaceEmbeddedIFrames", function (value) {
      var iframeRegex = new RegExp("<iframe.+?iframe>", 'ig');
      var match;
      var lastIndex = 0;

      while (match = iframeRegex.exec(value)) {
        if (lastIndex === 0) {
          _this.getEditor().loadHTML('');
        }

        var iframe = match[0];
        var position = match.index;
        var preText = value.substring(lastIndex, position);

        _this.getEditor().setSelectedRange([lastIndex, position]);

        _this.getEditor().insertHTML(preText);

        var attachment = new _this.Trix.Attachment({
          content: iframe
        });

        _this.getEditor().insertAttachment(attachment);

        lastIndex = match.index + iframe.length;
        var postText = value.substring(lastIndex, value.length);

        _this.getEditor().insertHTML(postText);
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "trixEmbed", function (e) {
      var videoEmbedButton = "<button type=\"button\" tabindex=\"-1\" data-trix-action=\"x-video-dialog-open\" title=\"Attach Video\" class=\"trix-button trix-button--icon trix-button--video-attach\">Attach Video</button>";
      var videoEmbedDialog = "\n            <div class=\"trix-dialog\" data-trix-dialog=\"video-url\" data-trix-dialog-attribute=\"video\">\n              <div class=\"trix-dialog__link-fields\">\n                <input type=\"url\" name=\"video-url\" class=\"trix-input trix-input--dialog trix-input--dialog-embed\" placeholder=\"Enter Video URL\u2026\" aria-label=\"Video URL\" data-trix-input=\"\">\n                <div class=\"trix-button-group\">\n                  <input type=\"button\" class=\"trix-button trix-button--dialog\" value=\"Add Video\" data-trix-action=\"x-add-embed\">\n                </div>\n              </div>\n              <strong>Note: Only YouTube and Anchor.fm links are supported.</strong>\n            </div>";
      var toolbarElement = e.target.toolbarElement;
      var attachFilesButton = toolbarElement.querySelector('[data-trix-action=attachFiles]');
      attachFilesButton.insertAdjacentHTML('afterend', videoEmbedButton);
      var trixDialog = toolbarElement.querySelector('.trix-dialog--link');
      trixDialog.insertAdjacentHTML('afterend', videoEmbedDialog);
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "trixActionInvoke", function (e) {
      var toolbarElement = e.target.toolbarElement;

      if (e.actionName === 'x-video-dialog-open') {
        var attachVideoDialog = toolbarElement.querySelector('[data-trix-dialog=video-url]');
        var attachVideoDialogInput = toolbarElement.querySelector('.trix-input--dialog-embed');

        if (attachVideoDialog.getAttribute('data-trix-active') === '') {
          attachVideoDialog.removeAttribute('data-trix-active');
        } else {
          attachVideoDialog.setAttribute('data-trix-active', '');
          attachVideoDialogInput.removeAttribute('disabled');
        }
      } else if (e.actionName === 'x-add-embed') {
        var _toolbarElement$query;

        var embedLink = (_toolbarElement$query = toolbarElement.querySelector('.trix-input--dialog-embed').value) === null || _toolbarElement$query === void 0 ? void 0 : _toolbarElement$query.trim();

        if (embedLink) {
          _this.embedIframe(embedLink);
        }
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "constructVideoEmbedURL", function (service, id) {
      if (service === 'youtube') {
        return "".concat(SUPPORTED_SERVICE_URLS.youTube).concat(id);
      }
      /* else if (service === 'vimeo') {
      return `https://player.vimeo.com/video/${id}`;
      } */
      else if (service === 'anchorFm') {
        return "".concat(SUPPORTED_SERVICE_URLS.anchorFm).concat(id);
      } else {
        return null;
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "parseServiceLink", function (videoLink) {
      var regexps = {
        youtube: new RegExp('(?:https?://)?(?:www\\.)?youtu(?:\\.be/|be\\.com/\\S*(?:watch|embed)(?:(?:(?=/[^&\\s?]+(?!\\S))/)|(?:\\S*v=|v/)))([^&\\s?]+)', 'i'),
        vimeo: new RegExp('(http|https)?://(www\\.)?vimeo\\.com/(?:channels/(?:\\w+/)?|groups/([^/]*)/videos/|)(\\d+)(?:|/?)'),
        anchorFm: /^(http|https)?:\/\/(www\.)?anchor\.fm\/([^/]+)(\/embed)?(\/episodes\/)?([^/]+)?\/?$/
      };

      for (var service in regexps) {
        var matches = regexps[service].exec(videoLink);

        if (matches) {
          if (service === 'anchorFm') {
            var podcastName = matches[3];
            var episodeId = matches[6];
            var podcastUrl = "".concat(podcastName, "/embed");
            return {
              service: service,
              id: episodeId ? "".concat(podcastUrl, "/episodes/").concat(episodeId) : podcastUrl
            };
          } else {
            return {
              service: service,
              id: matches[matches.length - 1]
            };
          }
        }
      }

      return {};
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "embedIframe", function (videoLink) {
      var _this$parseServiceLin = _this.parseServiceLink(videoLink),
          id = _this$parseServiceLin.id,
          service = _this$parseServiceLin.service;

      var embedLink = _this.constructVideoEmbedURL(service, id);

      if (embedLink) {
        var sanitizedLink = embedLink.replace(/["\\]/g, ''); // Small security enhancement, prevents going out of `src`

        var videoServices = ['youtube', 'vimeo'];
        var attachmentData;

        if (videoServices.includes(service)) {
          attachmentData = {
            contentType: '--embed-iframe-video',
            content: "<iframe src=\"".concat(sanitizedLink, "/?showinfo=0\" width=\"100%\" height=\"394\" frameborder=\"0\" allowfullscreen/>")
          };
        } else {
          attachmentData = {
            contentType: "--embed-iframe-".concat(service),
            content: "<iframe src=\"".concat(sanitizedLink, "\" width=\"100%\" frameborder=\"0\"/>")
          };
        }

        _this.getEditor().insertAttachment(new _this.Trix.Attachment(attachmentData));
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleChange", function (e) {
      // Trigger content formatters
      _this.autolink(); // Notify parent function


      if (_this.props.onChange) {
        _this.props.onChange(e);
      } // Reset errors


      if (_this.state.error) {
        _this.setState({
          error: null
        });
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleFileAccept", function (e) {
      if (!/^image\//.test(e.file.type)) {
        alert('You can only upload images.');
        e.preventDefault();
      } else if (e.file.size > 4000000) {
        // Prevent attaching files > 4MB
        alert('This file is too big (max: 4mb).');
        e.preventDefault();
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleUpload", function (e) {
      var _this$props$setUpload, _this$props;

      var attachment = e.attachment;

      var attachmentContent = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(attachment, 'attachment.attributes.values.content');

      var isVideoAttachment = (attachmentContent === null || attachmentContent === void 0 ? void 0 : attachmentContent.includes("<iframe src=\"".concat(SUPPORTED_SERVICE_URLS.youTube))) || (attachmentContent === null || attachmentContent === void 0 ? void 0 : attachmentContent.includes("<iframe src=\"".concat(SUPPORTED_SERVICE_URLS.anchorFm)));

      if (isVideoAttachment) {
        return;
      } else if (!attachment.file) {
        attachment.remove(); // Remove unknown stuff, for example when copy-pasting HTML

        return;
      }

      (_this$props$setUpload = (_this$props = _this.props).setUploading) === null || _this$props$setUpload === void 0 ? void 0 : _this$props$setUpload.call(_this$props, true);

      var onProgress = function onProgress(progress) {
        return attachment.setUploadProgress(progress);
      };

      var onSuccess = function onSuccess(fileURL) {
        var _this$props$setUpload2, _this$props2;

        (_this$props$setUpload2 = (_this$props2 = _this.props).setUploading) === null || _this$props$setUpload2 === void 0 ? void 0 : _this$props$setUpload2.call(_this$props2, false);
        attachment.setAttributes({
          url: fileURL,
          href: fileURL
        });
      };

      var onFailure = function onFailure() {
        var _this$props$setUpload3, _this$props3;

        (_this$props$setUpload3 = (_this$props3 = _this.props).setUploading) === null || _this$props$setUpload3 === void 0 ? void 0 : _this$props$setUpload3.call(_this$props3, false);

        _this.setState({
          error: 'File upload failed'
        });

        attachment.remove();
      };

      (0,_lib_api__WEBPACK_IMPORTED_MODULE_9__/* .uploadImageWithXHR */ .Z4)(attachment.file, _this.props.kind, {
        onProgress: onProgress,
        onSuccess: onSuccess,
        onFailure: onFailure
      });
      return e;
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleLink", function () {
      var _this$mainContainerRe, _urlInput$value;

      var urlInput = (_this$mainContainerRe = _this.mainContainerRef.current) === null || _this$mainContainerRe === void 0 ? void 0 : _this$mainContainerRe.querySelector("[data-trix-input][name='href']");
      var urlInputValue = urlInput === null || urlInput === void 0 ? void 0 : (_urlInput$value = urlInput.value) === null || _urlInput$value === void 0 ? void 0 : _urlInput$value.trim(); // Ignore missing input or empty values

      if (!urlInputValue) {
        return;
      } // Automatically add 'https://' to the url
      // eslint-disable-next-line camelcase


      if ((0,validator__WEBPACK_IMPORTED_MODULE_20__.isURL)(urlInputValue, {
        require_protocol: false
      }) && !(0,validator__WEBPACK_IMPORTED_MODULE_20__.isURL)(urlInputValue, {
        require_protocol: true
      })) {
        urlInput.value = "https://".concat(urlInputValue);
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "autolinkDelimiter", function (url) {
      var lastCharacterPosition = url.length;

      while (lastCharacterPosition > 0) {
        var lastCharacterIndex = lastCharacterPosition - 1;
        var closingPair = url[lastCharacterIndex];
        var openingPair = void 0;

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
          var opening = 0,
              closing = 0;
          /** Check to ensure that when a URL is enclosed within pair punctuations,
           * we do not include the closing punctuation as part of the link.
           * We only want to accept a closing punctuation at the end of the link,
           * if there is a corresponding opening punctuation within the URL.
           */

          for (var i = 0; i < lastCharacterPosition; i++) {
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

    _this.editorRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createRef();
    _this.mainContainerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createRef();
    _this.state = {
      id: props.id,
      error: null
    };
    _this.isReady = false;

    if (true) {
      _this.Trix = __webpack_require__(36250);
      _this.Trix.config.blockAttributes.heading1 = {
        tagName: 'h3'
      };
      _this.Trix.config.attachments.preview.caption = {
        name: false,
        size: false
      };
    }

    return _this;
  }

  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(RichTextEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.state.id) {
        this.setState({
          id: (0,uuid__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)()
        });
      } else if (!this.isReady) {
        this.initialize();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      if (!this.isReady) {
        this.initialize();
      } else if (oldProps.reset !== this.props.reset) {
        this.editorRef.current.editor.loadHTML('');
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.isReady) {
        this.editorRef.current.removeEventListener('trix-change', this.handleChange);
        this.editorRef.current.removeEventListener('trix-attachment-add', this.handleUpload);
        this.editorRef.current.removeEventListener('trix-attachment-add', this.handleFileAccept);
        this.editorRef.current.removeEventListener('trix-action-invoke', this.trixActionInvoke);
      }
    }
  }, {
    key: "getEditor",
    value: function getEditor() {
      return this.editorRef.current.editor;
    }
  }, {
    key: "autolink",
    value:
    /** Automatically create anchors with hrefs for links */
    function autolink() {
      var _this2 = this;

      var linkRegex = new RegExp("(https?://\\S+\\.\\S+)\\s", 'ig');
      var editor = this.getEditor();
      var content = editor.getDocument().toString();
      var match;

      while (match = linkRegex.exec(content)) {
        var url = match[1];

        if ((0,validator__WEBPACK_IMPORTED_MODULE_20__.isURL)(url)) {
          (function () {
            var position = match.index;

            var urlLength = _this2.autolinkDelimiter(url);

            var range = [position, position + urlLength];
            var hrefAtRange = editor.getDocument().getCommonAttributesAtRange(range).href;
            var newURL = url.slice(0, urlLength);

            if (hrefAtRange !== newURL) {
              _this2.updateInRange(editor, range, 0, function () {
                if (editor.canActivateAttribute('href')) {
                  editor.activateAttribute('href', newURL);
                }
              });
            }
          })();
        }
      }
    }
    /** A helper used by autolink to find where the url actually ends
     * Credits:
     * https://github.com/github/cmark-gfm/blob/36c1553d2a1f04dc1628e76b18490edeff78b8d0/extensions/autolink.c#L37
     * https://github.com/vmg/redcarpet/blob/92a7b3ae2241b862e9bf45e0af3cf53ebdfb0afb/ext/redcarpet/autolink.c#L58
     */

  }, {
    key: "updateInRange",
    value:
    /** A trix helper that will apply func in range then restore base range when it's done */
    function updateInRange(editor, range) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var updateFunc = arguments.length > 3 ? arguments[3] : undefined;
      var baseRange = editor.getSelectedRange();
      editor.setSelectedRange(range);
      updateFunc();
      editor.setSelectedRange([baseRange[0] + offset, baseRange[1] + offset]);
    }
    /** ---- Render ---- */

  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          defaultValue = _this$props4.defaultValue,
          withStickyToolbar = _this$props4.withStickyToolbar,
          toolbarTop = _this$props4.toolbarTop,
          toolbarOffsetY = _this$props4.toolbarOffsetY,
          toolbarBackgroundColor = _this$props4.toolbarBackgroundColor,
          autoFocus = _this$props4.autoFocus,
          placeholder = _this$props4.placeholder,
          editorMinHeight = _this$props4.editorMinHeight,
          withBorders = _this$props4.withBorders,
          inputName = _this$props4.inputName,
          disabled = _this$props4.disabled,
          error = _this$props4.error,
          fontSize = _this$props4.fontSize,
          value = _this$props4.value,
          version = _this$props4.version,
          showCount = _this$props4.showCount,
          maxLength = _this$props4.maxLength,
          editorMaxHeight = _this$props4.editorMaxHeight;
      return !this.state.id ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        maxHeight: editorMaxHeight ? editorMaxHeight + 56 : undefined,
        height: editorMinHeight ? editorMinHeight + 56 : 200
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(TrixEditorContainer, {
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
        children: [this.state.error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_MessageBox__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          type: "error",
          mb: "36px",
          withIcon: true,
          children: this.state.error.toString()
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("input", {
          id: this.state.id,
          value: value || defaultValue,
          type: "hidden",
          name: inputName
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_HTMLContent__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          fontSize: fontSize,
          children: !showCount ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("trix-editor", {
            ref: this.editorRef,
            input: this.state.id,
            autofocus: autoFocus ? true : undefined,
            placeholder: placeholder
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            position: "relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("trix-editor", {
              ref: this.editorRef,
              input: this.state.id,
              autofocus: autoFocus ? true : undefined,
              placeholder: placeholder
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
              position: "absolute",
              bottom: "1em",
              right: "1em",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_StyledTag__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                textTransform: "uppercase",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                  children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_11__/* .stripHTML */ .Cb)(value || defaultValue).length
                }), maxLength && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                  children: [" / ", maxLength]
                })]
              })
            })]
          })
        })]
      });
    }
  }]);

  return RichTextEditor;
}(react__WEBPACK_IMPORTED_MODULE_8__.Component);

_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(RichTextEditor, "defaultProps", {
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

/***/ })

}]);
//# sourceMappingURL=9139-88e128ea56b0072d.js.map