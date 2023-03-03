"use strict";
exports.id = 4128;
exports.ids = [4128];
exports.modules = {

/***/ 60857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97274);



const StyledInputSlider = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_StyledInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP).attrs({
  type: 'range'
}).withConfig({
  displayName: "StyledInputSlider",
  componentId: "sc-1bv6nap-0"
})(["-webkit-appearance:none;padding:0;font:inherit;outline:none;box-sizing:border-box;cursor:pointer;border-radius:8px;height:4px;", ""], props => {
  const color = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(props.theme, `colors.${props.color}`) || props.color;
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["@media screen and (-webkit-min-device-pixel-ratio:0){&::-webkit-slider-thumb{border-radius:100%;height:14px;width:14px;}&::-moz-range-thumb{border-radius:100%;height:14px;width:14px;}&::-ms-fill-lower{border-radius:100%;height:14px;width:14px;}}&:not(:disabled){@media screen and (-webkit-min-device-pixel-ratio:0){&::-webkit-slider-thumb{-webkit-appearance:none;background:", ";border:1px solid ", ";}}&::-moz-range-thumb{background-color:", ";border:1px solid ", ";}&::-ms-fill-lower{background-color:", ";border:1px solid ", ";}}"], color, color, color, color, color, color);
});
StyledInputSlider.defaultProps = {
  color: 'primary.600',
  backgroundColor: 'black.200'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledInputSlider);

/***/ }),

/***/ 44128:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24298);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59591);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_icons_boxicons_regular_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2882);
/* harmony import */ var _styled_icons_boxicons_regular_Image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_Image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_icons_fa_solid_AngleDoubleDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43049);
/* harmony import */ var _styled_icons_fa_solid_AngleDoubleDown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_AngleDoubleDown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56358);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_easy_crop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6335);
/* harmony import */ var react_easy_crop__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_easy_crop__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65985);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(12136);
/* harmony import */ var _lib_hooks_useElementSize__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(34897);
/* harmony import */ var _lib_react_utils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(75993);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(69078);
/* harmony import */ var _ContainerOverlay__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3798);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(87268);
/* harmony import */ var _StyledDropzone__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(37070);
/* harmony import */ var _StyledInputSlider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(60857);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(71792);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(31330);
/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(8914);
/* harmony import */ var _HeroBackground__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(90165);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledDropzone__WEBPACK_IMPORTED_MODULE_18__, _ToastProvider__WEBPACK_IMPORTED_MODULE_22__]);
([_StyledDropzone__WEBPACK_IMPORTED_MODULE_18__, _ToastProvider__WEBPACK_IMPORTED_MODULE_22__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























const KEY_IMG_REMOVE = '__REMOVE__';
const BUTTONS_PROPS = {
  buttonSize: 'small',
  py: 1,
  my: 1,
  mx: 2,
  width: ['100%', 'auto']
};
const EmptyDropzoneContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "HeroBackgroundCropperModal__EmptyDropzoneContainer",
  componentId: "sc-1d8ptos-0"
})(["border:2px dashed #c3c6cb;cursor:pointer;box-sizing:border-box;border-radius:4px;height:122px;text-align:center;background:white;display:flex;justify-content:center;align-items:center;&:hover:not(:disabled){background:#f9f9f9;border-color:", ";}&:focus{outline:0;border-color:", ";}"], props => props.theme.colors.primary[300], props => props.theme.colors.primary[500]);

const HeroBackgroundCropperModal = ({
  onClose,
  collective
}) => {
  const [isSubmitting, setSubmitting] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false); // Not using Apollo to have a common flag with file upload

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__.useIntl)();
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_22__/* .useToasts */ .e1)();
  const [editBackground] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(_graphql_mutations__WEBPACK_IMPORTED_MODULE_23__/* .editCollectiveBackgroundMutation */ .J7);
  const containerSize = (0,_lib_hooks_useElementSize__WEBPACK_IMPORTED_MODULE_13__/* .useElementSize */ .h)({
    defaultWidth: 600
  });
  const [mediaSize, setMediaSize] = react__WEBPACK_IMPORTED_MODULE_4___default().useState();
  const [crop, onCropChange] = react__WEBPACK_IMPORTED_MODULE_4___default().useState((0,_HeroBackground__WEBPACK_IMPORTED_MODULE_24__/* .getCrop */ .EH)(collective));
  const [zoom, onZoomChange] = react__WEBPACK_IMPORTED_MODULE_4___default().useState((0,_HeroBackground__WEBPACK_IMPORTED_MODULE_24__/* .getZoom */ .aB)(collective));
  const [isAlignedRight, setAlignedRight] = react__WEBPACK_IMPORTED_MODULE_4___default().useState((0,_HeroBackground__WEBPACK_IMPORTED_MODULE_24__/* .getAlignedRight */ .bV)(collective));
  const [uploadedImage, setUploadedImage] = react__WEBPACK_IMPORTED_MODULE_4___default().useState();
  const scale = containerSize.width / _HeroBackground__WEBPACK_IMPORTED_MODULE_24__/* .BASE_HERO_WIDTH */ .DA;
  const transform = scale ? `scale(${scale})` : undefined;
  const minZoom = 0.25;
  const maxZoom = 5;
  const hasImage = Boolean(collective.backgroundImage ? uploadedImage !== KEY_IMG_REMOVE : uploadedImage);

  const onDrop = ([file]) => {
    onZoomChange(1);
    onCropChange(_HeroBackground__WEBPACK_IMPORTED_MODULE_24__/* .DEFAULT_BACKGROUND_CROP */ ["in"]);
    setAlignedRight(true);
    setUploadedImage(Object.assign(file, {
      preview: URL.createObjectURL(file)
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .ZP, {
    onClose: onClose,
    ignoreEscapeKey: true,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_20__/* .ModalHeader */ .xB, {
      mb: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_Text__WEBPACK_IMPORTED_MODULE_21__/* .Span */ .Dr, {
        fontSize: "20px",
        fontWeight: "500",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
          id: "b4iDeN",
          defaultMessage: [{
            "type": 0,
            "value": "Add cover image"
          }]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((react_dropzone__WEBPACK_IMPORTED_MODULE_8___default()), {
      onDrop: onDrop,
      multiple: false,
      accept: _StyledDropzone__WEBPACK_IMPORTED_MODULE_18__/* .DROPZONE_ACCEPT_IMAGES */ .Gw,
      children: ({
        isDragActive,
        isDragAccept,
        getRootProps,
        getInputProps,
        open
      }) => {
        const rootProps = getRootProps();
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_20__/* .ModalBody */ .fe, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
              position: "relative",
              width: "510px",
              maxWidth: "100%",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, _objectSpread(_objectSpread({
                position: "relative",
                height: _HeroBackground__WEBPACK_IMPORTED_MODULE_24__/* .BASE_HERO_HEIGHT */ .on * scale
              }, getRootProps()), {}, {
                ref: (0,_lib_react_utils__WEBPACK_IMPORTED_MODULE_26__/* .mergeRefs */ .l)([containerSize.ref, rootProps.ref]),
                onClick: hasImage ? null : rootProps.onClick // Invalidate click event if there's already an image
                ,
                children: [isDragActive && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_ContainerOverlay__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                  children: isDragAccept ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Box */ .xu, {
                      mb: 2,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_styled_icons_fa_solid_AngleDoubleDown__WEBPACK_IMPORTED_MODULE_7__.AngleDoubleDown, {
                        size: "32px"
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                      id: "uploadImage.isDragActive",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Drop it like it's hot 🔥"
                      }]
                    })]
                  }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                    id: "uploadImage.isDragReject",
                    defaultMessage: [{
                      "type": 0,
                      "value": "🚫 This file type is not accepted"
                    }]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx("input", _objectSpread({
                  "data-cy": "heroBackgroundDropzone"
                }, getInputProps())), hasImage ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_StyledContainer, {
                  position: "absolute",
                  width: _HeroBackground__WEBPACK_IMPORTED_MODULE_24__/* .BASE_HERO_WIDTH */ .DA,
                  height: _HeroBackground__WEBPACK_IMPORTED_MODULE_24__/* .BASE_HERO_HEIGHT */ .on,
                  left: 0,
                  top: 0,
                  border: "1px solid grey",
                  $_css: transform,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_HeroBackground__WEBPACK_IMPORTED_MODULE_24__/* .StyledHeroBackground */ .XH, {
                    "data-cy": "collective-background-image-styledBackground",
                    backgroundImage: collective.backgroundImageUrl,
                    isAlignedRight: isAlignedRight,
                    isEditing: hasImage,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((react_easy_crop__WEBPACK_IMPORTED_MODULE_9___default()), {
                      image: uploadedImage ? uploadedImage.preview : collective.backgroundImageUrl,
                      cropSize: {
                        width: _HeroBackground__WEBPACK_IMPORTED_MODULE_24__/* .BASE_HERO_WIDTH */ .DA,
                        height: _HeroBackground__WEBPACK_IMPORTED_MODULE_24__/* .BASE_HERO_HEIGHT */ .on
                      },
                      crop: crop,
                      zoom: zoom,
                      minZoom: minZoom,
                      maxZoom: maxZoom,
                      zoomSpeed: 0.5,
                      restrictPosition: false,
                      onCropChange: onCropChange,
                      onZoomChange: onZoomChange,
                      onMediaLoaded: mediaSize => setMediaSize({
                        width: mediaSize.naturalWidth,
                        height: mediaSize.naturalHeight
                      }),
                      style: {
                        imageStyle: {
                          minHeight: '0',
                          minWidth: '0',
                          maxHeight: 'none',
                          maxWidth: 'none'
                        },
                        containerStyle: {
                          cursor: hasImage ? 'move' : 'auto'
                        }
                      }
                    })
                  })
                }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(EmptyDropzoneContainer, {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_Container__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    maxWidth: 268,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                      id: "IxEr/J",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Drag and drop your image or "
                      }, {
                        "type": 8,
                        "value": "Link",
                        "children": [{
                          "type": 0,
                          "value": "click here"
                        }]
                      }, {
                        "type": 0,
                        "value": " to select it."
                      }],
                      values: {
                        Link: msg => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_Text__WEBPACK_IMPORTED_MODULE_21__/* .Span */ .Dr, {
                          color: "blue.500",
                          children: msg
                        })
                      }
                    })
                  })
                })]
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
                alignItems: "center",
                justifyContent: "center",
                mt: 3,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_styled_icons_boxicons_regular_Image__WEBPACK_IMPORTED_MODULE_6__.Image, {
                  size: 14,
                  color: "#75777A"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_StyledInputSlider__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                  min: minZoom,
                  max: maxZoom,
                  value: zoom,
                  step: "0.01",
                  onChange: e => onZoomChange(e.target.value),
                  mx: 2,
                  width: "200px",
                  disabled: !hasImage
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_styled_icons_boxicons_regular_Image__WEBPACK_IMPORTED_MODULE_6__.Image, {
                  size: 22,
                  color: "#75777A"
                })]
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_20__/* .ModalFooter */ .mz, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
              justifyContent: "space-between",
              flexWrap: "wrap",
              my: 1,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
                flexWrap: "wrap",
                width: ['100%', 'auto'],
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, BUTTONS_PROPS), {}, {
                  buttonStyle: "primary",
                  "data-cy": "heroBackgroundDropzoneSave",
                  py: 1,
                  minWidth: 75,
                  loading: isSubmitting,
                  onClick: async () => {
                    setSubmitting(true); // We intentionally use the raw image URL rather than image service here
                    // because the `backgroundImage` column is not supposed to store the
                    // images service address

                    let imgURL = collective.backgroundImage;

                    try {
                      // Upload image if changed or remove it
                      if (uploadedImage === KEY_IMG_REMOVE) {
                        imgURL = null;
                      } else if (uploadedImage) {
                        imgURL = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_11__/* .upload */ .ws)(uploadedImage, 'ACCOUNT_BANNER');
                      }
                    } catch (e) {
                      const error = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_12__/* .getErrorFromXhrUpload */ .wY)(e);
                      addToast({
                        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_22__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                        message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_12__/* .formatErrorMessage */ .jN)(intl, error)
                      });
                      return;
                    } finally {
                      setSubmitting(false);
                    } // Update settings


                    try {
                      const result = await editBackground({
                        variables: {
                          id: collective.id,
                          backgroundImage: imgURL,
                          settings: lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(collective.settings), 'collectivePage.background', {
                            crop,
                            zoom,
                            mediaSize,
                            isAlignedRight
                          })
                        }
                      }); // Reset

                      const base = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(result, 'data.editCollective.settings.collectivePage.background');

                      onCropChange(base && base.crop || _HeroBackground__WEBPACK_IMPORTED_MODULE_24__/* .DEFAULT_BACKGROUND_CROP */ ["in"]);
                      onZoomChange(base && base.zoom || 1);
                      setUploadedImage(null); // Show a toast and close the modal

                      addToast({
                        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_22__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
                        title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                          id: "+cQ6YM",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Cover updated"
                          }]
                        }),
                        message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                          id: "QaaW8s",
                          defaultMessage: [{
                            "type": 0,
                            "value": "The page might take a few seconds to fully update"
                          }]
                        })
                      });
                      onClose();
                    } catch (e) {
                      addToast({
                        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_22__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                        message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_12__/* .i18nGraphqlException */ .t2)(intl, e)
                      });
                    } finally {
                      setSubmitting(false);
                    }
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                    id: "save",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Save"
                    }]
                  })
                })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, BUTTONS_PROPS), {}, {
                  disabled: !hasImage || isSubmitting,
                  onClick: () => {
                    onCropChange(_HeroBackground__WEBPACK_IMPORTED_MODULE_24__/* .DEFAULT_BACKGROUND_CROP */ ["in"]);
                    onZoomChange(1);
                    setUploadedImage(KEY_IMG_REMOVE);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                    id: "Reset",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Reset"
                    }]
                  })
                }))]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, BUTTONS_PROPS), {}, {
                onClick: open,
                disabled: isSubmitting,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                  id: "v4BgXt",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Upload new image"
                  }]
                })
              }))]
            })
          })]
        });
      }
    })]
  });
};

HeroBackgroundCropperModal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "HeroBackgroundCropperModal",
  "props": {
    "onClose": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "number",
            "required": true
          },
          "backgroundImage": {
            "name": "string",
            "required": true
          },
          "backgroundImageUrl": {
            "name": "string",
            "required": true
          },
          "settings": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroBackgroundCropperModal);

var _StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Container__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z).withConfig({
  displayName: "HeroBackgroundCropperModal___StyledContainer",
  componentId: "sc-1d8ptos-1"
})(p => ({
  transform: p.$_css,
  transformOrigin: 'top left'
}));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useElementSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const useElementSize = ({
  defaultWidth = 0,
  defaultHeight = 0
}) => {
  const ref = react__WEBPACK_IMPORTED_MODULE_0___default().useRef();
  const [elementSize, setElementSize] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
    width: defaultWidth,
    height: defaultHeight
  });
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      const {
        width,
        height
      } = entries[0].contentRect;
      setElementSize({
        width,
        height
      });
    });
    resizeObserver.observe(ref.current);
    return () => resizeObserver.disconnect();
  }, []);
  return _objectSpread({
    ref
  }, elementSize);
};

/***/ })

};
;