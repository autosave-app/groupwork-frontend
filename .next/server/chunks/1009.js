"use strict";
exports.id = 1009;
exports.ids = [1009];
exports.modules = {

/***/ 69860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* binding */ initClient)
});

// EXTERNAL MODULE: external "lodash/pick"
var pick_ = __webpack_require__(84159);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick_);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(29114);
// EXTERNAL MODULE: external "@apollo/client/link/context"
var context_ = __webpack_require__(97812);
// EXTERNAL MODULE: external "@apollo/client/link/error"
var error_ = __webpack_require__(79114);
// EXTERNAL MODULE: external "lodash/get"
var get_ = __webpack_require__(1712);
var get_default = /*#__PURE__*/__webpack_require__.n(get_);
;// CONCATENATED MODULE: ./lib/two-factor-authentication/index.js
const TwoFactorAuthenticationHeader = 'x-two-factor-authentication';
;// CONCATENATED MODULE: ./lib/two-factor-authentication/TwoFactorAuthenticationApolloLink.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // adapted from https://github.com/apollographql/apollo-client/blob/main/src/link/retry/retryLink.ts

class RetryOperation {
  constructor(operation, nextLink, twoFactorAuthContext) {
    _defineProperty(this, "onNext", value => {
      if (value.errors && !this.waitingForTwoFactorAuthCode) {
        if (get_default()(value.errors, '0.extensions.code') === '2FA_REQUIRED') {
          const supportedMethods = get_default()(value.errors, '0.extensions.supportedMethods', []);

          this.waitingForTwoFactorAuthCode = true;
          this.twoFactorAuthContext.prompt.open({
            supportedMethods
          }).then(({
            type,
            code
          }) => {
            this.operation.setContext(prevContext => _objectSpread(_objectSpread({}, prevContext), {}, {
              headers: _objectSpread(_objectSpread({}, prevContext.headers), {}, {
                [TwoFactorAuthenticationHeader]: `${type} ${code}`
              })
            }));
            this.try();
            this.waitingForTwoFactorAuthCode = false;
          }).catch(() => {
            this.onNext(value);
            this.waitingForTwoFactorAuthCode = false;
            this.onComplete();
          });
          return;
        }
      }

      this.values.push(value);

      for (const observer of this.observers) {
        if (!observer) {
          continue;
        }

        observer.next(value);
      }
    });

    _defineProperty(this, "onComplete", () => {
      if (this.waitingForTwoFactorAuthCode) {
        return;
      }

      this.complete = true;

      for (const observer of this.observers) {
        if (!observer) {
          continue;
        }

        observer.complete();
      }
    });

    _defineProperty(this, "onError", error => {
      this.error = error;

      for (const observer of this.observers) {
        if (!observer) {
          continue;
        }

        observer.error(error);
      }
    });

    _defineProperty(this, "cancel", () => {
      if (this.currentSubscription) {
        this.currentSubscription.unsubscribe();
      }

      this.currentSubscription = null;
      this.canceled = true;
    });

    _defineProperty(this, "subscribe", observer => {
      if (this.canceled) {
        throw new Error(`Subscribing to a TwoFactorRetryOperation link that was canceled is not supported`);
      }

      this.observers.push(observer);

      for (const value of this.values) {
        observer.next(value);
      }

      if (this.complete) {
        observer.complete();
      } else if (this.error) {
        observer.error(this.error);
      }
    });

    this.operation = operation;
    this.nextLink = nextLink;
    this.values = [];
    this.observers = [];
    this.complete = false;
    this.error = null;
    this.canceled = false;
    this.currentSubscription = null;
    this.twoFactorAuthContext = twoFactorAuthContext;
    this.waitingForTwoFactorAuthCode = false;
  }

  try() {
    this.nextLink(this.operation).subscribe({
      next: this.onNext,
      error: this.onError,
      complete: this.onComplete
    });
  }

  unsubscribe(observer) {
    const index = this.observers.indexOf(observer);

    if (index < 0) {
      throw new Error(`TwoFactorRetryOperation BUG! Attempting to unsubscribe unknown observer!`);
    }

    this.observers[index] = null;

    if (this.observers.every(o => o === null)) {
      this.cancel();
    }
  }

}

class TwoFactorAuthenticationApolloLink extends client_.ApolloLink {
  constructor(twoFactorAuthContext) {
    super();
    this.twoFactorAuthContext = twoFactorAuthContext;
  }

  request(operation, nextLink) {
    const retryLink = new RetryOperation(operation, nextLink, this.twoFactorAuthContext);
    retryLink.try();
    return new client_.Observable(observer => {
      retryLink.subscribe(observer);
      return () => {
        retryLink.unsubscribe(observer);
      };
    });
  }

}
// EXTERNAL MODULE: ./lib/local-storage.ts
var local_storage = __webpack_require__(35427);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(97079);
;// CONCATENATED MODULE: ./lib/apollo-client.ts


function apollo_client_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function apollo_client_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? apollo_client_ownKeys(Object(source), !0).forEach(function (key) { apollo_client_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : apollo_client_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function apollo_client_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// This file is mostly adapted from:
// https://github.com/zeit/next.js/blob/3949c82bdfe268f841178979800aa8e71bbf412c/examples/with-apollo/lib/initApollo.js






let apolloClient, customAgent;
const INTERNAL_API_V1_URL = process.env.INTERNAL_API_V1_URL;
const INTERNAL_API_V2_URL = process.env.INTERNAL_API_V2_URL;
const INTERNAL_API_V1_OPERATION_NAMES = process.env.INTERNAL_API_V1_OPERATION_NAMES;
const INTERNAL_API_V2_OPERATION_NAMES = process.env.INTERNAL_API_V2_OPERATION_NAMES;

const getBaseApiUrl = (apiVersion, internal = false) => {
  if (false) {}

  if (internal) {
    if (apiVersion === 'v1' && INTERNAL_API_V1_URL) {
      return INTERNAL_API_V1_URL;
    } else if (apiVersion === 'v2' && INTERNAL_API_V2_URL) {
      return INTERNAL_API_V2_URL;
    }
  }

  return "http://localhost:3060" || 0;
};
/**
 * Returns the GraphQL api url for the appropriate api version and environment.
 * @param {string} version - api version. Defaults to v1.
 * @returns {string} GraphQL api url.
 */


const getGraphqlUrl = (apiVersion, internal = false) => {
  const apiKey =  true ? "dvl-1510egmf4a23d80342403fb599qd" : 0;
  return `${getBaseApiUrl(apiVersion, internal)}/graphql/${apiVersion}${apiKey ? `?api_key=${apiKey}` : ''}`;
};

const getCustomAgent = () => {
  if (!customAgent) {
    const {
      FETCH_AGENT_KEEP_ALIVE,
      FETCH_AGENT_KEEP_ALIVE_MSECS
    } = process.env;
    const keepAlive = FETCH_AGENT_KEEP_ALIVE !== undefined ? (0,utils/* parseToBoolean */.DD)(FETCH_AGENT_KEEP_ALIVE) : true;
    const keepAliveMsecs = FETCH_AGENT_KEEP_ALIVE_MSECS ? Number(FETCH_AGENT_KEEP_ALIVE_MSECS) : 10000;

    const http = __webpack_require__(13685);

    const https = __webpack_require__(95687);

    const httpAgent = new http.Agent({
      keepAlive,
      keepAliveMsecs
    });
    const httpsAgent = new https.Agent({
      keepAlive,
      keepAliveMsecs
    });

    customAgent = _parsedURL => _parsedURL.protocol === 'http:' ? httpAgent : httpsAgent;
  }

  return customAgent;
};

const serverSideFetch = async (url, options = {}) => {
  const nodeFetch = __webpack_require__(74809);

  options.agent = getCustomAgent(); // Add headers to help the API identify origin of requests

  options.headers = options.headers || {};
  options.headers['oc-env'] = "ci";
  options.headers['oc-secret'] = process.env.OC_SECRET;
  options.headers['oc-application'] = process.env.OC_APPLICATION;
  options.headers['user-agent'] = 'opencollective-frontend/1.0 node-fetch/1.0'; // Start benchmarking if the request is server side

  const start = process.hrtime.bigint();
  const result = await nodeFetch(url, options); // Complete benchmark measure and log

  if (process.env.GRAPHQL_BENCHMARK) {
    const end = process.hrtime.bigint();
    const executionTime = Math.round(Number(end - start) / 1000000);
    const apiExecutionTime = result.headers.get('Execution-Time');
    const latencyTime = apiExecutionTime ? executionTime - Number(apiExecutionTime) : null;
    const body = JSON.parse(options.body);

    if (body.operationName || body.variables) {
      const pickList = ['CollectiveId', 'collectiveSlug', 'CollectiveSlug', 'id', 'ledgacyId', 'legacyExpenseId', 'slug', 'term', 'tierId'];
      const operationName = body.operationName || 'anonymous GraphQL query';
      const variables = pick_default()(body.variables, pickList) || {}; // eslint-disable-next-line no-console

      console.log('-> Fetched', operationName, variables, executionTime ? `in ${executionTime}ms` : '', latencyTime ? `latency=${latencyTime}ms` : '');
    }
  }

  return result;
};

function createLink({
  twoFactorAuthContext
}) {
  const authLink = (0,context_.setContext)((_, {
    headers
  }) => {
    const token = (0,local_storage/* getFromLocalStorage */.fp)(local_storage/* LOCAL_STORAGE_KEYS.ACCESS_TOKEN */.dA.ACCESS_TOKEN);

    if (token) {
      return {
        headers: apollo_client_objectSpread({
          authorization: `Bearer ${token}`
        }, headers)
      };
    }
  });
  const errorLink = (0,error_.onError)(({
    graphQLErrors,
    networkError
  }) => {
    if (graphQLErrors) {
      graphQLErrors.map(error => {
        if (error) {
          const {
            message,
            locations,
            path
          } = error; // eslint-disable-next-line no-console

          console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
          return;
        } // eslint-disable-next-line no-console


        console.error('[GraphQL error]: Received null error');
      });
    }

    if (networkError) {
      // eslint-disable-next-line no-console
      console.error(`[Network error]: ${networkError}`);
    }
  });
  const linkFetch =  false ? 0 : serverSideFetch;
  const apiV1DefaultLink = new client_.HttpLink({
    uri: getGraphqlUrl('v1'),
    fetch: linkFetch
  });
  const apiV2DefaultLink = new client_.HttpLink({
    uri: getGraphqlUrl('v2'),
    fetch: linkFetch
  }); // Setup internal links handling to be able to split traffic to different API servers

  const apiV1Link = INTERNAL_API_V1_URL && !false ? client_.ApolloLink.split(({
    operationName
  }) => !INTERNAL_API_V1_OPERATION_NAMES || INTERNAL_API_V1_OPERATION_NAMES.split(',').includes(operationName), new client_.HttpLink({
    uri: getGraphqlUrl('v1', true),
    fetch: linkFetch
  }), apiV1DefaultLink) : apiV1DefaultLink;
  const apiV2Link = INTERNAL_API_V2_URL && !false ? client_.ApolloLink.split(({
    operationName
  }) => !INTERNAL_API_V2_OPERATION_NAMES || INTERNAL_API_V2_OPERATION_NAMES.split(',').includes(operationName), new client_.HttpLink({
    uri: getGraphqlUrl('v2', true),
    fetch: linkFetch
  }), apiV2DefaultLink) : apiV2DefaultLink;
  /** Depending on the value of the context.apiVersion we choose to use the link for the api
   * v1 or the api v2.
   */

  const httpLink = client_.ApolloLink.split(operation => operation.getContext().apiVersion === '2', // Routes the query to the proper client
  apiV2Link, apiV1Link);
  const twoFactorAuthLink = new TwoFactorAuthenticationApolloLink(twoFactorAuthContext);
  return client_.ApolloLink.from([errorLink, authLink, twoFactorAuthLink, httpLink]);
}

function createInMemoryCache() {
  const inMemoryCache = new client_.InMemoryCache({
    // Documentation:
    // https://www.apollographql.com/docs/react/data/fragments/#using-fragments-with-unions-and-interfaces
    possibleTypes: {
      Transaction: ['Expense', 'Order'],
      CollectiveInterface: ['Collective', 'Event', 'Project', 'Fund', 'Organization', 'User', 'Vendor'],
      Account: ['Collective', 'Host', 'Individual', 'Fund', 'Project', 'Bot', 'Event', 'Organization', 'Vendor'],
      AccountWithHost: ['Collective', 'Event', 'Fund', 'Project'],
      AccountWithParent: ['Event', 'Project'],
      AccountWithContributions: ['Collective', 'Event', 'Fund', 'Project', 'Host']
    },
    // Documentation:
    // https://www.apollographql.com/docs/react/caching/cache-field-behavior/#merging-non-normalized-objects
    typePolicies: {
      Event: {
        fields: {
          tiers: {
            merge(existing, incoming) {
              return incoming;
            }

          }
        }
      }
    }
  });
  return inMemoryCache;
}

function createClient({
  initialState,
  twoFactorAuthContext
} = {}) {
  const cache = createInMemoryCache();

  if (initialState) {
    cache.restore(initialState);
  }

  const link = createLink({
    twoFactorAuthContext
  });
  return new client_.ApolloClient({
    cache,
    link,
    connectToDevTools: false,
    ssrMode: !false,
    // Disables forceFetch on the server (so queries are only run once)
    ssrForceFetchDelay: 100 // See https://www.apollographql.com/docs/react/performance/server-side-rendering/#store-rehydration

  });
}

function initClient({
  initialState,
  twoFactorAuthContext
} = {}) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (true) {
    return createClient({
      initialState
    });
  } // Reuse client on the client-side


  if (!apolloClient) {
    apolloClient = createClient({
      initialState,
      twoFactorAuthContext
    });
  }

  return apolloClient;
}

/***/ }),

/***/ 70137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AB": () => (/* binding */ useTwoFactorAuthenticationPrompt),
/* harmony export */   "fT": () => (/* binding */ withTwoFactorAuthentication)
/* harmony export */ });
/* unused harmony exports TwoFactorAuthContext, default */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class TwoFactorAuthPrompt {
  constructor(onChange) {
    _defineProperty(this, "open", async ({
      supportedMethods
    } = {}) => {
      if (this.isOpen) {
        return;
      }

      this.supportedMethods = supportedMethods || [];
      this.setIsOpen(true);

      try {
        const code = await new Promise((resolve, reject) => {
          this.resolvePromise = resolve;
          this.rejectPromise = reject;
        });
        this.setIsOpen(false);
        return code;
      } finally {
        this.setIsOpen(false);
      }
    });

    _defineProperty(this, "resolveAuth", args => this?.resolvePromise(args));

    _defineProperty(this, "rejectAuth", args => this?.rejectPromise(args));

    _defineProperty(this, "setIsOpen", value => {
      this.isOpen = value;
      this.onChange(value);
    });

    this.resolvePromise = () => {};

    this.rejectPromise = () => {};

    this.isOpen = false;
    this.onChange = onChange;
    this.supportedMethods = [];
  }

}

const TwoFactorAuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  prompt: {
    open: () => {},
    resolveAuth: () => {},
    rejectAuth: () => {},
    isOpen: false
  }
});
function useTwoFactorAuthenticationPrompt() {
  const twoFactorAuthContext = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(TwoFactorAuthContext);
  return twoFactorAuthContext.prompt;
}
function withTwoFactorAuthentication(WrappedComponent) {
  const withTwoFactorAuthentication = function W(props) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(TwoFactorAuthProvider, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(TwoFactorAuthContext.Consumer, {
        children: context => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(WrappedComponent, _objectSpread(_objectSpread({}, props), {}, {
            twoFactorAuthContext: context
          }));
        }
      })
    });
  };

  withTwoFactorAuthentication.getInitialProps = async context => {
    return WrappedComponent.getInitialProps ? await WrappedComponent.getInitialProps(context) : {};
  };

  return withTwoFactorAuthentication;
}
function TwoFactorAuthProvider({
  children
}) {
  const [contextChanged, setContextChanged] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0);
  const twoFactorAuthPrompt = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => {
    return new TwoFactorAuthPrompt(() => {
      setContextChanged(new Date().getTime());
    });
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(TwoFactorAuthContext.Provider, {
    value: {
      prompt: twoFactorAuthPrompt,
      contextChanged
    },
    children: children
  });
}
TwoFactorAuthProvider.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TwoFactorAuthProvider",
  "props": {
    "children": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    }
  }
};

/***/ }),

/***/ 1009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91836);
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _two_factor_authentication_TwoFactorAuthenticationContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70137);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69860);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97079);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// This file is mostly adapted from:
// https://github.com/zeit/next.js/blob/3949c82bdfe268f841178979800aa8e71bbf412c/examples/with-apollo/lib/withData.js




 // Gets the display name of a JSX component for dev tools



function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

const withData = ComposedComponent => {
  var _class;

  return _class = class WithData extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
    static async getInitialProps(context) {
      const {
        Component
      } = context;
      const client = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__/* .initClient */ .E)(); // Evaluate the composed component's getInitialProps()

      let composedInitialProps = {};

      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(_objectSpread(_objectSpread({}, context), {}, {
          client
        }));
      }

      try {
        // Run all GraphQL queries
        const skipDataFromTree = composedInitialProps['pageProps']?.skipDataFromTree || false;

        if (!skipDataFromTree) {
          await (0,_apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_1__.getDataFromTree)( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(ComposedComponent, _objectSpread({
            Component: Component
          }, composedInitialProps)), {
            client
          });
        }
      } catch (error) {
        // Prevent Apollo Client GraphQL errors from crashing SSR.
        // Handle them in components via the data.error prop:
        // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
        if (process.env.DEBUG) {
          // eslint-disable-next-line no-console
          console.error('>>> apollo error: ', error);
        }
      } // Extract query data from the Apollo store


      const serverState = {
        apollo: {
          data: client.cache.extract()
        }
      };
      return _objectSpread({
        serverState
      }, composedInitialProps);
    }

    constructor(props) {
      super(props);

      _defineProperty(this, "client", void 0);

      const {
        serverState,
        twoFactorAuthContext
      } = this.props;
      this.client = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__/* .initClient */ .E)({
        initialState: serverState.apollo.data,
        twoFactorAuthContext
      });
    }

    render() {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(ComposedComponent, _objectSpread(_objectSpread({}, this.props), {}, {
        client: this.client
      }));
    }

  }, _defineProperty(_class, "displayName", `WithData(${getComponentDisplayName(ComposedComponent)})`), _defineProperty(_class, "defaultProps", {
    serverState: {
      apollo: {
        data: {}
      }
    }
  }), _class;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .compose */ .qC)(_two_factor_authentication_TwoFactorAuthenticationContext__WEBPACK_IMPORTED_MODULE_2__/* .withTwoFactorAuthentication */ .fT, withData));

/***/ })

};
;