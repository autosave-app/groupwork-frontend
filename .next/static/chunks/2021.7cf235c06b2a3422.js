"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2021],{

/***/ 62021:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ hero_HeroBackgroundCropperModal; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(36968);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(50361);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__(46829);
// EXTERNAL MODULE: ./node_modules/@styled-icons/boxicons-regular/Image/Image.esm.js
var Image_esm = __webpack_require__(30610);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-solid/AngleDoubleDown/AngleDoubleDown.esm.js
var AngleDoubleDown_esm = __webpack_require__(89225);
// EXTERNAL MODULE: ./node_modules/react-dropzone/dist/es/index.js + 5 modules
var es = __webpack_require__(55162);
// EXTERNAL MODULE: ./node_modules/react-easy-crop/index.module.js + 1 modules
var index_module = __webpack_require__(83913);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(65985);
// EXTERNAL MODULE: ./lib/errors/index.js + 1 modules
var errors = __webpack_require__(12136);
;// CONCATENATED MODULE: ./lib/hooks/useElementSize.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var useElementSize = function useElementSize(_ref) {
  var _ref$defaultWidth = _ref.defaultWidth,
      defaultWidth = _ref$defaultWidth === void 0 ? 0 : _ref$defaultWidth,
      _ref$defaultHeight = _ref.defaultHeight,
      defaultHeight = _ref$defaultHeight === void 0 ? 0 : _ref$defaultHeight;
  var ref = react.useRef();

  var _React$useState = react.useState({
    width: defaultWidth,
    height: defaultHeight
  }),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      elementSize = _React$useState2[0],
      setElementSize = _React$useState2[1];

  react.useEffect(function () {
    var resizeObserver = new ResizeObserver(function (entries) {
      var _entries$0$contentRec = entries[0].contentRect,
          width = _entries$0$contentRec.width,
          height = _entries$0$contentRec.height;
      setElementSize({
        width: width,
        height: height
      });
    });
    resizeObserver.observe(ref.current);
    return function () {
      return resizeObserver.disconnect();
    };
  }, []);
  return _objectSpread({
    ref: ref
  }, elementSize);
};
// EXTERNAL MODULE: ./lib/react-utils.js
var react_utils = __webpack_require__(75993);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/ContainerOverlay.js
var ContainerOverlay = __webpack_require__(3798);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledDropzone.js
var StyledDropzone = __webpack_require__(37070);
// EXTERNAL MODULE: ./components/StyledInput.tsx
var StyledInput = __webpack_require__(97274);
;// CONCATENATED MODULE: ./components/StyledInputSlider.js



var StyledInputSlider = (0,styled_components_browser_esm/* default */.ZP)(StyledInput/* default */.ZP).attrs({
  type: 'range'
}).withConfig({
  displayName: "StyledInputSlider",
  componentId: "sc-1bv6nap-0"
})(["-webkit-appearance:none;padding:0;font:inherit;outline:none;box-sizing:border-box;cursor:pointer;border-radius:8px;height:4px;", ""], function (props) {
  var color = get_default()(props.theme, "colors.".concat(props.color)) || props.color;
  return (0,styled_components_browser_esm/* css */.iv)(["@media screen and (-webkit-min-device-pixel-ratio:0){&::-webkit-slider-thumb{border-radius:100%;height:14px;width:14px;}&::-moz-range-thumb{border-radius:100%;height:14px;width:14px;}&::-ms-fill-lower{border-radius:100%;height:14px;width:14px;}}&:not(:disabled){@media screen and (-webkit-min-device-pixel-ratio:0){&::-webkit-slider-thumb{-webkit-appearance:none;background:", ";border:1px solid ", ";}}&::-moz-range-thumb{background-color:", ";border:1px solid ", ";}&::-ms-fill-lower{background-color:", ";border:1px solid ", ";}}"], color, color, color, color, color, color);
});
StyledInputSlider.defaultProps = {
  color: 'primary.600',
  backgroundColor: 'black.200'
};
/* harmony default export */ var components_StyledInputSlider = (StyledInputSlider);
// EXTERNAL MODULE: ./components/StyledModal.tsx
var StyledModal = __webpack_require__(71792);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/ToastProvider.tsx
var ToastProvider = __webpack_require__(31330);
// EXTERNAL MODULE: ./components/collective-page/graphql/mutations.js
var mutations = __webpack_require__(8914);
// EXTERNAL MODULE: ./components/collective-page/hero/HeroBackground.js + 1 modules
var HeroBackground = __webpack_require__(73049);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/collective-page/hero/HeroBackgroundCropperModal.js









function HeroBackgroundCropperModal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function HeroBackgroundCropperModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? HeroBackgroundCropperModal_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : HeroBackgroundCropperModal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


























var KEY_IMG_REMOVE = '__REMOVE__';
var BUTTONS_PROPS = {
  buttonSize: 'small',
  py: 1,
  my: 1,
  mx: 2,
  width: ['100%', 'auto']
};
var EmptyDropzoneContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "HeroBackgroundCropperModal__EmptyDropzoneContainer",
  componentId: "sc-1d8ptos-0"
})(["border:2px dashed #c3c6cb;cursor:pointer;box-sizing:border-box;border-radius:4px;height:122px;text-align:center;background:white;display:flex;justify-content:center;align-items:center;&:hover:not(:disabled){background:#f9f9f9;border-color:", ";}&:focus{outline:0;border-color:", ";}"], function (props) {
  return props.theme.colors.primary[300];
}, function (props) {
  return props.theme.colors.primary[500];
});

var HeroBackgroundCropperModal = function HeroBackgroundCropperModal(_ref) {
  var onClose = _ref.onClose,
      collective = _ref.collective;

  var _React$useState = react.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      isSubmitting = _React$useState2[0],
      setSubmitting = _React$useState2[1]; // Not using Apollo to have a common flag with file upload


  var intl = (0,useIntl/* default */.Z)();

  var _useToasts = (0,ToastProvider/* useToasts */.e1)(),
      addToast = _useToasts.addToast;

  var _useMutation = (0,client.useMutation)(mutations/* editCollectiveBackgroundMutation */.J7),
      _useMutation2 = slicedToArray_default()(_useMutation, 1),
      editBackground = _useMutation2[0];

  var containerSize = useElementSize({
    defaultWidth: 600
  });

  var _React$useState3 = react.useState(),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      mediaSize = _React$useState4[0],
      setMediaSize = _React$useState4[1];

  var _React$useState5 = react.useState((0,HeroBackground/* getCrop */.EH)(collective)),
      _React$useState6 = slicedToArray_default()(_React$useState5, 2),
      crop = _React$useState6[0],
      onCropChange = _React$useState6[1];

  var _React$useState7 = react.useState((0,HeroBackground/* getZoom */.aB)(collective)),
      _React$useState8 = slicedToArray_default()(_React$useState7, 2),
      zoom = _React$useState8[0],
      onZoomChange = _React$useState8[1];

  var _React$useState9 = react.useState((0,HeroBackground/* getAlignedRight */.bV)(collective)),
      _React$useState10 = slicedToArray_default()(_React$useState9, 2),
      isAlignedRight = _React$useState10[0],
      setAlignedRight = _React$useState10[1];

  var _React$useState11 = react.useState(),
      _React$useState12 = slicedToArray_default()(_React$useState11, 2),
      uploadedImage = _React$useState12[0],
      setUploadedImage = _React$useState12[1];

  var scale = containerSize.width / HeroBackground/* BASE_HERO_WIDTH */.DA;
  var transform = scale ? "scale(".concat(scale, ")") : undefined;
  var minZoom = 0.25;
  var maxZoom = 5;
  var hasImage = Boolean(collective.backgroundImage ? uploadedImage !== KEY_IMG_REMOVE : uploadedImage);

  var onDrop = function onDrop(_ref2) {
    var _ref3 = slicedToArray_default()(_ref2, 1),
        file = _ref3[0];

    onZoomChange(1);
    onCropChange(HeroBackground/* DEFAULT_BACKGROUND_CROP */["in"]);
    setAlignedRight(true);
    setUploadedImage(Object.assign(file, {
      preview: URL.createObjectURL(file)
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledModal/* default */.ZP, {
    onClose: onClose,
    ignoreEscapeKey: true,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalHeader */.xB, {
      mb: 3,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
        fontSize: "20px",
        fontWeight: "500",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "b4iDeN",
          defaultMessage: [{
            "type": 0,
            "value": "Add cover image"
          }]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(es["default"], {
      onDrop: onDrop,
      multiple: false,
      accept: StyledDropzone/* DROPZONE_ACCEPT_IMAGES */.Gw,
      children: function children(_ref4) {
        var isDragActive = _ref4.isDragActive,
            isDragAccept = _ref4.isDragAccept,
            getRootProps = _ref4.getRootProps,
            getInputProps = _ref4.getInputProps,
            open = _ref4.open;
        var rootProps = getRootProps();
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalBody */.fe, {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
              position: "relative",
              width: "510px",
              maxWidth: "100%",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, HeroBackgroundCropperModal_objectSpread(HeroBackgroundCropperModal_objectSpread({
                position: "relative",
                height: HeroBackground/* BASE_HERO_HEIGHT */.on * scale
              }, getRootProps()), {}, {
                ref: (0,react_utils/* mergeRefs */.l)([containerSize.ref, rootProps.ref]),
                onClick: hasImage ? null : rootProps.onClick // Invalidate click event if there's already an image
                ,
                children: [isDragActive && /*#__PURE__*/(0,jsx_runtime.jsx)(ContainerOverlay/* default */.Z, {
                  children: isDragAccept ? /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                      mb: 2,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(AngleDoubleDown_esm/* AngleDoubleDown */.Q, {
                        size: "32px"
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "uploadImage.isDragActive",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Drop it like it's hot 🔥"
                      }]
                    })]
                  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "uploadImage.isDragReject",
                    defaultMessage: [{
                      "type": 0,
                      "value": "🚫 This file type is not accepted"
                    }]
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("input", HeroBackgroundCropperModal_objectSpread({
                  "data-cy": "heroBackgroundDropzone"
                }, getInputProps())), hasImage ? /*#__PURE__*/(0,jsx_runtime.jsx)(_StyledContainer, {
                  position: "absolute",
                  width: HeroBackground/* BASE_HERO_WIDTH */.DA,
                  height: HeroBackground/* BASE_HERO_HEIGHT */.on,
                  left: 0,
                  top: 0,
                  border: "1px solid grey",
                  $_css: transform,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(HeroBackground/* StyledHeroBackground */.XH, {
                    "data-cy": "collective-background-image-styledBackground",
                    backgroundImage: collective.backgroundImageUrl,
                    isAlignedRight: isAlignedRight,
                    isEditing: hasImage,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_module/* default */.ZP, {
                      image: uploadedImage ? uploadedImage.preview : collective.backgroundImageUrl,
                      cropSize: {
                        width: HeroBackground/* BASE_HERO_WIDTH */.DA,
                        height: HeroBackground/* BASE_HERO_HEIGHT */.on
                      },
                      crop: crop,
                      zoom: zoom,
                      minZoom: minZoom,
                      maxZoom: maxZoom,
                      zoomSpeed: 0.5,
                      restrictPosition: false,
                      onCropChange: onCropChange,
                      onZoomChange: onZoomChange,
                      onMediaLoaded: function onMediaLoaded(mediaSize) {
                        return setMediaSize({
                          width: mediaSize.naturalWidth,
                          height: mediaSize.naturalHeight
                        });
                      },
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
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)(EmptyDropzoneContainer, {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
                    maxWidth: 268,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
                        Link: function Link(msg) {
                          return /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                            color: "blue.500",
                            children: msg
                          });
                        }
                      }
                    })
                  })
                })]
              })), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                alignItems: "center",
                justifyContent: "center",
                mt: 3,
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Image_esm/* Image */.E, {
                  size: 14,
                  color: "#75777A"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_StyledInputSlider, {
                  min: minZoom,
                  max: maxZoom,
                  value: zoom,
                  step: "0.01",
                  onChange: function onChange(e) {
                    return onZoomChange(e.target.value);
                  },
                  mx: 2,
                  width: "200px",
                  disabled: !hasImage
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Image_esm/* Image */.E, {
                  size: 22,
                  color: "#75777A"
                })]
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalFooter */.mz, {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              justifyContent: "space-between",
              flexWrap: "wrap",
              my: 1,
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                flexWrap: "wrap",
                width: ['100%', 'auto'],
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, HeroBackgroundCropperModal_objectSpread(HeroBackgroundCropperModal_objectSpread({}, BUTTONS_PROPS), {}, {
                  buttonStyle: "primary",
                  "data-cy": "heroBackgroundDropzoneSave",
                  py: 1,
                  minWidth: 75,
                  loading: isSubmitting,
                  onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
                    var imgURL, error, result, base;
                    return regenerator_default().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            setSubmitting(true); // We intentionally use the raw image URL rather than image service here
                            // because the `backgroundImage` column is not supposed to store the
                            // images service address

                            imgURL = collective.backgroundImage;
                            _context.prev = 2;

                            if (!(uploadedImage === KEY_IMG_REMOVE)) {
                              _context.next = 7;
                              break;
                            }

                            imgURL = null;
                            _context.next = 11;
                            break;

                          case 7:
                            if (!uploadedImage) {
                              _context.next = 11;
                              break;
                            }

                            _context.next = 10;
                            return (0,api/* upload */.ws)(uploadedImage, 'ACCOUNT_BANNER');

                          case 10:
                            imgURL = _context.sent;

                          case 11:
                            _context.next = 18;
                            break;

                          case 13:
                            _context.prev = 13;
                            _context.t0 = _context["catch"](2);
                            error = (0,errors/* getErrorFromXhrUpload */.wY)(_context.t0);
                            addToast({
                              type: ToastProvider/* TOAST_TYPE.ERROR */["do"].ERROR,
                              message: (0,errors/* formatErrorMessage */.jN)(intl, error)
                            });
                            return _context.abrupt("return");

                          case 18:
                            _context.prev = 18;
                            setSubmitting(false);
                            return _context.finish(18);

                          case 21:
                            _context.prev = 21;
                            _context.next = 24;
                            return editBackground({
                              variables: {
                                id: collective.id,
                                backgroundImage: imgURL,
                                settings: set_default()(cloneDeep_default()(collective.settings), 'collectivePage.background', {
                                  crop: crop,
                                  zoom: zoom,
                                  mediaSize: mediaSize,
                                  isAlignedRight: isAlignedRight
                                })
                              }
                            });

                          case 24:
                            result = _context.sent;
                            // Reset
                            base = get_default()(result, 'data.editCollective.settings.collectivePage.background');
                            onCropChange(base && base.crop || HeroBackground/* DEFAULT_BACKGROUND_CROP */["in"]);
                            onZoomChange(base && base.zoom || 1);
                            setUploadedImage(null); // Show a toast and close the modal

                            addToast({
                              type: ToastProvider/* TOAST_TYPE.SUCCESS */["do"].SUCCESS,
                              title: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                                id: "+cQ6YM",
                                defaultMessage: [{
                                  "type": 0,
                                  "value": "Cover updated"
                                }]
                              }),
                              message: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                                id: "QaaW8s",
                                defaultMessage: [{
                                  "type": 0,
                                  "value": "The page might take a few seconds to fully update"
                                }]
                              })
                            });
                            onClose();
                            _context.next = 36;
                            break;

                          case 33:
                            _context.prev = 33;
                            _context.t1 = _context["catch"](21);
                            addToast({
                              type: ToastProvider/* TOAST_TYPE.ERROR */["do"].ERROR,
                              message: (0,errors/* i18nGraphqlException */.t2)(intl, _context.t1)
                            });

                          case 36:
                            _context.prev = 36;
                            setSubmitting(false);
                            return _context.finish(36);

                          case 39:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[2, 13, 18, 21], [21, 33, 36, 39]]);
                  })),
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "save",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Save"
                    }]
                  })
                })), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, HeroBackgroundCropperModal_objectSpread(HeroBackgroundCropperModal_objectSpread({}, BUTTONS_PROPS), {}, {
                  disabled: !hasImage || isSubmitting,
                  onClick: function onClick() {
                    onCropChange(HeroBackground/* DEFAULT_BACKGROUND_CROP */["in"]);
                    onZoomChange(1);
                    setUploadedImage(KEY_IMG_REMOVE);
                  },
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "Reset",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Reset"
                    }]
                  })
                }))]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, HeroBackgroundCropperModal_objectSpread(HeroBackgroundCropperModal_objectSpread({}, BUTTONS_PROPS), {}, {
                onClick: open,
                disabled: isSubmitting,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
/* harmony default export */ var hero_HeroBackgroundCropperModal = (HeroBackgroundCropperModal);

var _StyledContainer = (0,styled_components_browser_esm/* default */.ZP)(Container/* default */.Z).withConfig({
  displayName: "HeroBackgroundCropperModal___StyledContainer",
  componentId: "sc-1d8ptos-1"
})(function (p) {
  return {
    transform: p.$_css,
    transformOrigin: 'top left'
  };
});

/***/ })

}]);
//# sourceMappingURL=2021.7cf235c06b2a3422.js.map