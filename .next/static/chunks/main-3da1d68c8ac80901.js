(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[179],{

/***/ 60932:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _asyncToGenerator;
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}


/***/ }),

/***/ 6495:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _extends;
function _extends() {
    return extends_.apply(this, arguments);
}
function extends_() {
    extends_ = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return extends_.apply(this, arguments);
}


/***/ }),

/***/ 92648:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _interopRequireDefault;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 91598:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _interopRequireWildcard;
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _getRequireWildcardCache(nodeInterop1) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop1);
}


/***/ }),

/***/ 17273:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _objectWithoutPropertiesLoose;
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ 91356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addBasePath = addBasePath;

var _addPathPrefix = __webpack_require__(47316);

var _normalizeTrailingSlash = __webpack_require__(84282);

var basePath =  false || '';

function addBasePath(path, required) {
  if (false) {}

  return (0, _normalizeTrailingSlash).normalizePathTrailingSlash((0, _addPathPrefix).addPathPrefix(path, basePath));
}

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 83080:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addLocale = void 0;

var _normalizeTrailingSlash = __webpack_require__(84282);

var addLocale = function addLocale(path) {
  if (false) { var _len, args, _key, _require; }

  return path;
};

exports.addLocale = addLocale;

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 87028:
/***/ (function(module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.detectDomainLocale = void 0;

var detectDomainLocale = function detectDomainLocale() {
  if (false) { var _require; }
};

exports.detectDomainLocale = detectDomainLocale;

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 27522:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.hasBasePath = hasBasePath;

var _pathHasPrefix = __webpack_require__(1333);

var basePath =  false || '';

function hasBasePath(path) {
  return (0, _pathHasPrefix).pathHasPrefix(path, basePath);
}

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 41270:
/***/ (function(module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = initHeadManager;
exports.isEqualNode = isEqualNode;
exports.DOMAttributeNames = void 0;

function initHeadManager() {
  return {
    mountedInstances: new Set(),
    updateHead: function updateHead(head) {
      var tags = {};
      head.forEach(function (h) {
        if ( // If the font tag is loaded only on client navigation
        // it won't be inlined. In this case revert to the original behavior
        h.type === 'link' && h.props['data-optimized-fonts']) {
          if (document.querySelector("style[data-href=\"".concat(h.props['data-href'], "\"]"))) {
            return;
          } else {
            h.props.href = h.props['data-href'];
            h.props['data-href'] = undefined;
          }
        }

        var components = tags[h.type] || [];
        components.push(h);
        tags[h.type] = components;
      });
      var titleComponent = tags.title ? tags.title[0] : null;
      var title = '';

      if (titleComponent) {
        var children = titleComponent.props.children;
        title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
      }

      if (title !== document.title) document.title = title;
      ['meta', 'base', 'link', 'style', 'script'].forEach(function (type) {
        updateElements(type, tags[type] || []);
      });
    }
  };
}

var DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM(_ref) {
  var type = _ref.type,
      props = _ref.props;
  var el = document.createElement(type);

  for (var p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    var attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  var children = props.children,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    var nonce = newTag.getAttribute('nonce'); // Only strip the nonce if `oldTag` has had it stripped. An element's nonce attribute will not
    // be stripped if there is no content security policy response header that includes a nonce.

    if (nonce && !oldTag.getAttribute('nonce')) {
      var cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute('nonce', '');
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }

  return oldTag.isEqualNode(newTag);
}

function updateElements(type, components) {
  var headEl = document.getElementsByTagName('head')[0];
  var headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (false) {}

  var headCount = Number(headCountEl.content);
  var oldTags = [];

  for (var i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
    var ref;

    if ((j == null ? void 0 : (ref = j.tagName) == null ? void 0 : ref.toLowerCase()) === type) {
      oldTags.push(j);
    }
  }

  var newTags = components.map(reactElementToDOM).filter(function (newTag) {
    for (var k = 0, len = oldTags.length; k < len; k++) {
      var oldTag = oldTags[k];

      if (isEqualNode(oldTag, newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(function (t) {
    var ref;
    return (ref = t.parentNode) == null ? void 0 : ref.removeChild(t);
  });
  newTags.forEach(function (t) {
    return headEl.insertBefore(t, headCountEl);
  });
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 91824:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(87794);

var _slicedToArray = __webpack_require__(85696);

var _classCallCheck = __webpack_require__(33227);

var _createClass = __webpack_require__(88361);

var _inherits = __webpack_require__(85971);

var _possibleConstructorReturn = __webpack_require__(52715);

var _getPrototypeOf = __webpack_require__(91193);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initialize = initialize;
exports.hydrate = hydrate;
exports.emitter = exports.router = exports.version = void 0;

var _async_to_generator = (__webpack_require__(60932)/* ["default"] */ .Z);

var _extends = (__webpack_require__(6495)/* ["default"] */ .Z);

var _interop_require_default = (__webpack_require__(92648)/* ["default"] */ .Z);

var _interop_require_wildcard = (__webpack_require__(91598)/* ["default"] */ .Z);

__webpack_require__(40037);

var _react = _interop_require_default(__webpack_require__(67294));

var _headManagerContext = __webpack_require__(70810);

var _mitt = _interop_require_default(__webpack_require__(73323));

var _routerContext = __webpack_require__(64722);

var _isDynamic = __webpack_require__(49886);

var _querystring = __webpack_require__(30544);

var _runtimeConfig = __webpack_require__(56663);

var _utils = __webpack_require__(97972);

var _portal = __webpack_require__(48045);

var _headManager = _interop_require_default(__webpack_require__(41270));

var _pageLoader = _interop_require_default(__webpack_require__(18490));

var _performanceRelayer = _interop_require_default(__webpack_require__(2756));

var _routeAnnouncer = __webpack_require__(11351);

var _router = __webpack_require__(5158);

var _isError = __webpack_require__(80676);

var _imageConfigContext = __webpack_require__(71803);

var _removeBasePath = __webpack_require__(44523);

var _hasBasePath = __webpack_require__(27522);

var ReactDOM =  false ? 0 : __webpack_require__(73935);
var version = "12.3.4";
exports.version = version;
var router;
exports.router = router;
var emitter = (0, _mitt)["default"]();
exports.emitter = emitter;

var looseToArray = function looseToArray(input) {
  return [].slice.call(input);
};

var initialData;
var defaultLocale = undefined;
var asPath;
var pageLoader;
var appElement;
var headManager;
var initialMatchesMiddleware = false;
var lastAppProps;

var _lastRenderReject;

var webpackHMR;
var CachedApp, onPerfEntry;
var CachedComponent;
self.__next_require__ = __webpack_require__;

var Container = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(Container, _react$default$Compon);

  var _super = _createSuper(Container);

  function Container() {
    _classCallCheck(this, Container);

    return _super.apply(this, arguments);
  }

  _createClass(Container, [{
    key: "componentDidCatch",
    value: function componentDidCatch(componentErr, info) {
      this.props.fn(componentErr, info);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash(); // We need to replace the router state if:
      // - the page was (auto) exported and has a query string or search (hash)
      // - it was auto exported and is a dynamic route (to provide params)
      // - if it is a client-side skeleton (fallback render)
      // - if middleware matches the current page (may have rewrite params)
      // - if rewrites in next.config.js match (may have rewrite params)

      if (router.isSsr && // We don't update for 404 requests as this can modify
      // the asPath unexpectedly e.g. adding basePath when
      // it wasn't originally present
      initialData.page !== '/404' && initialData.page !== '/_error' && (initialData.isFallback || initialData.nextExport && ((0, _isDynamic).isDynamicRoute(router.pathname) || location.search || true || 0) || initialData.props && initialData.props.__N_SSG && (location.search || true || 0))) {
        // update query on mount for exported pages
        router.replace(router.pathname + '?' + String((0, _querystring).assign((0, _querystring).urlQueryToSearchParams(router.query), new URLSearchParams(location.search))), asPath, {
          // @ts-ignore
          // WARNING: `_h` is an internal option for handing Next.js
          // client-side hydration. Your app should _never_ use this property.
          // It may change at any time without notice.
          _h: 1,
          // Fallback pages must trigger the data fetch, so the transition is
          // not shallow.
          // Other pages (strictly updating query) happens shallowly, as data
          // requirements would already be present.
          shallow: !initialData.isFallback && !initialMatchesMiddleware
        })["catch"](function (err) {
          if (!err.cancelled) throw err;
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var _location = location,
          hash = _location.hash;
      hash = hash && hash.substring(1);
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      if (true) {
        return this.props.children;
      } else { var _require, ReactDevOverlay; }
    }
  }]);

  return Container;
}(_react["default"].Component);

function initialize() {
  return _initialize.apply(this, arguments);
}

function _initialize() {
  _initialize = _async_to_generator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var opts,
        prefix,
        _require2,
        normalizeLocalePath,
        _require3,
        detectDomainLocale,
        _require4,
        parseRelativeUrl,
        _require5,
        formatUrl,
        parsedAs,
        localePathResult,
        detectedDomain,
        _require6,
        initScriptLoader,
        register,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opts = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};

            // This makes sure this specific lines are removed in production
            if (false) {}

            initialData = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
            window.__NEXT_DATA__ = initialData;
            defaultLocale = initialData.defaultLocale;
            prefix = initialData.assetPrefix || ''; // With dynamic assetPrefix it's no longer possible to set assetPrefix at the build time
            // So, this is how we do it in the client side at runtime

            __webpack_require__.p = "".concat(prefix, "/_next/") //eslint-disable-line
            ; // Initialize next/config with the environment configuration

            (0, _runtimeConfig).setConfig({
              serverRuntimeConfig: {},
              publicRuntimeConfig: initialData.runtimeConfig || {}
            });
            asPath = (0, _utils).getURL(); // make sure not to attempt stripping basePath for 404s

            if ((0, _hasBasePath).hasBasePath(asPath)) {
              asPath = (0, _removeBasePath).removeBasePath(asPath);
            }

            if (false) {}

            if (initialData.scriptLoader) {
              _require6 = __webpack_require__(68787), initScriptLoader = _require6.initScriptLoader;
              initScriptLoader(initialData.scriptLoader);
            }

            pageLoader = new _pageLoader["default"](initialData.buildId, prefix);

            register = function register(_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  r = _ref2[0],
                  f = _ref2[1];

              return pageLoader.routeLoader.onEntrypoint(r, f);
            };

            if (window.__NEXT_P) {
              // Defer page registration for another tick. This will increase the overall
              // latency in hydrating the page, but reduce the total blocking time.
              window.__NEXT_P.map(function (p) {
                return setTimeout(function () {
                  return register(p);
                }, 0);
              });
            }

            window.__NEXT_P = [];
            window.__NEXT_P.push = register;
            headManager = (0, _headManager)["default"]();

            headManager.getIsSsr = function () {
              return router.isSsr;
            };

            appElement = document.getElementById('__next');
            return _context.abrupt("return", {
              assetPrefix: prefix
            });

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _initialize.apply(this, arguments);
}

function renderApp(App, appProps) {
  return /*#__PURE__*/_react["default"].createElement(App, Object.assign({}, appProps));
}

function AppContainer(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/_react["default"].createElement(Container, {
    fn: function fn(error) {
      return (// TODO: Fix disabled eslint rule
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        renderError({
          App: CachedApp,
          err: error
        })["catch"](function (err) {
          return console.error('Error rendering page: ', err);
        })
      );
    }
  }, /*#__PURE__*/_react["default"].createElement(_routerContext.RouterContext.Provider, {
    value: (0, _router).makePublicRouterInstance(router)
  }, /*#__PURE__*/_react["default"].createElement(_headManagerContext.HeadManagerContext.Provider, {
    value: headManager
  }, /*#__PURE__*/_react["default"].createElement(_imageConfigContext.ImageConfigContext.Provider, {
    value: {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false}
  }, children))));
}

var wrapApp = function wrapApp(App) {
  return function (wrappedAppProps) {
    var appProps = _extends({}, wrappedAppProps, {
      Component: CachedComponent,
      err: initialData.err,
      router: router
    });

    return /*#__PURE__*/_react["default"].createElement(AppContainer, null, renderApp(App, appProps));
  };
}; // This method handles all runtime and debug errors.
// 404 and 500 errors are special kind of errors
// and they are still handle via the main render method.


function renderError(renderErrorProps) {
  var App = renderErrorProps.App,
      err = renderErrorProps.err; // In development runtime errors are caught by our overlay
  // In production we catch runtime errors using componentDidCatch which will trigger renderError

  if (false) {} // Make sure we log the error to the console, otherwise users can't track down issues.


  console.error(err);
  console.error("A client-side exception has occurred, see here for more info: https://nextjs.org/docs/messages/client-side-exception-occurred");
  return pageLoader.loadPage('/_error').then(function (_ref4) {
    var ErrorComponent = _ref4.page,
        styleSheets = _ref4.styleSheets;
    return (lastAppProps == null ? void 0 : lastAppProps.Component) === ErrorComponent ? __webpack_require__.e(/* import() */ 1203).then(__webpack_require__.bind(__webpack_require__, 91203)).then(function (errorModule) {
      return __webpack_require__.e(/* import() */ 942).then(__webpack_require__.bind(__webpack_require__, 80942)).then(function (appModule) {
        App = appModule["default"];
        renderErrorProps.App = App;
        return errorModule;
      });
    }).then(function (m) {
      return {
        ErrorComponent: m["default"],
        styleSheets: []
      };
    }) : {
      ErrorComponent: ErrorComponent,
      styleSheets: styleSheets
    };
  }).then(function (_ref5) {
    var ErrorComponent = _ref5.ErrorComponent,
        styleSheets = _ref5.styleSheets;
    var ref; // In production we do a normal render with the `ErrorComponent` as component.
    // If we've gotten here upon initial render, we can use the props from the server.
    // Otherwise, we need to call `getInitialProps` on `App` before mounting.

    var AppTree = wrapApp(App);
    var appCtx = {
      Component: ErrorComponent,
      AppTree: AppTree,
      router: router,
      ctx: {
        err: err,
        pathname: initialData.page,
        query: initialData.query,
        asPath: asPath,
        AppTree: AppTree
      }
    };
    return Promise.resolve(((ref = renderErrorProps.props) == null ? void 0 : ref.err) ? renderErrorProps.props : (0, _utils).loadGetInitialProps(App, appCtx)).then(function (initProps) {
      return (// TODO: Fix disabled eslint rule
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        doRender(_extends({}, renderErrorProps, {
          err: err,
          Component: ErrorComponent,
          styleSheets: styleSheets,
          props: initProps
        }))
      );
    });
  });
} // Dummy component that we render as a child of Root so that we can
// toggle the correct styles before the page is rendered.


function Head(_ref6) {
  var callback = _ref6.callback;

  // We use `useLayoutEffect` to guarantee the callback is executed
  // as soon as React flushes the update.
  _react["default"].useLayoutEffect(function () {
    return callback();
  }, [callback]);

  return null;
}

var reactRoot = null; // On initial render a hydrate should always happen

var shouldHydrate = true;

function clearMarks() {
  ['beforeRender', 'afterHydrate', 'afterRender', 'routeChange'].forEach(function (mark) {
    return performance.clearMarks(mark);
  });
}

function markHydrateComplete() {
  if (!_utils.ST) return;
  performance.mark('afterHydrate') // mark end of hydration
  ;
  performance.measure('Next.js-before-hydration', 'navigationStart', 'beforeRender');
  performance.measure('Next.js-hydration', 'beforeRender', 'afterHydrate');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-hydration').forEach(onPerfEntry);
  }

  clearMarks();
}

function markRenderComplete() {
  if (!_utils.ST) return;
  performance.mark('afterRender') // mark end of render
  ;
  var navStartEntries = performance.getEntriesByName('routeChange', 'mark');
  if (!navStartEntries.length) return;
  performance.measure('Next.js-route-change-to-render', navStartEntries[0].name, 'beforeRender');
  performance.measure('Next.js-render', 'beforeRender', 'afterRender');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-render').forEach(onPerfEntry);
    performance.getEntriesByName('Next.js-route-change-to-render').forEach(onPerfEntry);
  }

  clearMarks();
  ['Next.js-route-change-to-render', 'Next.js-render'].forEach(function (measure) {
    return performance.clearMeasures(measure);
  });
}

function renderReactElement(domEl, fn) {
  // mark start of hydrate/render
  if (_utils.ST) {
    performance.mark('beforeRender');
  }

  var reactEl = fn(shouldHydrate ? markHydrateComplete : markRenderComplete);

  if (false) { var startTransition; } else {
    // The check for `.hydrate` is there to support React alternatives like preact
    if (shouldHydrate) {
      ReactDOM.hydrate(reactEl, domEl);
      shouldHydrate = false;
    } else {
      ReactDOM.render(reactEl, domEl);
    }
  }
}

function Root(_ref7) {
  var callbacks = _ref7.callbacks,
      children = _ref7.children;

  // We use `useLayoutEffect` to guarantee the callbacks are executed
  // as soon as React flushes the update
  _react["default"].useLayoutEffect(function () {
    return callbacks.forEach(function (callback) {
      return callback();
    });
  }, [callbacks]); // We should ask to measure the Web Vitals after rendering completes so we
  // don't cause any hydration delay:


  _react["default"].useEffect(function () {
    (0, _performanceRelayer)["default"](onPerfEntry);
  }, []);

  if (false) {}

  return children;
}

function doRender(input) {
  var App = input.App,
      Component = input.Component,
      props = input.props,
      err = input.err;
  var styleSheets = 'initial' in input ? undefined : input.styleSheets;
  Component = Component || lastAppProps.Component;
  props = props || lastAppProps.props;

  var appProps = _extends({}, props, {
    Component: Component,
    err: err,
    router: router
  }); // lastAppProps has to be set before ReactDom.render to account for ReactDom throwing an error.


  lastAppProps = appProps;
  var canceled = false;
  var resolvePromise;
  var renderPromise = new Promise(function (resolve, reject) {
    if (_lastRenderReject) {
      _lastRenderReject();
    }

    resolvePromise = function resolvePromise() {
      _lastRenderReject = null;
      resolve();
    };

    _lastRenderReject = function lastRenderReject() {
      canceled = true;
      _lastRenderReject = null;
      var error = new Error('Cancel rendering route');
      error.cancelled = true;
      reject(error);
    };
  }); // This function has a return type to ensure it doesn't start returning a
  // Promise. It should remain synchronous.

  function onStart() {
    if (!styleSheets || // We use `style-loader` in development, so we don't need to do anything
    // unless we're in production:
    false) {
      return false;
    }

    var currentStyleTags = looseToArray(document.querySelectorAll('style[data-n-href]'));
    var currentHrefs = new Set(currentStyleTags.map(function (tag) {
      return tag.getAttribute('data-n-href');
    }));
    var noscript = document.querySelector('noscript[data-n-css]');
    var nonce = noscript == null ? void 0 : noscript.getAttribute('data-n-css');
    styleSheets.forEach(function (_ref8) {
      var href = _ref8.href,
          text = _ref8.text;

      if (!currentHrefs.has(href)) {
        var styleTag = document.createElement('style');
        styleTag.setAttribute('data-n-href', href);
        styleTag.setAttribute('media', 'x');

        if (nonce) {
          styleTag.setAttribute('nonce', nonce);
        }

        document.head.appendChild(styleTag);
        styleTag.appendChild(document.createTextNode(text));
      }
    });
    return true;
  }

  function onHeadCommit() {
    if ( // We use `style-loader` in development, so we don't need to do anything
    // unless we're in production:
     true && // We can skip this during hydration. Running it wont cause any harm, but
    // we may as well save the CPU cycles:
    styleSheets && // Ensure this render was not canceled
    !canceled) {
      var desiredHrefs = new Set(styleSheets.map(function (s) {
        return s.href;
      }));
      var currentStyleTags = looseToArray(document.querySelectorAll('style[data-n-href]'));
      var currentHrefs = currentStyleTags.map(function (tag) {
        return tag.getAttribute('data-n-href');
      }); // Toggle `<style>` tags on or off depending on if they're needed:

      for (var idx = 0; idx < currentHrefs.length; ++idx) {
        if (desiredHrefs.has(currentHrefs[idx])) {
          currentStyleTags[idx].removeAttribute('media');
        } else {
          currentStyleTags[idx].setAttribute('media', 'x');
        }
      } // Reorder styles into intended order:


      var referenceNode = document.querySelector('noscript[data-n-css]');

      if ( // This should be an invariant:
      referenceNode) {
        styleSheets.forEach(function (_ref9) {
          var href = _ref9.href;
          var targetTag = document.querySelector("style[data-n-href=\"".concat(href, "\"]"));

          if ( // This should be an invariant:
          targetTag) {
            referenceNode.parentNode.insertBefore(targetTag, referenceNode.nextSibling);
            referenceNode = targetTag;
          }
        });
      } // Finally, clean up server rendered stylesheets:


      looseToArray(document.querySelectorAll('link[data-n-p]')).forEach(function (el) {
        el.parentNode.removeChild(el);
      });
    }

    if (input.scroll) {
      var htmlElement = document.documentElement;
      var existing = htmlElement.style.scrollBehavior;
      htmlElement.style.scrollBehavior = 'auto';
      window.scrollTo(input.scroll.x, input.scroll.y);
      htmlElement.style.scrollBehavior = existing;
    }
  }

  function onRootCommit() {
    resolvePromise();
  }

  onStart();

  var elem = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Head, {
    callback: onHeadCommit
  }), /*#__PURE__*/_react["default"].createElement(AppContainer, null, renderApp(App, appProps), /*#__PURE__*/_react["default"].createElement(_portal.Portal, {
    type: "next-route-announcer"
  }, /*#__PURE__*/_react["default"].createElement(_routeAnnouncer.RouteAnnouncer, null)))); // We catch runtime errors using componentDidCatch which will trigger renderError


  renderReactElement(appElement, function (callback) {
    return /*#__PURE__*/_react["default"].createElement(Root, {
      callbacks: [callback, onRootCommit]
    },  false ? /*#__PURE__*/0 : elem);
  });
  return renderPromise;
}

function render(renderingProps) {
  return _render.apply(this, arguments);
}

function _render() {
  _render = _async_to_generator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(renderingProps) {
    var renderErr;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!renderingProps.err) {
              _context2.next = 4;
              break;
            }

            _context2.next = 3;
            return renderError(renderingProps);

          case 3:
            return _context2.abrupt("return");

          case 4:
            _context2.prev = 4;
            _context2.next = 7;
            return doRender(renderingProps);

          case 7:
            _context2.next = 17;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](4);
            renderErr = (0, _isError).getProperError(_context2.t0); // bubble up cancelation errors

            if (!renderErr.cancelled) {
              _context2.next = 14;
              break;
            }

            throw renderErr;

          case 14:
            if (false) {}

            _context2.next = 17;
            return renderError(_extends({}, renderingProps, {
              err: renderErr
            }));

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 9]]);
  }));
  return _render.apply(this, arguments);
}

function hydrate(opts) {
  return _hydrate.apply(this, arguments);
}

function _hydrate() {
  _hydrate = _async_to_generator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(opts) {
    var initialErr, appEntrypoint, app, mod, pageEntrypoint, _require7, isValidElementType, _require8, getServerError, renderCtx;

    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            initialErr = initialData.err;
            _context3.prev = 1;
            _context3.next = 4;
            return pageLoader.routeLoader.whenEntrypoint('/_app');

          case 4:
            appEntrypoint = _context3.sent;

            if (!('error' in appEntrypoint)) {
              _context3.next = 7;
              break;
            }

            throw appEntrypoint.error;

          case 7:
            app = appEntrypoint.component, mod = appEntrypoint.exports;
            CachedApp = app;

            if (mod && mod.reportWebVitals) {
              onPerfEntry = function onPerfEntry(_ref10) {
                var id = _ref10.id,
                    name = _ref10.name,
                    startTime = _ref10.startTime,
                    value = _ref10.value,
                    duration = _ref10.duration,
                    entryType = _ref10.entryType,
                    entries = _ref10.entries;
                // Combines timestamp with random number for unique ID
                var uniqueID = "".concat(Date.now(), "-").concat(Math.floor(Math.random() * (9e12 - 1)) + 1e12);
                var perfStartEntry;

                if (entries && entries.length) {
                  perfStartEntry = entries[0].startTime;
                }

                var webVitals = {
                  id: id || uniqueID,
                  name: name,
                  startTime: startTime || perfStartEntry,
                  value: value == null ? duration : value,
                  label: entryType === 'mark' || entryType === 'measure' ? 'custom' : 'web-vital'
                };
                mod.reportWebVitals(webVitals);
              };
            }

            if (true) {
              _context3.next = 14;
              break;
            }

            _context3.t0 = {
              error: initialData.err
            };
            _context3.next = 17;
            break;

          case 14:
            _context3.next = 16;
            return pageLoader.routeLoader.whenEntrypoint(initialData.page);

          case 16:
            _context3.t0 = _context3.sent;

          case 17:
            pageEntrypoint = _context3.t0;

            if (!('error' in pageEntrypoint)) {
              _context3.next = 20;
              break;
            }

            throw pageEntrypoint.error;

          case 20:
            CachedComponent = pageEntrypoint.component;

            if (true) {
              _context3.next = 25;
              break;
            }

            _require7 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next/dist/compiled/react-is'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), isValidElementType = _require7.isValidElementType;

            if (isValidElementType(CachedComponent)) {
              _context3.next = 25;
              break;
            }

            throw new Error("The default export is not a React Component in page: \"".concat(initialData.page, "\""));

          case 25:
            _context3.next = 30;
            break;

          case 27:
            _context3.prev = 27;
            _context3.t1 = _context3["catch"](1);
            // This catches errors like throwing in the top level of a module
            initialErr = (0, _isError).getProperError(_context3.t1);

          case 30:
            if (false) {}

            if (!window.__NEXT_PRELOADREADY) {
              _context3.next = 34;
              break;
            }

            _context3.next = 34;
            return window.__NEXT_PRELOADREADY(initialData.dynamicIds);

          case 34:
            exports.router = router = (0, _router).createRouter(initialData.page, initialData.query, asPath, {
              initialProps: initialData.props,
              pageLoader: pageLoader,
              App: CachedApp,
              Component: CachedComponent,
              wrapApp: wrapApp,
              err: initialErr,
              isFallback: Boolean(initialData.isFallback),
              subscription: function subscription(info, App, scroll) {
                return render(Object.assign({}, info, {
                  App: App,
                  scroll: scroll
                }));
              },
              locale: initialData.locale,
              locales: initialData.locales,
              defaultLocale: defaultLocale,
              domainLocales: initialData.domainLocales,
              isPreview: initialData.isPreview
            });
            _context3.next = 37;
            return router._initialMatchesMiddlewarePromise;

          case 37:
            initialMatchesMiddleware = _context3.sent;
            renderCtx = {
              App: CachedApp,
              initial: true,
              Component: CachedComponent,
              props: initialData.props,
              err: initialErr
            };

            if (!(opts == null ? void 0 : opts.beforeRender)) {
              _context3.next = 42;
              break;
            }

            _context3.next = 42;
            return opts.beforeRender();

          case 42:
            render(renderCtx);

          case 43:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 27]]);
  }));
  return _hydrate.apply(this, arguments);
}

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 9178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(91824);

window.next = {
  version: _.version,

  // router is initialized later so it has to be live-binded
  get router() {
    return _.router;
  },

  emitter: _.emitter
};
(0, _).initialize({}).then(function () {
  return (0, _).hydrate();
})["catch"](console.error);

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 84282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.normalizePathTrailingSlash = void 0;

var _removeTrailingSlash = __webpack_require__(14349);

var _parsePath = __webpack_require__(19773);

var normalizePathTrailingSlash = function normalizePathTrailingSlash(path) {
  if (!path.startsWith('/') || undefined) {
    return path;
  }

  var _parsePath2 = (0, _parsePath).parsePath(path),
      pathname = _parsePath2.pathname,
      query = _parsePath2.query,
      hash = _parsePath2.hash;

  if (false) {}

  return "".concat((0, _removeTrailingSlash).removeTrailingSlash(pathname)).concat(query).concat(hash);
};

exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 18490:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(33227);

var _createClass = __webpack_require__(88361);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _interop_require_default = (__webpack_require__(92648)/* ["default"] */ .Z);

var _addBasePath = __webpack_require__(91356);

var _router = __webpack_require__(80505);

var _getAssetPathFromRoute = _interop_require_default(__webpack_require__(21338));

var _addLocale = __webpack_require__(83080);

var _isDynamic = __webpack_require__(49886);

var _parseRelativeUrl = __webpack_require__(86387);

var _removeTrailingSlash = __webpack_require__(14349);

var _routeLoader = __webpack_require__(13042);

var PageLoader = /*#__PURE__*/function () {
  function PageLoader(buildId, assetPrefix) {
    _classCallCheck(this, PageLoader);

    this.routeLoader = (0, _routeLoader).createRouteLoader(assetPrefix);
    this.buildId = buildId;
    this.assetPrefix = assetPrefix;
    this.promisedSsgManifest = new Promise(function (resolve) {
      if (window.__SSG_MANIFEST) {
        resolve(window.__SSG_MANIFEST);
      } else {
        window.__SSG_MANIFEST_CB = function () {
          resolve(window.__SSG_MANIFEST);
        };
      }
    });
  }

  _createClass(PageLoader, [{
    key: "getPageList",
    value: function getPageList() {
      if (true) {
        return (0, _routeLoader).getClientBuildManifest().then(function (manifest) {
          return manifest.sortedPages;
        });
      } else {}
    }
  }, {
    key: "getMiddleware",
    value: function getMiddleware() {
      if (true) {
        var middlewareMatchers = [];
        window.__MIDDLEWARE_MATCHERS = middlewareMatchers ? middlewareMatchers : undefined;
        return window.__MIDDLEWARE_MATCHERS;
      } else {}
    }
  }, {
    key: "getDataHref",
    value: function getDataHref(params) {
      var _this = this;

      var asPath = params.asPath,
          href = params.href,
          locale = params.locale;

      var _parseRelativeUrl2 = (0, _parseRelativeUrl).parseRelativeUrl(href),
          hrefPathname = _parseRelativeUrl2.pathname,
          query = _parseRelativeUrl2.query,
          search = _parseRelativeUrl2.search;

      var _parseRelativeUrl3 = (0, _parseRelativeUrl).parseRelativeUrl(asPath),
          asPathname = _parseRelativeUrl3.pathname;

      var route = (0, _removeTrailingSlash).removeTrailingSlash(hrefPathname);

      if (route[0] !== '/') {
        throw new Error("Route name should start with a \"/\", got \"".concat(route, "\""));
      }

      var getHrefForSlug = function getHrefForSlug(path) {
        var dataRoute = (0, _getAssetPathFromRoute)["default"]((0, _removeTrailingSlash).removeTrailingSlash((0, _addLocale).addLocale(path, locale)), '.json');
        return (0, _addBasePath).addBasePath("/_next/data/".concat(_this.buildId).concat(dataRoute).concat(search), true);
      };

      return getHrefForSlug(params.skipInterpolation ? asPathname : (0, _isDynamic).isDynamicRoute(route) ? (0, _router).interpolateAs(hrefPathname, asPathname, query).result : route);
    }
    /**
    * @param {string} route - the route (file-system path)
    */

  }, {
    key: "_isSsg",
    value: function _isSsg(route) {
      return this.promisedSsgManifest.then(function (manifest) {
        return manifest.has(route);
      });
    }
  }, {
    key: "loadPage",
    value: function loadPage(route) {
      return this.routeLoader.loadRoute(route).then(function (res) {
        if ('component' in res) {
          return {
            page: res.component,
            mod: res.exports,
            styleSheets: res.styles.map(function (o) {
              return {
                href: o.href,
                text: o.content
              };
            })
          };
        }

        throw res.error;
      });
    }
  }, {
    key: "prefetch",
    value: function prefetch(route) {
      return this.routeLoader.prefetch(route);
    }
  }]);

  return PageLoader;
}();

exports["default"] = PageLoader;

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 2756:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _webVitals = __webpack_require__(78018);

var initialHref = location.href;
var isRegistered = false;
var userReportHandler;

function onReport(metric) {
  if (userReportHandler) {
    userReportHandler(metric);
  } // This code is not shipped, executed, or present in the client-side
  // JavaScript bundle unless explicitly enabled in your application.
  //
  // When this feature is enabled, we'll make it very clear by printing a
  // message during the build (`next build`).


  if (false) { var send, vitalsUrl, blob, body, ref, fallbackSend; }
}

var _default = function _default(onPerfEntry) {
  // Update function if it changes:
  userReportHandler = onPerfEntry; // Only register listeners once:

  if (isRegistered) {
    return;
  }

  isRegistered = true;
  (0, _webVitals).onCLS(onReport);
  (0, _webVitals).onFID(onReport);
  (0, _webVitals).onFCP(onReport);
  (0, _webVitals).onLCP(onReport);
  (0, _webVitals).onTTFB(onReport);
  (0, _webVitals).onINP(onReport);
};

exports["default"] = _default;

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 48045:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(85696);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Portal = void 0;

var _react = __webpack_require__(67294);

var _reactDom = __webpack_require__(73935);

var Portal = function Portal(_ref) {
  var children = _ref.children,
      type = _ref.type;

  var _useState = (0, _react).useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      portalNode = _useState2[0],
      setPortalNode = _useState2[1];

  (0, _react).useEffect(function () {
    var element = document.createElement(type);
    document.body.appendChild(element);
    setPortalNode(element);
    return function () {
      document.body.removeChild(element);
    };
  }, [type]);
  return portalNode ? /*#__PURE__*/(0, _reactDom).createPortal(children, portalNode) : null;
};

exports.Portal = Portal;

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 44523:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removeBasePath = removeBasePath;

var _hasBasePath = __webpack_require__(27522);

var basePath =  false || '';

function removeBasePath(path) {
  if (false) {}

  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = "/".concat(path);
  return path;
}

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 26783:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removeLocale = removeLocale;

var _parsePath = __webpack_require__(19773);

function removeLocale(path, locale) {
  if (false) { var localeLower, pathLower, _parsePath2, pathname; }

  return path;
}

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 7131:
/***/ (function(module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

var requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

var cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 11351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(85696);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.RouteAnnouncer = void 0;

var _interop_require_default = (__webpack_require__(92648)/* ["default"] */ .Z);

var _react = _interop_require_default(__webpack_require__(67294));

var _router = __webpack_require__(5158);

var nextjsRouteAnnouncerStyles = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  width: '1px',
  // https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
  whiteSpace: 'nowrap',
  wordWrap: 'normal'
};

var RouteAnnouncer = function RouteAnnouncer() {
  var _useRouter = (0, _router).useRouter(),
      asPath = _useRouter.asPath;

  var _react$default$useSta = _react["default"].useState(''),
      _react$default$useSta2 = _slicedToArray(_react$default$useSta, 2),
      routeAnnouncement = _react$default$useSta2[0],
      setRouteAnnouncement = _react$default$useSta2[1]; // Only announce the path change, but not for the first load because screen
  // reader will do that automatically.


  var previouslyLoadedPath = _react["default"].useRef(asPath); // Every time the path changes, announce the new page’s title following this
  // priority: first the document title (from head), otherwise the first h1, or
  // if none of these exist, then the pathname from the URL. This methodology is
  // inspired by Marcy Sutton’s accessible client routing user testing. More
  // information can be found here:
  // https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/


  _react["default"].useEffect(function () {
    // If the path hasn't change, we do nothing.
    if (previouslyLoadedPath.current === asPath) return;
    previouslyLoadedPath.current = asPath;

    if (document.title) {
      setRouteAnnouncement(document.title);
    } else {
      var pageHeader = document.querySelector('h1');
      var ref;
      var content = (ref = pageHeader == null ? void 0 : pageHeader.innerText) != null ? ref : pageHeader == null ? void 0 : pageHeader.textContent;
      setRouteAnnouncement(content || asPath);
    }
  }, // TODO: switch to pathname + query object of dynamic route requirements
  [asPath]);

  return /*#__PURE__*/_react["default"].createElement("p", {
    "aria-live": "assertive" // Make the announcement immediately.
    ,
    id: "__next-route-announcer__",
    role: "alert",
    style: nextjsRouteAnnouncerStyles
  }, routeAnnouncement);
};

exports.RouteAnnouncer = RouteAnnouncer;
var _default = RouteAnnouncer;
exports["default"] = _default;

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 13042:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _interop_require_default = (__webpack_require__(92648)/* ["default"] */ .Z);

var _getAssetPathFromRoute = _interop_require_default(__webpack_require__(21338));

var _trustedTypes = __webpack_require__(4027);

var _requestIdleCallback = __webpack_require__(7131); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


var MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  var entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  var resolver;
  var prom = new Promise(function (resolve) {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator() // eslint-disable-next-line no-sequences
  .then(function (value) {
    return resolver(value), value;
  })["catch"](function (err) {
    map["delete"](key);
    throw err;
  }) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

var canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise(function (res, rej) {
    var selector = "\n      link[rel=\"prefetch\"][href^=\"".concat(href, "\"],\n      link[rel=\"preload\"][href^=\"").concat(href, "\"],\n      script[src^=\"").concat(href, "\"]");

    if (document.querySelector(selector)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = "prefetch";
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

var ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise(function (resolve, reject) {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = function () {
      return reject(markAssetError(new Error("Failed to load script: ".concat(src))));
    }; // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


var devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise(function (resolve, reject) {
    var cancelled = false;
    p.then(function (r) {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    })["catch"](reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (false) {}

    if (true) {
      (0, _requestIdleCallback).requestIdleCallback(function () {
        return setTimeout(function () {
          if (!cancelled) {
            reject(err);
          }
        }, ms);
      });
    }
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  var onBuildManifest = new Promise(function (resolve) {
    // Mandatory because this is not concurrent safe:
    var cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = function () {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) { var scriptUrl; }

  return getClientBuildManifest().then(function (manifest) {
    if (!(route in manifest)) {
      throw markAssetError(new Error("Failed to lookup route: ".concat(route)));
    }

    var allFiles = manifest[route].map(function (entry) {
      return assetPrefix + '/_next/' + encodeURI(entry);
    });
    return {
      scripts: allFiles.filter(function (v) {
        return v.endsWith('.js');
      }).map(function (v) {
        return (0, _trustedTypes).__unsafeCreateTrustedScriptURL(v);
      }),
      css: allFiles.filter(function (v) {
        return v.endsWith('.css');
      })
    };
  });
}

function createRouteLoader(assetPrefix) {
  var entrypoints = new Map();
  var loadedScripts = new Map();
  var styleSheets = new Map();
  var routes = new Map();

  function maybeExecuteScript(src) {
    // With HMR we might need to "reload" scripts when they are
    // disposed and readded. Executing scripts twice has no functional
    // differences
    if (true) {
      var prom = loadedScripts.get(src.toString());

      if (prom) {
        return prom;
      } // Skip executing script if it's already in the DOM:


      if (document.querySelector("script[src^=\"".concat(src, "\"]"))) {
        return Promise.resolve();
      }

      loadedScripts.set(src.toString(), prom = appendScript(src));
      return prom;
    } else {}
  }

  function fetchStyleSheet(href) {
    var prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(function (res) {
      if (!res.ok) {
        throw new Error("Failed to load stylesheet: ".concat(href));
      }

      return res.text().then(function (text) {
        return {
          href: href,
          content: text
        };
      });
    })["catch"](function (err) {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint: function whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },
    onEntrypoint: function onEntrypoint(route, execute) {
      (execute ? Promise.resolve().then(function () {
        return execute();
      }).then(function (exports) {
        return {
          component: exports && exports["default"] || exports,
          exports: exports
        };
      }, function (err) {
        return {
          error: err
        };
      }) : Promise.resolve(undefined)).then(function (input) {
        var old = entrypoints.get(route);

        if (old && 'resolve' in old) {
          if (input) {
            entrypoints.set(route, input);
            old.resolve(input);
          }
        } else {
          if (input) {
            entrypoints.set(route, input);
          } else {
            entrypoints["delete"](route);
          } // when this entrypoint has been resolved before
          // the route is outdated and we want to invalidate
          // this cache entry


          routes["delete"](route);
        }
      });
    },
    loadRoute: function loadRoute(route, prefetch) {
      var _this = this;

      return withFuture(route, routes, function () {
        var devBuildPromiseResolve;

        if (false) {}

        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(function (_ref) {
          var scripts = _ref.scripts,
              css = _ref.css;
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(function (res) {
          return _this.whenEntrypoint(route).then(function (entrypoint) {
            return {
              entrypoint: entrypoint,
              styles: res[1]
            };
          });
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error("Route did not complete loading: ".concat(route)))).then(function (_ref2) {
          var entrypoint = _ref2.entrypoint,
              styles = _ref2.styles;
          var res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        })["catch"](function (err) {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        })["finally"](function () {
          return devBuildPromiseResolve == null ? void 0 : devBuildPromiseResolve();
        });
      });
    },
    prefetch: function prefetch(route) {
      var _this2 = this;

      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      var cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(function (output) {
        return Promise.all(canPrefetch ? output.scripts.map(function (script) {
          return prefetchViaDom(script.toString(), 'script');
        }) : []);
      }).then(function () {
        (0, _requestIdleCallback).requestIdleCallback(function () {
          return _this2.loadRoute(route, true)["catch"](function () {});
        });
      })["catch"]( // swallow prefetch errors
      function () {});
    }
  };
}

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 5158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(74577);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function get() {
    return _router["default"];
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function get() {
    return _withRouter["default"];
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports["default"] = void 0;

var _interop_require_default = (__webpack_require__(92648)/* ["default"] */ .Z);

var _react = _interop_require_default(__webpack_require__(67294));

var _router = _interop_require_default(__webpack_require__(80505));

var _routerContext = __webpack_require__(64722);

var _isError = _interop_require_default(__webpack_require__(80676));

var _withRouter = _interop_require_default(__webpack_require__(10199));

var singletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router["default"].events;
  }
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router["default"].events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error((0, _isError)["default"](err) ? "".concat(err.message, "\n").concat(err.stack) : err + '');
        }
      }
    });
  });
});
var _default = singletonRouter;
exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
}

function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  var scopedRouter = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof scopedRouter[property] === 'object') {
        instance[property] = Object.assign(Array.isArray(scopedRouter[property]) ? [] : {}, scopedRouter[property]) // makes sure query is not stateful
        ;
        continue;
      }

      instance[property] = scopedRouter[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return scopedRouter[field].apply(scopedRouter, arguments);
    };
  });
  return instance;
}

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 68787:
/***/ (function(module, exports, __webpack_require__) {

"client";
"use strict";

var _toConsumableArray = __webpack_require__(7980);

var _slicedToArray = __webpack_require__(85696);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.handleClientScriptLoad = handleClientScriptLoad;
exports.initScriptLoader = initScriptLoader;
exports["default"] = void 0;

var _extends = (__webpack_require__(6495)/* ["default"] */ .Z);

var _interop_require_wildcard = (__webpack_require__(91598)/* ["default"] */ .Z);

var _object_without_properties_loose = (__webpack_require__(17273)/* ["default"] */ .Z);

var _react = _interop_require_wildcard(__webpack_require__(67294));

var _headManagerContext = __webpack_require__(70810);

var _headManager = __webpack_require__(41270);

var _requestIdleCallback = __webpack_require__(7131);

'client';
var ScriptCache = new Map();
var LoadCache = new Set();
var ignoreProps = ['onLoad', 'onReady', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];

var loadScript = function loadScript(props) {
  var src = props.src,
      id = props.id,
      _props$onLoad = props.onLoad,
      onLoad = _props$onLoad === void 0 ? function () {} : _props$onLoad,
      _props$onReady = props.onReady,
      onReady = _props$onReady === void 0 ? null : _props$onReady,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML,
      _props$children = props.children,
      children = _props$children === void 0 ? '' : _props$children,
      _props$strategy = props.strategy,
      strategy = _props$strategy === void 0 ? 'afterInteractive' : _props$strategy,
      onError = props.onError;
  var cacheKey = id || src; // Script has already loaded

  if (cacheKey && LoadCache.has(cacheKey)) {
    return;
  } // Contents of this script are already loading/loaded


  if (ScriptCache.has(src)) {
    LoadCache.add(cacheKey); // It is possible that multiple `next/script` components all have same "src", but has different "onLoad"
    // This is to make sure the same remote script will only load once, but "onLoad" are executed in order

    ScriptCache.get(src).then(onLoad, onError);
    return;
  }
  /** Execute after the script first loaded */


  var afterLoad = function afterLoad() {
    // Run onReady for the first time after load event
    if (onReady) {
      onReady();
    } // add cacheKey to LoadCache when load successfully


    LoadCache.add(cacheKey);
  };

  var el = document.createElement('script');
  var loadPromise = new Promise(function (resolve, reject) {
    el.addEventListener('load', function (e) {
      resolve();

      if (onLoad) {
        onLoad.call(this, e);
      }

      afterLoad();
    });
    el.addEventListener('error', function (e) {
      reject(e);
    });
  })["catch"](function (e) {
    if (onError) {
      onError(e);
    }
  });

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
    afterLoad();
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
    afterLoad();
  } else if (src) {
    el.src = src; // do not add cacheKey into LoadCache for remote script here
    // cacheKey will be added to LoadCache when it is actually loaded (see loadPromise above)

    ScriptCache.set(src, loadPromise);
  }

  for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        k = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    var attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  if (strategy === 'worker') {
    el.setAttribute('type', 'text/partytown');
  }

  el.setAttribute('data-nscript', strategy);
  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  var _props$strategy2 = props.strategy,
      strategy = _props$strategy2 === void 0 ? 'afterInteractive' : _props$strategy2;

  if (strategy === 'lazyOnload') {
    window.addEventListener('load', function () {
      (0, _requestIdleCallback).requestIdleCallback(function () {
        return loadScript(props);
      });
    });
  } else {
    loadScript(props);
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback).requestIdleCallback(function () {
      return loadScript(props);
    });
  } else {
    window.addEventListener('load', function () {
      (0, _requestIdleCallback).requestIdleCallback(function () {
        return loadScript(props);
      });
    });
  }
}

function addBeforeInteractiveToCache() {
  var scripts = [].concat(_toConsumableArray(document.querySelectorAll('[data-nscript="beforeInteractive"]')), _toConsumableArray(document.querySelectorAll('[data-nscript="beforePageRender"]')));
  scripts.forEach(function (script) {
    var cacheKey = script.id || script.getAttribute('src');
    LoadCache.add(cacheKey);
  });
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
  addBeforeInteractiveToCache();
}

function Script(props) {
  var id = props.id,
      _props$src = props.src,
      src = _props$src === void 0 ? '' : _props$src,
      _props$onLoad2 = props.onLoad,
      onLoad = _props$onLoad2 === void 0 ? function () {} : _props$onLoad2,
      _props$onReady2 = props.onReady,
      onReady = _props$onReady2 === void 0 ? null : _props$onReady2,
      _props$strategy3 = props.strategy,
      strategy = _props$strategy3 === void 0 ? 'afterInteractive' : _props$strategy3,
      onError = props.onError,
      restProps = _object_without_properties_loose(props, ["id", "src", "onLoad", "onReady", "strategy", "onError"]); // Context is available only during SSR


  var _useContext = (0, _react).useContext(_headManagerContext.HeadManagerContext),
      updateScripts = _useContext.updateScripts,
      scripts = _useContext.scripts,
      getIsSsr = _useContext.getIsSsr;
  /**
  * - First mount:
  *   1. The useEffect for onReady executes
  *   2. hasOnReadyEffectCalled.current is false, but the script hasn't loaded yet (not in LoadCache)
  *      onReady is skipped, set hasOnReadyEffectCalled.current to true
  *   3. The useEffect for loadScript executes
  *   4. hasLoadScriptEffectCalled.current is false, loadScript executes
  *      Once the script is loaded, the onLoad and onReady will be called by then
  *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
  *   5. The useEffect for onReady executes again
  *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
  *   7. The useEffect for loadScript executes again
  *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
  *
  * - Second mount:
  *   1. The useEffect for onReady executes
  *   2. hasOnReadyEffectCalled.current is false, but the script has already loaded (found in LoadCache)
  *      onReady is called, set hasOnReadyEffectCalled.current to true
  *   3. The useEffect for loadScript executes
  *   4. The script is already loaded, loadScript bails out
  *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
  *   5. The useEffect for onReady executes again
  *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
  *   7. The useEffect for loadScript executes again
  *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
  */


  var hasOnReadyEffectCalled = (0, _react).useRef(false);
  (0, _react).useEffect(function () {
    var cacheKey = id || src;

    if (!hasOnReadyEffectCalled.current) {
      // Run onReady if script has loaded before but component is re-mounted
      if (onReady && cacheKey && LoadCache.has(cacheKey)) {
        onReady();
      }

      hasOnReadyEffectCalled.current = true;
    }
  }, [onReady, id, src]);
  var hasLoadScriptEffectCalled = (0, _react).useRef(false);
  (0, _react).useEffect(function () {
    if (!hasLoadScriptEffectCalled.current) {
      if (strategy === 'afterInteractive') {
        loadScript(props);
      } else if (strategy === 'lazyOnload') {
        loadLazyScript(props);
      }

      hasLoadScriptEffectCalled.current = true;
    }
  }, [props, strategy]);

  if (strategy === 'beforeInteractive' || strategy === 'worker') {
    if (updateScripts) {
      scripts[strategy] = (scripts[strategy] || []).concat([_extends({
        id: id,
        src: src,
        onLoad: onLoad,
        onReady: onReady,
        onError: onError
      }, restProps)]);
      updateScripts(scripts);
    } else if (getIsSsr && getIsSsr()) {
      // Script has already loaded during SSR
      LoadCache.add(id || src);
    } else if (getIsSsr && !getIsSsr()) {
      loadScript(props);
    }
  }

  return null;
}

Object.defineProperty(Script, '__nextScript', {
  value: true
});
var _default = Script;
exports["default"] = _default;

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 4027:
/***/ (function(module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.__unsafeCreateTrustedScriptURL = __unsafeCreateTrustedScriptURL;
/**
 * Stores the Trusted Types Policy. Starts as undefined and can be set to null
 * if Trusted Types is not supported in the browser.
 */

var policy;
/**
 * Getter for the Trusted Types Policy. If it is undefined, it is instantiated
 * here or set to null if Trusted Types is not supported in the browser.
 */

function getPolicy() {
  if (typeof policy === 'undefined' && true) {
    var ref;
    policy = ((ref = window.trustedTypes) == null ? void 0 : ref.createPolicy('nextjs', {
      createHTML: function createHTML(input) {
        return input;
      },
      createScript: function createScript(input) {
        return input;
      },
      createScriptURL: function createScriptURL(input) {
        return input;
      }
    })) || null;
  }

  return policy;
}

function __unsafeCreateTrustedScriptURL(url) {
  var ref;
  return ((ref = getPolicy()) == null ? void 0 : ref.createScriptURL(url)) || url;
}

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 10199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = withRouter;

var _interop_require_default = (__webpack_require__(92648)/* ["default"] */ .Z);

var _react = _interop_require_default(__webpack_require__(67294));

var _router = __webpack_require__(5158);

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 96476:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.escapeStringRegexp = escapeStringRegexp; // regexp is based on https://github.com/sindresorhus/escape-string-regexp

var reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
var reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;

function escapeStringRegexp(str) {
  // see also: https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/escapeRegExp.js#L23
  if (reHasRegExp.test(str)) {
    return str.replace(reReplaceRegExp, '\\$&');
  }

  return str;
}

/***/ }),

/***/ 70810:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.HeadManagerContext = void 0;

var _interop_require_default = (__webpack_require__(92648)/* ["default"] */ .Z);

var _react = _interop_require_default(__webpack_require__(67294));

var HeadManagerContext = _react["default"].createContext({});

exports.HeadManagerContext = HeadManagerContext;

if (false) {}

/***/ }),

/***/ 4943:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  var detectedLocale; // first item will be empty string from splitting at first char

  var pathnameParts = pathname.split('/');
  (locales || []).some(function (locale) {
    if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname: pathname,
    detectedLocale: detectedLocale
  };
}

/***/ }),

/***/ 71803:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ImageConfigContext = void 0;

var _interop_require_default = (__webpack_require__(92648)/* ["default"] */ .Z);

var _react = _interop_require_default(__webpack_require__(67294));

var _imageConfig = __webpack_require__(10951);

var ImageConfigContext = _react["default"].createContext(_imageConfig.imageConfigDefault);

exports.ImageConfigContext = ImageConfigContext;

if (false) {}

/***/ }),

/***/ 10951:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.imageConfigDefault = exports.VALID_LOADERS = void 0;
var VALID_LOADERS = ['default', 'imgix', 'cloudinary', 'akamai', 'custom'];
exports.VALID_LOADERS = VALID_LOADERS;
var imageConfigDefault = {
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  path: '/_next/image',
  loader: 'default',
  domains: [],
  disableStaticImages: false,
  minimumCacheTTL: 60,
  formats: ['image/webp'],
  dangerouslyAllowSVG: false,
  contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
  remotePatterns: [],
  unoptimized: false
};
exports.imageConfigDefault = imageConfigDefault;

/***/ }),

/***/ 51187:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getObjectClassLabel = getObjectClassLabel;
exports.isPlainObject = isPlainObject;

function getObjectClassLabel(value) {
  return Object.prototype.toString.call(value);
}

function isPlainObject(value) {
  if (getObjectClassLabel(value) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(value);
  /**
  * this used to be previously:
  *
  * `return prototype === null || prototype === Object.prototype`
  *
  * but Edge Runtime expose Object from vm, being that kind of type-checking wrongly fail.
  *
  * It was changed to the current implementation since it's resilient to serialization.
  */

  return prototype === null || prototype.hasOwnProperty('isPrototypeOf');
}

/***/ }),

/***/ 73323:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = mitt;

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

/***/ }),

/***/ 81637:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.denormalizePagePath = denormalizePagePath;

var _utils = __webpack_require__(44980);

var _normalizePathSep = __webpack_require__(84385);

function denormalizePagePath(page) {
  var _page = (0, _normalizePathSep).normalizePathSep(page);

  return _page.startsWith('/index/') && !(0, _utils).isDynamicRoute(_page) ? _page.slice(6) : _page !== '/index' ? _page : '/';
}

/***/ }),

/***/ 84385:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.normalizePathSep = normalizePathSep;

function normalizePathSep(path) {
  return path.replace(/\\/g, '/');
}

/***/ }),

/***/ 64722:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RouterContext = void 0;

var _interop_require_default = (__webpack_require__(92648)/* ["default"] */ .Z);

var _react = _interop_require_default(__webpack_require__(67294));

var RouterContext = _react["default"].createContext(null);

exports.RouterContext = RouterContext;

if (false) {}

/***/ }),

/***/ 80505:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(33227);

var _createClass = __webpack_require__(88361);

var _slicedToArray = __webpack_require__(85696);

var _regeneratorRuntime = __webpack_require__(87794);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.matchesMiddleware = matchesMiddleware;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.createKey = createKey;
exports["default"] = void 0;

var _async_to_generator = (__webpack_require__(60932)/* ["default"] */ .Z);

var _extends = (__webpack_require__(6495)/* ["default"] */ .Z);

var _interop_require_default = (__webpack_require__(92648)/* ["default"] */ .Z);

var _interop_require_wildcard = (__webpack_require__(91598)/* ["default"] */ .Z);

var _normalizeTrailingSlash = __webpack_require__(84282);

var _removeTrailingSlash = __webpack_require__(14349);

var _routeLoader = __webpack_require__(13042);

var _script = __webpack_require__(68787);

var _isError = _interop_require_wildcard(__webpack_require__(80676));

var _denormalizePagePath = __webpack_require__(81637);

var _normalizeLocalePath = __webpack_require__(4943);

var _mitt = _interop_require_default(__webpack_require__(73323));

var _utils = __webpack_require__(97972);

var _isDynamic = __webpack_require__(49886);

var _parseRelativeUrl = __webpack_require__(86387);

var _querystring = __webpack_require__(30544);

var _resolveRewrites = _interop_require_default(__webpack_require__(18693));

var _routeMatcher = __webpack_require__(64870);

var _routeRegex = __webpack_require__(90197);

var _formatUrl = __webpack_require__(24644);

var _detectDomainLocale = __webpack_require__(87028);

var _parsePath = __webpack_require__(19773);

var _addLocale = __webpack_require__(83080);

var _removeLocale = __webpack_require__(26783);

var _removeBasePath = __webpack_require__(44523);

var _addBasePath = __webpack_require__(91356);

var _hasBasePath = __webpack_require__(27522);

var _getNextPathnameInfo = __webpack_require__(94128);

var _formatNextPathnameInfo = __webpack_require__(23283);

var _compareStates = __webpack_require__(38066);

var _isBot = __webpack_require__(36725);

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function matchesMiddleware(options) {
  return _matchesMiddleware.apply(this, arguments);
}

function _matchesMiddleware() {
  _matchesMiddleware = _async_to_generator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(options) {
    var matchers, _parsePath2, asPathname, cleanedAs, asWithBasePathAndLocale;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.resolve(options.router.pageLoader.getMiddleware());

          case 2:
            matchers = _context.sent;

            if (matchers) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", false);

          case 5:
            _parsePath2 = (0, _parsePath).parsePath(options.asPath), asPathname = _parsePath2.pathname; // remove basePath first since path prefix has to be in the order of `/${basePath}/${locale}`

            cleanedAs = (0, _hasBasePath).hasBasePath(asPathname) ? (0, _removeBasePath).removeBasePath(asPathname) : asPathname;
            asWithBasePathAndLocale = (0, _addBasePath).addBasePath((0, _addLocale).addLocale(cleanedAs, options.locale)); // Check only path match on client. Matching "has" should be done on server
            // where we can access more info such as headers, HttpOnly cookie, etc.

            return _context.abrupt("return", matchers.some(function (m) {
              return new RegExp(m.regexp).test(asWithBasePathAndLocale);
            }));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _matchesMiddleware.apply(this, arguments);
}

function stripOrigin(url) {
  var origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function omit(object, keys) {
  var omitted = {};
  Object.keys(object).forEach(function (key) {
    if (!keys.includes(key)) {
      omitted[key] = object[key];
    }
  });
  return omitted;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (!(0, _utils).isAbsoluteUrl(url)) return true;

  try {
    // absolute urls can be local if they are on the same origin
    var locationOrigin = (0, _utils).getLocationOrigin();
    var resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && (0, _hasBasePath).hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  var interpolatedRoute = '';
  var dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  var dynamicGroups = dynamicRegex.groups;
  var dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  var params = Object.keys(dynamicGroups);

  if (!params.every(function (param) {
    var value = dynamicMatches[param] || '';
    var _dynamicGroups$param = dynamicGroups[param],
        repeat = _dynamicGroups$param.repeat,
        optional = _dynamicGroups$param.optional; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    var replaced = "[".concat(repeat ? '...' : '').concat(param, "]");

    if (optional) {
      replaced = "".concat(!value ? '/' : '', "[").concat(replaced, "]");
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    function (segment) {
      return encodeURIComponent(segment);
    }).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params: params,
    result: interpolatedRoute
  };
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  var base;
  var urlAsString = typeof href === 'string' ? href : (0, _formatUrl).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  var urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  var urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
  var urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error("Invalid href passed to next/router: ".concat(urlAsString, ", repeated forward-slashes (//) or backslashes \\ are not valid in the href"));
    var normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    var finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    var interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      var query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);

      var _interpolateAs = interpolateAs(finalUrl.pathname, finalUrl.pathname, query),
          result = _interpolateAs.result,
          params = _interpolateAs.params;

      if (result) {
        interpolatedAs = (0, _formatUrl).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omit(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    var resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_1) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  var _resolveHref = resolveHref(router, url, true),
      _resolveHref2 = _slicedToArray(_resolveHref, 2),
      resolvedHref = _resolveHref2[0],
      resolvedAs = _resolveHref2[1];

  var origin = (0, _utils).getLocationOrigin();
  var hrefHadOrigin = resolvedHref.startsWith(origin);
  var asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  var preparedUrl = hrefHadOrigin ? resolvedHref : (0, _addBasePath).addBasePath(resolvedHref);
  var preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : (0, _addBasePath).addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  var cleanPathname = (0, _removeTrailingSlash).removeTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(function (page) {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _removeTrailingSlash).removeTrailingSlash(pathname);
}

function getMiddlewareData(source, response, options) {
  var nextConfig = {
    basePath: options.router.basePath,
    i18n: {
      locales: options.router.locales
    },
    trailingSlash: Boolean(false)
  };
  var rewriteHeader = response.headers.get('x-nextjs-rewrite');
  var rewriteTarget = rewriteHeader || response.headers.get('x-nextjs-matched-path');
  var matchedPath = response.headers.get('x-matched-path');

  if (matchedPath && !rewriteTarget && !matchedPath.includes('__next_data_catchall') && !matchedPath.includes('/_error') && !matchedPath.includes('/404')) {
    // leverage x-matched-path to detect next.config.js rewrites
    rewriteTarget = matchedPath;
  }

  if (rewriteTarget) {
    if (rewriteTarget.startsWith('/')) {
      var parsedRewriteTarget = (0, _parseRelativeUrl).parseRelativeUrl(rewriteTarget);
      var pathnameInfo = (0, _getNextPathnameInfo).getNextPathnameInfo(parsedRewriteTarget.pathname, {
        nextConfig: nextConfig,
        parseData: true
      });
      var fsPathname = (0, _removeTrailingSlash).removeTrailingSlash(pathnameInfo.pathname);
      return Promise.all([options.router.pageLoader.getPageList(), (0, _routeLoader).getClientBuildManifest()]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            pages = _ref2[0],
            rewrites = _ref2[1].__rewrites;

        var as = (0, _addLocale).addLocale(pathnameInfo.pathname, pathnameInfo.locale);

        if ((0, _isDynamic).isDynamicRoute(as) || !rewriteHeader && pages.includes((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(as), options.router.locales).pathname)) {
          var parsedSource = (0, _getNextPathnameInfo).getNextPathnameInfo((0, _parseRelativeUrl).parseRelativeUrl(source).pathname, {
            parseData: true
          });
          as = (0, _addBasePath).addBasePath(parsedSource.pathname);
          parsedRewriteTarget.pathname = as;
        }

        if (true) {
          var result = (0, _resolveRewrites)["default"](as, pages, rewrites, parsedRewriteTarget.query, function (path) {
            return resolveDynamicRoute(path, pages);
          }, options.router.locales);

          if (result.matchedPage) {
            parsedRewriteTarget.pathname = result.parsedAs.pathname;
            as = parsedRewriteTarget.pathname;
            Object.assign(parsedRewriteTarget.query, result.parsedAs.query);
          }
        } else { var resolvedPathname; }

        var resolvedHref = !pages.includes(fsPathname) ? resolveDynamicRoute((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(parsedRewriteTarget.pathname), options.router.locales).pathname, pages) : fsPathname;

        if ((0, _isDynamic).isDynamicRoute(resolvedHref)) {
          var matches = (0, _routeMatcher).getRouteMatcher((0, _routeRegex).getRouteRegex(resolvedHref))(as);
          Object.assign(parsedRewriteTarget.query, matches || {});
        }

        return {
          type: 'rewrite',
          parsedAs: parsedRewriteTarget,
          resolvedHref: resolvedHref
        };
      });
    }

    var src = (0, _parsePath).parsePath(source);
    var pathname = (0, _formatNextPathnameInfo).formatNextPathnameInfo(_extends({}, (0, _getNextPathnameInfo).getNextPathnameInfo(src.pathname, {
      nextConfig: nextConfig,
      parseData: true
    }), {
      defaultLocale: options.router.defaultLocale,
      buildId: ''
    }));
    return Promise.resolve({
      type: 'redirect-external',
      destination: "".concat(pathname).concat(src.query).concat(src.hash)
    });
  }

  var redirectTarget = response.headers.get('x-nextjs-redirect');

  if (redirectTarget) {
    if (redirectTarget.startsWith('/')) {
      var _src = (0, _parsePath).parsePath(redirectTarget);

      var _pathname = (0, _formatNextPathnameInfo).formatNextPathnameInfo(_extends({}, (0, _getNextPathnameInfo).getNextPathnameInfo(_src.pathname, {
        nextConfig: nextConfig,
        parseData: true
      }), {
        defaultLocale: options.router.defaultLocale,
        buildId: ''
      }));

      return Promise.resolve({
        type: 'redirect-internal',
        newAs: "".concat(_pathname).concat(_src.query).concat(_src.hash),
        newUrl: "".concat(_pathname).concat(_src.query).concat(_src.hash)
      });
    }

    return Promise.resolve({
      type: 'redirect-external',
      destination: redirectTarget
    });
  }

  return Promise.resolve({
    type: 'next'
  });
}

function withMiddlewareEffects(options) {
  return matchesMiddleware(options).then(function (matches) {
    if (matches && options.fetchData) {
      return options.fetchData().then(function (data) {
        return getMiddlewareData(data.dataHref, data.response, options).then(function (effect) {
          return {
            dataHref: data.dataHref,
            cacheKey: data.cacheKey,
            json: data.json,
            response: data.response,
            text: data.text,
            effect: effect
          };
        });
      })["catch"](function (_err) {
        /**
        * TODO: Revisit this in the future.
        * For now we will not consider middleware data errors to be fatal.
        * maybe we should revisit in the future.
        */
        return null;
      });
    }

    return null;
  });
}

var manualScrollRestoration = (/* unused pure expression or super */ null && ( false && 0));
var SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts, options) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin',
    method: options.method || 'GET',
    headers: Object.assign({}, options.headers, {
      'x-nextjs-data': '1'
    })
  }).then(function (response) {
    return !response.ok && attempts > 1 && response.status >= 500 ? fetchRetry(url, attempts - 1, options) : response;
  });
}

var backgroundCache = {};

function handleSmoothScroll(fn) {
  var htmlElement = document.documentElement;
  var existing = htmlElement.style.scrollBehavior;
  htmlElement.style.scrollBehavior = 'auto';
  fn();
  htmlElement.style.scrollBehavior = existing;
}

function tryToParseAsJSON(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    return null;
  }
}

function fetchNextData(_ref3) {
  var dataHref = _ref3.dataHref,
      inflightCache = _ref3.inflightCache,
      isPrefetch = _ref3.isPrefetch,
      hasMiddleware = _ref3.hasMiddleware,
      isServerRender = _ref3.isServerRender,
      parseJSON = _ref3.parseJSON,
      persistCache = _ref3.persistCache,
      isBackground = _ref3.isBackground,
      unstable_skipClientCache = _ref3.unstable_skipClientCache;

  var _URL = new URL(dataHref, window.location.href),
      cacheKey = _URL.href;

  var ref1;

  var getData = function getData(params) {
    return fetchRetry(dataHref, isServerRender ? 3 : 1, {
      headers: isPrefetch ? {
        purpose: 'prefetch'
      } : {},
      method: (ref1 = params == null ? void 0 : params.method) != null ? ref1 : 'GET'
    }).then(function (response) {
      if (response.ok && (params == null ? void 0 : params.method) === 'HEAD') {
        return {
          dataHref: dataHref,
          response: response,
          text: '',
          json: {},
          cacheKey: cacheKey
        };
      }

      return response.text().then(function (text) {
        if (!response.ok) {
          /**
          * When the data response is a redirect because of a middleware
          * we do not consider it an error. The headers must bring the
          * mapped location.
          * TODO: Change the status code in the handler.
          */
          if (hasMiddleware && [301, 302, 307, 308].includes(response.status)) {
            return {
              dataHref: dataHref,
              response: response,
              text: text,
              json: {},
              cacheKey: cacheKey
            };
          }

          if (!hasMiddleware && response.status === 404) {
            var ref;

            if ((ref = tryToParseAsJSON(text)) == null ? void 0 : ref.notFound) {
              return {
                dataHref: dataHref,
                json: {
                  notFound: SSG_DATA_NOT_FOUND
                },
                response: response,
                text: text,
                cacheKey: cacheKey
              };
            }
          }

          var error = new Error("Failed to load static props");
          /**
          * We should only trigger a server-side transition if this was
          * caused on a client-side transition. Otherwise, we'd get into
          * an infinite loop.
          */

          if (!isServerRender) {
            (0, _routeLoader).markAssetError(error);
          }

          throw error;
        }

        return {
          dataHref: dataHref,
          json: parseJSON ? tryToParseAsJSON(text) : null,
          response: response,
          text: text,
          cacheKey: cacheKey
        };
      });
    }).then(function (data) {
      if (!persistCache || false || data.response.headers.get('x-middleware-cache') === 'no-cache') {
        delete inflightCache[cacheKey];
      }

      return data;
    })["catch"](function (err) {
      delete inflightCache[cacheKey];
      throw err;
    });
  }; // when skipping client cache we wait to update
  // inflight cache until successful data response
  // this allows racing click event with fetching newer data
  // without blocking navigation when stale data is available


  if (unstable_skipClientCache && persistCache) {
    return getData({}).then(function (data) {
      inflightCache[cacheKey] = Promise.resolve(data);
      return data;
    });
  }

  if (inflightCache[cacheKey] !== undefined) {
    return inflightCache[cacheKey];
  }

  return inflightCache[cacheKey] = getData(isBackground ? {
    method: 'HEAD'
  } : {});
}

function createKey() {
  return Math.random().toString(36).slice(2, 10);
}

function handleHardNavigation(_ref4) {
  var url = _ref4.url,
      router = _ref4.router;

  // ensure we don't trigger a hard navigation to the same
  // URL as this can end up with an infinite refresh
  if (url === (0, _addBasePath).addBasePath((0, _addLocale).addLocale(router.asPath, router.locale))) {
    throw new Error("Invariant: attempted to hard navigate to the same URL ".concat(url, " ").concat(location.href));
  }

  window.location.href = url;
}

var getCancelledHandler = function getCancelledHandler(_ref5) {
  var route = _ref5.route,
      router = _ref5.router;
  var cancelled = false;

  var cancel = router.clc = function () {
    cancelled = true;
  };

  var handleCancelled = function handleCancelled() {
    if (cancelled) {
      var error = new Error("Abort fetching component for route: \"".concat(route, "\""));
      error.cancelled = true;
      throw error;
    }

    if (cancel === router.clc) {
      router.clc = null;
    }
  };

  return handleCancelled;
};

var Router = /*#__PURE__*/function () {
  function Router(pathname1, query1, as1, _ref6) {
    var _this2 = this;

    var initialProps = _ref6.initialProps,
        pageLoader = _ref6.pageLoader,
        App = _ref6.App,
        wrapApp = _ref6.wrapApp,
        Component = _ref6.Component,
        err = _ref6.err,
        subscription = _ref6.subscription,
        isFallback = _ref6.isFallback,
        locale = _ref6.locale,
        locales = _ref6.locales,
        defaultLocale = _ref6.defaultLocale,
        domainLocales = _ref6.domainLocales,
        isPreview = _ref6.isPreview;

    _classCallCheck(this, Router);

    // Server Data Cache
    this.sdc = {};
    this.isFirstPopStateEvent = true;
    this._key = createKey();

    this.onPopState = function (e) {
      var isFirstPopStateEvent = _this2.isFirstPopStateEvent;
      _this2.isFirstPopStateEvent = false;
      var state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname2 = _this2.pathname,
            query = _this2.query;

        _this2.changeState('replaceState', (0, _formatUrl).formatWithValidation({
          pathname: (0, _addBasePath).addBasePath(_pathname2),
          query: query
        }), (0, _utils).getURL());

        return;
      } // __NA is used to identify if the history entry can be handled by the app-router.


      if (state.__NA) {
        window.location.reload();
        return;
      }

      if (!state.__N) {
        return;
      } // Safari fires popstateevent when reopening the browser.


      if (isFirstPopStateEvent && _this2.locale === state.options.locale && state.as === _this2.asPath) {
        return;
      }

      var forcedScroll;
      var url = state.url,
          as = state.as,
          options = state.options,
          key = state.key;

      if (false) { var v; }

      _this2._key = key;

      var _parseRelativeUrl2 = (0, _parseRelativeUrl).parseRelativeUrl(url),
          pathname = _parseRelativeUrl2.pathname; // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (_this2.isSsr && as === (0, _addBasePath).addBasePath(_this2.asPath) && pathname === (0, _addBasePath).addBasePath(_this2.pathname)) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this2._bps && !_this2._bps(state)) {
        return;
      }

      _this2.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && _this2._shallow,
        locale: options.locale || _this2.defaultLocale,
        // @ts-ignore internal value not exposed on types
        _h: 0
      }), forcedScroll);
    }; // represents the current component key


    var route = (0, _removeTrailingSlash).removeTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[route] = {
        Component: Component,
        initial: true,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    var autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.basePath =  false || '';
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isLocaleDomain = false;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !true);

    if (false) {}

    this.state = {
      route: route,
      pathname: pathname1,
      query: query1,
      asPath: autoExportDynamic ? pathname1 : as1,
      isPreview: !!isPreview,
      locale:  false ? 0 : undefined,
      isFallback: isFallback
    };
    this._initialMatchesMiddlewarePromise = Promise.resolve(false);

    if (true) {
      // make sure "as" doesn't start with double slashes or else it can
      // throw an error as it's considered invalid
      if (!as1.startsWith('//')) {
        // in order for `e.state` to work on the `onpopstate` event
        // we have to register the initial route upon initialization
        var options = {
          locale: locale
        };
        var asPath = (0, _utils).getURL();
        this._initialMatchesMiddlewarePromise = matchesMiddleware({
          router: this,
          locale: locale,
          asPath: asPath
        }).then(function (matches) {
          options._shouldResolveHref = as1 !== pathname1;

          _this2.changeState('replaceState', matches ? asPath : (0, _formatUrl).formatWithValidation({
            pathname: (0, _addBasePath).addBasePath(pathname1),
            query: query1
          }), asPath, options);

          return matches;
        });
      }

      window.addEventListener('popstate', this.onPopState); // enable custom scroll restoration handling when available
      // otherwise fallback to browser's default handling

      if (false) {}
    }
  }

  _createClass(Router, [{
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
    * Go back in history
    */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "push",
    value: function push(url, as) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (false) {}

      var _prepareUrlAs = prepareUrlAs(this, url, as);

      url = _prepareUrlAs.url;
      as = _prepareUrlAs.as;
      return this.change('pushState', url, as, options);
    }
    /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "replace",
    value: function replace(url, as) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _prepareUrlAs2 = prepareUrlAs(this, url, as);

      url = _prepareUrlAs2.url;
      as = _prepareUrlAs2.as;
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, url, as, options, forcedScroll) {
      var _this = this;

      return _async_to_generator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        var isQueryUpdating, shouldResolveHref, nextState, readyStateChange, isSsr, prevLocale, parsedAs, localePathResult, didNavigate, ref, detectedDomain, asNoBasePath, _options$shallow, shallow, _options$scroll, scroll, routeProps, cleanedAs, localeChange, parsed, pathname, query, pages, rewrites, _yield$Promise$all, _yield$Promise$all2, resolvedAs, isMiddlewareMatch, rewritesResult, route, routeMatch, asPathname, routeRegex, shouldInterpolate, interpolatedAs, missingParams, ref2, ref3, routeInfo, cleanedParsedPathname, prefixedAs, rewriteAs, localeResult, _routeRegex2, curRouteMatch, _routeInfo, error, props, __N_SSG, __N_SSP, component, scripts, destination, parsedHref, _prepareUrlAs3, newUrl, newAs, notFoundRoute, _route, isValidShallowRoute, _scroll, shouldScroll, resetScroll, upcomingRouterState, upcomingScrollState, canSkipUpdating, hashRegex;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (isLocalURL(url)) {
                  _context2.next = 3;
                  break;
                }

                handleHardNavigation({
                  url: url,
                  router: _this
                });
                return _context2.abrupt("return", false);

              case 3:
                // WARNING: `_h` is an internal option for handing Next.js client-side
                // hydration. Your app should _never_ use this property. It may change at
                // any time without notice.
                isQueryUpdating = options._h;
                shouldResolveHref = isQueryUpdating || options._shouldResolveHref || (0, _parsePath).parsePath(url).pathname === (0, _parsePath).parsePath(as).pathname;
                nextState = _extends({}, _this.state); // for static pages with query params in the URL we delay
                // marking the router ready until after the query is updated
                // or a navigation has occurred

                readyStateChange = _this.isReady !== true;
                _this.isReady = true;
                isSsr = _this.isSsr;

                if (!isQueryUpdating) {
                  _this.isSsr = false;
                } // if a route transition is already in progress before
                // the query updating is triggered ignore query updating


                if (!(isQueryUpdating && _this.clc)) {
                  _context2.next = 12;
                  break;
                }

                return _context2.abrupt("return", false);

              case 12:
                prevLocale = nextState.locale;

                if (true) {
                  _context2.next = 25;
                  break;
                }

                nextState.locale = options.locale === false ? _this.defaultLocale : options.locale || nextState.locale;

                if (typeof options.locale === 'undefined') {
                  options.locale = nextState.locale;
                }

                parsedAs = (0, _parseRelativeUrl).parseRelativeUrl((0, _hasBasePath).hasBasePath(as) ? (0, _removeBasePath).removeBasePath(as) : as);
                localePathResult = (0, _normalizeLocalePath).normalizeLocalePath(parsedAs.pathname, _this.locales);

                if (localePathResult.detectedLocale) {
                  nextState.locale = localePathResult.detectedLocale;
                  parsedAs.pathname = (0, _addBasePath).addBasePath(parsedAs.pathname);
                  as = (0, _formatUrl).formatWithValidation(parsedAs);
                  url = (0, _addBasePath).addBasePath((0, _normalizeLocalePath).normalizeLocalePath((0, _hasBasePath).hasBasePath(url) ? (0, _removeBasePath).removeBasePath(url) : url, _this.locales).pathname);
                }

                didNavigate = false; // we need to wrap this in the env check again since regenerator runtime
                // moves this on its own due to the return

                if (false) {}

                detectedDomain = (0, _detectDomainLocale).detectDomainLocale(_this.domainLocales, undefined, nextState.locale); // we need to wrap this in the env check again since regenerator runtime
                // moves this on its own due to the return

                if (false) {}

                if (!didNavigate) {
                  _context2.next = 25;
                  break;
                }

                return _context2.abrupt("return", new Promise(function () {}));

              case 25:
                // marking route changes as a navigation start entry
                if (_utils.ST) {
                  performance.mark('routeChange');
                }

                _options$shallow = options.shallow, shallow = _options$shallow === void 0 ? false : _options$shallow, _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll;
                routeProps = {
                  shallow: shallow
                };

                if (_this._inFlightRoute && _this.clc) {
                  if (!isSsr) {
                    Router.events.emit('routeChangeError', buildCancellationError(), _this._inFlightRoute, routeProps);
                  }

                  _this.clc();

                  _this.clc = null;
                }

                as = (0, _addBasePath).addBasePath((0, _addLocale).addLocale((0, _hasBasePath).hasBasePath(as) ? (0, _removeBasePath).removeBasePath(as) : as, options.locale, _this.defaultLocale));
                cleanedAs = (0, _removeLocale).removeLocale((0, _hasBasePath).hasBasePath(as) ? (0, _removeBasePath).removeBasePath(as) : as, nextState.locale);
                _this._inFlightRoute = as;
                localeChange = prevLocale !== nextState.locale; // If the url change is only related to a hash change
                // We should not proceed. We should only change the state.

                if (!(!isQueryUpdating && _this.onlyAHashChange(cleanedAs) && !localeChange)) {
                  _context2.next = 49;
                  break;
                }

                nextState.asPath = cleanedAs;
                Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

                _this.changeState(method, url, as, _extends({}, options, {
                  scroll: false
                }));

                if (scroll) {
                  _this.scrollToHash(cleanedAs);
                }

                _context2.prev = 38;
                _context2.next = 41;
                return _this.set(nextState, _this.components[nextState.route], null);

              case 41:
                _context2.next = 47;
                break;

              case 43:
                _context2.prev = 43;
                _context2.t0 = _context2["catch"](38);

                if ((0, _isError)["default"](_context2.t0) && _context2.t0.cancelled) {
                  Router.events.emit('routeChangeError', _context2.t0, cleanedAs, routeProps);
                }

                throw _context2.t0;

              case 47:
                Router.events.emit('hashChangeComplete', as, routeProps);
                return _context2.abrupt("return", true);

              case 49:
                parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
                pathname = parsed.pathname, query = parsed.query; // The build manifest needs to be loaded before auto-static dynamic pages
                // get their query parameters to allow ensuring they can be parsed properly
                // when rewritten to

                _context2.prev = 51;
                _context2.next = 54;
                return Promise.all([_this.pageLoader.getPageList(), (0, _routeLoader).getClientBuildManifest(), _this.pageLoader.getMiddleware()]);

              case 54:
                _yield$Promise$all = _context2.sent;
                _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                pages = _yield$Promise$all2[0];
                rewrites = _yield$Promise$all2[1].__rewrites;
                _context2.next = 64;
                break;

              case 60:
                _context2.prev = 60;
                _context2.t1 = _context2["catch"](51);
                // If we fail to resolve the page list or client-build manifest, we must
                // do a server-side transition:
                handleHardNavigation({
                  url: as,
                  router: _this
                });
                return _context2.abrupt("return", false);

              case 64:
                // If asked to change the current URL we should reload the current page
                // (not location.reload() but reload getInitialProps and other Next.js stuffs)
                // We also need to set the method = replaceState always
                // as this should not go into the history (That's how browsers work)
                // We should compare the new asPath to the current asPath, not the url
                if (!_this.urlIsNew(cleanedAs) && !localeChange) {
                  method = 'replaceState';
                } // we need to resolve the as value using rewrites for dynamic SSG
                // pages to allow building the data URL correctly


                resolvedAs = as; // url and as should always be prefixed with basePath by this
                // point by either next/link or router.push/replace so strip the
                // basePath from the pathname to match the pages dir 1-to-1

                pathname = pathname ? (0, _removeTrailingSlash).removeTrailingSlash((0, _removeBasePath).removeBasePath(pathname)) : pathname; // we don't attempt resolve asPath when we need to execute
                // middleware as the resolving will occur server-side

                _context2.next = 69;
                return matchesMiddleware({
                  asPath: as,
                  locale: nextState.locale,
                  router: _this
                });

              case 69:
                isMiddlewareMatch = _context2.sent;

                if (options.shallow && isMiddlewareMatch) {
                  pathname = _this.pathname;
                }

                if (!(shouldResolveHref && pathname !== '/_error')) {
                  _context2.next = 84;
                  break;
                }

                options._shouldResolveHref = true;

                if (!( true && as.startsWith('/'))) {
                  _context2.next = 82;
                  break;
                }

                rewritesResult = (0, _resolveRewrites)["default"]((0, _addBasePath).addBasePath((0, _addLocale).addLocale(cleanedAs, nextState.locale), true), pages, rewrites, query, function (p) {
                  return resolveDynamicRoute(p, pages);
                }, _this.locales);

                if (!rewritesResult.externalDest) {
                  _context2.next = 78;
                  break;
                }

                handleHardNavigation({
                  url: as,
                  router: _this
                });
                return _context2.abrupt("return", true);

              case 78:
                if (!isMiddlewareMatch) {
                  resolvedAs = rewritesResult.asPath;
                }

                if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
                  // if this directly matches a page we need to update the href to
                  // allow the correct page chunk to be loaded
                  pathname = rewritesResult.resolvedHref;
                  parsed.pathname = (0, _addBasePath).addBasePath(pathname);

                  if (!isMiddlewareMatch) {
                    url = (0, _formatUrl).formatWithValidation(parsed);
                  }
                }

                _context2.next = 84;
                break;

              case 82:
                parsed.pathname = resolveDynamicRoute(pathname, pages);

                if (parsed.pathname !== pathname) {
                  pathname = parsed.pathname;
                  parsed.pathname = (0, _addBasePath).addBasePath(pathname);

                  if (!isMiddlewareMatch) {
                    url = (0, _formatUrl).formatWithValidation(parsed);
                  }
                }

              case 84:
                if (isLocalURL(as)) {
                  _context2.next = 89;
                  break;
                }

                if (true) {
                  _context2.next = 87;
                  break;
                }

                throw new Error("Invalid href: \"".concat(url, "\" and as: \"").concat(as, "\", received relative href and external as") + "\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as");

              case 87:
                handleHardNavigation({
                  url: as,
                  router: _this
                });
                return _context2.abrupt("return", false);

              case 89:
                resolvedAs = (0, _removeLocale).removeLocale((0, _removeBasePath).removeBasePath(resolvedAs), nextState.locale);
                route = (0, _removeTrailingSlash).removeTrailingSlash(pathname);
                routeMatch = false;

                if (!(0, _isDynamic).isDynamicRoute(route)) {
                  _context2.next = 107;
                  break;
                }

                parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
                asPathname = parsedAs.pathname;
                routeRegex = (0, _routeRegex).getRouteRegex(route);
                routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
                shouldInterpolate = route === asPathname;
                interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

                if (!(!routeMatch || shouldInterpolate && !interpolatedAs.result)) {
                  _context2.next = 106;
                  break;
                }

                missingParams = Object.keys(routeRegex.groups).filter(function (param) {
                  return !query[param];
                });

                if (!(missingParams.length > 0 && !isMiddlewareMatch)) {
                  _context2.next = 104;
                  break;
                }

                if (false) {}

                throw new Error((shouldInterpolate ? "The provided `href` (".concat(url, ") value is missing query values (").concat(missingParams.join(', '), ") to be interpolated properly. ") : "The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ")) + "Read more: https://nextjs.org/docs/messages/".concat(shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'));

              case 104:
                _context2.next = 107;
                break;

              case 106:
                if (shouldInterpolate) {
                  as = (0, _formatUrl).formatWithValidation(Object.assign({}, parsedAs, {
                    pathname: interpolatedAs.result,
                    query: omit(query, interpolatedAs.params)
                  }));
                } else {
                  // Merge params into `query`, overwriting any specified in search
                  Object.assign(query, routeMatch);
                }

              case 107:
                if (!isQueryUpdating) {
                  Router.events.emit('routeChangeStart', as, routeProps);
                }

                _context2.prev = 108;
                _context2.next = 111;
                return _this.getRouteInfo({
                  route: route,
                  pathname: pathname,
                  query: query,
                  as: as,
                  resolvedAs: resolvedAs,
                  routeProps: routeProps,
                  locale: nextState.locale,
                  isPreview: nextState.isPreview,
                  hasMiddleware: isMiddlewareMatch
                });

              case 111:
                routeInfo = _context2.sent;

                if ('route' in routeInfo && isMiddlewareMatch) {
                  pathname = routeInfo.route || route;
                  route = pathname;

                  if (!routeProps.shallow) {
                    query = Object.assign({}, routeInfo.query || {}, query);
                  }

                  cleanedParsedPathname = (0, _hasBasePath).hasBasePath(parsed.pathname) ? (0, _removeBasePath).removeBasePath(parsed.pathname) : parsed.pathname;

                  if (routeMatch && pathname !== cleanedParsedPathname) {
                    Object.keys(routeMatch).forEach(function (key) {
                      if (routeMatch && query[key] === routeMatch[key]) {
                        delete query[key];
                      }
                    });
                  }

                  if ((0, _isDynamic).isDynamicRoute(pathname)) {
                    prefixedAs = !routeProps.shallow && routeInfo.resolvedAs ? routeInfo.resolvedAs : (0, _addBasePath).addBasePath((0, _addLocale).addLocale(new URL(as, location.href).pathname, nextState.locale), true);
                    rewriteAs = prefixedAs;

                    if ((0, _hasBasePath).hasBasePath(rewriteAs)) {
                      rewriteAs = (0, _removeBasePath).removeBasePath(rewriteAs);
                    }

                    if (false) {}

                    _routeRegex2 = (0, _routeRegex).getRouteRegex(pathname);
                    curRouteMatch = (0, _routeMatcher).getRouteMatcher(_routeRegex2)(rewriteAs);

                    if (curRouteMatch) {
                      Object.assign(query, curRouteMatch);
                    }
                  }
                } // If the routeInfo brings a redirect we simply apply it.


                if (!('type' in routeInfo)) {
                  _context2.next = 120;
                  break;
                }

                if (!(routeInfo.type === 'redirect-internal')) {
                  _context2.next = 118;
                  break;
                }

                return _context2.abrupt("return", _this.change(method, routeInfo.newUrl, routeInfo.newAs, options));

              case 118:
                handleHardNavigation({
                  url: routeInfo.destination,
                  router: _this
                });
                return _context2.abrupt("return", new Promise(function () {}));

              case 120:
                _routeInfo = routeInfo, error = _routeInfo.error, props = _routeInfo.props, __N_SSG = _routeInfo.__N_SSG, __N_SSP = _routeInfo.__N_SSP;
                component = routeInfo.Component;

                if (component && component.unstable_scriptLoader) {
                  scripts = [].concat(component.unstable_scriptLoader());
                  scripts.forEach(function (script) {
                    (0, _script).handleClientScriptLoad(script.props);
                  });
                } // handle redirect on client-transition


                if (!((__N_SSG || __N_SSP) && props)) {
                  _context2.next = 150;
                  break;
                }

                if (!(props.pageProps && props.pageProps.__N_REDIRECT)) {
                  _context2.next = 134;
                  break;
                }

                // Use the destination from redirect without adding locale
                options.locale = false;
                destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
                // client-navigation if it is falling back to hard navigation if
                // it's not

                if (!(destination.startsWith('/') && props.pageProps.__N_REDIRECT_BASE_PATH !== false)) {
                  _context2.next = 132;
                  break;
                }

                parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
                parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
                _prepareUrlAs3 = prepareUrlAs(_this, destination, destination), newUrl = _prepareUrlAs3.url, newAs = _prepareUrlAs3.as;
                return _context2.abrupt("return", _this.change(method, newUrl, newAs, options));

              case 132:
                handleHardNavigation({
                  url: destination,
                  router: _this
                });
                return _context2.abrupt("return", new Promise(function () {}));

              case 134:
                nextState.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

                if (!(props.notFound === SSG_DATA_NOT_FOUND)) {
                  _context2.next = 150;
                  break;
                }

                _context2.prev = 136;
                _context2.next = 139;
                return _this.fetchComponent('/404');

              case 139:
                notFoundRoute = '/404';
                _context2.next = 145;
                break;

              case 142:
                _context2.prev = 142;
                _context2.t2 = _context2["catch"](136);
                notFoundRoute = '/_error';

              case 145:
                _context2.next = 147;
                return _this.getRouteInfo({
                  route: notFoundRoute,
                  pathname: notFoundRoute,
                  query: query,
                  as: as,
                  resolvedAs: resolvedAs,
                  routeProps: {
                    shallow: false
                  },
                  locale: nextState.locale,
                  isPreview: nextState.isPreview
                });

              case 147:
                routeInfo = _context2.sent;

                if (!('type' in routeInfo)) {
                  _context2.next = 150;
                  break;
                }

                throw new Error("Unexpected middleware effect on /404");

              case 150:
                Router.events.emit('beforeHistoryChange', as, routeProps);

                _this.changeState(method, url, as, options);

                if (isQueryUpdating && pathname === '/_error' && ((ref2 = self.__NEXT_DATA__.props) == null ? void 0 : (ref3 = ref2.pageProps) == null ? void 0 : ref3.statusCode) === 500 && (props == null ? void 0 : props.pageProps)) {
                  // ensure statusCode is still correct for static 500 page
                  // when updating query information
                  props.pageProps.statusCode = 500;
                }

                // shallow routing is only allowed for same page URL changes.
                isValidShallowRoute = options.shallow && nextState.route === ((_route = routeInfo.route) != null ? _route : route);
                shouldScroll = (_scroll = options.scroll) != null ? _scroll : !options._h && !isValidShallowRoute;
                resetScroll = shouldScroll ? {
                  x: 0,
                  y: 0
                } : null; // the new state that the router gonna set

                upcomingRouterState = _extends({}, nextState, {
                  route: route,
                  pathname: pathname,
                  query: query,
                  asPath: cleanedAs,
                  isFallback: false
                });
                upcomingScrollState = forcedScroll != null ? forcedScroll : resetScroll; // for query updates we can skip it if the state is unchanged and we don't
                // need to scroll
                // https://github.com/vercel/next.js/issues/37139

                canSkipUpdating = options._h && !upcomingScrollState && !readyStateChange && !localeChange && (0, _compareStates).compareRouterStates(upcomingRouterState, _this.state);

                if (canSkipUpdating) {
                  _context2.next = 169;
                  break;
                }

                _context2.next = 162;
                return _this.set(upcomingRouterState, routeInfo, upcomingScrollState)["catch"](function (e) {
                  if (e.cancelled) error = error || e;else throw e;
                });

              case 162:
                if (!error) {
                  _context2.next = 165;
                  break;
                }

                if (!isQueryUpdating) {
                  Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
                }

                throw error;

              case 165:
                if (false) {}

                if (!isQueryUpdating) {
                  Router.events.emit('routeChangeComplete', as, routeProps);
                } // A hash mark # is the optional last part of a URL


                hashRegex = /#.+$/;

                if (shouldScroll && hashRegex.test(as)) {
                  _this.scrollToHash(as);
                }

              case 169:
                return _context2.abrupt("return", true);

              case 172:
                _context2.prev = 172;
                _context2.t3 = _context2["catch"](108);

                if (!((0, _isError)["default"](_context2.t3) && _context2.t3.cancelled)) {
                  _context2.next = 176;
                  break;
                }

                return _context2.abrupt("return", false);

              case 176:
                throw _context2.t3;

              case 177:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[38, 43], [51, 60], [108, 172], [136, 142]]);
      }))();
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (false) {}

      if (method !== 'pushState' || (0, _utils).getURL() !== as) {
        this._shallow = options.shallow;
        window.history[method]({
          url: url,
          as: as,
          options: options,
          __N: true,
          key: this._key = method !== 'pushState' ? this._key : createKey()
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "handleRouteInfoError",
    value: function handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
      var _this = this;

      return _async_to_generator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
        var props, _yield$_this$fetchCom, Component, styleSheets, routeInfo;

        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.error(err);

                if (!err.cancelled) {
                  _context3.next = 3;
                  break;
                }

                throw err;

              case 3:
                if (!((0, _routeLoader).isAssetError(err) || loadErrorFail)) {
                  _context3.next = 7;
                  break;
                }

                Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
                //  1. Page doesn't exists
                //  2. Page does exist in a different zone
                //  3. Internal error while loading the page
                // So, doing a hard reload is the proper way to deal with this.

                handleHardNavigation({
                  url: as,
                  router: _this
                }); // Changing the URL doesn't block executing the current code path.
                // So let's throw a cancellation error stop the routing logic.

                throw buildCancellationError();

              case 7:
                _context3.prev = 7;
                _context3.next = 10;
                return _this.fetchComponent('/_error');

              case 10:
                _yield$_this$fetchCom = _context3.sent;
                Component = _yield$_this$fetchCom.page;
                styleSheets = _yield$_this$fetchCom.styleSheets;
                routeInfo = {
                  props: props,
                  Component: Component,
                  styleSheets: styleSheets,
                  err: err,
                  error: err
                };

                if (routeInfo.props) {
                  _context3.next = 25;
                  break;
                }

                _context3.prev = 15;
                _context3.next = 18;
                return _this.getInitialProps(Component, {
                  err: err,
                  pathname: pathname,
                  query: query
                });

              case 18:
                routeInfo.props = _context3.sent;
                _context3.next = 25;
                break;

              case 21:
                _context3.prev = 21;
                _context3.t0 = _context3["catch"](15);
                console.error('Error in error page `getInitialProps`: ', _context3.t0);
                routeInfo.props = {};

              case 25:
                return _context3.abrupt("return", routeInfo);

              case 28:
                _context3.prev = 28;
                _context3.t1 = _context3["catch"](7);
                return _context3.abrupt("return", _this.handleRouteInfoError((0, _isError)["default"](_context3.t1) ? _context3.t1 : new Error(_context3.t1 + ''), pathname, query, as, routeProps, true));

              case 31:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[7, 28], [15, 21]]);
      }))();
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(_ref7) {
      var requestedRoute = _ref7.route,
          pathname = _ref7.pathname,
          query = _ref7.query,
          as = _ref7.as,
          resolvedAs = _ref7.resolvedAs,
          routeProps = _ref7.routeProps,
          locale = _ref7.locale,
          hasMiddleware = _ref7.hasMiddleware,
          isPreview = _ref7.isPreview,
          unstable_skipClientCache = _ref7.unstable_skipClientCache;

      var _this = this;

      return _async_to_generator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
        var route, ref, ref4, ref5, handleCancelled, existingInfo, cachedRouteInfo, fetchNextDataParams, data, routeInfo, _require, isValidElementType, shouldFetchData, _yield$_this$_getData, props, cacheKey;

        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                /**
                * This `route` binding can change if there's a rewrite
                * so we keep a reference to the original requested route
                * so we can store the cache for it and avoid re-requesting every time
                * for shallow routing purposes.
                */
                route = requestedRoute;
                _context5.prev = 1;
                handleCancelled = getCancelledHandler({
                  route: route,
                  router: _this
                });
                existingInfo = _this.components[route];

                if (!(routeProps.shallow && existingInfo && _this.route === route)) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return", existingInfo);

              case 6:
                if (hasMiddleware) {
                  existingInfo = undefined;
                }

                cachedRouteInfo = existingInfo && !('initial' in existingInfo) && true ? existingInfo : undefined;
                fetchNextDataParams = {
                  dataHref: _this.pageLoader.getDataHref({
                    href: (0, _formatUrl).formatWithValidation({
                      pathname: pathname,
                      query: query
                    }),
                    skipInterpolation: true,
                    asPath: resolvedAs,
                    locale: locale
                  }),
                  hasMiddleware: true,
                  isServerRender: _this.isSsr,
                  parseJSON: true,
                  inflightCache: _this.sdc,
                  persistCache: !isPreview,
                  isPrefetch: false,
                  unstable_skipClientCache: unstable_skipClientCache
                };
                _context5.next = 11;
                return withMiddlewareEffects({
                  fetchData: function fetchData() {
                    return fetchNextData(fetchNextDataParams);
                  },
                  asPath: resolvedAs,
                  locale: locale,
                  router: _this
                });

              case 11:
                data = _context5.sent;
                handleCancelled();

                if (!((data == null ? void 0 : (ref = data.effect) == null ? void 0 : ref.type) === 'redirect-internal' || (data == null ? void 0 : (ref4 = data.effect) == null ? void 0 : ref4.type) === 'redirect-external')) {
                  _context5.next = 15;
                  break;
                }

                return _context5.abrupt("return", data.effect);

              case 15:
                if (!((data == null ? void 0 : (ref5 = data.effect) == null ? void 0 : ref5.type) === 'rewrite')) {
                  _context5.next = 23;
                  break;
                }

                route = (0, _removeTrailingSlash).removeTrailingSlash(data.effect.resolvedHref);
                pathname = data.effect.resolvedHref;
                query = _extends({}, query, data.effect.parsedAs.query);
                resolvedAs = (0, _removeBasePath).removeBasePath((0, _normalizeLocalePath).normalizeLocalePath(data.effect.parsedAs.pathname, _this.locales).pathname); // Check again the cache with the new destination.

                existingInfo = _this.components[route];

                if (!(routeProps.shallow && existingInfo && _this.route === route && !hasMiddleware)) {
                  _context5.next = 23;
                  break;
                }

                return _context5.abrupt("return", _extends({}, existingInfo, {
                  route: route
                }));

              case 23:
                if (!(route === '/api' || route.startsWith('/api/'))) {
                  _context5.next = 26;
                  break;
                }

                handleHardNavigation({
                  url: as,
                  router: _this
                });
                return _context5.abrupt("return", new Promise(function () {}));

              case 26:
                _context5.t0 = cachedRouteInfo;

                if (_context5.t0) {
                  _context5.next = 31;
                  break;
                }

                _context5.next = 30;
                return _this.fetchComponent(route).then(function (res) {
                  return {
                    Component: res.page,
                    styleSheets: res.styleSheets,
                    __N_SSG: res.mod.__N_SSG,
                    __N_SSP: res.mod.__N_SSP
                  };
                });

              case 30:
                _context5.t0 = _context5.sent;

              case 31:
                routeInfo = _context5.t0;

                if (true) {
                  _context5.next = 36;
                  break;
                }

                _require = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next/dist/compiled/react-is'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), isValidElementType = _require.isValidElementType;

                if (isValidElementType(routeInfo.Component)) {
                  _context5.next = 36;
                  break;
                }

                throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));

              case 36:
                shouldFetchData = routeInfo.__N_SSG || routeInfo.__N_SSP;
                _context5.next = 39;
                return _this._getData(_async_to_generator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
                  var _ref8, json, _cacheKey;

                  return _regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          if (!shouldFetchData) {
                            _context4.next = 12;
                            break;
                          }

                          if (!(data == null ? void 0 : data.json)) {
                            _context4.next = 5;
                            break;
                          }

                          _context4.t0 = data;
                          _context4.next = 8;
                          break;

                        case 5:
                          _context4.next = 7;
                          return fetchNextData({
                            dataHref: _this.pageLoader.getDataHref({
                              href: (0, _formatUrl).formatWithValidation({
                                pathname: pathname,
                                query: query
                              }),
                              asPath: resolvedAs,
                              locale: locale
                            }),
                            isServerRender: _this.isSsr,
                            parseJSON: true,
                            inflightCache: _this.sdc,
                            persistCache: !isPreview,
                            isPrefetch: false,
                            unstable_skipClientCache: unstable_skipClientCache
                          });

                        case 7:
                          _context4.t0 = _context4.sent;

                        case 8:
                          _ref8 = _context4.t0;
                          json = _ref8.json;
                          _cacheKey = _ref8.cacheKey;
                          return _context4.abrupt("return", {
                            cacheKey: _cacheKey,
                            props: json || {}
                          });

                        case 12:
                          _context4.t1 = {};
                          _context4.next = 15;
                          return _this.getInitialProps(routeInfo.Component, // we provide AppTree later so this needs to be `any`
                          {
                            pathname: pathname,
                            query: query,
                            asPath: as,
                            locale: locale,
                            locales: _this.locales,
                            defaultLocale: _this.defaultLocale
                          });

                        case 15:
                          _context4.t2 = _context4.sent;
                          return _context4.abrupt("return", {
                            headers: _context4.t1,
                            cacheKey: '',
                            props: _context4.t2
                          });

                        case 17:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                })));

              case 39:
                _yield$_this$_getData = _context5.sent;
                props = _yield$_this$_getData.props;
                cacheKey = _yield$_this$_getData.cacheKey;

                // Only bust the data cache for SSP routes although
                // middleware can skip cache per request with
                // x-middleware-cache: no-cache as well
                if (routeInfo.__N_SSP && fetchNextDataParams.dataHref) {
                  delete _this.sdc[cacheKey];
                } // we kick off a HEAD request in the background
                // when a non-prefetch request is made to signal revalidation


                if (!_this.isPreview && routeInfo.__N_SSG && true) {
                  fetchNextData(Object.assign({}, fetchNextDataParams, {
                    isBackground: true,
                    persistCache: false,
                    inflightCache: backgroundCache
                  }))["catch"](function () {});
                }

                props.pageProps = Object.assign({}, props.pageProps);
                routeInfo.props = props;
                routeInfo.route = route;
                routeInfo.query = query;
                routeInfo.resolvedAs = resolvedAs;
                _this.components[route] = routeInfo;
                return _context5.abrupt("return", routeInfo);

              case 53:
                _context5.prev = 53;
                _context5.t1 = _context5["catch"](1);
                return _context5.abrupt("return", _this.handleRouteInfoError((0, _isError).getProperError(_context5.t1), pathname, query, as, routeProps));

              case 56:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 53]]);
      }))();
    }
  }, {
    key: "set",
    value: function set(state, data, resetScroll) {
      this.state = state;
      return this.sub(data, this.components['/_app'].Component, resetScroll);
    }
    /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          _as$split4$ = _as$split4[1],
          hash = _as$split4$ === void 0 ? '' : _as$split4$; // Scroll to top if the hash is just `#` with no value or `#top`
      // To mirror browsers


      if (hash === '' || hash === 'top') {
        handleSmoothScroll(function () {
          return window.scrollTo(0, 0);
        });
        return;
      } // Decode hash to make non-latin anchor works.


      var rawHash = decodeURIComponent(hash); // First we check if the element by id is found

      var idEl = document.getElementById(rawHash);

      if (idEl) {
        handleSmoothScroll(function () {
          return idEl.scrollIntoView();
        });
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(rawHash)[0];

      if (nameEl) {
        handleSmoothScroll(function () {
          return nameEl.scrollIntoView();
        });
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _this = this;

      return _async_to_generator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
        var parsed, pathname, query, parsedAs, localePathResult, pages, resolvedAs, locale, rewrites, _yield$getClientBuild, rewritesResult, route;

        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!( true && (0, _isBot).isBot(window.navigator.userAgent))) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt("return");

              case 2:
                parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
                pathname = parsed.pathname, query = parsed.query;

                if (false) {}

                _context6.next = 7;
                return _this.pageLoader.getPageList();

              case 7:
                pages = _context6.sent;
                resolvedAs = asPath;
                locale = typeof options.locale !== 'undefined' ? options.locale || undefined : _this.locale;

                if (!( true && asPath.startsWith('/'))) {
                  _context6.next = 20;
                  break;
                }

                _context6.next = 13;
                return (0, _routeLoader).getClientBuildManifest();

              case 13:
                _yield$getClientBuild = _context6.sent;
                rewrites = _yield$getClientBuild.__rewrites;
                rewritesResult = (0, _resolveRewrites)["default"]((0, _addBasePath).addBasePath((0, _addLocale).addLocale(asPath, _this.locale), true), pages, rewrites, parsed.query, function (p) {
                  return resolveDynamicRoute(p, pages);
                }, _this.locales);

                if (!rewritesResult.externalDest) {
                  _context6.next = 18;
                  break;
                }

                return _context6.abrupt("return");

              case 18:
                resolvedAs = (0, _removeLocale).removeLocale((0, _removeBasePath).removeBasePath(rewritesResult.asPath), _this.locale);

                if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
                  // if this directly matches a page we need to update the href to
                  // allow the correct page chunk to be loaded
                  pathname = rewritesResult.resolvedHref;
                  parsed.pathname = pathname;
                  url = (0, _formatUrl).formatWithValidation(parsed);
                }

              case 20:
                parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

                if ((0, _isDynamic).isDynamicRoute(parsed.pathname)) {
                  pathname = parsed.pathname;
                  parsed.pathname = pathname;
                  Object.assign(query, (0, _routeMatcher).getRouteMatcher((0, _routeRegex).getRouteRegex(parsed.pathname))((0, _parsePath).parsePath(asPath).pathname) || {});
                  url = (0, _formatUrl).formatWithValidation(parsed);
                } // Prefetch is not supported in development mode because it would trigger on-demand-entries


                if (true) {
                  _context6.next = 24;
                  break;
                }

                return _context6.abrupt("return");

              case 24:
                route = (0, _removeTrailingSlash).removeTrailingSlash(pathname);
                _context6.next = 27;
                return Promise.all([_this.pageLoader._isSsg(route).then(function (isSsg) {
                  return isSsg ? fetchNextData({
                    dataHref: _this.pageLoader.getDataHref({
                      href: url,
                      asPath: resolvedAs,
                      locale: locale
                    }),
                    isServerRender: false,
                    parseJSON: true,
                    inflightCache: _this.sdc,
                    persistCache: !_this.isPreview,
                    isPrefetch: true,
                    unstable_skipClientCache: options.unstable_skipClientCache || options.priority && !!true
                  }).then(function () {
                    return false;
                  }) : false;
                }), _this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);

              case 27:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var _this = this;

      return _async_to_generator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7() {
        var handleCancelled, componentResult;
        return _regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                handleCancelled = getCancelledHandler({
                  route: route,
                  router: _this
                });
                _context7.prev = 1;
                _context7.next = 4;
                return _this.pageLoader.loadPage(route);

              case 4:
                componentResult = _context7.sent;
                handleCancelled();
                return _context7.abrupt("return", componentResult);

              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7["catch"](1);
                handleCancelled();
                throw _context7.t0;

              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[1, 9]]);
      }))();
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this3 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this3.clc) {
          _this3.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "_getFlightData",
    value: function _getFlightData(dataHref) {
      // Do not cache RSC flight response since it's not a static resource
      return fetchNextData({
        dataHref: dataHref,
        isServerRender: true,
        parseJSON: false,
        inflightCache: this.sdc,
        persistCache: false,
        isPrefetch: false
      }).then(function (_ref9) {
        var text = _ref9.text;
        return {
          data: text
        };
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return (0, _utils).loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "route",
    get: function get() {
      return this.state.route;
    }
  }, {
    key: "pathname",
    get: function get() {
      return this.state.pathname;
    }
  }, {
    key: "query",
    get: function get() {
      return this.state.query;
    }
  }, {
    key: "asPath",
    get: function get() {
      return this.state.asPath;
    }
  }, {
    key: "locale",
    get: function get() {
      return this.state.locale;
    }
  }, {
    key: "isFallback",
    get: function get() {
      return this.state.isFallback;
    }
  }, {
    key: "isPreview",
    get: function get() {
      return this.state.isPreview;
    }
  }]);

  return Router;
}();

Router.events = (0, _mitt)["default"]();
exports["default"] = Router;

/***/ }),

/***/ 11667:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addLocale = addLocale;

var _addPathPrefix = __webpack_require__(47316);

var _pathHasPrefix = __webpack_require__(1333);

function addLocale(path, locale, defaultLocale, ignorePrefix) {
  if (locale && locale !== defaultLocale && (ignorePrefix || !(0, _pathHasPrefix).pathHasPrefix(path.toLowerCase(), "/".concat(locale.toLowerCase())) && !(0, _pathHasPrefix).pathHasPrefix(path.toLowerCase(), '/api'))) {
    return (0, _addPathPrefix).addPathPrefix(path, "/".concat(locale));
  }

  return path;
}

/***/ }),

/***/ 47316:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addPathPrefix = addPathPrefix;

var _parsePath = __webpack_require__(19773);

function addPathPrefix(path, prefix) {
  if (!path.startsWith('/') || !prefix) {
    return path;
  }

  var _parsePath2 = (0, _parsePath).parsePath(path),
      pathname = _parsePath2.pathname,
      query = _parsePath2.query,
      hash = _parsePath2.hash;

  return "".concat(prefix).concat(pathname).concat(query).concat(hash);
}

/***/ }),

/***/ 89375:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addPathSuffix = addPathSuffix;

var _parsePath = __webpack_require__(19773);

function addPathSuffix(path, suffix) {
  if (!path.startsWith('/') || !suffix) {
    return path;
  }

  var _parsePath2 = (0, _parsePath).parsePath(path),
      pathname = _parsePath2.pathname,
      query = _parsePath2.query,
      hash = _parsePath2.hash;

  return "".concat(pathname).concat(suffix).concat(query).concat(hash);
}

/***/ }),

/***/ 38066:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.compareRouterStates = compareRouterStates;

function compareRouterStates(a, b) {
  var stateKeys = Object.keys(a);
  if (stateKeys.length !== Object.keys(b).length) return false;

  for (var i = stateKeys.length; i--;) {
    var key = stateKeys[i];

    if (key === 'query') {
      var queryKeys = Object.keys(a.query);

      if (queryKeys.length !== Object.keys(b.query).length) {
        return false;
      }

      for (var j = queryKeys.length; j--;) {
        var queryKey = queryKeys[j];

        if (!b.query.hasOwnProperty(queryKey) || a.query[queryKey] !== b.query[queryKey]) {
          return false;
        }
      }
    } else if (!b.hasOwnProperty(key) || a[key] !== b[key]) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ 23283:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.formatNextPathnameInfo = formatNextPathnameInfo;

var _removeTrailingSlash = __webpack_require__(14349);

var _addPathPrefix = __webpack_require__(47316);

var _addPathSuffix = __webpack_require__(89375);

var _addLocale = __webpack_require__(11667);

function formatNextPathnameInfo(info) {
  var pathname = (0, _addLocale).addLocale(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);

  if (info.buildId) {
    pathname = (0, _addPathSuffix).addPathSuffix((0, _addPathPrefix).addPathPrefix(pathname, "/_next/data/".concat(info.buildId)), info.pathname === '/' ? 'index.json' : '.json');
  }

  pathname = (0, _addPathPrefix).addPathPrefix(pathname, info.basePath);
  return info.trailingSlash ? !info.buildId && !pathname.endsWith('/') ? (0, _addPathSuffix).addPathSuffix(pathname, '/') : pathname : (0, _removeTrailingSlash).removeTrailingSlash(pathname);
}

/***/ }),

/***/ 24644:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.formatUrl = formatUrl;
exports.formatWithValidation = formatWithValidation;
exports.urlObjectKeys = void 0;

var _interop_require_wildcard = (__webpack_require__(91598)/* ["default"] */ .Z);

var querystring = _interop_require_wildcard(__webpack_require__(30544));

var slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  var auth = urlObj.auth,
      hostname = urlObj.hostname;
  var protocol = urlObj.protocol || '';
  var pathname = urlObj.pathname || '';
  var hash = urlObj.hash || '';
  var query = urlObj.query || '';
  var host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? "[".concat(hostname, "]") : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  var search = urlObj.search || query && "?".concat(query) || '';
  if (protocol && !protocol.endsWith(':')) protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
}

var urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return formatUrl(url);
}

/***/ }),

/***/ 21338:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getAssetPathFromRoute;

function getAssetPathFromRoute(route) {
  var ext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var path = route === '/' ? '/index' : /^\/index(\/|$)/.test(route) ? "/index".concat(route) : "".concat(route);
  return path + ext;
}

/***/ }),

/***/ 94128:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getNextPathnameInfo = getNextPathnameInfo;

var _normalizeLocalePath = __webpack_require__(4943);

var _removePathPrefix = __webpack_require__(30231);

var _pathHasPrefix = __webpack_require__(1333);

function getNextPathnameInfo(pathname, options) {
  var _nextConfig;

  var _ref = (_nextConfig = options.nextConfig) != null ? _nextConfig : {},
      basePath = _ref.basePath,
      i18n = _ref.i18n,
      trailingSlash = _ref.trailingSlash;

  var info = {
    pathname: pathname,
    trailingSlash: pathname !== '/' ? pathname.endsWith('/') : trailingSlash
  };

  if (basePath && (0, _pathHasPrefix).pathHasPrefix(info.pathname, basePath)) {
    info.pathname = (0, _removePathPrefix).removePathPrefix(info.pathname, basePath);
    info.basePath = basePath;
  }

  if (options.parseData === true && info.pathname.startsWith('/_next/data/') && info.pathname.endsWith('.json')) {
    var paths = info.pathname.replace(/^\/_next\/data\//, '').replace(/\.json$/, '').split('/');
    var buildId = paths[0];
    info.pathname = paths[1] !== 'index' ? "/".concat(paths.slice(1).join('/')) : '/';
    info.buildId = buildId;
  }

  if (i18n) {
    var pathLocale = (0, _normalizeLocalePath).normalizeLocalePath(info.pathname, i18n.locales);
    info.locale = pathLocale == null ? void 0 : pathLocale.detectedLocale;
    info.pathname = (pathLocale == null ? void 0 : pathLocale.pathname) || info.pathname;
  }

  return info;
}

/***/ }),

/***/ 44980:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "getSortedRoutes", ({
  enumerable: true,
  get: function get() {
    return _sortedRoutes.getSortedRoutes;
  }
}));
Object.defineProperty(exports, "isDynamicRoute", ({
  enumerable: true,
  get: function get() {
    return _isDynamic.isDynamicRoute;
  }
}));

var _sortedRoutes = __webpack_require__(50342);

var _isDynamic = __webpack_require__(49886);

/***/ }),

/***/ 36725:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isBot = isBot;

function isBot(userAgent) {
  return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(userAgent);
}

/***/ }),

/***/ 49886:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ 19773:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parsePath = parsePath;

function parsePath(path) {
  var hashIndex = path.indexOf('#');
  var queryIndex = path.indexOf('?');
  var hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);

  if (hasQuery || hashIndex > -1) {
    return {
      pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
      query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : '',
      hash: hashIndex > -1 ? path.slice(hashIndex) : ''
    };
  }

  return {
    pathname: path,
    query: '',
    hash: ''
  };
}

/***/ }),

/***/ 86387:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(97972);

var _querystring = __webpack_require__(30544);

function parseRelativeUrl(url, base) {
  var globalBase = new URL( false ? 0 : (0, _utils).getLocationOrigin());
  var resolvedBase = base ? new URL(base, globalBase) : url.startsWith('.') ? new URL( false ? 0 : window.location.href) : globalBase;

  var _URL = new URL(url, resolvedBase),
      pathname = _URL.pathname,
      searchParams = _URL.searchParams,
      search = _URL.search,
      hash = _URL.hash,
      href = _URL.href,
      origin = _URL.origin;

  if (origin !== globalBase.origin) {
    throw new Error("invariant: invalid relative URL, router received ".concat(url));
  }

  return {
    pathname: pathname,
    query: (0, _querystring).searchParamsToUrlQuery(searchParams),
    search: search,
    hash: hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ 98632:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parseUrl = parseUrl;

var _querystring = __webpack_require__(30544);

var _parseRelativeUrl = __webpack_require__(86387);

function parseUrl(url) {
  if (url.startsWith('/')) {
    return (0, _parseRelativeUrl).parseRelativeUrl(url);
  }

  var parsedURL = new URL(url);
  return {
    hash: parsedURL.hash,
    hostname: parsedURL.hostname,
    href: parsedURL.href,
    pathname: parsedURL.pathname,
    port: parsedURL.port,
    protocol: parsedURL.protocol,
    query: (0, _querystring).searchParamsToUrlQuery(parsedURL.searchParams),
    search: parsedURL.search
  };
}

/***/ }),

/***/ 1333:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.pathHasPrefix = pathHasPrefix;

var _parsePath = __webpack_require__(19773);

function pathHasPrefix(path, prefix) {
  if (typeof path !== 'string') {
    return false;
  }

  var _parsePath2 = (0, _parsePath).parsePath(path),
      pathname = _parsePath2.pathname;

  return pathname === prefix || pathname.startsWith(prefix + '/');
}

/***/ }),

/***/ 191:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getPathMatch = getPathMatch;

var _extends = (__webpack_require__(6495)/* ["default"] */ .Z);

var _pathToRegexp = __webpack_require__(74329);

function getPathMatch(path, options) {
  var keys = [];
  var regexp = (0, _pathToRegexp).pathToRegexp(path, keys, {
    delimiter: '/',
    sensitive: false,
    strict: options == null ? void 0 : options.strict
  });
  var matcher = (0, _pathToRegexp).regexpToFunction((options == null ? void 0 : options.regexModifier) ? new RegExp(options.regexModifier(regexp.source), regexp.flags) : regexp, keys);
  /**
  * A matcher function that will check if a given pathname matches the path
  * given in the builder function. When the path does not match it will return
  * `false` but if it does it will return an object with the matched params
  * merged with the params provided in the second argument.
  */

  return function (pathname, params) {
    var res = pathname == null ? false : matcher(pathname);

    if (!res) {
      return false;
    }
    /**
    * If unnamed params are not allowed they must be removed from
    * the matched parameters. path-to-regexp uses "string" for named and
    * "number" for unnamed parameters.
    */


    if (options == null ? void 0 : options.removeUnnamedParams) {
      var _iterator = _createForOfIteratorHelper(keys),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;

          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    return _extends({}, params, res.params);
  };
}

/***/ }),

/***/ 91924:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(85696);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.matchHas = matchHas;
exports.compileNonPath = compileNonPath;
exports.prepareDestination = prepareDestination;

var _extends = (__webpack_require__(6495)/* ["default"] */ .Z);

var _pathToRegexp = __webpack_require__(74329);

var _escapeRegexp = __webpack_require__(96476);

var _parseUrl = __webpack_require__(98632);
/**
 * Ensure only a-zA-Z are used for param names for proper interpolating
 * with path-to-regexp
 */


function getSafeParamName(paramName) {
  var newParamName = '';

  for (var i = 0; i < paramName.length; i++) {
    var charCode = paramName.charCodeAt(i);

    if (charCode > 64 && charCode < 91 || charCode > 96 && charCode < 123 // a-z
    ) {
      newParamName += paramName[i];
    }
  }

  return newParamName;
}

function escapeSegment(str, segmentName) {
  return str.replace(new RegExp(":".concat((0, _escapeRegexp).escapeStringRegexp(segmentName)), 'g'), "__ESC_COLON_".concat(segmentName));
}

function unescapeSegments(str) {
  return str.replace(/__ESC_COLON_/gi, ':');
}

function matchHas(req, query) {
  var has = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var missing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var params = {};

  var hasMatch = function hasMatch(hasItem) {
    var value;
    var key = hasItem.key;

    switch (hasItem.type) {
      case 'header':
        {
          key = key.toLowerCase();
          value = req.headers[key];
          break;
        }

      case 'cookie':
        {
          value = req.cookies[hasItem.key];
          break;
        }

      case 'query':
        {
          value = query[key];
          break;
        }

      case 'host':
        {
          var _ref = (req == null ? void 0 : req.headers) || {},
              host = _ref.host; // remove port from host if present


          var hostname = host == null ? void 0 : host.split(':')[0].toLowerCase();
          value = hostname;
          break;
        }

      default:
        {
          break;
        }
    }

    if (!hasItem.value && value) {
      params[getSafeParamName(key)] = value;
      return true;
    } else if (value) {
      var matcher = new RegExp("^".concat(hasItem.value, "$"));
      var matches = Array.isArray(value) ? value.slice(-1)[0].match(matcher) : value.match(matcher);

      if (matches) {
        if (Array.isArray(matches)) {
          if (matches.groups) {
            Object.keys(matches.groups).forEach(function (groupKey) {
              params[groupKey] = matches.groups[groupKey];
            });
          } else if (hasItem.type === 'host' && matches[0]) {
            params.host = matches[0];
          }
        }

        return true;
      }
    }

    return false;
  };

  var allMatch = has.every(function (item) {
    return hasMatch(item);
  }) && !missing.some(function (item) {
    return hasMatch(item);
  });

  if (allMatch) {
    return params;
  }

  return false;
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (var _i = 0, _Object$keys = Object.keys(params); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];

    if (value.includes(":".concat(key))) {
      value = value.replace(new RegExp(":".concat(key, "\\*"), 'g'), ":".concat(key, "--ESCAPED_PARAM_ASTERISKS")).replace(new RegExp(":".concat(key, "\\?"), 'g'), ":".concat(key, "--ESCAPED_PARAM_QUESTION")).replace(new RegExp(":".concat(key, "\\+"), 'g'), ":".concat(key, "--ESCAPED_PARAM_PLUS")).replace(new RegExp(":".concat(key, "(?!\\w)"), 'g'), "--ESCAPED_PARAM_COLON".concat(key));
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return (0, _pathToRegexp).compile("/".concat(value), {
    validate: false
  })(params).slice(1);
}

function prepareDestination(args) {
  var query = Object.assign({}, args.query);
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;
  delete query.__nextDataReq;
  var escapedDestination = args.destination;

  for (var _i2 = 0, _Object$keys2 = Object.keys(_extends({}, args.params, query)); _i2 < _Object$keys2.length; _i2++) {
    var param = _Object$keys2[_i2];
    escapedDestination = escapeSegment(escapedDestination, param);
  }

  var parsedDestination = (0, _parseUrl).parseUrl(escapedDestination);
  var destQuery = parsedDestination.query;
  var destPath = unescapeSegments("".concat(parsedDestination.pathname).concat(parsedDestination.hash || ''));
  var destHostname = unescapeSegments(parsedDestination.hostname || '');
  var destPathParamKeys = [];
  var destHostnameParamKeys = [];
  (0, _pathToRegexp).pathToRegexp(destPath, destPathParamKeys);
  (0, _pathToRegexp).pathToRegexp(destHostname, destHostnameParamKeys);
  var destParams = [];
  destPathParamKeys.forEach(function (key) {
    return destParams.push(key.name);
  });
  destHostnameParamKeys.forEach(function (key) {
    return destParams.push(key.name);
  });
  var destPathCompiler = (0, _pathToRegexp).compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  var destHostnameCompiler = (0, _pathToRegexp).compile(destHostname, {
    validate: false
  }); // update any params in query values

  for (var _i3 = 0, _Object$entries = Object.entries(destQuery); _i3 < _Object$entries.length; _i3++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
        key1 = _Object$entries$_i[0],
        strOrArray = _Object$entries$_i[1];

    // the value needs to start with a forward-slash to be compiled
    // correctly
    if (Array.isArray(strOrArray)) {
      destQuery[key1] = strOrArray.map(function (value) {
        return compileNonPath(unescapeSegments(value), args.params);
      });
    } else {
      destQuery[key1] = compileNonPath(unescapeSegments(strOrArray), args.params);
    }
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  var paramKeys = Object.keys(args.params).filter(function (name) {
    return name !== 'nextInternalLocale';
  });

  if (args.appendParamsToQuery && !paramKeys.some(function (key) {
    return destParams.includes(key);
  })) {
    var _iterator = _createForOfIteratorHelper(paramKeys),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var key = _step.value;

        if (!(key in destQuery)) {
          destQuery[key] = args.params[key];
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  var newUrl;

  try {
    newUrl = destPathCompiler(args.params);

    var _newUrl$split = newUrl.split('#'),
        _newUrl$split2 = _slicedToArray(_newUrl$split, 2),
        pathname = _newUrl$split2[0],
        hash = _newUrl$split2[1];

    parsedDestination.hostname = destHostnameCompiler(args.params);
    parsedDestination.pathname = pathname;
    parsedDestination.hash = "".concat(hash ? '#' : '').concat(hash || '');
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match");
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _extends({}, query, parsedDestination.query);
  return {
    newUrl: newUrl,
    destQuery: destQuery,
    parsedDestination: parsedDestination
  };
}

/***/ }),

/***/ 30544:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(85696);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  var query = {};
  searchParams.forEach(function (value, key) {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  var result = new URLSearchParams();
  Object.entries(urlQuery).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (Array.isArray(value)) {
      value.forEach(function (item) {
        return result.append(key, stringifyUrlQueryParam(item));
      });
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target) {
  for (var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    searchParamsList[_key - 1] = arguments[_key];
  }

  searchParamsList.forEach(function (searchParams) {
    Array.from(searchParams.keys()).forEach(function (key) {
      return target["delete"](key);
    });
    searchParams.forEach(function (value, key) {
      return target.append(key, value);
    });
  });
  return target;
}

/***/ }),

/***/ 30231:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathPrefix = removePathPrefix;

var _pathHasPrefix = __webpack_require__(1333);

function removePathPrefix(path, prefix) {
  if ((0, _pathHasPrefix).pathHasPrefix(path, prefix)) {
    var withoutPrefix = path.slice(prefix.length);
    return withoutPrefix.startsWith('/') ? withoutPrefix : "/".concat(withoutPrefix);
  }

  return path;
}

/***/ }),

/***/ 14349:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removeTrailingSlash = removeTrailingSlash;

function removeTrailingSlash(route) {
  return route.replace(/\/$/, '') || '/';
}

/***/ }),

/***/ 18693:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _toArray = __webpack_require__(98434);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = resolveRewrites;

var _pathMatch = __webpack_require__(191);

var _prepareDestination = __webpack_require__(91924);

var _removeTrailingSlash = __webpack_require__(14349);

var _normalizeLocalePath = __webpack_require__(4943);

var _removeBasePath = __webpack_require__(44523);

var _parseRelativeUrl = __webpack_require__(86387);

function resolveRewrites(asPath, pages, rewrites, query, resolveHref, locales) {
  var matchedPage = false;
  var externalDest = false;
  var parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(asPath);
  var fsPathname = (0, _removeTrailingSlash).removeTrailingSlash((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(parsedAs.pathname), locales).pathname);
  var resolvedHref;

  var handleRewrite = function handleRewrite(rewrite) {
    var matcher = (0, _pathMatch).getPathMatch(rewrite.source + ( false ? 0 : ''), {
      removeUnnamedParams: true,
      strict: true
    });
    var params = matcher(parsedAs.pathname);

    if ((rewrite.has || rewrite.missing) && params) {
      var hasParams = (0, _prepareDestination).matchHas({
        headers: {
          host: document.location.hostname
        },
        cookies: document.cookie.split('; ').reduce(function (acc, item) {
          var _item$split = item.split('='),
              _item$split2 = _toArray(_item$split),
              key = _item$split2[0],
              value = _item$split2.slice(1);

          acc[key] = value.join('=');
          return acc;
        }, {})
      }, parsedAs.query, rewrite.has, rewrite.missing);

      if (hasParams) {
        Object.assign(params, hasParams);
      } else {
        params = false;
      }
    }

    if (params) {
      if (!rewrite.destination) {
        // this is a proxied rewrite which isn't handled on the client
        externalDest = true;
        return true;
      }

      var destRes = (0, _prepareDestination).prepareDestination({
        appendParamsToQuery: true,
        destination: rewrite.destination,
        params: params,
        query: query
      });
      parsedAs = destRes.parsedDestination;
      asPath = destRes.newUrl;
      Object.assign(query, destRes.parsedDestination.query);
      fsPathname = (0, _removeTrailingSlash).removeTrailingSlash((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(asPath), locales).pathname);

      if (pages.includes(fsPathname)) {
        // check if we now match a page as this means we are done
        // resolving the rewrites
        matchedPage = true;
        resolvedHref = fsPathname;
        return true;
      } // check if we match a dynamic-route, if so we break the rewrites chain


      resolvedHref = resolveHref(fsPathname);

      if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
        matchedPage = true;
        return true;
      }
    }
  };

  var finished = false;

  for (var i = 0; i < rewrites.beforeFiles.length; i++) {
    // we don't end after match in beforeFiles to allow
    // continuing through all beforeFiles rewrites
    handleRewrite(rewrites.beforeFiles[i]);
  }

  matchedPage = pages.includes(fsPathname);

  if (!matchedPage) {
    if (!finished) {
      for (var _i = 0; _i < rewrites.afterFiles.length; _i++) {
        if (handleRewrite(rewrites.afterFiles[_i])) {
          finished = true;
          break;
        }
      }
    } // check dynamic route before processing fallback rewrites


    if (!finished) {
      resolvedHref = resolveHref(fsPathname);
      matchedPage = pages.includes(resolvedHref);
      finished = matchedPage;
    }

    if (!finished) {
      for (var _i2 = 0; _i2 < rewrites.fallback.length; _i2++) {
        if (handleRewrite(rewrites.fallback[_i2])) {
          finished = true;
          break;
        }
      }
    }
  }

  return {
    asPath: asPath,
    parsedAs: parsedAs,
    matchedPage: matchedPage,
    resolvedHref: resolvedHref,
    externalDest: externalDest
  };
}

/***/ }),

/***/ 64870:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getRouteMatcher = getRouteMatcher;

var _utils = __webpack_require__(97972);

function getRouteMatcher(_ref) {
  var re = _ref.re,
      groups = _ref.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        throw new _utils.DecodeError('failed to decode param');
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ 90197:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getRouteRegex = getRouteRegex;
exports.getNamedRouteRegex = getNamedRouteRegex;
exports.getNamedMiddlewareRegex = getNamedMiddlewareRegex;

var _extends = (__webpack_require__(6495)/* ["default"] */ .Z);

var _escapeRegexp = __webpack_require__(96476);

var _removeTrailingSlash = __webpack_require__(14349);
/**
 * Parses a given parameter from a route to a data structure that can be used
 * to generate the parametrized route. Examples:
 *   - `[...slug]` -> `{ name: 'slug', repeat: true, optional: true }`
 *   - `[foo]` -> `{ name: 'foo', repeat: false, optional: true }`
 *   - `bar` -> `{ name: 'bar', repeat: false, optional: false }`
 */


function parseParameter(param) {
  var optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  var repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat: repeat,
    optional: optional
  };
}

function getParametrizedRoute(route) {
  var segments = (0, _removeTrailingSlash).removeTrailingSlash(route).slice(1).split('/');
  var groups = {};
  var groupIndex = 1;
  return {
    parameterizedRoute: segments.map(function (segment) {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        var _parseParameter = parseParameter(segment.slice(1, -1)),
            key = _parseParameter.key,
            optional = _parseParameter.optional,
            repeat = _parseParameter.repeat;

        groups[key] = {
          pos: groupIndex++,
          repeat: repeat,
          optional: optional
        };
        return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
      } else {
        return "/".concat((0, _escapeRegexp).escapeStringRegexp(segment));
      }
    }).join(''),
    groups: groups
  };
}

function getRouteRegex(normalizedRoute) {
  var _getParametrizedRoute = getParametrizedRoute(normalizedRoute),
      parameterizedRoute = _getParametrizedRoute.parameterizedRoute,
      groups = _getParametrizedRoute.groups;

  return {
    re: new RegExp("^".concat(parameterizedRoute, "(?:/)?$")),
    groups: groups
  };
}
/**
 * Builds a function to generate a minimal routeKey using only a-z and minimal
 * number of characters.
 */


function buildGetSafeRouteKey() {
  var routeKeyCharCode = 97;
  var routeKeyCharLength = 1;
  return function () {
    var routeKey = '';

    for (var i = 0; i < routeKeyCharLength; i++) {
      routeKey += String.fromCharCode(routeKeyCharCode);
      routeKeyCharCode++;

      if (routeKeyCharCode > 122) {
        routeKeyCharLength++;
        routeKeyCharCode = 97;
      }
    }

    return routeKey;
  };
}

function getNamedParametrizedRoute(route) {
  var segments = (0, _removeTrailingSlash).removeTrailingSlash(route).slice(1).split('/');
  var getSafeRouteKey = buildGetSafeRouteKey();
  var routeKeys = {};
  return {
    namedParameterizedRoute: segments.map(function (segment) {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        var _parseParameter2 = parseParameter(segment.slice(1, -1)),
            key = _parseParameter2.key,
            optional = _parseParameter2.optional,
            repeat = _parseParameter2.repeat; // replace any non-word characters since they can break
        // the named regex


        var cleanedKey = key.replace(/\W/g, '');
        var invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? "(?:/(?<".concat(cleanedKey, ">.+?))?") : "/(?<".concat(cleanedKey, ">.+?)") : "/(?<".concat(cleanedKey, ">[^/]+?)");
      } else {
        return "/".concat((0, _escapeRegexp).escapeStringRegexp(segment));
      }
    }).join(''),
    routeKeys: routeKeys
  };
}

function getNamedRouteRegex(normalizedRoute) {
  var result = getNamedParametrizedRoute(normalizedRoute);
  return _extends({}, getRouteRegex(normalizedRoute), {
    namedRegex: "^".concat(result.namedParameterizedRoute, "(?:/)?$"),
    routeKeys: result.routeKeys
  });
}

function getNamedMiddlewareRegex(normalizedRoute, options) {
  var _getParametrizedRoute2 = getParametrizedRoute(normalizedRoute),
      parameterizedRoute = _getParametrizedRoute2.parameterizedRoute;

  var _options$catchAll = options.catchAll,
      catchAll = _options$catchAll === void 0 ? true : _options$catchAll;

  if (parameterizedRoute === '/') {
    var catchAllRegex = catchAll ? '.*' : '';
    return {
      namedRegex: "^/".concat(catchAllRegex, "$")
    };
  }

  var _getNamedParametrized = getNamedParametrizedRoute(normalizedRoute),
      namedParameterizedRoute = _getNamedParametrized.namedParameterizedRoute;

  var catchAllGroupedRegex = catchAll ? '(?:(/.*)?)' : '';
  return {
    namedRegex: "^".concat(namedParameterizedRoute).concat(catchAllGroupedRegex, "$")
  };
}

/***/ }),

/***/ 50342:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _toConsumableArray = __webpack_require__(7980);

var _classCallCheck = __webpack_require__(33227);

var _createClass = __webpack_require__(88361);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getSortedRoutes = getSortedRoutes;

var UrlNode = /*#__PURE__*/function () {
  function UrlNode() {
    _classCallCheck(this, UrlNode);

    this.placeholder = true;
    this.children = new Map();
    this.slugName = null;
    this.restSlugName = null;
    this.optionalRestSlugName = null;
  }

  _createClass(UrlNode, [{
    key: "insert",
    value: function insert(urlPath) {
      this._insert(urlPath.split('/').filter(Boolean), [], false);
    }
  }, {
    key: "smoosh",
    value: function smoosh() {
      return this._smoosh();
    }
  }, {
    key: "_smoosh",
    value: function _smoosh() {
      var _this = this;

      var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';

      var childrenPaths = _toConsumableArray(this.children.keys()).sort();

      if (this.slugName !== null) {
        childrenPaths.splice(childrenPaths.indexOf('[]'), 1);
      }

      if (this.restSlugName !== null) {
        childrenPaths.splice(childrenPaths.indexOf('[...]'), 1);
      }

      if (this.optionalRestSlugName !== null) {
        childrenPaths.splice(childrenPaths.indexOf('[[...]]'), 1);
      }

      var routes = childrenPaths.map(function (c) {
        return _this.children.get(c)._smoosh("".concat(prefix).concat(c, "/"));
      }).reduce(function (prev, curr) {
        return [].concat(_toConsumableArray(prev), _toConsumableArray(curr));
      }, []);

      if (this.slugName !== null) {
        routes.push.apply(routes, _toConsumableArray(this.children.get('[]')._smoosh("".concat(prefix, "[").concat(this.slugName, "]/"))));
      }

      if (!this.placeholder) {
        var r = prefix === '/' ? '/' : prefix.slice(0, -1);

        if (this.optionalRestSlugName != null) {
          throw new Error("You cannot define a route with the same specificity as a optional catch-all route (\"".concat(r, "\" and \"").concat(r, "[[...").concat(this.optionalRestSlugName, "]]\")."));
        }

        routes.unshift(r);
      }

      if (this.restSlugName !== null) {
        routes.push.apply(routes, _toConsumableArray(this.children.get('[...]')._smoosh("".concat(prefix, "[...").concat(this.restSlugName, "]/"))));
      }

      if (this.optionalRestSlugName !== null) {
        routes.push.apply(routes, _toConsumableArray(this.children.get('[[...]]')._smoosh("".concat(prefix, "[[...").concat(this.optionalRestSlugName, "]]/"))));
      }

      return routes;
    }
  }, {
    key: "_insert",
    value: function _insert(urlPaths, slugNames, isCatchAll) {
      if (urlPaths.length === 0) {
        this.placeholder = false;
        return;
      }

      if (isCatchAll) {
        throw new Error("Catch-all must be the last part of the URL.");
      } // The next segment in the urlPaths list


      var nextSegment = urlPaths[0]; // Check if the segment matches `[something]`

      if (nextSegment.startsWith('[') && nextSegment.endsWith(']')) {
        var handleSlug = function handleSlug(previousSlug, nextSlug) {
          if (previousSlug !== null) {
            // If the specific segment already has a slug but the slug is not `something`
            // This prevents collisions like:
            // pages/[post]/index.js
            // pages/[id]/index.js
            // Because currently multiple dynamic params on the same segment level are not supported
            if (previousSlug !== nextSlug) {
              // TODO: This error seems to be confusing for users, needs an error link, the description can be based on above comment.
              throw new Error("You cannot use different slug names for the same dynamic path ('".concat(previousSlug, "' !== '").concat(nextSlug, "')."));
            }
          }

          slugNames.forEach(function (slug) {
            if (slug === nextSlug) {
              throw new Error("You cannot have the same slug name \"".concat(nextSlug, "\" repeat within a single dynamic path"));
            }

            if (slug.replace(/\W/g, '') === nextSegment.replace(/\W/g, '')) {
              throw new Error("You cannot have the slug names \"".concat(slug, "\" and \"").concat(nextSlug, "\" differ only by non-word symbols within a single dynamic path"));
            }
          });
          slugNames.push(nextSlug);
        };

        // Strip `[` and `]`, leaving only `something`
        var segmentName = nextSegment.slice(1, -1);
        var isOptional = false;

        if (segmentName.startsWith('[') && segmentName.endsWith(']')) {
          // Strip optional `[` and `]`, leaving only `something`
          segmentName = segmentName.slice(1, -1);
          isOptional = true;
        }

        if (segmentName.startsWith('...')) {
          // Strip `...`, leaving only `something`
          segmentName = segmentName.substring(3);
          isCatchAll = true;
        }

        if (segmentName.startsWith('[') || segmentName.endsWith(']')) {
          throw new Error("Segment names may not start or end with extra brackets ('".concat(segmentName, "')."));
        }

        if (segmentName.startsWith('.')) {
          throw new Error("Segment names may not start with erroneous periods ('".concat(segmentName, "')."));
        }

        if (isCatchAll) {
          if (isOptional) {
            if (this.restSlugName != null) {
              throw new Error("You cannot use both an required and optional catch-all route at the same level (\"[...".concat(this.restSlugName, "]\" and \"").concat(urlPaths[0], "\" )."));
            }

            handleSlug(this.optionalRestSlugName, segmentName); // slugName is kept as it can only be one particular slugName

            this.optionalRestSlugName = segmentName; // nextSegment is overwritten to [[...]] so that it can later be sorted specifically

            nextSegment = '[[...]]';
          } else {
            if (this.optionalRestSlugName != null) {
              throw new Error("You cannot use both an optional and required catch-all route at the same level (\"[[...".concat(this.optionalRestSlugName, "]]\" and \"").concat(urlPaths[0], "\")."));
            }

            handleSlug(this.restSlugName, segmentName); // slugName is kept as it can only be one particular slugName

            this.restSlugName = segmentName; // nextSegment is overwritten to [...] so that it can later be sorted specifically

            nextSegment = '[...]';
          }
        } else {
          if (isOptional) {
            throw new Error("Optional route parameters are not yet supported (\"".concat(urlPaths[0], "\")."));
          }

          handleSlug(this.slugName, segmentName); // slugName is kept as it can only be one particular slugName

          this.slugName = segmentName; // nextSegment is overwritten to [] so that it can later be sorted specifically

          nextSegment = '[]';
        }
      } // If this UrlNode doesn't have the nextSegment yet we create a new child UrlNode


      if (!this.children.has(nextSegment)) {
        this.children.set(nextSegment, new UrlNode());
      }

      this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
    }
  }]);

  return UrlNode;
}();

function getSortedRoutes(normalizedPages) {
  // First the UrlNode is created, and every UrlNode can have only 1 dynamic segment
  // Eg you can't have pages/[post]/abc.js and pages/[hello]/something-else.js
  // Only 1 dynamic segment per nesting level
  // So in the case that is test/integration/dynamic-routing it'll be this:
  // pages/[post]/comments.js
  // pages/blog/[post]/comment/[id].js
  // Both are fine because `pages/[post]` and `pages/blog` are on the same level
  // So in this case `UrlNode` created here has `this.slugName === 'post'`
  // And since your PR passed through `slugName` as an array basically it'd including it in too many possibilities
  // Instead what has to be passed through is the upwards path's dynamic names
  var root = new UrlNode(); // Here the `root` gets injected multiple paths, and insert will break them up into sublevels

  normalizedPages.forEach(function (pagePath) {
    return root.insert(pagePath);
  }); // Smoosh will then sort those sublevels up to the point where you get the correct route definition priority

  return root.smoosh();
}

/***/ }),

/***/ 56663:
/***/ (function(module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setConfig = setConfig;
exports["default"] = void 0;
var runtimeConfig;

var _default = function _default() {
  return runtimeConfig;
};

exports["default"] = _default;

function setConfig(configValue) {
  runtimeConfig = configValue;
}

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 97972:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _createClass = __webpack_require__(88361);

var _classCallCheck = __webpack_require__(33227);

var _inherits = __webpack_require__(85971);

var _possibleConstructorReturn = __webpack_require__(52715);

var _getPrototypeOf = __webpack_require__(91193);

var _wrapNativeSuper = __webpack_require__(36558);

var _regeneratorRuntime = __webpack_require__(87794);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.normalizeRepeatedSlashes = normalizeRepeatedSlashes;
exports.loadGetInitialProps = loadGetInitialProps;
exports.ST = exports.SP = exports.warnOnce = exports.isAbsoluteUrl = void 0;

var _async_to_generator = (__webpack_require__(60932)/* ["default"] */ .Z);

function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
} // Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3


var ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;

var isAbsoluteUrl = function isAbsoluteUrl(url) {
  return ABSOLUTE_URL_REGEX.test(url);
};

exports.isAbsoluteUrl = isAbsoluteUrl;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

function normalizeRepeatedSlashes(url) {
  var urlParts = url.split('?');
  var urlNoQuery = urlParts[0];
  return urlNoQuery // first we replace any non-encoded backslashes with forward
  // then normalize repeated forward slashes
  .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? "?".concat(urlParts.slice(1).join('?')) : '');
}

function loadGetInitialProps(App, ctx) {
  return _loadGetInitialProps.apply(this, arguments);
}

function _loadGetInitialProps() {
  _loadGetInitialProps = _async_to_generator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(App, ctx) {
    var ref, message, res, props, _message;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (true) {
              _context.next = 4;
              break;
            }

            if (!((ref = App.prototype) == null ? void 0 : ref.getInitialProps)) {
              _context.next = 4;
              break;
            }

            message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.");
            throw new Error(message);

          case 4:
            // when called from _app `ctx` is nested in `ctx`
            res = ctx.res || ctx.ctx && ctx.ctx.res;

            if (App.getInitialProps) {
              _context.next = 12;
              break;
            }

            if (!(ctx.ctx && ctx.Component)) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return loadGetInitialProps(ctx.Component, ctx.ctx);

          case 9:
            _context.t0 = _context.sent;
            return _context.abrupt("return", {
              pageProps: _context.t0
            });

          case 11:
            return _context.abrupt("return", {});

          case 12:
            _context.next = 14;
            return App.getInitialProps(ctx);

          case 14:
            props = _context.sent;

            if (!(res && isResSent(res))) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", props);

          case 17:
            if (props) {
              _context.next = 20;
              break;
            }

            _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
            throw new Error(_message);

          case 20:
            if (false) {}

            return _context.abrupt("return", props);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadGetInitialProps.apply(this, arguments);
}

var warnOnce = function warnOnce(_) {};

if (false) { var warnings; }

var SP = typeof performance !== 'undefined';
exports.SP = SP;
var ST = SP && ['mark', 'measure', 'getEntriesByName'].every(function (method) {
  return typeof performance[method] === 'function';
});
exports.ST = ST;

var DecodeError = /*#__PURE__*/function (_Error) {
  _inherits(DecodeError, _Error);

  var _super = _createSuper(DecodeError);

  function DecodeError() {
    _classCallCheck(this, DecodeError);

    return _super.apply(this, arguments);
  }

  return _createClass(DecodeError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.DecodeError = DecodeError;

var NormalizeError = /*#__PURE__*/function (_Error2) {
  _inherits(NormalizeError, _Error2);

  var _super2 = _createSuper(NormalizeError);

  function NormalizeError() {
    _classCallCheck(this, NormalizeError);

    return _super2.apply(this, arguments);
  }

  return _createClass(NormalizeError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.NormalizeError = NormalizeError;

var PageNotFoundError = /*#__PURE__*/function (_Error3) {
  _inherits(PageNotFoundError, _Error3);

  var _super3 = _createSuper(PageNotFoundError);

  function PageNotFoundError(page) {
    var _this;

    _classCallCheck(this, PageNotFoundError);

    _this = _super3.call(this);
    _this.code = 'ENOENT';
    _this.message = "Cannot find module for page: ".concat(page);
    return _this;
  }

  return _createClass(PageNotFoundError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.PageNotFoundError = PageNotFoundError;

var MissingStaticPage = /*#__PURE__*/function (_Error4) {
  _inherits(MissingStaticPage, _Error4);

  var _super4 = _createSuper(MissingStaticPage);

  function MissingStaticPage(page, message) {
    var _this2;

    _classCallCheck(this, MissingStaticPage);

    _this2 = _super4.call(this);
    _this2.message = "Failed to load static file for page: ".concat(page, " ").concat(message);
    return _this2;
  }

  return _createClass(MissingStaticPage);
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.MissingStaticPage = MissingStaticPage;

var MiddlewareNotFoundError = /*#__PURE__*/function (_Error5) {
  _inherits(MiddlewareNotFoundError, _Error5);

  var _super5 = _createSuper(MiddlewareNotFoundError);

  function MiddlewareNotFoundError() {
    var _this3;

    _classCallCheck(this, MiddlewareNotFoundError);

    _this3 = _super5.call(this);
    _this3.code = 'ENOENT';
    _this3.message = "Cannot find the middleware module";
    return _this3;
  }

  return _createClass(MiddlewareNotFoundError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.MiddlewareNotFoundError = MiddlewareNotFoundError;
exports.warnOnce = warnOnce;

/***/ }),

/***/ 96086:
/***/ (function(module) {

"use strict";

var assign = Object.assign.bind(Object);
module.exports = assign;
module.exports["default"] = module.exports;

//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ 40037:
/***/ (function() {

"trimStart"in String.prototype||(String.prototype.trimStart=String.prototype.trimLeft),"trimEnd"in String.prototype||(String.prototype.trimEnd=String.prototype.trimRight),"description"in Symbol.prototype||Object.defineProperty(Symbol.prototype,"description",{configurable:!0,get:function(){var t=/\((.*)\)/.exec(this.toString());return t?t[1]:void 0}}),Array.prototype.flat||(Array.prototype.flat=function(t,r){return r=this.concat.apply([],this),t>1&&r.some(Array.isArray)?r.flat(t-1):r},Array.prototype.flatMap=function(t,r){return this.map(t,r).flat()}),Promise.prototype.finally||(Promise.prototype.finally=function(t){if("function"!=typeof t)return this.then(t,t);var r=this.constructor||Promise;return this.then(function(o){return r.resolve(t()).then(function(){return o})},function(o){return r.resolve(t()).then(function(){throw o})})}),Object.fromEntries||(Object.fromEntries=function(t){return Array.from(t).reduce(function(t,r){return t[r[0]]=r[1],t},{})});


/***/ }),

/***/ 90479:
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 7869:
/***/ (function(module) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 66289:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(90479);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 92191:
/***/ (function(module) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 33227:
/***/ (function(module) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 74577:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(9883);

var isNativeReflectConstruct = __webpack_require__(11352);

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 88361:
/***/ (function(module) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 91193:
/***/ (function(module) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 85971:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(9883);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 43152:
/***/ (function(module) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 11352:
/***/ (function(module) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 8086:
/***/ (function(module) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 3595:
/***/ (function(module) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 24818:
/***/ (function(module) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 26754:
/***/ (function(module) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 52715:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(14027)["default"]);

var assertThisInitialized = __webpack_require__(92191);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 9883:
/***/ (function(module) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 85696:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(7869);

var iterableToArrayLimit = __webpack_require__(3595);

var unsupportedIterableToArray = __webpack_require__(5058);

var nonIterableRest = __webpack_require__(24818);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 98434:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(7869);

var iterableToArray = __webpack_require__(8086);

var unsupportedIterableToArray = __webpack_require__(5058);

var nonIterableRest = __webpack_require__(24818);

function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableRest();
}

module.exports = _toArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 7980:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(66289);

var iterableToArray = __webpack_require__(8086);

var unsupportedIterableToArray = __webpack_require__(5058);

var nonIterableSpread = __webpack_require__(26754);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 14027:
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 5058:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(90479);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 36558:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(91193);

var setPrototypeOf = __webpack_require__(9883);

var isNativeFunction = __webpack_require__(43152);

var construct = __webpack_require__(74577);

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 87794:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(34051);


/***/ }),

/***/ 74329:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 34051:
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ 78018:
/***/ (function(module) {

var __dirname = "/";
(function(){"use strict";var n={};!function(){n.d=function(y,T){for(var C in T){if(n.o(T,C)&&!n.o(y,C)){Object.defineProperty(y,C,{enumerable:true,get:T[C]})}}}}();!function(){n.o=function(n,y){return Object.prototype.hasOwnProperty.call(n,y)}}();!function(){n.r=function(n){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(n,"__esModule",{value:true})}}();if(typeof n!=="undefined")n.ab=__dirname+"/";var y={};n.r(y);n.d(y,{getCLS:function(){return E},getFCP:function(){return g},getFID:function(){return F},getINP:function(){return O},getLCP:function(){return _},getTTFB:function(){return G},onCLS:function(){return E},onFCP:function(){return g},onFID:function(){return F},onINP:function(){return O},onLCP:function(){return _},onTTFB:function(){return G}});var T,C,w,P,I,k=-1,o=function(n){addEventListener("pageshow",(function(y){y.persisted&&(k=y.timeStamp,n(y))}),!0)},c=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},u=function(){var n=c();return n&&n.activationStart||0},f=function(n,y){var T=c(),C="navigate";return k>=0?C="back-forward-cache":T&&(C=document.prerendering||u()>0?"prerender":T.type.replace(/_/g,"-")),{name:n,value:void 0===y?-1:y,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:C}},s=function(n,y,T){try{if(PerformanceObserver.supportedEntryTypes.includes(n)){var C=new PerformanceObserver((function(n){y(n.getEntries())}));return C.observe(Object.assign({type:n,buffered:!0},T||{})),C}}catch(n){}},d=function(n,y){var T=function t(T){"pagehide"!==T.type&&"hidden"!==document.visibilityState||(n(T),y&&(removeEventListener("visibilitychange",t,!0),removeEventListener("pagehide",t,!0)))};addEventListener("visibilitychange",T,!0),addEventListener("pagehide",T,!0)},l=function(n,y,T,C){var w,P;return function(I){y.value>=0&&(I||C)&&((P=y.value-(w||0))||void 0===w)&&(w=y.value,y.delta=P,y.rating=function(n,y){return n>y[1]?"poor":n>y[0]?"needs-improvement":"good"}(y.value,T),n(y))}},N=-1,v=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},m=function(){d((function(n){var y=n.timeStamp;N=y}),!0)},h=function(){return N<0&&(N=v(),m(),o((function(){setTimeout((function(){N=v(),m()}),0)}))),{get firstHiddenTime(){return N}}},g=function(n,y){y=y||{};var T,C=[1800,3e3],w=h(),P=f("FCP"),c=function(n){n.forEach((function(n){"first-contentful-paint"===n.name&&(k&&k.disconnect(),n.startTime<w.firstHiddenTime&&(P.value=n.startTime-u(),P.entries.push(n),T(!0)))}))},I=window.performance&&window.performance.getEntriesByName&&window.performance.getEntriesByName("first-contentful-paint")[0],k=I?null:s("paint",c);(I||k)&&(T=l(n,P,C,y.reportAllChanges),I&&c([I]),o((function(w){P=f("FCP"),T=l(n,P,C,y.reportAllChanges),requestAnimationFrame((function(){requestAnimationFrame((function(){P.value=performance.now()-w.timeStamp,T(!0)}))}))})))},j=!1,q=-1,E=function(n,y){y=y||{};var T=[.1,.25];j||(g((function(n){q=n.value})),j=!0);var C,i=function(y){q>-1&&n(y)},w=f("CLS",0),P=0,I=[],p=function(n){n.forEach((function(n){if(!n.hadRecentInput){var y=I[0],T=I[I.length-1];P&&n.startTime-T.startTime<1e3&&n.startTime-y.startTime<5e3?(P+=n.value,I.push(n)):(P=n.value,I=[n]),P>w.value&&(w.value=P,w.entries=I,C())}}))},k=s("layout-shift",p);k&&(C=l(i,w,T,y.reportAllChanges),d((function(){p(k.takeRecords()),C(!0)})),o((function(){P=0,q=-1,w=f("CLS",0),C=l(i,w,T,y.reportAllChanges)})))},x={passive:!0,capture:!0},z=new Date,L=function(n,y){T||(T=y,C=n,w=new Date,A(removeEventListener),S())},S=function(){if(C>=0&&C<w-z){var n={entryType:"first-input",name:T.type,target:T.target,cancelable:T.cancelable,startTime:T.timeStamp,processingStart:T.timeStamp+C};P.forEach((function(y){y(n)})),P=[]}},b=function(n){if(n.cancelable){var y=(n.timeStamp>1e12?new Date:performance.now())-n.timeStamp;"pointerdown"==n.type?function(n,y){var t=function(){L(n,y),i()},r=function(){i()},i=function(){removeEventListener("pointerup",t,x),removeEventListener("pointercancel",r,x)};addEventListener("pointerup",t,x),addEventListener("pointercancel",r,x)}(y,n):L(y,n)}},A=function(n){["mousedown","keydown","touchstart","pointerdown"].forEach((function(y){return n(y,b,x)}))},F=function(n,y){y=y||{};var w,I=[100,300],k=h(),N=f("FID"),v=function(n){n.startTime<k.firstHiddenTime&&(N.value=n.processingStart-n.startTime,N.entries.push(n),w(!0))},m=function(n){n.forEach(v)},j=s("first-input",m);w=l(n,N,I,y.reportAllChanges),j&&d((function(){m(j.takeRecords()),j.disconnect()}),!0),j&&o((function(){var k;N=f("FID"),w=l(n,N,I,y.reportAllChanges),P=[],C=-1,T=null,A(addEventListener),k=v,P.push(k),S()}))},J=0,K=1/0,Q=0,M=function(n){n.forEach((function(n){n.interactionId&&(K=Math.min(K,n.interactionId),Q=Math.max(Q,n.interactionId),J=Q?(Q-K)/7+1:0)}))},B=function(){return I?J:performance.interactionCount||0},D=function(){"interactionCount"in performance||I||(I=s("event",M,{type:"event",buffered:!0,durationThreshold:0}))},U=0,R=function(){return B()-U},V=[],W={},H=function(n){var y=V[V.length-1],T=W[n.interactionId];if(T||V.length<10||n.duration>y.latency){if(T)T.entries.push(n),T.latency=Math.max(T.latency,n.duration);else{var C={id:n.interactionId,latency:n.duration,entries:[n]};W[C.id]=C,V.push(C)}V.sort((function(n,y){return y.latency-n.latency})),V.splice(10).forEach((function(n){delete W[n.id]}))}},O=function(n,y){y=y||{};var T=[200,500];D();var C,w=f("INP"),a=function(n){n.forEach((function(n){(n.interactionId&&H(n),"first-input"===n.entryType)&&(!V.some((function(y){return y.entries.some((function(y){return n.duration===y.duration&&n.startTime===y.startTime}))}))&&H(n))}));var y,T=(y=Math.min(V.length-1,Math.floor(R()/50)),V[y]);T&&T.latency!==w.value&&(w.value=T.latency,w.entries=T.entries,C())},P=s("event",a,{durationThreshold:y.durationThreshold||40});C=l(n,w,T,y.reportAllChanges),P&&(P.observe({type:"first-input",buffered:!0}),d((function(){a(P.takeRecords()),w.value<0&&R()>0&&(w.value=0,w.entries=[]),C(!0)})),o((function(){V=[],U=B(),w=f("INP"),C=l(n,w,T,y.reportAllChanges)})))},X={},_=function(n,y){y=y||{};var T,C=[2500,4e3],w=h(),P=f("LCP"),c=function(n){var y=n[n.length-1];if(y){var C=y.startTime-u();C<w.firstHiddenTime&&(P.value=C,P.entries=[y],T())}},I=s("largest-contentful-paint",c);if(I){T=l(n,P,C,y.reportAllChanges);var v=function(){X[P.id]||(c(I.takeRecords()),I.disconnect(),X[P.id]=!0,T(!0))};["keydown","click"].forEach((function(n){addEventListener(n,v,{once:!0,capture:!0})})),d(v,!0),o((function(w){P=f("LCP"),T=l(n,P,C,y.reportAllChanges),requestAnimationFrame((function(){requestAnimationFrame((function(){P.value=performance.now()-w.timeStamp,X[P.id]=!0,T(!0)}))}))}))}},Y=function e(n){document.prerendering?addEventListener("prerenderingchange",(function(){return e(n)}),!0):"complete"!==document.readyState?addEventListener("load",(function(){return e(n)}),!0):setTimeout(n,0)},G=function(n,y){y=y||{};var T=[800,1800],C=f("TTFB"),w=l(n,C,T,y.reportAllChanges);Y((function(){var P=c();if(P){if(C.value=Math.max(P.responseStart-u(),0),C.value<0||C.value>performance.now())return;C.entries=[P],w(!0),o((function(){C=f("TTFB",0),(w=l(n,C,T,y.reportAllChanges))(!0)}))}}))};module.exports=y})();

/***/ }),

/***/ 80676:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = isError;
exports.getProperError = getProperError;
var _isPlainObject = __webpack_require__(51187);
function isError(err) {
    return typeof err === "object" && err !== null && "name" in err && "message" in err;
}
function getProperError(err) {
    if (isError(err)) {
        return err;
    }
    if (false) {}
    return new Error((0, _isPlainObject).isPlainObject(err) ? JSON.stringify(err) : err + "");
}

//# sourceMappingURL=is-error.js.map

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [9774], function() { return __webpack_exec__(9178); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=main-3da1d68c8ac80901.js.map