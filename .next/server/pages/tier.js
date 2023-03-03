"use strict";
(() => {
var exports = {};
exports.id = 3446;
exports.ids = [3446,9139,6465];
exports.modules = {

/***/ 42388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92129);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);



/**
 * `Contributor` type is meant to surface all types of contributors, even the one that
 * may not be registered yet on Open Collective -- for example, Github contributors.
 * The component will automatically fallback on displaying a `span` if the contributor
 * cannot be linked to on Open Collective.
 *
 * In the future it may also link to external profiles like Github.
 */



const LinkContributor = ({
  contributor,
  children
}) => {
  if (contributor.isGuest) {
    return children || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "profile.guest",
      defaultMessage: [{
        "type": 0,
        "value": "Guest"
      }]
    });
  } else if (contributor.isIncognito) {
    return children || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "profile.incognito",
      defaultMessage: [{
        "type": 0,
        "value": "Incognito"
      }]
    });
  } else if (contributor.collectiveSlug) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      href: `/${contributor.collectiveSlug}`,
      children: children || contributor.name
    });
  } else {
    return children || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
      children: contributor.name
    });
  }
};

LinkContributor.__docgenInfo = {
  "description": "`Contributor` type is meant to surface all types of contributors, even the one that\nmay not be registered yet on Open Collective -- for example, Github contributors.\nThe component will automatically fallback on displaying a `span` if the contributor\ncannot be linked to on Open Collective.\n\nIn the future it may also link to external profiles like Github.",
  "methods": [],
  "displayName": "LinkContributor",
  "props": {
    "contributor": {
      "description": "The contributor to link to",
      "type": {
        "name": "shape",
        "value": {
          "collectiveSlug": {
            "name": "string",
            "required": false
          },
          "name": {
            "name": "string",
            "required": false
          },
          "isIncognito": {
            "name": "bool",
            "required": false
          },
          "isGuest": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": true
    },
    "children": {
      "description": "By default we show the name in the link. Use this prop to override this",
      "type": {
        "name": "node"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkContributor);

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

/***/ 6121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12154);
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_clamp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const BackgroundBar = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "StyledProgressBar__BackgroundBar",
  componentId: "sc-cpgzll-0"
})(["position:relative;", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_3__.layout, styled_system__WEBPACK_IMPORTED_MODULE_3__.color, styled_system__WEBPACK_IMPORTED_MODULE_3__.border);
const ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "StyledProgressBar__ProgressBar",
  componentId: "sc-cpgzll-1"
})(["position:absolute;", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_3__.layout, styled_system__WEBPACK_IMPORTED_MODULE_3__.color, styled_system__WEBPACK_IMPORTED_MODULE_3__.border);
/**
 * A progress bar that displays the current advancement.
 */

const StyledProgressBar = ({
  percentage,
  color,
  backgroundColor,
  height,
  borderRadius
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(BackgroundBar, {
    bg: backgroundColor,
    height: height,
    borderRadius: borderRadius,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(ProgressBar, {
      width: `${lodash_clamp__WEBPACK_IMPORTED_MODULE_0___default()(percentage, 0, 1) * 100}%`,
      bg: color,
      height: height,
      borderRadius: borderRadius
    })
  });
};

StyledProgressBar.defaultProps = {
  height: 4,
  backgroundColor: 'rgba(9, 10, 10, 0.04)',
  color: 'green.500',
  borderRadius: 16
};
StyledProgressBar.__docgenInfo = {
  "description": "A progress bar that displays the current advancement.",
  "methods": [],
  "displayName": "StyledProgressBar",
  "props": {
    "height": {
      "defaultValue": {
        "value": "4",
        "computed": false
      },
      "description": "Height",
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }]
      },
      "required": false
    },
    "backgroundColor": {
      "defaultValue": {
        "value": "'rgba(9, 10, 10, 0.04)'",
        "computed": false
      },
      "description": "Color of the unfilled bar",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "color": {
      "defaultValue": {
        "value": "'green.500'",
        "computed": false
      },
      "description": "Color of the filled bar",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "borderRadius": {
      "defaultValue": {
        "value": "16",
        "computed": false
      },
      "description": "Border-radius",
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }]
      },
      "required": false
    },
    "percentage": {
      "description": "Current progress, between 0 and 1",
      "type": {
        "name": "number"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledProgressBar);

/***/ }),

/***/ 17425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "cr": () => (/* binding */ supportedVideoProviders)
/* harmony export */ });
/* unused harmony export getProvider */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["src"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


 // A map of provider name => regex


const ProvidersRegexs = {
  YouTube: /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/i,
  Vimeo: /:\/\/(www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|)(\d+)(?:|\/\?)/i
};
/** A list of supported video provider names */

const supportedVideoProviders = Object.keys(ProvidersRegexs);
/** Get provider name, or returns null if URL is null or not supported */

const getProvider = url => {
  if (!url) {
    return null;
  }

  return supportedVideoProviders.find(providerName => {
    return ProvidersRegexs[providerName].test(url);
  });
};
/** An iframe that grows with its content */

const ResponsiveIframe = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_ref => {
  let {
    src
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("iframe", {
      title: "Responsive Frame",
      src: src,
      allowFullScreen: true,
      frameBorder: "0",
      allow: "fullscreen"
    })
  }));
}).withConfig({
  displayName: "VideoPlayer__ResponsiveIframe",
  componentId: "sc-1rckyg2-0"
})(["position:relative;width:100%;padding-bottom:56.25%;background:black;iframe{position:absolute;height:100%;width:100%;top:0;left:0;}"]);
/**
 * A video player that supports YouTube and Vimeo.
 * Implemented as a pure component to avoid re-checking the URL and re-rendering
 * the iframe on each update.
 */

const VideoPlayer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(({
  url,
  placeholder
}) => {
  const provider = getProvider(url);

  if (provider === 'YouTube') {
    const youtubeId = ProvidersRegexs.YouTube.exec(url)[1];

    if (youtubeId) {
      // youtube-nocookie is a special enpoint that don't send any cookie to the
      // users until they actually start playing the video. It's better for privacy
      // and lighter for users. The service is officially supported by Google.
      // See https://support.google.com/youtube/answer/171780?hl=en > "Turn on privacy-enhanced mode"
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(ResponsiveIframe, {
        src: `https://www.youtube-nocookie.com/embed/${youtubeId}`
      });
    }
  } else if (provider === 'Vimeo') {
    const vimeoId = ProvidersRegexs.Vimeo.exec(url)[3];

    if (vimeoId) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(ResponsiveIframe, {
        src: `https://player.vimeo.com/video/${vimeoId}?color=145ECC/`
      });
    }
  }

  return placeholder;
});
VideoPlayer.displayName = 'VideoPlayer';
VideoPlayer.defaultProps = {
  placeholder: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoPlayer);

/***/ }),

/***/ 1433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M7": () => (/* binding */ PAYMENT_FLOW),
/* harmony export */   "Ss": () => (/* binding */ STEPS),
/* harmony export */   "eY": () => (/* binding */ CRYPTO_CURRENCIES)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16159);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56562);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const STEPS = {
  PROFILE: 'profile',
  DETAILS: 'details',
  PAYMENT: 'payment',
  SUMMARY: 'summary',
  SUCCESS: 'success',
  CHECKOUT: 'checkout'
};
const PAYMENT_FLOW = {
  CRYPTO: 'crypto'
};
const CRYPTO_CURRENCIES = [{
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "BTC (Bitcoin)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/BTC.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "BTC (Bitcoin)"
    })]
  }),
  labelWithoutImage: 'BTC (Bitcoin)',
  value: 'BTC',
  minDonation: 0.00001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "ETH (Ethereum)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/ETH.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "ETH (Ethereum)"
    })]
  }),
  labelWithoutImage: 'ETH (Ethereum)',
  value: 'ETH',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "BCH (Bitcoin Cash)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/BCH.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "BCH (Bitcoin Cash)"
    })]
  }),
  labelWithoutImage: 'BCH (Bitcoin Cash)',
  value: 'BCH',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "LTC (Litecoin)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/LTC.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "LTC (Litecoin)"
    })]
  }),
  labelWithoutImage: 'LTC (Litecoin)',
  value: 'LTC',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "ZEC (Zcash)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/ZEC.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "ZEC (Zcash)"
    })]
  }),
  labelWithoutImage: 'ZEC (Zcash)',
  value: 'ZEC',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "LINK (Chainlink)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/LINK.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "LINK (Chainlink)"
    })]
  }),
  labelWithoutImage: 'LINK (Chainlink)',
  value: 'LINK',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "BAT (Basic Attention Token)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/BAT.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "BAT (Basic Attention Token)"
    })]
  }),
  labelWithoutImage: 'BAT (Basic Attention Token)',
  value: 'BAT',
  minDonation: 1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "DAI (Dai)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/DAI.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "DAI (Dai)"
    })]
  }),
  labelWithoutImage: 'DAI (Dai)',
  value: 'DAI',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "OXT (Orchid)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/OXT.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "OXT (Orchid)"
    })]
  }),
  labelWithoutImage: 'OXT (Orchid)',
  value: 'OXT',
  minDonation: 1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "STORJ (Storj)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/STORJ.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "STORJ (Storj)"
    })]
  }),
  labelWithoutImage: 'STORJ (Storj)',
  value: 'STORJ',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "AMP (Amp)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/AMP.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "AMP (Amp)"
    })]
  }),
  labelWithoutImage: 'AMP (Amp)',
  value: 'AMP',
  minDonation: 10
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "ZRX (Ox)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/ZRX.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "ZRX (Ox)"
    })]
  }),
  labelWithoutImage: 'ZRX (Ox)',
  value: 'ZRX',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "DOGE (Dogecoin)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/DOGE.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "DOGE (Dogecoin)"
    })]
  }),
  labelWithoutImage: 'DOGE (Dogecoin)',
  value: 'DOGE',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "COMP (Compound)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/COMP.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "COMP (Compound)"
    })]
  }),
  labelWithoutImage: 'COMP (Compound)',
  value: 'COMP',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "SNX (Synthetix)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/SNX.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "SNX (Synthetix)"
    })]
  }),
  labelWithoutImage: 'SNX (Synthetix)',
  value: 'SNX',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "AAVE (Aave)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/AAVE.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "AAVE (Aave)"
    })]
  }),
  labelWithoutImage: 'AAVE (Aave)',
  value: 'AAVE',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "GRT (The Graph)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/GRT.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "GRT (The Graph)"
    })]
  }),
  labelWithoutImage: 'GRT (The Graph)',
  value: 'GRT',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "BNT (Bancor)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/BNT.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "BNT (Bancor)"
    })]
  }),
  labelWithoutImage: 'BNT (Bancor)',
  value: 'BNT',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "SUSHI (SushiSwap)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/SUSHI.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "SUSHI (SushiSwap)"
    })]
  }),
  labelWithoutImage: 'SUSHI (SushiSwap)',
  value: 'SUSHI',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "UNI (Uniswap)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/UNI.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "UNI (Uniswap)"
    })]
  }),
  labelWithoutImage: 'UNI (Uniswap)',
  value: 'UNI',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "MATIC (Polygon)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/MATIC.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "MATIC (Polygon)"
    })]
  }),
  labelWithoutImage: 'MATIC (Polygon)',
  value: 'MATIC',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "GUSD (Gemini Dollar)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/GUSD.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "GUSD (Gemini Dollar)"
    })]
  }),
  labelWithoutImage: 'GUSD (Gemini Dollar)',
  value: 'GUSD',
  minDonation: 0.000001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "CRV (Curve DAO Token)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/CRV.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "CRV (Curve DAO Token)"
    })]
  }),
  labelWithoutImage: 'CRV (Curve DAO Token)',
  value: 'CRV',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "1INCH (1inch)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/1INCH.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "1INCH (1inch)"
    })]
  }),
  labelWithoutImage: '1INCH (1inch)',
  value: '1INCH',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "BAL (Balancer)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/BAL.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "BAL (Balancer)"
    })]
  }),
  labelWithoutImage: 'BAL (Balancer)',
  value: 'BAL',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "UMA (UMA)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/UMA.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "UMA (UMA)"
    })]
  }),
  labelWithoutImage: 'UMA (UMA)',
  value: 'UMA',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "YFI (Yearn Finance)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/YFI.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "YFI (Yearn Finance)"
    })]
  }),
  labelWithoutImage: 'YFI (Yearn Finance)',
  value: 'YFI',
  minDonation: 0.00001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "ALCX (Alchemix)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/ALCX.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "ALCX (Alchemix)"
    })]
  }),
  labelWithoutImage: 'ALCX (Alchemix)',
  value: 'ALCX',
  minDonation: 0.00001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "SAND (Sandbox)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/SAND.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "SAND (Sandbox)"
    })]
  }),
  labelWithoutImage: 'SAND (Sandbox)',
  value: 'SAND',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "INJ (Injective Protocol)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/INJ.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "INJ (Injective Protocol)"
    })]
  }),
  labelWithoutImage: 'INJ (Injective Protocol)',
  value: 'INJ',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "PAXG (PAX Gold)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/PAXG.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "PAXG (PAX Gold)"
    })]
  }),
  labelWithoutImage: 'PAXG (PAX Gold)',
  value: 'PAXG',
  minDonation: 0.0001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "ENJ (Enjin Coin)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/ENJ.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "ENJ (Enjin Coin)"
    })]
  }),
  labelWithoutImage: 'ENJ (Enjin Coin)',
  value: 'ENJ',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "FIL (Filecoin)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/FIL.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "FIL (Filecoin)"
    })]
  }),
  labelWithoutImage: 'FIL (Filecoin)',
  value: 'FIL',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "ANKR (Ankr)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/ANKR.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "ANKR (Ankr)"
    })]
  }),
  labelWithoutImage: 'ANKR (Ankr)',
  value: 'ANKR',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "XTZ (Tezos)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/XTZ.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "XTZ (Tezos)"
    })]
  }),
  labelWithoutImage: 'XTZ (Tezos)',
  value: 'XTZ',
  minDonation: 0.02
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "MKR (Maker)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/MKR.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "MKR (Maker)"
    })]
  }),
  labelWithoutImage: 'MKR (Maker)',
  value: 'MKR',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "LRC (Loopring)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/LRC.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "LRC (Loopring)"
    })]
  }),
  labelWithoutImage: 'LRC (Loopring)',
  value: 'LRC',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "BOND (BarnBridge)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/BOND.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "BOND (BarnBridge)"
    })]
  }),
  labelWithoutImage: 'BOND (BarnBridge)',
  value: 'BOND',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "SKL (Skale)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/SKL.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "SKL (Skale)"
    })]
  }),
  labelWithoutImage: 'SKL (Skale)',
  value: 'SKL',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "MIR (Mirror Protocol)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/MIR.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "MIR (Mirror Protocol)"
    })]
  }),
  labelWithoutImage: 'MIR (Mirror Protocol)',
  value: 'MIR',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "LPT (Livepeer)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/LPT.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "LPT (Livepeer)"
    })]
  }),
  labelWithoutImage: 'LPT (Livepeer)',
  value: 'LPT',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "MANA (Mana)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/MANA.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "MANA (Mana)"
    })]
  }),
  labelWithoutImage: 'MANA (Mana)',
  value: 'MANA',
  minDonation: 1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "FTM (Fantom)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/FTM.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "FTM (Fantom)"
    })]
  }),
  labelWithoutImage: 'FTM (Fantom)',
  value: 'FTM',
  minDonation: 0.03
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "KNC (Kyber)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/KNC.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "KNC (Kyber)"
    })]
  }),
  labelWithoutImage: 'KNC (Kyber)',
  value: 'KNC',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "CUBE (Cube)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/CUBE.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "CUBE (Cube)"
    })]
  }),
  labelWithoutImage: 'CUBE (Cube)',
  value: 'CUBE',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "REN (Ren)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/REN.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "REN (Ren)"
    })]
  }),
  labelWithoutImage: 'REN (Ren)',
  value: 'REN',
  minDonation: 0.1
}];

/***/ }),

/***/ 93727:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_feather_Clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11479);
/* harmony import */ var _styled_icons_feather_Clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Clipboard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_feather_Facebook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94526);
/* harmony import */ var _styled_icons_feather_Facebook__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Facebook__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_feather_Linkedin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(203);
/* harmony import */ var _styled_icons_feather_Linkedin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Linkedin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_feather_Mail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71362);
/* harmony import */ var _styled_icons_feather_Mail__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Mail__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_feather_Twitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71593);
/* harmony import */ var _styled_icons_feather_Twitter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Twitter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68887);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25896);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16159);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51082);
/* harmony import */ var _StyledRoundButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90012);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88609);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_13__]);
_StyledTooltip__WEBPACK_IMPORTED_MODULE_13__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



 // Styled-icons




 // Open Collective Frontend imports









const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.defineMessages)({
  shareTitle: {
    id: "TierPage.Share.title",
    defaultMessage: [{
      "type": 0,
      "value": "Help "
    }, {
      "type": 1,
      "value": "collective"
    }, {
      "type": 0,
      "value": " reach their goal!"
    }]
  },
  copy: {
    id: "Clipboard.Copy",
    defaultMessage: [{
      "type": 0,
      "value": "Copy to clipboard"
    }]
  },
  copied: {
    id: "Clipboard.Copied",
    defaultMessage: [{
      "type": 0,
      "value": "Copied!"
    }]
  }
});
let updateCopyBtnTimeout = null;
/**
 * Buttons to share the tier page.
 */

const ShareButtons = ({
  pageUrl,
  intl,
  collective: {
    name,
    twitterHandle
  }
}) => {
  const [copied, setCopied] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const copyMsg = copied ? intl.formatMessage(messages.copied) : intl.formatMessage(messages.copy);
  const defaultShareTitle = intl.formatMessage(messages.shareTitle, {
    collective: name
  });
  const twitterShareMsg = intl.formatMessage(messages.shareTitle, {
    collective: twitterHandle ? `@${twitterHandle}` : name
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      title: "Facebook",
      href: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_8__/* .facebookShareURL */ .VZ)({
        u: pageUrl
      }),
      openInNewTab: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        size: 40,
        mr: "12px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_styled_icons_feather_Facebook__WEBPACK_IMPORTED_MODULE_2__.Facebook, {
          size: 14
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      title: "Twitter",
      href: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_8__/* .tweetURL */ .Le)({
        url: pageUrl,
        text: twitterShareMsg
      }),
      openInNewTab: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        size: 40,
        mr: "12px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_styled_icons_feather_Twitter__WEBPACK_IMPORTED_MODULE_5__.Twitter, {
          size: 14
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      title: "Linkedin",
      href: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_8__/* .linkedInShareURL */ .bN)({
        url: pageUrl,
        title: defaultShareTitle
      }),
      openInNewTab: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        size: 40,
        mr: "12px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_styled_icons_feather_Linkedin__WEBPACK_IMPORTED_MODULE_3__.Linkedin, {
          size: 14
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      title: "Mail",
      href: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_8__/* .mailToURL */ .Oh)('', {
        subject: defaultShareTitle
      }),
      openInNewTab: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        size: 40,
        mr: "12px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_styled_icons_feather_Mail__WEBPACK_IMPORTED_MODULE_4__.Mail, {
          size: 14
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
      delayHide: 0,
      content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        minWidth: 125,
        textAlign: "center",
        children: copyMsg
      }),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        size: 40,
        onClick: () => {
          copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6___default()(pageUrl);
          setCopied(true);

          if (updateCopyBtnTimeout) {
            clearTimeout(updateCopyBtnTimeout);
          }

          updateCopyBtnTimeout = setTimeout(() => {
            setCopied(false);
            updateCopyBtnTimeout = null;
          }, 3000);
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_styled_icons_feather_Clipboard__WEBPACK_IMPORTED_MODULE_1__.Clipboard, {
          size: 15
        })
      })
    })]
  });
};

ShareButtons.__docgenInfo = {
  "description": "Buttons to share the tier page.",
  "methods": [],
  "displayName": "ShareButtons",
  "props": {
    "pageUrl": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "name": {
            "name": "string",
            "required": true
          },
          "twitterHandle": {
            "name": "string",
            "required": false
          }
        }
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_7__.injectIntl)(ShareButtons));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TierContributors)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17809);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(memoize_one__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ContributorsFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97866);
/* harmony import */ var _ContributorsGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65320);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const CONTENT_WIDTH = 1440;
class TierContributors extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "setFilter", filter => {
      this.setState({
        filter
      });
    });

    _defineProperty(this, "getContributorsFilters", memoize_one__WEBPACK_IMPORTED_MODULE_2___default()(_ContributorsFilter__WEBPACK_IMPORTED_MODULE_4__/* .getContributorsFilters */ .pQ));

    _defineProperty(this, "filterContributors", memoize_one__WEBPACK_IMPORTED_MODULE_2___default()(_ContributorsFilter__WEBPACK_IMPORTED_MODULE_4__/* .filterContributors */ ._w));

    this.state = {
      filter: null
    };
  }

  render() {
    const {
      contributors,
      contributorsStats,
      currency,
      collectiveId
    } = this.props;
    const {
      filter
    } = this.state;
    const hasFilters = contributors.length >= TierContributors.MIN_CONTRIBUTORS_TO_SHOW_FILTERS;
    const filters = hasFilters && this.getContributorsFilters(contributors);
    const filteredContributors = hasFilters ? this.filterContributors(contributors, filter) : contributors;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_StyledBox, {
        m: "0 auto",
        $_css: CONTENT_WIDTH,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.H2, {
          mb: 3,
          px: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "TierPage.ContributorsCountGoal",
            defaultMessage: [{
              "type": 6,
              "value": "userCount",
              "options": {
                "=0": {
                  "value": []
                },
                "one": {
                  "value": [{
                    "type": 7
                  }, {
                    "type": 0,
                    "value": " individual "
                  }]
                },
                "other": {
                  "value": [{
                    "type": 7
                  }, {
                    "type": 0,
                    "value": " individuals "
                  }]
                }
              },
              "offset": 0,
              "pluralType": "cardinal"
            }, {
              "type": 0,
              "value": " "
            }, {
              "type": 6,
              "value": "both",
              "options": {
                "=0": {
                  "value": []
                },
                "other": {
                  "value": [{
                    "type": 0,
                    "value": "and "
                  }]
                }
              },
              "offset": 0,
              "pluralType": "cardinal"
            }, {
              "type": 6,
              "value": "orgCount",
              "options": {
                "=0": {
                  "value": []
                },
                "one": {
                  "value": [{
                    "type": 7
                  }, {
                    "type": 0,
                    "value": " organization"
                  }]
                },
                "other": {
                  "value": [{
                    "type": 7
                  }, {
                    "type": 0,
                    "value": " organizations"
                  }]
                }
              },
              "offset": 0,
              "pluralType": "cardinal"
            }, {
              "type": 0,
              "value": " "
            }, {
              "type": 6,
              "value": "totalCount",
              "options": {
                "one": {
                  "value": [{
                    "type": 0,
                    "value": "has "
                  }]
                },
                "other": {
                  "value": [{
                    "type": 0,
                    "value": "have "
                  }]
                }
              },
              "offset": 0,
              "pluralType": "cardinal"
            }, {
              "type": 0,
              "value": " contributed to this goal"
            }],
            values: {
              orgCount: contributorsStats.organizations,
              userCount: contributorsStats.users,
              both: (contributorsStats.organizations || contributorsStats.collectives) && contributorsStats.users ? 1 : 0,
              totalCount: contributorsStats.all
            }
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
          color: "black.600",
          mb: 4,
          px: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "TierPage.ContributorsDescription",
            defaultMessage: [{
              "type": 0,
              "value": "Join us in contributing to this tier!"
            }]
          })
        }), hasFilters && filters.length > 2 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ContributorsFilter__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
          selected: filter,
          onChange: this.setFilter,
          filters: filters
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        mb: 4,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ContributorsGrid__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          contributors: filteredContributors,
          currency: currency,
          collectiveId: collectiveId,
          maxWidthWhenNotFull: CONTENT_WIDTH + 16 // Add 16 to compensate for the margin of the card

        })
      })]
    });
  }

}

_defineProperty(TierContributors, "MIN_CONTRIBUTORS_TO_SHOW_FILTERS", 2);

var _StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu).withConfig({
  displayName: "TierContributors___StyledBox",
  componentId: "sc-xg1zrk-0"
})(p => ({
  maxWidth: p.$_css
}));

TierContributors.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "setFilter",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "filter",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "TierContributors",
  "props": {
    "contributors": {
      "description": "Contributors",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "id": {
              "name": "string",
              "required": true
            },
            "roles": {
              "name": "arrayOf",
              "value": {
                "name": "string"
              },
              "required": false
            },
            "isCore": {
              "name": "bool",
              "required": true
            },
            "isBacker": {
              "name": "bool",
              "required": true
            }
          }
        }
      },
      "required": false
    },
    "contributorsStats": {
      "description": "Some statistics about this tier",
      "type": {
        "name": "shape",
        "value": {
          "all": {
            "name": "number",
            "required": true
          },
          "collectives": {
            "name": "number",
            "required": true
          },
          "organizations": {
            "name": "number",
            "required": true
          },
          "users": {
            "name": "number",
            "required": true
          }
        }
      },
      "required": true
    },
    "currency": {
      "description": "Currency for contributions",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "collectiveId": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    }
  }
};

/***/ }),

/***/ 5983:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _collective_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38208);
/* harmony import */ var _HTMLContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74770);
/* harmony import */ var _InlineEditField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54746);
/* harmony import */ var _RichTextEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59139);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87268);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_collective_navbar__WEBPACK_IMPORTED_MODULE_2__, _RichTextEditor__WEBPACK_IMPORTED_MODULE_5__]);
([_collective_navbar__WEBPACK_IMPORTED_MODULE_2__, _RichTextEditor__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







/**
 * Displays the tier long description on the page, with an optional form to edit it
 * if user is allowed to do so.
 */



const TierLongDescription = ({
  tier,
  editMutation,
  canEdit
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_InlineEditField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mutation: editMutation,
    values: tier,
    field: "longDescription",
    canEdit: canEdit,
    children: ({
      isEditing,
      value,
      setValue,
      enableEditor,
      setUploading
    }) => {
      if (isEditing) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_RichTextEditor__WEBPACK_IMPORTED_MODULE_5__["default"], {
          defaultValue: value,
          onChange: e => setValue(e.target.value),
          withStickyToolbar: true,
          toolbarTop: _collective_navbar__WEBPACK_IMPORTED_MODULE_2__/* .NAVBAR_HEIGHT */ .i,
          toolbarOffsetY: -30,
          setUploading: setUploading,
          kind: "TIER_LONG_DESCRIPTION"
        });
      } else if ((0,_HTMLContent__WEBPACK_IMPORTED_MODULE_3__/* .isEmptyValue */ .O)(tier.longDescription)) {
        return !canEdit ? null : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          buttonSize: "large",
          onClick: enableEditor,
          "data-cy": "Btn-Add-longDescription",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "TierPage.AddLongDescription",
            defaultMessage: [{
              "type": 0,
              "value": "Add a rich description"
            }]
          })
        });
      } else {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_HTMLContent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          content: tier.longDescription,
          "data-cy": "longDescription"
        });
      }
    }
  });
};

TierLongDescription.__docgenInfo = {
  "description": "Displays the tier long description on the page, with an optional form to edit it\nif user is allowed to do so.",
  "methods": [],
  "displayName": "TierLongDescription",
  "props": {
    "tier": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "number",
            "required": true
          },
          "longDescription": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": true
    },
    "editMutation": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "canEdit": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TierLongDescription);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InlineEditField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54746);
/* harmony import */ var _VideoPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17425);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);



 // Dynamically load heavy inputs only if user can edit the page


const VideoLinkerBox = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() | VideoLinkerBox */ 3568).then(__webpack_require__.bind(__webpack_require__, 30333)), {
  loadableGenerated: {
    modules: ["../components/tier-page/TierVideo.js -> " + '../VideoLinkerBox']
  }
});
/**
 * Displays the video on the page, with an optional form to edit it
 * if user is allowed to do so.
 */

const TierVideo = ({
  tier,
  editMutation,
  canEdit
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_InlineEditField__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    field: "videoUrl",
    values: tier,
    mutation: editMutation,
    canEdit: canEdit,
    showEditIcon: Boolean(tier.videoUrl),
    buttonsMinWidth: 150,
    children: ({
      isEditing,
      value,
      setValue,
      enableEditor,
      disableEditor
    }) => {
      if (isEditing || !value && canEdit) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(VideoLinkerBox, {
          url: value,
          onChange: setValue,
          isEditing: isEditing,
          setEditing: isEditing ? disableEditor : enableEditor
        });
      } else {
        return value ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_VideoPlayer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
          url: value
        }) : null;
      }
    }
  });
};

TierVideo.__docgenInfo = {
  "description": "Displays the video on the page, with an optional form to edit it\nif user is allowed to do so.",
  "methods": [],
  "displayName": "TierVideo",
  "props": {
    "tier": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "number",
            "required": true
          },
          "videoUrl": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": true
    },
    "editMutation": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "canEdit": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TierVideo);

/***/ }),

/***/ 99425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ Dimensions)
/* harmony export */ });
const Dimensions = {
  COVER_HEIGHT: 384
};

/***/ }),

/***/ 48694:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80642);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32651);
/* harmony import */ var _lib_tier_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36648);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25896);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97079);
/* harmony import */ var _collective_navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38208);
/* harmony import */ var _collective_navbar_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97585);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(69078);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16159);
/* harmony import */ var _Hide__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(84582);
/* harmony import */ var _InlineEditField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(54746);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(87268);
/* harmony import */ var _StyledProgressBar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6121);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(90998);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(99425);
/* harmony import */ var _ShareButtons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(93727);
/* harmony import */ var _TierContributors__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(13941);
/* harmony import */ var _TierLongDescription__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(5983);
/* harmony import */ var _TierVideo__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(39679);
/* harmony import */ var _Bubbles_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(77251);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_collective_navbar__WEBPACK_IMPORTED_MODULE_10__, _ShareButtons__WEBPACK_IMPORTED_MODULE_22__, _TierLongDescription__WEBPACK_IMPORTED_MODULE_24__]);
([_collective_navbar__WEBPACK_IMPORTED_MODULE_10__, _ShareButtons__WEBPACK_IMPORTED_MODULE_22__, _TierLongDescription__WEBPACK_IMPORTED_MODULE_24__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




 // Open Collective Frontend imports
















 // Local tier page imports










const generateBackground = (theme, image) => {
  const color = theme.colors.primary[300];
  const gradient = `linear-gradient(0deg, ${theme.colors.primary[800]}, ${theme.colors.primary[400]})`;
  const imageCss = image ? `url(${image}), ` : '';
  return `${imageCss}${gradient}, ${color}`;
};
/** The blured background image displayed under the tier description */


const TierCover = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "tier-page__TierCover",
  componentId: "sc-xvi6tk-0"
})(["width:100%;height:", "px;background:", ";background-color:", ";background-repeat:no-repeat;background-size:cover;filter:blur(15px);transform:scale(1.1);"], _constants__WEBPACK_IMPORTED_MODULE_21__/* .Dimensions.COVER_HEIGHT */ .D.COVER_HEIGHT, props => generateBackground(props.theme, props.backgroundImage), props => props.theme.colors.primary[300]);
/** The little bubbles displayed above the tier's description */

const Bubbles = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "tier-page__Bubbles",
  componentId: "sc-xvi6tk-1"
})(["background:url(", ") no-repeat;height:112px;background-size:75% auto;background-position-x:right;background-position-y:25px;@media (max-width:", "){height:130px;background-size:90% auto;background-position-x:center;background-position-y:110%;}"], _Bubbles_svg__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('breakpoints.0'));
/** Container for the info, with overflow hidden to truncate text with css */

const ProgressInfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "tier-page__ProgressInfoContainer",
  componentId: "sc-xvi6tk-2"
})(["overflow:hidden;display:flex;flex-direction:column;justify-content:center;flex:0 1 50%;min-height:90px;margin-bottom:12px;"]);
/** A mutation with all the info that user is allowed to edit on this page */

const editTierMutation = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__/* .gqlV1 */ .N
/* GraphQL */
`
  mutation UpdateTier($id: Int!, $name: String, $description: String, $longDescription: String, $videoUrl: String) {
    editTier(
      tier: { id: $id, description: $description, name: $name, longDescription: $longDescription, videoUrl: $videoUrl }
    ) {
      id
      name
      description
      longDescription
      videoUrl
    }
  }
`;
/**
 * This is the tier page main layout.
 *
 * See design: https://www.figma.com/file/e71tBo0Sr8J7R5n6iMkqI42d/OC.COM-07-%2F-Collectives?node-id=2587%3A39809
 */

class TierPage extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  renderShareBlock() {
    const pageUrl = `${(0,_lib_utils__WEBPACK_IMPORTED_MODULE_9__/* .getWebsiteUrl */ .ls)()}${this.props.router.asPath}`;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
        fontSize: "16px",
        color: "black.700",
        fontWeight: "bold",
        mb: 3,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "Share",
          defaultMessage: [{
            "type": 0,
            "value": "Share"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_ShareButtons__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
        pageUrl: pageUrl,
        collective: this.props.collective
      })]
    });
  }

  render() {
    const {
      collective,
      tier,
      contributors,
      contributorsStats,
      redirect,
      LoggedInUser
    } = this.props;
    const canEdit = LoggedInUser && LoggedInUser.isAdminOfCollective(collective);
    const isFlexibleInterval = tier.interval === _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_5__["default"].flexible;
    const amountRaisedKey = tier.interval && !isFlexibleInterval ? 'totalRecurringDonations' : 'totalDonated';
    const amountRaised = tier.stats?.[amountRaisedKey] || 0;
    const shareBlock = this.renderShareBlock();
    const isPassed = (0,_lib_tier_utils__WEBPACK_IMPORTED_MODULE_7__/* .isTierExpired */ .l_)(tier);
    const contributeQuery = redirect ? {
      redirect
    } : undefined;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_collective_navbar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        collective: collective,
        selectedCategory: _collective_navbar_constants__WEBPACK_IMPORTED_MODULE_11__/* .NAVBAR_CATEGORIES.CONTRIBUTE */ .t.CONTRIBUTE,
        isAdmin: canEdit
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        position: "relative",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          position: "absolute",
          width: 1,
          zIndex: -1,
          overflow: "hidden",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(TierCover, {
            backgroundImage: collective.backgroundImage
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          position: "absolute",
          background: "white",
          height: "100%",
          width: 1,
          zIndex: -1,
          top: _constants__WEBPACK_IMPORTED_MODULE_21__/* .Dimensions.COVER_HEIGHT */ .D.COVER_HEIGHT
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
        justifyContent: "center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
          flex: "0 1 1400px",
          px: [2, 4],
          justifyContent: "space-evenly",
          mb: 64,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            display: "flex",
            flexDirection: "column",
            flex: "0 1 800px",
            mb: 4,
            mx: [0, null, 3],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(Bubbles, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
              background: "white",
              borderRadius: "12px",
              px: [3, 4],
              py: [4, 5],
              boxShadow: "0px 8px 12px rgba(20, 20, 20, 0.16)",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.H1, {
                fontSize: "40px",
                textAlign: "left",
                color: "black.900",
                wordBreak: "break-word",
                mb: 3,
                "data-cy": "TierName",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_InlineEditField__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                  mutation: editTierMutation,
                  canEdit: canEdit,
                  values: tier,
                  field: "name",
                  maxLength: 255,
                  placeholder: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                    id: "TierPage.AddTitle",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Add a title"
                    }]
                  }),
                  required: true
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.H2, {
                color: "black.600",
                fontSize: "20px",
                lineHeight: "1.5em",
                mb: 4,
                whiteSpace: "pre-line",
                "data-cy": "shortDescription",
                wordBreak: "break-word",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_InlineEditField__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                  mutation: editTierMutation,
                  canEdit: canEdit,
                  values: tier,
                  field: "description",
                  maxLength: 510,
                  placeholder: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                    id: "TierPage.AddDescription",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Add a short description"
                    }]
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Hide__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP, {
                lg: true,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
                  my: 24,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_TierVideo__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                    tier: tier,
                    editMutation: editTierMutation,
                    canEdit: canEdit
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                display: "flex",
                flexDirection: "column-reverse",
                position: "relative",
                flexWrap: "wrap",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx("div", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_TierLongDescription__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                    tier: tier,
                    editMutation: editTierMutation,
                    canEdit: canEdit
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                display: ['block', null, null, 'none'],
                mt: 4,
                maxWidth: 275,
                children: shareBlock
              })]
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Hide__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP, {
            xs: true,
            sm: true,
            md: true,
            flex: "0 1 416px",
            position: "relative",
            pt: 112,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
              width: "100%",
              position: "sticky",
              top: 80,
              pb: 32,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                width: 1,
                background: "white",
                p: "24px",
                borderRadius: "12px",
                boxShadow: "0px 8px 12px rgba(20, 20, 20, 0.16)",
                children: [Boolean(tier.goal) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(ProgressInfoContainer, {
                  children: [tier.goal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "black.900",
                    lineHeight: "32px",
                    truncateOverflow: true,
                    mb: 2,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                      id: "Tier.Goal",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Goal "
                      }, {
                        "type": 1,
                        "value": "amountWithInterval"
                      }],
                      values: {
                        amountWithInterval: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                          amount: tier.goal,
                          currency: tier.currency,
                          interval: tier.interval !== _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_5__["default"].flexible ? tier.interval : null,
                          formatWithSeparators: tier.goal > 1000000,
                          abbreviateInterval: true,
                          amountStyles: {
                            fontWeight: 'bold',
                            color: 'black.900'
                          },
                          precision: 0
                        })
                      }
                    })
                  }), tier.goal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
                    mt: 1,
                    mb: 2,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_StyledProgressBar__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                      percentage: amountRaised / tier.goal,
                      height: "8px"
                    })
                  }), amountRaised > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
                    mt: 2,
                    justifyContent: "space-between",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
                        color: "black.700",
                        fontSize: "14px",
                        fontWeight: "700",
                        lineHeight: "20px",
                        mb: 1,
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                          id: "AmountRaised",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Amount raised"
                          }]
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
                        color: "black.700",
                        fontSize: "14px",
                        fontWeight: "500",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                          amount: amountRaised,
                          currency: tier.currency,
                          interval: tier.interval !== _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_5__["default"].flexible ? tier.interval : null,
                          amountStyles: null
                        })
                      })]
                    }), Boolean(tier.goal && amountRaised < tier.goal) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
                        color: "black.700",
                        fontSize: "14px",
                        fontWeight: "700",
                        lineHeight: "20px",
                        mb: 1,
                        textAlign: "right",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                          id: "Goal.StillToContribute",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Still to contribute"
                          }]
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
                        color: "black.700",
                        fontSize: "14px",
                        fontWeight: "500",
                        textAlign: "right",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                          amount: tier.goal - amountRaised,
                          currency: tier.currency,
                          interval: tier.interval !== _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_5__["default"].flexible ? tier.interval : null,
                          amountStyles: null
                        })
                      })]
                    })]
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
                  alignItems: "center",
                  mb: 24,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
                    width: 1,
                    children: isPassed ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
                      textAlign: "center",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                        id: "Tier.Past",
                        defaultMessage: [{
                          "type": 0,
                          "value": "This tier is not active anymore."
                        }]
                      }), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_Link__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        href: {
                          pathname: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_8__/* .getCollectivePageRoute */ .x0)(collective)}/contribute`,
                          query: contributeQuery
                        },
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                          id: "createOrder.backToTier",
                          defaultMessage: [{
                            "type": 0,
                            "value": "View all the other ways to contribute"
                          }]
                        }), "."]
                      })]
                    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Link__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                      href: {
                        pathname: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_8__/* .getCollectivePageRoute */ .x0)(collective)}/contribute/${tier.slug}-${tier.id}/checkout`,
                        query: contributeQuery
                      },
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        buttonStyle: "primary",
                        buttonSize: ['small', 'medium'],
                        width: 1,
                        minWidth: 128,
                        "data-cy": "ContributeBtn",
                        children: tier.button ? tier.button : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                          id: "Contribute",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Contribute"
                          }]
                        })
                      })
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
                  my: 24,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_TierVideo__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                    tier: tier,
                    editMutation: editTierMutation,
                    canEdit: canEdit
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                  display: ['none', null, null, 'block'],
                  children: shareBlock
                })]
              })
            })
          })]
        })
      }), contributors && contributors.length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_TierContributors__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
        collectiveName: collective.name,
        contributors: contributors,
        contributorsStats: contributorsStats,
        currency: tier.currency || collective.currency,
        collectiveId: collective.id
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        display: ['flex', null, null, 'none'],
        position: "sticky",
        bottom: 0,
        left: 0,
        width: 1,
        flexDirection: "row",
        justifyContent: tier.goal || amountRaised ? 'space-between' : 'center',
        background: "white",
        height: [72, null, 82],
        zIndex: 9,
        flex: "0 1 385px",
        p: ['0 16px', '0 24px', null],
        boxShadow: "0px -3px 5px rgba(70, 70, 70, 0.15)",
        children: [Boolean(tier.goal || amountRaised) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(ProgressInfoContainer, {
          children: [tier.goal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
            fontSize: ['12px', '14px', null],
            color: "black.500",
            lineHeight: ['24px', null, null],
            truncateOverflow: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "TierPage.AmountGoal",
              defaultMessage: [{
                "type": 1,
                "value": "amountWithInterval"
              }, {
                "type": 0,
                "value": " goal"
              }],
              values: {
                amountWithInterval: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                  amount: tier.goal,
                  currency: tier.currency,
                  interval: tier.interval !== _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_5__["default"].flexible ? tier.interval : null,
                  formatWithSeparators: tier.goal > 1000000,
                  abbreviateInterval: true,
                  amountStyles: {
                    fontWeight: 'bold',
                    color: 'black.900'
                  },
                  precision: 0
                })
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
            fontSize: ['10px', '14px'],
            color: "black.500",
            lineHeight: ['18px', null, '24px'],
            mb: [0, null, null, 2],
            truncateOverflow: true,
            children: [amountRaised > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "TierPage.AmountRaised",
              defaultMessage: [{
                "type": 1,
                "value": "amountWithInterval"
              }, {
                "type": 0,
                "value": " raised"
              }],
              values: {
                amountWithInterval: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                  color: "black.700",
                  amount: amountRaised,
                  currency: tier.currency,
                  interval: tier.interval !== _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_5__["default"].flexible ? tier.interval : null,
                  amountStyles: {
                    fontWeight: 'bold',
                    color: 'black.700'
                  },
                  formatWithSeparators: amountRaised > 1000000,
                  precision: 0,
                  abbreviateInterval: true
                })
              }
            }), tier.goal && ` (${Math.round(amountRaised / tier.goal * 100)}%)`]
          }), tier.goal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
            mt: 1,
            mb: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_StyledProgressBar__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
              percentage: amountRaised / tier.goal
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
          alignItems: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
            width: 1,
            children: isPassed ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
              textAlign: "center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "Tier.Past",
                defaultMessage: [{
                  "type": 0,
                  "value": "This tier is not active anymore."
                }]
              }), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_Link__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                href: {
                  pathname: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_8__/* .getCollectivePageRoute */ .x0)(collective)}/contribute`,
                  query: contributeQuery
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                  id: "createOrder.backToTier",
                  defaultMessage: [{
                    "type": 0,
                    "value": "View all the other ways to contribute"
                  }]
                }), "."]
              })]
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Link__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
              href: {
                pathname: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_8__/* .getCollectivePageRoute */ .x0)(collective)}/contribute/${tier.slug}-${tier.id}/checkout`,
                query: contributeQuery
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                buttonStyle: "primary",
                buttonSize: ['small', 'medium'],
                width: 1,
                my: 4,
                minWidth: 128,
                "data-cy": "ContributeBtn",
                children: tier.button ? tier.button : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                  id: "Contribute",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Contribute"
                  }]
                })
              })
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          display: ['none', null, null, 'block'],
          children: shareBlock
        })]
      })]
    });
  }

}

TierPage.__docgenInfo = {
  "description": "This is the tier page main layout.\n\nSee design: https://www.figma.com/file/e71tBo0Sr8J7R5n6iMkqI42d/OC.COM-07-%2F-Collectives?node-id=2587%3A39809",
  "methods": [{
    "name": "renderShareBlock",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "TierPage",
  "props": {
    "collective": {
      "description": "The collective the tier belongs to",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "number",
            "required": true
          },
          "slug": {
            "name": "string",
            "required": true
          },
          "name": {
            "name": "string",
            "required": true
          },
          "currency": {
            "name": "string",
            "required": false
          },
          "type": {
            "name": "string",
            "required": true
          },
          "image": {
            "name": "string",
            "required": false
          },
          "backgroundImage": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": true
    },
    "tier": {
      "description": "The actual tier",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "number",
            "required": true
          },
          "name": {
            "name": "string",
            "required": true
          },
          "slug": {
            "name": "string",
            "required": true
          },
          "interval": {
            "name": "string",
            "required": false
          },
          "currency": {
            "name": "string",
            "required": false
          },
          "endsAt": {
            "name": "string",
            "required": false
          },
          "button": {
            "name": "string",
            "required": false
          },
          "goal": {
            "name": "number",
            "required": false
          },
          "description": {
            "name": "string",
            "required": false
          },
          "longDescription": {
            "name": "string",
            "required": false
          },
          "videoUrl": {
            "name": "string",
            "required": false
          },
          "stats": {
            "name": "shape",
            "value": {
              "totalRecurringDonations": {
                "name": "number",
                "required": false
              },
              "totalDonated": {
                "name": "number",
                "required": false
              }
            },
            "required": false
          }
        }
      },
      "required": true
    },
    "contributors": {
      "description": "The contributors for this tier",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": false
    },
    "contributorsStats": {
      "description": "Some statistics about this tier",
      "type": {
        "name": "shape",
        "value": {
          "all": {
            "name": "number",
            "required": true
          },
          "collectives": {
            "name": "number",
            "required": true
          },
          "organizations": {
            "name": "number",
            "required": true
          },
          "users": {
            "name": "number",
            "required": true
          }
        }
      },
      "required": true
    },
    "redirect": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "LoggedInUser": {
      "description": "The logged in user",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "router": {
      "description": "@ignore from `withRouter`",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_2__.withRouter)(TierPage));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lX": () => (/* binding */ AmountTypes),
/* harmony export */   "x$": () => (/* binding */ TierTypes)
/* harmony export */ });
const TierTypes = {
  TICKET: 'TICKET',
  TIER: 'TIER',
  MEMBERSHIP: 'MEMBERSHIP',
  PRODUCT: 'PRODUCT',
  SERVICE: 'SERVICE',
  DONATION: 'DONATION'
};
const AmountTypes = {
  FIXED: 'FIXED',
  FLEXIBLE: 'FLEXIBLE'
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Object.values(TierTypes));

/***/ }),

/***/ 66465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_roles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98216);


const RolesTranslations = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].HOST */ .Z.HOST]: {
    id: "Member.Role.HOST",
    defaultMessage: [{
      "type": 0,
      "value": "Host"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].ADMIN */ .Z.ADMIN]: {
    id: "Member.Role.ADMIN",
    defaultMessage: [{
      "type": 0,
      "value": "Admin"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].MEMBER */ .Z.MEMBER]: {
    id: "Member.Role.MEMBER",
    defaultMessage: [{
      "type": 0,
      "value": "Core Contributor"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].CONTRIBUTOR */ .Z.CONTRIBUTOR]: {
    id: "Member.Role.CONTRIBUTOR",
    defaultMessage: [{
      "type": 0,
      "value": "Contributor"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].BACKER */ .Z.BACKER]: {
    id: "Member.Role.BACKER",
    defaultMessage: [{
      "type": 0,
      "value": "Financial Contributor"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].ATTENDEE */ .Z.ATTENDEE]: {
    id: "Member.Role.ATTENDEE",
    defaultMessage: [{
      "type": 0,
      "value": "Attendee"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].FOLLOWER */ .Z.FOLLOWER]: {
    id: "Member.Role.FOLLOWER",
    defaultMessage: [{
      "type": 0,
      "value": "Follower"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].ACCOUNTANT */ .Z.ACCOUNTANT]: {
    id: "Member.Role.ACCOUNTANT",
    defaultMessage: [{
      "type": 0,
      "value": "Accountant"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].CONNECTED_COLLECTIVE */ .Z.CONNECTED_COLLECTIVE]: {
    id: "Member.Role.ConnectedAccount",
    defaultMessage: [{
      "type": 0,
      "value": "Connected"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].CONNECTED_ACCOUNT */ .Z.CONNECTED_ACCOUNT]: {
    id: "Member.Role.ConnectedAccount",
    defaultMessage: [{
      "type": 0,
      "value": "Connected"
    }]
  }
});
/**
 * Translate a member role
 *
 * @param {func} `formatMessage` - see `injectIntl` or `useIntl`
 * @param {string} `role` - see `roles`
 */

const formatMemberRole = (intl, role) => {
  const i18nMsg = RolesTranslations[role];
  return i18nMsg ? intl.formatMessage(i18nMsg) : role;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatMemberRole);

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

/***/ 36648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CE": () => (/* binding */ isFixedContribution),
/* harmony export */   "Rx": () => (/* binding */ getDefaultInterval),
/* harmony export */   "SM": () => (/* binding */ sortTiersForCollective),
/* harmony export */   "Vq": () => (/* binding */ getTierPresets),
/* harmony export */   "Zq": () => (/* binding */ TIERS_ORDER_KEY),
/* harmony export */   "hs": () => (/* binding */ DEFAULT_MINIMUM_AMOUNT),
/* harmony export */   "l_": () => (/* binding */ isTierExpired),
/* harmony export */   "pP": () => (/* binding */ DEFAULT_PRESETS),
/* harmony export */   "qt": () => (/* binding */ getTierMinAmount),
/* harmony export */   "rm": () => (/* binding */ getCollectiveContributionCardsOrder),
/* harmony export */   "x6": () => (/* binding */ getDefaultTierAmount)
/* harmony export */ });
/* unused harmony exports DEFAULT_FUNDS_PRESETS, sortTiers */
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18459);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(604);
/* harmony import */ var lodash_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_contribution_flow_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1433);
/* harmony import */ var _constants_collectives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82525);
/* harmony import */ var _constants_intervals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80642);
/* harmony import */ var _constants_tiers_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12568);









const TIERS_ORDER_KEY = 'collectivePage.tiersOrder';
const DEFAULT_PRESETS = [500, 1000, 2000, 5000];
const DEFAULT_FUNDS_PRESETS = [100000, 200000, 500000, 1000000];
const DEFAULT_MINIMUM_AMOUNT = 100;
/**
 * Generated from the following query, using rounded number to make sure we don't suggest odd amounts.
 *
 * ```sql
 * WITH uniq_currencies AS (
 *     SELECT DISTINCT "to"
 *     FROM "CurrencyExchangeRates"
 *     WHERE "from" = 'USD'
 * ) SELECT uc."to", (
 *     -- Keep only first digit from number (e.g. 4 -> 4, 89 -> 80, 1337 -> 1000)
 *     SELECT LEFT(rate::TEXT, 1)::integer * POW(10, LENGTH(CAST(ROUND(rate) AS TEXT)) - 1)
 *     FROM "CurrencyExchangeRates" e WHERE e.from = 'USD' AND e.to = uc.to ORDER BY e."createdAt" DESC LIMIT 1
 *   ) AS rate
 * FROM uniq_currencies uc
 * ORDER BY rate DESC
 * ```
 */

const CURRENCY_ADJUSTMENT_RATES = {
  STD: 20000,
  VND: 20000,
  LAK: 10000,
  IDR: 10000,
  SLL: 10000,
  UZS: 10000,
  GNF: 8000,
  PYG: 6000,
  KHR: 4000,
  MGA: 4000,
  UGX: 3000,
  COP: 3000,
  MNT: 3000,
  TZS: 2000,
  CDF: 2000,
  BIF: 2000,
  MWK: 1000,
  KRW: 1000,
  LBP: 1000,
  MMK: 1000,
  RWF: 1000,
  CLP: 800,
  XAF: 600,
  XOF: 600,
  CRC: 600,
  SOS: 500,
  KZT: 400,
  KMF: 400,
  AMD: 400,
  NGN: 400,
  AOA: 400,
  HUF: 300,
  LKR: 300,
  MRO: 300,
  GYD: 200,
  PKR: 200,
  YER: 200,
  DJF: 100,
  JPY: 100,
  RSD: 100,
  KES: 100,
  XPF: 100,
  NPR: 100,
  ALL: 100,
  HTG: 100,
  VUV: 100,
  ISK: 100,
  JMD: 100,
  LRD: 100,
  CVE: 100,
  DZD: 100,
  ARS: 100,
  BDT: 90,
  SEK: 90,
  MAD: 90,
  AFN: 80,
  KGS: 70,
  INR: 70,
  RUB: 60,
  MZN: 60,
  PHP: 50,
  GMD: 50,
  DOP: 50,
  MKD: 50,
  ETB: 50,
  UYU: 40,
  MUR: 40,
  NIO: 30,
  THB: 30,
  HNL: 20,
  TWD: 20,
  CZK: 20,
  UAH: 20,
  SRD: 20,
  LSL: 10,
  ZAR: 10,
  SZL: 10,
  MVR: 10,
  ZMW: 10,
  NAD: 10,
  EGP: 10,
  MDL: 10,
  TJS: 10,
  MXN: 10,
  SCR: 10,
  TRY: 10,
  BWP: 10,
  NOK: 9,
  MOP: 8,
  SBD: 8,
  HKD: 7,
  HRK: 7,
  GTQ: 7,
  TTD: 6,
  CNY: 6,
  BOB: 6,
  DKK: 6,
  RON: 4,
  BRL: 4,
  MYR: 4,
  PLN: 4,
  PEN: 3,
  PGK: 3,
  SAR: 3,
  BYN: 3,
  AED: 3,
  ILS: 3,
  QAR: 3,
  BBD: 2,
  TOP: 2,
  FJD: 2,
  GEL: 2,
  BZD: 2,
  XCD: 2,
  WST: 2
};
/**
 * Get the min authorized amount for order, in cents.
 * ⚠️ Only work with data from GQLV2.
 */

const getTierMinAmount = (tier, currency) => {
  const rate = CURRENCY_ADJUSTMENT_RATES[currency] || 1;

  if (!tier) {
    // When making a donation, min amount is $1
    return DEFAULT_MINIMUM_AMOUNT * rate;
  } else if (tier.amountType === _constants_tiers_types__WEBPACK_IMPORTED_MODULE_8__/* .AmountTypes.FIXED */ .lX.FIXED) {
    return tier.amount?.valueInCents || 0;
  } else if (tier.minimumAmount.valueInCents !== null) {
    return tier.minimumAmount.valueInCents;
  } else if (tier.presets?.length && lodash_min__WEBPACK_IMPORTED_MODULE_2___default()(tier.presets) === 0) {
    return 0;
  } else {
    return DEFAULT_MINIMUM_AMOUNT * rate;
  }
};

const adaptPresetsForCurrency = (presets, currency) => {
  const rate = CURRENCY_ADJUSTMENT_RATES[currency];
  return !rate ? presets : presets.map(amount => Math.round(amount * rate));
};
/**
 * Get the presets for a given tier, or the default presets
 * ⚠️ Only work with data from GQLV2.
 */


const getTierPresets = (tier, collectiveType, currency) => {
  if (tier?.presets?.length > 0) {
    return tier.presets;
  } else if (collectiveType === _constants_collectives__WEBPACK_IMPORTED_MODULE_6__/* .CollectiveType.FUND */ .eV.FUND) {
    return adaptPresetsForCurrency(DEFAULT_FUNDS_PRESETS, currency);
  } else if (!tier) {
    return adaptPresetsForCurrency(DEFAULT_PRESETS, currency);
  }

  const minAmount = getTierMinAmount(tier, currency);

  if (minAmount === 0) {
    return [0, 500, 1500, 5000];
  } else if (minAmount < 1000) {
    return [minAmount, 1000, 2500, 5000];
  } else {
    const roundAmount = amount => {
      const amountSize = amount.toString().length;
      const roundingFactor = Math.pow(10, amountSize - 1);
      return Math.round(Math.round(amount / roundingFactor) * roundingFactor);
    };

    return lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default()([minAmount, roundAmount(minAmount * 2), roundAmount(minAmount * 3), roundAmount(minAmount * 5)]);
  }
};
/**
 * Returns the default selected amount from a tier.
 * ⚠️ Only work with data from GQLV2.
 */

const getDefaultTierAmount = (tier, collective, currency) => {
  if (tier && !lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default()(tier.amount?.valueInCents)) {
    return tier.amount.valueInCents;
  } else if (getTierMinAmount(tier, currency) === 0) {
    // Free tiers are free per default, even when user can make a donation
    return 0;
  } else {
    const presets = getTierPresets(tier, collective.type, currency);
    return presets[Math.floor(presets.length / 2)];
  }
};
/** Returns true if the price and interval of the current contribution cannot be changed */

const isFixedContribution = tier => {
  const forceInterval = Boolean(tier);
  const forceAmount = tier && tier.amountType === _constants_tiers_types__WEBPACK_IMPORTED_MODULE_8__/* .AmountTypes.FIXED */ .lX.FIXED;
  const isFlexible = tier && tier.amountType === _constants_tiers_types__WEBPACK_IMPORTED_MODULE_8__/* .AmountTypes.FLEXIBLE */ .lX.FLEXIBLE;
  return !isFlexible && forceInterval && forceAmount;
};
const isTierExpired = tier => {
  return tier?.endsAt && new Date(tier.endsAt) < new Date();
};
const getCollectiveContributionCardsOrder = collective => {
  return lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(collective.settings, TIERS_ORDER_KEY, []);
};
const sortTiers = (baseTiers, orderKeys, hasCustomContribution, hasCryptoContribution) => {
  const tiers = baseTiers.filter(tier => tier.type !== _constants_tiers_types__WEBPACK_IMPORTED_MODULE_8__/* .TierTypes.TICKET */ .x$.TICKET);

  if (hasCustomContribution) {
    tiers.push('custom');
  }

  if (hasCryptoContribution) {
    tiers.push('crypto');
  }

  return lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default()(tiers, tier => {
    const itemKey = tier === 'custom' || tier === _components_contribution_flow_constants__WEBPACK_IMPORTED_MODULE_5__/* .PAYMENT_FLOW.CRYPTO */ .M7.CRYPTO ? tier : tier.id;
    const index = orderKeys.findIndex(key => key === itemKey);
    return index === -1 ? Infinity : index; // put unsorted tiers at the end
  });
};
const sortTiersForCollective = (collective, baseTiers) => {
  const orderKeys = getCollectiveContributionCardsOrder(collective);
  const hasCustomContribution = !lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(collective, 'settings.disableCustomContributions', false);
  const hasCryptoContribution = !lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(collective, 'settings.disableCryptoContributions', true);
  return sortTiers(baseTiers, orderKeys, hasCustomContribution, hasCryptoContribution);
};
const getDefaultInterval = tier => {
  if (!tier?.interval) {
    return _constants_intervals__WEBPACK_IMPORTED_MODULE_7__["default"].oneTime;
  } else if (tier.interval === _constants_intervals__WEBPACK_IMPORTED_MODULE_7__["default"].flexible) {
    return _constants_intervals__WEBPACK_IMPORTED_MODULE_7__["default"].month;
  } else {
    return tier.interval;
  }
};

/***/ }),

/***/ 27490:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82525);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25896);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97079);
/* harmony import */ var _components_CollectiveThemeProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(325);
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73908);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53169);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84842);
/* harmony import */ var _components_tier_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(48694);
/* harmony import */ var _components_tier_page_graphql_queries__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(44791);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ErrorPage__WEBPACK_IMPORTED_MODULE_9__, _components_Page__WEBPACK_IMPORTED_MODULE_11__, _components_tier_page__WEBPACK_IMPORTED_MODULE_12__]);
([_components_ErrorPage__WEBPACK_IMPORTED_MODULE_9__, _components_Page__WEBPACK_IMPORTED_MODULE_11__, _components_tier_page__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















/**
 * The main page to display collectives. Wrap route parameters and GraphQL query
 * to render `components/collective-page` with everything needed.
 */



class TierPage extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  static getInitialProps({
    query: {
      collectiveSlug,
      tierId,
      tierSlug,
      redirect
    }
  }) {
    return {
      collectiveSlug,
      tierId: Number(tierId),
      tierSlug,
      redirect
    };
  }

  componentDidMount() {
    const {
      router,
      tierId,
      tierSlug,
      data
    } = this.props;
    const collective = data?.Tier?.collective;
    (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_6__/* .addParentToURLIfMissing */ .Bc)(router, collective, `/contribute/${tierSlug}-${tierId}`);
  } // See https://github.com/opencollective/opencollective/issues/1872


  shouldComponentUpdate(newProps) {
    if (lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.props, 'data.Tier') && !lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(newProps, 'data.Tier')) {
      return false;
    } else {
      return true;
    }
  }

  getPageMetaData(tier) {
    let canonicalURL;
    const baseMetadata = (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_4__/* .getCollectivePageMetadata */ .Xq)(tier?.collective);

    if (tier && tier.collective) {
      const collective = tier.collective;
      canonicalURL = `${(0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__/* .getWebsiteUrl */ .ls)()}/${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_6__/* .getCollectivePageRoute */ .x0)(collective)}/contribute/${tier.slug}-${tier.id}`;
      return _objectSpread(_objectSpread({}, baseMetadata), {}, {
        title: `${collective.name} - ${tier.name}`,
        description: tier.description || collective.description || collective.longDescription,
        twitterHandle: collective.twitterHandle || lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(collective, 'parentCollective.twitterHandle'),
        canonicalURL
      });
    } else {
      if ([_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_5__/* .CollectiveType.EVENT */ .eV.EVENT, _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_5__/* .CollectiveType.PROJECT */ .eV.PROJECT].includes(this.props.collectiveType)) {
        canonicalURL = `${(0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__/* .getWebsiteUrl */ .ls)()}/${this.props.parentCollectiveSlug}/${this.props.collectiveType}/${this.props.collectiveSlug}/contribute/${this.props.tierSlug}-${this.props.tierId}`;
      } else {
        canonicalURL = `${(0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__/* .getWebsiteUrl */ .ls)()}/${this.props.collectiveSlug}/contribute/${this.props.tierSlug}-${this.props.tierId}`;
      }

      return _objectSpread(_objectSpread({}, baseMetadata), {}, {
        title: 'Tier',
        canonicalURL
      });
    }
  }

  render() {
    const {
      redirect,
      data,
      LoggedInUser
    } = this.props;
    return !data || data.error ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      data: data
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_Page__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, this.getPageMetaData(data.Tier)), {}, {
      children: data.loading || !data.Tier || !data.Tier.collective ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_CollectiveThemeProvider__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        collective: data.Tier.collective,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_tier_page__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          LoggedInUser: LoggedInUser,
          collective: data.Tier.collective,
          tier: data.Tier,
          contributors: data.Tier.contributors,
          contributorsStats: data.Tier.stats.contributors,
          redirect: redirect
        })
      })
    }));
  }

}

const addTierPageData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__.graphql)(_components_tier_page_graphql_queries__WEBPACK_IMPORTED_MODULE_13__/* .tierPageQuery */ .T);
TierPage.__docgenInfo = {
  "description": "The main page to display collectives. Wrap route parameters and GraphQL query\nto render `components/collective-page` with everything needed.",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { collectiveSlug, tierId, tierSlug, redirect } }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getPageMetaData",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "tier",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "TierPage",
  "props": {
    "tierId": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": true
    },
    "collectiveSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "parentCollectiveSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "collectiveType": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "data": {
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
    "tierSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "redirect": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_3__.withRouter)((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_14__/* .withUser */ .ns)(addTierPageData(TierPage))));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDMwIiBoZWlnaHQ9IjE2NyIgdmlld0JveD0iMCAwIDQzMCAxNjciIGZpbGw9Im5vbmUiIAogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zOTcuODYgMTQwLjM3NkM0MTEuOTc5IDE0MS45NDIgNDI0LjY5NCAxMzEuNzY1IDQyNi4yNiAxMTcuNjQ1QzQyNy44MjUgMTAzLjUyNiA0MTcuNjQ4IDkwLjgxMTIgNDAzLjUyOSA4OS4yNDU3QzM4OS40MSA4Ny42ODAyIDM3Ni42OTUgOTcuODU3MSAzNzUuMTI5IDExMS45NzZDMzczLjU2NCAxMjYuMDk2IDM4My43NDEgMTM4LjgxMSAzOTcuODYgMTQwLjM3NloiIGZpbGw9IndoaXRlIi8+CiAgPHBhdGggb3BhY2l0eT0iMC44IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI1MS42ODUgMTA4Ljk1OUMyNTQuODI1IDExMC4zODkgMjU4LjUzIDEwOS4wMDMgMjU5Ljk2IDEwNS44NjNDMjYxLjM4OSAxMDIuNzIzIDI2MC4wMDMgOTkuMDE4NSAyNTYuODYzIDk3LjU4ODhDMjUzLjcyMyA5Ni4xNTkgMjUwLjAxOSA5Ny41NDU0IDI0OC41ODkgMTAwLjY4NUMyNDcuMTU5IDEwMy44MjUgMjQ4LjU0NiAxMDcuNTMgMjUxLjY4NSAxMDguOTU5WiIgZmlsbD0id2hpdGUiLz4KICA8cGF0aCBvcGFjaXR5PSIwLjQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjg5LjI3NSA4OC40OTc2QzI5MS42MzcgODkuNTcyNyAyOTQuNDIyIDg4LjUzMDIgMjk1LjQ5OCA4Ni4xNjg5QzI5Ni41NzMgODMuODA3NyAyOTUuNTMgODEuMDIxOSAyOTMuMTY5IDc5Ljk0NjhDMjkwLjgwOCA3OC44NzE2IDI4OC4wMjIgNzkuOTE0MiAyODYuOTQ3IDgyLjI3NTRDMjg1Ljg3MiA4NC42MzY2IDI4Ni45MTQgODcuNDIyNCAyODkuMjc1IDg4LjQ5NzZaIiBmaWxsPSJ3aGl0ZSIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC4yNzUzNyA2OS40OTc2QzYuNjM2NiA3MC41NzI3IDkuNDIyMzUgNjkuNTMwMiAxMC40OTc1IDY3LjE2ODlDMTEuNTcyNyA2NC44MDc3IDEwLjUzMDIgNjIuMDIxOSA4LjE2ODk0IDYwLjk0NjhDNS44MDc3MSA1OS44NzE2IDMuMDIxOTUgNjAuOTE0MiAxLjk0Njc3IDYzLjI3NTRDMC44NzE1OTEgNjUuNjM2NiAxLjkxNDE0IDY4LjQyMjQgNC4yNzUzNyA2OS40OTc2WiIgZmlsbD0id2hpdGUiLz4KICA8cGF0aCBvcGFjaXR5PSIwLjYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjEyLjc0NiA4Mi45MzAzQzIxOC4xMjkgODUuMzgxMyAyMjQuNDc5IDgzLjAwNDYgMjI2LjkzIDc3LjYyMkMyMjkuMzgxIDcyLjIzOTMgMjI3LjAwNSA2NS44ODg4IDIyMS42MjIgNjMuNDM3OUMyMTYuMjM5IDYwLjk4NjkgMjA5Ljg4OSA2My4zNjM1IDIwNy40MzggNjguNzQ2MkMyMDQuOTg3IDc0LjEyODkgMjA3LjM2NCA4MC40Nzk0IDIxMi43NDYgODIuOTMwM1oiIGZpbGw9IndoaXRlIi8+CiAgPHBhdGggb3BhY2l0eT0iMC42IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTY3Ljc0NjQgODEuOTMwM0M3My4xMjkgODQuMzgxMyA3OS40Nzk1IDgyLjAwNDcgODEuOTMwNCA3Ni42MjJDODQuMzgxNCA3MS4yMzkzIDgyLjAwNDggNjQuODg4OCA3Ni42MjIyIDYyLjQzNzlDNzEuMjM5NSA1OS45ODY5IDY0Ljg4OTEgNjIuMzYzNSA2Mi40MzgxIDY3Ljc0NjJDNTkuOTg3MSA3My4xMjg5IDYyLjM2MzcgNzkuNDc5NCA2Ny43NDY0IDgxLjkzMDNaIiBmaWxsPSJ3aGl0ZSIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYzLjI0NCA4NS44ODM5QzE3Mi4yMTUgODkuOTY4OSAxODIuNzk5IDg2LjAwNzggMTg2Ljg4NCA3Ny4wMzY3QzE5MC45NjkgNjguMDY1NSAxODcuMDA4IDU3LjQ4MTQgMTc4LjAzNyA1My4zOTY1QzE2OS4wNjYgNDkuMzExNSAxNTguNDgxIDUzLjI3MjYgMTU0LjM5NiA2Mi4yNDM3QzE1MC4zMTIgNzEuMjE0OSAxNTQuMjczIDgxLjc5OSAxNjMuMjQ0IDg1Ljg4MzlaIiBmaWxsPSJ3aGl0ZSIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzU5LjkxNSAxMjYuNTQyQzM0Mi44MDYgMTMzLjEzNCAzMjMuNTkzIDEyNC42MDkgMzE3IDEwNy41QzMxMC40MDggOTAuMzkxMyAzMTguOTM0IDcxLjE3NzkgMzM2LjA0MiA2NC41ODU4QzM1My4xNTEgNTcuOTkzNiAzNzIuMzY0IDY2LjUxOSAzNzguOTU3IDgzLjYyNzdDMzg1LjU0OSAxMDAuNzM2IDM3Ny4wMjMgMTE5Ljk1IDM1OS45MTUgMTI2LjU0MloiIGZpbGw9IndoaXRlIi8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMDkuMTA3IDEyNi4wOTJDMTE3LjQ1IDEyOS44OTEgMTI3LjI5NCAxMjYuMjA3IDEzMS4wOTMgMTE3Ljg2NEMxMzQuODkyIDEwOS41MjEgMTMxLjIwOCA5OS42Nzc4IDEyMi44NjUgOTUuODc4OEMxMTQuNTIxIDkyLjA3OTcgMTA0LjY3OCA5NS43NjM1IDEwMC44NzkgMTA0LjEwN0M5Ny4wODAxIDExMi40NSAxMDAuNzY0IDEyMi4yOTMgMTA5LjEwNyAxMjYuMDkyWiIgZmlsbD0id2hpdGUiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI1MS4xNzcgNjEuODIwMUMyNjUuMDgzIDY4LjE1MTggMjgxLjQ4OCA2Mi4wMTIyIDI4Ny44MiA0OC4xMDY5QzI5NC4xNTEgMzQuMjAxNiAyODguMDEyIDE3Ljc5NjMgMjc0LjEwNiAxMS40NjQ2QzI2MC4yMDEgNS4xMzI4NiAyNDMuNzk2IDExLjI3MjUgMjM3LjQ2NCAyNS4xNzc4QzIzMS4xMzIgMzkuMDgzMSAyMzcuMjcyIDU1LjQ4ODQgMjUxLjE3NyA2MS44MjAxWiIgZmlsbD0id2hpdGUiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIyNi4xNzcgMTU0LjgyQzI0MC4wODMgMTYxLjE1MiAyNTYuNDg4IDE1NS4wMTIgMjYyLjgyIDE0MS4xMDdDMjY5LjE1MSAxMjcuMjAyIDI2My4wMTIgMTEwLjc5NiAyNDkuMTA2IDEwNC40NjVDMjM1LjIwMSA5OC4xMzI5IDIxOC43OTYgMTA0LjI3MiAyMTIuNDY0IDExOC4xNzhDMjA2LjEzMiAxMzIuMDgzIDIxMi4yNzIgMTQ4LjQ4OCAyMjYuMTc3IDE1NC44MloiIGZpbGw9IndoaXRlIi8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MC41ODk5IDc2LjY0NDlDNTAuODU2OSA4MS4zMiA2Mi45Njk4IDc2Ljc4NjggNjcuNjQ0OCA2Ni41MTk4QzcyLjMxOTkgNTYuMjUyOCA2Ny43ODY3IDQ0LjEzOTkgNTcuNTE5NyAzOS40NjQ5QzQ3LjI1MjcgMzQuNzg5OCAzNS4xMzk4IDM5LjMyMyAzMC40NjQ4IDQ5LjU5QzI1Ljc4OTggNTkuODU3IDMwLjMyMyA3MS45Njk5IDQwLjU4OTkgNzYuNjQ0OVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");

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

/***/ 93426:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/VideoPlus");

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

/***/ 64934:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/PencilAlt");

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

/***/ 8866:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/University");

/***/ }),

/***/ 56758:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/AlertTriangle");

/***/ }),

/***/ 74494:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ArrowDownCircle");

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

/***/ 11479:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Clipboard");

/***/ }),

/***/ 57847:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Download");

/***/ }),

/***/ 94526:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Facebook");

/***/ }),

/***/ 40710:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/FileText");

/***/ }),

/***/ 57153:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Info");

/***/ }),

/***/ 203:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Linkedin");

/***/ }),

/***/ 71362:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Mail");

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

/***/ 71593:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Twitter");

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

/***/ 604:
/***/ ((module) => {

module.exports = require("lodash/min");

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

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 80551:
/***/ ((module) => {

module.exports = require("react-window");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,5152,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,9156,7262,1433,1808,1012,2631,7619,7632,2143,986,242,3129,8185,5993,7965,9468,7772,8208,2027], () => (__webpack_exec__(27490)));
module.exports = __webpack_exports__;

})();