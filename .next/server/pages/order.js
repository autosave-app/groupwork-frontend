"use strict";
(() => {
var exports = {};
exports.id = 1941;
exports.ids = [1941];
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

/***/ 56912:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrderPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10582);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_toNumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69860);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5700);
/* harmony import */ var _lib_dayjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82114);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32651);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(62131);
/* harmony import */ var _lib_i18n_payment_method_provider_type__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1059);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(25896);
/* harmony import */ var _components_collective_navbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(38208);
/* harmony import */ var _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(97585);
/* harmony import */ var _components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5824);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(69078);
/* harmony import */ var _components_DateTime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(95370);
/* harmony import */ var _components_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(27596);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(16159);
/* harmony import */ var _components_host_dashboard_CreatePendingOrderModal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(54646);
/* harmony import */ var _components_HTMLContent__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(74770);
/* harmony import */ var _components_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(40777);
/* harmony import */ var _components_LinkCollective__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(97619);
/* harmony import */ var _components_MessageBox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(37278);
/* harmony import */ var _components_orders_OrderStatusTag__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(5455);
/* harmony import */ var _components_orders_ProcessOrderButtons__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(28374);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(84842);
/* harmony import */ var _components_PaymentMethodTypeWithIcon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(10506);
/* harmony import */ var _components_StyledButton__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(87268);
/* harmony import */ var _components_StyledCard__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(19156);
/* harmony import */ var _components_StyledHr__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(173);
/* harmony import */ var _components_StyledLink__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(51082);
/* harmony import */ var _components_StyledTag__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(36422);
/* harmony import */ var _components_StyledTooltip__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(88609);
/* harmony import */ var _components_Tags__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(14540);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(90998);
/* harmony import */ var _components_transactions_TransactionItem__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(1223);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_16__, _components_host_dashboard_CreatePendingOrderModal__WEBPACK_IMPORTED_MODULE_23__, _components_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_25__, _components_orders_ProcessOrderButtons__WEBPACK_IMPORTED_MODULE_29__, _components_Page__WEBPACK_IMPORTED_MODULE_30__, _components_StyledTooltip__WEBPACK_IMPORTED_MODULE_37__, _components_Tags__WEBPACK_IMPORTED_MODULE_38__, _components_transactions_TransactionItem__WEBPACK_IMPORTED_MODULE_40__]);
([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_16__, _components_host_dashboard_CreatePendingOrderModal__WEBPACK_IMPORTED_MODULE_23__, _components_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_25__, _components_orders_ProcessOrderButtons__WEBPACK_IMPORTED_MODULE_29__, _components_Page__WEBPACK_IMPORTED_MODULE_30__, _components_StyledTooltip__WEBPACK_IMPORTED_MODULE_37__, _components_Tags__WEBPACK_IMPORTED_MODULE_38__, _components_transactions_TransactionItem__WEBPACK_IMPORTED_MODULE_40__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









































const orderPageQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`
  query OrderPage($legacyId: Int!, $collectiveSlug: String!) {
    order(order: { legacyId: $legacyId }) {
      id
      legacyId
      status
      description
      tags
      totalAmount {
        valueInCents
        currency
      }
      amount {
        valueInCents
        currency
      }
      paymentMethod {
        id
        type
      }
      createdAt
      processedAt
      hostFeePercent
      pendingContributionData {
        expectedAt
        paymentMethod
        ponumber
        memo
        fromAccountInfo {
          name
          email
        }
      }
      memo
      fromAccount {
        id
        slug
        name
        imageUrl
      }
      toAccount {
        id
        slug
        name
        imageUrl
        ... on AccountWithHost {
          bankTransfersHostFeePercent: hostFeePercent(paymentMethodType: MANUAL)
        }
      }
      createdByAccount {
        id
        slug
        name
        imageUrl
      }
      permissions {
        id
        canMarkAsExpired
        canMarkAsPaid
        canEdit
      }
      transactions {
        id
        legacyId
        group
        description
        type
        kind
        createdAt
        order {
          id
        }
        amount {
          valueInCents
          currency
        }
        netAmount {
          valueInCents
          currency
        }
        paymentProcessorFee {
          valueInCents
          currency
        }
        fromAccount {
          id
          slug
          name
          imageUrl
        }
        account {
          id
          slug
          name
          imageUrl
        }
      }
    }
    account(slug: $collectiveSlug) {
      id
      legacyId
      slug
      name
      type
      imageUrl
      backgroundImageUrl
      isActive
      description
      settings
      twitterHandle
      currency
      expensePolicy
      supportedExpenseTypes
      features {
        id
        ...NavbarFields
        MULTI_CURRENCY_EXPENSES
      }
      location {
        id
        address
        country
      }

      stats {
        id
        balanceWithBlockedFunds {
          valueInCents
          currency
        }
      }

      ... on AccountWithParent {
        parent {
          id
          slug
          imageUrl
          backgroundImageUrl
          twitterHandle
        }
      }
      ... on AccountWithHost {
        host {
          id
          name
          slug
          imageUrl
          backgroundImageUrl
          twitterHandle
        }
      }
    }
  }

  ${_components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_18__/* .collectiveNavbarFieldsFragment */ .AS}
`;
const getServerSideProps = async context => {
  const {
    collectiveSlug,
    OrderId
  } = context.query;
  const client = (0,_lib_apollo_client__WEBPACK_IMPORTED_MODULE_8__/* .initClient */ .E)();
  const {
    data,
    error
  } = await client.query({
    query: orderPageQuery,
    variables: {
      legacyId: lodash_toNumber__WEBPACK_IMPORTED_MODULE_0___default()(OrderId),
      collectiveSlug
    },
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_12__/* .API_V2_CONTEXT */ .T,
    fetchPolicy: 'network-only'
  });
  return {
    props: _objectSpread(_objectSpread({
      query: context.query
    }, data), {}, {
      error: error || null
    }) // will be passed to the page component as props

  };
};
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)({
  title: {
    id: "OrderPage.title",
    defaultMessage: [{
      "type": 1,
      "value": "title"
    }, {
      "type": 0,
      "value": " · Contribution #"
    }, {
      "type": 1,
      "value": "id"
    }]
  }
});
const ButtonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Flex */ .kC).attrs({
  'data-cy': 'order-actions'
}).withConfig({
  displayName: "order__ButtonsContainer",
  componentId: "sc-1ypj8fx-0"
})(["flex-wrap:wrap;transition:opacity 0.05s;justify-content:flex-end;@media (max-width:40em){justify-content:center;}& > *:last-child{margin-right:0;}"]);

const OrderDetails = ({
  children: [field, value]
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Box */ .xu, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_39__.P, {
    fontWeight: "500",
    fontSize: "11px",
    lineHeight: "12px",
    textTransform: "uppercase",
    color: "black.700",
    letterSpacing: "0.06em",
    children: field
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_39__.P, {
    fontSize: "12px",
    color: "black.700",
    lineHeight: "18px",
    mt: 1,
    children: value
  })]
});

const TransactionDetailsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Flex */ .kC).withConfig({
  displayName: "order__TransactionDetailsWrapper",
  componentId: "sc-1ypj8fx-1"
})(["padding-bottom:16px;:not(:last-child){border-bottom:1px dotted #e6e8eb;margin-bottom:24px;}"]);

const TransactionDetails = _ref => {
  let {
    children: [title, value, fees, description]
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(TransactionDetailsWrapper, _objectSpread(_objectSpread({}, props), {}, {
    alignItems: "center",
    justifyContent: "space-between",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Box */ .xu, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Box */ .xu, {
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "20px",
        color: "black.900",
        children: title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Box */ .xu, {
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "18px",
        color: "black.700",
        children: description
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Box */ .xu, {
      textAlign: "end",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_39__.P, {
        fontWeight: "700",
        fontSize: "16px",
        lineHeight: "24px",
        color: "black.900",
        children: value
      }), fees && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_39__.P, {
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "18px",
        color: "black.700",
        children: fees
      })]
    })]
  }));
};

const SummaryHeader = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_components_Text__WEBPACK_IMPORTED_MODULE_39__.H1).withConfig({
  displayName: "order__SummaryHeader",
  componentId: "sc-1ypj8fx-2"
})(["> a{color:inherit;text-decoration:underline;:hover{color:", ";}}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_5__.themeGet)('colors.black.600'));
const OverdueTag = styled_components__WEBPACK_IMPORTED_MODULE_7___default().span.withConfig({
  displayName: "order__OverdueTag",
  componentId: "sc-1ypj8fx-3"
})(["padding:2px 6px;background:", ";color:", ";border-radius:4px;"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_5__.themeGet)('colors.yellow.300'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_5__.themeGet)('colors.yellow.900'));
function OrderPage(props) {
  const {
    LoggedInUser
  } = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)();
  const [fetchData, query] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useLazyQuery)(orderPageQuery, {
    variables: {
      legacyId: lodash_toNumber__WEBPACK_IMPORTED_MODULE_0___default()(props.order.legacyId),
      collectiveSlug: props.account.slug
    },
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_12__/* .API_V2_CONTEXT */ .T
  });
  const [showCreatePendingOrderModal, setShowCreatePendingOrderModal] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(false);
  const baseMetadata = (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_9__/* .getCollectivePageMetadata */ .Xq)(props?.account);
  const data = query?.data || props;
  const account = data.account;
  const order = data.order;
  const error = query?.error || props.error;
  const isPending = order?.status === 'PENDING';
  const isOverdue = isPending && order.pendingContributionData?.expectedAt && (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)().isAfter((0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(order.pendingContributionData.expectedAt));
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)();
  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(() => {
    if (LoggedInUser) {
      fetchData();
    }
  }, [LoggedInUser]);
  const accountTransactions = order?.transactions?.filter(t => t.account.id === account.id);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(_components_Page__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    collective: account,
    canonicalURL: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_15__/* .getCollectivePageCanonicalURL */ .Bu)(account)}/orders`
  }, baseMetadata), {}, {
    title: intl.formatMessage(messages.title, {
      title: order.description,
      id: order.legacyId
    }),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_collective_navbar__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
      collective: account,
      isLoading: !account,
      selectedCategory: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_17__/* .NAVBAR_CATEGORIES.BUDGET */ .t.BUDGET
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Flex */ .kC, {
      justifyContent: "center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Flex */ .kC, {
        maxWidth: "1200px",
        py: [0, 5],
        px: [2, 3, 4],
        mt: 2,
        mb: 5,
        flexDirection: ['column', null, null, 'row'],
        justifyContent: 'space-between',
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Box */ .xu, {
          flex: "1 0",
          flexBasis: ['initial', null, null, '832px'],
          width: "100%",
          mr: [null, 2, 3, 4],
          children: [error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_MessageBox__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
            type: "error",
            withIcon: true,
            m: 4,
            children: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_11__/* .formatErrorMessage */ .jN)(intl, error)
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(SummaryHeader, {
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "32px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
              id: "PendingContributionSummary",
              defaultMessage: [{
                "type": 5,
                "value": "status",
                "options": {
                  "PENDING": {
                    "value": [{
                      "type": 0,
                      "value": "Pending Contribution"
                    }]
                  },
                  "other": {
                    "value": [{
                      "type": 0,
                      "value": "Contribution"
                    }]
                  }
                }
              }, {
                "type": 0,
                "value": " to "
              }, {
                "type": 1,
                "value": "account"
              }],
              values: {
                status: order.status,
                account: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_LinkCollective__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                  collective: order.toAccount,
                  textDecoration: "underline",
                  children: order.toAccount.name
                })
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(_components_StyledCard__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
            mt: "24px",
            p: [16, 24, 32],
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Flex */ .kC, {
              flexDirection: ['column-reverse', 'row'],
              alignItems: ['stretch', 'center'],
              justifyContent: "space-between",
              "data-cy": "expense-title",
              mb: 1,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Box */ .xu, {
                mr: [0, 2],
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_39__.H4, {
                  fontWeight: "500",
                  "data-cy": "expense-description",
                  children: order.description
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Box */ .xu, {
                mb: [3, 0],
                justifyContent: ['space-between', 'flex-end'],
                alignItems: "center",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_orders_OrderStatusTag__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                  status: order.status
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Flex */ .kC, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(_components_StyledTag__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
                variant: "rounded-left",
                fontSize: "10px",
                fontWeight: "500",
                mr: 1,
                textTransform: "uppercase",
                closeButtonProps: undefined,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                  id: "Order",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Order"
                  }]
                }), " #", order.legacyId]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_Tags__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {
                order: order,
                canEdit: true
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Flex */ .kC, {
              alignItems: "center",
              mt: 1,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(_components_Text__WEBPACK_IMPORTED_MODULE_39__.P, {
                mt: "5px",
                fontSize: "12px",
                color: "black.600",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                  id: "nqRBcp",
                  defaultMessage: [{
                    "type": 0,
                    "value": "From "
                  }, {
                    "type": 1,
                    "value": "contributor"
                  }, {
                    "type": 0,
                    "value": " to "
                  }, {
                    "type": 1,
                    "value": "account"
                  }],
                  values: {
                    contributor: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_LinkCollective__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                      collective: order.fromAccount
                    }),
                    account: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_LinkCollective__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                      collective: order.toAccount
                    })
                  }
                }), ' • ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_DateTime__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                  value: order.processedAt || order.createdAt,
                  dateStyle: undefined,
                  timeStyle: undefined
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Grid */ .rj, {
              mt: "24px",
              gridGap: "20px 50px",
              gridTemplateColumns: ['1fr', '1fr 1fr', `repeat(4, 1fr)`],
              children: [order.pendingContributionData?.ponumber && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(OrderDetails, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_StyledTooltip__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
                  content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                    id: "3Il70r",
                    defaultMessage: [{
                      "type": 0,
                      "value": "External reference code for this order. This is usually a reference number from the contributor accounting system."
                    }]
                  }),
                  containerCursor: "default",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                    id: "Fields.PONumber",
                    defaultMessage: [{
                      "type": 0,
                      "value": "PO Number"
                    }]
                  })
                }), `#${order.pendingContributionData.ponumber}`]
              }), order.pendingContributionData?.expectedAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(OrderDetails, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                  id: "6srLb2",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Expected"
                  }]
                }), isOverdue ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(OverdueTag, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_DateTime__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                    value: order.pendingContributionData.expectedAt,
                    dateStyle: 'medium',
                    timeStyle: undefined
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(_components_Text__WEBPACK_IMPORTED_MODULE_39__/* .Span */ .Dr, {
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    letterSpacing: "0.06em",
                    children: ["\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                      id: "M0vCGv",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Overdue"
                      }]
                    })]
                  })]
                }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_DateTime__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                  value: order.pendingContributionData.expectedAt,
                  dateStyle: 'medium',
                  timeStyle: undefined
                })]
              }), order.paymentMethod ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(OrderDetails, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                  id: "PaidWith",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Paid With"
                  }]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_PaymentMethodTypeWithIcon__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                  type: order.paymentMethod?.type,
                  iconSize: 16
                })]
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(OrderDetails, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                  id: "paymentmethod.label",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Payment Method"
                  }]
                }), (0,_lib_i18n_payment_method_provider_type__WEBPACK_IMPORTED_MODULE_14__/* .i18nPaymentMethodProviderType */ .z)(intl, order.pendingContributionData?.paymentMethod || 'BANK_TRANSFER')]
              }), !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(order.pendingContributionData?.fromAccountInfo) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(OrderDetails, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                  id: "Contact",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Contact"
                  }]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)("span", {
                  children: [order.pendingContributionData.fromAccountInfo.name, order.pendingContributionData.fromAccountInfo.email && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
                    children: ["\xA0(", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_StyledLink__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
                      href: `mailto:${order.pendingContributionData.fromAccountInfo.email}`,
                      openInNewTab: true,
                      children: order.pendingContributionData.fromAccountInfo.email
                    }), ")"]
                  })]
                })]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Box */ .xu, {
              mt: 4,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_39__.P, {
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "24px",
                color: "black.900",
                children: isPending ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                  id: "tijsiA",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Contribution Details"
                  }]
                }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                  id: "Sz+Qhv",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Related Transactions"
                  }]
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Box */ .xu, {
              mt: 4,
              children: isPending ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(TransactionDetails, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                    id: "pELiNl",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Expected Amount"
                    }]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                    currency: order.amount.currency,
                    precision: 2,
                    amount: order.amount.valueInCents
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                    id: "ysc4k/",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Payment Fees not Considered"
                    }]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                    id: "1cmSl0",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Created on "
                    }, {
                      "type": 1,
                      "value": "date"
                    }],
                    values: {
                      date: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_DateTime__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                        value: order.createdAt,
                        dateStyle: 'medium',
                        timeStyle: "short"
                      })
                    }
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(TransactionDetails, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                    id: "+UwJxq",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Expected Host Fees"
                    }]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                    currency: order.amount.currency,
                    precision: 2,
                    amount: order.amount.valueInCents * (order.hostFeePercent / -100)
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                    id: "b8rZxx",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Based on default host fees, can be changed at settling time"
                    }]
                  })]
                })]
              }) : lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default()(accountTransactions, ['legacyId'], ['desc']).map(transaction => {
                const displayedAmount = (0,_components_transactions_TransactionItem__WEBPACK_IMPORTED_MODULE_40__/* .getDisplayedAmount */ .r)(transaction, account);
                const displayPaymentFees = transaction.type === 'CREDIT' && transaction.netAmount?.valueInCents !== displayedAmount.valueInCents && transaction.paymentProcessorFee?.valueInCents !== 0;
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(TransactionDetails, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx("span", {
                    children: transaction.description
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                    currency: displayedAmount.currency,
                    precision: 2,
                    amount: displayedAmount.valueInCents
                  }), displayPaymentFees && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_39__/* .Span */ .Dr, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                      id: "ijvoto",
                      defaultMessage: [{
                        "type": 1,
                        "value": "value"
                      }, {
                        "type": 0,
                        "value": " (Payment Processor Fee)"
                      }],
                      values: {
                        value: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                          currency: transaction.paymentProcessorFee.currency,
                          amount: transaction.paymentProcessorFee.valueInCents,
                          amountStyles: {}
                        })
                      }
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx("span", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                      id: "XhoJIl",
                      defaultMessage: [{
                        "type": 5,
                        "value": "type",
                        "options": {
                          "CREDIT": {
                            "value": [{
                              "type": 0,
                              "value": "Received by"
                            }]
                          },
                          "DEBIT": {
                            "value": [{
                              "type": 0,
                              "value": "Paid by"
                            }]
                          },
                          "other": {
                            "value": []
                          }
                        }
                      }, {
                        "type": 0,
                        "value": " "
                      }, {
                        "type": 1,
                        "value": "account"
                      }, {
                        "type": 0,
                        "value": " on "
                      }, {
                        "type": 1,
                        "value": "date"
                      }],
                      values: {
                        type: transaction.type,
                        date: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_DateTime__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                          value: transaction.createdAt,
                          dateStyle: 'short',
                          timeStyle: "short"
                        }),
                        account: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_LinkCollective__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                          collective: transaction.account
                        })
                      }
                    })
                  })]
                }, transaction.id);
              })
            }), (0,_components_orders_ProcessOrderButtons__WEBPACK_IMPORTED_MODULE_29__/* .hasProcessButtons */ .H)(order?.permissions) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Box */ .xu, {
              mt: "40px",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_StyledHr__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Flex */ .kC, {
                justifyContent: ['stretch', 'space-between'],
                flexDirection: ['column-reverse', 'row'],
                mt: "8px",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(ButtonsContainer, {
                  flexDirection: ['column', 'row'],
                  children: order?.permissions?.canEdit && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
                      "data-cy": "edit-order-button",
                      buttonSize: "tiny",
                      minWidth: "130px",
                      mx: 2,
                      mt: 2,
                      py: "9px",
                      height: "34px",
                      onClick: () => setShowCreatePendingOrderModal(true),
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                        id: "contribution.edit",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Edit Contribution"
                        }]
                      })
                    }), showCreatePendingOrderModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_host_dashboard_CreatePendingOrderModal__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                      host: account.host,
                      onClose: () => setShowCreatePendingOrderModal(false),
                      onSuccess: () => query.refetch(),
                      edit: order
                    }), ' ']
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(ButtonsContainer, {
                  flexDirection: ['column', 'row'],
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_orders_ProcessOrderButtons__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                    order: order,
                    permissions: order.permissions,
                    onSuccess: () => query.refetch()
                  })
                })]
              })]
            })]
          }), order?.memo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Box */ .xu, {
            mt: 4,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_39__.P, {
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "24px",
              color: "black.900",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "DgTPfL",
                defaultMessage: [{
                  "type": 0,
                  "value": "Additional Details"
                }]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(_components_Text__WEBPACK_IMPORTED_MODULE_39__/* .Span */ .Dr, {
              fontSize: "12px",
              color: "black.700",
              fontWeight: "bold",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "Expense.PrivateNote",
                defaultMessage: [{
                  "type": 0,
                  "value": "Private note"
                }]
              }), "\xA0\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                color: "#969BA3",
                size: undefined,
                tooltipProps: undefined,
                withoutTooltip: undefined // eslint-disable-next-line react/no-children-prop
                ,
                children: undefined
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_HTMLContent__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
              color: "black.700",
              mt: 1,
              fontSize: "13px",
              content: order.memo
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Flex */ .kC, {
          minWidth: "270px",
          display: ['none', 'block'],
          justifyContent: ['center', null, 'flex-start', 'flex-end'],
          pt: [4, null, 80],
          children: account.isActive && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Box */ .xu, {
            px: 2,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_39__.H5, {
              mb: 3,
              textTransform: "capitalize",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "CollectiveBalance",
                defaultMessage: [{
                  "type": 5,
                  "value": "type",
                  "options": {
                    "COLLECTIVE": {
                      "value": [{
                        "type": 0,
                        "value": "Collective balance"
                      }]
                    },
                    "EVENT": {
                      "value": [{
                        "type": 0,
                        "value": "Event balance"
                      }]
                    },
                    "ORGANIZATION": {
                      "value": [{
                        "type": 0,
                        "value": "Organization balance"
                      }]
                    },
                    "FUND": {
                      "value": [{
                        "type": 0,
                        "value": "Fund balance"
                      }]
                    },
                    "PROJECT": {
                      "value": [{
                        "type": 0,
                        "value": "Project balance"
                      }]
                    },
                    "other": {
                      "value": [{
                        "type": 0,
                        "value": "Account balance"
                      }]
                    }
                  }
                }],
                values: {
                  type: account?.type || '' // collective can be null when it's loading

                }
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
              borderLeft: "1px solid",
              borderColor: "black.300",
              pl: 3,
              fontSize: "20px",
              color: "black.500",
              "data-cy": "collective-balance",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Box */ .xu, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                  currency: account.stats.balanceWithBlockedFunds.currency,
                  amount: account.stats.balanceWithBlockedFunds.valueInCents,
                  amountStyles: {
                    color: 'black.800'
                  }
                }), account.host && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(_components_Text__WEBPACK_IMPORTED_MODULE_39__.P, {
                  fontSize: "11px",
                  color: "black.600",
                  mt: 2,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_39__/* .Span */ .Dr, {
                    fontSize: "9px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    color: "black.500",
                    letterSpacing: "0.06em",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                      id: "Fiscalhost",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Fiscal Host"
                      }]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(_components_LinkCollective__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                    collective: account.host,
                    children: account?.isActive ? account.host.name : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                      id: "Fiscalhost.pending",
                      defaultMessage: [{
                        "type": 1,
                        "value": "host"
                      }, {
                        "type": 0,
                        "value": " (pending)"
                      }],
                      values: {
                        host: account.host.name
                      }
                    })
                  })]
                })]
              })
            })]
          })
        })]
      })
    })]
  }));
}
OrderPage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OrderPage",
  "props": {
    "error": {
      "required": true,
      "tsType": {
        "name": "any"
      },
      "description": ""
    }
  }
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 97812:
/***/ ((module) => {

module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ 79114:
/***/ ((module) => {

module.exports = require("@apollo/client/link/error");

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

/***/ 40710:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/FileText");

/***/ }),

/***/ 57153:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Info");

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

/***/ 45284:
/***/ ((module) => {

module.exports = require("@styled-system/prop-types");

/***/ }),

/***/ 19099:
/***/ ((module) => {

module.exports = require("@styled-system/theme-get");

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

/***/ 10582:
/***/ ((module) => {

module.exports = require("lodash/toNumber");

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

/***/ 74809:
/***/ ((module) => {

module.exports = require("node-fetch");

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

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,9156,7262,1433,1808,1012,2631,7619,7632,2143,986,242,3129,8185,5993,7965,9468,7772,8208,2566], () => (__webpack_exec__(56912)));
module.exports = __webpack_exports__;

})();