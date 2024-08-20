var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_main_001 = __commonJS({
  "assets/main.d0d4c6e1.js"(exports, module) {
    function _mergeNamespaces(n2, m2) {
      for (var i = 0; i < m2.length; i++) {
        const e = m2[i];
        if (typeof e !== "string" && !Array.isArray(e)) {
          for (const k2 in e) {
            if (k2 !== "default" && !(k2 in n2)) {
              const d = Object.getOwnPropertyDescriptor(e, k2);
              if (d) {
                Object.defineProperty(n2, k2, d.get ? d : {
                  enumerable: true,
                  get: () => e[k2]
                });
              }
            }
          }
        }
      }
      return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
    }
    (function polyfill() {
      const relList = document.createElement("link").relList;
      if (relList && relList.supports && relList.supports("modulepreload")) {
        return;
      }
      for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
      }
      new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type !== "childList") {
            continue;
          }
          for (const node of mutation.addedNodes) {
            if (node.tagName === "LINK" && node.rel === "modulepreload")
              processPreload(node);
          }
        }
      }).observe(document, { childList: true, subtree: true });
      function getFetchOpts(link) {
        const fetchOpts = {};
        if (link.integrity)
          fetchOpts.integrity = link.integrity;
        if (link.referrerPolicy)
          fetchOpts.referrerPolicy = link.referrerPolicy;
        if (link.crossOrigin === "use-credentials")
          fetchOpts.credentials = "include";
        else if (link.crossOrigin === "anonymous")
          fetchOpts.credentials = "omit";
        else
          fetchOpts.credentials = "same-origin";
        return fetchOpts;
      }
      function processPreload(link) {
        if (link.ep)
          return;
        link.ep = true;
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
      }
    })();
    const index = "";
    function getDefaultExportFromCjs(x2) {
      return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
    }
    function getAugmentedNamespace(n2) {
      if (n2.__esModule)
        return n2;
      var f2 = n2.default;
      if (typeof f2 == "function") {
        var a = function a2() {
          if (this instanceof a2) {
            return Reflect.construct(f2, arguments, this.constructor);
          }
          return f2.apply(this, arguments);
        };
        a.prototype = f2.prototype;
      } else
        a = {};
      Object.defineProperty(a, "__esModule", { value: true });
      Object.keys(n2).forEach(function(k2) {
        var d = Object.getOwnPropertyDescriptor(n2, k2);
        Object.defineProperty(a, k2, d.get ? d : {
          enumerable: true,
          get: function() {
            return n2[k2];
          }
        });
      });
      return a;
    }
    var jsxRuntime = { exports: {} };
    var reactJsxRuntime_production_min = {};
    var react = { exports: {} };
    var react_production_min = {};
    /**
     * @license React
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var l$1 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$2 = Symbol.for("react.fragment"), q$1 = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t$1 = Symbol.for("react.provider"), u = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
    function A$1(a) {
      if (null === a || "object" !== typeof a)
        return null;
      a = z$1 && a[z$1] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B$1 = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, C$1 = Object.assign, D$1 = {};
    function E$1(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D$1;
      this.updater = e || B$1;
    }
    E$1.prototype.isReactComponent = {};
    E$1.prototype.setState = function(a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E$1.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E$1.prototype;
    function G$1(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D$1;
      this.updater = e || B$1;
    }
    var H$1 = G$1.prototype = new F();
    H$1.constructor = G$1;
    C$1(H$1, E$1.prototype);
    H$1.isPureReactComponent = true;
    var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
    function M$1(a, b, e) {
      var d, c = {}, k2 = null, h = null;
      if (null != b)
        for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k2 = "" + b.key), b)
          J.call(b, d) && !L$1.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g)
        c.children = e;
      else if (1 < g) {
        for (var f2 = Array(g), m2 = 0; m2 < g; m2++)
          f2[m2] = arguments[m2 + 2];
        c.children = f2;
      }
      if (a && a.defaultProps)
        for (d in g = a.defaultProps, g)
          void 0 === c[d] && (c[d] = g[d]);
      return { $$typeof: l$1, type: a, key: k2, ref: h, props: c, _owner: K$1.current };
    }
    function N$1(a, b) {
      return { $$typeof: l$1, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O$1(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l$1;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P$1 = /\/+/g;
    function Q$1(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R$1(a, b, e, d, c) {
      var k2 = typeof a;
      if ("undefined" === k2 || "boolean" === k2)
        a = null;
      var h = false;
      if (null === a)
        h = true;
      else
        switch (k2) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l$1:
              case n$1:
                h = true;
            }
        }
      if (h)
        return h = a, c = c(h), a = "" === d ? "." + Q$1(h, 0) : d, I$1(c) ? (e = "", null != a && (e = a.replace(P$1, "$&/") + "/"), R$1(c, b, e, "", function(a2) {
          return a2;
        })) : null != c && (O$1(c) && (c = N$1(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$1, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I$1(a))
        for (var g = 0; g < a.length; g++) {
          k2 = a[g];
          var f2 = d + Q$1(k2, g);
          h += R$1(k2, b, e, f2, c);
        }
      else if (f2 = A$1(a), "function" === typeof f2)
        for (a = f2.call(a), g = 0; !(k2 = a.next()).done; )
          k2 = k2.value, f2 = d + Q$1(k2, g++), h += R$1(k2, b, e, f2, c);
      else if ("object" === k2)
        throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S$1(a, b, e) {
      if (null == a)
        return a;
      var d = [], c = 0;
      R$1(a, d, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T$1(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (0 === a._status || -1 === a._status)
            a._status = 1, a._result = b2;
        }, function(b2) {
          if (0 === a._status || -1 === a._status)
            a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status)
        return a._result.default;
      throw a._result;
    }
    var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
    react_production_min.Children = { map: S$1, forEach: function(a, b, e) {
      S$1(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S$1(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S$1(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O$1(a))
        throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    react_production_min.Component = E$1;
    react_production_min.Fragment = p$2;
    react_production_min.Profiler = r;
    react_production_min.PureComponent = G$1;
    react_production_min.StrictMode = q$1;
    react_production_min.Suspense = w;
    react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
    react_production_min.cloneElement = function(a, b, e) {
      if (null === a || void 0 === a)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C$1({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k2 = b.ref, h = K$1.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps)
          var g = a.type.defaultProps;
        for (f2 in b)
          J.call(b, f2) && !L$1.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
      }
      var f2 = arguments.length - 2;
      if (1 === f2)
        d.children = e;
      else if (1 < f2) {
        g = Array(f2);
        for (var m2 = 0; m2 < f2; m2++)
          g[m2] = arguments[m2 + 2];
        d.children = g;
      }
      return { $$typeof: l$1, type: a.type, key: c, ref: k2, props: d, _owner: h };
    };
    react_production_min.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t$1, _context: a };
      return a.Consumer = a;
    };
    react_production_min.createElement = M$1;
    react_production_min.createFactory = function(a) {
      var b = M$1.bind(null, a);
      b.type = a;
      return b;
    };
    react_production_min.createRef = function() {
      return { current: null };
    };
    react_production_min.forwardRef = function(a) {
      return { $$typeof: v, render: a };
    };
    react_production_min.isValidElement = O$1;
    react_production_min.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T$1 };
    };
    react_production_min.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    react_production_min.startTransition = function(a) {
      var b = V$1.transition;
      V$1.transition = {};
      try {
        a();
      } finally {
        V$1.transition = b;
      }
    };
    react_production_min.unstable_act = function() {
      throw Error("act(...) is not supported in production builds of React.");
    };
    react_production_min.useCallback = function(a, b) {
      return U$1.current.useCallback(a, b);
    };
    react_production_min.useContext = function(a) {
      return U$1.current.useContext(a);
    };
    react_production_min.useDebugValue = function() {
    };
    react_production_min.useDeferredValue = function(a) {
      return U$1.current.useDeferredValue(a);
    };
    react_production_min.useEffect = function(a, b) {
      return U$1.current.useEffect(a, b);
    };
    react_production_min.useId = function() {
      return U$1.current.useId();
    };
    react_production_min.useImperativeHandle = function(a, b, e) {
      return U$1.current.useImperativeHandle(a, b, e);
    };
    react_production_min.useInsertionEffect = function(a, b) {
      return U$1.current.useInsertionEffect(a, b);
    };
    react_production_min.useLayoutEffect = function(a, b) {
      return U$1.current.useLayoutEffect(a, b);
    };
    react_production_min.useMemo = function(a, b) {
      return U$1.current.useMemo(a, b);
    };
    react_production_min.useReducer = function(a, b, e) {
      return U$1.current.useReducer(a, b, e);
    };
    react_production_min.useRef = function(a) {
      return U$1.current.useRef(a);
    };
    react_production_min.useState = function(a) {
      return U$1.current.useState(a);
    };
    react_production_min.useSyncExternalStore = function(a, b, e) {
      return U$1.current.useSyncExternalStore(a, b, e);
    };
    react_production_min.useTransition = function() {
      return U$1.current.useTransition();
    };
    react_production_min.version = "18.2.0";
    {
      react.exports = react_production_min;
    }
    var reactExports = react.exports;
    const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
    const React$1 = /* @__PURE__ */ _mergeNamespaces({
      __proto__: null,
      default: React
    }, [reactExports]);
    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
    function q(c, a, g) {
      var b, d = {}, e = null, h = null;
      void 0 !== g && (e = "" + g);
      void 0 !== a.key && (e = "" + a.key);
      void 0 !== a.ref && (h = a.ref);
      for (b in a)
        m$1.call(a, b) && !p$1.hasOwnProperty(b) && (d[b] = a[b]);
      if (c && c.defaultProps)
        for (b in a = c.defaultProps, a)
          void 0 === d[b] && (d[b] = a[b]);
      return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
    }
    reactJsxRuntime_production_min.Fragment = l;
    reactJsxRuntime_production_min.jsx = q;
    reactJsxRuntime_production_min.jsxs = q;
    {
      jsxRuntime.exports = reactJsxRuntime_production_min;
    }
    var jsxRuntimeExports = jsxRuntime.exports;
    const Fragment = jsxRuntimeExports.Fragment;
    const jsx = jsxRuntimeExports.jsx;
    const jsxs = jsxRuntimeExports.jsxs;
    var client = {};
    var reactDom = { exports: {} };
    var reactDom_production_min = {};
    var scheduler = { exports: {} };
    var scheduler_production_min = {};
    /**
     * @license React
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    (function(exports2) {
      function f2(a, b) {
        var c = a.length;
        a.push(b);
        a:
          for (; 0 < c; ) {
            var d = c - 1 >>> 1, e = a[d];
            if (0 < g(e, b))
              a[d] = b, a[c] = e, c = d;
            else
              break a;
          }
      }
      function h(a) {
        return 0 === a.length ? null : a[0];
      }
      function k2(a) {
        if (0 === a.length)
          return null;
        var b = a[0], c = a.pop();
        if (c !== b) {
          a[0] = c;
          a:
            for (var d = 0, e = a.length, w2 = e >>> 1; d < w2; ) {
              var m2 = 2 * (d + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
              if (0 > g(C2, c))
                n2 < e && 0 > g(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m2] = c, d = m2);
              else if (n2 < e && 0 > g(x2, c))
                a[d] = x2, a[n2] = c, d = n2;
              else
                break a;
            }
        }
        return b;
      }
      function g(a, b) {
        var c = a.sortIndex - b.sortIndex;
        return 0 !== c ? c : a.id - b.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        var l2 = performance;
        exports2.unstable_now = function() {
          return l2.now();
        };
      } else {
        var p2 = Date, q2 = p2.now();
        exports2.unstable_now = function() {
          return p2.now() - q2;
        };
      }
      var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G2(a) {
        for (var b = h(t2); null !== b; ) {
          if (null === b.callback)
            k2(t2);
          else if (b.startTime <= a)
            k2(t2), b.sortIndex = b.expirationTime, f2(r2, b);
          else
            break;
          b = h(t2);
        }
      }
      function H2(a) {
        B2 = false;
        G2(a);
        if (!A2)
          if (null !== h(r2))
            A2 = true, I2(J2);
          else {
            var b = h(t2);
            null !== b && K2(H2, b.startTime - a);
          }
      }
      function J2(a, b) {
        A2 = false;
        B2 && (B2 = false, E2(L2), L2 = -1);
        z2 = true;
        var c = y2;
        try {
          G2(b);
          for (v2 = h(r2); null !== v2 && (!(v2.expirationTime > b) || a && !M2()); ) {
            var d = v2.callback;
            if ("function" === typeof d) {
              v2.callback = null;
              y2 = v2.priorityLevel;
              var e = d(v2.expirationTime <= b);
              b = exports2.unstable_now();
              "function" === typeof e ? v2.callback = e : v2 === h(r2) && k2(r2);
              G2(b);
            } else
              k2(r2);
            v2 = h(r2);
          }
          if (null !== v2)
            var w2 = true;
          else {
            var m2 = h(t2);
            null !== m2 && K2(H2, m2.startTime - b);
            w2 = false;
          }
          return w2;
        } finally {
          v2 = null, y2 = c, z2 = false;
        }
      }
      var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
      function M2() {
        return exports2.unstable_now() - Q2 < P2 ? false : true;
      }
      function R2() {
        if (null !== O2) {
          var a = exports2.unstable_now();
          Q2 = a;
          var b = true;
          try {
            b = O2(true, a);
          } finally {
            b ? S2() : (N2 = false, O2 = null);
          }
        } else
          N2 = false;
      }
      var S2;
      if ("function" === typeof F2)
        S2 = function() {
          F2(R2);
        };
      else if ("undefined" !== typeof MessageChannel) {
        var T2 = new MessageChannel(), U2 = T2.port2;
        T2.port1.onmessage = R2;
        S2 = function() {
          U2.postMessage(null);
        };
      } else
        S2 = function() {
          D2(R2, 0);
        };
      function I2(a) {
        O2 = a;
        N2 || (N2 = true, S2());
      }
      function K2(a, b) {
        L2 = D2(function() {
          a(exports2.unstable_now());
        }, b);
      }
      exports2.unstable_IdlePriority = 5;
      exports2.unstable_ImmediatePriority = 1;
      exports2.unstable_LowPriority = 4;
      exports2.unstable_NormalPriority = 3;
      exports2.unstable_Profiling = null;
      exports2.unstable_UserBlockingPriority = 2;
      exports2.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports2.unstable_continueExecution = function() {
        A2 || z2 || (A2 = true, I2(J2));
      };
      exports2.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports2.unstable_getCurrentPriorityLevel = function() {
        return y2;
      };
      exports2.unstable_getFirstCallbackNode = function() {
        return h(r2);
      };
      exports2.unstable_next = function(a) {
        switch (y2) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = y2;
        }
        var c = y2;
        y2 = b;
        try {
          return a();
        } finally {
          y2 = c;
        }
      };
      exports2.unstable_pauseExecution = function() {
      };
      exports2.unstable_requestPaint = function() {
      };
      exports2.unstable_runWithPriority = function(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = y2;
        y2 = a;
        try {
          return b();
        } finally {
          y2 = c;
        }
      };
      exports2.unstable_scheduleCallback = function(a, b, c) {
        var d = exports2.unstable_now();
        "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
        switch (a) {
          case 1:
            var e = -1;
            break;
          case 2:
            e = 250;
            break;
          case 5:
            e = 1073741823;
            break;
          case 4:
            e = 1e4;
            break;
          default:
            e = 5e3;
        }
        e = c + e;
        a = { id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
        c > d ? (a.sortIndex = c, f2(t2, a), null === h(r2) && a === h(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
        return a;
      };
      exports2.unstable_shouldYield = M2;
      exports2.unstable_wrapCallback = function(a) {
        var b = y2;
        return function() {
          var c = y2;
          y2 = b;
          try {
            return a.apply(this, arguments);
          } finally {
            y2 = c;
          }
        };
      };
    })(scheduler_production_min);
    {
      scheduler.exports = scheduler_production_min;
    }
    var schedulerExports = scheduler.exports;
    /**
     * @license React
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var aa = reactExports, ba = schedulerExports;
    function p(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
        b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var da = /* @__PURE__ */ new Set(), ea = {};
    function fa(a, b) {
      ha(a, b);
      ha(a + "Capture", b);
    }
    function ha(a, b) {
      ea[a] = b;
      for (a = 0; a < b.length; a++)
        da.add(b[a]);
    }
    var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
    function na(a) {
      if (ja.call(ma, a))
        return true;
      if (ja.call(la, a))
        return false;
      if (ka.test(a))
        return ma[a] = true;
      la[a] = true;
      return false;
    }
    function oa(a, b, c, d) {
      if (null !== c && 0 === c.type)
        return false;
      switch (typeof b) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          if (d)
            return false;
          if (null !== c)
            return !c.acceptsBooleans;
          a = a.toLowerCase().slice(0, 5);
          return "data-" !== a && "aria-" !== a;
        default:
          return false;
      }
    }
    function pa(a, b, c, d) {
      if (null === b || "undefined" === typeof b || oa(a, b, c, d))
        return true;
      if (d)
        return false;
      if (null !== c)
        switch (c.type) {
          case 3:
            return !b;
          case 4:
            return false === b;
          case 5:
            return isNaN(b);
          case 6:
            return isNaN(b) || 1 > b;
        }
      return false;
    }
    function t(a, b, c, d, e, f2, g) {
      this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
      this.attributeName = d;
      this.attributeNamespace = e;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = f2;
      this.removeEmptyString = g;
    }
    var z = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      z[a] = new t(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      z[b] = new t(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      z[a] = new t(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      z[a] = new t(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      z[a] = new t(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      z[a] = new t(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      z[a] = new t(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      z[a] = new t(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      z[a] = new t(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var qa = /[\-:]([a-z])/g;
    function ra(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(
        qa,
        ra
      );
      z[b] = new t(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(qa, ra);
      z[b] = new t(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(qa, ra);
      z[b] = new t(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      z[a] = new t(a, 1, false, a.toLowerCase(), null, false, false);
    });
    z.xlinkHref = new t("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      z[a] = new t(a, 1, false, a.toLowerCase(), null, true, true);
    });
    function sa(a, b, c, d) {
      var e = z.hasOwnProperty(b) ? z[b] : null;
      if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1])
        pa(b, c, e, d) && (c = null), d || null === e ? na(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
    }
    var ta = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ua = Symbol.for("react.element"), va = Symbol.for("react.portal"), wa = Symbol.for("react.fragment"), xa = Symbol.for("react.strict_mode"), za = Symbol.for("react.profiler"), Aa = Symbol.for("react.provider"), Ba = Symbol.for("react.context"), Ca = Symbol.for("react.forward_ref"), Da = Symbol.for("react.suspense"), Ea = Symbol.for("react.suspense_list"), Fa = Symbol.for("react.memo"), Ga = Symbol.for("react.lazy");
    var Ha = Symbol.for("react.offscreen");
    var Ia = Symbol.iterator;
    function Ja(a) {
      if (null === a || "object" !== typeof a)
        return null;
      a = Ia && a[Ia] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var A = Object.assign, Ka;
    function La(a) {
      if (void 0 === Ka)
        try {
          throw Error();
        } catch (c) {
          var b = c.stack.trim().match(/\n( *(at )?)/);
          Ka = b && b[1] || "";
        }
      return "\n" + Ka + a;
    }
    var Ma = false;
    function Na(a, b) {
      if (!a || Ma)
        return "";
      Ma = true;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (b)
          if (b = function() {
            throw Error();
          }, Object.defineProperty(b.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (l2) {
              var d = l2;
            }
            Reflect.construct(a, [], b);
          } else {
            try {
              b.call();
            } catch (l2) {
              d = l2;
            }
            a.call(b.prototype);
          }
        else {
          try {
            throw Error();
          } catch (l2) {
            d = l2;
          }
          a();
        }
      } catch (l2) {
        if (l2 && d && "string" === typeof l2.stack) {
          for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e[g] !== f2[h]; )
            h--;
          for (; 1 <= g && 0 <= h; g--, h--)
            if (e[g] !== f2[h]) {
              if (1 !== g || 1 !== h) {
                do
                  if (g--, h--, 0 > h || e[g] !== f2[h]) {
                    var k2 = "\n" + e[g].replace(" at new ", " at ");
                    a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                    return k2;
                  }
                while (1 <= g && 0 <= h);
              }
              break;
            }
        }
      } finally {
        Ma = false, Error.prepareStackTrace = c;
      }
      return (a = a ? a.displayName || a.name : "") ? La(a) : "";
    }
    function Oa(a) {
      switch (a.tag) {
        case 5:
          return La(a.type);
        case 16:
          return La("Lazy");
        case 13:
          return La("Suspense");
        case 19:
          return La("SuspenseList");
        case 0:
        case 2:
        case 15:
          return a = Na(a.type, false), a;
        case 11:
          return a = Na(a.type.render, false), a;
        case 1:
          return a = Na(a.type, true), a;
        default:
          return "";
      }
    }
    function Pa(a) {
      if (null == a)
        return null;
      if ("function" === typeof a)
        return a.displayName || a.name || null;
      if ("string" === typeof a)
        return a;
      switch (a) {
        case wa:
          return "Fragment";
        case va:
          return "Portal";
        case za:
          return "Profiler";
        case xa:
          return "StrictMode";
        case Da:
          return "Suspense";
        case Ea:
          return "SuspenseList";
      }
      if ("object" === typeof a)
        switch (a.$$typeof) {
          case Ba:
            return (a.displayName || "Context") + ".Consumer";
          case Aa:
            return (a._context.displayName || "Context") + ".Provider";
          case Ca:
            var b = a.render;
            a = a.displayName;
            a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
          case Fa:
            return b = a.displayName || null, null !== b ? b : Pa(a.type) || "Memo";
          case Ga:
            b = a._payload;
            a = a._init;
            try {
              return Pa(a(b));
            } catch (c) {
            }
        }
      return null;
    }
    function Qa(a) {
      var b = a.type;
      switch (a.tag) {
        case 24:
          return "Cache";
        case 9:
          return (b.displayName || "Context") + ".Consumer";
        case 10:
          return (b._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return b;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Pa(b);
        case 8:
          return b === xa ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if ("function" === typeof b)
            return b.displayName || b.name || null;
          if ("string" === typeof b)
            return b;
      }
      return null;
    }
    function Ra(a) {
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return a;
        case "object":
          return a;
        default:
          return "";
      }
    }
    function Sa(a) {
      var b = a.type;
      return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
    }
    function Ta(a) {
      var b = Sa(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
      if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
        var e = c.get, f2 = c.set;
        Object.defineProperty(a, b, { configurable: true, get: function() {
          return e.call(this);
        }, set: function(a2) {
          d = "" + a2;
          f2.call(this, a2);
        } });
        Object.defineProperty(a, b, { enumerable: c.enumerable });
        return { getValue: function() {
          return d;
        }, setValue: function(a2) {
          d = "" + a2;
        }, stopTracking: function() {
          a._valueTracker = null;
          delete a[b];
        } };
      }
    }
    function Ua(a) {
      a._valueTracker || (a._valueTracker = Ta(a));
    }
    function Va(a) {
      if (!a)
        return false;
      var b = a._valueTracker;
      if (!b)
        return true;
      var c = b.getValue();
      var d = "";
      a && (d = Sa(a) ? a.checked ? "true" : "false" : a.value);
      a = d;
      return a !== c ? (b.setValue(a), true) : false;
    }
    function Wa(a) {
      a = a || ("undefined" !== typeof document ? document : void 0);
      if ("undefined" === typeof a)
        return null;
      try {
        return a.activeElement || a.body;
      } catch (b) {
        return a.body;
      }
    }
    function Xa(a, b) {
      var c = b.checked;
      return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
    }
    function Ya(a, b) {
      var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
      c = Ra(null != b.value ? b.value : c);
      a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
    }
    function Za(a, b) {
      b = b.checked;
      null != b && sa(a, "checked", b, false);
    }
    function $a(a, b) {
      Za(a, b);
      var c = Ra(b.value), d = b.type;
      if (null != c)
        if ("number" === d) {
          if (0 === c && "" === a.value || a.value != c)
            a.value = "" + c;
        } else
          a.value !== "" + c && (a.value = "" + c);
      else if ("submit" === d || "reset" === d) {
        a.removeAttribute("value");
        return;
      }
      b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Ra(b.defaultValue));
      null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
    }
    function cb(a, b, c) {
      if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
        var d = b.type;
        if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value))
          return;
        b = "" + a._wrapperState.initialValue;
        c || b === a.value || (a.value = b);
        a.defaultValue = b;
      }
      c = a.name;
      "" !== c && (a.name = "");
      a.defaultChecked = !!a._wrapperState.initialChecked;
      "" !== c && (a.name = c);
    }
    function bb(a, b, c) {
      if ("number" !== b || Wa(a.ownerDocument) !== a)
        null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
    }
    var db = Array.isArray;
    function eb(a, b, c, d) {
      a = a.options;
      if (b) {
        b = {};
        for (var e = 0; e < c.length; e++)
          b["$" + c[e]] = true;
        for (c = 0; c < a.length; c++)
          e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
      } else {
        c = "" + Ra(c);
        b = null;
        for (e = 0; e < a.length; e++) {
          if (a[e].value === c) {
            a[e].selected = true;
            d && (a[e].defaultSelected = true);
            return;
          }
          null !== b || a[e].disabled || (b = a[e]);
        }
        null !== b && (b.selected = true);
      }
    }
    function fb(a, b) {
      if (null != b.dangerouslySetInnerHTML)
        throw Error(p(91));
      return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
    }
    function gb(a, b) {
      var c = b.value;
      if (null == c) {
        c = b.children;
        b = b.defaultValue;
        if (null != c) {
          if (null != b)
            throw Error(p(92));
          if (db(c)) {
            if (1 < c.length)
              throw Error(p(93));
            c = c[0];
          }
          b = c;
        }
        null == b && (b = "");
        c = b;
      }
      a._wrapperState = { initialValue: Ra(c) };
    }
    function hb(a, b) {
      var c = Ra(b.value), d = Ra(b.defaultValue);
      null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
      null != d && (a.defaultValue = "" + d);
    }
    function ib(a) {
      var b = a.textContent;
      b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
    }
    function jb(a) {
      switch (a) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function kb(a, b) {
      return null == a || "http://www.w3.org/1999/xhtml" === a ? jb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
    }
    var lb, mb = function(a) {
      return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
        MSApp.execUnsafeLocalFunction(function() {
          return a(b, c, d, e);
        });
      } : a;
    }(function(a, b) {
      if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
        a.innerHTML = b;
      else {
        lb = lb || document.createElement("div");
        lb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
        for (b = lb.firstChild; a.firstChild; )
          a.removeChild(a.firstChild);
        for (; b.firstChild; )
          a.appendChild(b.firstChild);
      }
    });
    function nb(a, b) {
      if (b) {
        var c = a.firstChild;
        if (c && c === a.lastChild && 3 === c.nodeType) {
          c.nodeValue = b;
          return;
        }
      }
      a.textContent = b;
    }
    var ob = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    }, pb = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ob).forEach(function(a) {
      pb.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        ob[b] = ob[a];
      });
    });
    function qb(a, b, c) {
      return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || ob.hasOwnProperty(a) && ob[a] ? ("" + b).trim() : b + "px";
    }
    function rb(a, b) {
      a = a.style;
      for (var c in b)
        if (b.hasOwnProperty(c)) {
          var d = 0 === c.indexOf("--"), e = qb(c, b[c], d);
          "float" === c && (c = "cssFloat");
          d ? a.setProperty(c, e) : a[c] = e;
        }
    }
    var sb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
    function tb(a, b) {
      if (b) {
        if (sb[a] && (null != b.children || null != b.dangerouslySetInnerHTML))
          throw Error(p(137, a));
        if (null != b.dangerouslySetInnerHTML) {
          if (null != b.children)
            throw Error(p(60));
          if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML))
            throw Error(p(61));
        }
        if (null != b.style && "object" !== typeof b.style)
          throw Error(p(62));
      }
    }
    function ub(a, b) {
      if (-1 === a.indexOf("-"))
        return "string" === typeof b.is;
      switch (a) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var vb = null;
    function wb(a) {
      a = a.target || a.srcElement || window;
      a.correspondingUseElement && (a = a.correspondingUseElement);
      return 3 === a.nodeType ? a.parentNode : a;
    }
    var xb = null, yb = null, zb = null;
    function Ab(a) {
      if (a = Bb(a)) {
        if ("function" !== typeof xb)
          throw Error(p(280));
        var b = a.stateNode;
        b && (b = Cb(b), xb(a.stateNode, a.type, b));
      }
    }
    function Db(a) {
      yb ? zb ? zb.push(a) : zb = [a] : yb = a;
    }
    function Eb() {
      if (yb) {
        var a = yb, b = zb;
        zb = yb = null;
        Ab(a);
        if (b)
          for (a = 0; a < b.length; a++)
            Ab(b[a]);
      }
    }
    function Fb(a, b) {
      return a(b);
    }
    function Gb() {
    }
    var Hb = false;
    function Ib(a, b, c) {
      if (Hb)
        return a(b, c);
      Hb = true;
      try {
        return Fb(a, b, c);
      } finally {
        if (Hb = false, null !== yb || null !== zb)
          Gb(), Eb();
      }
    }
    function Jb(a, b) {
      var c = a.stateNode;
      if (null === c)
        return null;
      var d = Cb(c);
      if (null === d)
        return null;
      c = d[b];
      a:
        switch (b) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d;
            break a;
          default:
            a = false;
        }
      if (a)
        return null;
      if (c && "function" !== typeof c)
        throw Error(p(231, b, typeof c));
      return c;
    }
    var Kb = false;
    if (ia)
      try {
        var Lb = {};
        Object.defineProperty(Lb, "passive", { get: function() {
          Kb = true;
        } });
        window.addEventListener("test", Lb, Lb);
        window.removeEventListener("test", Lb, Lb);
      } catch (a) {
        Kb = false;
      }
    function Mb(a, b, c, d, e, f2, g, h, k2) {
      var l2 = Array.prototype.slice.call(arguments, 3);
      try {
        b.apply(c, l2);
      } catch (n2) {
        this.onError(n2);
      }
    }
    var Nb = false, Ob = null, Pb = false, Qb = null, Rb = { onError: function(a) {
      Nb = true;
      Ob = a;
    } };
    function Sb(a, b, c, d, e, f2, g, h, k2) {
      Nb = false;
      Ob = null;
      Mb.apply(Rb, arguments);
    }
    function Tb(a, b, c, d, e, f2, g, h, k2) {
      Sb.apply(this, arguments);
      if (Nb) {
        if (Nb) {
          var l2 = Ob;
          Nb = false;
          Ob = null;
        } else
          throw Error(p(198));
        Pb || (Pb = true, Qb = l2);
      }
    }
    function Ub(a) {
      var b = a, c = a;
      if (a.alternate)
        for (; b.return; )
          b = b.return;
      else {
        a = b;
        do
          b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
        while (a);
      }
      return 3 === b.tag ? c : null;
    }
    function Vb(a) {
      if (13 === a.tag) {
        var b = a.memoizedState;
        null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
        if (null !== b)
          return b.dehydrated;
      }
      return null;
    }
    function Wb(a) {
      if (Ub(a) !== a)
        throw Error(p(188));
    }
    function Xb(a) {
      var b = a.alternate;
      if (!b) {
        b = Ub(a);
        if (null === b)
          throw Error(p(188));
        return b !== a ? null : a;
      }
      for (var c = a, d = b; ; ) {
        var e = c.return;
        if (null === e)
          break;
        var f2 = e.alternate;
        if (null === f2) {
          d = e.return;
          if (null !== d) {
            c = d;
            continue;
          }
          break;
        }
        if (e.child === f2.child) {
          for (f2 = e.child; f2; ) {
            if (f2 === c)
              return Wb(e), a;
            if (f2 === d)
              return Wb(e), b;
            f2 = f2.sibling;
          }
          throw Error(p(188));
        }
        if (c.return !== d.return)
          c = e, d = f2;
        else {
          for (var g = false, h = e.child; h; ) {
            if (h === c) {
              g = true;
              c = e;
              d = f2;
              break;
            }
            if (h === d) {
              g = true;
              d = e;
              c = f2;
              break;
            }
            h = h.sibling;
          }
          if (!g) {
            for (h = f2.child; h; ) {
              if (h === c) {
                g = true;
                c = f2;
                d = e;
                break;
              }
              if (h === d) {
                g = true;
                d = f2;
                c = e;
                break;
              }
              h = h.sibling;
            }
            if (!g)
              throw Error(p(189));
          }
        }
        if (c.alternate !== d)
          throw Error(p(190));
      }
      if (3 !== c.tag)
        throw Error(p(188));
      return c.stateNode.current === c ? a : b;
    }
    function Yb(a) {
      a = Xb(a);
      return null !== a ? Zb(a) : null;
    }
    function Zb(a) {
      if (5 === a.tag || 6 === a.tag)
        return a;
      for (a = a.child; null !== a; ) {
        var b = Zb(a);
        if (null !== b)
          return b;
        a = a.sibling;
      }
      return null;
    }
    var $b = ba.unstable_scheduleCallback, ac = ba.unstable_cancelCallback, bc = ba.unstable_shouldYield, cc = ba.unstable_requestPaint, B = ba.unstable_now, dc = ba.unstable_getCurrentPriorityLevel, ec = ba.unstable_ImmediatePriority, fc = ba.unstable_UserBlockingPriority, gc = ba.unstable_NormalPriority, hc = ba.unstable_LowPriority, ic = ba.unstable_IdlePriority, jc = null, kc = null;
    function lc(a) {
      if (kc && "function" === typeof kc.onCommitFiberRoot)
        try {
          kc.onCommitFiberRoot(jc, a, void 0, 128 === (a.current.flags & 128));
        } catch (b) {
        }
    }
    var nc = Math.clz32 ? Math.clz32 : mc, oc = Math.log, pc = Math.LN2;
    function mc(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (oc(a) / pc | 0) | 0;
    }
    var qc = 64, rc = 4194304;
    function sc(a) {
      switch (a & -a) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return a & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return a & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return a;
      }
    }
    function tc(a, b) {
      var c = a.pendingLanes;
      if (0 === c)
        return 0;
      var d = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
      if (0 !== g) {
        var h = g & ~e;
        0 !== h ? d = sc(h) : (f2 &= g, 0 !== f2 && (d = sc(f2)));
      } else
        g = c & ~e, 0 !== g ? d = sc(g) : 0 !== f2 && (d = sc(f2));
      if (0 === d)
        return 0;
      if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f2 = b & -b, e >= f2 || 16 === e && 0 !== (f2 & 4194240)))
        return b;
      0 !== (d & 4) && (d |= c & 16);
      b = a.entangledLanes;
      if (0 !== b)
        for (a = a.entanglements, b &= d; 0 < b; )
          c = 31 - nc(b), e = 1 << c, d |= a[c], b &= ~e;
      return d;
    }
    function uc(a, b) {
      switch (a) {
        case 1:
        case 2:
        case 4:
          return b + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return b + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function vc(a, b) {
      for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
        var g = 31 - nc(f2), h = 1 << g, k2 = e[g];
        if (-1 === k2) {
          if (0 === (h & c) || 0 !== (h & d))
            e[g] = uc(h, b);
        } else
          k2 <= b && (a.expiredLanes |= h);
        f2 &= ~h;
      }
    }
    function wc(a) {
      a = a.pendingLanes & -1073741825;
      return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
    }
    function xc() {
      var a = qc;
      qc <<= 1;
      0 === (qc & 4194240) && (qc = 64);
      return a;
    }
    function yc(a) {
      for (var b = [], c = 0; 31 > c; c++)
        b.push(a);
      return b;
    }
    function zc(a, b, c) {
      a.pendingLanes |= b;
      536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
      a = a.eventTimes;
      b = 31 - nc(b);
      a[b] = c;
    }
    function Ac(a, b) {
      var c = a.pendingLanes & ~b;
      a.pendingLanes = b;
      a.suspendedLanes = 0;
      a.pingedLanes = 0;
      a.expiredLanes &= b;
      a.mutableReadLanes &= b;
      a.entangledLanes &= b;
      b = a.entanglements;
      var d = a.eventTimes;
      for (a = a.expirationTimes; 0 < c; ) {
        var e = 31 - nc(c), f2 = 1 << e;
        b[e] = 0;
        d[e] = -1;
        a[e] = -1;
        c &= ~f2;
      }
    }
    function Bc(a, b) {
      var c = a.entangledLanes |= b;
      for (a = a.entanglements; c; ) {
        var d = 31 - nc(c), e = 1 << d;
        e & b | a[d] & b && (a[d] |= b);
        c &= ~e;
      }
    }
    var C = 0;
    function Cc(a) {
      a &= -a;
      return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
    }
    var Dc, Ec, Fc, Gc, Hc, Ic = false, Jc = [], Kc = null, Lc = null, Mc = null, Nc = /* @__PURE__ */ new Map(), Oc = /* @__PURE__ */ new Map(), Pc = [], Qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Rc(a, b) {
      switch (a) {
        case "focusin":
        case "focusout":
          Kc = null;
          break;
        case "dragenter":
        case "dragleave":
          Lc = null;
          break;
        case "mouseover":
        case "mouseout":
          Mc = null;
          break;
        case "pointerover":
        case "pointerout":
          Nc.delete(b.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Oc.delete(b.pointerId);
      }
    }
    function Sc(a, b, c, d, e, f2) {
      if (null === a || a.nativeEvent !== f2)
        return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b && (b = Bb(b), null !== b && Ec(b)), a;
      a.eventSystemFlags |= d;
      b = a.targetContainers;
      null !== e && -1 === b.indexOf(e) && b.push(e);
      return a;
    }
    function Tc(a, b, c, d, e) {
      switch (b) {
        case "focusin":
          return Kc = Sc(Kc, a, b, c, d, e), true;
        case "dragenter":
          return Lc = Sc(Lc, a, b, c, d, e), true;
        case "mouseover":
          return Mc = Sc(Mc, a, b, c, d, e), true;
        case "pointerover":
          var f2 = e.pointerId;
          Nc.set(f2, Sc(Nc.get(f2) || null, a, b, c, d, e));
          return true;
        case "gotpointercapture":
          return f2 = e.pointerId, Oc.set(f2, Sc(Oc.get(f2) || null, a, b, c, d, e)), true;
      }
      return false;
    }
    function Uc(a) {
      var b = Vc(a.target);
      if (null !== b) {
        var c = Ub(b);
        if (null !== c) {
          if (b = c.tag, 13 === b) {
            if (b = Vb(c), null !== b) {
              a.blockedOn = b;
              Hc(a.priority, function() {
                Fc(c);
              });
              return;
            }
          } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
            a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
            return;
          }
        }
      }
      a.blockedOn = null;
    }
    function Wc(a) {
      if (null !== a.blockedOn)
        return false;
      for (var b = a.targetContainers; 0 < b.length; ) {
        var c = Xc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
        if (null === c) {
          c = a.nativeEvent;
          var d = new c.constructor(c.type, c);
          vb = d;
          c.target.dispatchEvent(d);
          vb = null;
        } else
          return b = Bb(c), null !== b && Ec(b), a.blockedOn = c, false;
        b.shift();
      }
      return true;
    }
    function Yc(a, b, c) {
      Wc(a) && c.delete(b);
    }
    function Zc() {
      Ic = false;
      null !== Kc && Wc(Kc) && (Kc = null);
      null !== Lc && Wc(Lc) && (Lc = null);
      null !== Mc && Wc(Mc) && (Mc = null);
      Nc.forEach(Yc);
      Oc.forEach(Yc);
    }
    function $c(a, b) {
      a.blockedOn === b && (a.blockedOn = null, Ic || (Ic = true, ba.unstable_scheduleCallback(ba.unstable_NormalPriority, Zc)));
    }
    function ad(a) {
      function b(b2) {
        return $c(b2, a);
      }
      if (0 < Jc.length) {
        $c(Jc[0], a);
        for (var c = 1; c < Jc.length; c++) {
          var d = Jc[c];
          d.blockedOn === a && (d.blockedOn = null);
        }
      }
      null !== Kc && $c(Kc, a);
      null !== Lc && $c(Lc, a);
      null !== Mc && $c(Mc, a);
      Nc.forEach(b);
      Oc.forEach(b);
      for (c = 0; c < Pc.length; c++)
        d = Pc[c], d.blockedOn === a && (d.blockedOn = null);
      for (; 0 < Pc.length && (c = Pc[0], null === c.blockedOn); )
        Uc(c), null === c.blockedOn && Pc.shift();
    }
    var bd = ta.ReactCurrentBatchConfig, cd = true;
    function dd(a, b, c, d) {
      var e = C, f2 = bd.transition;
      bd.transition = null;
      try {
        C = 1, ed(a, b, c, d);
      } finally {
        C = e, bd.transition = f2;
      }
    }
    function fd(a, b, c, d) {
      var e = C, f2 = bd.transition;
      bd.transition = null;
      try {
        C = 4, ed(a, b, c, d);
      } finally {
        C = e, bd.transition = f2;
      }
    }
    function ed(a, b, c, d) {
      if (cd) {
        var e = Xc(a, b, c, d);
        if (null === e)
          gd(a, b, d, hd, c), Rc(a, d);
        else if (Tc(e, a, b, c, d))
          d.stopPropagation();
        else if (Rc(a, d), b & 4 && -1 < Qc.indexOf(a)) {
          for (; null !== e; ) {
            var f2 = Bb(e);
            null !== f2 && Dc(f2);
            f2 = Xc(a, b, c, d);
            null === f2 && gd(a, b, d, hd, c);
            if (f2 === e)
              break;
            e = f2;
          }
          null !== e && d.stopPropagation();
        } else
          gd(a, b, d, null, c);
      }
    }
    var hd = null;
    function Xc(a, b, c, d) {
      hd = null;
      a = wb(d);
      a = Vc(a);
      if (null !== a)
        if (b = Ub(a), null === b)
          a = null;
        else if (c = b.tag, 13 === c) {
          a = Vb(b);
          if (null !== a)
            return a;
          a = null;
        } else if (3 === c) {
          if (b.stateNode.current.memoizedState.isDehydrated)
            return 3 === b.tag ? b.stateNode.containerInfo : null;
          a = null;
        } else
          b !== a && (a = null);
      hd = a;
      return null;
    }
    function id(a) {
      switch (a) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (dc()) {
            case ec:
              return 1;
            case fc:
              return 4;
            case gc:
            case hc:
              return 16;
            case ic:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var jd = null, kd = null, ld = null;
    function md() {
      if (ld)
        return ld;
      var a, b = kd, c = b.length, d, e = "value" in jd ? jd.value : jd.textContent, f2 = e.length;
      for (a = 0; a < c && b[a] === e[a]; a++)
        ;
      var g = c - a;
      for (d = 1; d <= g && b[c - d] === e[f2 - d]; d++)
        ;
      return ld = e.slice(a, 1 < d ? 1 - d : void 0);
    }
    function nd(a) {
      var b = a.keyCode;
      "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
      10 === a && (a = 13);
      return 32 <= a || 13 === a ? a : 0;
    }
    function od() {
      return true;
    }
    function pd() {
      return false;
    }
    function qd(a) {
      function b(b2, d, e, f2, g) {
        this._reactName = b2;
        this._targetInst = e;
        this.type = d;
        this.nativeEvent = f2;
        this.target = g;
        this.currentTarget = null;
        for (var c in a)
          a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
        this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? od : pd;
        this.isPropagationStopped = pd;
        return this;
      }
      A(b.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var a2 = this.nativeEvent;
        a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = od);
      }, stopPropagation: function() {
        var a2 = this.nativeEvent;
        a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = od);
      }, persist: function() {
      }, isPersistent: od });
      return b;
    }
    var rd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
      return a.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, sd = qd(rd), td = A({}, rd, { view: 0, detail: 0 }), ud = qd(td), vd, wd, xd, zd = A({}, td, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yd, button: 0, buttons: 0, relatedTarget: function(a) {
      return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    }, movementX: function(a) {
      if ("movementX" in a)
        return a.movementX;
      a !== xd && (xd && "mousemove" === a.type ? (vd = a.screenX - xd.screenX, wd = a.screenY - xd.screenY) : wd = vd = 0, xd = a);
      return vd;
    }, movementY: function(a) {
      return "movementY" in a ? a.movementY : wd;
    } }), Ad = qd(zd), Bd = A({}, zd, { dataTransfer: 0 }), Cd = qd(Bd), Dd = A({}, td, { relatedTarget: 0 }), Ed = qd(Dd), Fd = A({}, rd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Gd = qd(Fd), Hd = A({}, rd, { clipboardData: function(a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    } }), Id = qd(Hd), Jd = A({}, rd, { data: 0 }), Kd = qd(Jd), Ld = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Md = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, Nd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Od(a) {
      var b = this.nativeEvent;
      return b.getModifierState ? b.getModifierState(a) : (a = Nd[a]) ? !!b[a] : false;
    }
    function yd() {
      return Od;
    }
    var Pd = A({}, td, { key: function(a) {
      if (a.key) {
        var b = Ld[a.key] || a.key;
        if ("Unidentified" !== b)
          return b;
      }
      return "keypress" === a.type ? (a = nd(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Md[a.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yd, charCode: function(a) {
      return "keypress" === a.type ? nd(a) : 0;
    }, keyCode: function(a) {
      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }, which: function(a) {
      return "keypress" === a.type ? nd(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    } }), Qd = qd(Pd), Rd = A({}, zd, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Sd = qd(Rd), Td = A({}, td, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yd }), Ud = qd(Td), Vd = A({}, rd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Wd = qd(Vd), Xd = A({}, zd, {
      deltaX: function(a) {
        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
      },
      deltaY: function(a) {
        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Yd = qd(Xd), Zd = [9, 13, 27, 32], $d = ia && "CompositionEvent" in window, ae = null;
    ia && "documentMode" in document && (ae = document.documentMode);
    var be = ia && "TextEvent" in window && !ae, ce = ia && (!$d || ae && 8 < ae && 11 >= ae), de = String.fromCharCode(32), ee = false;
    function fe(a, b) {
      switch (a) {
        case "keyup":
          return -1 !== Zd.indexOf(b.keyCode);
        case "keydown":
          return 229 !== b.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function ge(a) {
      a = a.detail;
      return "object" === typeof a && "data" in a ? a.data : null;
    }
    var he = false;
    function ie(a, b) {
      switch (a) {
        case "compositionend":
          return ge(b);
        case "keypress":
          if (32 !== b.which)
            return null;
          ee = true;
          return de;
        case "textInput":
          return a = b.data, a === de && ee ? null : a;
        default:
          return null;
      }
    }
    function je(a, b) {
      if (he)
        return "compositionend" === a || !$d && fe(a, b) ? (a = md(), ld = kd = jd = null, he = false, a) : null;
      switch (a) {
        case "paste":
          return null;
        case "keypress":
          if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
            if (b.char && 1 < b.char.length)
              return b.char;
            if (b.which)
              return String.fromCharCode(b.which);
          }
          return null;
        case "compositionend":
          return ce && "ko" !== b.locale ? null : b.data;
        default:
          return null;
      }
    }
    var ke = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function le(a) {
      var b = a && a.nodeName && a.nodeName.toLowerCase();
      return "input" === b ? !!ke[a.type] : "textarea" === b ? true : false;
    }
    function me(a, b, c, d) {
      Db(d);
      b = ne(b, "onChange");
      0 < b.length && (c = new sd("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
    }
    var oe = null, pe = null;
    function qe(a) {
      re(a, 0);
    }
    function se(a) {
      var b = te(a);
      if (Va(b))
        return a;
    }
    function ue(a, b) {
      if ("change" === a)
        return b;
    }
    var ve = false;
    if (ia) {
      var we;
      if (ia) {
        var xe = "oninput" in document;
        if (!xe) {
          var ye = document.createElement("div");
          ye.setAttribute("oninput", "return;");
          xe = "function" === typeof ye.oninput;
        }
        we = xe;
      } else
        we = false;
      ve = we && (!document.documentMode || 9 < document.documentMode);
    }
    function ze() {
      oe && (oe.detachEvent("onpropertychange", Ae), pe = oe = null);
    }
    function Ae(a) {
      if ("value" === a.propertyName && se(pe)) {
        var b = [];
        me(b, pe, a, wb(a));
        Ib(qe, b);
      }
    }
    function Be(a, b, c) {
      "focusin" === a ? (ze(), oe = b, pe = c, oe.attachEvent("onpropertychange", Ae)) : "focusout" === a && ze();
    }
    function Ce(a) {
      if ("selectionchange" === a || "keyup" === a || "keydown" === a)
        return se(pe);
    }
    function De(a, b) {
      if ("click" === a)
        return se(b);
    }
    function Ee(a, b) {
      if ("input" === a || "change" === a)
        return se(b);
    }
    function Fe(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var Ge = "function" === typeof Object.is ? Object.is : Fe;
    function He(a, b) {
      if (Ge(a, b))
        return true;
      if ("object" !== typeof a || null === a || "object" !== typeof b || null === b)
        return false;
      var c = Object.keys(a), d = Object.keys(b);
      if (c.length !== d.length)
        return false;
      for (d = 0; d < c.length; d++) {
        var e = c[d];
        if (!ja.call(b, e) || !Ge(a[e], b[e]))
          return false;
      }
      return true;
    }
    function Ie(a) {
      for (; a && a.firstChild; )
        a = a.firstChild;
      return a;
    }
    function Je(a, b) {
      var c = Ie(a);
      a = 0;
      for (var d; c; ) {
        if (3 === c.nodeType) {
          d = a + c.textContent.length;
          if (a <= b && d >= b)
            return { node: c, offset: b - a };
          a = d;
        }
        a: {
          for (; c; ) {
            if (c.nextSibling) {
              c = c.nextSibling;
              break a;
            }
            c = c.parentNode;
          }
          c = void 0;
        }
        c = Ie(c);
      }
    }
    function Ke(a, b) {
      return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Ke(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
    }
    function Le() {
      for (var a = window, b = Wa(); b instanceof a.HTMLIFrameElement; ) {
        try {
          var c = "string" === typeof b.contentWindow.location.href;
        } catch (d) {
          c = false;
        }
        if (c)
          a = b.contentWindow;
        else
          break;
        b = Wa(a.document);
      }
      return b;
    }
    function Me(a) {
      var b = a && a.nodeName && a.nodeName.toLowerCase();
      return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
    }
    function Ne(a) {
      var b = Le(), c = a.focusedElem, d = a.selectionRange;
      if (b !== c && c && c.ownerDocument && Ke(c.ownerDocument.documentElement, c)) {
        if (null !== d && Me(c)) {
          if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c)
            c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
          else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
            a = a.getSelection();
            var e = c.textContent.length, f2 = Math.min(d.start, e);
            d = void 0 === d.end ? f2 : Math.min(d.end, e);
            !a.extend && f2 > d && (e = d, d = f2, f2 = e);
            e = Je(c, f2);
            var g = Je(
              c,
              d
            );
            e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
          }
        }
        b = [];
        for (a = c; a = a.parentNode; )
          1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
        "function" === typeof c.focus && c.focus();
        for (c = 0; c < b.length; c++)
          a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
      }
    }
    var Oe = ia && "documentMode" in document && 11 >= document.documentMode, Pe = null, Qe = null, Re = null, Se = false;
    function Te(a, b, c) {
      var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
      Se || null == Pe || Pe !== Wa(d) || (d = Pe, "selectionStart" in d && Me(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Re && He(Re, d) || (Re = d, d = ne(Qe, "onSelect"), 0 < d.length && (b = new sd("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Pe)));
    }
    function Ue(a, b) {
      var c = {};
      c[a.toLowerCase()] = b.toLowerCase();
      c["Webkit" + a] = "webkit" + b;
      c["Moz" + a] = "moz" + b;
      return c;
    }
    var Ve = { animationend: Ue("Animation", "AnimationEnd"), animationiteration: Ue("Animation", "AnimationIteration"), animationstart: Ue("Animation", "AnimationStart"), transitionend: Ue("Transition", "TransitionEnd") }, We = {}, Xe = {};
    ia && (Xe = document.createElement("div").style, "AnimationEvent" in window || (delete Ve.animationend.animation, delete Ve.animationiteration.animation, delete Ve.animationstart.animation), "TransitionEvent" in window || delete Ve.transitionend.transition);
    function Ye(a) {
      if (We[a])
        return We[a];
      if (!Ve[a])
        return a;
      var b = Ve[a], c;
      for (c in b)
        if (b.hasOwnProperty(c) && c in Xe)
          return We[a] = b[c];
      return a;
    }
    var Ze = Ye("animationend"), $e = Ye("animationiteration"), af = Ye("animationstart"), bf = Ye("transitionend"), cf = /* @__PURE__ */ new Map(), df = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function ef(a, b) {
      cf.set(a, b);
      fa(b, [a]);
    }
    for (var ff = 0; ff < df.length; ff++) {
      var gf = df[ff], hf = gf.toLowerCase(), jf = gf[0].toUpperCase() + gf.slice(1);
      ef(hf, "on" + jf);
    }
    ef(Ze, "onAnimationEnd");
    ef($e, "onAnimationIteration");
    ef(af, "onAnimationStart");
    ef("dblclick", "onDoubleClick");
    ef("focusin", "onFocus");
    ef("focusout", "onBlur");
    ef(bf, "onTransitionEnd");
    ha("onMouseEnter", ["mouseout", "mouseover"]);
    ha("onMouseLeave", ["mouseout", "mouseover"]);
    ha("onPointerEnter", ["pointerout", "pointerover"]);
    ha("onPointerLeave", ["pointerout", "pointerover"]);
    fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var kf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), lf = new Set("cancel close invalid load scroll toggle".split(" ").concat(kf));
    function mf(a, b, c) {
      var d = a.type || "unknown-event";
      a.currentTarget = c;
      Tb(d, b, void 0, a);
      a.currentTarget = null;
    }
    function re(a, b) {
      b = 0 !== (b & 4);
      for (var c = 0; c < a.length; c++) {
        var d = a[c], e = d.event;
        d = d.listeners;
        a: {
          var f2 = void 0;
          if (b)
            for (var g = d.length - 1; 0 <= g; g--) {
              var h = d[g], k2 = h.instance, l2 = h.currentTarget;
              h = h.listener;
              if (k2 !== f2 && e.isPropagationStopped())
                break a;
              mf(e, h, l2);
              f2 = k2;
            }
          else
            for (g = 0; g < d.length; g++) {
              h = d[g];
              k2 = h.instance;
              l2 = h.currentTarget;
              h = h.listener;
              if (k2 !== f2 && e.isPropagationStopped())
                break a;
              mf(e, h, l2);
              f2 = k2;
            }
        }
      }
      if (Pb)
        throw a = Qb, Pb = false, Qb = null, a;
    }
    function D(a, b) {
      var c = b[nf];
      void 0 === c && (c = b[nf] = /* @__PURE__ */ new Set());
      var d = a + "__bubble";
      c.has(d) || (of(b, a, 2, false), c.add(d));
    }
    function pf(a, b, c) {
      var d = 0;
      b && (d |= 4);
      of(c, a, d, b);
    }
    var qf = "_reactListening" + Math.random().toString(36).slice(2);
    function rf(a) {
      if (!a[qf]) {
        a[qf] = true;
        da.forEach(function(b2) {
          "selectionchange" !== b2 && (lf.has(b2) || pf(b2, false, a), pf(b2, true, a));
        });
        var b = 9 === a.nodeType ? a : a.ownerDocument;
        null === b || b[qf] || (b[qf] = true, pf("selectionchange", false, b));
      }
    }
    function of(a, b, c, d) {
      switch (id(b)) {
        case 1:
          var e = dd;
          break;
        case 4:
          e = fd;
          break;
        default:
          e = ed;
      }
      c = e.bind(null, b, c, a);
      e = void 0;
      !Kb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
      d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
    }
    function gd(a, b, c, d, e) {
      var f2 = d;
      if (0 === (b & 1) && 0 === (b & 2) && null !== d)
        a:
          for (; ; ) {
            if (null === d)
              return;
            var g = d.tag;
            if (3 === g || 4 === g) {
              var h = d.stateNode.containerInfo;
              if (h === e || 8 === h.nodeType && h.parentNode === e)
                break;
              if (4 === g)
                for (g = d.return; null !== g; ) {
                  var k2 = g.tag;
                  if (3 === k2 || 4 === k2) {
                    if (k2 = g.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e)
                      return;
                  }
                  g = g.return;
                }
              for (; null !== h; ) {
                g = Vc(h);
                if (null === g)
                  return;
                k2 = g.tag;
                if (5 === k2 || 6 === k2) {
                  d = f2 = g;
                  continue a;
                }
                h = h.parentNode;
              }
            }
            d = d.return;
          }
      Ib(function() {
        var d2 = f2, e2 = wb(c), g2 = [];
        a: {
          var h2 = cf.get(a);
          if (void 0 !== h2) {
            var k3 = sd, m2 = a;
            switch (a) {
              case "keypress":
                if (0 === nd(c))
                  break a;
              case "keydown":
              case "keyup":
                k3 = Qd;
                break;
              case "focusin":
                m2 = "focus";
                k3 = Ed;
                break;
              case "focusout":
                m2 = "blur";
                k3 = Ed;
                break;
              case "beforeblur":
              case "afterblur":
                k3 = Ed;
                break;
              case "click":
                if (2 === c.button)
                  break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                k3 = Ad;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                k3 = Cd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                k3 = Ud;
                break;
              case Ze:
              case $e:
              case af:
                k3 = Gd;
                break;
              case bf:
                k3 = Wd;
                break;
              case "scroll":
                k3 = ud;
                break;
              case "wheel":
                k3 = Yd;
                break;
              case "copy":
              case "cut":
              case "paste":
                k3 = Id;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                k3 = Sd;
            }
            var w2 = 0 !== (b & 4), J2 = !w2 && "scroll" === a, v2 = w2 ? null !== h2 ? h2 + "Capture" : null : h2;
            w2 = [];
            for (var x2 = d2, r2; null !== x2; ) {
              r2 = x2;
              var F2 = r2.stateNode;
              5 === r2.tag && null !== F2 && (r2 = F2, null !== v2 && (F2 = Jb(x2, v2), null != F2 && w2.push(sf(x2, F2, r2))));
              if (J2)
                break;
              x2 = x2.return;
            }
            0 < w2.length && (h2 = new k3(h2, m2, null, c, e2), g2.push({ event: h2, listeners: w2 }));
          }
        }
        if (0 === (b & 7)) {
          a: {
            h2 = "mouseover" === a || "pointerover" === a;
            k3 = "mouseout" === a || "pointerout" === a;
            if (h2 && c !== vb && (m2 = c.relatedTarget || c.fromElement) && (Vc(m2) || m2[tf]))
              break a;
            if (k3 || h2) {
              h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
              if (k3) {
                if (m2 = c.relatedTarget || c.toElement, k3 = d2, m2 = m2 ? Vc(m2) : null, null !== m2 && (J2 = Ub(m2), m2 !== J2 || 5 !== m2.tag && 6 !== m2.tag))
                  m2 = null;
              } else
                k3 = null, m2 = d2;
              if (k3 !== m2) {
                w2 = Ad;
                F2 = "onMouseLeave";
                v2 = "onMouseEnter";
                x2 = "mouse";
                if ("pointerout" === a || "pointerover" === a)
                  w2 = Sd, F2 = "onPointerLeave", v2 = "onPointerEnter", x2 = "pointer";
                J2 = null == k3 ? h2 : te(k3);
                r2 = null == m2 ? h2 : te(m2);
                h2 = new w2(F2, x2 + "leave", k3, c, e2);
                h2.target = J2;
                h2.relatedTarget = r2;
                F2 = null;
                Vc(e2) === d2 && (w2 = new w2(v2, x2 + "enter", m2, c, e2), w2.target = r2, w2.relatedTarget = J2, F2 = w2);
                J2 = F2;
                if (k3 && m2)
                  b: {
                    w2 = k3;
                    v2 = m2;
                    x2 = 0;
                    for (r2 = w2; r2; r2 = uf(r2))
                      x2++;
                    r2 = 0;
                    for (F2 = v2; F2; F2 = uf(F2))
                      r2++;
                    for (; 0 < x2 - r2; )
                      w2 = uf(w2), x2--;
                    for (; 0 < r2 - x2; )
                      v2 = uf(v2), r2--;
                    for (; x2--; ) {
                      if (w2 === v2 || null !== v2 && w2 === v2.alternate)
                        break b;
                      w2 = uf(w2);
                      v2 = uf(v2);
                    }
                    w2 = null;
                  }
                else
                  w2 = null;
                null !== k3 && vf(g2, h2, k3, w2, false);
                null !== m2 && null !== J2 && vf(g2, J2, m2, w2, true);
              }
            }
          }
          a: {
            h2 = d2 ? te(d2) : window;
            k3 = h2.nodeName && h2.nodeName.toLowerCase();
            if ("select" === k3 || "input" === k3 && "file" === h2.type)
              var Z = ue;
            else if (le(h2))
              if (ve)
                Z = Ee;
              else {
                Z = Ce;
                var ya = Be;
              }
            else
              (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (Z = De);
            if (Z && (Z = Z(a, d2))) {
              me(g2, Z, c, e2);
              break a;
            }
            ya && ya(a, h2, d2);
            "focusout" === a && (ya = h2._wrapperState) && ya.controlled && "number" === h2.type && bb(h2, "number", h2.value);
          }
          ya = d2 ? te(d2) : window;
          switch (a) {
            case "focusin":
              if (le(ya) || "true" === ya.contentEditable)
                Pe = ya, Qe = d2, Re = null;
              break;
            case "focusout":
              Re = Qe = Pe = null;
              break;
            case "mousedown":
              Se = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Se = false;
              Te(g2, c, e2);
              break;
            case "selectionchange":
              if (Oe)
                break;
            case "keydown":
            case "keyup":
              Te(g2, c, e2);
          }
          var ab;
          if ($d)
            b: {
              switch (a) {
                case "compositionstart":
                  var ca = "onCompositionStart";
                  break b;
                case "compositionend":
                  ca = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  ca = "onCompositionUpdate";
                  break b;
              }
              ca = void 0;
            }
          else
            he ? fe(a, c) && (ca = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ca = "onCompositionStart");
          ca && (ce && "ko" !== c.locale && (he || "onCompositionStart" !== ca ? "onCompositionEnd" === ca && he && (ab = md()) : (jd = e2, kd = "value" in jd ? jd.value : jd.textContent, he = true)), ya = ne(d2, ca), 0 < ya.length && (ca = new Kd(ca, a, null, c, e2), g2.push({ event: ca, listeners: ya }), ab ? ca.data = ab : (ab = ge(c), null !== ab && (ca.data = ab))));
          if (ab = be ? ie(a, c) : je(a, c))
            d2 = ne(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Kd("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = ab);
        }
        re(g2, b);
      });
    }
    function sf(a, b, c) {
      return { instance: a, listener: b, currentTarget: c };
    }
    function ne(a, b) {
      for (var c = b + "Capture", d = []; null !== a; ) {
        var e = a, f2 = e.stateNode;
        5 === e.tag && null !== f2 && (e = f2, f2 = Jb(a, c), null != f2 && d.unshift(sf(a, f2, e)), f2 = Jb(a, b), null != f2 && d.push(sf(a, f2, e)));
        a = a.return;
      }
      return d;
    }
    function uf(a) {
      if (null === a)
        return null;
      do
        a = a.return;
      while (a && 5 !== a.tag);
      return a ? a : null;
    }
    function vf(a, b, c, d, e) {
      for (var f2 = b._reactName, g = []; null !== c && c !== d; ) {
        var h = c, k2 = h.alternate, l2 = h.stateNode;
        if (null !== k2 && k2 === d)
          break;
        5 === h.tag && null !== l2 && (h = l2, e ? (k2 = Jb(c, f2), null != k2 && g.unshift(sf(c, k2, h))) : e || (k2 = Jb(c, f2), null != k2 && g.push(sf(c, k2, h))));
        c = c.return;
      }
      0 !== g.length && a.push({ event: b, listeners: g });
    }
    var wf = /\r\n?/g, xf = /\u0000|\uFFFD/g;
    function yf(a) {
      return ("string" === typeof a ? a : "" + a).replace(wf, "\n").replace(xf, "");
    }
    function zf(a, b, c) {
      b = yf(b);
      if (yf(a) !== b && c)
        throw Error(p(425));
    }
    function Af() {
    }
    var Bf = null, Cf = null;
    function Df(a, b) {
      return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
    }
    var Ef = "function" === typeof setTimeout ? setTimeout : void 0, Ff = "function" === typeof clearTimeout ? clearTimeout : void 0, Gf = "function" === typeof Promise ? Promise : void 0, If = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Gf ? function(a) {
      return Gf.resolve(null).then(a).catch(Hf);
    } : Ef;
    function Hf(a) {
      setTimeout(function() {
        throw a;
      });
    }
    function Jf(a, b) {
      var c = b, d = 0;
      do {
        var e = c.nextSibling;
        a.removeChild(c);
        if (e && 8 === e.nodeType)
          if (c = e.data, "/$" === c) {
            if (0 === d) {
              a.removeChild(e);
              ad(b);
              return;
            }
            d--;
          } else
            "$" !== c && "$?" !== c && "$!" !== c || d++;
        c = e;
      } while (c);
      ad(b);
    }
    function Kf(a) {
      for (; null != a; a = a.nextSibling) {
        var b = a.nodeType;
        if (1 === b || 3 === b)
          break;
        if (8 === b) {
          b = a.data;
          if ("$" === b || "$!" === b || "$?" === b)
            break;
          if ("/$" === b)
            return null;
        }
      }
      return a;
    }
    function Lf(a) {
      a = a.previousSibling;
      for (var b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("$" === c || "$!" === c || "$?" === c) {
            if (0 === b)
              return a;
            b--;
          } else
            "/$" === c && b++;
        }
        a = a.previousSibling;
      }
      return null;
    }
    var Mf = Math.random().toString(36).slice(2), Nf = "__reactFiber$" + Mf, Of = "__reactProps$" + Mf, tf = "__reactContainer$" + Mf, nf = "__reactEvents$" + Mf, Pf = "__reactListeners$" + Mf, Qf = "__reactHandles$" + Mf;
    function Vc(a) {
      var b = a[Nf];
      if (b)
        return b;
      for (var c = a.parentNode; c; ) {
        if (b = c[tf] || c[Nf]) {
          c = b.alternate;
          if (null !== b.child || null !== c && null !== c.child)
            for (a = Lf(a); null !== a; ) {
              if (c = a[Nf])
                return c;
              a = Lf(a);
            }
          return b;
        }
        a = c;
        c = a.parentNode;
      }
      return null;
    }
    function Bb(a) {
      a = a[Nf] || a[tf];
      return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
    }
    function te(a) {
      if (5 === a.tag || 6 === a.tag)
        return a.stateNode;
      throw Error(p(33));
    }
    function Cb(a) {
      return a[Of] || null;
    }
    var Rf = [], Sf = -1;
    function Tf(a) {
      return { current: a };
    }
    function E(a) {
      0 > Sf || (a.current = Rf[Sf], Rf[Sf] = null, Sf--);
    }
    function G(a, b) {
      Sf++;
      Rf[Sf] = a.current;
      a.current = b;
    }
    var Uf = {}, H = Tf(Uf), Vf = Tf(false), Wf = Uf;
    function Xf(a, b) {
      var c = a.type.contextTypes;
      if (!c)
        return Uf;
      var d = a.stateNode;
      if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
        return d.__reactInternalMemoizedMaskedChildContext;
      var e = {}, f2;
      for (f2 in c)
        e[f2] = b[f2];
      d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
      return e;
    }
    function Yf(a) {
      a = a.childContextTypes;
      return null !== a && void 0 !== a;
    }
    function Zf() {
      E(Vf);
      E(H);
    }
    function $f(a, b, c) {
      if (H.current !== Uf)
        throw Error(p(168));
      G(H, b);
      G(Vf, c);
    }
    function ag(a, b, c) {
      var d = a.stateNode;
      b = b.childContextTypes;
      if ("function" !== typeof d.getChildContext)
        return c;
      d = d.getChildContext();
      for (var e in d)
        if (!(e in b))
          throw Error(p(108, Qa(a) || "Unknown", e));
      return A({}, c, d);
    }
    function bg(a) {
      a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Uf;
      Wf = H.current;
      G(H, a);
      G(Vf, Vf.current);
      return true;
    }
    function cg(a, b, c) {
      var d = a.stateNode;
      if (!d)
        throw Error(p(169));
      c ? (a = ag(a, b, Wf), d.__reactInternalMemoizedMergedChildContext = a, E(Vf), E(H), G(H, a)) : E(Vf);
      G(Vf, c);
    }
    var dg = null, eg = false, fg = false;
    function gg(a) {
      null === dg ? dg = [a] : dg.push(a);
    }
    function hg(a) {
      eg = true;
      gg(a);
    }
    function ig() {
      if (!fg && null !== dg) {
        fg = true;
        var a = 0, b = C;
        try {
          var c = dg;
          for (C = 1; a < c.length; a++) {
            var d = c[a];
            do
              d = d(true);
            while (null !== d);
          }
          dg = null;
          eg = false;
        } catch (e) {
          throw null !== dg && (dg = dg.slice(a + 1)), $b(ec, ig), e;
        } finally {
          C = b, fg = false;
        }
      }
      return null;
    }
    var jg = ta.ReactCurrentBatchConfig;
    function kg(a, b) {
      if (a && a.defaultProps) {
        b = A({}, b);
        a = a.defaultProps;
        for (var c in a)
          void 0 === b[c] && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    var lg = Tf(null), mg = null, ng = null, og = null;
    function pg() {
      og = ng = mg = null;
    }
    function qg(a) {
      var b = lg.current;
      E(lg);
      a._currentValue = b;
    }
    function rg(a, b, c) {
      for (; null !== a; ) {
        var d = a.alternate;
        (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
        if (a === c)
          break;
        a = a.return;
      }
    }
    function sg(a, b) {
      mg = a;
      og = ng = null;
      a = a.dependencies;
      null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (tg = true), a.firstContext = null);
    }
    function ug(a) {
      var b = a._currentValue;
      if (og !== a)
        if (a = { context: a, memoizedValue: b, next: null }, null === ng) {
          if (null === mg)
            throw Error(p(308));
          ng = a;
          mg.dependencies = { lanes: 0, firstContext: a };
        } else
          ng = ng.next = a;
      return b;
    }
    var vg = null, wg = false;
    function xg(a) {
      a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function yg(a, b) {
      a = a.updateQueue;
      b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
    }
    function zg(a, b) {
      return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
    }
    function Ag(a, b) {
      var c = a.updateQueue;
      null !== c && (c = c.shared, Bg(a) ? (a = c.interleaved, null === a ? (b.next = b, null === vg ? vg = [c] : vg.push(c)) : (b.next = a.next, a.next = b), c.interleaved = b) : (a = c.pending, null === a ? b.next = b : (b.next = a.next, a.next = b), c.pending = b));
    }
    function Cg(a, b, c) {
      b = b.updateQueue;
      if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        Bc(a, c);
      }
    }
    function Dg(a, b) {
      var c = a.updateQueue, d = a.alternate;
      if (null !== d && (d = d.updateQueue, c === d)) {
        var e = null, f2 = null;
        c = c.firstBaseUpdate;
        if (null !== c) {
          do {
            var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
            null === f2 ? e = f2 = g : f2 = f2.next = g;
            c = c.next;
          } while (null !== c);
          null === f2 ? e = f2 = b : f2 = f2.next = b;
        } else
          e = f2 = b;
        c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
        a.updateQueue = c;
        return;
      }
      a = c.lastBaseUpdate;
      null === a ? c.firstBaseUpdate = b : a.next = b;
      c.lastBaseUpdate = b;
    }
    function Eg(a, b, c, d) {
      var e = a.updateQueue;
      wg = false;
      var f2 = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
      if (null !== h) {
        e.shared.pending = null;
        var k2 = h, l2 = k2.next;
        k2.next = null;
        null === g ? f2 = l2 : g.next = l2;
        g = k2;
        var n2 = a.alternate;
        null !== n2 && (n2 = n2.updateQueue, h = n2.lastBaseUpdate, h !== g && (null === h ? n2.firstBaseUpdate = l2 : h.next = l2, n2.lastBaseUpdate = k2));
      }
      if (null !== f2) {
        var u2 = e.baseState;
        g = 0;
        n2 = l2 = k2 = null;
        h = f2;
        do {
          var q2 = h.lane, y2 = h.eventTime;
          if ((d & q2) === q2) {
            null !== n2 && (n2 = n2.next = {
              eventTime: y2,
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            });
            a: {
              var m2 = a, w2 = h;
              q2 = b;
              y2 = c;
              switch (w2.tag) {
                case 1:
                  m2 = w2.payload;
                  if ("function" === typeof m2) {
                    u2 = m2.call(y2, u2, q2);
                    break a;
                  }
                  u2 = m2;
                  break a;
                case 3:
                  m2.flags = m2.flags & -65537 | 128;
                case 0:
                  m2 = w2.payload;
                  q2 = "function" === typeof m2 ? m2.call(y2, u2, q2) : m2;
                  if (null === q2 || void 0 === q2)
                    break a;
                  u2 = A({}, u2, q2);
                  break a;
                case 2:
                  wg = true;
              }
            }
            null !== h.callback && 0 !== h.lane && (a.flags |= 64, q2 = e.effects, null === q2 ? e.effects = [h] : q2.push(h));
          } else
            y2 = { eventTime: y2, lane: q2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === n2 ? (l2 = n2 = y2, k2 = u2) : n2 = n2.next = y2, g |= q2;
          h = h.next;
          if (null === h)
            if (h = e.shared.pending, null === h)
              break;
            else
              q2 = h, h = q2.next, q2.next = null, e.lastBaseUpdate = q2, e.shared.pending = null;
        } while (1);
        null === n2 && (k2 = u2);
        e.baseState = k2;
        e.firstBaseUpdate = l2;
        e.lastBaseUpdate = n2;
        b = e.shared.interleaved;
        if (null !== b) {
          e = b;
          do
            g |= e.lane, e = e.next;
          while (e !== b);
        } else
          null === f2 && (e.shared.lanes = 0);
        Fg |= g;
        a.lanes = g;
        a.memoizedState = u2;
      }
    }
    function Gg(a, b, c) {
      a = b.effects;
      b.effects = null;
      if (null !== a)
        for (b = 0; b < a.length; b++) {
          var d = a[b], e = d.callback;
          if (null !== e) {
            d.callback = null;
            d = c;
            if ("function" !== typeof e)
              throw Error(p(191, e));
            e.call(d);
          }
        }
    }
    var Hg = new aa.Component().refs;
    function Ig(a, b, c, d) {
      b = a.memoizedState;
      c = c(d, b);
      c = null === c || void 0 === c ? b : A({}, b, c);
      a.memoizedState = c;
      0 === a.lanes && (a.updateQueue.baseState = c);
    }
    var Mg = { isMounted: function(a) {
      return (a = a._reactInternals) ? Ub(a) === a : false;
    }, enqueueSetState: function(a, b, c) {
      a = a._reactInternals;
      var d = Jg(), e = Kg(a), f2 = zg(d, e);
      f2.payload = b;
      void 0 !== c && null !== c && (f2.callback = c);
      Ag(a, f2);
      b = Lg(a, e, d);
      null !== b && Cg(b, a, e);
    }, enqueueReplaceState: function(a, b, c) {
      a = a._reactInternals;
      var d = Jg(), e = Kg(a), f2 = zg(d, e);
      f2.tag = 1;
      f2.payload = b;
      void 0 !== c && null !== c && (f2.callback = c);
      Ag(a, f2);
      b = Lg(a, e, d);
      null !== b && Cg(b, a, e);
    }, enqueueForceUpdate: function(a, b) {
      a = a._reactInternals;
      var c = Jg(), d = Kg(a), e = zg(
        c,
        d
      );
      e.tag = 2;
      void 0 !== b && null !== b && (e.callback = b);
      Ag(a, e);
      b = Lg(a, d, c);
      null !== b && Cg(b, a, d);
    } };
    function Ng(a, b, c, d, e, f2, g) {
      a = a.stateNode;
      return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !He(c, d) || !He(e, f2) : true;
    }
    function Og(a, b, c) {
      var d = false, e = Uf;
      var f2 = b.contextType;
      "object" === typeof f2 && null !== f2 ? f2 = ug(f2) : (e = Yf(b) ? Wf : H.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Xf(a, e) : Uf);
      b = new b(c, f2);
      a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
      b.updater = Mg;
      a.stateNode = b;
      b._reactInternals = a;
      d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
      return b;
    }
    function Pg(a, b, c, d) {
      a = b.state;
      "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
      "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
      b.state !== a && Mg.enqueueReplaceState(b, b.state, null);
    }
    function Qg(a, b, c, d) {
      var e = a.stateNode;
      e.props = c;
      e.state = a.memoizedState;
      e.refs = Hg;
      xg(a);
      var f2 = b.contextType;
      "object" === typeof f2 && null !== f2 ? e.context = ug(f2) : (f2 = Yf(b) ? Wf : H.current, e.context = Xf(a, f2));
      e.state = a.memoizedState;
      f2 = b.getDerivedStateFromProps;
      "function" === typeof f2 && (Ig(a, b, f2, c), e.state = a.memoizedState);
      "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Mg.enqueueReplaceState(e, e.state, null), Eg(a, c, e, d), e.state = a.memoizedState);
      "function" === typeof e.componentDidMount && (a.flags |= 4194308);
    }
    var Rg = [], Sg = 0, Tg = null, Ug = 0, Vg = [], Wg = 0, Xg = null, Yg = 1, Zg = "";
    function $g(a, b) {
      Rg[Sg++] = Ug;
      Rg[Sg++] = Tg;
      Tg = a;
      Ug = b;
    }
    function ah(a, b, c) {
      Vg[Wg++] = Yg;
      Vg[Wg++] = Zg;
      Vg[Wg++] = Xg;
      Xg = a;
      var d = Yg;
      a = Zg;
      var e = 32 - nc(d) - 1;
      d &= ~(1 << e);
      c += 1;
      var f2 = 32 - nc(b) + e;
      if (30 < f2) {
        var g = e - e % 5;
        f2 = (d & (1 << g) - 1).toString(32);
        d >>= g;
        e -= g;
        Yg = 1 << 32 - nc(b) + e | c << e | d;
        Zg = f2 + a;
      } else
        Yg = 1 << f2 | c << e | d, Zg = a;
    }
    function bh(a) {
      null !== a.return && ($g(a, 1), ah(a, 1, 0));
    }
    function ch(a) {
      for (; a === Tg; )
        Tg = Rg[--Sg], Rg[Sg] = null, Ug = Rg[--Sg], Rg[Sg] = null;
      for (; a === Xg; )
        Xg = Vg[--Wg], Vg[Wg] = null, Zg = Vg[--Wg], Vg[Wg] = null, Yg = Vg[--Wg], Vg[Wg] = null;
    }
    var dh = null, eh = null, I = false, fh = null;
    function gh(a, b) {
      var c = hh(5, null, null, 0);
      c.elementType = "DELETED";
      c.stateNode = b;
      c.return = a;
      b = a.deletions;
      null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
    }
    function ih(a, b) {
      switch (a.tag) {
        case 5:
          var c = a.type;
          b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
          return null !== b ? (a.stateNode = b, dh = a, eh = Kf(b.firstChild), true) : false;
        case 6:
          return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, dh = a, eh = null, true) : false;
        case 13:
          return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== Xg ? { id: Yg, overflow: Zg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = hh(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, dh = a, eh = null, true) : false;
        default:
          return false;
      }
    }
    function jh(a) {
      return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
    }
    function kh(a) {
      if (I) {
        var b = eh;
        if (b) {
          var c = b;
          if (!ih(a, b)) {
            if (jh(a))
              throw Error(p(418));
            b = Kf(c.nextSibling);
            var d = dh;
            b && ih(a, b) ? gh(d, c) : (a.flags = a.flags & -4097 | 2, I = false, dh = a);
          }
        } else {
          if (jh(a))
            throw Error(p(418));
          a.flags = a.flags & -4097 | 2;
          I = false;
          dh = a;
        }
      }
    }
    function lh(a) {
      for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
        a = a.return;
      dh = a;
    }
    function mh(a) {
      if (a !== dh)
        return false;
      if (!I)
        return lh(a), I = true, false;
      var b;
      (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Df(a.type, a.memoizedProps));
      if (b && (b = eh)) {
        if (jh(a)) {
          for (a = eh; a; )
            a = Kf(a.nextSibling);
          throw Error(p(418));
        }
        for (; b; )
          gh(a, b), b = Kf(b.nextSibling);
      }
      lh(a);
      if (13 === a.tag) {
        a = a.memoizedState;
        a = null !== a ? a.dehydrated : null;
        if (!a)
          throw Error(p(317));
        a: {
          a = a.nextSibling;
          for (b = 0; a; ) {
            if (8 === a.nodeType) {
              var c = a.data;
              if ("/$" === c) {
                if (0 === b) {
                  eh = Kf(a.nextSibling);
                  break a;
                }
                b--;
              } else
                "$" !== c && "$!" !== c && "$?" !== c || b++;
            }
            a = a.nextSibling;
          }
          eh = null;
        }
      } else
        eh = dh ? Kf(a.stateNode.nextSibling) : null;
      return true;
    }
    function nh() {
      eh = dh = null;
      I = false;
    }
    function oh(a) {
      null === fh ? fh = [a] : fh.push(a);
    }
    function ph(a, b, c) {
      a = c.ref;
      if (null !== a && "function" !== typeof a && "object" !== typeof a) {
        if (c._owner) {
          c = c._owner;
          if (c) {
            if (1 !== c.tag)
              throw Error(p(309));
            var d = c.stateNode;
          }
          if (!d)
            throw Error(p(147, a));
          var e = d, f2 = "" + a;
          if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2)
            return b.ref;
          b = function(a2) {
            var b2 = e.refs;
            b2 === Hg && (b2 = e.refs = {});
            null === a2 ? delete b2[f2] : b2[f2] = a2;
          };
          b._stringRef = f2;
          return b;
        }
        if ("string" !== typeof a)
          throw Error(p(284));
        if (!c._owner)
          throw Error(p(290, a));
      }
      return a;
    }
    function qh(a, b) {
      a = Object.prototype.toString.call(b);
      throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
    }
    function rh(a) {
      var b = a._init;
      return b(a._payload);
    }
    function sh(a) {
      function b(b2, c2) {
        if (a) {
          var d2 = b2.deletions;
          null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
        }
      }
      function c(c2, d2) {
        if (!a)
          return null;
        for (; null !== d2; )
          b(c2, d2), d2 = d2.sibling;
        return null;
      }
      function d(a2, b2) {
        for (a2 = /* @__PURE__ */ new Map(); null !== b2; )
          null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
        return a2;
      }
      function e(a2, b2) {
        a2 = th(a2, b2);
        a2.index = 0;
        a2.sibling = null;
        return a2;
      }
      function f2(b2, c2, d2) {
        b2.index = d2;
        if (!a)
          return b2.flags |= 1048576, c2;
        d2 = b2.alternate;
        if (null !== d2)
          return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
        b2.flags |= 2;
        return c2;
      }
      function g(b2) {
        a && null === b2.alternate && (b2.flags |= 2);
        return b2;
      }
      function h(a2, b2, c2, d2) {
        if (null === b2 || 6 !== b2.tag)
          return b2 = uh(c2, a2.mode, d2), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function k2(a2, b2, c2, d2) {
        var f3 = c2.type;
        if (f3 === wa)
          return n2(a2, b2, c2.props.children, d2, c2.key);
        if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ga && rh(f3) === b2.type))
          return d2 = e(b2, c2.props), d2.ref = ph(a2, b2, c2), d2.return = a2, d2;
        d2 = vh(c2.type, c2.key, c2.props, null, a2.mode, d2);
        d2.ref = ph(a2, b2, c2);
        d2.return = a2;
        return d2;
      }
      function l2(a2, b2, c2, d2) {
        if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
          return b2 = wh(c2, a2.mode, d2), b2.return = a2, b2;
        b2 = e(b2, c2.children || []);
        b2.return = a2;
        return b2;
      }
      function n2(a2, b2, c2, d2, f3) {
        if (null === b2 || 7 !== b2.tag)
          return b2 = xh(c2, a2.mode, d2, f3), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function u2(a2, b2, c2) {
        if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2)
          return b2 = uh("" + b2, a2.mode, c2), b2.return = a2, b2;
        if ("object" === typeof b2 && null !== b2) {
          switch (b2.$$typeof) {
            case ua:
              return c2 = vh(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = ph(a2, null, b2), c2.return = a2, c2;
            case va:
              return b2 = wh(b2, a2.mode, c2), b2.return = a2, b2;
            case Ga:
              var d2 = b2._init;
              return u2(a2, d2(b2._payload), c2);
          }
          if (db(b2) || Ja(b2))
            return b2 = xh(b2, a2.mode, c2, null), b2.return = a2, b2;
          qh(a2, b2);
        }
        return null;
      }
      function q2(a2, b2, c2, d2) {
        var e2 = null !== b2 ? b2.key : null;
        if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2)
          return null !== e2 ? null : h(a2, b2, "" + c2, d2);
        if ("object" === typeof c2 && null !== c2) {
          switch (c2.$$typeof) {
            case ua:
              return c2.key === e2 ? k2(a2, b2, c2, d2) : null;
            case va:
              return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
            case Ga:
              return e2 = c2._init, q2(
                a2,
                b2,
                e2(c2._payload),
                d2
              );
          }
          if (db(c2) || Ja(c2))
            return null !== e2 ? null : n2(a2, b2, c2, d2, null);
          qh(a2, c2);
        }
        return null;
      }
      function y2(a2, b2, c2, d2, e2) {
        if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2)
          return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
        if ("object" === typeof d2 && null !== d2) {
          switch (d2.$$typeof) {
            case ua:
              return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b2, a2, d2, e2);
            case va:
              return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
            case Ga:
              var f3 = d2._init;
              return y2(a2, b2, c2, f3(d2._payload), e2);
          }
          if (db(d2) || Ja(d2))
            return a2 = a2.get(c2) || null, n2(b2, a2, d2, e2, null);
          qh(b2, d2);
        }
        return null;
      }
      function m2(e2, g2, h2, k3) {
        for (var l3 = null, n3 = null, r2 = g2, m3 = g2 = 0, x2 = null; null !== r2 && m3 < h2.length; m3++) {
          r2.index > m3 ? (x2 = r2, r2 = null) : x2 = r2.sibling;
          var v2 = q2(e2, r2, h2[m3], k3);
          if (null === v2) {
            null === r2 && (r2 = x2);
            break;
          }
          a && r2 && null === v2.alternate && b(e2, r2);
          g2 = f2(v2, g2, m3);
          null === n3 ? l3 = v2 : n3.sibling = v2;
          n3 = v2;
          r2 = x2;
        }
        if (m3 === h2.length)
          return c(e2, r2), I && $g(e2, m3), l3;
        if (null === r2) {
          for (; m3 < h2.length; m3++)
            r2 = u2(e2, h2[m3], k3), null !== r2 && (g2 = f2(r2, g2, m3), null === n3 ? l3 = r2 : n3.sibling = r2, n3 = r2);
          I && $g(e2, m3);
          return l3;
        }
        for (r2 = d(e2, r2); m3 < h2.length; m3++)
          x2 = y2(r2, e2, m3, h2[m3], k3), null !== x2 && (a && null !== x2.alternate && r2.delete(null === x2.key ? m3 : x2.key), g2 = f2(x2, g2, m3), null === n3 ? l3 = x2 : n3.sibling = x2, n3 = x2);
        a && r2.forEach(function(a2) {
          return b(e2, a2);
        });
        I && $g(e2, m3);
        return l3;
      }
      function w2(e2, g2, h2, k3) {
        var l3 = Ja(h2);
        if ("function" !== typeof l3)
          throw Error(p(150));
        h2 = l3.call(h2);
        if (null == h2)
          throw Error(p(151));
        for (var n3 = l3 = null, m3 = g2, r2 = g2 = 0, x2 = null, v2 = h2.next(); null !== m3 && !v2.done; r2++, v2 = h2.next()) {
          m3.index > r2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
          var w3 = q2(e2, m3, v2.value, k3);
          if (null === w3) {
            null === m3 && (m3 = x2);
            break;
          }
          a && m3 && null === w3.alternate && b(e2, m3);
          g2 = f2(w3, g2, r2);
          null === n3 ? l3 = w3 : n3.sibling = w3;
          n3 = w3;
          m3 = x2;
        }
        if (v2.done)
          return c(
            e2,
            m3
          ), I && $g(e2, r2), l3;
        if (null === m3) {
          for (; !v2.done; r2++, v2 = h2.next())
            v2 = u2(e2, v2.value, k3), null !== v2 && (g2 = f2(v2, g2, r2), null === n3 ? l3 = v2 : n3.sibling = v2, n3 = v2);
          I && $g(e2, r2);
          return l3;
        }
        for (m3 = d(e2, m3); !v2.done; r2++, v2 = h2.next())
          v2 = y2(m3, e2, r2, v2.value, k3), null !== v2 && (a && null !== v2.alternate && m3.delete(null === v2.key ? r2 : v2.key), g2 = f2(v2, g2, r2), null === n3 ? l3 = v2 : n3.sibling = v2, n3 = v2);
        a && m3.forEach(function(a2) {
          return b(e2, a2);
        });
        I && $g(e2, r2);
        return l3;
      }
      function J2(a2, d2, f3, h2) {
        "object" === typeof f3 && null !== f3 && f3.type === wa && null === f3.key && (f3 = f3.props.children);
        if ("object" === typeof f3 && null !== f3) {
          switch (f3.$$typeof) {
            case ua:
              a: {
                for (var k3 = f3.key, l3 = d2; null !== l3; ) {
                  if (l3.key === k3) {
                    k3 = f3.type;
                    if (k3 === wa) {
                      if (7 === l3.tag) {
                        c(a2, l3.sibling);
                        d2 = e(l3, f3.props.children);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                    } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ga && rh(k3) === l3.type) {
                      c(a2, l3.sibling);
                      d2 = e(l3, f3.props);
                      d2.ref = ph(a2, l3, f3);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                    c(a2, l3);
                    break;
                  } else
                    b(a2, l3);
                  l3 = l3.sibling;
                }
                f3.type === wa ? (d2 = xh(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = vh(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = ph(a2, d2, f3), h2.return = a2, a2 = h2);
              }
              return g(a2);
            case va:
              a: {
                for (l3 = f3.key; null !== d2; ) {
                  if (d2.key === l3)
                    if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                      c(a2, d2.sibling);
                      d2 = e(d2, f3.children || []);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    } else {
                      c(a2, d2);
                      break;
                    }
                  else
                    b(a2, d2);
                  d2 = d2.sibling;
                }
                d2 = wh(f3, a2.mode, h2);
                d2.return = a2;
                a2 = d2;
              }
              return g(a2);
            case Ga:
              return l3 = f3._init, J2(a2, d2, l3(f3._payload), h2);
          }
          if (db(f3))
            return m2(a2, d2, f3, h2);
          if (Ja(f3))
            return w2(a2, d2, f3, h2);
          qh(a2, f3);
        }
        return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = uh(f3, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
      }
      return J2;
    }
    var yh = sh(true), zh = sh(false), Ah = {}, Bh = Tf(Ah), Ch = Tf(Ah), Dh = Tf(Ah);
    function Eh(a) {
      if (a === Ah)
        throw Error(p(174));
      return a;
    }
    function Fh(a, b) {
      G(Dh, b);
      G(Ch, a);
      G(Bh, Ah);
      a = b.nodeType;
      switch (a) {
        case 9:
        case 11:
          b = (b = b.documentElement) ? b.namespaceURI : kb(null, "");
          break;
        default:
          a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = kb(b, a);
      }
      E(Bh);
      G(Bh, b);
    }
    function Gh() {
      E(Bh);
      E(Ch);
      E(Dh);
    }
    function Hh(a) {
      Eh(Dh.current);
      var b = Eh(Bh.current);
      var c = kb(b, a.type);
      b !== c && (G(Ch, a), G(Bh, c));
    }
    function Ih(a) {
      Ch.current === a && (E(Bh), E(Ch));
    }
    var K = Tf(0);
    function Jh(a) {
      for (var b = a; null !== b; ) {
        if (13 === b.tag) {
          var c = b.memoizedState;
          if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data))
            return b;
        } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
          if (0 !== (b.flags & 128))
            return b;
        } else if (null !== b.child) {
          b.child.return = b;
          b = b.child;
          continue;
        }
        if (b === a)
          break;
        for (; null === b.sibling; ) {
          if (null === b.return || b.return === a)
            return null;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
      return null;
    }
    var Kh = [];
    function Lh() {
      for (var a = 0; a < Kh.length; a++)
        Kh[a]._workInProgressVersionPrimary = null;
      Kh.length = 0;
    }
    var Mh = ta.ReactCurrentDispatcher, Nh = ta.ReactCurrentBatchConfig, Oh = 0, L = null, M = null, N = null, Ph = false, Qh = false, Rh = 0, Sh = 0;
    function O() {
      throw Error(p(321));
    }
    function Th(a, b) {
      if (null === b)
        return false;
      for (var c = 0; c < b.length && c < a.length; c++)
        if (!Ge(a[c], b[c]))
          return false;
      return true;
    }
    function Uh(a, b, c, d, e, f2) {
      Oh = f2;
      L = b;
      b.memoizedState = null;
      b.updateQueue = null;
      b.lanes = 0;
      Mh.current = null === a || null === a.memoizedState ? Vh : Wh;
      a = c(d, e);
      if (Qh) {
        f2 = 0;
        do {
          Qh = false;
          Rh = 0;
          if (25 <= f2)
            throw Error(p(301));
          f2 += 1;
          N = M = null;
          b.updateQueue = null;
          Mh.current = Xh;
          a = c(d, e);
        } while (Qh);
      }
      Mh.current = Yh;
      b = null !== M && null !== M.next;
      Oh = 0;
      N = M = L = null;
      Ph = false;
      if (b)
        throw Error(p(300));
      return a;
    }
    function Zh() {
      var a = 0 !== Rh;
      Rh = 0;
      return a;
    }
    function $h() {
      var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      null === N ? L.memoizedState = N = a : N = N.next = a;
      return N;
    }
    function ai() {
      if (null === M) {
        var a = L.alternate;
        a = null !== a ? a.memoizedState : null;
      } else
        a = M.next;
      var b = null === N ? L.memoizedState : N.next;
      if (null !== b)
        N = b, M = a;
      else {
        if (null === a)
          throw Error(p(310));
        M = a;
        a = { memoizedState: M.memoizedState, baseState: M.baseState, baseQueue: M.baseQueue, queue: M.queue, next: null };
        null === N ? L.memoizedState = N = a : N = N.next = a;
      }
      return N;
    }
    function bi(a, b) {
      return "function" === typeof b ? b(a) : b;
    }
    function ci(a) {
      var b = ai(), c = b.queue;
      if (null === c)
        throw Error(p(311));
      c.lastRenderedReducer = a;
      var d = M, e = d.baseQueue, f2 = c.pending;
      if (null !== f2) {
        if (null !== e) {
          var g = e.next;
          e.next = f2.next;
          f2.next = g;
        }
        d.baseQueue = e = f2;
        c.pending = null;
      }
      if (null !== e) {
        f2 = e.next;
        d = d.baseState;
        var h = g = null, k2 = null, l2 = f2;
        do {
          var n2 = l2.lane;
          if ((Oh & n2) === n2)
            null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
          else {
            var u2 = {
              lane: n2,
              action: l2.action,
              hasEagerState: l2.hasEagerState,
              eagerState: l2.eagerState,
              next: null
            };
            null === k2 ? (h = k2 = u2, g = d) : k2 = k2.next = u2;
            L.lanes |= n2;
            Fg |= n2;
          }
          l2 = l2.next;
        } while (null !== l2 && l2 !== f2);
        null === k2 ? g = d : k2.next = h;
        Ge(d, b.memoizedState) || (tg = true);
        b.memoizedState = d;
        b.baseState = g;
        b.baseQueue = k2;
        c.lastRenderedState = d;
      }
      a = c.interleaved;
      if (null !== a) {
        e = a;
        do
          f2 = e.lane, L.lanes |= f2, Fg |= f2, e = e.next;
        while (e !== a);
      } else
        null === e && (c.lanes = 0);
      return [b.memoizedState, c.dispatch];
    }
    function di(a) {
      var b = ai(), c = b.queue;
      if (null === c)
        throw Error(p(311));
      c.lastRenderedReducer = a;
      var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
      if (null !== e) {
        c.pending = null;
        var g = e = e.next;
        do
          f2 = a(f2, g.action), g = g.next;
        while (g !== e);
        Ge(f2, b.memoizedState) || (tg = true);
        b.memoizedState = f2;
        null === b.baseQueue && (b.baseState = f2);
        c.lastRenderedState = f2;
      }
      return [f2, d];
    }
    function ei() {
    }
    function fi(a, b) {
      var c = L, d = ai(), e = b(), f2 = !Ge(d.memoizedState, e);
      f2 && (d.memoizedState = e, tg = true);
      d = d.queue;
      gi(hi.bind(null, c, d, a), [a]);
      if (d.getSnapshot !== b || f2 || null !== N && N.memoizedState.tag & 1) {
        c.flags |= 2048;
        ii(9, ji.bind(null, c, d, e, b), void 0, null);
        if (null === P)
          throw Error(p(349));
        0 !== (Oh & 30) || ki(c, b, e);
      }
      return e;
    }
    function ki(a, b, c) {
      a.flags |= 16384;
      a = { getSnapshot: b, value: c };
      b = L.updateQueue;
      null === b ? (b = { lastEffect: null, stores: null }, L.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
    }
    function ji(a, b, c, d) {
      b.value = c;
      b.getSnapshot = d;
      li(b) && Lg(a, 1, -1);
    }
    function hi(a, b, c) {
      return c(function() {
        li(b) && Lg(a, 1, -1);
      });
    }
    function li(a) {
      var b = a.getSnapshot;
      a = a.value;
      try {
        var c = b();
        return !Ge(a, c);
      } catch (d) {
        return true;
      }
    }
    function mi(a) {
      var b = $h();
      "function" === typeof a && (a = a());
      b.memoizedState = b.baseState = a;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: bi, lastRenderedState: a };
      b.queue = a;
      a = a.dispatch = ni.bind(null, L, a);
      return [b.memoizedState, a];
    }
    function ii(a, b, c, d) {
      a = { tag: a, create: b, destroy: c, deps: d, next: null };
      b = L.updateQueue;
      null === b ? (b = { lastEffect: null, stores: null }, L.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
      return a;
    }
    function oi() {
      return ai().memoizedState;
    }
    function pi(a, b, c, d) {
      var e = $h();
      L.flags |= a;
      e.memoizedState = ii(1 | b, c, void 0, void 0 === d ? null : d);
    }
    function qi(a, b, c, d) {
      var e = ai();
      d = void 0 === d ? null : d;
      var f2 = void 0;
      if (null !== M) {
        var g = M.memoizedState;
        f2 = g.destroy;
        if (null !== d && Th(d, g.deps)) {
          e.memoizedState = ii(b, c, f2, d);
          return;
        }
      }
      L.flags |= a;
      e.memoizedState = ii(1 | b, c, f2, d);
    }
    function ri(a, b) {
      return pi(8390656, 8, a, b);
    }
    function gi(a, b) {
      return qi(2048, 8, a, b);
    }
    function si(a, b) {
      return qi(4, 2, a, b);
    }
    function ti(a, b) {
      return qi(4, 4, a, b);
    }
    function ui(a, b) {
      if ("function" === typeof b)
        return a = a(), b(a), function() {
          b(null);
        };
      if (null !== b && void 0 !== b)
        return a = a(), b.current = a, function() {
          b.current = null;
        };
    }
    function vi(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return qi(4, 4, ui.bind(null, b, a), c);
    }
    function wi() {
    }
    function xi(a, b) {
      var c = ai();
      b = void 0 === b ? null : b;
      var d = c.memoizedState;
      if (null !== d && null !== b && Th(b, d[1]))
        return d[0];
      c.memoizedState = [a, b];
      return a;
    }
    function yi(a, b) {
      var c = ai();
      b = void 0 === b ? null : b;
      var d = c.memoizedState;
      if (null !== d && null !== b && Th(b, d[1]))
        return d[0];
      a = a();
      c.memoizedState = [a, b];
      return a;
    }
    function zi(a, b, c) {
      if (0 === (Oh & 21))
        return a.baseState && (a.baseState = false, tg = true), a.memoizedState = c;
      Ge(c, b) || (c = xc(), L.lanes |= c, Fg |= c, a.baseState = true);
      return b;
    }
    function Ai(a, b) {
      var c = C;
      C = 0 !== c && 4 > c ? c : 4;
      a(true);
      var d = Nh.transition;
      Nh.transition = {};
      try {
        a(false), b();
      } finally {
        C = c, Nh.transition = d;
      }
    }
    function Bi() {
      return ai().memoizedState;
    }
    function Ci(a, b, c) {
      var d = Kg(a);
      c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
      Di(a) ? Ei(b, c) : (Fi(a, b, c), c = Jg(), a = Lg(a, d, c), null !== a && Gi(a, b, d));
    }
    function ni(a, b, c) {
      var d = Kg(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
      if (Di(a))
        Ei(b, e);
      else {
        Fi(a, b, e);
        var f2 = a.alternate;
        if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2))
          try {
            var g = b.lastRenderedState, h = f2(g, c);
            e.hasEagerState = true;
            e.eagerState = h;
            if (Ge(h, g))
              return;
          } catch (k2) {
          } finally {
          }
        c = Jg();
        a = Lg(a, d, c);
        null !== a && Gi(a, b, d);
      }
    }
    function Di(a) {
      var b = a.alternate;
      return a === L || null !== b && b === L;
    }
    function Ei(a, b) {
      Qh = Ph = true;
      var c = a.pending;
      null === c ? b.next = b : (b.next = c.next, c.next = b);
      a.pending = b;
    }
    function Fi(a, b, c) {
      Bg(a) ? (a = b.interleaved, null === a ? (c.next = c, null === vg ? vg = [b] : vg.push(b)) : (c.next = a.next, a.next = c), b.interleaved = c) : (a = b.pending, null === a ? c.next = c : (c.next = a.next, a.next = c), b.pending = c);
    }
    function Gi(a, b, c) {
      if (0 !== (c & 4194240)) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        Bc(a, c);
      }
    }
    var Yh = { readContext: ug, useCallback: O, useContext: O, useEffect: O, useImperativeHandle: O, useInsertionEffect: O, useLayoutEffect: O, useMemo: O, useReducer: O, useRef: O, useState: O, useDebugValue: O, useDeferredValue: O, useTransition: O, useMutableSource: O, useSyncExternalStore: O, useId: O, unstable_isNewReconciler: false }, Vh = { readContext: ug, useCallback: function(a, b) {
      $h().memoizedState = [a, void 0 === b ? null : b];
      return a;
    }, useContext: ug, useEffect: ri, useImperativeHandle: function(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return pi(
        4194308,
        4,
        ui.bind(null, b, a),
        c
      );
    }, useLayoutEffect: function(a, b) {
      return pi(4194308, 4, a, b);
    }, useInsertionEffect: function(a, b) {
      return pi(4, 2, a, b);
    }, useMemo: function(a, b) {
      var c = $h();
      b = void 0 === b ? null : b;
      a = a();
      c.memoizedState = [a, b];
      return a;
    }, useReducer: function(a, b, c) {
      var d = $h();
      b = void 0 !== c ? c(b) : b;
      d.memoizedState = d.baseState = b;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
      d.queue = a;
      a = a.dispatch = Ci.bind(null, L, a);
      return [d.memoizedState, a];
    }, useRef: function(a) {
      var b = $h();
      a = { current: a };
      return b.memoizedState = a;
    }, useState: mi, useDebugValue: wi, useDeferredValue: function(a) {
      return $h().memoizedState = a;
    }, useTransition: function() {
      var a = mi(false), b = a[0];
      a = Ai.bind(null, a[1]);
      $h().memoizedState = a;
      return [b, a];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(a, b, c) {
      var d = L, e = $h();
      if (I) {
        if (void 0 === c)
          throw Error(p(407));
        c = c();
      } else {
        c = b();
        if (null === P)
          throw Error(p(349));
        0 !== (Oh & 30) || ki(d, b, c);
      }
      e.memoizedState = c;
      var f2 = { value: c, getSnapshot: b };
      e.queue = f2;
      ri(hi.bind(
        null,
        d,
        f2,
        a
      ), [a]);
      d.flags |= 2048;
      ii(9, ji.bind(null, d, f2, c, b), void 0, null);
      return c;
    }, useId: function() {
      var a = $h(), b = P.identifierPrefix;
      if (I) {
        var c = Zg;
        var d = Yg;
        c = (d & ~(1 << 32 - nc(d) - 1)).toString(32) + c;
        b = ":" + b + "R" + c;
        c = Rh++;
        0 < c && (b += "H" + c.toString(32));
        b += ":";
      } else
        c = Sh++, b = ":" + b + "r" + c.toString(32) + ":";
      return a.memoizedState = b;
    }, unstable_isNewReconciler: false }, Wh = {
      readContext: ug,
      useCallback: xi,
      useContext: ug,
      useEffect: gi,
      useImperativeHandle: vi,
      useInsertionEffect: si,
      useLayoutEffect: ti,
      useMemo: yi,
      useReducer: ci,
      useRef: oi,
      useState: function() {
        return ci(bi);
      },
      useDebugValue: wi,
      useDeferredValue: function(a) {
        var b = ai();
        return zi(b, M.memoizedState, a);
      },
      useTransition: function() {
        var a = ci(bi)[0], b = ai().memoizedState;
        return [a, b];
      },
      useMutableSource: ei,
      useSyncExternalStore: fi,
      useId: Bi,
      unstable_isNewReconciler: false
    }, Xh = { readContext: ug, useCallback: xi, useContext: ug, useEffect: gi, useImperativeHandle: vi, useInsertionEffect: si, useLayoutEffect: ti, useMemo: yi, useReducer: di, useRef: oi, useState: function() {
      return di(bi);
    }, useDebugValue: wi, useDeferredValue: function(a) {
      var b = ai();
      return null === M ? b.memoizedState = a : zi(b, M.memoizedState, a);
    }, useTransition: function() {
      var a = di(bi)[0], b = ai().memoizedState;
      return [a, b];
    }, useMutableSource: ei, useSyncExternalStore: fi, useId: Bi, unstable_isNewReconciler: false };
    function Hi(a, b) {
      try {
        var c = "", d = b;
        do
          c += Oa(d), d = d.return;
        while (d);
        var e = c;
      } catch (f2) {
        e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
      }
      return { value: a, source: b, stack: e };
    }
    function Ii(a, b) {
      try {
        console.error(b.value);
      } catch (c) {
        setTimeout(function() {
          throw c;
        });
      }
    }
    var Ji = "function" === typeof WeakMap ? WeakMap : Map;
    function Ki(a, b, c) {
      c = zg(-1, c);
      c.tag = 3;
      c.payload = { element: null };
      var d = b.value;
      c.callback = function() {
        Li || (Li = true, Mi = d);
        Ii(a, b);
      };
      return c;
    }
    function Ni(a, b, c) {
      c = zg(-1, c);
      c.tag = 3;
      var d = a.type.getDerivedStateFromError;
      if ("function" === typeof d) {
        var e = b.value;
        c.payload = function() {
          return d(e);
        };
        c.callback = function() {
          Ii(a, b);
        };
      }
      var f2 = a.stateNode;
      null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
        Ii(a, b);
        "function" !== typeof d && (null === Oi ? Oi = /* @__PURE__ */ new Set([this]) : Oi.add(this));
        var c2 = b.stack;
        this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
      });
      return c;
    }
    function Pi(a, b, c) {
      var d = a.pingCache;
      if (null === d) {
        d = a.pingCache = new Ji();
        var e = /* @__PURE__ */ new Set();
        d.set(b, e);
      } else
        e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
      e.has(c) || (e.add(c), a = Qi.bind(null, a, b, c), b.then(a, a));
    }
    function Ri(a) {
      do {
        var b;
        if (b = 13 === a.tag)
          b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
        if (b)
          return a;
        a = a.return;
      } while (null !== a);
      return null;
    }
    function Si(a, b, c, d, e) {
      if (0 === (a.mode & 1))
        return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = zg(-1, 1), b.tag = 2, Ag(c, b))), c.lanes |= 1), a;
      a.flags |= 65536;
      a.lanes = e;
      return a;
    }
    var Ti, Ui, Vi, Wi;
    Ti = function(a, b) {
      for (var c = b.child; null !== c; ) {
        if (5 === c.tag || 6 === c.tag)
          a.appendChild(c.stateNode);
        else if (4 !== c.tag && null !== c.child) {
          c.child.return = c;
          c = c.child;
          continue;
        }
        if (c === b)
          break;
        for (; null === c.sibling; ) {
          if (null === c.return || c.return === b)
            return;
          c = c.return;
        }
        c.sibling.return = c.return;
        c = c.sibling;
      }
    };
    Ui = function() {
    };
    Vi = function(a, b, c, d) {
      var e = a.memoizedProps;
      if (e !== d) {
        a = b.stateNode;
        Eh(Bh.current);
        var f2 = null;
        switch (c) {
          case "input":
            e = Xa(a, e);
            d = Xa(a, d);
            f2 = [];
            break;
          case "select":
            e = A({}, e, { value: void 0 });
            d = A({}, d, { value: void 0 });
            f2 = [];
            break;
          case "textarea":
            e = fb(a, e);
            d = fb(a, d);
            f2 = [];
            break;
          default:
            "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Af);
        }
        tb(c, d);
        var g;
        c = null;
        for (l2 in e)
          if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2])
            if ("style" === l2) {
              var h = e[l2];
              for (g in h)
                h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
            } else
              "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
        for (l2 in d) {
          var k2 = d[l2];
          h = null != e ? e[l2] : void 0;
          if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h))
            if ("style" === l2)
              if (h) {
                for (g in h)
                  !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
                for (g in k2)
                  k2.hasOwnProperty(g) && h[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
              } else
                c || (f2 || (f2 = []), f2.push(
                  l2,
                  c
                )), c = k2;
            else
              "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
        }
        c && (f2 = f2 || []).push("style", c);
        var l2 = f2;
        if (b.updateQueue = l2)
          b.flags |= 4;
      }
    };
    Wi = function(a, b, c, d) {
      c !== d && (b.flags |= 4);
    };
    function Xi(a, b) {
      if (!I)
        switch (a.tailMode) {
          case "hidden":
            b = a.tail;
            for (var c = null; null !== b; )
              null !== b.alternate && (c = b), b = b.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
          case "collapsed":
            c = a.tail;
            for (var d = null; null !== c; )
              null !== c.alternate && (d = c), c = c.sibling;
            null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
        }
    }
    function Q(a) {
      var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
      if (b)
        for (var e = a.child; null !== e; )
          c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
      else
        for (e = a.child; null !== e; )
          c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
      a.subtreeFlags |= d;
      a.childLanes = c;
      return b;
    }
    function Yi(a, b, c) {
      var d = b.pendingProps;
      ch(b);
      switch (b.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Q(b), null;
        case 1:
          return Yf(b.type) && Zf(), Q(b), null;
        case 3:
          d = b.stateNode;
          Gh();
          E(Vf);
          E(H);
          Lh();
          d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
          if (null === a || null === a.child)
            mh(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== fh && (Zi(fh), fh = null));
          Ui(a, b);
          Q(b);
          return null;
        case 5:
          Ih(b);
          var e = Eh(Dh.current);
          c = b.type;
          if (null !== a && null != b.stateNode)
            Vi(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
          else {
            if (!d) {
              if (null === b.stateNode)
                throw Error(p(166));
              Q(b);
              return null;
            }
            a = Eh(Bh.current);
            if (mh(b)) {
              d = b.stateNode;
              c = b.type;
              var f2 = b.memoizedProps;
              d[Nf] = b;
              d[Of] = f2;
              a = 0 !== (b.mode & 1);
              switch (c) {
                case "dialog":
                  D("cancel", d);
                  D("close", d);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D("load", d);
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < kf.length; e++)
                    D(kf[e], d);
                  break;
                case "source":
                  D("error", d);
                  break;
                case "img":
                case "image":
                case "link":
                  D(
                    "error",
                    d
                  );
                  D("load", d);
                  break;
                case "details":
                  D("toggle", d);
                  break;
                case "input":
                  Ya(d, f2);
                  D("invalid", d);
                  break;
                case "select":
                  d._wrapperState = { wasMultiple: !!f2.multiple };
                  D("invalid", d);
                  break;
                case "textarea":
                  gb(d, f2), D("invalid", d);
              }
              tb(c, f2);
              e = null;
              for (var g in f2)
                if (f2.hasOwnProperty(g)) {
                  var h = f2[g];
                  "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && zf(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && zf(
                    d.textContent,
                    h,
                    a
                  ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
                }
              switch (c) {
                case "input":
                  Ua(d);
                  cb(d, f2, true);
                  break;
                case "textarea":
                  Ua(d);
                  ib(d);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" === typeof f2.onClick && (d.onclick = Af);
              }
              d = e;
              b.updateQueue = d;
              null !== d && (b.flags |= 4);
            } else {
              g = 9 === e.nodeType ? e : e.ownerDocument;
              "http://www.w3.org/1999/xhtml" === a && (a = jb(c));
              "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
              a[Nf] = b;
              a[Of] = d;
              Ti(a, b, false, false);
              b.stateNode = a;
              a: {
                g = ub(c, d);
                switch (c) {
                  case "dialog":
                    D("cancel", a);
                    D("close", a);
                    e = d;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", a);
                    e = d;
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < kf.length; e++)
                      D(kf[e], a);
                    e = d;
                    break;
                  case "source":
                    D("error", a);
                    e = d;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      a
                    );
                    D("load", a);
                    e = d;
                    break;
                  case "details":
                    D("toggle", a);
                    e = d;
                    break;
                  case "input":
                    Ya(a, d);
                    e = Xa(a, d);
                    D("invalid", a);
                    break;
                  case "option":
                    e = d;
                    break;
                  case "select":
                    a._wrapperState = { wasMultiple: !!d.multiple };
                    e = A({}, d, { value: void 0 });
                    D("invalid", a);
                    break;
                  case "textarea":
                    gb(a, d);
                    e = fb(a, d);
                    D("invalid", a);
                    break;
                  default:
                    e = d;
                }
                tb(c, e);
                h = e;
                for (f2 in h)
                  if (h.hasOwnProperty(f2)) {
                    var k2 = h[f2];
                    "style" === f2 ? rb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && mb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && nb(a, k2) : "number" === typeof k2 && nb(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && sa(a, f2, k2, g));
                  }
                switch (c) {
                  case "input":
                    Ua(a);
                    cb(a, d, false);
                    break;
                  case "textarea":
                    Ua(a);
                    ib(a);
                    break;
                  case "option":
                    null != d.value && a.setAttribute("value", "" + Ra(d.value));
                    break;
                  case "select":
                    a.multiple = !!d.multiple;
                    f2 = d.value;
                    null != f2 ? eb(a, !!d.multiple, f2, false) : null != d.defaultValue && eb(
                      a,
                      !!d.multiple,
                      d.defaultValue,
                      true
                    );
                    break;
                  default:
                    "function" === typeof e.onClick && (a.onclick = Af);
                }
                switch (c) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d = !!d.autoFocus;
                    break a;
                  case "img":
                    d = true;
                    break a;
                  default:
                    d = false;
                }
              }
              d && (b.flags |= 4);
            }
            null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
          }
          Q(b);
          return null;
        case 6:
          if (a && null != b.stateNode)
            Wi(a, b, a.memoizedProps, d);
          else {
            if ("string" !== typeof d && null === b.stateNode)
              throw Error(p(166));
            c = Eh(Dh.current);
            Eh(Bh.current);
            if (mh(b)) {
              d = b.stateNode;
              c = b.memoizedProps;
              d[Nf] = b;
              if (f2 = d.nodeValue !== c) {
                if (a = dh, null !== a)
                  switch (a.tag) {
                    case 3:
                      zf(d.nodeValue, c, 0 !== (a.mode & 1));
                      break;
                    case 5:
                      true !== a.memoizedProps.suppressHydrationWarning && zf(d.nodeValue, c, 0 !== (a.mode & 1));
                  }
              }
              f2 && (b.flags |= 4);
            } else
              d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Nf] = b, b.stateNode = d;
          }
          Q(b);
          return null;
        case 13:
          E(K);
          d = b.memoizedState;
          if (I && null !== eh && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) {
            for (d = eh; d; )
              d = Kf(d.nextSibling);
            nh();
            b.flags |= 98560;
            return b;
          }
          if (null !== d && null !== d.dehydrated) {
            d = mh(b);
            if (null === a) {
              if (!d)
                throw Error(p(318));
              d = b.memoizedState;
              d = null !== d ? d.dehydrated : null;
              if (!d)
                throw Error(p(317));
              d[Nf] = b;
            } else
              nh(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
            Q(b);
            return null;
          }
          null !== fh && (Zi(fh), fh = null);
          if (0 !== (b.flags & 128))
            return b.lanes = c, b;
          d = null !== d;
          c = false;
          null === a ? mh(b) : c = null !== a.memoizedState;
          d !== c && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (K.current & 1) ? 0 === R && (R = 3) : $i()));
          null !== b.updateQueue && (b.flags |= 4);
          Q(b);
          return null;
        case 4:
          return Gh(), Ui(a, b), null === a && rf(b.stateNode.containerInfo), Q(b), null;
        case 10:
          return qg(b.type._context), Q(b), null;
        case 17:
          return Yf(b.type) && Zf(), Q(b), null;
        case 19:
          E(K);
          f2 = b.memoizedState;
          if (null === f2)
            return Q(b), null;
          d = 0 !== (b.flags & 128);
          g = f2.rendering;
          if (null === g)
            if (d)
              Xi(f2, false);
            else {
              if (0 !== R || null !== a && 0 !== (a.flags & 128))
                for (a = b.child; null !== a; ) {
                  g = Jh(a);
                  if (null !== g) {
                    b.flags |= 128;
                    Xi(f2, false);
                    d = g.updateQueue;
                    null !== d && (b.updateQueue = d, b.flags |= 4);
                    b.subtreeFlags = 0;
                    d = c;
                    for (c = b.child; null !== c; )
                      f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                    G(K, K.current & 1 | 2);
                    return b.child;
                  }
                  a = a.sibling;
                }
              null !== f2.tail && B() > aj && (b.flags |= 128, d = true, Xi(f2, false), b.lanes = 4194304);
            }
          else {
            if (!d)
              if (a = Jh(g), null !== a) {
                if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Xi(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I)
                  return Q(b), null;
              } else
                2 * B() - f2.renderingStartTime > aj && 1073741824 !== c && (b.flags |= 128, d = true, Xi(f2, false), b.lanes = 4194304);
            f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f2.last, null !== c ? c.sibling = g : b.child = g, f2.last = g);
          }
          if (null !== f2.tail)
            return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B(), b.sibling = null, c = K.current, G(K, d ? c & 1 | 2 : c & 1), b;
          Q(b);
          return null;
        case 22:
        case 23:
          return bj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (cj & 1073741824) && (Q(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : Q(b), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(p(156, b.tag));
    }
    var dj = ta.ReactCurrentOwner, tg = false;
    function ej(a, b, c, d) {
      b.child = null === a ? zh(b, null, c, d) : yh(b, a.child, c, d);
    }
    function fj(a, b, c, d, e) {
      c = c.render;
      var f2 = b.ref;
      sg(b, e);
      d = Uh(a, b, c, d, f2, e);
      c = Zh();
      if (null !== a && !tg)
        return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, gj(a, b, e);
      I && c && bh(b);
      b.flags |= 1;
      ej(a, b, d, e);
      return b.child;
    }
    function hj(a, b, c, d, e) {
      if (null === a) {
        var f2 = c.type;
        if ("function" === typeof f2 && !ij(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps)
          return b.tag = 15, b.type = f2, jj(a, b, f2, d, e);
        a = vh(c.type, null, d, b, b.mode, e);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      f2 = a.child;
      if (0 === (a.lanes & e)) {
        var g = f2.memoizedProps;
        c = c.compare;
        c = null !== c ? c : He;
        if (c(g, d) && a.ref === b.ref)
          return gj(a, b, e);
      }
      b.flags |= 1;
      a = th(f2, d);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    function jj(a, b, c, d, e) {
      if (null !== a) {
        var f2 = a.memoizedProps;
        if (He(f2, d) && a.ref === b.ref)
          if (tg = false, b.pendingProps = d = f2, 0 !== (a.lanes & e))
            0 !== (a.flags & 131072) && (tg = true);
          else
            return b.lanes = a.lanes, gj(a, b, e);
      }
      return kj(a, b, c, d, e);
    }
    function lj(a, b, c) {
      var d = b.pendingProps, e = d.children, f2 = null !== a ? a.memoizedState : null;
      if ("hidden" === d.mode)
        if (0 === (b.mode & 1))
          b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(mj, cj), cj |= c;
        else if (0 !== (c & 1073741824))
          b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, d = null !== f2 ? f2.baseLanes : c, G(mj, cj), cj |= d;
        else
          return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(mj, cj), cj |= a, null;
      else
        null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G(mj, cj), cj |= d;
      ej(a, b, e, c);
      return b.child;
    }
    function nj(a, b) {
      var c = b.ref;
      if (null === a && null !== c || null !== a && a.ref !== c)
        b.flags |= 512, b.flags |= 2097152;
    }
    function kj(a, b, c, d, e) {
      var f2 = Yf(c) ? Wf : H.current;
      f2 = Xf(b, f2);
      sg(b, e);
      c = Uh(a, b, c, d, f2, e);
      d = Zh();
      if (null !== a && !tg)
        return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, gj(a, b, e);
      I && d && bh(b);
      b.flags |= 1;
      ej(a, b, c, e);
      return b.child;
    }
    function oj(a, b, c, d, e) {
      if (Yf(c)) {
        var f2 = true;
        bg(b);
      } else
        f2 = false;
      sg(b, e);
      if (null === b.stateNode)
        null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), Og(b, c, d), Qg(b, c, d, e), d = true;
      else if (null === a) {
        var g = b.stateNode, h = b.memoizedProps;
        g.props = h;
        var k2 = g.context, l2 = c.contextType;
        "object" === typeof l2 && null !== l2 ? l2 = ug(l2) : (l2 = Yf(c) ? Wf : H.current, l2 = Xf(b, l2));
        var n2 = c.getDerivedStateFromProps, u2 = "function" === typeof n2 || "function" === typeof g.getSnapshotBeforeUpdate;
        u2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && Pg(b, g, d, l2);
        wg = false;
        var q2 = b.memoizedState;
        g.state = q2;
        Eg(b, d, g, e);
        k2 = b.memoizedState;
        h !== d || q2 !== k2 || Vf.current || wg ? ("function" === typeof n2 && (Ig(b, c, n2, d), k2 = b.memoizedState), (h = wg || Ng(b, c, h, d, q2, k2, l2)) ? (u2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
      } else {
        g = b.stateNode;
        yg(a, b);
        h = b.memoizedProps;
        l2 = b.type === b.elementType ? h : kg(b.type, h);
        g.props = l2;
        u2 = b.pendingProps;
        q2 = g.context;
        k2 = c.contextType;
        "object" === typeof k2 && null !== k2 ? k2 = ug(k2) : (k2 = Yf(c) ? Wf : H.current, k2 = Xf(b, k2));
        var y2 = c.getDerivedStateFromProps;
        (n2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== u2 || q2 !== k2) && Pg(b, g, d, k2);
        wg = false;
        q2 = b.memoizedState;
        g.state = q2;
        Eg(b, d, g, e);
        var m2 = b.memoizedState;
        h !== u2 || q2 !== m2 || Vf.current || wg ? ("function" === typeof y2 && (Ig(b, c, y2, d), m2 = b.memoizedState), (l2 = wg || Ng(b, c, l2, d, q2, m2, k2) || false) ? (n2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, m2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, m2, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && q2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && q2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = m2), g.props = d, g.state = m2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && q2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && q2 === a.memoizedState || (b.flags |= 1024), d = false);
      }
      return pj(a, b, c, d, f2, e);
    }
    function pj(a, b, c, d, e, f2) {
      nj(a, b);
      var g = 0 !== (b.flags & 128);
      if (!d && !g)
        return e && cg(b, c, false), gj(a, b, f2);
      d = b.stateNode;
      dj.current = b;
      var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
      b.flags |= 1;
      null !== a && g ? (b.child = yh(b, a.child, null, f2), b.child = yh(b, null, h, f2)) : ej(a, b, h, f2);
      b.memoizedState = d.state;
      e && cg(b, c, true);
      return b.child;
    }
    function qj(a) {
      var b = a.stateNode;
      b.pendingContext ? $f(a, b.pendingContext, b.pendingContext !== b.context) : b.context && $f(a, b.context, false);
      Fh(a, b.containerInfo);
    }
    function rj(a, b, c, d, e) {
      nh();
      oh(e);
      b.flags |= 256;
      ej(a, b, c, d);
      return b.child;
    }
    var sj = { dehydrated: null, treeContext: null, retryLane: 0 };
    function tj(a) {
      return { baseLanes: a, cachePool: null, transitions: null };
    }
    function uj(a, b) {
      return { baseLanes: a.baseLanes | b, cachePool: null, transitions: a.transitions };
    }
    function vj(a, b, c) {
      var d = b.pendingProps, e = K.current, f2 = false, g = 0 !== (b.flags & 128), h;
      (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
      if (h)
        f2 = true, b.flags &= -129;
      else if (null === a || null !== a.memoizedState)
        e |= 1;
      G(K, e & 1);
      if (null === a) {
        kh(b);
        a = b.memoizedState;
        if (null !== a && (a = a.dehydrated, null !== a))
          return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
        e = d.children;
        a = d.fallback;
        return f2 ? (d = b.mode, f2 = b.child, e = { mode: "hidden", children: e }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = e) : f2 = wj(e, d, 0, null), a = xh(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = tj(c), b.memoizedState = sj, a) : xj(b, e);
      }
      e = a.memoizedState;
      if (null !== e) {
        h = e.dehydrated;
        if (null !== h) {
          if (g) {
            if (b.flags & 256)
              return b.flags &= -257, yj(a, b, c, Error(p(422)));
            if (null !== b.memoizedState)
              return b.child = a.child, b.flags |= 128, null;
            f2 = d.fallback;
            e = b.mode;
            d = wj({ mode: "visible", children: d.children }, e, 0, null);
            f2 = xh(f2, e, c, null);
            f2.flags |= 2;
            d.return = b;
            f2.return = b;
            d.sibling = f2;
            b.child = d;
            0 !== (b.mode & 1) && yh(
              b,
              a.child,
              null,
              c
            );
            b.child.memoizedState = tj(c);
            b.memoizedState = sj;
            return f2;
          }
          if (0 === (b.mode & 1))
            b = yj(a, b, c, null);
          else if ("$!" === h.data)
            b = yj(a, b, c, Error(p(419)));
          else if (d = 0 !== (c & a.childLanes), tg || d) {
            d = P;
            if (null !== d) {
              switch (c & -c) {
                case 4:
                  f2 = 2;
                  break;
                case 16:
                  f2 = 8;
                  break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                  f2 = 32;
                  break;
                case 536870912:
                  f2 = 268435456;
                  break;
                default:
                  f2 = 0;
              }
              d = 0 !== (f2 & (d.suspendedLanes | c)) ? 0 : f2;
              0 !== d && d !== e.retryLane && (e.retryLane = d, Lg(a, d, -1));
            }
            $i();
            b = yj(a, b, c, Error(p(421)));
          } else
            "$?" === h.data ? (b.flags |= 128, b.child = a.child, b = zj.bind(null, a), h._reactRetry = b, b = null) : (c = e.treeContext, eh = Kf(h.nextSibling), dh = b, I = true, fh = null, null !== c && (Vg[Wg++] = Yg, Vg[Wg++] = Zg, Vg[Wg++] = Xg, Yg = c.id, Zg = c.overflow, Xg = b), b = xj(b, b.pendingProps.children), b.flags |= 4096);
          return b;
        }
        if (f2)
          return d = Aj(a, b, d.children, d.fallback, c), f2 = b.child, e = a.child.memoizedState, f2.memoizedState = null === e ? tj(c) : uj(e, c), f2.childLanes = a.childLanes & ~c, b.memoizedState = sj, d;
        c = Bj(a, b, d.children, c);
        b.memoizedState = null;
        return c;
      }
      if (f2)
        return d = Aj(a, b, d.children, d.fallback, c), f2 = b.child, e = a.child.memoizedState, f2.memoizedState = null === e ? tj(c) : uj(e, c), f2.childLanes = a.childLanes & ~c, b.memoizedState = sj, d;
      c = Bj(a, b, d.children, c);
      b.memoizedState = null;
      return c;
    }
    function xj(a, b) {
      b = wj({ mode: "visible", children: b }, a.mode, 0, null);
      b.return = a;
      return a.child = b;
    }
    function Bj(a, b, c, d) {
      var e = a.child;
      a = e.sibling;
      c = th(e, { mode: "visible", children: c });
      0 === (b.mode & 1) && (c.lanes = d);
      c.return = b;
      c.sibling = null;
      null !== a && (d = b.deletions, null === d ? (b.deletions = [a], b.flags |= 16) : d.push(a));
      return b.child = c;
    }
    function Aj(a, b, c, d, e) {
      var f2 = b.mode;
      a = a.child;
      var g = a.sibling, h = { mode: "hidden", children: c };
      0 === (f2 & 1) && b.child !== a ? (c = b.child, c.childLanes = 0, c.pendingProps = h, b.deletions = null) : (c = th(a, h), c.subtreeFlags = a.subtreeFlags & 14680064);
      null !== g ? d = th(g, d) : (d = xh(d, f2, e, null), d.flags |= 2);
      d.return = b;
      c.return = b;
      c.sibling = d;
      b.child = c;
      return d;
    }
    function yj(a, b, c, d) {
      null !== d && oh(d);
      yh(b, a.child, null, c);
      a = xj(b, b.pendingProps.children);
      a.flags |= 2;
      b.memoizedState = null;
      return a;
    }
    function Cj(a, b, c) {
      a.lanes |= b;
      var d = a.alternate;
      null !== d && (d.lanes |= b);
      rg(a.return, b, c);
    }
    function Dj(a, b, c, d, e) {
      var f2 = a.memoizedState;
      null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e);
    }
    function Ej(a, b, c) {
      var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
      ej(a, b, d.children, c);
      d = K.current;
      if (0 !== (d & 2))
        d = d & 1 | 2, b.flags |= 128;
      else {
        if (null !== a && 0 !== (a.flags & 128))
          a:
            for (a = b.child; null !== a; ) {
              if (13 === a.tag)
                null !== a.memoizedState && Cj(a, c, b);
              else if (19 === a.tag)
                Cj(a, c, b);
              else if (null !== a.child) {
                a.child.return = a;
                a = a.child;
                continue;
              }
              if (a === b)
                break a;
              for (; null === a.sibling; ) {
                if (null === a.return || a.return === b)
                  break a;
                a = a.return;
              }
              a.sibling.return = a.return;
              a = a.sibling;
            }
        d &= 1;
      }
      G(K, d);
      if (0 === (b.mode & 1))
        b.memoizedState = null;
      else
        switch (e) {
          case "forwards":
            c = b.child;
            for (e = null; null !== c; )
              a = c.alternate, null !== a && null === Jh(a) && (e = c), c = c.sibling;
            c = e;
            null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
            Dj(b, false, e, c, f2);
            break;
          case "backwards":
            c = null;
            e = b.child;
            for (b.child = null; null !== e; ) {
              a = e.alternate;
              if (null !== a && null === Jh(a)) {
                b.child = e;
                break;
              }
              a = e.sibling;
              e.sibling = c;
              c = e;
              e = a;
            }
            Dj(b, true, c, null, f2);
            break;
          case "together":
            Dj(b, false, null, null, void 0);
            break;
          default:
            b.memoizedState = null;
        }
      return b.child;
    }
    function gj(a, b, c) {
      null !== a && (b.dependencies = a.dependencies);
      Fg |= b.lanes;
      if (0 === (c & b.childLanes))
        return null;
      if (null !== a && b.child !== a.child)
        throw Error(p(153));
      if (null !== b.child) {
        a = b.child;
        c = th(a, a.pendingProps);
        b.child = c;
        for (c.return = b; null !== a.sibling; )
          a = a.sibling, c = c.sibling = th(a, a.pendingProps), c.return = b;
        c.sibling = null;
      }
      return b.child;
    }
    function Fj(a, b, c) {
      switch (b.tag) {
        case 3:
          qj(b);
          nh();
          break;
        case 5:
          Hh(b);
          break;
        case 1:
          Yf(b.type) && bg(b);
          break;
        case 4:
          Fh(b, b.stateNode.containerInfo);
          break;
        case 10:
          var d = b.type._context, e = b.memoizedProps.value;
          G(lg, d._currentValue);
          d._currentValue = e;
          break;
        case 13:
          d = b.memoizedState;
          if (null !== d) {
            if (null !== d.dehydrated)
              return G(K, K.current & 1), b.flags |= 128, null;
            if (0 !== (c & b.child.childLanes))
              return vj(a, b, c);
            G(K, K.current & 1);
            a = gj(a, b, c);
            return null !== a ? a.sibling : null;
          }
          G(K, K.current & 1);
          break;
        case 19:
          d = 0 !== (c & b.childLanes);
          if (0 !== (a.flags & 128)) {
            if (d)
              return Ej(a, b, c);
            b.flags |= 128;
          }
          e = b.memoizedState;
          null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
          G(K, K.current);
          if (d)
            break;
          else
            return null;
        case 22:
        case 23:
          return b.lanes = 0, lj(a, b, c);
      }
      return gj(a, b, c);
    }
    function Gj(a, b) {
      ch(b);
      switch (b.tag) {
        case 1:
          return Yf(b.type) && Zf(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 3:
          return Gh(), E(Vf), E(H), Lh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
        case 5:
          return Ih(b), null;
        case 13:
          E(K);
          a = b.memoizedState;
          if (null !== a && null !== a.dehydrated) {
            if (null === b.alternate)
              throw Error(p(340));
            nh();
          }
          a = b.flags;
          return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 19:
          return E(K), null;
        case 4:
          return Gh(), null;
        case 10:
          return qg(b.type._context), null;
        case 22:
        case 23:
          return bj(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Hj = false, S = false, Ij = "function" === typeof WeakSet ? WeakSet : Set, T = null;
    function Jj(a, b) {
      var c = a.ref;
      if (null !== c)
        if ("function" === typeof c)
          try {
            c(null);
          } catch (d) {
            U(a, b, d);
          }
        else
          c.current = null;
    }
    function Kj(a, b, c) {
      try {
        c();
      } catch (d) {
        U(a, b, d);
      }
    }
    var Lj = false;
    function Mj(a, b) {
      Bf = cd;
      a = Le();
      if (Me(a)) {
        if ("selectionStart" in a)
          var c = { start: a.selectionStart, end: a.selectionEnd };
        else
          a: {
            c = (c = a.ownerDocument) && c.defaultView || window;
            var d = c.getSelection && c.getSelection();
            if (d && 0 !== d.rangeCount) {
              c = d.anchorNode;
              var e = d.anchorOffset, f2 = d.focusNode;
              d = d.focusOffset;
              try {
                c.nodeType, f2.nodeType;
              } catch (Z) {
                c = null;
                break a;
              }
              var g = 0, h = -1, k2 = -1, l2 = 0, n2 = 0, u2 = a, q2 = null;
              b:
                for (; ; ) {
                  for (var y2; ; ) {
                    u2 !== c || 0 !== e && 3 !== u2.nodeType || (h = g + e);
                    u2 !== f2 || 0 !== d && 3 !== u2.nodeType || (k2 = g + d);
                    3 === u2.nodeType && (g += u2.nodeValue.length);
                    if (null === (y2 = u2.firstChild))
                      break;
                    q2 = u2;
                    u2 = y2;
                  }
                  for (; ; ) {
                    if (u2 === a)
                      break b;
                    q2 === c && ++l2 === e && (h = g);
                    q2 === f2 && ++n2 === d && (k2 = g);
                    if (null !== (y2 = u2.nextSibling))
                      break;
                    u2 = q2;
                    q2 = u2.parentNode;
                  }
                  u2 = y2;
                }
              c = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
            } else
              c = null;
          }
        c = c || { start: 0, end: 0 };
      } else
        c = null;
      Cf = { focusedElem: a, selectionRange: c };
      cd = false;
      for (T = b; null !== T; )
        if (b = T, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a)
          a.return = b, T = a;
        else
          for (; null !== T; ) {
            b = T;
            try {
              var m2 = b.alternate;
              if (0 !== (b.flags & 1024))
                switch (b.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (null !== m2) {
                      var w2 = m2.memoizedProps, J2 = m2.memoizedState, v2 = b.stateNode, x2 = v2.getSnapshotBeforeUpdate(b.elementType === b.type ? w2 : kg(b.type, w2), J2);
                      v2.__reactInternalSnapshotBeforeUpdate = x2;
                    }
                    break;
                  case 3:
                    var r2 = b.stateNode.containerInfo;
                    if (1 === r2.nodeType)
                      r2.textContent = "";
                    else if (9 === r2.nodeType) {
                      var F2 = r2.body;
                      null != F2 && (F2.textContent = "");
                    }
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(p(163));
                }
            } catch (Z) {
              U(b, b.return, Z);
            }
            a = b.sibling;
            if (null !== a) {
              a.return = b.return;
              T = a;
              break;
            }
            T = b.return;
          }
      m2 = Lj;
      Lj = false;
      return m2;
    }
    function Nj(a, b, c) {
      var d = b.updateQueue;
      d = null !== d ? d.lastEffect : null;
      if (null !== d) {
        var e = d = d.next;
        do {
          if ((e.tag & a) === a) {
            var f2 = e.destroy;
            e.destroy = void 0;
            void 0 !== f2 && Kj(b, c, f2);
          }
          e = e.next;
        } while (e !== d);
      }
    }
    function Oj(a, b) {
      b = b.updateQueue;
      b = null !== b ? b.lastEffect : null;
      if (null !== b) {
        var c = b = b.next;
        do {
          if ((c.tag & a) === a) {
            var d = c.create;
            c.destroy = d();
          }
          c = c.next;
        } while (c !== b);
      }
    }
    function Pj(a) {
      var b = a.ref;
      if (null !== b) {
        var c = a.stateNode;
        switch (a.tag) {
          case 5:
            a = c;
            break;
          default:
            a = c;
        }
        "function" === typeof b ? b(a) : b.current = a;
      }
    }
    function Qj(a) {
      var b = a.alternate;
      null !== b && (a.alternate = null, Qj(b));
      a.child = null;
      a.deletions = null;
      a.sibling = null;
      5 === a.tag && (b = a.stateNode, null !== b && (delete b[Nf], delete b[Of], delete b[nf], delete b[Pf], delete b[Qf]));
      a.stateNode = null;
      a.return = null;
      a.dependencies = null;
      a.memoizedProps = null;
      a.memoizedState = null;
      a.pendingProps = null;
      a.stateNode = null;
      a.updateQueue = null;
    }
    function Rj(a) {
      return 5 === a.tag || 3 === a.tag || 4 === a.tag;
    }
    function Sj(a) {
      a:
        for (; ; ) {
          for (; null === a.sibling; ) {
            if (null === a.return || Rj(a.return))
              return null;
            a = a.return;
          }
          a.sibling.return = a.return;
          for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
            if (a.flags & 2)
              continue a;
            if (null === a.child || 4 === a.tag)
              continue a;
            else
              a.child.return = a, a = a.child;
          }
          if (!(a.flags & 2))
            return a.stateNode;
        }
    }
    function Tj(a, b, c) {
      var d = a.tag;
      if (5 === d || 6 === d)
        a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Af));
      else if (4 !== d && (a = a.child, null !== a))
        for (Tj(a, b, c), a = a.sibling; null !== a; )
          Tj(a, b, c), a = a.sibling;
    }
    function Uj(a, b, c) {
      var d = a.tag;
      if (5 === d || 6 === d)
        a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
      else if (4 !== d && (a = a.child, null !== a))
        for (Uj(a, b, c), a = a.sibling; null !== a; )
          Uj(a, b, c), a = a.sibling;
    }
    var V = null, Vj = false;
    function Wj(a, b, c) {
      for (c = c.child; null !== c; )
        Xj(a, b, c), c = c.sibling;
    }
    function Xj(a, b, c) {
      if (kc && "function" === typeof kc.onCommitFiberUnmount)
        try {
          kc.onCommitFiberUnmount(jc, c);
        } catch (h) {
        }
      switch (c.tag) {
        case 5:
          S || Jj(c, b);
        case 6:
          var d = V, e = Vj;
          V = null;
          Wj(a, b, c);
          V = d;
          Vj = e;
          null !== V && (Vj ? (a = V, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : V.removeChild(c.stateNode));
          break;
        case 18:
          null !== V && (Vj ? (a = V, c = c.stateNode, 8 === a.nodeType ? Jf(a.parentNode, c) : 1 === a.nodeType && Jf(a, c), ad(a)) : Jf(V, c.stateNode));
          break;
        case 4:
          d = V;
          e = Vj;
          V = c.stateNode.containerInfo;
          Vj = true;
          Wj(a, b, c);
          V = d;
          Vj = e;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!S && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
            e = d = d.next;
            do {
              var f2 = e, g = f2.destroy;
              f2 = f2.tag;
              void 0 !== g && (0 !== (f2 & 2) ? Kj(c, b, g) : 0 !== (f2 & 4) && Kj(c, b, g));
              e = e.next;
            } while (e !== d);
          }
          Wj(a, b, c);
          break;
        case 1:
          if (!S && (Jj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount))
            try {
              d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
            } catch (h) {
              U(c, b, h);
            }
          Wj(a, b, c);
          break;
        case 21:
          Wj(a, b, c);
          break;
        case 22:
          c.mode & 1 ? (S = (d = S) || null !== c.memoizedState, Wj(a, b, c), S = d) : Wj(a, b, c);
          break;
        default:
          Wj(a, b, c);
      }
    }
    function Yj(a) {
      var b = a.updateQueue;
      if (null !== b) {
        a.updateQueue = null;
        var c = a.stateNode;
        null === c && (c = a.stateNode = new Ij());
        b.forEach(function(b2) {
          var d = Zj.bind(null, a, b2);
          c.has(b2) || (c.add(b2), b2.then(d, d));
        });
      }
    }
    function ak(a, b) {
      var c = b.deletions;
      if (null !== c)
        for (var d = 0; d < c.length; d++) {
          var e = c[d];
          try {
            var f2 = a, g = b, h = g;
            a:
              for (; null !== h; ) {
                switch (h.tag) {
                  case 5:
                    V = h.stateNode;
                    Vj = false;
                    break a;
                  case 3:
                    V = h.stateNode.containerInfo;
                    Vj = true;
                    break a;
                  case 4:
                    V = h.stateNode.containerInfo;
                    Vj = true;
                    break a;
                }
                h = h.return;
              }
            if (null === V)
              throw Error(p(160));
            Xj(f2, g, e);
            V = null;
            Vj = false;
            var k2 = e.alternate;
            null !== k2 && (k2.return = null);
            e.return = null;
          } catch (l2) {
            U(e, b, l2);
          }
        }
      if (b.subtreeFlags & 12854)
        for (b = b.child; null !== b; )
          bk(b, a), b = b.sibling;
    }
    function bk(a, b) {
      var c = a.alternate, d = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ak(b, a);
          ck(a);
          if (d & 4) {
            try {
              Nj(3, a, a.return), Oj(3, a);
            } catch (m2) {
              U(a, a.return, m2);
            }
            try {
              Nj(5, a, a.return);
            } catch (m2) {
              U(a, a.return, m2);
            }
          }
          break;
        case 1:
          ak(b, a);
          ck(a);
          d & 512 && null !== c && Jj(c, c.return);
          break;
        case 5:
          ak(b, a);
          ck(a);
          d & 512 && null !== c && Jj(c, c.return);
          if (a.flags & 32) {
            var e = a.stateNode;
            try {
              nb(e, "");
            } catch (m2) {
              U(a, a.return, m2);
            }
          }
          if (d & 4 && (e = a.stateNode, null != e)) {
            var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h = a.type, k2 = a.updateQueue;
            a.updateQueue = null;
            if (null !== k2)
              try {
                "input" === h && "radio" === f2.type && null != f2.name && Za(e, f2);
                ub(h, g);
                var l2 = ub(h, f2);
                for (g = 0; g < k2.length; g += 2) {
                  var n2 = k2[g], u2 = k2[g + 1];
                  "style" === n2 ? rb(e, u2) : "dangerouslySetInnerHTML" === n2 ? mb(e, u2) : "children" === n2 ? nb(e, u2) : sa(e, n2, u2, l2);
                }
                switch (h) {
                  case "input":
                    $a(e, f2);
                    break;
                  case "textarea":
                    hb(e, f2);
                    break;
                  case "select":
                    var q2 = e._wrapperState.wasMultiple;
                    e._wrapperState.wasMultiple = !!f2.multiple;
                    var y2 = f2.value;
                    null != y2 ? eb(e, !!f2.multiple, y2, false) : q2 !== !!f2.multiple && (null != f2.defaultValue ? eb(
                      e,
                      !!f2.multiple,
                      f2.defaultValue,
                      true
                    ) : eb(e, !!f2.multiple, f2.multiple ? [] : "", false));
                }
                e[Of] = f2;
              } catch (m2) {
                U(a, a.return, m2);
              }
          }
          break;
        case 6:
          ak(b, a);
          ck(a);
          if (d & 4) {
            if (null === a.stateNode)
              throw Error(p(162));
            l2 = a.stateNode;
            n2 = a.memoizedProps;
            try {
              l2.nodeValue = n2;
            } catch (m2) {
              U(a, a.return, m2);
            }
          }
          break;
        case 3:
          ak(b, a);
          ck(a);
          if (d & 4 && null !== c && c.memoizedState.isDehydrated)
            try {
              ad(b.containerInfo);
            } catch (m2) {
              U(a, a.return, m2);
            }
          break;
        case 4:
          ak(b, a);
          ck(a);
          break;
        case 13:
          ak(b, a);
          ck(a);
          l2 = a.child;
          l2.flags & 8192 && null !== l2.memoizedState && (null === l2.alternate || null === l2.alternate.memoizedState) && (dk = B());
          d & 4 && Yj(a);
          break;
        case 22:
          l2 = null !== c && null !== c.memoizedState;
          a.mode & 1 ? (S = (n2 = S) || l2, ak(b, a), S = n2) : ak(b, a);
          ck(a);
          if (d & 8192) {
            n2 = null !== a.memoizedState;
            a:
              for (u2 = null, q2 = a; ; ) {
                if (5 === q2.tag) {
                  if (null === u2) {
                    u2 = q2;
                    try {
                      e = q2.stateNode, n2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = qb("display", g));
                    } catch (m2) {
                      U(a, a.return, m2);
                    }
                  }
                } else if (6 === q2.tag) {
                  if (null === u2)
                    try {
                      q2.stateNode.nodeValue = n2 ? "" : q2.memoizedProps;
                    } catch (m2) {
                      U(a, a.return, m2);
                    }
                } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
                  q2.child.return = q2;
                  q2 = q2.child;
                  continue;
                }
                if (q2 === a)
                  break a;
                for (; null === q2.sibling; ) {
                  if (null === q2.return || q2.return === a)
                    break a;
                  u2 === q2 && (u2 = null);
                  q2 = q2.return;
                }
                u2 === q2 && (u2 = null);
                q2.sibling.return = q2.return;
                q2 = q2.sibling;
              }
            if (n2 && !l2 && 0 !== (a.mode & 1))
              for (T = a, a = a.child; null !== a; ) {
                for (l2 = T = a; null !== T; ) {
                  n2 = T;
                  u2 = n2.child;
                  switch (n2.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Nj(
                        4,
                        n2,
                        n2.return
                      );
                      break;
                    case 1:
                      Jj(n2, n2.return);
                      f2 = n2.stateNode;
                      if ("function" === typeof f2.componentWillUnmount) {
                        q2 = n2;
                        y2 = n2.return;
                        try {
                          e = q2, f2.props = e.memoizedProps, f2.state = e.memoizedState, f2.componentWillUnmount();
                        } catch (m2) {
                          U(q2, y2, m2);
                        }
                      }
                      break;
                    case 5:
                      Jj(n2, n2.return);
                      break;
                    case 22:
                      if (null !== n2.memoizedState) {
                        ek(l2);
                        continue;
                      }
                  }
                  null !== u2 ? (u2.return = n2, T = u2) : ek(l2);
                }
                a = a.sibling;
              }
          }
          break;
        case 19:
          ak(b, a);
          ck(a);
          d & 4 && Yj(a);
          break;
        case 21:
          break;
        default:
          ak(b, a), ck(a);
      }
    }
    function ck(a) {
      var b = a.flags;
      if (b & 2) {
        try {
          a: {
            for (var c = a.return; null !== c; ) {
              if (Rj(c)) {
                var d = c;
                break a;
              }
              c = c.return;
            }
            throw Error(p(160));
          }
          switch (d.tag) {
            case 5:
              var e = d.stateNode;
              d.flags & 32 && (nb(e, ""), d.flags &= -33);
              var f2 = Sj(a);
              Uj(a, f2, e);
              break;
            case 3:
            case 4:
              var g = d.stateNode.containerInfo, h = Sj(a);
              Tj(a, h, g);
              break;
            default:
              throw Error(p(161));
          }
        } catch (k2) {
          U(a, a.return, k2);
        }
        a.flags &= -3;
      }
      b & 4096 && (a.flags &= -4097);
    }
    function fk(a, b, c) {
      T = a;
      gk(a);
    }
    function gk(a, b, c) {
      for (var d = 0 !== (a.mode & 1); null !== T; ) {
        var e = T, f2 = e.child;
        if (22 === e.tag && d) {
          var g = null !== e.memoizedState || Hj;
          if (!g) {
            var h = e.alternate, k2 = null !== h && null !== h.memoizedState || S;
            h = Hj;
            var l2 = S;
            Hj = g;
            if ((S = k2) && !l2)
              for (T = e; null !== T; )
                g = T, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? hk(e) : null !== k2 ? (k2.return = g, T = k2) : hk(e);
            for (; null !== f2; )
              T = f2, gk(f2), f2 = f2.sibling;
            T = e;
            Hj = h;
            S = l2;
          }
          ik(a);
        } else
          0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, T = f2) : ik(a);
      }
    }
    function ik(a) {
      for (; null !== T; ) {
        var b = T;
        if (0 !== (b.flags & 8772)) {
          var c = b.alternate;
          try {
            if (0 !== (b.flags & 8772))
              switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  S || Oj(5, b);
                  break;
                case 1:
                  var d = b.stateNode;
                  if (b.flags & 4 && !S)
                    if (null === c)
                      d.componentDidMount();
                    else {
                      var e = b.elementType === b.type ? c.memoizedProps : kg(b.type, c.memoizedProps);
                      d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                    }
                  var f2 = b.updateQueue;
                  null !== f2 && Gg(b, f2, d);
                  break;
                case 3:
                  var g = b.updateQueue;
                  if (null !== g) {
                    c = null;
                    if (null !== b.child)
                      switch (b.child.tag) {
                        case 5:
                          c = b.child.stateNode;
                          break;
                        case 1:
                          c = b.child.stateNode;
                      }
                    Gg(b, g, c);
                  }
                  break;
                case 5:
                  var h = b.stateNode;
                  if (null === c && b.flags & 4) {
                    c = h;
                    var k2 = b.memoizedProps;
                    switch (b.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k2.autoFocus && c.focus();
                        break;
                      case "img":
                        k2.src && (c.src = k2.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (null === b.memoizedState) {
                    var l2 = b.alternate;
                    if (null !== l2) {
                      var n2 = l2.memoizedState;
                      if (null !== n2) {
                        var u2 = n2.dehydrated;
                        null !== u2 && ad(u2);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                  break;
                default:
                  throw Error(p(163));
              }
            S || b.flags & 512 && Pj(b);
          } catch (q2) {
            U(b, b.return, q2);
          }
        }
        if (b === a) {
          T = null;
          break;
        }
        c = b.sibling;
        if (null !== c) {
          c.return = b.return;
          T = c;
          break;
        }
        T = b.return;
      }
    }
    function ek(a) {
      for (; null !== T; ) {
        var b = T;
        if (b === a) {
          T = null;
          break;
        }
        var c = b.sibling;
        if (null !== c) {
          c.return = b.return;
          T = c;
          break;
        }
        T = b.return;
      }
    }
    function hk(a) {
      for (; null !== T; ) {
        var b = T;
        try {
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              var c = b.return;
              try {
                Oj(4, b);
              } catch (k2) {
                U(b, c, k2);
              }
              break;
            case 1:
              var d = b.stateNode;
              if ("function" === typeof d.componentDidMount) {
                var e = b.return;
                try {
                  d.componentDidMount();
                } catch (k2) {
                  U(b, e, k2);
                }
              }
              var f2 = b.return;
              try {
                Pj(b);
              } catch (k2) {
                U(b, f2, k2);
              }
              break;
            case 5:
              var g = b.return;
              try {
                Pj(b);
              } catch (k2) {
                U(b, g, k2);
              }
          }
        } catch (k2) {
          U(b, b.return, k2);
        }
        if (b === a) {
          T = null;
          break;
        }
        var h = b.sibling;
        if (null !== h) {
          h.return = b.return;
          T = h;
          break;
        }
        T = b.return;
      }
    }
    var jk = Math.ceil, kk = ta.ReactCurrentDispatcher, lk = ta.ReactCurrentOwner, mk = ta.ReactCurrentBatchConfig, W = 0, P = null, X = null, Y = 0, cj = 0, mj = Tf(0), R = 0, nk = null, Fg = 0, ok = 0, pk = 0, qk = null, rk = null, dk = 0, aj = Infinity, sk = null, Li = false, Mi = null, Oi = null, tk = false, uk = null, vk = 0, wk = 0, xk = null, yk = -1, zk = 0;
    function Jg() {
      return 0 !== (W & 6) ? B() : -1 !== yk ? yk : yk = B();
    }
    function Kg(a) {
      if (0 === (a.mode & 1))
        return 1;
      if (0 !== (W & 2) && 0 !== Y)
        return Y & -Y;
      if (null !== jg.transition)
        return 0 === zk && (zk = xc()), zk;
      a = C;
      if (0 !== a)
        return a;
      a = window.event;
      a = void 0 === a ? 16 : id(a.type);
      return a;
    }
    function Lg(a, b, c) {
      if (50 < wk)
        throw wk = 0, xk = null, Error(p(185));
      var d = Ak(a, b);
      if (null === d)
        return null;
      zc(d, b, c);
      if (0 === (W & 2) || d !== P)
        d === P && (0 === (W & 2) && (ok |= b), 4 === R && Bk(d, Y)), Ck(d, c), 1 === b && 0 === W && 0 === (a.mode & 1) && (aj = B() + 500, eg && ig());
      return d;
    }
    function Ak(a, b) {
      a.lanes |= b;
      var c = a.alternate;
      null !== c && (c.lanes |= b);
      c = a;
      for (a = a.return; null !== a; )
        a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
      return 3 === c.tag ? c.stateNode : null;
    }
    function Bg(a) {
      return (null !== P || null !== vg) && 0 !== (a.mode & 1) && 0 === (W & 2);
    }
    function Ck(a, b) {
      var c = a.callbackNode;
      vc(a, b);
      var d = tc(a, a === P ? Y : 0);
      if (0 === d)
        null !== c && ac(c), a.callbackNode = null, a.callbackPriority = 0;
      else if (b = d & -d, a.callbackPriority !== b) {
        null != c && ac(c);
        if (1 === b)
          0 === a.tag ? hg(Dk.bind(null, a)) : gg(Dk.bind(null, a)), If(function() {
            0 === W && ig();
          }), c = null;
        else {
          switch (Cc(d)) {
            case 1:
              c = ec;
              break;
            case 4:
              c = fc;
              break;
            case 16:
              c = gc;
              break;
            case 536870912:
              c = ic;
              break;
            default:
              c = gc;
          }
          c = Ek(c, Fk.bind(null, a));
        }
        a.callbackPriority = b;
        a.callbackNode = c;
      }
    }
    function Fk(a, b) {
      yk = -1;
      zk = 0;
      if (0 !== (W & 6))
        throw Error(p(327));
      var c = a.callbackNode;
      if (Gk() && a.callbackNode !== c)
        return null;
      var d = tc(a, a === P ? Y : 0);
      if (0 === d)
        return null;
      if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b)
        b = Hk(a, d);
      else {
        b = d;
        var e = W;
        W |= 2;
        var f2 = Ik();
        if (P !== a || Y !== b)
          sk = null, aj = B() + 500, Jk(a, b);
        do
          try {
            Kk();
            break;
          } catch (h) {
            Lk(a, h);
          }
        while (1);
        pg();
        kk.current = f2;
        W = e;
        null !== X ? b = 0 : (P = null, Y = 0, b = R);
      }
      if (0 !== b) {
        2 === b && (e = wc(a), 0 !== e && (d = e, b = Mk(a, e)));
        if (1 === b)
          throw c = nk, Jk(a, 0), Bk(a, d), Ck(a, B()), c;
        if (6 === b)
          Bk(a, d);
        else {
          e = a.current.alternate;
          if (0 === (d & 30) && !Nk(e) && (b = Hk(a, d), 2 === b && (f2 = wc(a), 0 !== f2 && (d = f2, b = Mk(a, f2))), 1 === b))
            throw c = nk, Jk(a, 0), Bk(a, d), Ck(a, B()), c;
          a.finishedWork = e;
          a.finishedLanes = d;
          switch (b) {
            case 0:
            case 1:
              throw Error(p(345));
            case 2:
              Ok(a, rk, sk);
              break;
            case 3:
              Bk(a, d);
              if ((d & 130023424) === d && (b = dk + 500 - B(), 10 < b)) {
                if (0 !== tc(a, 0))
                  break;
                e = a.suspendedLanes;
                if ((e & d) !== d) {
                  Jg();
                  a.pingedLanes |= a.suspendedLanes & e;
                  break;
                }
                a.timeoutHandle = Ef(Ok.bind(null, a, rk, sk), b);
                break;
              }
              Ok(a, rk, sk);
              break;
            case 4:
              Bk(a, d);
              if ((d & 4194240) === d)
                break;
              b = a.eventTimes;
              for (e = -1; 0 < d; ) {
                var g = 31 - nc(d);
                f2 = 1 << g;
                g = b[g];
                g > e && (e = g);
                d &= ~f2;
              }
              d = e;
              d = B() - d;
              d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * jk(d / 1960)) - d;
              if (10 < d) {
                a.timeoutHandle = Ef(Ok.bind(null, a, rk, sk), d);
                break;
              }
              Ok(a, rk, sk);
              break;
            case 5:
              Ok(a, rk, sk);
              break;
            default:
              throw Error(p(329));
          }
        }
      }
      Ck(a, B());
      return a.callbackNode === c ? Fk.bind(null, a) : null;
    }
    function Mk(a, b) {
      var c = qk;
      a.current.memoizedState.isDehydrated && (Jk(a, b).flags |= 256);
      a = Hk(a, b);
      2 !== a && (b = rk, rk = c, null !== b && Zi(b));
      return a;
    }
    function Zi(a) {
      null === rk ? rk = a : rk.push.apply(rk, a);
    }
    function Nk(a) {
      for (var b = a; ; ) {
        if (b.flags & 16384) {
          var c = b.updateQueue;
          if (null !== c && (c = c.stores, null !== c))
            for (var d = 0; d < c.length; d++) {
              var e = c[d], f2 = e.getSnapshot;
              e = e.value;
              try {
                if (!Ge(f2(), e))
                  return false;
              } catch (g) {
                return false;
              }
            }
        }
        c = b.child;
        if (b.subtreeFlags & 16384 && null !== c)
          c.return = b, b = c;
        else {
          if (b === a)
            break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a)
              return true;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
      }
      return true;
    }
    function Bk(a, b) {
      b &= ~pk;
      b &= ~ok;
      a.suspendedLanes |= b;
      a.pingedLanes &= ~b;
      for (a = a.expirationTimes; 0 < b; ) {
        var c = 31 - nc(b), d = 1 << c;
        a[c] = -1;
        b &= ~d;
      }
    }
    function Dk(a) {
      if (0 !== (W & 6))
        throw Error(p(327));
      Gk();
      var b = tc(a, 0);
      if (0 === (b & 1))
        return Ck(a, B()), null;
      var c = Hk(a, b);
      if (0 !== a.tag && 2 === c) {
        var d = wc(a);
        0 !== d && (b = d, c = Mk(a, d));
      }
      if (1 === c)
        throw c = nk, Jk(a, 0), Bk(a, b), Ck(a, B()), c;
      if (6 === c)
        throw Error(p(345));
      a.finishedWork = a.current.alternate;
      a.finishedLanes = b;
      Ok(a, rk, sk);
      Ck(a, B());
      return null;
    }
    function Pk(a, b) {
      var c = W;
      W |= 1;
      try {
        return a(b);
      } finally {
        W = c, 0 === W && (aj = B() + 500, eg && ig());
      }
    }
    function Qk(a) {
      null !== uk && 0 === uk.tag && 0 === (W & 6) && Gk();
      var b = W;
      W |= 1;
      var c = mk.transition, d = C;
      try {
        if (mk.transition = null, C = 1, a)
          return a();
      } finally {
        C = d, mk.transition = c, W = b, 0 === (W & 6) && ig();
      }
    }
    function bj() {
      cj = mj.current;
      E(mj);
    }
    function Jk(a, b) {
      a.finishedWork = null;
      a.finishedLanes = 0;
      var c = a.timeoutHandle;
      -1 !== c && (a.timeoutHandle = -1, Ff(c));
      if (null !== X)
        for (c = X.return; null !== c; ) {
          var d = c;
          ch(d);
          switch (d.tag) {
            case 1:
              d = d.type.childContextTypes;
              null !== d && void 0 !== d && Zf();
              break;
            case 3:
              Gh();
              E(Vf);
              E(H);
              Lh();
              break;
            case 5:
              Ih(d);
              break;
            case 4:
              Gh();
              break;
            case 13:
              E(K);
              break;
            case 19:
              E(K);
              break;
            case 10:
              qg(d.type._context);
              break;
            case 22:
            case 23:
              bj();
          }
          c = c.return;
        }
      P = a;
      X = a = th(a.current, null);
      Y = cj = b;
      R = 0;
      nk = null;
      pk = ok = Fg = 0;
      rk = qk = null;
      if (null !== vg) {
        for (b = 0; b < vg.length; b++)
          if (c = vg[b], d = c.interleaved, null !== d) {
            c.interleaved = null;
            var e = d.next, f2 = c.pending;
            if (null !== f2) {
              var g = f2.next;
              f2.next = e;
              d.next = g;
            }
            c.pending = d;
          }
        vg = null;
      }
      return a;
    }
    function Lk(a, b) {
      do {
        var c = X;
        try {
          pg();
          Mh.current = Yh;
          if (Ph) {
            for (var d = L.memoizedState; null !== d; ) {
              var e = d.queue;
              null !== e && (e.pending = null);
              d = d.next;
            }
            Ph = false;
          }
          Oh = 0;
          N = M = L = null;
          Qh = false;
          Rh = 0;
          lk.current = null;
          if (null === c || null === c.return) {
            R = 1;
            nk = b;
            X = null;
            break;
          }
          a: {
            var f2 = a, g = c.return, h = c, k2 = b;
            b = Y;
            h.flags |= 32768;
            if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
              var l2 = k2, n2 = h, u2 = n2.tag;
              if (0 === (n2.mode & 1) && (0 === u2 || 11 === u2 || 15 === u2)) {
                var q2 = n2.alternate;
                q2 ? (n2.updateQueue = q2.updateQueue, n2.memoizedState = q2.memoizedState, n2.lanes = q2.lanes) : (n2.updateQueue = null, n2.memoizedState = null);
              }
              var y2 = Ri(g);
              if (null !== y2) {
                y2.flags &= -257;
                Si(y2, g, h, f2, b);
                y2.mode & 1 && Pi(f2, l2, b);
                b = y2;
                k2 = l2;
                var m2 = b.updateQueue;
                if (null === m2) {
                  var w2 = /* @__PURE__ */ new Set();
                  w2.add(k2);
                  b.updateQueue = w2;
                } else
                  m2.add(k2);
                break a;
              } else {
                if (0 === (b & 1)) {
                  Pi(f2, l2, b);
                  $i();
                  break a;
                }
                k2 = Error(p(426));
              }
            } else if (I && h.mode & 1) {
              var J2 = Ri(g);
              if (null !== J2) {
                0 === (J2.flags & 65536) && (J2.flags |= 256);
                Si(J2, g, h, f2, b);
                oh(k2);
                break a;
              }
            }
            f2 = k2;
            4 !== R && (R = 2);
            null === qk ? qk = [f2] : qk.push(f2);
            k2 = Hi(k2, h);
            h = g;
            do {
              switch (h.tag) {
                case 3:
                  h.flags |= 65536;
                  b &= -b;
                  h.lanes |= b;
                  var v2 = Ki(h, k2, b);
                  Dg(h, v2);
                  break a;
                case 1:
                  f2 = k2;
                  var x2 = h.type, r2 = h.stateNode;
                  if (0 === (h.flags & 128) && ("function" === typeof x2.getDerivedStateFromError || null !== r2 && "function" === typeof r2.componentDidCatch && (null === Oi || !Oi.has(r2)))) {
                    h.flags |= 65536;
                    b &= -b;
                    h.lanes |= b;
                    var F2 = Ni(h, f2, b);
                    Dg(h, F2);
                    break a;
                  }
              }
              h = h.return;
            } while (null !== h);
          }
          Rk(c);
        } catch (Z) {
          b = Z;
          X === c && null !== c && (X = c = c.return);
          continue;
        }
        break;
      } while (1);
    }
    function Ik() {
      var a = kk.current;
      kk.current = Yh;
      return null === a ? Yh : a;
    }
    function $i() {
      if (0 === R || 3 === R || 2 === R)
        R = 4;
      null === P || 0 === (Fg & 268435455) && 0 === (ok & 268435455) || Bk(P, Y);
    }
    function Hk(a, b) {
      var c = W;
      W |= 2;
      var d = Ik();
      if (P !== a || Y !== b)
        sk = null, Jk(a, b);
      do
        try {
          Sk();
          break;
        } catch (e) {
          Lk(a, e);
        }
      while (1);
      pg();
      W = c;
      kk.current = d;
      if (null !== X)
        throw Error(p(261));
      P = null;
      Y = 0;
      return R;
    }
    function Sk() {
      for (; null !== X; )
        Tk(X);
    }
    function Kk() {
      for (; null !== X && !bc(); )
        Tk(X);
    }
    function Tk(a) {
      var b = Uk(a.alternate, a, cj);
      a.memoizedProps = a.pendingProps;
      null === b ? Rk(a) : X = b;
      lk.current = null;
    }
    function Rk(a) {
      var b = a;
      do {
        var c = b.alternate;
        a = b.return;
        if (0 === (b.flags & 32768)) {
          if (c = Yi(c, b, cj), null !== c) {
            X = c;
            return;
          }
        } else {
          c = Gj(c, b);
          if (null !== c) {
            c.flags &= 32767;
            X = c;
            return;
          }
          if (null !== a)
            a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
          else {
            R = 6;
            X = null;
            return;
          }
        }
        b = b.sibling;
        if (null !== b) {
          X = b;
          return;
        }
        X = b = a;
      } while (null !== b);
      0 === R && (R = 5);
    }
    function Ok(a, b, c) {
      var d = C, e = mk.transition;
      try {
        mk.transition = null, C = 1, Vk(a, b, c, d);
      } finally {
        mk.transition = e, C = d;
      }
      return null;
    }
    function Vk(a, b, c, d) {
      do
        Gk();
      while (null !== uk);
      if (0 !== (W & 6))
        throw Error(p(327));
      c = a.finishedWork;
      var e = a.finishedLanes;
      if (null === c)
        return null;
      a.finishedWork = null;
      a.finishedLanes = 0;
      if (c === a.current)
        throw Error(p(177));
      a.callbackNode = null;
      a.callbackPriority = 0;
      var f2 = c.lanes | c.childLanes;
      Ac(a, f2);
      a === P && (X = P = null, Y = 0);
      0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || tk || (tk = true, Ek(gc, function() {
        Gk();
        return null;
      }));
      f2 = 0 !== (c.flags & 15990);
      if (0 !== (c.subtreeFlags & 15990) || f2) {
        f2 = mk.transition;
        mk.transition = null;
        var g = C;
        C = 1;
        var h = W;
        W |= 4;
        lk.current = null;
        Mj(a, c);
        bk(c, a);
        Ne(Cf);
        cd = !!Bf;
        Cf = Bf = null;
        a.current = c;
        fk(c);
        cc();
        W = h;
        C = g;
        mk.transition = f2;
      } else
        a.current = c;
      tk && (tk = false, uk = a, vk = e);
      f2 = a.pendingLanes;
      0 === f2 && (Oi = null);
      lc(c.stateNode);
      Ck(a, B());
      if (null !== b)
        for (d = a.onRecoverableError, c = 0; c < b.length; c++)
          d(b[c]);
      if (Li)
        throw Li = false, a = Mi, Mi = null, a;
      0 !== (vk & 1) && 0 !== a.tag && Gk();
      f2 = a.pendingLanes;
      0 !== (f2 & 1) ? a === xk ? wk++ : (wk = 0, xk = a) : wk = 0;
      ig();
      return null;
    }
    function Gk() {
      if (null !== uk) {
        var a = Cc(vk), b = mk.transition, c = C;
        try {
          mk.transition = null;
          C = 16 > a ? 16 : a;
          if (null === uk)
            var d = false;
          else {
            a = uk;
            uk = null;
            vk = 0;
            if (0 !== (W & 6))
              throw Error(p(331));
            var e = W;
            W |= 4;
            for (T = a.current; null !== T; ) {
              var f2 = T, g = f2.child;
              if (0 !== (T.flags & 16)) {
                var h = f2.deletions;
                if (null !== h) {
                  for (var k2 = 0; k2 < h.length; k2++) {
                    var l2 = h[k2];
                    for (T = l2; null !== T; ) {
                      var n2 = T;
                      switch (n2.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Nj(8, n2, f2);
                      }
                      var u2 = n2.child;
                      if (null !== u2)
                        u2.return = n2, T = u2;
                      else
                        for (; null !== T; ) {
                          n2 = T;
                          var q2 = n2.sibling, y2 = n2.return;
                          Qj(n2);
                          if (n2 === l2) {
                            T = null;
                            break;
                          }
                          if (null !== q2) {
                            q2.return = y2;
                            T = q2;
                            break;
                          }
                          T = y2;
                        }
                    }
                  }
                  var m2 = f2.alternate;
                  if (null !== m2) {
                    var w2 = m2.child;
                    if (null !== w2) {
                      m2.child = null;
                      do {
                        var J2 = w2.sibling;
                        w2.sibling = null;
                        w2 = J2;
                      } while (null !== w2);
                    }
                  }
                  T = f2;
                }
              }
              if (0 !== (f2.subtreeFlags & 2064) && null !== g)
                g.return = f2, T = g;
              else
                b:
                  for (; null !== T; ) {
                    f2 = T;
                    if (0 !== (f2.flags & 2048))
                      switch (f2.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Nj(9, f2, f2.return);
                      }
                    var v2 = f2.sibling;
                    if (null !== v2) {
                      v2.return = f2.return;
                      T = v2;
                      break b;
                    }
                    T = f2.return;
                  }
            }
            var x2 = a.current;
            for (T = x2; null !== T; ) {
              g = T;
              var r2 = g.child;
              if (0 !== (g.subtreeFlags & 2064) && null !== r2)
                r2.return = g, T = r2;
              else
                b:
                  for (g = x2; null !== T; ) {
                    h = T;
                    if (0 !== (h.flags & 2048))
                      try {
                        switch (h.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Oj(9, h);
                        }
                      } catch (Z) {
                        U(h, h.return, Z);
                      }
                    if (h === g) {
                      T = null;
                      break b;
                    }
                    var F2 = h.sibling;
                    if (null !== F2) {
                      F2.return = h.return;
                      T = F2;
                      break b;
                    }
                    T = h.return;
                  }
            }
            W = e;
            ig();
            if (kc && "function" === typeof kc.onPostCommitFiberRoot)
              try {
                kc.onPostCommitFiberRoot(jc, a);
              } catch (Z) {
              }
            d = true;
          }
          return d;
        } finally {
          C = c, mk.transition = b;
        }
      }
      return false;
    }
    function Wk(a, b, c) {
      b = Hi(c, b);
      b = Ki(a, b, 1);
      Ag(a, b);
      b = Jg();
      a = Ak(a, 1);
      null !== a && (zc(a, 1, b), Ck(a, b));
    }
    function U(a, b, c) {
      if (3 === a.tag)
        Wk(a, a, c);
      else
        for (; null !== b; ) {
          if (3 === b.tag) {
            Wk(b, a, c);
            break;
          } else if (1 === b.tag) {
            var d = b.stateNode;
            if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Oi || !Oi.has(d))) {
              a = Hi(c, a);
              a = Ni(b, a, 1);
              Ag(b, a);
              a = Jg();
              b = Ak(b, 1);
              null !== b && (zc(b, 1, a), Ck(b, a));
              break;
            }
          }
          b = b.return;
        }
    }
    function Qi(a, b, c) {
      var d = a.pingCache;
      null !== d && d.delete(b);
      b = Jg();
      a.pingedLanes |= a.suspendedLanes & c;
      P === a && (Y & c) === c && (4 === R || 3 === R && (Y & 130023424) === Y && 500 > B() - dk ? Jk(a, 0) : pk |= c);
      Ck(a, b);
    }
    function Xk(a, b) {
      0 === b && (0 === (a.mode & 1) ? b = 1 : (b = rc, rc <<= 1, 0 === (rc & 130023424) && (rc = 4194304)));
      var c = Jg();
      a = Ak(a, b);
      null !== a && (zc(a, b, c), Ck(a, c));
    }
    function zj(a) {
      var b = a.memoizedState, c = 0;
      null !== b && (c = b.retryLane);
      Xk(a, c);
    }
    function Zj(a, b) {
      var c = 0;
      switch (a.tag) {
        case 13:
          var d = a.stateNode;
          var e = a.memoizedState;
          null !== e && (c = e.retryLane);
          break;
        case 19:
          d = a.stateNode;
          break;
        default:
          throw Error(p(314));
      }
      null !== d && d.delete(b);
      Xk(a, c);
    }
    var Uk;
    Uk = function(a, b, c) {
      if (null !== a)
        if (a.memoizedProps !== b.pendingProps || Vf.current)
          tg = true;
        else {
          if (0 === (a.lanes & c) && 0 === (b.flags & 128))
            return tg = false, Fj(a, b, c);
          tg = 0 !== (a.flags & 131072) ? true : false;
        }
      else
        tg = false, I && 0 !== (b.flags & 1048576) && ah(b, Ug, b.index);
      b.lanes = 0;
      switch (b.tag) {
        case 2:
          var d = b.type;
          null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
          a = b.pendingProps;
          var e = Xf(b, H.current);
          sg(b, c);
          e = Uh(null, b, d, a, e, c);
          var f2 = Zh();
          b.flags |= 1;
          "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Yf(d) ? (f2 = true, bg(b)) : f2 = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, xg(b), e.updater = Mg, b.stateNode = e, e._reactInternals = b, Qg(b, d, a, c), b = pj(null, b, d, true, f2, c)) : (b.tag = 0, I && f2 && bh(b), ej(null, b, e, c), b = b.child);
          return b;
        case 16:
          d = b.elementType;
          a: {
            null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
            a = b.pendingProps;
            e = d._init;
            d = e(d._payload);
            b.type = d;
            e = b.tag = Yk(d);
            a = kg(d, a);
            switch (e) {
              case 0:
                b = kj(null, b, d, a, c);
                break a;
              case 1:
                b = oj(
                  null,
                  b,
                  d,
                  a,
                  c
                );
                break a;
              case 11:
                b = fj(null, b, d, a, c);
                break a;
              case 14:
                b = hj(null, b, d, kg(d.type, a), c);
                break a;
            }
            throw Error(p(306, d, ""));
          }
          return b;
        case 0:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : kg(d, e), kj(a, b, d, e, c);
        case 1:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : kg(d, e), oj(a, b, d, e, c);
        case 3:
          a: {
            qj(b);
            if (null === a)
              throw Error(p(387));
            d = b.pendingProps;
            f2 = b.memoizedState;
            e = f2.element;
            yg(a, b);
            Eg(b, d, null, c);
            var g = b.memoizedState;
            d = g.element;
            if (f2.isDehydrated)
              if (f2 = {
                element: d,
                isDehydrated: false,
                cache: g.cache,
                pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
                transitions: g.transitions
              }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
                e = Error(p(423));
                b = rj(a, b, d, c, e);
                break a;
              } else if (d !== e) {
                e = Error(p(424));
                b = rj(a, b, d, c, e);
                break a;
              } else
                for (eh = Kf(b.stateNode.containerInfo.firstChild), dh = b, I = true, fh = null, c = zh(b, null, d, c), b.child = c; c; )
                  c.flags = c.flags & -3 | 4096, c = c.sibling;
            else {
              nh();
              if (d === e) {
                b = gj(a, b, c);
                break a;
              }
              ej(a, b, d, c);
            }
            b = b.child;
          }
          return b;
        case 5:
          return Hh(b), null === a && kh(b), d = b.type, e = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e.children, Df(d, e) ? g = null : null !== f2 && Df(d, f2) && (b.flags |= 32), nj(a, b), ej(a, b, g, c), b.child;
        case 6:
          return null === a && kh(b), null;
        case 13:
          return vj(a, b, c);
        case 4:
          return Fh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = yh(b, null, d, c) : ej(a, b, d, c), b.child;
        case 11:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : kg(d, e), fj(a, b, d, e, c);
        case 7:
          return ej(a, b, b.pendingProps, c), b.child;
        case 8:
          return ej(a, b, b.pendingProps.children, c), b.child;
        case 12:
          return ej(
            a,
            b,
            b.pendingProps.children,
            c
          ), b.child;
        case 10:
          a: {
            d = b.type._context;
            e = b.pendingProps;
            f2 = b.memoizedProps;
            g = e.value;
            G(lg, d._currentValue);
            d._currentValue = g;
            if (null !== f2)
              if (Ge(f2.value, g)) {
                if (f2.children === e.children && !Vf.current) {
                  b = gj(a, b, c);
                  break a;
                }
              } else
                for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
                  var h = f2.dependencies;
                  if (null !== h) {
                    g = f2.child;
                    for (var k2 = h.firstContext; null !== k2; ) {
                      if (k2.context === d) {
                        if (1 === f2.tag) {
                          k2 = zg(-1, c & -c);
                          k2.tag = 2;
                          var l2 = f2.updateQueue;
                          if (null !== l2) {
                            l2 = l2.shared;
                            var n2 = l2.pending;
                            null === n2 ? k2.next = k2 : (k2.next = n2.next, n2.next = k2);
                            l2.pending = k2;
                          }
                        }
                        f2.lanes |= c;
                        k2 = f2.alternate;
                        null !== k2 && (k2.lanes |= c);
                        rg(f2.return, c, b);
                        h.lanes |= c;
                        break;
                      }
                      k2 = k2.next;
                    }
                  } else if (10 === f2.tag)
                    g = f2.type === b.type ? null : f2.child;
                  else if (18 === f2.tag) {
                    g = f2.return;
                    if (null === g)
                      throw Error(p(341));
                    g.lanes |= c;
                    h = g.alternate;
                    null !== h && (h.lanes |= c);
                    rg(g, c, b);
                    g = f2.sibling;
                  } else
                    g = f2.child;
                  if (null !== g)
                    g.return = f2;
                  else
                    for (g = f2; null !== g; ) {
                      if (g === b) {
                        g = null;
                        break;
                      }
                      f2 = g.sibling;
                      if (null !== f2) {
                        f2.return = g.return;
                        g = f2;
                        break;
                      }
                      g = g.return;
                    }
                  f2 = g;
                }
            ej(a, b, e.children, c);
            b = b.child;
          }
          return b;
        case 9:
          return e = b.type, d = b.pendingProps.children, sg(b, c), e = ug(e), d = d(e), b.flags |= 1, ej(a, b, d, c), b.child;
        case 14:
          return d = b.type, e = kg(d, b.pendingProps), e = kg(d.type, e), hj(a, b, d, e, c);
        case 15:
          return jj(a, b, b.type, b.pendingProps, c);
        case 17:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : kg(d, e), null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Yf(d) ? (a = true, bg(b)) : a = false, sg(b, c), Og(b, d, e), Qg(b, d, e, c), pj(null, b, d, true, a, c);
        case 19:
          return Ej(a, b, c);
        case 22:
          return lj(a, b, c);
      }
      throw Error(p(
        156,
        b.tag
      ));
    };
    function Ek(a, b) {
      return $b(a, b);
    }
    function Zk(a, b, c, d) {
      this.tag = a;
      this.key = c;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.ref = null;
      this.pendingProps = b;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = d;
      this.subtreeFlags = this.flags = 0;
      this.deletions = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
    }
    function hh(a, b, c, d) {
      return new Zk(a, b, c, d);
    }
    function ij(a) {
      a = a.prototype;
      return !(!a || !a.isReactComponent);
    }
    function Yk(a) {
      if ("function" === typeof a)
        return ij(a) ? 1 : 0;
      if (void 0 !== a && null !== a) {
        a = a.$$typeof;
        if (a === Ca)
          return 11;
        if (a === Fa)
          return 14;
      }
      return 2;
    }
    function th(a, b) {
      var c = a.alternate;
      null === c ? (c = hh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
      c.flags = a.flags & 14680064;
      c.childLanes = a.childLanes;
      c.lanes = a.lanes;
      c.child = a.child;
      c.memoizedProps = a.memoizedProps;
      c.memoizedState = a.memoizedState;
      c.updateQueue = a.updateQueue;
      b = a.dependencies;
      c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
      c.sibling = a.sibling;
      c.index = a.index;
      c.ref = a.ref;
      return c;
    }
    function vh(a, b, c, d, e, f2) {
      var g = 2;
      d = a;
      if ("function" === typeof a)
        ij(a) && (g = 1);
      else if ("string" === typeof a)
        g = 5;
      else
        a:
          switch (a) {
            case wa:
              return xh(c.children, e, f2, b);
            case xa:
              g = 8;
              e |= 8;
              break;
            case za:
              return a = hh(12, c, b, e | 2), a.elementType = za, a.lanes = f2, a;
            case Da:
              return a = hh(13, c, b, e), a.elementType = Da, a.lanes = f2, a;
            case Ea:
              return a = hh(19, c, b, e), a.elementType = Ea, a.lanes = f2, a;
            case Ha:
              return wj(c, e, f2, b);
            default:
              if ("object" === typeof a && null !== a)
                switch (a.$$typeof) {
                  case Aa:
                    g = 10;
                    break a;
                  case Ba:
                    g = 9;
                    break a;
                  case Ca:
                    g = 11;
                    break a;
                  case Fa:
                    g = 14;
                    break a;
                  case Ga:
                    g = 16;
                    d = null;
                    break a;
                }
              throw Error(p(130, null == a ? a : typeof a, ""));
          }
      b = hh(g, c, b, e);
      b.elementType = a;
      b.type = d;
      b.lanes = f2;
      return b;
    }
    function xh(a, b, c, d) {
      a = hh(7, a, d, b);
      a.lanes = c;
      return a;
    }
    function wj(a, b, c, d) {
      a = hh(22, a, d, b);
      a.elementType = Ha;
      a.lanes = c;
      a.stateNode = {};
      return a;
    }
    function uh(a, b, c) {
      a = hh(6, a, null, b);
      a.lanes = c;
      return a;
    }
    function wh(a, b, c) {
      b = hh(4, null !== a.children ? a.children : [], a.key, b);
      b.lanes = c;
      b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
      return b;
    }
    function $k(a, b, c, d, e) {
      this.tag = b;
      this.containerInfo = a;
      this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = -1;
      this.callbackNode = this.pendingContext = this.context = null;
      this.callbackPriority = 0;
      this.eventTimes = yc(0);
      this.expirationTimes = yc(-1);
      this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = yc(0);
      this.identifierPrefix = d;
      this.onRecoverableError = e;
      this.mutableSourceEagerHydrationData = null;
    }
    function al(a, b, c, d, e, f2, g, h, k2) {
      a = new $k(a, b, c, h, k2);
      1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
      f2 = hh(3, null, null, b);
      a.current = f2;
      f2.stateNode = a;
      f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
      xg(f2);
      return a;
    }
    function bl(a, b, c) {
      var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return { $$typeof: va, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
    }
    function cl(a) {
      if (!a)
        return Uf;
      a = a._reactInternals;
      a: {
        if (Ub(a) !== a || 1 !== a.tag)
          throw Error(p(170));
        var b = a;
        do {
          switch (b.tag) {
            case 3:
              b = b.stateNode.context;
              break a;
            case 1:
              if (Yf(b.type)) {
                b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                break a;
              }
          }
          b = b.return;
        } while (null !== b);
        throw Error(p(171));
      }
      if (1 === a.tag) {
        var c = a.type;
        if (Yf(c))
          return ag(a, c, b);
      }
      return b;
    }
    function dl(a, b, c, d, e, f2, g, h, k2) {
      a = al(c, d, true, a, e, f2, g, h, k2);
      a.context = cl(null);
      c = a.current;
      d = Jg();
      e = Kg(c);
      f2 = zg(d, e);
      f2.callback = void 0 !== b && null !== b ? b : null;
      Ag(c, f2);
      a.current.lanes = e;
      zc(a, e, d);
      Ck(a, d);
      return a;
    }
    function el(a, b, c, d) {
      var e = b.current, f2 = Jg(), g = Kg(e);
      c = cl(c);
      null === b.context ? b.context = c : b.pendingContext = c;
      b = zg(f2, g);
      b.payload = { element: a };
      d = void 0 === d ? null : d;
      null !== d && (b.callback = d);
      Ag(e, b);
      a = Lg(e, g, f2);
      null !== a && Cg(a, e, g);
      return g;
    }
    function fl(a) {
      a = a.current;
      if (!a.child)
        return null;
      switch (a.child.tag) {
        case 5:
          return a.child.stateNode;
        default:
          return a.child.stateNode;
      }
    }
    function gl(a, b) {
      a = a.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        var c = a.retryLane;
        a.retryLane = 0 !== c && c < b ? c : b;
      }
    }
    function hl(a, b) {
      gl(a, b);
      (a = a.alternate) && gl(a, b);
    }
    function il() {
      return null;
    }
    var jl = "function" === typeof reportError ? reportError : function(a) {
      console.error(a);
    };
    function kl(a) {
      this._internalRoot = a;
    }
    ll.prototype.render = kl.prototype.render = function(a) {
      var b = this._internalRoot;
      if (null === b)
        throw Error(p(409));
      el(a, b, null, null);
    };
    ll.prototype.unmount = kl.prototype.unmount = function() {
      var a = this._internalRoot;
      if (null !== a) {
        this._internalRoot = null;
        var b = a.containerInfo;
        Qk(function() {
          el(null, a, null, null);
        });
        b[tf] = null;
      }
    };
    function ll(a) {
      this._internalRoot = a;
    }
    ll.prototype.unstable_scheduleHydration = function(a) {
      if (a) {
        var b = Gc();
        a = { blockedOn: null, target: a, priority: b };
        for (var c = 0; c < Pc.length && 0 !== b && b < Pc[c].priority; c++)
          ;
        Pc.splice(c, 0, a);
        0 === c && Uc(a);
      }
    };
    function ml(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
    }
    function nl(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
    }
    function ol() {
    }
    function pl(a, b, c, d, e) {
      if (e) {
        if ("function" === typeof d) {
          var f2 = d;
          d = function() {
            var a2 = fl(g);
            f2.call(a2);
          };
        }
        var g = dl(b, d, a, 0, null, false, false, "", ol);
        a._reactRootContainer = g;
        a[tf] = g.current;
        rf(8 === a.nodeType ? a.parentNode : a);
        Qk();
        return g;
      }
      for (; e = a.lastChild; )
        a.removeChild(e);
      if ("function" === typeof d) {
        var h = d;
        d = function() {
          var a2 = fl(k2);
          h.call(a2);
        };
      }
      var k2 = al(a, 0, false, null, null, false, false, "", ol);
      a._reactRootContainer = k2;
      a[tf] = k2.current;
      rf(8 === a.nodeType ? a.parentNode : a);
      Qk(function() {
        el(b, k2, c, d);
      });
      return k2;
    }
    function ql(a, b, c, d, e) {
      var f2 = c._reactRootContainer;
      if (f2) {
        var g = f2;
        if ("function" === typeof e) {
          var h = e;
          e = function() {
            var a2 = fl(g);
            h.call(a2);
          };
        }
        el(b, g, a, e);
      } else
        g = pl(c, b, a, e, d);
      return fl(g);
    }
    Dc = function(a) {
      switch (a.tag) {
        case 3:
          var b = a.stateNode;
          if (b.current.memoizedState.isDehydrated) {
            var c = sc(b.pendingLanes);
            0 !== c && (Bc(b, c | 1), Ck(b, B()), 0 === (W & 6) && (aj = B() + 500, ig()));
          }
          break;
        case 13:
          var d = Jg();
          Qk(function() {
            return Lg(a, 1, d);
          });
          hl(a, 1);
      }
    };
    Ec = function(a) {
      if (13 === a.tag) {
        var b = Jg();
        Lg(a, 134217728, b);
        hl(a, 134217728);
      }
    };
    Fc = function(a) {
      if (13 === a.tag) {
        var b = Jg(), c = Kg(a);
        Lg(a, c, b);
        hl(a, c);
      }
    };
    Gc = function() {
      return C;
    };
    Hc = function(a, b) {
      var c = C;
      try {
        return C = a, b();
      } finally {
        C = c;
      }
    };
    xb = function(a, b, c) {
      switch (b) {
        case "input":
          $a(a, c);
          b = c.name;
          if ("radio" === c.type && null != b) {
            for (c = a; c.parentNode; )
              c = c.parentNode;
            c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
            for (b = 0; b < c.length; b++) {
              var d = c[b];
              if (d !== a && d.form === a.form) {
                var e = Cb(d);
                if (!e)
                  throw Error(p(90));
                Va(d);
                $a(d, e);
              }
            }
          }
          break;
        case "textarea":
          hb(a, c);
          break;
        case "select":
          b = c.value, null != b && eb(a, !!c.multiple, b, false);
      }
    };
    Fb = Pk;
    Gb = Qk;
    var rl = { usingClientEntryPoint: false, Events: [Bb, te, Cb, Db, Eb, Pk] }, sl = { findFiberByHostInstance: Vc, bundleType: 0, version: "18.1.0", rendererPackageName: "react-dom" };
    var tl = { bundleType: sl.bundleType, version: sl.version, rendererPackageName: sl.rendererPackageName, rendererConfig: sl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ta.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
      a = Yb(a);
      return null === a ? null : a.stateNode;
    }, findFiberByHostInstance: sl.findFiberByHostInstance || il, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.1.0-next-22edb9f77-20220426" };
    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!ul.isDisabled && ul.supportsFiber)
        try {
          jc = ul.inject(tl), kc = ul;
        } catch (a) {
        }
    }
    reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rl;
    reactDom_production_min.createPortal = function(a, b) {
      var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!ml(b))
        throw Error(p(200));
      return bl(a, b, null, c);
    };
    reactDom_production_min.createRoot = function(a, b) {
      if (!ml(a))
        throw Error(p(299));
      var c = false, d = "", e = jl;
      null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
      b = al(a, 1, false, null, null, c, false, d, e);
      a[tf] = b.current;
      rf(8 === a.nodeType ? a.parentNode : a);
      return new kl(b);
    };
    reactDom_production_min.findDOMNode = function(a) {
      if (null == a)
        return null;
      if (1 === a.nodeType)
        return a;
      var b = a._reactInternals;
      if (void 0 === b) {
        if ("function" === typeof a.render)
          throw Error(p(188));
        a = Object.keys(a).join(",");
        throw Error(p(268, a));
      }
      a = Yb(b);
      a = null === a ? null : a.stateNode;
      return a;
    };
    reactDom_production_min.flushSync = function(a) {
      return Qk(a);
    };
    reactDom_production_min.hydrate = function(a, b, c) {
      if (!nl(b))
        throw Error(p(200));
      return ql(null, a, b, true, c);
    };
    reactDom_production_min.hydrateRoot = function(a, b, c) {
      if (!ml(a))
        throw Error(p(405));
      var d = null != c && c.hydratedSources || null, e = false, f2 = "", g = jl;
      null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
      b = dl(b, null, a, 1, null != c ? c : null, e, false, f2, g);
      a[tf] = b.current;
      rf(a);
      if (d)
        for (a = 0; a < d.length; a++)
          c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
            c,
            e
          );
      return new ll(b);
    };
    reactDom_production_min.render = function(a, b, c) {
      if (!nl(b))
        throw Error(p(200));
      return ql(null, a, b, false, c);
    };
    reactDom_production_min.unmountComponentAtNode = function(a) {
      if (!nl(a))
        throw Error(p(40));
      return a._reactRootContainer ? (Qk(function() {
        ql(null, null, a, false, function() {
          a._reactRootContainer = null;
          a[tf] = null;
        });
      }), true) : false;
    };
    reactDom_production_min.unstable_batchedUpdates = Pk;
    reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
      if (!nl(c))
        throw Error(p(200));
      if (null == a || void 0 === a._reactInternals)
        throw Error(p(38));
      return ql(a, b, c, false, d);
    };
    reactDom_production_min.version = "18.1.0-next-22edb9f77-20220426";
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    {
      checkDCE();
      reactDom.exports = reactDom_production_min;
    }
    var reactDomExports = reactDom.exports;
    var m = reactDomExports;
    {
      client.createRoot = m.createRoot;
      client.hydrateRoot = m.hydrateRoot;
    }
    /**
     * @remix-run/router v1.19.1
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    function _extends$1() {
      _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends$1.apply(this, arguments);
    }
    var Action$1;
    (function(Action2) {
      Action2["Pop"] = "POP";
      Action2["Push"] = "PUSH";
      Action2["Replace"] = "REPLACE";
    })(Action$1 || (Action$1 = {}));
    const PopStateEventType = "popstate";
    function createBrowserHistory(options) {
      if (options === void 0) {
        options = {};
      }
      function createBrowserLocation(window2, globalHistory) {
        let {
          pathname,
          search,
          hash
        } = window2.location;
        return createLocation(
          "",
          {
            pathname,
            search,
            hash
          },
          // state defaults to `null` because `window.history.state` does
          globalHistory.state && globalHistory.state.usr || null,
          globalHistory.state && globalHistory.state.key || "default"
        );
      }
      function createBrowserHref(window2, to2) {
        return typeof to2 === "string" ? to2 : createPath(to2);
      }
      return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
    }
    function invariant(value, message) {
      if (value === false || value === null || typeof value === "undefined") {
        throw new Error(message);
      }
    }
    function warning(cond, message) {
      if (!cond) {
        if (typeof console !== "undefined")
          console.warn(message);
        try {
          throw new Error(message);
        } catch (e) {
        }
      }
    }
    function createKey() {
      return Math.random().toString(36).substr(2, 8);
    }
    function getHistoryState(location, index2) {
      return {
        usr: location.state,
        key: location.key,
        idx: index2
      };
    }
    function createLocation(current, to2, state, key) {
      if (state === void 0) {
        state = null;
      }
      let location = _extends$1({
        pathname: typeof current === "string" ? current : current.pathname,
        search: "",
        hash: ""
      }, typeof to2 === "string" ? parsePath(to2) : to2, {
        state,
        // TODO: This could be cleaned up.  push/replace should probably just take
        // full Locations now and avoid the need to run through this flow at all
        // But that's a pretty big refactor to the current test suite so going to
        // keep as is for the time being and just let any incoming keys take precedence
        key: to2 && to2.key || key || createKey()
      });
      return location;
    }
    function createPath(_ref) {
      let {
        pathname = "/",
        search = "",
        hash = ""
      } = _ref;
      if (search && search !== "?")
        pathname += search.charAt(0) === "?" ? search : "?" + search;
      if (hash && hash !== "#")
        pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
      return pathname;
    }
    function parsePath(path) {
      let parsedPath = {};
      if (path) {
        let hashIndex = path.indexOf("#");
        if (hashIndex >= 0) {
          parsedPath.hash = path.substr(hashIndex);
          path = path.substr(0, hashIndex);
        }
        let searchIndex = path.indexOf("?");
        if (searchIndex >= 0) {
          parsedPath.search = path.substr(searchIndex);
          path = path.substr(0, searchIndex);
        }
        if (path) {
          parsedPath.pathname = path;
        }
      }
      return parsedPath;
    }
    function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
      if (options === void 0) {
        options = {};
      }
      let {
        window: window2 = document.defaultView,
        v5Compat = false
      } = options;
      let globalHistory = window2.history;
      let action = Action$1.Pop;
      let listener = null;
      let index2 = getIndex();
      if (index2 == null) {
        index2 = 0;
        globalHistory.replaceState(_extends$1({}, globalHistory.state, {
          idx: index2
        }), "");
      }
      function getIndex() {
        let state = globalHistory.state || {
          idx: null
        };
        return state.idx;
      }
      function handlePop() {
        action = Action$1.Pop;
        let nextIndex = getIndex();
        let delta = nextIndex == null ? null : nextIndex - index2;
        index2 = nextIndex;
        if (listener) {
          listener({
            action,
            location: history.location,
            delta
          });
        }
      }
      function push(to2, state) {
        action = Action$1.Push;
        let location = createLocation(history.location, to2, state);
        if (validateLocation)
          validateLocation(location, to2);
        index2 = getIndex() + 1;
        let historyState = getHistoryState(location, index2);
        let url = history.createHref(location);
        try {
          globalHistory.pushState(historyState, "", url);
        } catch (error) {
          if (error instanceof DOMException && error.name === "DataCloneError") {
            throw error;
          }
          window2.location.assign(url);
        }
        if (v5Compat && listener) {
          listener({
            action,
            location: history.location,
            delta: 1
          });
        }
      }
      function replace(to2, state) {
        action = Action$1.Replace;
        let location = createLocation(history.location, to2, state);
        if (validateLocation)
          validateLocation(location, to2);
        index2 = getIndex();
        let historyState = getHistoryState(location, index2);
        let url = history.createHref(location);
        globalHistory.replaceState(historyState, "", url);
        if (v5Compat && listener) {
          listener({
            action,
            location: history.location,
            delta: 0
          });
        }
      }
      function createURL(to2) {
        let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
        let href = typeof to2 === "string" ? to2 : createPath(to2);
        href = href.replace(/ $/, "%20");
        invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
        return new URL(href, base);
      }
      let history = {
        get action() {
          return action;
        },
        get location() {
          return getLocation(window2, globalHistory);
        },
        listen(fn) {
          if (listener) {
            throw new Error("A history only accepts one active listener");
          }
          window2.addEventListener(PopStateEventType, handlePop);
          listener = fn;
          return () => {
            window2.removeEventListener(PopStateEventType, handlePop);
            listener = null;
          };
        },
        createHref(to2) {
          return createHref(window2, to2);
        },
        createURL,
        encodeLocation(to2) {
          let url = createURL(to2);
          return {
            pathname: url.pathname,
            search: url.search,
            hash: url.hash
          };
        },
        push,
        replace,
        go(n2) {
          return globalHistory.go(n2);
        }
      };
      return history;
    }
    var ResultType;
    (function(ResultType2) {
      ResultType2["data"] = "data";
      ResultType2["deferred"] = "deferred";
      ResultType2["redirect"] = "redirect";
      ResultType2["error"] = "error";
    })(ResultType || (ResultType = {}));
    function matchRoutes(routes, locationArg, basename) {
      if (basename === void 0) {
        basename = "/";
      }
      return matchRoutesImpl(routes, locationArg, basename, false);
    }
    function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
      let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
      let pathname = stripBasename(location.pathname || "/", basename);
      if (pathname == null) {
        return null;
      }
      let branches = flattenRoutes(routes);
      rankRouteBranches(branches);
      let matches = null;
      for (let i = 0; matches == null && i < branches.length; ++i) {
        let decoded = decodePath(pathname);
        matches = matchRouteBranch(branches[i], decoded, allowPartial);
      }
      return matches;
    }
    function flattenRoutes(routes, branches, parentsMeta, parentPath) {
      if (branches === void 0) {
        branches = [];
      }
      if (parentsMeta === void 0) {
        parentsMeta = [];
      }
      if (parentPath === void 0) {
        parentPath = "";
      }
      let flattenRoute = (route, index2, relativePath) => {
        let meta = {
          relativePath: relativePath === void 0 ? route.path || "" : relativePath,
          caseSensitive: route.caseSensitive === true,
          childrenIndex: index2,
          route
        };
        if (meta.relativePath.startsWith("/")) {
          invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
          meta.relativePath = meta.relativePath.slice(parentPath.length);
        }
        let path = joinPaths([parentPath, meta.relativePath]);
        let routesMeta = parentsMeta.concat(meta);
        if (route.children && route.children.length > 0) {
          invariant(
            // Our types know better, but runtime JS may not!
            // @ts-expect-error
            route.index !== true,
            "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
          );
          flattenRoutes(route.children, branches, routesMeta, path);
        }
        if (route.path == null && !route.index) {
          return;
        }
        branches.push({
          path,
          score: computeScore(path, route.index),
          routesMeta
        });
      };
      routes.forEach((route, index2) => {
        var _route$path;
        if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
          flattenRoute(route, index2);
        } else {
          for (let exploded of explodeOptionalSegments(route.path)) {
            flattenRoute(route, index2, exploded);
          }
        }
      });
      return branches;
    }
    function explodeOptionalSegments(path) {
      let segments = path.split("/");
      if (segments.length === 0)
        return [];
      let [first, ...rest] = segments;
      let isOptional = first.endsWith("?");
      let required = first.replace(/\?$/, "");
      if (rest.length === 0) {
        return isOptional ? [required, ""] : [required];
      }
      let restExploded = explodeOptionalSegments(rest.join("/"));
      let result = [];
      result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
      if (isOptional) {
        result.push(...restExploded);
      }
      return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
    }
    function rankRouteBranches(branches) {
      branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b.routesMeta.map((meta) => meta.childrenIndex)));
    }
    const paramRe = /^:[\w-]+$/;
    const dynamicSegmentValue = 3;
    const indexRouteValue = 2;
    const emptySegmentValue = 1;
    const staticSegmentValue = 10;
    const splatPenalty = -2;
    const isSplat = (s) => s === "*";
    function computeScore(path, index2) {
      let segments = path.split("/");
      let initialScore = segments.length;
      if (segments.some(isSplat)) {
        initialScore += splatPenalty;
      }
      if (index2) {
        initialScore += indexRouteValue;
      }
      return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
    }
    function compareIndexes(a, b) {
      let siblings = a.length === b.length && a.slice(0, -1).every((n2, i) => n2 === b[i]);
      return siblings ? (
        // If two routes are siblings, we should try to match the earlier sibling
        // first. This allows people to have fine-grained control over the matching
        // behavior by simply putting routes with identical paths in the order they
        // want them tried.
        a[a.length - 1] - b[b.length - 1]
      ) : (
        // Otherwise, it doesn't really make sense to rank non-siblings by index,
        // so they sort equally.
        0
      );
    }
    function matchRouteBranch(branch, pathname, allowPartial) {
      if (allowPartial === void 0) {
        allowPartial = false;
      }
      let {
        routesMeta
      } = branch;
      let matchedParams = {};
      let matchedPathname = "/";
      let matches = [];
      for (let i = 0; i < routesMeta.length; ++i) {
        let meta = routesMeta[i];
        let end = i === routesMeta.length - 1;
        let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
        let match = matchPath({
          path: meta.relativePath,
          caseSensitive: meta.caseSensitive,
          end
        }, remainingPathname);
        let route = meta.route;
        if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
          match = matchPath({
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end: false
          }, remainingPathname);
        }
        if (!match) {
          return null;
        }
        Object.assign(matchedParams, match.params);
        matches.push({
          // TODO: Can this as be avoided?
          params: matchedParams,
          pathname: joinPaths([matchedPathname, match.pathname]),
          pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
          route
        });
        if (match.pathnameBase !== "/") {
          matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
        }
      }
      return matches;
    }
    function matchPath(pattern, pathname) {
      if (typeof pattern === "string") {
        pattern = {
          path: pattern,
          caseSensitive: false,
          end: true
        };
      }
      let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
      let match = pathname.match(matcher);
      if (!match)
        return null;
      let matchedPathname = match[0];
      let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
      let captureGroups = match.slice(1);
      let params = compiledParams.reduce((memo, _ref, index2) => {
        let {
          paramName,
          isOptional
        } = _ref;
        if (paramName === "*") {
          let splatValue = captureGroups[index2] || "";
          pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
        }
        const value = captureGroups[index2];
        if (isOptional && !value) {
          memo[paramName] = void 0;
        } else {
          memo[paramName] = (value || "").replace(/%2F/g, "/");
        }
        return memo;
      }, {});
      return {
        params,
        pathname: matchedPathname,
        pathnameBase,
        pattern
      };
    }
    function compilePath(path, caseSensitive, end) {
      if (caseSensitive === void 0) {
        caseSensitive = false;
      }
      if (end === void 0) {
        end = true;
      }
      warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
      let params = [];
      let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional) => {
        params.push({
          paramName,
          isOptional: isOptional != null
        });
        return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
      });
      if (path.endsWith("*")) {
        params.push({
          paramName: "*"
        });
        regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
      } else if (end) {
        regexpSource += "\\/*$";
      } else if (path !== "" && path !== "/") {
        regexpSource += "(?:(?=\\/|$))";
      } else
        ;
      let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
      return [matcher, params];
    }
    function decodePath(value) {
      try {
        return value.split("/").map((v2) => decodeURIComponent(v2).replace(/\//g, "%2F")).join("/");
      } catch (error) {
        warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
        return value;
      }
    }
    function stripBasename(pathname, basename) {
      if (basename === "/")
        return pathname;
      if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
        return null;
      }
      let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
      let nextChar = pathname.charAt(startIndex);
      if (nextChar && nextChar !== "/") {
        return null;
      }
      return pathname.slice(startIndex) || "/";
    }
    function resolvePath(to2, fromPathname) {
      if (fromPathname === void 0) {
        fromPathname = "/";
      }
      let {
        pathname: toPathname,
        search = "",
        hash = ""
      } = typeof to2 === "string" ? parsePath(to2) : to2;
      let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
      return {
        pathname,
        search: normalizeSearch(search),
        hash: normalizeHash(hash)
      };
    }
    function resolvePathname(relativePath, fromPathname) {
      let segments = fromPathname.replace(/\/+$/, "").split("/");
      let relativeSegments = relativePath.split("/");
      relativeSegments.forEach((segment) => {
        if (segment === "..") {
          if (segments.length > 1)
            segments.pop();
        } else if (segment !== ".") {
          segments.push(segment);
        }
      });
      return segments.length > 1 ? segments.join("/") : "/";
    }
    function getInvalidPathError(char, field, dest, path) {
      return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
    }
    function getPathContributingMatches(matches) {
      return matches.filter((match, index2) => index2 === 0 || match.route.path && match.route.path.length > 0);
    }
    function getResolveToMatches(matches, v7_relativeSplatPath) {
      let pathMatches = getPathContributingMatches(matches);
      if (v7_relativeSplatPath) {
        return pathMatches.map((match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase);
      }
      return pathMatches.map((match) => match.pathnameBase);
    }
    function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
      if (isPathRelative === void 0) {
        isPathRelative = false;
      }
      let to2;
      if (typeof toArg === "string") {
        to2 = parsePath(toArg);
      } else {
        to2 = _extends$1({}, toArg);
        invariant(!to2.pathname || !to2.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to2));
        invariant(!to2.pathname || !to2.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to2));
        invariant(!to2.search || !to2.search.includes("#"), getInvalidPathError("#", "search", "hash", to2));
      }
      let isEmptyPath = toArg === "" || to2.pathname === "";
      let toPathname = isEmptyPath ? "/" : to2.pathname;
      let from2;
      if (toPathname == null) {
        from2 = locationPathname;
      } else {
        let routePathnameIndex = routePathnames.length - 1;
        if (!isPathRelative && toPathname.startsWith("..")) {
          let toSegments = toPathname.split("/");
          while (toSegments[0] === "..") {
            toSegments.shift();
            routePathnameIndex -= 1;
          }
          to2.pathname = toSegments.join("/");
        }
        from2 = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
      }
      let path = resolvePath(to2, from2);
      let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
      let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
      if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
        path.pathname += "/";
      }
      return path;
    }
    const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
    const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
    const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
    const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
    function isRouteErrorResponse(error) {
      return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
    }
    const validMutationMethodsArr = ["post", "put", "patch", "delete"];
    new Set(validMutationMethodsArr);
    const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
    new Set(validRequestMethodsArr);
    /**
     * React Router v6.26.1
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    function _extends() {
      _extends = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    const DataRouterContext = /* @__PURE__ */ reactExports.createContext(null);
    const DataRouterStateContext = /* @__PURE__ */ reactExports.createContext(null);
    const NavigationContext = /* @__PURE__ */ reactExports.createContext(null);
    const LocationContext = /* @__PURE__ */ reactExports.createContext(null);
    const RouteContext = /* @__PURE__ */ reactExports.createContext({
      outlet: null,
      matches: [],
      isDataRoute: false
    });
    const RouteErrorContext = /* @__PURE__ */ reactExports.createContext(null);
    function useInRouterContext() {
      return reactExports.useContext(LocationContext) != null;
    }
    function useLocation() {
      !useInRouterContext() ? invariant(false) : void 0;
      return reactExports.useContext(LocationContext).location;
    }
    function useIsomorphicLayoutEffect(cb2) {
      let isStatic = reactExports.useContext(NavigationContext).static;
      if (!isStatic) {
        reactExports.useLayoutEffect(cb2);
      }
    }
    function useNavigate() {
      let {
        isDataRoute
      } = reactExports.useContext(RouteContext);
      return isDataRoute ? useNavigateStable() : useNavigateUnstable();
    }
    function useNavigateUnstable() {
      !useInRouterContext() ? invariant(false) : void 0;
      let dataRouterContext = reactExports.useContext(DataRouterContext);
      let {
        basename,
        future,
        navigator: navigator2
      } = reactExports.useContext(NavigationContext);
      let {
        matches
      } = reactExports.useContext(RouteContext);
      let {
        pathname: locationPathname
      } = useLocation();
      let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
      let activeRef = reactExports.useRef(false);
      useIsomorphicLayoutEffect(() => {
        activeRef.current = true;
      });
      let navigate = reactExports.useCallback(function(to2, options) {
        if (options === void 0) {
          options = {};
        }
        if (!activeRef.current)
          return;
        if (typeof to2 === "number") {
          navigator2.go(to2);
          return;
        }
        let path = resolveTo(to2, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
        if (dataRouterContext == null && basename !== "/") {
          path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
        }
        (!!options.replace ? navigator2.replace : navigator2.push)(path, options.state, options);
      }, [basename, navigator2, routePathnamesJson, locationPathname, dataRouterContext]);
      return navigate;
    }
    function useParams() {
      let {
        matches
      } = reactExports.useContext(RouteContext);
      let routeMatch = matches[matches.length - 1];
      return routeMatch ? routeMatch.params : {};
    }
    function useRoutes(routes, locationArg) {
      return useRoutesImpl(routes, locationArg);
    }
    function useRoutesImpl(routes, locationArg, dataRouterState, future) {
      !useInRouterContext() ? invariant(false) : void 0;
      let {
        navigator: navigator2
      } = reactExports.useContext(NavigationContext);
      let {
        matches: parentMatches
      } = reactExports.useContext(RouteContext);
      let routeMatch = parentMatches[parentMatches.length - 1];
      let parentParams = routeMatch ? routeMatch.params : {};
      routeMatch ? routeMatch.pathname : "/";
      let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
      routeMatch && routeMatch.route;
      let locationFromContext = useLocation();
      let location;
      if (locationArg) {
        var _parsedLocationArg$pa;
        let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
        !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
        location = parsedLocationArg;
      } else {
        location = locationFromContext;
      }
      let pathname = location.pathname || "/";
      let remainingPathname = pathname;
      if (parentPathnameBase !== "/") {
        let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
        let segments = pathname.replace(/^\//, "").split("/");
        remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
      }
      let matches = matchRoutes(routes, {
        pathname: remainingPathname
      });
      let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
        params: Object.assign({}, parentParams, match.params),
        pathname: joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator2.encodeLocation ? navigator2.encodeLocation(match.pathname).pathname : match.pathname
        ]),
        pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator2.encodeLocation ? navigator2.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
        ])
      })), parentMatches, dataRouterState, future);
      if (locationArg && renderedMatches) {
        return /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
          value: {
            location: _extends({
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default"
            }, location),
            navigationType: Action$1.Pop
          }
        }, renderedMatches);
      }
      return renderedMatches;
    }
    function DefaultErrorComponent() {
      let error = useRouteError();
      let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
      let stack = error instanceof Error ? error.stack : null;
      let lightgrey = "rgba(200,200,200, 0.5)";
      let preStyles = {
        padding: "0.5rem",
        backgroundColor: lightgrey
      };
      let devInfo = null;
      return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ reactExports.createElement("h3", {
        style: {
          fontStyle: "italic"
        }
      }, message), stack ? /* @__PURE__ */ reactExports.createElement("pre", {
        style: preStyles
      }, stack) : null, devInfo);
    }
    const defaultErrorElement = /* @__PURE__ */ reactExports.createElement(DefaultErrorComponent, null);
    class RenderErrorBoundary extends reactExports.Component {
      constructor(props) {
        super(props);
        this.state = {
          location: props.location,
          revalidation: props.revalidation,
          error: props.error
        };
      }
      static getDerivedStateFromError(error) {
        return {
          error
        };
      }
      static getDerivedStateFromProps(props, state) {
        if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
          return {
            error: props.error,
            location: props.location,
            revalidation: props.revalidation
          };
        }
        return {
          error: props.error !== void 0 ? props.error : state.error,
          location: state.location,
          revalidation: props.revalidation || state.revalidation
        };
      }
      componentDidCatch(error, errorInfo) {
        console.error("React Router caught the following error during render", error, errorInfo);
      }
      render() {
        return this.state.error !== void 0 ? /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
          value: this.props.routeContext
        }, /* @__PURE__ */ reactExports.createElement(RouteErrorContext.Provider, {
          value: this.state.error,
          children: this.props.component
        })) : this.props.children;
      }
    }
    function RenderedRoute(_ref) {
      let {
        routeContext,
        match,
        children
      } = _ref;
      let dataRouterContext = reactExports.useContext(DataRouterContext);
      if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
        dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
      }
      return /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
        value: routeContext
      }, children);
    }
    function _renderMatches(matches, parentMatches, dataRouterState, future) {
      var _dataRouterState;
      if (parentMatches === void 0) {
        parentMatches = [];
      }
      if (dataRouterState === void 0) {
        dataRouterState = null;
      }
      if (future === void 0) {
        future = null;
      }
      if (matches == null) {
        var _future;
        if (!dataRouterState) {
          return null;
        }
        if (dataRouterState.errors) {
          matches = dataRouterState.matches;
        } else if ((_future = future) != null && _future.v7_partialHydration && parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
          matches = dataRouterState.matches;
        } else {
          return null;
        }
      }
      let renderedMatches = matches;
      let errors = (_dataRouterState = dataRouterState) == null ? void 0 : _dataRouterState.errors;
      if (errors != null) {
        let errorIndex = renderedMatches.findIndex((m2) => m2.route.id && (errors == null ? void 0 : errors[m2.route.id]) !== void 0);
        !(errorIndex >= 0) ? invariant(false) : void 0;
        renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
      }
      let renderFallback = false;
      let fallbackIndex = -1;
      if (dataRouterState && future && future.v7_partialHydration) {
        for (let i = 0; i < renderedMatches.length; i++) {
          let match = renderedMatches[i];
          if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
            fallbackIndex = i;
          }
          if (match.route.id) {
            let {
              loaderData,
              errors: errors2
            } = dataRouterState;
            let needsToRunLoader = match.route.loader && loaderData[match.route.id] === void 0 && (!errors2 || errors2[match.route.id] === void 0);
            if (match.route.lazy || needsToRunLoader) {
              renderFallback = true;
              if (fallbackIndex >= 0) {
                renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
              } else {
                renderedMatches = [renderedMatches[0]];
              }
              break;
            }
          }
        }
      }
      return renderedMatches.reduceRight((outlet, match, index2) => {
        let error;
        let shouldRenderHydrateFallback = false;
        let errorElement = null;
        let hydrateFallbackElement = null;
        if (dataRouterState) {
          error = errors && match.route.id ? errors[match.route.id] : void 0;
          errorElement = match.route.errorElement || defaultErrorElement;
          if (renderFallback) {
            if (fallbackIndex < 0 && index2 === 0) {
              warningOnce("route-fallback", false);
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = null;
            } else if (fallbackIndex === index2) {
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = match.route.hydrateFallbackElement || null;
            }
          }
        }
        let matches2 = parentMatches.concat(renderedMatches.slice(0, index2 + 1));
        let getChildren = () => {
          let children;
          if (error) {
            children = errorElement;
          } else if (shouldRenderHydrateFallback) {
            children = hydrateFallbackElement;
          } else if (match.route.Component) {
            children = /* @__PURE__ */ reactExports.createElement(match.route.Component, null);
          } else if (match.route.element) {
            children = match.route.element;
          } else {
            children = outlet;
          }
          return /* @__PURE__ */ reactExports.createElement(RenderedRoute, {
            match,
            routeContext: {
              outlet,
              matches: matches2,
              isDataRoute: dataRouterState != null
            },
            children
          });
        };
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index2 === 0) ? /* @__PURE__ */ reactExports.createElement(RenderErrorBoundary, {
          location: dataRouterState.location,
          revalidation: dataRouterState.revalidation,
          component: errorElement,
          error,
          children: getChildren(),
          routeContext: {
            outlet: null,
            matches: matches2,
            isDataRoute: true
          }
        }) : getChildren();
      }, null);
    }
    var DataRouterHook$1 = /* @__PURE__ */ function(DataRouterHook2) {
      DataRouterHook2["UseBlocker"] = "useBlocker";
      DataRouterHook2["UseRevalidator"] = "useRevalidator";
      DataRouterHook2["UseNavigateStable"] = "useNavigate";
      return DataRouterHook2;
    }(DataRouterHook$1 || {});
    var DataRouterStateHook$1 = /* @__PURE__ */ function(DataRouterStateHook2) {
      DataRouterStateHook2["UseBlocker"] = "useBlocker";
      DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
      DataRouterStateHook2["UseActionData"] = "useActionData";
      DataRouterStateHook2["UseRouteError"] = "useRouteError";
      DataRouterStateHook2["UseNavigation"] = "useNavigation";
      DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
      DataRouterStateHook2["UseMatches"] = "useMatches";
      DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
      DataRouterStateHook2["UseNavigateStable"] = "useNavigate";
      DataRouterStateHook2["UseRouteId"] = "useRouteId";
      return DataRouterStateHook2;
    }(DataRouterStateHook$1 || {});
    function useDataRouterContext(hookName) {
      let ctx = reactExports.useContext(DataRouterContext);
      !ctx ? invariant(false) : void 0;
      return ctx;
    }
    function useDataRouterState(hookName) {
      let state = reactExports.useContext(DataRouterStateContext);
      !state ? invariant(false) : void 0;
      return state;
    }
    function useRouteContext(hookName) {
      let route = reactExports.useContext(RouteContext);
      !route ? invariant(false) : void 0;
      return route;
    }
    function useCurrentRouteId(hookName) {
      let route = useRouteContext();
      let thisRoute = route.matches[route.matches.length - 1];
      !thisRoute.route.id ? invariant(false) : void 0;
      return thisRoute.route.id;
    }
    function useRouteError() {
      var _state$errors;
      let error = reactExports.useContext(RouteErrorContext);
      let state = useDataRouterState(DataRouterStateHook$1.UseRouteError);
      let routeId = useCurrentRouteId(DataRouterStateHook$1.UseRouteError);
      if (error !== void 0) {
        return error;
      }
      return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
    }
    function useNavigateStable() {
      let {
        router
      } = useDataRouterContext(DataRouterHook$1.UseNavigateStable);
      let id2 = useCurrentRouteId(DataRouterStateHook$1.UseNavigateStable);
      let activeRef = reactExports.useRef(false);
      useIsomorphicLayoutEffect(() => {
        activeRef.current = true;
      });
      let navigate = reactExports.useCallback(function(to2, options) {
        if (options === void 0) {
          options = {};
        }
        if (!activeRef.current)
          return;
        if (typeof to2 === "number") {
          router.navigate(to2);
        } else {
          router.navigate(to2, _extends({
            fromRouteId: id2
          }, options));
        }
      }, [router, id2]);
      return navigate;
    }
    const alreadyWarned = {};
    function warningOnce(key, cond, message) {
      if (!cond && !alreadyWarned[key]) {
        alreadyWarned[key] = true;
      }
    }
    function Route$1(_props) {
      invariant(false);
    }
    function Router$1(_ref5) {
      let {
        basename: basenameProp = "/",
        children = null,
        location: locationProp,
        navigationType = Action$1.Pop,
        navigator: navigator2,
        static: staticProp = false,
        future
      } = _ref5;
      !!useInRouterContext() ? invariant(false) : void 0;
      let basename = basenameProp.replace(/^\/*/, "/");
      let navigationContext = reactExports.useMemo(() => ({
        basename,
        navigator: navigator2,
        static: staticProp,
        future: _extends({
          v7_relativeSplatPath: false
        }, future)
      }), [basename, future, navigator2, staticProp]);
      if (typeof locationProp === "string") {
        locationProp = parsePath(locationProp);
      }
      let {
        pathname = "/",
        search = "",
        hash = "",
        state = null,
        key = "default"
      } = locationProp;
      let locationContext = reactExports.useMemo(() => {
        let trailingPathname = stripBasename(pathname, basename);
        if (trailingPathname == null) {
          return null;
        }
        return {
          location: {
            pathname: trailingPathname,
            search,
            hash,
            state,
            key
          },
          navigationType
        };
      }, [basename, pathname, search, hash, state, key, navigationType]);
      if (locationContext == null) {
        return null;
      }
      return /* @__PURE__ */ reactExports.createElement(NavigationContext.Provider, {
        value: navigationContext
      }, /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
        children,
        value: locationContext
      }));
    }
    function Routes(_ref6) {
      let {
        children,
        location
      } = _ref6;
      return useRoutes(createRoutesFromChildren(children), location);
    }
    new Promise(() => {
    });
    function createRoutesFromChildren(children, parentPath) {
      if (parentPath === void 0) {
        parentPath = [];
      }
      let routes = [];
      reactExports.Children.forEach(children, (element, index2) => {
        if (!/* @__PURE__ */ reactExports.isValidElement(element)) {
          return;
        }
        let treePath = [...parentPath, index2];
        if (element.type === reactExports.Fragment) {
          routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
          return;
        }
        !(element.type === Route$1) ? invariant(false) : void 0;
        !(!element.props.index || !element.props.children) ? invariant(false) : void 0;
        let route = {
          id: element.props.id || treePath.join("-"),
          caseSensitive: element.props.caseSensitive,
          element: element.props.element,
          Component: element.props.Component,
          index: element.props.index,
          path: element.props.path,
          loader: element.props.loader,
          action: element.props.action,
          errorElement: element.props.errorElement,
          ErrorBoundary: element.props.ErrorBoundary,
          hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
          shouldRevalidate: element.props.shouldRevalidate,
          handle: element.props.handle,
          lazy: element.props.lazy
        };
        if (element.props.children) {
          route.children = createRoutesFromChildren(element.props.children, treePath);
        }
        routes.push(route);
      });
      return routes;
    }
    /**
     * React Router DOM v6.26.1
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    const REACT_ROUTER_VERSION = "6";
    try {
      window.__reactRouterVersion = REACT_ROUTER_VERSION;
    } catch (e) {
    }
    const START_TRANSITION = "startTransition";
    const startTransitionImpl = React$1[START_TRANSITION];
    function BrowserRouter(_ref4) {
      let {
        basename,
        children,
        future,
        window: window2
      } = _ref4;
      let historyRef = reactExports.useRef();
      if (historyRef.current == null) {
        historyRef.current = createBrowserHistory({
          window: window2,
          v5Compat: true
        });
      }
      let history = historyRef.current;
      let [state, setStateImpl] = reactExports.useState({
        action: history.action,
        location: history.location
      });
      let {
        v7_startTransition
      } = future || {};
      let setState = reactExports.useCallback((newState) => {
        v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
      }, [setStateImpl, v7_startTransition]);
      reactExports.useLayoutEffect(() => history.listen(setState), [history, setState]);
      return /* @__PURE__ */ reactExports.createElement(Router$1, {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future
      });
    }
    var DataRouterHook;
    (function(DataRouterHook2) {
      DataRouterHook2["UseScrollRestoration"] = "useScrollRestoration";
      DataRouterHook2["UseSubmit"] = "useSubmit";
      DataRouterHook2["UseSubmitFetcher"] = "useSubmitFetcher";
      DataRouterHook2["UseFetcher"] = "useFetcher";
      DataRouterHook2["useViewTransitionState"] = "useViewTransitionState";
    })(DataRouterHook || (DataRouterHook = {}));
    var DataRouterStateHook;
    (function(DataRouterStateHook2) {
      DataRouterStateHook2["UseFetcher"] = "useFetcher";
      DataRouterStateHook2["UseFetchers"] = "useFetchers";
      DataRouterStateHook2["UseScrollRestoration"] = "useScrollRestoration";
    })(DataRouterStateHook || (DataRouterStateHook = {}));
    const Container = ({ children = null, classes: classes2 = "", style = {}, ...props }, ref) => {
      return /* @__PURE__ */ jsx(
        "div",
        {
          style: { ...style },
          className: `box-content ${classes2}`,
          ...props,
          ref,
          children
        }
      );
    };
    const Container$1 = reactExports.forwardRef(Container);
    function Title({ children = void 0, classes: classes2 = "", type = "h1", style = {}, ...props }) {
      const DomType = type;
      return /* @__PURE__ */ jsx(
        DomType,
        {
          ...props,
          className: `m-0 text-black font-arial font-normal text-xl ${classes2}`,
          style: { ...style || {} },
          suppressHydrationWarning: true,
          children
        }
      );
    }
    const styleForAnotherCardsTypes = {
      root: {
        elevated: "shadow-sm shadow-gray-400 bg-white",
        filled: "bg-blue-600",
        outlined: "bg-white border border-1 border-gray-400"
      }
    };
    function Card({ children, classes: classes2 = { root: "" }, type = "elevated" }) {
      return /* @__PURE__ */ jsx(
        Container$1,
        {
          classes: `
            border border-1 border-gray-500 rounded-xl
            overflow-hidden p-2 
            ${styleForAnotherCardsTypes.root[type]} ${classes2.root}
          `,
          children
        }
      );
    }
    function Divider({ classes: classes2 = "" }) {
      return /* @__PURE__ */ jsx(
        Container$1,
        {
          classes: `border-t border-gray-400 ${classes2}`
        }
      );
    }
    function CardHeader({ main, actions = null, classes: classes2 = { root: "" }, onClick = null }) {
      return /* @__PURE__ */ jsxs(
        Container$1,
        {
          classes: `
            py-1 flex flex-row justify-between align-items-center
            ${classes2.root}
          `,
          onClick,
          children: [
            /* @__PURE__ */ jsx(
              Container$1,
              {
                classes: "flex align-items-center",
                children: main
              }
            ),
            !!actions && /* @__PURE__ */ jsx(
              Container$1,
              {
                classes: "flex items-center",
                children: actions
              }
            )
          ]
        }
      );
    }
    function Svg({ children = void 0, classes: classes2 = "", style = {}, ...props }) {
      return /* @__PURE__ */ jsx(
        "svg",
        {
          style: { ...style },
          className: classes2,
          ...props,
          children
        }
      );
    }
    function SvgPath({ children = void 0, style = {}, ...props }) {
      return /* @__PURE__ */ jsx(
        "path",
        {
          style: { ...style },
          ...props,
          children
        }
      );
    }
    function Action({ classes: classes2 = "", fill = "black" }) {
      return /* @__PURE__ */ jsx(
        Svg,
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 128 512",
          classes: `w-4 h-4 fill-white ${classes2}`,
          children: /* @__PURE__ */ jsx(
            SvgPath,
            {
              d: "\n                    M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 \n                    0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z\n                ",
              fill
            }
          )
        }
      );
    }
    function DownArrow({ classes: classes2 = "", fill = "black" }) {
      return /* @__PURE__ */ jsx(
        Svg,
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512",
          classes: `w-4 h-4 fill-white ${classes2}`,
          children: /* @__PURE__ */ jsx(
            SvgPath,
            {
              d: "\n                    M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 \n                    12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 \n                    169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z\n                ",
              fill
            }
          )
        }
      );
    }
    //! moment.js
    //! version : 2.30.1
    //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
    //! license : MIT
    //! momentjs.com
    var hookCallback;
    function hooks() {
      return hookCallback.apply(null, arguments);
    }
    function setHookCallback(callback) {
      hookCallback = callback;
    }
    function isArray(input) {
      return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
    }
    function isObject(input) {
      return input != null && Object.prototype.toString.call(input) === "[object Object]";
    }
    function hasOwnProp(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }
    function isObjectEmpty(obj) {
      if (Object.getOwnPropertyNames) {
        return Object.getOwnPropertyNames(obj).length === 0;
      } else {
        var k2;
        for (k2 in obj) {
          if (hasOwnProp(obj, k2)) {
            return false;
          }
        }
        return true;
      }
    }
    function isUndefined(input) {
      return input === void 0;
    }
    function isNumber(input) {
      return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
    }
    function isDate(input) {
      return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
    }
    function map(arr, fn) {
      var res = [], i, arrLen = arr.length;
      for (i = 0; i < arrLen; ++i) {
        res.push(fn(arr[i], i));
      }
      return res;
    }
    function extend(a, b) {
      for (var i in b) {
        if (hasOwnProp(b, i)) {
          a[i] = b[i];
        }
      }
      if (hasOwnProp(b, "toString")) {
        a.toString = b.toString;
      }
      if (hasOwnProp(b, "valueOf")) {
        a.valueOf = b.valueOf;
      }
      return a;
    }
    function createUTC(input, format2, locale2, strict) {
      return createLocalOrUTC(input, format2, locale2, strict, true).utc();
    }
    function defaultParsingFlags() {
      return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidEra: null,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false,
        parsedDateParts: [],
        era: null,
        meridiem: null,
        rfc2822: false,
        weekdayMismatch: false
      };
    }
    function getParsingFlags(m2) {
      if (m2._pf == null) {
        m2._pf = defaultParsingFlags();
      }
      return m2._pf;
    }
    var some;
    if (Array.prototype.some) {
      some = Array.prototype.some;
    } else {
      some = function(fun) {
        var t2 = Object(this), len = t2.length >>> 0, i;
        for (i = 0; i < len; i++) {
          if (i in t2 && fun.call(this, t2[i], i, t2)) {
            return true;
          }
        }
        return false;
      };
    }
    function isValid(m2) {
      var flags = null, parsedParts = false, isNowValid = m2._d && !isNaN(m2._d.getTime());
      if (isNowValid) {
        flags = getParsingFlags(m2);
        parsedParts = some.call(flags.parsedDateParts, function(i) {
          return i != null;
        });
        isNowValid = flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
        if (m2._strict) {
          isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
        }
      }
      if (Object.isFrozen == null || !Object.isFrozen(m2)) {
        m2._isValid = isNowValid;
      } else {
        return isNowValid;
      }
      return m2._isValid;
    }
    function createInvalid(flags) {
      var m2 = createUTC(NaN);
      if (flags != null) {
        extend(getParsingFlags(m2), flags);
      } else {
        getParsingFlags(m2).userInvalidated = true;
      }
      return m2;
    }
    var momentProperties = hooks.momentProperties = [], updateInProgress = false;
    function copyConfig(to2, from2) {
      var i, prop, val, momentPropertiesLen = momentProperties.length;
      if (!isUndefined(from2._isAMomentObject)) {
        to2._isAMomentObject = from2._isAMomentObject;
      }
      if (!isUndefined(from2._i)) {
        to2._i = from2._i;
      }
      if (!isUndefined(from2._f)) {
        to2._f = from2._f;
      }
      if (!isUndefined(from2._l)) {
        to2._l = from2._l;
      }
      if (!isUndefined(from2._strict)) {
        to2._strict = from2._strict;
      }
      if (!isUndefined(from2._tzm)) {
        to2._tzm = from2._tzm;
      }
      if (!isUndefined(from2._isUTC)) {
        to2._isUTC = from2._isUTC;
      }
      if (!isUndefined(from2._offset)) {
        to2._offset = from2._offset;
      }
      if (!isUndefined(from2._pf)) {
        to2._pf = getParsingFlags(from2);
      }
      if (!isUndefined(from2._locale)) {
        to2._locale = from2._locale;
      }
      if (momentPropertiesLen > 0) {
        for (i = 0; i < momentPropertiesLen; i++) {
          prop = momentProperties[i];
          val = from2[prop];
          if (!isUndefined(val)) {
            to2[prop] = val;
          }
        }
      }
      return to2;
    }
    function Moment(config) {
      copyConfig(this, config);
      this._d = new Date(config._d != null ? config._d.getTime() : NaN);
      if (!this.isValid()) {
        this._d = /* @__PURE__ */ new Date(NaN);
      }
      if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
      }
    }
    function isMoment(obj) {
      return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
    }
    function warn(msg) {
      if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
        console.warn("Deprecation warning: " + msg);
      }
    }
    function deprecate(msg, fn) {
      var firstTime = true;
      return extend(function() {
        if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
          var args = [], arg, i, key, argLen = arguments.length;
          for (i = 0; i < argLen; i++) {
            arg = "";
            if (typeof arguments[i] === "object") {
              arg += "\n[" + i + "] ";
              for (key in arguments[0]) {
                if (hasOwnProp(arguments[0], key)) {
                  arg += key + ": " + arguments[0][key] + ", ";
                }
              }
              arg = arg.slice(0, -2);
            } else {
              arg = arguments[i];
            }
            args.push(arg);
          }
          warn(
            msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack
          );
          firstTime = false;
        }
        return fn.apply(this, arguments);
      }, fn);
    }
    var deprecations = {};
    function deprecateSimple(name, msg) {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
      }
      if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
      }
    }
    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;
    function isFunction(input) {
      return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
    }
    function set(config) {
      var prop, i;
      for (i in config) {
        if (hasOwnProp(config, i)) {
          prop = config[i];
          if (isFunction(prop)) {
            this[i] = prop;
          } else {
            this["_" + i] = prop;
          }
        }
      }
      this._config = config;
      this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
      );
    }
    function mergeConfigs(parentConfig, childConfig) {
      var res = extend({}, parentConfig), prop;
      for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
          if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
            res[prop] = {};
            extend(res[prop], parentConfig[prop]);
            extend(res[prop], childConfig[prop]);
          } else if (childConfig[prop] != null) {
            res[prop] = childConfig[prop];
          } else {
            delete res[prop];
          }
        }
      }
      for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
          res[prop] = extend({}, res[prop]);
        }
      }
      return res;
    }
    function Locale(config) {
      if (config != null) {
        this.set(config);
      }
    }
    var keys;
    if (Object.keys) {
      keys = Object.keys;
    } else {
      keys = function(obj) {
        var i, res = [];
        for (i in obj) {
          if (hasOwnProp(obj, i)) {
            res.push(i);
          }
        }
        return res;
      };
    }
    var defaultCalendar = {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    };
    function calendar(key, mom, now2) {
      var output = this._calendar[key] || this._calendar["sameElse"];
      return isFunction(output) ? output.call(mom, now2) : output;
    }
    function zeroFill(number, targetLength, forceSign) {
      var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
      return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }
    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
    function addFormatToken(token2, padded, ordinal2, callback) {
      var func = callback;
      if (typeof callback === "string") {
        func = function() {
          return this[callback]();
        };
      }
      if (token2) {
        formatTokenFunctions[token2] = func;
      }
      if (padded) {
        formatTokenFunctions[padded[0]] = function() {
          return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
      }
      if (ordinal2) {
        formatTokenFunctions[ordinal2] = function() {
          return this.localeData().ordinal(
            func.apply(this, arguments),
            token2
          );
        };
      }
    }
    function removeFormattingTokens(input) {
      if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, "");
      }
      return input.replace(/\\/g, "");
    }
    function makeFormatFunction(format2) {
      var array = format2.match(formattingTokens), i, length;
      for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
          array[i] = formatTokenFunctions[array[i]];
        } else {
          array[i] = removeFormattingTokens(array[i]);
        }
      }
      return function(mom) {
        var output = "", i2;
        for (i2 = 0; i2 < length; i2++) {
          output += isFunction(array[i2]) ? array[i2].call(mom, format2) : array[i2];
        }
        return output;
      };
    }
    function formatMoment(m2, format2) {
      if (!m2.isValid()) {
        return m2.localeData().invalidDate();
      }
      format2 = expandFormat(format2, m2.localeData());
      formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
      return formatFunctions[format2](m2);
    }
    function expandFormat(format2, locale2) {
      var i = 5;
      function replaceLongDateFormatTokens(input) {
        return locale2.longDateFormat(input) || input;
      }
      localFormattingTokens.lastIndex = 0;
      while (i >= 0 && localFormattingTokens.test(format2)) {
        format2 = format2.replace(
          localFormattingTokens,
          replaceLongDateFormatTokens
        );
        localFormattingTokens.lastIndex = 0;
        i -= 1;
      }
      return format2;
    }
    var defaultLongDateFormat = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A"
    };
    function longDateFormat(key) {
      var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
      if (format2 || !formatUpper) {
        return format2;
      }
      this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
        if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
          return tok.slice(1);
        }
        return tok;
      }).join("");
      return this._longDateFormat[key];
    }
    var defaultInvalidDate = "Invalid date";
    function invalidDate() {
      return this._invalidDate;
    }
    var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
    function ordinal(number) {
      return this._ordinal.replace("%d", number);
    }
    var defaultRelativeTime = {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      w: "a week",
      ww: "%d weeks",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    };
    function relativeTime(number, withoutSuffix, string, isFuture) {
      var output = this._relativeTime[string];
      return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
    }
    function pastFuture(diff2, output) {
      var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
      return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
    }
    var aliases = {
      D: "date",
      dates: "date",
      date: "date",
      d: "day",
      days: "day",
      day: "day",
      e: "weekday",
      weekdays: "weekday",
      weekday: "weekday",
      E: "isoWeekday",
      isoweekdays: "isoWeekday",
      isoweekday: "isoWeekday",
      DDD: "dayOfYear",
      dayofyears: "dayOfYear",
      dayofyear: "dayOfYear",
      h: "hour",
      hours: "hour",
      hour: "hour",
      ms: "millisecond",
      milliseconds: "millisecond",
      millisecond: "millisecond",
      m: "minute",
      minutes: "minute",
      minute: "minute",
      M: "month",
      months: "month",
      month: "month",
      Q: "quarter",
      quarters: "quarter",
      quarter: "quarter",
      s: "second",
      seconds: "second",
      second: "second",
      gg: "weekYear",
      weekyears: "weekYear",
      weekyear: "weekYear",
      GG: "isoWeekYear",
      isoweekyears: "isoWeekYear",
      isoweekyear: "isoWeekYear",
      w: "week",
      weeks: "week",
      week: "week",
      W: "isoWeek",
      isoweeks: "isoWeek",
      isoweek: "isoWeek",
      y: "year",
      years: "year",
      year: "year"
    };
    function normalizeUnits(units) {
      return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
    }
    function normalizeObjectUnits(inputObject) {
      var normalizedInput = {}, normalizedProp, prop;
      for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
          normalizedProp = normalizeUnits(prop);
          if (normalizedProp) {
            normalizedInput[normalizedProp] = inputObject[prop];
          }
        }
      }
      return normalizedInput;
    }
    var priorities = {
      date: 9,
      day: 11,
      weekday: 11,
      isoWeekday: 11,
      dayOfYear: 4,
      hour: 13,
      millisecond: 16,
      minute: 14,
      month: 8,
      quarter: 7,
      second: 15,
      weekYear: 1,
      isoWeekYear: 1,
      week: 5,
      isoWeek: 5,
      year: 1
    };
    function getPrioritizedUnits(unitsObj) {
      var units = [], u2;
      for (u2 in unitsObj) {
        if (hasOwnProp(unitsObj, u2)) {
          units.push({ unit: u2, priority: priorities[u2] });
        }
      }
      units.sort(function(a, b) {
        return a.priority - b.priority;
      });
      return units;
    }
    var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, match1to2NoLeadingZero = /^[1-9]\d?/, match1to2HasZero = /^([1-9]\d|\d)/, regexes;
    regexes = {};
    function addRegexToken(token2, regex, strictRegex) {
      regexes[token2] = isFunction(regex) ? regex : function(isStrict, localeData2) {
        return isStrict && strictRegex ? strictRegex : regex;
      };
    }
    function getParseRegexForToken(token2, config) {
      if (!hasOwnProp(regexes, token2)) {
        return new RegExp(unescapeFormat(token2));
      }
      return regexes[token2](config._strict, config._locale);
    }
    function unescapeFormat(s) {
      return regexEscape(
        s.replace("\\", "").replace(
          /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
          function(matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
          }
        )
      );
    }
    function regexEscape(s) {
      return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    function absFloor(number) {
      if (number < 0) {
        return Math.ceil(number) || 0;
      } else {
        return Math.floor(number);
      }
    }
    function toInt(argumentForCoercion) {
      var coercedNumber = +argumentForCoercion, value = 0;
      if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
      }
      return value;
    }
    var tokens = {};
    function addParseToken(token2, callback) {
      var i, func = callback, tokenLen;
      if (typeof token2 === "string") {
        token2 = [token2];
      }
      if (isNumber(callback)) {
        func = function(input, array) {
          array[callback] = toInt(input);
        };
      }
      tokenLen = token2.length;
      for (i = 0; i < tokenLen; i++) {
        tokens[token2[i]] = func;
      }
    }
    function addWeekParseToken(token2, callback) {
      addParseToken(token2, function(input, array, config, token3) {
        config._w = config._w || {};
        callback(input, config._w, config, token3);
      });
    }
    function addTimeToArrayFromToken(token2, input, config) {
      if (input != null && hasOwnProp(tokens, token2)) {
        tokens[token2](input, config._a, config, token2);
      }
    }
    function isLeapYear(year) {
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }
    var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
    addFormatToken("Y", 0, 0, function() {
      var y2 = this.year();
      return y2 <= 9999 ? zeroFill(y2, 4) : "+" + y2;
    });
    addFormatToken(0, ["YY", 2], 0, function() {
      return this.year() % 100;
    });
    addFormatToken(0, ["YYYY", 4], 0, "year");
    addFormatToken(0, ["YYYYY", 5], 0, "year");
    addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
    addRegexToken("Y", matchSigned);
    addRegexToken("YY", match1to2, match2);
    addRegexToken("YYYY", match1to4, match4);
    addRegexToken("YYYYY", match1to6, match6);
    addRegexToken("YYYYYY", match1to6, match6);
    addParseToken(["YYYYY", "YYYYYY"], YEAR);
    addParseToken("YYYY", function(input, array) {
      array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken("YY", function(input, array) {
      array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken("Y", function(input, array) {
      array[YEAR] = parseInt(input, 10);
    });
    function daysInYear(year) {
      return isLeapYear(year) ? 366 : 365;
    }
    hooks.parseTwoDigitYear = function(input) {
      return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
    };
    var getSetYear = makeGetSet("FullYear", true);
    function getIsLeapYear() {
      return isLeapYear(this.year());
    }
    function makeGetSet(unit, keepTime) {
      return function(value) {
        if (value != null) {
          set$1(this, unit, value);
          hooks.updateOffset(this, keepTime);
          return this;
        } else {
          return get$2(this, unit);
        }
      };
    }
    function get$2(mom, unit) {
      if (!mom.isValid()) {
        return NaN;
      }
      var d = mom._d, isUTC = mom._isUTC;
      switch (unit) {
        case "Milliseconds":
          return isUTC ? d.getUTCMilliseconds() : d.getMilliseconds();
        case "Seconds":
          return isUTC ? d.getUTCSeconds() : d.getSeconds();
        case "Minutes":
          return isUTC ? d.getUTCMinutes() : d.getMinutes();
        case "Hours":
          return isUTC ? d.getUTCHours() : d.getHours();
        case "Date":
          return isUTC ? d.getUTCDate() : d.getDate();
        case "Day":
          return isUTC ? d.getUTCDay() : d.getDay();
        case "Month":
          return isUTC ? d.getUTCMonth() : d.getMonth();
        case "FullYear":
          return isUTC ? d.getUTCFullYear() : d.getFullYear();
        default:
          return NaN;
      }
    }
    function set$1(mom, unit, value) {
      var d, isUTC, year, month, date;
      if (!mom.isValid() || isNaN(value)) {
        return;
      }
      d = mom._d;
      isUTC = mom._isUTC;
      switch (unit) {
        case "Milliseconds":
          return void (isUTC ? d.setUTCMilliseconds(value) : d.setMilliseconds(value));
        case "Seconds":
          return void (isUTC ? d.setUTCSeconds(value) : d.setSeconds(value));
        case "Minutes":
          return void (isUTC ? d.setUTCMinutes(value) : d.setMinutes(value));
        case "Hours":
          return void (isUTC ? d.setUTCHours(value) : d.setHours(value));
        case "Date":
          return void (isUTC ? d.setUTCDate(value) : d.setDate(value));
        case "FullYear":
          break;
        default:
          return;
      }
      year = value;
      month = mom.month();
      date = mom.date();
      date = date === 29 && month === 1 && !isLeapYear(year) ? 28 : date;
      void (isUTC ? d.setUTCFullYear(year, month, date) : d.setFullYear(year, month, date));
    }
    function stringGet(units) {
      units = normalizeUnits(units);
      if (isFunction(this[units])) {
        return this[units]();
      }
      return this;
    }
    function stringSet(units, value) {
      if (typeof units === "object") {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units), i, prioritizedLen = prioritized.length;
        for (i = 0; i < prioritizedLen; i++) {
          this[prioritized[i].unit](units[prioritized[i].unit]);
        }
      } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
          return this[units](value);
        }
      }
      return this;
    }
    function mod(n2, x2) {
      return (n2 % x2 + x2) % x2;
    }
    var indexOf;
    if (Array.prototype.indexOf) {
      indexOf = Array.prototype.indexOf;
    } else {
      indexOf = function(o) {
        var i;
        for (i = 0; i < this.length; ++i) {
          if (this[i] === o) {
            return i;
          }
        }
        return -1;
      };
    }
    function daysInMonth(year, month) {
      if (isNaN(year) || isNaN(month)) {
        return NaN;
      }
      var modMonth = mod(month, 12);
      year += (month - modMonth) / 12;
      return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
    }
    addFormatToken("M", ["MM", 2], "Mo", function() {
      return this.month() + 1;
    });
    addFormatToken("MMM", 0, 0, function(format2) {
      return this.localeData().monthsShort(this, format2);
    });
    addFormatToken("MMMM", 0, 0, function(format2) {
      return this.localeData().months(this, format2);
    });
    addRegexToken("M", match1to2, match1to2NoLeadingZero);
    addRegexToken("MM", match1to2, match2);
    addRegexToken("MMM", function(isStrict, locale2) {
      return locale2.monthsShortRegex(isStrict);
    });
    addRegexToken("MMMM", function(isStrict, locale2) {
      return locale2.monthsRegex(isStrict);
    });
    addParseToken(["M", "MM"], function(input, array) {
      array[MONTH] = toInt(input) - 1;
    });
    addParseToken(["MMM", "MMMM"], function(input, array, config, token2) {
      var month = config._locale.monthsParse(input, token2, config._strict);
      if (month != null) {
        array[MONTH] = month;
      } else {
        getParsingFlags(config).invalidMonth = input;
      }
    });
    var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split(
      "_"
    ), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
    function localeMonths(m2, format2) {
      if (!m2) {
        return isArray(this._months) ? this._months : this._months["standalone"];
      }
      return isArray(this._months) ? this._months[m2.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m2.month()];
    }
    function localeMonthsShort(m2, format2) {
      if (!m2) {
        return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
      }
      return isArray(this._monthsShort) ? this._monthsShort[m2.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m2.month()];
    }
    function handleStrictParse(monthName, format2, strict) {
      var i, ii2, mom, llc = monthName.toLocaleLowerCase();
      if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
          mom = createUTC([2e3, i]);
          this._shortMonthsParse[i] = this.monthsShort(
            mom,
            ""
          ).toLocaleLowerCase();
          this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
        }
      }
      if (strict) {
        if (format2 === "MMM") {
          ii2 = indexOf.call(this._shortMonthsParse, llc);
          return ii2 !== -1 ? ii2 : null;
        } else {
          ii2 = indexOf.call(this._longMonthsParse, llc);
          return ii2 !== -1 ? ii2 : null;
        }
      } else {
        if (format2 === "MMM") {
          ii2 = indexOf.call(this._shortMonthsParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._longMonthsParse, llc);
          return ii2 !== -1 ? ii2 : null;
        } else {
          ii2 = indexOf.call(this._longMonthsParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._shortMonthsParse, llc);
          return ii2 !== -1 ? ii2 : null;
        }
      }
    }
    function localeMonthsParse(monthName, format2, strict) {
      var i, mom, regex;
      if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format2, strict);
      }
      if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
      }
      for (i = 0; i < 12; i++) {
        mom = createUTC([2e3, i]);
        if (strict && !this._longMonthsParse[i]) {
          this._longMonthsParse[i] = new RegExp(
            "^" + this.months(mom, "").replace(".", "") + "$",
            "i"
          );
          this._shortMonthsParse[i] = new RegExp(
            "^" + this.monthsShort(mom, "").replace(".", "") + "$",
            "i"
          );
        }
        if (!strict && !this._monthsParse[i]) {
          regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
          this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
        }
        if (strict && format2 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
          return i;
        } else if (strict && format2 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
          return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
          return i;
        }
      }
    }
    function setMonth(mom, value) {
      if (!mom.isValid()) {
        return mom;
      }
      if (typeof value === "string") {
        if (/^\d+$/.test(value)) {
          value = toInt(value);
        } else {
          value = mom.localeData().monthsParse(value);
          if (!isNumber(value)) {
            return mom;
          }
        }
      }
      var month = value, date = mom.date();
      date = date < 29 ? date : Math.min(date, daysInMonth(mom.year(), month));
      void (mom._isUTC ? mom._d.setUTCMonth(month, date) : mom._d.setMonth(month, date));
      return mom;
    }
    function getSetMonth(value) {
      if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
      } else {
        return get$2(this, "Month");
      }
    }
    function getDaysInMonth() {
      return daysInMonth(this.year(), this.month());
    }
    function monthsShortRegex(isStrict) {
      if (this._monthsParseExact) {
        if (!hasOwnProp(this, "_monthsRegex")) {
          computeMonthsParse.call(this);
        }
        if (isStrict) {
          return this._monthsShortStrictRegex;
        } else {
          return this._monthsShortRegex;
        }
      } else {
        if (!hasOwnProp(this, "_monthsShortRegex")) {
          this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
      }
    }
    function monthsRegex(isStrict) {
      if (this._monthsParseExact) {
        if (!hasOwnProp(this, "_monthsRegex")) {
          computeMonthsParse.call(this);
        }
        if (isStrict) {
          return this._monthsStrictRegex;
        } else {
          return this._monthsRegex;
        }
      } else {
        if (!hasOwnProp(this, "_monthsRegex")) {
          this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
      }
    }
    function computeMonthsParse() {
      function cmpLenRev(a, b) {
        return b.length - a.length;
      }
      var shortPieces = [], longPieces = [], mixedPieces = [], i, mom, shortP, longP;
      for (i = 0; i < 12; i++) {
        mom = createUTC([2e3, i]);
        shortP = regexEscape(this.monthsShort(mom, ""));
        longP = regexEscape(this.months(mom, ""));
        shortPieces.push(shortP);
        longPieces.push(longP);
        mixedPieces.push(longP);
        mixedPieces.push(shortP);
      }
      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);
      this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
      this._monthsShortRegex = this._monthsRegex;
      this._monthsStrictRegex = new RegExp(
        "^(" + longPieces.join("|") + ")",
        "i"
      );
      this._monthsShortStrictRegex = new RegExp(
        "^(" + shortPieces.join("|") + ")",
        "i"
      );
    }
    function createDate(y2, m2, d, h, M2, s, ms) {
      var date;
      if (y2 < 100 && y2 >= 0) {
        date = new Date(y2 + 400, m2, d, h, M2, s, ms);
        if (isFinite(date.getFullYear())) {
          date.setFullYear(y2);
        }
      } else {
        date = new Date(y2, m2, d, h, M2, s, ms);
      }
      return date;
    }
    function createUTCDate(y2) {
      var date, args;
      if (y2 < 100 && y2 >= 0) {
        args = Array.prototype.slice.call(arguments);
        args[0] = y2 + 400;
        date = new Date(Date.UTC.apply(null, args));
        if (isFinite(date.getUTCFullYear())) {
          date.setUTCFullYear(y2);
        }
      } else {
        date = new Date(Date.UTC.apply(null, arguments));
      }
      return date;
    }
    function firstWeekOffset(year, dow, doy) {
      var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
      return -fwdlw + fwd - 1;
    }
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
      var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
      if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
      } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
      } else {
        resYear = year;
        resDayOfYear = dayOfYear;
      }
      return {
        year: resYear,
        dayOfYear: resDayOfYear
      };
    }
    function weekOfYear(mom, dow, doy) {
      var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
      if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
      } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
      } else {
        resYear = mom.year();
        resWeek = week;
      }
      return {
        week: resWeek,
        year: resYear
      };
    }
    function weeksInYear(year, dow, doy) {
      var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
      return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }
    addFormatToken("w", ["ww", 2], "wo", "week");
    addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
    addRegexToken("w", match1to2, match1to2NoLeadingZero);
    addRegexToken("ww", match1to2, match2);
    addRegexToken("W", match1to2, match1to2NoLeadingZero);
    addRegexToken("WW", match1to2, match2);
    addWeekParseToken(
      ["w", "ww", "W", "WW"],
      function(input, week, config, token2) {
        week[token2.substr(0, 1)] = toInt(input);
      }
    );
    function localeWeek(mom) {
      return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }
    var defaultLocaleWeek = {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6
      // The week that contains Jan 6th is the first week of the year.
    };
    function localeFirstDayOfWeek() {
      return this._week.dow;
    }
    function localeFirstDayOfYear() {
      return this._week.doy;
    }
    function getSetWeek(input) {
      var week = this.localeData().week(this);
      return input == null ? week : this.add((input - week) * 7, "d");
    }
    function getSetISOWeek(input) {
      var week = weekOfYear(this, 1, 4).week;
      return input == null ? week : this.add((input - week) * 7, "d");
    }
    addFormatToken("d", 0, "do", "day");
    addFormatToken("dd", 0, 0, function(format2) {
      return this.localeData().weekdaysMin(this, format2);
    });
    addFormatToken("ddd", 0, 0, function(format2) {
      return this.localeData().weekdaysShort(this, format2);
    });
    addFormatToken("dddd", 0, 0, function(format2) {
      return this.localeData().weekdays(this, format2);
    });
    addFormatToken("e", 0, 0, "weekday");
    addFormatToken("E", 0, 0, "isoWeekday");
    addRegexToken("d", match1to2);
    addRegexToken("e", match1to2);
    addRegexToken("E", match1to2);
    addRegexToken("dd", function(isStrict, locale2) {
      return locale2.weekdaysMinRegex(isStrict);
    });
    addRegexToken("ddd", function(isStrict, locale2) {
      return locale2.weekdaysShortRegex(isStrict);
    });
    addRegexToken("dddd", function(isStrict, locale2) {
      return locale2.weekdaysRegex(isStrict);
    });
    addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token2) {
      var weekday = config._locale.weekdaysParse(input, token2, config._strict);
      if (weekday != null) {
        week.d = weekday;
      } else {
        getParsingFlags(config).invalidWeekday = input;
      }
    });
    addWeekParseToken(["d", "e", "E"], function(input, week, config, token2) {
      week[token2] = toInt(input);
    });
    function parseWeekday(input, locale2) {
      if (typeof input !== "string") {
        return input;
      }
      if (!isNaN(input)) {
        return parseInt(input, 10);
      }
      input = locale2.weekdaysParse(input);
      if (typeof input === "number") {
        return input;
      }
      return null;
    }
    function parseIsoWeekday(input, locale2) {
      if (typeof input === "string") {
        return locale2.weekdaysParse(input) % 7 || 7;
      }
      return isNaN(input) ? null : input;
    }
    function shiftWeekdays(ws, n2) {
      return ws.slice(n2, 7).concat(ws.slice(0, n2));
    }
    var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
    function localeWeekdays(m2, format2) {
      var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m2 && m2 !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
      return m2 === true ? shiftWeekdays(weekdays, this._week.dow) : m2 ? weekdays[m2.day()] : weekdays;
    }
    function localeWeekdaysShort(m2) {
      return m2 === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m2 ? this._weekdaysShort[m2.day()] : this._weekdaysShort;
    }
    function localeWeekdaysMin(m2) {
      return m2 === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m2 ? this._weekdaysMin[m2.day()] : this._weekdaysMin;
    }
    function handleStrictParse$1(weekdayName, format2, strict) {
      var i, ii2, mom, llc = weekdayName.toLocaleLowerCase();
      if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];
        for (i = 0; i < 7; ++i) {
          mom = createUTC([2e3, 1]).day(i);
          this._minWeekdaysParse[i] = this.weekdaysMin(
            mom,
            ""
          ).toLocaleLowerCase();
          this._shortWeekdaysParse[i] = this.weekdaysShort(
            mom,
            ""
          ).toLocaleLowerCase();
          this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
        }
      }
      if (strict) {
        if (format2 === "dddd") {
          ii2 = indexOf.call(this._weekdaysParse, llc);
          return ii2 !== -1 ? ii2 : null;
        } else if (format2 === "ddd") {
          ii2 = indexOf.call(this._shortWeekdaysParse, llc);
          return ii2 !== -1 ? ii2 : null;
        } else {
          ii2 = indexOf.call(this._minWeekdaysParse, llc);
          return ii2 !== -1 ? ii2 : null;
        }
      } else {
        if (format2 === "dddd") {
          ii2 = indexOf.call(this._weekdaysParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._shortWeekdaysParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._minWeekdaysParse, llc);
          return ii2 !== -1 ? ii2 : null;
        } else if (format2 === "ddd") {
          ii2 = indexOf.call(this._shortWeekdaysParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._weekdaysParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._minWeekdaysParse, llc);
          return ii2 !== -1 ? ii2 : null;
        } else {
          ii2 = indexOf.call(this._minWeekdaysParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._weekdaysParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._shortWeekdaysParse, llc);
          return ii2 !== -1 ? ii2 : null;
        }
      }
    }
    function localeWeekdaysParse(weekdayName, format2, strict) {
      var i, mom, regex;
      if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format2, strict);
      }
      if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
      }
      for (i = 0; i < 7; i++) {
        mom = createUTC([2e3, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
          this._fullWeekdaysParse[i] = new RegExp(
            "^" + this.weekdays(mom, "").replace(".", "\\.?") + "$",
            "i"
          );
          this._shortWeekdaysParse[i] = new RegExp(
            "^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$",
            "i"
          );
          this._minWeekdaysParse[i] = new RegExp(
            "^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$",
            "i"
          );
        }
        if (!this._weekdaysParse[i]) {
          regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
          this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
        }
        if (strict && format2 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (strict && format2 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
          return i;
        }
      }
    }
    function getSetDayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      var day = get$2(this, "Day");
      if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, "d");
      } else {
        return day;
      }
    }
    function getSetLocaleDayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return input == null ? weekday : this.add(input - weekday, "d");
    }
    function getSetISODayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
      } else {
        return this.day() || 7;
      }
    }
    function weekdaysRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, "_weekdaysRegex")) {
          computeWeekdaysParse.call(this);
        }
        if (isStrict) {
          return this._weekdaysStrictRegex;
        } else {
          return this._weekdaysRegex;
        }
      } else {
        if (!hasOwnProp(this, "_weekdaysRegex")) {
          this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
      }
    }
    function weekdaysShortRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, "_weekdaysRegex")) {
          computeWeekdaysParse.call(this);
        }
        if (isStrict) {
          return this._weekdaysShortStrictRegex;
        } else {
          return this._weekdaysShortRegex;
        }
      } else {
        if (!hasOwnProp(this, "_weekdaysShortRegex")) {
          this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
      }
    }
    function weekdaysMinRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, "_weekdaysRegex")) {
          computeWeekdaysParse.call(this);
        }
        if (isStrict) {
          return this._weekdaysMinStrictRegex;
        } else {
          return this._weekdaysMinRegex;
        }
      } else {
        if (!hasOwnProp(this, "_weekdaysMinRegex")) {
          this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
      }
    }
    function computeWeekdaysParse() {
      function cmpLenRev(a, b) {
        return b.length - a.length;
      }
      var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
      for (i = 0; i < 7; i++) {
        mom = createUTC([2e3, 1]).day(i);
        minp = regexEscape(this.weekdaysMin(mom, ""));
        shortp = regexEscape(this.weekdaysShort(mom, ""));
        longp = regexEscape(this.weekdays(mom, ""));
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
      }
      minPieces.sort(cmpLenRev);
      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);
      this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
      this._weekdaysShortRegex = this._weekdaysRegex;
      this._weekdaysMinRegex = this._weekdaysRegex;
      this._weekdaysStrictRegex = new RegExp(
        "^(" + longPieces.join("|") + ")",
        "i"
      );
      this._weekdaysShortStrictRegex = new RegExp(
        "^(" + shortPieces.join("|") + ")",
        "i"
      );
      this._weekdaysMinStrictRegex = new RegExp(
        "^(" + minPieces.join("|") + ")",
        "i"
      );
    }
    function hFormat() {
      return this.hours() % 12 || 12;
    }
    function kFormat() {
      return this.hours() || 24;
    }
    addFormatToken("H", ["HH", 2], 0, "hour");
    addFormatToken("h", ["hh", 2], 0, hFormat);
    addFormatToken("k", ["kk", 2], 0, kFormat);
    addFormatToken("hmm", 0, 0, function() {
      return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });
    addFormatToken("hmmss", 0, 0, function() {
      return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    addFormatToken("Hmm", 0, 0, function() {
      return "" + this.hours() + zeroFill(this.minutes(), 2);
    });
    addFormatToken("Hmmss", 0, 0, function() {
      return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    function meridiem(token2, lowercase) {
      addFormatToken(token2, 0, 0, function() {
        return this.localeData().meridiem(
          this.hours(),
          this.minutes(),
          lowercase
        );
      });
    }
    meridiem("a", true);
    meridiem("A", false);
    function matchMeridiem(isStrict, locale2) {
      return locale2._meridiemParse;
    }
    addRegexToken("a", matchMeridiem);
    addRegexToken("A", matchMeridiem);
    addRegexToken("H", match1to2, match1to2HasZero);
    addRegexToken("h", match1to2, match1to2NoLeadingZero);
    addRegexToken("k", match1to2, match1to2NoLeadingZero);
    addRegexToken("HH", match1to2, match2);
    addRegexToken("hh", match1to2, match2);
    addRegexToken("kk", match1to2, match2);
    addRegexToken("hmm", match3to4);
    addRegexToken("hmmss", match5to6);
    addRegexToken("Hmm", match3to4);
    addRegexToken("Hmmss", match5to6);
    addParseToken(["H", "HH"], HOUR);
    addParseToken(["k", "kk"], function(input, array, config) {
      var kInput = toInt(input);
      array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(["a", "A"], function(input, array, config) {
      config._isPm = config._locale.isPM(input);
      config._meridiem = input;
    });
    addParseToken(["h", "hh"], function(input, array, config) {
      array[HOUR] = toInt(input);
      getParsingFlags(config).bigHour = true;
    });
    addParseToken("hmm", function(input, array, config) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
      getParsingFlags(config).bigHour = true;
    });
    addParseToken("hmmss", function(input, array, config) {
      var pos1 = input.length - 4, pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
      getParsingFlags(config).bigHour = true;
    });
    addParseToken("Hmm", function(input, array, config) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken("Hmmss", function(input, array, config) {
      var pos1 = input.length - 4, pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
    });
    function localeIsPM(input) {
      return (input + "").toLowerCase().charAt(0) === "p";
    }
    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
    function localeMeridiem(hours2, minutes2, isLower) {
      if (hours2 > 11) {
        return isLower ? "pm" : "PM";
      } else {
        return isLower ? "am" : "AM";
      }
    }
    var baseConfig = {
      calendar: defaultCalendar,
      longDateFormat: defaultLongDateFormat,
      invalidDate: defaultInvalidDate,
      ordinal: defaultOrdinal,
      dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
      relativeTime: defaultRelativeTime,
      months: defaultLocaleMonths,
      monthsShort: defaultLocaleMonthsShort,
      week: defaultLocaleWeek,
      weekdays: defaultLocaleWeekdays,
      weekdaysMin: defaultLocaleWeekdaysMin,
      weekdaysShort: defaultLocaleWeekdaysShort,
      meridiemParse: defaultLocaleMeridiemParse
    };
    var locales = {}, localeFamilies = {}, globalLocale;
    function commonPrefix(arr1, arr2) {
      var i, minl = Math.min(arr1.length, arr2.length);
      for (i = 0; i < minl; i += 1) {
        if (arr1[i] !== arr2[i]) {
          return i;
        }
      }
      return minl;
    }
    function normalizeLocale(key) {
      return key ? key.toLowerCase().replace("_", "-") : key;
    }
    function chooseLocale(names) {
      var i = 0, j, next, locale2, split;
      while (i < names.length) {
        split = normalizeLocale(names[i]).split("-");
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split("-") : null;
        while (j > 0) {
          locale2 = loadLocale(split.slice(0, j).join("-"));
          if (locale2) {
            return locale2;
          }
          if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
            break;
          }
          j--;
        }
        i++;
      }
      return globalLocale;
    }
    function isLocaleNameSane(name) {
      return !!(name && name.match("^[^/\\\\]*$"));
    }
    function loadLocale(name) {
      var oldLocale = null, aliasedRequire;
      if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports && isLocaleNameSane(name)) {
        try {
          oldLocale = globalLocale._abbr;
          aliasedRequire = require;
          aliasedRequire("./locale/" + name);
          getSetGlobalLocale(oldLocale);
        } catch (e) {
          locales[name] = null;
        }
      }
      return locales[name];
    }
    function getSetGlobalLocale(key, values) {
      var data;
      if (key) {
        if (isUndefined(values)) {
          data = getLocale(key);
        } else {
          data = defineLocale(key, values);
        }
        if (data) {
          globalLocale = data;
        } else {
          if (typeof console !== "undefined" && console.warn) {
            console.warn(
              "Locale " + key + " not found. Did you forget to load it?"
            );
          }
        }
      }
      return globalLocale._abbr;
    }
    function defineLocale(name, config) {
      if (config !== null) {
        var locale2, parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
          deprecateSimple(
            "defineLocaleOverride",
            "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
          );
          parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
          if (locales[config.parentLocale] != null) {
            parentConfig = locales[config.parentLocale]._config;
          } else {
            locale2 = loadLocale(config.parentLocale);
            if (locale2 != null) {
              parentConfig = locale2._config;
            } else {
              if (!localeFamilies[config.parentLocale]) {
                localeFamilies[config.parentLocale] = [];
              }
              localeFamilies[config.parentLocale].push({
                name,
                config
              });
              return null;
            }
          }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));
        if (localeFamilies[name]) {
          localeFamilies[name].forEach(function(x2) {
            defineLocale(x2.name, x2.config);
          });
        }
        getSetGlobalLocale(name);
        return locales[name];
      } else {
        delete locales[name];
        return null;
      }
    }
    function updateLocale(name, config) {
      if (config != null) {
        var locale2, tmpLocale, parentConfig = baseConfig;
        if (locales[name] != null && locales[name].parentLocale != null) {
          locales[name].set(mergeConfigs(locales[name]._config, config));
        } else {
          tmpLocale = loadLocale(name);
          if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
          }
          config = mergeConfigs(parentConfig, config);
          if (tmpLocale == null) {
            config.abbr = name;
          }
          locale2 = new Locale(config);
          locale2.parentLocale = locales[name];
          locales[name] = locale2;
        }
        getSetGlobalLocale(name);
      } else {
        if (locales[name] != null) {
          if (locales[name].parentLocale != null) {
            locales[name] = locales[name].parentLocale;
            if (name === getSetGlobalLocale()) {
              getSetGlobalLocale(name);
            }
          } else if (locales[name] != null) {
            delete locales[name];
          }
        }
      }
      return locales[name];
    }
    function getLocale(key) {
      var locale2;
      if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
      }
      if (!key) {
        return globalLocale;
      }
      if (!isArray(key)) {
        locale2 = loadLocale(key);
        if (locale2) {
          return locale2;
        }
        key = [key];
      }
      return chooseLocale(key);
    }
    function listLocales() {
      return keys(locales);
    }
    function checkOverflow(m2) {
      var overflow, a = m2._a;
      if (a && getParsingFlags(m2).overflow === -2) {
        overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
        if (getParsingFlags(m2)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
          overflow = DATE;
        }
        if (getParsingFlags(m2)._overflowWeeks && overflow === -1) {
          overflow = WEEK;
        }
        if (getParsingFlags(m2)._overflowWeekday && overflow === -1) {
          overflow = WEEKDAY;
        }
        getParsingFlags(m2).overflow = overflow;
      }
      return m2;
    }
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
      ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
      ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
      ["YYYY-DDD", /\d{4}-\d{3}/],
      ["YYYY-MM", /\d{4}-\d\d/, false],
      ["YYYYYYMMDD", /[+-]\d{10}/],
      ["YYYYMMDD", /\d{8}/],
      ["GGGG[W]WWE", /\d{4}W\d{3}/],
      ["GGGG[W]WW", /\d{4}W\d{2}/, false],
      ["YYYYDDD", /\d{7}/],
      ["YYYYMM", /\d{6}/, false],
      ["YYYY", /\d{4}/, false]
    ], isoTimes = [
      ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
      ["HH:mm:ss", /\d\d:\d\d:\d\d/],
      ["HH:mm", /\d\d:\d\d/],
      ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
      ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
      ["HHmmss", /\d\d\d\d\d\d/],
      ["HHmm", /\d\d\d\d/],
      ["HH", /\d\d/]
    ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
      UT: 0,
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60
    };
    function configFromISO(config) {
      var i, l2, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
      if (match) {
        getParsingFlags(config).iso = true;
        for (i = 0, l2 = isoDatesLen; i < l2; i++) {
          if (isoDates[i][1].exec(match[1])) {
            dateFormat = isoDates[i][0];
            allowTime = isoDates[i][2] !== false;
            break;
          }
        }
        if (dateFormat == null) {
          config._isValid = false;
          return;
        }
        if (match[3]) {
          for (i = 0, l2 = isoTimesLen; i < l2; i++) {
            if (isoTimes[i][1].exec(match[3])) {
              timeFormat = (match[2] || " ") + isoTimes[i][0];
              break;
            }
          }
          if (timeFormat == null) {
            config._isValid = false;
            return;
          }
        }
        if (!allowTime && timeFormat != null) {
          config._isValid = false;
          return;
        }
        if (match[4]) {
          if (tzRegex.exec(match[4])) {
            tzFormat = "Z";
          } else {
            config._isValid = false;
            return;
          }
        }
        config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
        configFromStringAndFormat(config);
      } else {
        config._isValid = false;
      }
    }
    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
      var result = [
        untruncateYear(yearStr),
        defaultLocaleMonthsShort.indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10)
      ];
      if (secondStr) {
        result.push(parseInt(secondStr, 10));
      }
      return result;
    }
    function untruncateYear(yearStr) {
      var year = parseInt(yearStr, 10);
      if (year <= 49) {
        return 2e3 + year;
      } else if (year <= 999) {
        return 1900 + year;
      }
      return year;
    }
    function preprocessRFC2822(s) {
      return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
    }
    function checkWeekday(weekdayStr, parsedInput, config) {
      if (weekdayStr) {
        var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(
          parsedInput[0],
          parsedInput[1],
          parsedInput[2]
        ).getDay();
        if (weekdayProvided !== weekdayActual) {
          getParsingFlags(config).weekdayMismatch = true;
          config._isValid = false;
          return false;
        }
      }
      return true;
    }
    function calculateOffset(obsOffset, militaryOffset, numOffset) {
      if (obsOffset) {
        return obsOffsets[obsOffset];
      } else if (militaryOffset) {
        return 0;
      } else {
        var hm = parseInt(numOffset, 10), m2 = hm % 100, h = (hm - m2) / 100;
        return h * 60 + m2;
      }
    }
    function configFromRFC2822(config) {
      var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
      if (match) {
        parsedArray = extractFromRFC2822Strings(
          match[4],
          match[3],
          match[2],
          match[5],
          match[6],
          match[7]
        );
        if (!checkWeekday(match[1], parsedArray, config)) {
          return;
        }
        config._a = parsedArray;
        config._tzm = calculateOffset(match[8], match[9], match[10]);
        config._d = createUTCDate.apply(null, config._a);
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        getParsingFlags(config).rfc2822 = true;
      } else {
        config._isValid = false;
      }
    }
    function configFromString(config) {
      var matched = aspNetJsonRegex.exec(config._i);
      if (matched !== null) {
        config._d = /* @__PURE__ */ new Date(+matched[1]);
        return;
      }
      configFromISO(config);
      if (config._isValid === false) {
        delete config._isValid;
      } else {
        return;
      }
      configFromRFC2822(config);
      if (config._isValid === false) {
        delete config._isValid;
      } else {
        return;
      }
      if (config._strict) {
        config._isValid = false;
      } else {
        hooks.createFromInputFallback(config);
      }
    }
    hooks.createFromInputFallback = deprecate(
      "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
      function(config) {
        config._d = /* @__PURE__ */ new Date(config._i + (config._useUTC ? " UTC" : ""));
      }
    );
    function defaults(a, b, c) {
      if (a != null) {
        return a;
      }
      if (b != null) {
        return b;
      }
      return c;
    }
    function currentDateArray(config) {
      var nowValue = new Date(hooks.now());
      if (config._useUTC) {
        return [
          nowValue.getUTCFullYear(),
          nowValue.getUTCMonth(),
          nowValue.getUTCDate()
        ];
      }
      return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }
    function configFromArray(config) {
      var i, date, input = [], currentDate, expectedWeekday, yearToUse;
      if (config._d) {
        return;
      }
      currentDate = currentDateArray(config);
      if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
      }
      if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
          getParsingFlags(config)._overflowDayOfYear = true;
        }
        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
      }
      for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
      }
      for (; i < 7; i++) {
        config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
      }
      if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
      }
      config._d = (config._useUTC ? createUTCDate : createDate).apply(
        null,
        input
      );
      expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
      if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
      }
      if (config._nextDay) {
        config._a[HOUR] = 24;
      }
      if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
        getParsingFlags(config).weekdayMismatch = true;
      }
    }
    function dayOfYearFromWeekInfo(config) {
      var w2, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
      w2 = config._w;
      if (w2.GG != null || w2.W != null || w2.E != null) {
        dow = 1;
        doy = 4;
        weekYear = defaults(
          w2.GG,
          config._a[YEAR],
          weekOfYear(createLocal(), 1, 4).year
        );
        week = defaults(w2.W, 1);
        weekday = defaults(w2.E, 1);
        if (weekday < 1 || weekday > 7) {
          weekdayOverflow = true;
        }
      } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;
        curWeek = weekOfYear(createLocal(), dow, doy);
        weekYear = defaults(w2.gg, config._a[YEAR], curWeek.year);
        week = defaults(w2.w, curWeek.week);
        if (w2.d != null) {
          weekday = w2.d;
          if (weekday < 0 || weekday > 6) {
            weekdayOverflow = true;
          }
        } else if (w2.e != null) {
          weekday = w2.e + dow;
          if (w2.e < 0 || w2.e > 6) {
            weekdayOverflow = true;
          }
        } else {
          weekday = dow;
        }
      }
      if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
      } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
      } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
      }
    }
    hooks.ISO_8601 = function() {
    };
    hooks.RFC_2822 = function() {
    };
    function configFromStringAndFormat(config) {
      if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
      }
      if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
      }
      config._a = [];
      getParsingFlags(config).empty = true;
      var string = "" + config._i, i, parsedInput, tokens2, token2, skipped, stringLength = string.length, totalParsedInputLength = 0, era, tokenLen;
      tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
      tokenLen = tokens2.length;
      for (i = 0; i < tokenLen; i++) {
        token2 = tokens2[i];
        parsedInput = (string.match(getParseRegexForToken(token2, config)) || [])[0];
        if (parsedInput) {
          skipped = string.substr(0, string.indexOf(parsedInput));
          if (skipped.length > 0) {
            getParsingFlags(config).unusedInput.push(skipped);
          }
          string = string.slice(
            string.indexOf(parsedInput) + parsedInput.length
          );
          totalParsedInputLength += parsedInput.length;
        }
        if (formatTokenFunctions[token2]) {
          if (parsedInput) {
            getParsingFlags(config).empty = false;
          } else {
            getParsingFlags(config).unusedTokens.push(token2);
          }
          addTimeToArrayFromToken(token2, parsedInput, config);
        } else if (config._strict && !parsedInput) {
          getParsingFlags(config).unusedTokens.push(token2);
        }
      }
      getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
      if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
      }
      if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = void 0;
      }
      getParsingFlags(config).parsedDateParts = config._a.slice(0);
      getParsingFlags(config).meridiem = config._meridiem;
      config._a[HOUR] = meridiemFixWrap(
        config._locale,
        config._a[HOUR],
        config._meridiem
      );
      era = getParsingFlags(config).era;
      if (era !== null) {
        config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
      }
      configFromArray(config);
      checkOverflow(config);
    }
    function meridiemFixWrap(locale2, hour, meridiem2) {
      var isPm;
      if (meridiem2 == null) {
        return hour;
      }
      if (locale2.meridiemHour != null) {
        return locale2.meridiemHour(hour, meridiem2);
      } else if (locale2.isPM != null) {
        isPm = locale2.isPM(meridiem2);
        if (isPm && hour < 12) {
          hour += 12;
        }
        if (!isPm && hour === 12) {
          hour = 0;
        }
        return hour;
      } else {
        return hour;
      }
    }
    function configFromStringAndArray(config) {
      var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config._f.length;
      if (configfLen === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = /* @__PURE__ */ new Date(NaN);
        return;
      }
      for (i = 0; i < configfLen; i++) {
        currentScore = 0;
        validFormatFound = false;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
          tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);
        if (isValid(tempConfig)) {
          validFormatFound = true;
        }
        currentScore += getParsingFlags(tempConfig).charsLeftOver;
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
        getParsingFlags(tempConfig).score = currentScore;
        if (!bestFormatIsValid) {
          if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
            if (validFormatFound) {
              bestFormatIsValid = true;
            }
          }
        } else {
          if (currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
          }
        }
      }
      extend(config, bestMoment || tempConfig);
    }
    function configFromObject(config) {
      if (config._d) {
        return;
      }
      var i = normalizeObjectUnits(config._i), dayOrDate = i.day === void 0 ? i.date : i.day;
      config._a = map(
        [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
        function(obj) {
          return obj && parseInt(obj, 10);
        }
      );
      configFromArray(config);
    }
    function createFromConfig(config) {
      var res = new Moment(checkOverflow(prepareConfig(config)));
      if (res._nextDay) {
        res.add(1, "d");
        res._nextDay = void 0;
      }
      return res;
    }
    function prepareConfig(config) {
      var input = config._i, format2 = config._f;
      config._locale = config._locale || getLocale(config._l);
      if (input === null || format2 === void 0 && input === "") {
        return createInvalid({ nullInput: true });
      }
      if (typeof input === "string") {
        config._i = input = config._locale.preparse(input);
      }
      if (isMoment(input)) {
        return new Moment(checkOverflow(input));
      } else if (isDate(input)) {
        config._d = input;
      } else if (isArray(format2)) {
        configFromStringAndArray(config);
      } else if (format2) {
        configFromStringAndFormat(config);
      } else {
        configFromInput(config);
      }
      if (!isValid(config)) {
        config._d = null;
      }
      return config;
    }
    function configFromInput(config) {
      var input = config._i;
      if (isUndefined(input)) {
        config._d = new Date(hooks.now());
      } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
      } else if (typeof input === "string") {
        configFromString(config);
      } else if (isArray(input)) {
        config._a = map(input.slice(0), function(obj) {
          return parseInt(obj, 10);
        });
        configFromArray(config);
      } else if (isObject(input)) {
        configFromObject(config);
      } else if (isNumber(input)) {
        config._d = new Date(input);
      } else {
        hooks.createFromInputFallback(config);
      }
    }
    function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
      var c = {};
      if (format2 === true || format2 === false) {
        strict = format2;
        format2 = void 0;
      }
      if (locale2 === true || locale2 === false) {
        strict = locale2;
        locale2 = void 0;
      }
      if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
        input = void 0;
      }
      c._isAMomentObject = true;
      c._useUTC = c._isUTC = isUTC;
      c._l = locale2;
      c._i = input;
      c._f = format2;
      c._strict = strict;
      return createFromConfig(c);
    }
    function createLocal(input, format2, locale2, strict) {
      return createLocalOrUTC(input, format2, locale2, strict, false);
    }
    var prototypeMin = deprecate(
      "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
      function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
          return other < this ? this : other;
        } else {
          return createInvalid();
        }
      }
    ), prototypeMax = deprecate(
      "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
      function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
          return other > this ? this : other;
        } else {
          return createInvalid();
        }
      }
    );
    function pickBy(fn, moments) {
      var res, i;
      if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
      }
      if (!moments.length) {
        return createLocal();
      }
      res = moments[0];
      for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
          res = moments[i];
        }
      }
      return res;
    }
    function min() {
      var args = [].slice.call(arguments, 0);
      return pickBy("isBefore", args);
    }
    function max() {
      var args = [].slice.call(arguments, 0);
      return pickBy("isAfter", args);
    }
    var now = function() {
      return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
    };
    var ordering = [
      "year",
      "quarter",
      "month",
      "week",
      "day",
      "hour",
      "minute",
      "second",
      "millisecond"
    ];
    function isDurationValid(m2) {
      var key, unitHasDecimal = false, i, orderLen = ordering.length;
      for (key in m2) {
        if (hasOwnProp(m2, key) && !(indexOf.call(ordering, key) !== -1 && (m2[key] == null || !isNaN(m2[key])))) {
          return false;
        }
      }
      for (i = 0; i < orderLen; ++i) {
        if (m2[ordering[i]]) {
          if (unitHasDecimal) {
            return false;
          }
          if (parseFloat(m2[ordering[i]]) !== toInt(m2[ordering[i]])) {
            unitHasDecimal = true;
          }
        }
      }
      return true;
    }
    function isValid$1() {
      return this._isValid;
    }
    function createInvalid$1() {
      return createDuration(NaN);
    }
    function Duration(duration) {
      var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
      this._isValid = isDurationValid(normalizedInput);
      this._milliseconds = +milliseconds2 + seconds2 * 1e3 + // 1000
      minutes2 * 6e4 + // 1000 * 60
      hours2 * 1e3 * 60 * 60;
      this._days = +days2 + weeks2 * 7;
      this._months = +months2 + quarters * 3 + years2 * 12;
      this._data = {};
      this._locale = getLocale();
      this._bubble();
    }
    function isDuration(obj) {
      return obj instanceof Duration;
    }
    function absRound(number) {
      if (number < 0) {
        return Math.round(-1 * number) * -1;
      } else {
        return Math.round(number);
      }
    }
    function compareArrays(array1, array2, dontConvert) {
      var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
      for (i = 0; i < len; i++) {
        if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
          diffs++;
        }
      }
      return diffs + lengthDiff;
    }
    function offset(token2, separator) {
      addFormatToken(token2, 0, 0, function() {
        var offset2 = this.utcOffset(), sign2 = "+";
        if (offset2 < 0) {
          offset2 = -offset2;
          sign2 = "-";
        }
        return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
      });
    }
    offset("Z", ":");
    offset("ZZ", "");
    addRegexToken("Z", matchShortOffset);
    addRegexToken("ZZ", matchShortOffset);
    addParseToken(["Z", "ZZ"], function(input, array, config) {
      config._useUTC = true;
      config._tzm = offsetFromString(matchShortOffset, input);
    });
    var chunkOffset = /([\+\-]|\d\d)/gi;
    function offsetFromString(matcher, string) {
      var matches = (string || "").match(matcher), chunk, parts, minutes2;
      if (matches === null) {
        return null;
      }
      chunk = matches[matches.length - 1] || [];
      parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
      minutes2 = +(parts[1] * 60) + toInt(parts[2]);
      return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
    }
    function cloneWithOffset(input, model) {
      var res, diff2;
      if (model._isUTC) {
        res = model.clone();
        diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        res._d.setTime(res._d.valueOf() + diff2);
        hooks.updateOffset(res, false);
        return res;
      } else {
        return createLocal(input).local();
      }
    }
    function getDateOffset(m2) {
      return -Math.round(m2._d.getTimezoneOffset());
    }
    hooks.updateOffset = function() {
    };
    function getSetOffset(input, keepLocalTime, keepMinutes) {
      var offset2 = this._offset || 0, localAdjust;
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      if (input != null) {
        if (typeof input === "string") {
          input = offsetFromString(matchShortOffset, input);
          if (input === null) {
            return this;
          }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
          input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
          localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
          this.add(localAdjust, "m");
        }
        if (offset2 !== input) {
          if (!keepLocalTime || this._changeInProgress) {
            addSubtract(
              this,
              createDuration(input - offset2, "m"),
              1,
              false
            );
          } else if (!this._changeInProgress) {
            this._changeInProgress = true;
            hooks.updateOffset(this, true);
            this._changeInProgress = null;
          }
        }
        return this;
      } else {
        return this._isUTC ? offset2 : getDateOffset(this);
      }
    }
    function getSetZone(input, keepLocalTime) {
      if (input != null) {
        if (typeof input !== "string") {
          input = -input;
        }
        this.utcOffset(input, keepLocalTime);
        return this;
      } else {
        return -this.utcOffset();
      }
    }
    function setOffsetToUTC(keepLocalTime) {
      return this.utcOffset(0, keepLocalTime);
    }
    function setOffsetToLocal(keepLocalTime) {
      if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;
        if (keepLocalTime) {
          this.subtract(getDateOffset(this), "m");
        }
      }
      return this;
    }
    function setOffsetToParsedOffset() {
      if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
      } else if (typeof this._i === "string") {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
          this.utcOffset(tZone);
        } else {
          this.utcOffset(0, true);
        }
      }
      return this;
    }
    function hasAlignedHourOffset(input) {
      if (!this.isValid()) {
        return false;
      }
      input = input ? createLocal(input).utcOffset() : 0;
      return (this.utcOffset() - input) % 60 === 0;
    }
    function isDaylightSavingTime() {
      return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }
    function isDaylightSavingTimeShifted() {
      if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
      }
      var c = {}, other;
      copyConfig(c, this);
      c = prepareConfig(c);
      if (c._a) {
        other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
      } else {
        this._isDSTShifted = false;
      }
      return this._isDSTShifted;
    }
    function isLocal() {
      return this.isValid() ? !this._isUTC : false;
    }
    function isUtcOffset() {
      return this.isValid() ? this._isUTC : false;
    }
    function isUtc() {
      return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }
    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function createDuration(input, key) {
      var duration = input, match = null, sign2, ret, diffRes;
      if (isDuration(input)) {
        duration = {
          ms: input._milliseconds,
          d: input._days,
          M: input._months
        };
      } else if (isNumber(input) || !isNaN(+input)) {
        duration = {};
        if (key) {
          duration[key] = +input;
        } else {
          duration.milliseconds = +input;
        }
      } else if (match = aspNetRegex.exec(input)) {
        sign2 = match[1] === "-" ? -1 : 1;
        duration = {
          y: 0,
          d: toInt(match[DATE]) * sign2,
          h: toInt(match[HOUR]) * sign2,
          m: toInt(match[MINUTE]) * sign2,
          s: toInt(match[SECOND]) * sign2,
          ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
          // the millisecond decimal point is included in the match
        };
      } else if (match = isoRegex.exec(input)) {
        sign2 = match[1] === "-" ? -1 : 1;
        duration = {
          y: parseIso(match[2], sign2),
          M: parseIso(match[3], sign2),
          w: parseIso(match[4], sign2),
          d: parseIso(match[5], sign2),
          h: parseIso(match[6], sign2),
          m: parseIso(match[7], sign2),
          s: parseIso(match[8], sign2)
        };
      } else if (duration == null) {
        duration = {};
      } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
        diffRes = momentsDifference(
          createLocal(duration.from),
          createLocal(duration.to)
        );
        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
      }
      ret = new Duration(duration);
      if (isDuration(input) && hasOwnProp(input, "_locale")) {
        ret._locale = input._locale;
      }
      if (isDuration(input) && hasOwnProp(input, "_isValid")) {
        ret._isValid = input._isValid;
      }
      return ret;
    }
    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;
    function parseIso(inp, sign2) {
      var res = inp && parseFloat(inp.replace(",", "."));
      return (isNaN(res) ? 0 : res) * sign2;
    }
    function positiveMomentsDifference(base, other) {
      var res = {};
      res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
      if (base.clone().add(res.months, "M").isAfter(other)) {
        --res.months;
      }
      res.milliseconds = +other - +base.clone().add(res.months, "M");
      return res;
    }
    function momentsDifference(base, other) {
      var res;
      if (!(base.isValid() && other.isValid())) {
        return { milliseconds: 0, months: 0 };
      }
      other = cloneWithOffset(other, base);
      if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
      } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
      }
      return res;
    }
    function createAdder(direction, name) {
      return function(val, period) {
        var dur, tmp;
        if (period !== null && !isNaN(+period)) {
          deprecateSimple(
            name,
            "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
          );
          tmp = val;
          val = period;
          period = tmp;
        }
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
      };
    }
    function addSubtract(mom, duration, isAdding, updateOffset) {
      var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
      if (!mom.isValid()) {
        return;
      }
      updateOffset = updateOffset == null ? true : updateOffset;
      if (months2) {
        setMonth(mom, get$2(mom, "Month") + months2 * isAdding);
      }
      if (days2) {
        set$1(mom, "Date", get$2(mom, "Date") + days2 * isAdding);
      }
      if (milliseconds2) {
        mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
      }
      if (updateOffset) {
        hooks.updateOffset(mom, days2 || months2);
      }
    }
    var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
    function isString(input) {
      return typeof input === "string" || input instanceof String;
    }
    function isMomentInput(input) {
      return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
    }
    function isMomentInputObject(input) {
      var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
        "years",
        "year",
        "y",
        "months",
        "month",
        "M",
        "days",
        "day",
        "d",
        "dates",
        "date",
        "D",
        "hours",
        "hour",
        "h",
        "minutes",
        "minute",
        "m",
        "seconds",
        "second",
        "s",
        "milliseconds",
        "millisecond",
        "ms"
      ], i, property, propertyLen = properties.length;
      for (i = 0; i < propertyLen; i += 1) {
        property = properties[i];
        propertyTest = propertyTest || hasOwnProp(input, property);
      }
      return objectTest && propertyTest;
    }
    function isNumberOrStringArray(input) {
      var arrayTest = isArray(input), dataTypeTest = false;
      if (arrayTest) {
        dataTypeTest = input.filter(function(item) {
          return !isNumber(item) && isString(input);
        }).length === 0;
      }
      return arrayTest && dataTypeTest;
    }
    function isCalendarSpec(input) {
      var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
        "sameDay",
        "nextDay",
        "lastDay",
        "nextWeek",
        "lastWeek",
        "sameElse"
      ], i, property;
      for (i = 0; i < properties.length; i += 1) {
        property = properties[i];
        propertyTest = propertyTest || hasOwnProp(input, property);
      }
      return objectTest && propertyTest;
    }
    function getCalendarFormat(myMoment, now2) {
      var diff2 = myMoment.diff(now2, "days", true);
      return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
    }
    function calendar$1(time, formats) {
      if (arguments.length === 1) {
        if (!arguments[0]) {
          time = void 0;
          formats = void 0;
        } else if (isMomentInput(arguments[0])) {
          time = arguments[0];
          formats = void 0;
        } else if (isCalendarSpec(arguments[0])) {
          formats = arguments[0];
          time = void 0;
        }
      }
      var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
      return this.format(
        output || this.localeData().calendar(format2, this, createLocal(now2))
      );
    }
    function clone() {
      return new Moment(this);
    }
    function isAfter(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input);
      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }
      units = normalizeUnits(units) || "millisecond";
      if (units === "millisecond") {
        return this.valueOf() > localInput.valueOf();
      } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
      }
    }
    function isBefore(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input);
      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }
      units = normalizeUnits(units) || "millisecond";
      if (units === "millisecond") {
        return this.valueOf() < localInput.valueOf();
      } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
      }
    }
    function isBetween(from2, to2, units, inclusivity) {
      var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
      if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
        return false;
      }
      inclusivity = inclusivity || "()";
      return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }
    function isSame(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input), inputMs;
      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }
      units = normalizeUnits(units) || "millisecond";
      if (units === "millisecond") {
        return this.valueOf() === localInput.valueOf();
      } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
      }
    }
    function isSameOrAfter(input, units) {
      return this.isSame(input, units) || this.isAfter(input, units);
    }
    function isSameOrBefore(input, units) {
      return this.isSame(input, units) || this.isBefore(input, units);
    }
    function diff(input, units, asFloat) {
      var that, zoneDelta, output;
      if (!this.isValid()) {
        return NaN;
      }
      that = cloneWithOffset(input, this);
      if (!that.isValid()) {
        return NaN;
      }
      zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
      units = normalizeUnits(units);
      switch (units) {
        case "year":
          output = monthDiff(this, that) / 12;
          break;
        case "month":
          output = monthDiff(this, that);
          break;
        case "quarter":
          output = monthDiff(this, that) / 3;
          break;
        case "second":
          output = (this - that) / 1e3;
          break;
        case "minute":
          output = (this - that) / 6e4;
          break;
        case "hour":
          output = (this - that) / 36e5;
          break;
        case "day":
          output = (this - that - zoneDelta) / 864e5;
          break;
        case "week":
          output = (this - that - zoneDelta) / 6048e5;
          break;
        default:
          output = this - that;
      }
      return asFloat ? output : absFloor(output);
    }
    function monthDiff(a, b) {
      if (a.date() < b.date()) {
        return -monthDiff(b, a);
      }
      var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
      if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
        adjust = (b - anchor) / (anchor - anchor2);
      } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
        adjust = (b - anchor) / (anchor2 - anchor);
      }
      return -(wholeMonthDiff + adjust) || 0;
    }
    hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    function toString() {
      return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }
    function toISOString(keepOffset) {
      if (!this.isValid()) {
        return null;
      }
      var utc = keepOffset !== true, m2 = utc ? this.clone().utc() : this;
      if (m2.year() < 0 || m2.year() > 9999) {
        return formatMoment(
          m2,
          utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
        );
      }
      if (isFunction(Date.prototype.toISOString)) {
        if (utc) {
          return this.toDate().toISOString();
        } else {
          return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m2, "Z"));
        }
      }
      return formatMoment(
        m2,
        utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
      );
    }
    function inspect() {
      if (!this.isValid()) {
        return "moment.invalid(/* " + this._i + " */)";
      }
      var func = "moment", zone = "", prefix, year, datetime, suffix;
      if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
        zone = "Z";
      }
      prefix = "[" + func + '("]';
      year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
      datetime = "-MM-DD[T]HH:mm:ss.SSS";
      suffix = zone + '[")]';
      return this.format(prefix + year + datetime + suffix);
    }
    function format(inputString) {
      if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
      }
      var output = formatMoment(this, inputString);
      return this.localeData().postformat(output);
    }
    function from(time, withoutSuffix) {
      if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
        return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
      } else {
        return this.localeData().invalidDate();
      }
    }
    function fromNow(withoutSuffix) {
      return this.from(createLocal(), withoutSuffix);
    }
    function to$1(time, withoutSuffix) {
      if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
        return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
      } else {
        return this.localeData().invalidDate();
      }
    }
    function toNow(withoutSuffix) {
      return this.to(createLocal(), withoutSuffix);
    }
    function locale(key) {
      var newLocaleData;
      if (key === void 0) {
        return this._locale._abbr;
      } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
          this._locale = newLocaleData;
        }
        return this;
      }
    }
    var lang = deprecate(
      "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
      function(key) {
        if (key === void 0) {
          return this.localeData();
        } else {
          return this.locale(key);
        }
      }
    );
    function localeData() {
      return this._locale;
    }
    var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
    function mod$1(dividend, divisor) {
      return (dividend % divisor + divisor) % divisor;
    }
    function localStartOfDate(y2, m2, d) {
      if (y2 < 100 && y2 >= 0) {
        return new Date(y2 + 400, m2, d) - MS_PER_400_YEARS;
      } else {
        return new Date(y2, m2, d).valueOf();
      }
    }
    function utcStartOfDate(y2, m2, d) {
      if (y2 < 100 && y2 >= 0) {
        return Date.UTC(y2 + 400, m2, d) - MS_PER_400_YEARS;
      } else {
        return Date.UTC(y2, m2, d);
      }
    }
    function startOf(units) {
      var time, startOfDate;
      units = normalizeUnits(units);
      if (units === void 0 || units === "millisecond" || !this.isValid()) {
        return this;
      }
      startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
      switch (units) {
        case "year":
          time = startOfDate(this.year(), 0, 1);
          break;
        case "quarter":
          time = startOfDate(
            this.year(),
            this.month() - this.month() % 3,
            1
          );
          break;
        case "month":
          time = startOfDate(this.year(), this.month(), 1);
          break;
        case "week":
          time = startOfDate(
            this.year(),
            this.month(),
            this.date() - this.weekday()
          );
          break;
        case "isoWeek":
          time = startOfDate(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1)
          );
          break;
        case "day":
        case "date":
          time = startOfDate(this.year(), this.month(), this.date());
          break;
        case "hour":
          time = this._d.valueOf();
          time -= mod$1(
            time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
            MS_PER_HOUR
          );
          break;
        case "minute":
          time = this._d.valueOf();
          time -= mod$1(time, MS_PER_MINUTE);
          break;
        case "second":
          time = this._d.valueOf();
          time -= mod$1(time, MS_PER_SECOND);
          break;
      }
      this._d.setTime(time);
      hooks.updateOffset(this, true);
      return this;
    }
    function endOf(units) {
      var time, startOfDate;
      units = normalizeUnits(units);
      if (units === void 0 || units === "millisecond" || !this.isValid()) {
        return this;
      }
      startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
      switch (units) {
        case "year":
          time = startOfDate(this.year() + 1, 0, 1) - 1;
          break;
        case "quarter":
          time = startOfDate(
            this.year(),
            this.month() - this.month() % 3 + 3,
            1
          ) - 1;
          break;
        case "month":
          time = startOfDate(this.year(), this.month() + 1, 1) - 1;
          break;
        case "week":
          time = startOfDate(
            this.year(),
            this.month(),
            this.date() - this.weekday() + 7
          ) - 1;
          break;
        case "isoWeek":
          time = startOfDate(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1) + 7
          ) - 1;
          break;
        case "day":
        case "date":
          time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
          break;
        case "hour":
          time = this._d.valueOf();
          time += MS_PER_HOUR - mod$1(
            time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
            MS_PER_HOUR
          ) - 1;
          break;
        case "minute":
          time = this._d.valueOf();
          time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
          break;
        case "second":
          time = this._d.valueOf();
          time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
          break;
      }
      this._d.setTime(time);
      hooks.updateOffset(this, true);
      return this;
    }
    function valueOf() {
      return this._d.valueOf() - (this._offset || 0) * 6e4;
    }
    function unix() {
      return Math.floor(this.valueOf() / 1e3);
    }
    function toDate() {
      return new Date(this.valueOf());
    }
    function toArray() {
      var m2 = this;
      return [
        m2.year(),
        m2.month(),
        m2.date(),
        m2.hour(),
        m2.minute(),
        m2.second(),
        m2.millisecond()
      ];
    }
    function toObject() {
      var m2 = this;
      return {
        years: m2.year(),
        months: m2.month(),
        date: m2.date(),
        hours: m2.hours(),
        minutes: m2.minutes(),
        seconds: m2.seconds(),
        milliseconds: m2.milliseconds()
      };
    }
    function toJSON() {
      return this.isValid() ? this.toISOString() : null;
    }
    function isValid$2() {
      return isValid(this);
    }
    function parsingFlags() {
      return extend({}, getParsingFlags(this));
    }
    function invalidAt() {
      return getParsingFlags(this).overflow;
    }
    function creationData() {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
      };
    }
    addFormatToken("N", 0, 0, "eraAbbr");
    addFormatToken("NN", 0, 0, "eraAbbr");
    addFormatToken("NNN", 0, 0, "eraAbbr");
    addFormatToken("NNNN", 0, 0, "eraName");
    addFormatToken("NNNNN", 0, 0, "eraNarrow");
    addFormatToken("y", ["y", 1], "yo", "eraYear");
    addFormatToken("y", ["yy", 2], 0, "eraYear");
    addFormatToken("y", ["yyy", 3], 0, "eraYear");
    addFormatToken("y", ["yyyy", 4], 0, "eraYear");
    addRegexToken("N", matchEraAbbr);
    addRegexToken("NN", matchEraAbbr);
    addRegexToken("NNN", matchEraAbbr);
    addRegexToken("NNNN", matchEraName);
    addRegexToken("NNNNN", matchEraNarrow);
    addParseToken(
      ["N", "NN", "NNN", "NNNN", "NNNNN"],
      function(input, array, config, token2) {
        var era = config._locale.erasParse(input, token2, config._strict);
        if (era) {
          getParsingFlags(config).era = era;
        } else {
          getParsingFlags(config).invalidEra = input;
        }
      }
    );
    addRegexToken("y", matchUnsigned);
    addRegexToken("yy", matchUnsigned);
    addRegexToken("yyy", matchUnsigned);
    addRegexToken("yyyy", matchUnsigned);
    addRegexToken("yo", matchEraYearOrdinal);
    addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
    addParseToken(["yo"], function(input, array, config, token2) {
      var match;
      if (config._locale._eraYearOrdinalRegex) {
        match = input.match(config._locale._eraYearOrdinalRegex);
      }
      if (config._locale.eraYearOrdinalParse) {
        array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
      } else {
        array[YEAR] = parseInt(input, 10);
      }
    });
    function localeEras(m2, format2) {
      var i, l2, date, eras = this._eras || getLocale("en")._eras;
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        switch (typeof eras[i].since) {
          case "string":
            date = hooks(eras[i].since).startOf("day");
            eras[i].since = date.valueOf();
            break;
        }
        switch (typeof eras[i].until) {
          case "undefined":
            eras[i].until = Infinity;
            break;
          case "string":
            date = hooks(eras[i].until).startOf("day").valueOf();
            eras[i].until = date.valueOf();
            break;
        }
      }
      return eras;
    }
    function localeErasParse(eraName, format2, strict) {
      var i, l2, eras = this.eras(), name, abbr, narrow;
      eraName = eraName.toUpperCase();
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        name = eras[i].name.toUpperCase();
        abbr = eras[i].abbr.toUpperCase();
        narrow = eras[i].narrow.toUpperCase();
        if (strict) {
          switch (format2) {
            case "N":
            case "NN":
            case "NNN":
              if (abbr === eraName) {
                return eras[i];
              }
              break;
            case "NNNN":
              if (name === eraName) {
                return eras[i];
              }
              break;
            case "NNNNN":
              if (narrow === eraName) {
                return eras[i];
              }
              break;
          }
        } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
          return eras[i];
        }
      }
    }
    function localeErasConvertYear(era, year) {
      var dir = era.since <= era.until ? 1 : -1;
      if (year === void 0) {
        return hooks(era.since).year();
      } else {
        return hooks(era.since).year() + (year - era.offset) * dir;
      }
    }
    function getEraName() {
      var i, l2, val, eras = this.localeData().eras();
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        val = this.clone().startOf("day").valueOf();
        if (eras[i].since <= val && val <= eras[i].until) {
          return eras[i].name;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
          return eras[i].name;
        }
      }
      return "";
    }
    function getEraNarrow() {
      var i, l2, val, eras = this.localeData().eras();
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        val = this.clone().startOf("day").valueOf();
        if (eras[i].since <= val && val <= eras[i].until) {
          return eras[i].narrow;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
          return eras[i].narrow;
        }
      }
      return "";
    }
    function getEraAbbr() {
      var i, l2, val, eras = this.localeData().eras();
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        val = this.clone().startOf("day").valueOf();
        if (eras[i].since <= val && val <= eras[i].until) {
          return eras[i].abbr;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
          return eras[i].abbr;
        }
      }
      return "";
    }
    function getEraYear() {
      var i, l2, dir, val, eras = this.localeData().eras();
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        dir = eras[i].since <= eras[i].until ? 1 : -1;
        val = this.clone().startOf("day").valueOf();
        if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
          return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
        }
      }
      return this.year();
    }
    function erasNameRegex(isStrict) {
      if (!hasOwnProp(this, "_erasNameRegex")) {
        computeErasParse.call(this);
      }
      return isStrict ? this._erasNameRegex : this._erasRegex;
    }
    function erasAbbrRegex(isStrict) {
      if (!hasOwnProp(this, "_erasAbbrRegex")) {
        computeErasParse.call(this);
      }
      return isStrict ? this._erasAbbrRegex : this._erasRegex;
    }
    function erasNarrowRegex(isStrict) {
      if (!hasOwnProp(this, "_erasNarrowRegex")) {
        computeErasParse.call(this);
      }
      return isStrict ? this._erasNarrowRegex : this._erasRegex;
    }
    function matchEraAbbr(isStrict, locale2) {
      return locale2.erasAbbrRegex(isStrict);
    }
    function matchEraName(isStrict, locale2) {
      return locale2.erasNameRegex(isStrict);
    }
    function matchEraNarrow(isStrict, locale2) {
      return locale2.erasNarrowRegex(isStrict);
    }
    function matchEraYearOrdinal(isStrict, locale2) {
      return locale2._eraYearOrdinalRegex || matchUnsigned;
    }
    function computeErasParse() {
      var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l2, erasName, erasAbbr, erasNarrow, eras = this.eras();
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        erasName = regexEscape(eras[i].name);
        erasAbbr = regexEscape(eras[i].abbr);
        erasNarrow = regexEscape(eras[i].narrow);
        namePieces.push(erasName);
        abbrPieces.push(erasAbbr);
        narrowPieces.push(erasNarrow);
        mixedPieces.push(erasName);
        mixedPieces.push(erasAbbr);
        mixedPieces.push(erasNarrow);
      }
      this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
      this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
      this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
      this._erasNarrowRegex = new RegExp(
        "^(" + narrowPieces.join("|") + ")",
        "i"
      );
    }
    addFormatToken(0, ["gg", 2], 0, function() {
      return this.weekYear() % 100;
    });
    addFormatToken(0, ["GG", 2], 0, function() {
      return this.isoWeekYear() % 100;
    });
    function addWeekYearFormatToken(token2, getter) {
      addFormatToken(0, [token2, token2.length], 0, getter);
    }
    addWeekYearFormatToken("gggg", "weekYear");
    addWeekYearFormatToken("ggggg", "weekYear");
    addWeekYearFormatToken("GGGG", "isoWeekYear");
    addWeekYearFormatToken("GGGGG", "isoWeekYear");
    addRegexToken("G", matchSigned);
    addRegexToken("g", matchSigned);
    addRegexToken("GG", match1to2, match2);
    addRegexToken("gg", match1to2, match2);
    addRegexToken("GGGG", match1to4, match4);
    addRegexToken("gggg", match1to4, match4);
    addRegexToken("GGGGG", match1to6, match6);
    addRegexToken("ggggg", match1to6, match6);
    addWeekParseToken(
      ["gggg", "ggggg", "GGGG", "GGGGG"],
      function(input, week, config, token2) {
        week[token2.substr(0, 2)] = toInt(input);
      }
    );
    addWeekParseToken(["gg", "GG"], function(input, week, config, token2) {
      week[token2] = hooks.parseTwoDigitYear(input);
    });
    function getSetWeekYear(input) {
      return getSetWeekYearHelper.call(
        this,
        input,
        this.week(),
        this.weekday() + this.localeData()._week.dow,
        this.localeData()._week.dow,
        this.localeData()._week.doy
      );
    }
    function getSetISOWeekYear(input) {
      return getSetWeekYearHelper.call(
        this,
        input,
        this.isoWeek(),
        this.isoWeekday(),
        1,
        4
      );
    }
    function getISOWeeksInYear() {
      return weeksInYear(this.year(), 1, 4);
    }
    function getISOWeeksInISOWeekYear() {
      return weeksInYear(this.isoWeekYear(), 1, 4);
    }
    function getWeeksInYear() {
      var weekInfo = this.localeData()._week;
      return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }
    function getWeeksInWeekYear() {
      var weekInfo = this.localeData()._week;
      return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
    }
    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
      var weeksTarget;
      if (input == null) {
        return weekOfYear(this, dow, doy).year;
      } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
          week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
      }
    }
    function setWeekAll(weekYear, week, weekday, dow, doy) {
      var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
      this.year(date.getUTCFullYear());
      this.month(date.getUTCMonth());
      this.date(date.getUTCDate());
      return this;
    }
    addFormatToken("Q", 0, "Qo", "quarter");
    addRegexToken("Q", match1);
    addParseToken("Q", function(input, array) {
      array[MONTH] = (toInt(input) - 1) * 3;
    });
    function getSetQuarter(input) {
      return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }
    addFormatToken("D", ["DD", 2], "Do", "date");
    addRegexToken("D", match1to2, match1to2NoLeadingZero);
    addRegexToken("DD", match1to2, match2);
    addRegexToken("Do", function(isStrict, locale2) {
      return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
    });
    addParseToken(["D", "DD"], DATE);
    addParseToken("Do", function(input, array) {
      array[DATE] = toInt(input.match(match1to2)[0]);
    });
    var getSetDayOfMonth = makeGetSet("Date", true);
    addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
    addRegexToken("DDD", match1to3);
    addRegexToken("DDDD", match3);
    addParseToken(["DDD", "DDDD"], function(input, array, config) {
      config._dayOfYear = toInt(input);
    });
    function getSetDayOfYear(input) {
      var dayOfYear = Math.round(
        (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
      ) + 1;
      return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
    }
    addFormatToken("m", ["mm", 2], 0, "minute");
    addRegexToken("m", match1to2, match1to2HasZero);
    addRegexToken("mm", match1to2, match2);
    addParseToken(["m", "mm"], MINUTE);
    var getSetMinute = makeGetSet("Minutes", false);
    addFormatToken("s", ["ss", 2], 0, "second");
    addRegexToken("s", match1to2, match1to2HasZero);
    addRegexToken("ss", match1to2, match2);
    addParseToken(["s", "ss"], SECOND);
    var getSetSecond = makeGetSet("Seconds", false);
    addFormatToken("S", 0, 0, function() {
      return ~~(this.millisecond() / 100);
    });
    addFormatToken(0, ["SS", 2], 0, function() {
      return ~~(this.millisecond() / 10);
    });
    addFormatToken(0, ["SSS", 3], 0, "millisecond");
    addFormatToken(0, ["SSSS", 4], 0, function() {
      return this.millisecond() * 10;
    });
    addFormatToken(0, ["SSSSS", 5], 0, function() {
      return this.millisecond() * 100;
    });
    addFormatToken(0, ["SSSSSS", 6], 0, function() {
      return this.millisecond() * 1e3;
    });
    addFormatToken(0, ["SSSSSSS", 7], 0, function() {
      return this.millisecond() * 1e4;
    });
    addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
      return this.millisecond() * 1e5;
    });
    addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
      return this.millisecond() * 1e6;
    });
    addRegexToken("S", match1to3, match1);
    addRegexToken("SS", match1to3, match2);
    addRegexToken("SSS", match1to3, match3);
    var token, getSetMillisecond;
    for (token = "SSSS"; token.length <= 9; token += "S") {
      addRegexToken(token, matchUnsigned);
    }
    function parseMs(input, array) {
      array[MILLISECOND] = toInt(("0." + input) * 1e3);
    }
    for (token = "S"; token.length <= 9; token += "S") {
      addParseToken(token, parseMs);
    }
    getSetMillisecond = makeGetSet("Milliseconds", false);
    addFormatToken("z", 0, 0, "zoneAbbr");
    addFormatToken("zz", 0, 0, "zoneName");
    function getZoneAbbr() {
      return this._isUTC ? "UTC" : "";
    }
    function getZoneName() {
      return this._isUTC ? "Coordinated Universal Time" : "";
    }
    var proto = Moment.prototype;
    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to$1;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    if (typeof Symbol !== "undefined" && Symbol.for != null) {
      proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
        return "Moment<" + this.format() + ">";
      };
    }
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.eraName = getEraName;
    proto.eraNarrow = getEraNarrow;
    proto.eraAbbr = getEraAbbr;
    proto.eraYear = getEraYear;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.weeksInWeekYear = getWeeksInWeekYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate(
      "dates accessor is deprecated. Use date instead.",
      getSetDayOfMonth
    );
    proto.months = deprecate(
      "months accessor is deprecated. Use month instead",
      getSetMonth
    );
    proto.years = deprecate(
      "years accessor is deprecated. Use year instead",
      getSetYear
    );
    proto.zone = deprecate(
      "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
      getSetZone
    );
    proto.isDSTShifted = deprecate(
      "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
      isDaylightSavingTimeShifted
    );
    function createUnix(input) {
      return createLocal(input * 1e3);
    }
    function createInZone() {
      return createLocal.apply(null, arguments).parseZone();
    }
    function preParsePostFormat(string) {
      return string;
    }
    var proto$1 = Locale.prototype;
    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.eras = localeEras;
    proto$1.erasParse = localeErasParse;
    proto$1.erasConvertYear = localeErasConvertYear;
    proto$1.erasAbbrRegex = erasAbbrRegex;
    proto$1.erasNameRegex = erasNameRegex;
    proto$1.erasNarrowRegex = erasNarrowRegex;
    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;
    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;
    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;
    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;
    function get$1$1(format2, index2, field, setter) {
      var locale2 = getLocale(), utc = createUTC().set(setter, index2);
      return locale2[field](utc, format2);
    }
    function listMonthsImpl(format2, index2, field) {
      if (isNumber(format2)) {
        index2 = format2;
        format2 = void 0;
      }
      format2 = format2 || "";
      if (index2 != null) {
        return get$1$1(format2, index2, field, "month");
      }
      var i, out = [];
      for (i = 0; i < 12; i++) {
        out[i] = get$1$1(format2, i, field, "month");
      }
      return out;
    }
    function listWeekdaysImpl(localeSorted, format2, index2, field) {
      if (typeof localeSorted === "boolean") {
        if (isNumber(format2)) {
          index2 = format2;
          format2 = void 0;
        }
        format2 = format2 || "";
      } else {
        format2 = localeSorted;
        index2 = format2;
        localeSorted = false;
        if (isNumber(format2)) {
          index2 = format2;
          format2 = void 0;
        }
        format2 = format2 || "";
      }
      var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i, out = [];
      if (index2 != null) {
        return get$1$1(format2, (index2 + shift) % 7, field, "day");
      }
      for (i = 0; i < 7; i++) {
        out[i] = get$1$1(format2, (i + shift) % 7, field, "day");
      }
      return out;
    }
    function listMonths(format2, index2) {
      return listMonthsImpl(format2, index2, "months");
    }
    function listMonthsShort(format2, index2) {
      return listMonthsImpl(format2, index2, "monthsShort");
    }
    function listWeekdays(localeSorted, format2, index2) {
      return listWeekdaysImpl(localeSorted, format2, index2, "weekdays");
    }
    function listWeekdaysShort(localeSorted, format2, index2) {
      return listWeekdaysImpl(localeSorted, format2, index2, "weekdaysShort");
    }
    function listWeekdaysMin(localeSorted, format2, index2) {
      return listWeekdaysImpl(localeSorted, format2, index2, "weekdaysMin");
    }
    getSetGlobalLocale("en", {
      eras: [
        {
          since: "0001-01-01",
          until: Infinity,
          offset: 1,
          name: "Anno Domini",
          narrow: "AD",
          abbr: "AD"
        },
        {
          since: "0000-12-31",
          until: -Infinity,
          offset: 1,
          name: "Before Christ",
          narrow: "BC",
          abbr: "BC"
        }
      ],
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function(number) {
        var b = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
        return number + output;
      }
    });
    hooks.lang = deprecate(
      "moment.lang is deprecated. Use moment.locale instead.",
      getSetGlobalLocale
    );
    hooks.langData = deprecate(
      "moment.langData is deprecated. Use moment.localeData instead.",
      getLocale
    );
    var mathAbs = Math.abs;
    function abs() {
      var data = this._data;
      this._milliseconds = mathAbs(this._milliseconds);
      this._days = mathAbs(this._days);
      this._months = mathAbs(this._months);
      data.milliseconds = mathAbs(data.milliseconds);
      data.seconds = mathAbs(data.seconds);
      data.minutes = mathAbs(data.minutes);
      data.hours = mathAbs(data.hours);
      data.months = mathAbs(data.months);
      data.years = mathAbs(data.years);
      return this;
    }
    function addSubtract$1(duration, input, value, direction) {
      var other = createDuration(input, value);
      duration._milliseconds += direction * other._milliseconds;
      duration._days += direction * other._days;
      duration._months += direction * other._months;
      return duration._bubble();
    }
    function add$1(input, value) {
      return addSubtract$1(this, input, value, 1);
    }
    function subtract$1(input, value) {
      return addSubtract$1(this, input, value, -1);
    }
    function absCeil(number) {
      if (number < 0) {
        return Math.floor(number);
      } else {
        return Math.ceil(number);
      }
    }
    function bubble() {
      var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
      if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
        milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
        days2 = 0;
        months2 = 0;
      }
      data.milliseconds = milliseconds2 % 1e3;
      seconds2 = absFloor(milliseconds2 / 1e3);
      data.seconds = seconds2 % 60;
      minutes2 = absFloor(seconds2 / 60);
      data.minutes = minutes2 % 60;
      hours2 = absFloor(minutes2 / 60);
      data.hours = hours2 % 24;
      days2 += absFloor(hours2 / 24);
      monthsFromDays = absFloor(daysToMonths(days2));
      months2 += monthsFromDays;
      days2 -= absCeil(monthsToDays(monthsFromDays));
      years2 = absFloor(months2 / 12);
      months2 %= 12;
      data.days = days2;
      data.months = months2;
      data.years = years2;
      return this;
    }
    function daysToMonths(days2) {
      return days2 * 4800 / 146097;
    }
    function monthsToDays(months2) {
      return months2 * 146097 / 4800;
    }
    function as(units) {
      if (!this.isValid()) {
        return NaN;
      }
      var days2, months2, milliseconds2 = this._milliseconds;
      units = normalizeUnits(units);
      if (units === "month" || units === "quarter" || units === "year") {
        days2 = this._days + milliseconds2 / 864e5;
        months2 = this._months + daysToMonths(days2);
        switch (units) {
          case "month":
            return months2;
          case "quarter":
            return months2 / 3;
          case "year":
            return months2 / 12;
        }
      } else {
        days2 = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
          case "week":
            return days2 / 7 + milliseconds2 / 6048e5;
          case "day":
            return days2 + milliseconds2 / 864e5;
          case "hour":
            return days2 * 24 + milliseconds2 / 36e5;
          case "minute":
            return days2 * 1440 + milliseconds2 / 6e4;
          case "second":
            return days2 * 86400 + milliseconds2 / 1e3;
          case "millisecond":
            return Math.floor(days2 * 864e5) + milliseconds2;
          default:
            throw new Error("Unknown unit " + units);
        }
      }
    }
    function makeAs(alias) {
      return function() {
        return this.as(alias);
      };
    }
    var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y"), valueOf$1 = asMilliseconds;
    function clone$1() {
      return createDuration(this);
    }
    function get$2$1(units) {
      units = normalizeUnits(units);
      return this.isValid() ? this[units + "s"]() : NaN;
    }
    function makeGetter(name) {
      return function() {
        return this.isValid() ? this._data[name] : NaN;
      };
    }
    var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
    function weeks() {
      return absFloor(this.days() / 7);
    }
    var round = Math.round, thresholds = {
      ss: 44,
      // a few seconds to seconds
      s: 45,
      // seconds to minute
      m: 45,
      // minutes to hour
      h: 22,
      // hours to day
      d: 26,
      // days to month/week
      w: null,
      // weeks to month
      M: 11
      // months to year
    };
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale2) {
      return locale2.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }
    function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
      var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
      if (thresholds2.w != null) {
        a = a || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
      }
      a = a || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
      a[2] = withoutSuffix;
      a[3] = +posNegDuration > 0;
      a[4] = locale2;
      return substituteTimeAgo.apply(null, a);
    }
    function getSetRelativeTimeRounding(roundingFunction) {
      if (roundingFunction === void 0) {
        return round;
      }
      if (typeof roundingFunction === "function") {
        round = roundingFunction;
        return true;
      }
      return false;
    }
    function getSetRelativeTimeThreshold(threshold, limit) {
      if (thresholds[threshold] === void 0) {
        return false;
      }
      if (limit === void 0) {
        return thresholds[threshold];
      }
      thresholds[threshold] = limit;
      if (threshold === "s") {
        thresholds.ss = limit - 1;
      }
      return true;
    }
    function humanize(argWithSuffix, argThresholds) {
      if (!this.isValid()) {
        return this.localeData().invalidDate();
      }
      var withSuffix = false, th2 = thresholds, locale2, output;
      if (typeof argWithSuffix === "object") {
        argThresholds = argWithSuffix;
        argWithSuffix = false;
      }
      if (typeof argWithSuffix === "boolean") {
        withSuffix = argWithSuffix;
      }
      if (typeof argThresholds === "object") {
        th2 = Object.assign({}, thresholds, argThresholds);
        if (argThresholds.s != null && argThresholds.ss == null) {
          th2.ss = argThresholds.s - 1;
        }
      }
      locale2 = this.localeData();
      output = relativeTime$1(this, !withSuffix, th2, locale2);
      if (withSuffix) {
        output = locale2.pastFuture(+this, output);
      }
      return locale2.postformat(output);
    }
    var abs$1 = Math.abs;
    function sign(x2) {
      return (x2 > 0) - (x2 < 0) || +x2;
    }
    function toISOString$1() {
      if (!this.isValid()) {
        return this.localeData().invalidDate();
      }
      var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
      if (!total) {
        return "P0D";
      }
      minutes2 = absFloor(seconds2 / 60);
      hours2 = absFloor(minutes2 / 60);
      seconds2 %= 60;
      minutes2 %= 60;
      years2 = absFloor(months2 / 12);
      months2 %= 12;
      s = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
      totalSign = total < 0 ? "-" : "";
      ymSign = sign(this._months) !== sign(total) ? "-" : "";
      daysSign = sign(this._days) !== sign(total) ? "-" : "";
      hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
      return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s + "S" : "");
    }
    var proto$2 = Duration.prototype;
    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2$1;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;
    proto$2.toIsoString = deprecate(
      "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
      toISOString$1
    );
    proto$2.lang = lang;
    addFormatToken("X", 0, 0, "unix");
    addFormatToken("x", 0, 0, "valueOf");
    addRegexToken("x", matchSigned);
    addRegexToken("X", matchTimestamp);
    addParseToken("X", function(input, array, config) {
      config._d = new Date(parseFloat(input) * 1e3);
    });
    addParseToken("x", function(input, array, config) {
      config._d = new Date(toInt(input));
    });
    //! moment.js
    hooks.version = "2.30.1";
    setHookCallback(createLocal);
    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;
    hooks.HTML5_FMT = {
      DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
      // <input type="datetime-local" />
      DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
      // <input type="datetime-local" step="1" />
      DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
      // <input type="datetime-local" step="0.001" />
      DATE: "YYYY-MM-DD",
      // <input type="date" />
      TIME: "HH:mm",
      // <input type="time" />
      TIME_SECONDS: "HH:mm:ss",
      // <input type="time" step="1" />
      TIME_MS: "HH:mm:ss.SSS",
      // <input type="time" step="0.001" />
      WEEK: "GGGG-[W]WW",
      // <input type="week" />
      MONTH: "YYYY-MM"
      // <input type="month" />
    };
    let Date$1 = class Date {
      constructor(date) {
        this.date = hooks(date);
      }
      toSimpleFormat({ time = true }) {
        return this.date.format(`DD/MM/YYYY${time ? " HH:mm:ss" : ""}`);
      }
      toTime({}) {
        return this.date.format("HH:mm:ss");
      }
    };
    const move = () => {
      const navigate = useNavigate();
      return (path, data) => {
        navigate(path, { state: data });
      };
    };
    const back = () => {
      const navigate = useNavigate();
      const location = useLocation();
      return (defaultRoute) => {
        if (location.key !== "default") {
          navigate(-1);
        } else {
          navigate(defaultRoute, { replace: true });
        }
      };
    };
    const listen = () => {
      const [start, setStart] = reactExports.useState(false);
      const location = useLocation();
      const params = useParams();
      reactExports.useEffect(() => {
        setStart(true);
      }, []);
      const data = {
        start,
        pathname: !start ? "/" : location.pathname,
        params: {
          path: !start ? {} : params,
          state: !start ? {} : location.state || {}
        }
      };
      return start ? data : { start: false };
    };
    function useRoute() {
      const navigate = move();
      const goBack = back();
      return {
        move: (path, data) => {
          return navigate(path, data);
        },
        back: (defaultRoute = "/") => {
          goBack(defaultRoute);
        }
      };
    }
    function Category({ title, items }) {
      const route = useRoute();
      const [open, setOpen] = reactExports.useState(true);
      const itemsJSX = items.map((item, i) => {
        const date = new Date$1(item.created_at);
        return /* @__PURE__ */ jsxs(Container$1, { children: [
          /* @__PURE__ */ jsx(Divider, {}),
          /* @__PURE__ */ jsxs(
            Container$1,
            {
              classes: "\n                        bg-gray-200 p-4 py-0 flex items-center \n                        justify-between flex-row pl-2 pr-0\n                    ",
              children: [
                /* @__PURE__ */ jsxs(Container$1, { classes: "pr-1", children: [
                  /* @__PURE__ */ jsx(Title, { classes: "text-xs", children: date.toSimpleFormat({ time: false }) }),
                  /* @__PURE__ */ jsx(Title, { classes: "text-xs text-center", children: date.toTime({}) })
                ] }),
                /* @__PURE__ */ jsxs(
                  Container$1,
                  {
                    classes: "\n                            pl-3 flex flex-col font-left flex-1\n                            overflow-hidden \n                        ",
                    children: [
                      /* @__PURE__ */ jsxs(
                        Title,
                        {
                          classes: "!text-sm !font-bold",
                          children: [
                            "$",
                            item.price
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Title,
                        {
                          classes: "!text-xs max-h-8",
                          children: item.company_name
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  Container$1,
                  {
                    classes: "!p-3 !py-4",
                    onClick: () => {
                      route.move(`/transaction/${item.id}`);
                    },
                    children: /* @__PURE__ */ jsx(Action, { classes: "h-4" })
                  }
                )
              ]
            }
          )
        ] }, i);
      });
      return /* @__PURE__ */ jsx(
        Container$1,
        {
          classes: "!m-0 px-5 flex-1 relative",
          children: /* @__PURE__ */ jsxs(Card, { classes: { root: "!p-0" }, children: [
            /* @__PURE__ */ jsx(
              CardHeader,
              {
                classes: {
                  root: "!py-0"
                },
                main: /* @__PURE__ */ jsx(Container$1, { classes: "m-auto ml-4", children: /* @__PURE__ */ jsx(
                  Title,
                  {
                    type: "h2",
                    classes: "!text-lg !font-bold",
                    children: title
                  }
                ) }),
                actions: /* @__PURE__ */ jsx(Container$1, { classes: "m-auto", children: /* @__PURE__ */ jsx(Container$1, { classes: "!p-3 !py-5", children: /* @__PURE__ */ jsx(Action, { classes: "!h-4" }) }) })
              }
            ),
            /* @__PURE__ */ jsx(Divider, { classes: "my-0" }),
            /* @__PURE__ */ jsx(
              CardHeader,
              {
                classes: { root: "!p-0" },
                onClick: () => {
                  setOpen(!open);
                },
                main: /* @__PURE__ */ jsx(Container$1, { classes: "w-full m-auto ml-4 select-none", children: /* @__PURE__ */ jsx(
                  Title,
                  {
                    type: "h3",
                    classes: "!text-sm",
                    children: "Details by month"
                  }
                ) }),
                actions: /* @__PURE__ */ jsx(Container$1, { classes: "m-auto", children: /* @__PURE__ */ jsx(
                  Container$1,
                  {
                    classes: "!p-3 !py-4",
                    children: open ? /* @__PURE__ */ jsx(DownArrow, { classes: "!h-3" }) : /* @__PURE__ */ jsx(DownArrow, { classes: "!h-3" })
                  }
                ) })
              }
            ),
            open && // TODO - Create empty data alert
            /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(Divider, { classes: "border-t-4" }),
              itemsJSX
            ] })
          ] })
        }
      );
    }
    const filesTable = {
      name: "files",
      columns: [
        {
          name: "name",
          type: "varchar"
        },
        {
          name: "path",
          type: "TEXT"
        },
        {
          name: "type",
          type: "varchar"
        },
        {
          name: "base64",
          type: "TEXT"
        },
        {
          name: "created_at",
          type: "datetime"
        },
        {
          name: "updated_at",
          type: "datetime"
        }
      ]
    };
    async function openIndexedDB(onsuccess = null, onerror = null, onupgradeneeded = null) {
      return new Promise(async (res, rej) => {
        if (typeof window !== "undefined") {
          const request = indexedDB.open("app", 1);
          request.onupgradeneeded = onupgradeneeded || (() => {
          });
          request.onsuccess = (event) => {
            if (onsuccess)
              onsuccess(event, res, rej);
            else
              res(event.target.result);
          };
          request.onerror = (event) => {
            if (onerror)
              onerror(event, rej);
            else
              rej(event.target.error);
          };
        } else {
          res({});
        }
      });
    }
    async function openDB$1(tables2) {
      return new Promise(async (res) => {
        await openIndexedDB(null, null, (event) => {
          createTables(event.target.result, [
            ...tables2,
            filesTable
          ]);
        });
        res(true);
      });
    }
    async function createTables(db2, tables2) {
      for (const table of tables2) {
        await createTable(db2, table.name, table.columns);
      }
    }
    async function createTable(db2, name, columns) {
      if (!db2.objectStoreNames.contains(name)) {
        const objectStore = db2.createObjectStore(name, { keyPath: "id", autoIncrement: true });
        objectStore.createIndex("id", "id", { unique: false });
        for (const column of columns) {
          objectStore.createIndex(column.name, column.name, { unique: false });
        }
      }
    }
    async function save$2(table, data) {
      const finalData = data;
      return new Promise(async (res, rej) => {
        const onsuccess = function(event, res2, rej2) {
          const db2 = event.target.result;
          const transaction = db2.transaction(table, "readwrite");
          const objectStore = transaction.objectStore(table);
          const addRequest = objectStore.add(finalData);
          addRequest.onsuccess = function(e) {
            res2(e.target.result);
          };
          addRequest.onerror = function(e) {
            rej2(e.target.error);
          };
        };
        const id2 = await openIndexedDB(onsuccess);
        res(parseInt(`${id2}`));
      });
    }
    async function update(table, id2, data) {
      const finalData = {
        id: id2,
        ...data
      };
      return new Promise(async (res, rej) => {
        const onsuccess = function(event, res2, rej2) {
          const db2 = event.target.result;
          const transaction = db2.transaction(table, "readwrite");
          const objectStore = transaction.objectStore(table);
          const addRequest = objectStore.put(finalData);
          addRequest.onsuccess = function(e) {
            res2(e.target.result);
          };
          addRequest.onerror = function(e) {
            rej2(e.target.error);
          };
        };
        await openIndexedDB(onsuccess);
        res(true);
      });
    }
    async function getData$1({
      table,
      size = 10,
      page = 1,
      order = "desc",
      filter = {}
    }) {
      return new Promise(async (res, rej) => {
        const onsuccess = async function(event, res2, rej2) {
          const db2 = event.target.result;
          const transaction = db2.transaction(table, "readonly");
          const objectStore = transaction.objectStore(table);
          let columnObject = objectStore;
          const columnsNames = Object.keys(filter || {});
          let columnsObject = {};
          for (const columnsName of columnsNames) {
            columnsObject[columnsName] = objectStore.index(columnsName);
          }
          let dataToFilter = null;
          if (columnsNames[0]) {
            columnObject = columnsObject[columnsNames[0]];
            dataToFilter = IDBKeyRange.only(filter[columnsNames[0]]);
          }
          const request = columnObject.openCursor(dataToFilter);
          const result = await doPaginate(request, size, page);
          res2(result);
        };
        const data = await openIndexedDB(onsuccess);
        res(data);
      });
    }
    async function doPaginate(request, size, page) {
      return new Promise((res, rej) => {
        const limit = size;
        const skip = (page - 1) * size;
        let counter = 0;
        const result = [];
        request.onsuccess = function(e) {
          const cursor = e.target.result;
          if (cursor) {
            if (counter >= skip && result.length < limit) {
              result.push(cursor.value);
            }
            counter++;
            if (result.length < limit) {
              cursor.continue();
            }
          } else {
            res(result);
          }
        };
        request.onerror = function(e) {
          rej(e.target.error);
        };
      });
    }
    async function find$1({
      table,
      id: id2
    }) {
      return new Promise(async (res, rej) => {
        const onsuccess = function(event, res2, rej2) {
          const db2 = event.target.result;
          const transaction = db2.transaction(table, "readonly");
          const store = transaction.objectStore(table);
          const request = store.get(id2);
          request.onsuccess = () => {
            res2(request.result);
          };
          request.onerror = function(e) {
            rej2(e.target.error);
          };
        };
        const data = await openIndexedDB(onsuccess);
        res(data);
      });
    }
    class TransactionsListsRepository {
      static async list({}) {
        const data = await getData$1({
          table: "transactions",
          page: 1,
          order: "desc"
        });
        return data;
      }
    }
    function ListPage() {
      const [transactions, setTransactions] = reactExports.useState([]);
      reactExports.useEffect(() => {
        (async () => {
          const transactions2 = await TransactionsListsRepository.list({});
          setTransactions(transactions2 || []);
        })();
      }, []);
      return /* @__PURE__ */ jsxs(Container$1, { classes: "overflow-y-auto pt-5 h-full", children: [
        /* @__PURE__ */ jsx(
          Category,
          {
            title: "Global",
            items: transactions
          }
        ),
        /* @__PURE__ */ jsx(Divider, { classes: "my-2" })
      ] });
    }
    const SteperContext = reactExports.createContext(null);
    function Steper({ children, default: Default }) {
      const stepsRef = reactExports.useRef({
        first: null,
        steps: {}
      });
      const dataRef = reactExports.useRef({});
      const [state, setState] = reactExports.useState({
        current: Default
      });
      const { current } = state;
      reactExports.useEffect(() => {
        if (!stepsRef.current.steps[current]) {
          setState((state2) => ({
            ...state2,
            current: stepsRef.current.first
          }));
        }
      }, []);
      const onMove = (step, data = {}) => {
        dataRef.current = data;
        setState((state2) => ({
          ...state2,
          current: stepsRef.current.steps[step] ? step : stepsRef.current.first
        }));
      };
      return /* @__PURE__ */ jsx(
        SteperContext.Provider,
        {
          value: {
            onMove,
            stepsRef,
            dataRef,
            current
          },
          children
        }
      );
    }
    function Step({ step, component: Component, props = {} }) {
      const steperData = reactExports.useContext(SteperContext);
      const { current, onMove } = steperData;
      steperData.stepsRef.current.first = steperData.stepsRef.current.first ? steperData.stepsRef.current.first : step;
      steperData.stepsRef.current.steps[step] = {
        step
      };
      if (current == step) {
        return /* @__PURE__ */ jsx(
          Component,
          {
            steper: {
              onMove,
              dataRef: steperData.dataRef
            },
            ...props
          }
        );
      }
    }
    const Image = ({
      children = void 0,
      src,
      classes: classes2 = "",
      style = {},
      width = null,
      height = null,
      ...props
    }, ref) => {
      const finalWidth = width || 50;
      return /* @__PURE__ */ jsx(
        "img",
        {
          src,
          className: classes2,
          ref,
          ...props,
          style: {
            ...style,
            width: finalWidth,
            height
          }
        }
      );
    };
    const Image$1 = reactExports.forwardRef(Image);
    function scrollToBottom(ref, animated) {
      ref.current.scrollTo({
        top: ref.current.scrollHeight,
        behavior: animated ? "smooth" : "auto"
      });
    }
    function scrollToTop(ref, animated) {
      ref.current.scrollTo({
        top: 0,
        behavior: animated ? "smooth" : "auto"
      });
    }
    function scrollTo(element, mainElement, animated) {
      const containerRect = mainElement.getBoundingClientRect();
      const targetRect = element.getBoundingClientRect();
      const offsetTop = targetRect.top - containerRect.top + mainElement.scrollTop;
      mainElement.scrollTo({
        top: offsetTop,
        behavior: animated ? "smooth" : "auto"
      });
    }
    function toTop(ref, animated = false) {
      scrollToTop(ref, animated);
    }
    function toBottom(ref, animated = false) {
      scrollToBottom(ref, animated);
    }
    function to(element, mainElement, animated = false) {
      scrollTo(element, mainElement, animated);
    }
    const Scroll = {
      toTop,
      toBottom,
      to
    };
    function FilesList({
      files,
      heightInObject = null,
      width = null,
      classes: classes2 = { image: "", imageRoot: "" },
      glonalHeight = null,
      handleFileFouseRef = null,
      onClick = null
    }) {
      const filesRef = reactExports.useRef({});
      const handleFileFouse = (id2, scrollElementRef) => {
        Scroll.to(filesRef.current[id2], scrollElementRef.current);
      };
      reactExports.useEffect(() => {
        if (handleFileFouseRef) {
          handleFileFouseRef.current = handleFileFouse;
        }
      });
      return /* @__PURE__ */ jsx(Fragment, { children: [...files].map((file, i) => {
        const id2 = file.id, url = file.url;
        width = width || "100%";
        let height = heightInObject !== null ? file.height : null;
        height = height || glonalHeight || "100%";
        return /* @__PURE__ */ jsx(
          Container$1,
          {
            onClick: onClick ? () => onClick(file) : null,
            width,
            height,
            classes: `shrink-0 ${classes2.imageRoot || ""}`,
            children: /* @__PURE__ */ jsx(
              Image$1,
              {
                src: url,
                ref: (ref) => filesRef.current[id2] = ref,
                width,
                height,
                classes: classes2.image || ""
              }
            )
          },
          id2
        );
      }) });
    }
    function TextInput$2({
      children = void 0,
      style = {},
      type = "text",
      classes: classes2 = "",
      inputRef = null,
      ...props
    }) {
      return /* @__PURE__ */ jsx(
        "input",
        {
          style: { ...style },
          type,
          ref: inputRef,
          className: `border h-10 py-2 p-2 w-full bg-transparent ${classes2}`,
          ...props
        }
      );
    }
    function TextInput$1({ title, classes: classes2 = "", inputRef = null }) {
      return /* @__PURE__ */ jsxs(Container$1, { classes: classes2, children: [
        /* @__PURE__ */ jsx(
          Title,
          {
            classes: "m-2 text-base font-bold",
            children: title
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput$2,
          {
            classes: "\n                    border-2 border-black rounded-xl\n                ",
            inputRef
          }
        )
      ] });
    }
    function ReciptBorder({ children, classes: classes2 = "", elementRef = null }) {
      return /* @__PURE__ */ jsx(Container$1, { classes: "!box-border !mx-7 pt-5 flex-1 h-full", children: /* @__PURE__ */ jsx(Container$1, { classes: "relative h-full", children: /* @__PURE__ */ jsx(
        Container$1,
        {
          classes: `
                        border absolute left-0 bottom-0 top-0 right-0 border-black 
                        rounded-t-3xl border-b-0
                    `,
          children: /* @__PURE__ */ jsx(
            Container$1,
            {
              classes: "\n                            border-8 absolute left-0 bottom-0 top-0 right-0 border-white \n                            rounded-t-3xl p-5 border-b-0 flex items-center flex-col\n                        ",
              children: /* @__PURE__ */ jsx(
                Container$1,
                {
                  classes: `
                                border absolute left-0 bottom-0 top-0 right-0 border-black 
                                rounded-t-2xl border-b-0 flex items-center flex-col overflow-hidden
                            `,
                  children: /* @__PURE__ */ jsx(
                    Container$1,
                    {
                      classes: `
                                    m-auto w-full flex flex-col h-full
                                    ${classes2}
                                `,
                      ref: elementRef,
                      children
                    }
                  )
                }
              )
            }
          )
        }
      ) }) });
    }
    function TextInput({
      children = void 0,
      style = {},
      type = "text",
      classes: classes2 = "",
      inputRef = null,
      ...props
    }) {
      return /* @__PURE__ */ jsx(
        "input",
        {
          style: { ...style },
          type,
          ref: inputRef,
          className: `border h-20 py-2 p-2 w-full bg-transparent ${classes2}`,
          ...props
        }
      );
    }
    function TextAreaInput({ title, classes: classes2 = "", inputRef = null }) {
      return /* @__PURE__ */ jsxs(Container$1, { classes: classes2, children: [
        /* @__PURE__ */ jsx(
          Title,
          {
            classes: "m-2 !mx-3.5 text-base font-bold",
            children: title
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            classes: "\n                    border-2 border-black rounded-xl\n                ",
            inputRef
          }
        )
      ] });
    }
    const styleForAnotherButtonsTypes$1 = {
      root: {
        elevated: "shadow-sm shadow-gray-500 bg-white",
        filled: "bg-blue-600",
        tonal: "bg-blue-200",
        outlined: "bg-white border border-1 border-gray-600",
        text: ""
      },
      title: {
        elevated: "!text-black",
        filled: "text-white",
        tonal: "!text-black",
        outlined: "!text-black",
        text: "!text-black"
      },
      icon: {
        elevated: "!fill-black",
        filled: "fill-white",
        tonal: "!fill-black",
        outlined: "!fill-black",
        text: "!fill-black"
      }
    };
    function CommonButton({
      title,
      type = "elevated",
      Component = null,
      onClick = null,
      classes: classes2 = {},
      titleOnlyInCheck = null,
      checked = false,
      icon = null,
      disabled = false
    }) {
      const finalClasses = {
        root: classes2.root || "",
        title: classes2.title || "",
        icon: classes2.icon || ""
      };
      const HTML = /* @__PURE__ */ jsxs(
        Container$1,
        {
          classes: `
                cursor-pointer py-2 px-4 inline-flex flex-row !box-border items-center 
                justify-center rounded-3xl m-auto 
                ${styleForAnotherButtonsTypes$1.root[type]} ${finalClasses.root}
                ${disabled ? "opacity-50" : ""}
            `,
          onClick: !disabled ? onClick : null,
          children: [
            !!icon && /* @__PURE__ */ jsx(
              Container$1,
              {
                classes: `w-5 h-5 flex items-center justify-center ${finalClasses.icon}`,
                children: icon({ classes: styleForAnotherButtonsTypes$1.icon[type], checked })
              }
            ),
            (titleOnlyInCheck === null || checked) && /* @__PURE__ */ jsx(
              Title,
              {
                classes: `
                        select-none !text-sm text-white font-semibold px-2 
                        ${styleForAnotherButtonsTypes$1.title[type]} ${finalClasses.title}
                    `,
                children: title
              }
            )
          ]
        }
      );
      if (Component) {
        return /* @__PURE__ */ jsx(
          Component.View,
          {
            ...Component.props || {},
            children: HTML
          }
        );
      }
      return HTML;
    }
    function Save({ classes: classes2 = "", fill = "black" }) {
      return /* @__PURE__ */ jsx(
        Svg,
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512",
          classes: `w-4 h-4 fill-white ${classes2}`,
          children: /* @__PURE__ */ jsx(
            SvgPath,
            {
              d: "\n                    M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 \n                    64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 \n                    50.7C340 38.7 323.7 32 306.7 32L64 32zm0 96c0-17.7 14.3-32 32-32l192 \n                    0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 \n                    0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z\n                ",
              fill
            }
          )
        }
      );
    }
    function ScanSaveButton({ onClick }) {
      return /* @__PURE__ */ jsx(
        CommonButton,
        {
          title: "Save",
          type: "outlined",
          classes: {
            root: `
                    !rounded-2xl bg-gray-200 !p-4
                    border border-gray-600 !m-0
                `
          },
          icon: ({ classes: classes2 }) => /* @__PURE__ */ jsx(
            Save,
            {
              classes: `!w-4 !h-5 ${classes2}`,
              fill: "black"
            }
          ),
          onClick
        }
      );
    }
    const styleForAnotherButtonsTypes = {
      simple: {
        root: "",
        icon: "!fill-blue-600"
      },
      full: {
        root: "bg-blue-600",
        icon: "!fill-white"
      },
      border: {
        root: "border border-1 border-blue-600",
        icon: "!fill-blue-600"
      },
      fullSimple: {
        root: "bg-blue-600",
        icon: "!fill-white"
      },
      borderFull: {
        root: "bg-blue-600 border border-1 border-blue-600",
        icon: "!fill-white"
      }
    };
    function IconButton({
      type = "simple",
      checked = false,
      icon,
      classes: classes2 = { root: "" },
      onClick = () => {
      },
      disabled = false
    }) {
      const moreType = type === "full" && checked ? "Simple" : type === "border" && checked ? "Full" : "";
      return /* @__PURE__ */ jsx(
        Container$1,
        {
          classes: `
                cursor-pointer py-3 px-3 inline-flex flex-row items-center 
                justify-center rounded-3xl m-auto 
                ${styleForAnotherButtonsTypes[`${type}${moreType}`]["root"]} ${classes2.root}
                ${disabled ? "opacity-50" : ""}
            `,
          onClick: !disabled ? onClick : null,
          children: !!icon && /* @__PURE__ */ jsx(
            Container$1,
            {
              classes: "min-w-5 min-h-5 flex items-center justify-center",
              children: icon({
                classes: styleForAnotherButtonsTypes[`${type}${moreType}`]["icon"],
                checked
              })
            }
          )
        }
      );
    }
    function Close({ classes: classes2 = "", fill = "black" }) {
      return /* @__PURE__ */ jsx(
        Svg,
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 384 512",
          classes: `w-4 h-4 fill-white ${classes2}`,
          children: /* @__PURE__ */ jsx(
            SvgPath,
            {
              d: "\n                    M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 \n                    0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 \n                    32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 \n                    45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 \n                    12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z\n                ",
              fill
            }
          )
        }
      );
    }
    function ScanCloseButton({ onClick }) {
      return /* @__PURE__ */ jsx(
        IconButton,
        {
          classes: {
            root: `
                    !rounded-2xl bg-gray-200 !p-4
                    border border-gray-600 !mx-0
                `
          },
          icon: ({ classes: classes2 }) => /* @__PURE__ */ jsx(
            Close,
            {
              classes: `!w-4 !h-5 ${classes2}`,
              fill: "black"
            }
          ),
          onClick
        }
      );
    }
    function SaveDataMenuStep({ onClose, onSave }) {
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          ScanCloseButton,
          {
            onClick: onClose
          }
        ),
        /* @__PURE__ */ jsx(
          ScanSaveButton,
          {
            onClick: onSave
          }
        )
      ] });
    }
    function Continue({ classes: classes2 = "", fill = "black" }) {
      return /* @__PURE__ */ jsx(
        Svg,
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          classes: `w-4 h-4 fill-white ${classes2}`,
          children: /* @__PURE__ */ jsx(
            SvgPath,
            {
              d: "\n                    M8.80001 15.8998L4.60001 11.6998L3.20001 13.0998L8.80001 \n                    18.6998L20.8 6.6998L19.4 5.2998L8.80001 15.8998Z\n                 ",
              fill
            }
          )
        }
      );
    }
    function ScanNextButton({ disabled, onClick }) {
      return /* @__PURE__ */ jsx(
        IconButton,
        {
          disabled,
          classes: {
            root: `
                    !rounded-2xl !bg-gray-700 !p-3.5 border border-gray-600
                    flex-row-reverse !mx-0
                `
          },
          icon: ({ classes: classes2 }) => /* @__PURE__ */ jsx(
            Continue,
            {
              classes: `!w-6 !h-6 ${classes2}`,
              fill: "white"
            }
          ),
          onClick
        }
      );
    }
    function TakeAPicCamera({ classes: classes2 = "", fill = "black" }) {
      return /* @__PURE__ */ jsx(
        Svg,
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          classes: `w-4 h-4 fill-white ${classes2}`,
          children: /* @__PURE__ */ jsx(
            SvgPath,
            {
              d: "\n                    M14.25 2.26L14.17 2.22L14.16 2.24C13.46 2.09 12.74 \n                    2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 \n                    22 22 17.52 22 12C22 7.25 18.69 3.28 14.25 2.26ZM19.41 \n                    9H11.42L14.13 4.3C16.53 4.96 18.48 6.72 19.41 9ZM13.1 \n                    4.08L9.12 11L6.4 6.3C7.84 4.88 9.82 4 12 4C12.37 4 12.74 \n                    4.03 13.1 4.08ZM5.7 7.09L8.54 12L9.69 14H4.26C4.1 13.36 4 \n                    12.69 4 12C4 10.15 4.64 8.45 5.7 7.09ZM4.59 15H12.57L9.86 \n                    19.7C7.46 19.03 5.52 17.28 4.59 15ZM10.9 19.91L14.89 13L17.61 \n                    17.7C16.16 19.12 14.18 20 12 20C11.62 20 11.26 19.96 10.9 \n                    19.91ZM18.3 16.91L14.3 10H19.73C19.9 10.64 20 11.31 20 12C20 \n                    13.85 19.36 15.55 18.3 16.91Z\n                ",
              fill
            }
          )
        }
      );
    }
    function ScanTakePictureButton({ disabled, onClick }) {
      return /* @__PURE__ */ jsx(
        IconButton,
        {
          disabled,
          classes: {
            root: `
                    !rounded-full !p-5 bg-white border border-gray-600 !mx-0
                `
          },
          icon: ({ classes: classes2 }) => /* @__PURE__ */ jsx(
            TakeAPicCamera,
            {
              classes: `opacity-75 !w-10 !h-10 mx--6 ${classes2}`
            }
          ),
          onClick
        }
      );
    }
    function ChooseFilesMenuStep({ onClose, onTakePic, onNext, disabledes }) {
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          ScanCloseButton,
          {
            onClick: onClose
          }
        ),
        /* @__PURE__ */ jsx(
          ScanTakePictureButton,
          {
            disabled: !!disabledes.takePic,
            onClick: onTakePic
          }
        ),
        /* @__PURE__ */ jsx(
          ScanNextButton,
          {
            disabled: !!disabledes.next,
            onClick: onNext
          }
        )
      ] });
    }
    function ScanMenu({
      onClose,
      onSave = null,
      onTakePic = null,
      onNext = null,
      stepName,
      disabledes = { takePic: false, next: false }
    }) {
      return /* @__PURE__ */ jsx(
        Container$1,
        {
          classes: `mt-auto flex justify-between flex-row py-5 px-7 bg-gray-400`,
          children: /* @__PURE__ */ jsxs(Steper, { default: stepName, children: [
            /* @__PURE__ */ jsx(
              Step,
              {
                component: ChooseFilesMenuStep,
                props: {
                  onClose,
                  onTakePic,
                  onNext,
                  disabledes
                },
                step: "takeFiles"
              }
            ),
            /* @__PURE__ */ jsx(
              Step,
              {
                component: SaveDataMenuStep,
                props: {
                  onClose,
                  onSave
                },
                step: "save"
              }
            )
          ] })
        }
      );
    }
    function Fixed(Component, classes2 = "", isRef = false) {
      const fn = (props, more) => {
        const ref = isRef ? more : null;
        const key = !isRef ? more : null;
        return /* @__PURE__ */ jsx(
          Container$1,
          {
            classes: `fixed ${classes2}`,
            children: /* @__PURE__ */ reactExports.createElement(
              Component,
              {
                ...props,
                key,
                ref
              }
            )
          }
        );
      };
      return isRef ? React.forwardRef(fn) : fn;
    }
    function elementToValue$1(element) {
      return element.value;
    }
    function elementToValue(element) {
      return elementToValue$1(element) || "";
    }
    const Form = {
      elementToValue
    };
    function dataURItoBlob(dataURI) {
      var byteString = atob(dataURI.split(",")[1]);
      var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
      var ab = new ArrayBuffer(byteString.length);
      var ia2 = new Uint8Array(ab);
      for (var i = 0; i < byteString.length; i++) {
        ia2[i] = byteString.charCodeAt(i);
      }
      var blob = new Blob([ab], { type: mimeString });
      return blob;
    }
    const createLocalurl = (blob) => URL.createObjectURL(blob);
    const openDB = openDB$1;
    const save$1 = save$2;
    const getData = getData$1;
    const find = find$1;
    async function save(name, data, type, path = "") {
      const basePath = "/web/indexedd/files";
      const now2 = (/* @__PURE__ */ new Date()).toISOString();
      const url = `${basePath}${path}/${name}`;
      const onlyPath = `${basePath}${path}`;
      var success = false;
      const fileId = await save$1("files", {
        name,
        type,
        path: onlyPath,
        dataUrl: data,
        created_at: now2,
        updated_at: now2
      });
      success = parseInt(`${fileId}`) > 0;
      const finalUrl = `${url}::${fileId}`;
      return success ? finalUrl : false;
    }
    async function get$1(url) {
      const id2 = parseInt((url.match(/[0-9]+$/) || [])[0]);
      const file2 = await find({ table: "files", id: id2 });
      let fileData = null;
      if (file2) {
        fileData = {
          id: id2,
          name: file2.name,
          type: file2.type,
          dataUrl: file2.dataUrl,
          url: createLocalurl(dataURItoBlob(file2.dataUrl)),
          lastModified: new Date(file2.created_at).getTime(),
          lastModifiedDate: new Date(file2.created_at)
        };
      }
      return fileData;
    }
    class receiptReoistory {
      static async save({ companyName, price, note, photos }) {
        try {
          const now2 = (/* @__PURE__ */ new Date()).toISOString();
          let receipt = {
            company_name: companyName,
            price,
            note,
            transactions_ids: [],
            created_at: now2,
            updated_at: now2
          };
          let receiptId = await save$2("receipts", receipt);
          receiptId = parseInt(`${receiptId}`);
          for (const photo of photos) {
            const type = (photo.type.match(/[^/]+$/) || "")[0];
            const url = await save(
              `${photo.id}.${type}`,
              photo.dataUrl,
              photo.type,
              "/receipts"
            );
            await save$2("receipts_images", {
              receipt_id: receiptId,
              url,
              created_at: now2
            });
          }
          const transactionId = await save$2("transactions", {
            company_name: companyName,
            price,
            doc_created_at: now2,
            receipts_ids: [receiptId],
            created_at: now2,
            updated_at: now2
          });
          receipt.transactions_ids = [transactionId];
          await update("receipts", receiptId, receipt);
          return {
            receiptId,
            transactionId
          };
        } catch (ex) {
          console.log("ex", ex);
          return false;
        }
      }
    }
    function DataStep({ steper: { onMove, dataRef } }) {
      const [photos] = reactExports.useState(dataRef.current.photos);
      const route = useRoute();
      const inputsRef = reactExports.useRef({
        companyName: null,
        price: null,
        note: null
      });
      return /* @__PURE__ */ jsxs(
        Container$1,
        {
          classes: "h-full flex flex-col",
          children: [
            /* @__PURE__ */ jsx(ReciptBorder, { classes: "relative", children: /* @__PURE__ */ jsxs(Container$1, { classes: "mt-5 overflow-y-scroll", children: [
              /* @__PURE__ */ jsx(
                TextInput$1,
                {
                  title: "Company name",
                  classes: "mx-3",
                  inputRef: (ref) => inputsRef.current.companyName = ref
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput$1,
                {
                  title: "Price",
                  classes: "mx-3",
                  inputRef: (ref) => inputsRef.current.price = ref
                }
              ),
              /* @__PURE__ */ jsx(
                TextAreaInput,
                {
                  title: "Note",
                  classes: "mx-3",
                  inputRef: (ref) => inputsRef.current.note = ref
                }
              ),
              /* @__PURE__ */ jsx(Container$1, { classes: "mx-2 my-8 overflow-x-scroll scrollbar-none", children: /* @__PURE__ */ jsx(Container$1, { classes: "h-72 overflow-y-hidden flex flex-row pb-2", children: /* @__PURE__ */ jsx(
                FilesList,
                {
                  files: photos,
                  heightInObject: true,
                  classes: {
                    imageRoot: "mx-2",
                    image: ""
                  },
                  width: 150
                }
              ) }) })
            ] }) }),
            /* @__PURE__ */ jsx(
              ScanMenu,
              {
                stepName: "save",
                onClose: () => onMove("files"),
                onSave: async () => {
                  const data = {
                    photos,
                    companyName: Form.elementToValue(inputsRef.current.companyName),
                    price: parseInt(Form.elementToValue(inputsRef.current.price) || 0),
                    note: Form.elementToValue(inputsRef.current.note)
                  };
                  const saveData = await receiptReoistory.save(data);
                  if (saveData)
                    route.move("/list");
                }
              }
            )
          ]
        }
      );
    }
    const fixeClasses$3 = "top-0 left-0 right-0 bottom-0";
    const DataStep$1 = Fixed(DataStep, fixeClasses$3);
    function Text({ children = void 0, style = {}, classes: classes2 = "", ...props }) {
      return /* @__PURE__ */ jsx(
        "p",
        {
          ...props,
          style: { ...pStyle, ...style },
          className: classes2,
          children
        }
      );
    }
    const pStyle = {
      backgroundColor: "transparent",
      alignItems: "center",
      justifyContent: "center",
      margin: 0,
      color: "black"
    };
    function getFiles() {
      return {
        waitPullFiles: getList()
      };
    }
    const openAppSettings = null;
    async function getList() {
      return {
        files: [],
        status: "unsupport"
      };
    }
    function useFilesList() {
      const { waitPullFiles } = getFiles();
      return {
        waitPullFiles
      };
    }
    function Warning({ classes: classes2 = "", fill = "black" }) {
      return /* @__PURE__ */ jsx(
        Svg,
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512",
          classes: `w-4 h-4 fill-white ${classes2}`,
          children: /* @__PURE__ */ jsx(
            SvgPath,
            {
              d: "\n                   M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 \n                   480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 \n                   241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7\n                   24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z\n                ",
              fill
            }
          )
        }
      );
    }
    function LastDeviceFilesList({ classes: classes2 = "", onChoose }) {
      const { waitPullFiles } = useFilesList();
      const [state, setState] = reactExports.useState({
        files: [],
        status: "wait"
      });
      const { files, status } = state;
      reactExports.useEffect(() => {
        (async function() {
          const { files: files2, status: status2 } = await waitPullFiles;
          setState((state2) => ({
            ...state2,
            files: files2,
            status: status2
          }));
        })();
      }, []);
      return /* @__PURE__ */ jsxs(Container$1, { classes: `h-40 flex flex-row ${classes2}`, children: [
        files.length <= 0 && status === "allow" && /* @__PURE__ */ jsx(
          Container$1,
          {
            classes: `
                        bg-gray-300 h-auto w-44 border border-black
                        rounded-xl p-5 mr-5 ml-2 my-auto 
                    `,
            children: /* @__PURE__ */ jsx(Text, { children: "There isn't images..." })
          }
        ),
        files.map((file) => /* @__PURE__ */ jsx(
          Container$1,
          {
            classes: "m-1 border border-black cursor-pointer",
            onClick: () => onChoose(file),
            children: /* @__PURE__ */ jsx(
              Image$1,
              {
                src: file.url,
                width: 90,
                height: "100%"
              }
            )
          },
          `${file.id}`
        )),
        status === "blocked" && /* @__PURE__ */ jsx(
          Container$1,
          {
            classes: `
                        bg-gray-300 h-auto w-auto border border-black
                        rounded-xl p-5 mr-5
                    `,
            children: /* @__PURE__ */ jsxs(Container$1, { classes: "m-auto w-48", children: [
              /* @__PURE__ */ jsxs(Container$1, { classes: "flex flex-row align-center", children: [
                /* @__PURE__ */ jsx(
                  Warning,
                  {
                    classes: "my-auto mr-2 w-5 h-5",
                    fill: "black"
                  }
                ),
                /* @__PURE__ */ jsx(Title, { classes: "text-left", children: "Access denied" })
              ] }),
              /* @__PURE__ */ jsx(Text, { classes: "text-left !text-sm", children: "Confirm access to photos to view them." }),
              /* @__PURE__ */ jsx(Text, { classes: "text-left !text-sm pt-2", children: "Open the settings of this site and allow access to camera." }),
              !!openAppSettings
            ] })
          }
        )
      ] });
    }
    function Scan({ classes: classes2 = "", fill = "black" }) {
      return /* @__PURE__ */ jsx(
        Svg,
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 25 25",
          classes: `w-4 h-4 fill-white ${classes2}`,
          children: /* @__PURE__ */ jsx(
            SvgPath,
            {
              d: "\n                    M6.5 16.5H18.5V8.5H6.5V16.5ZM8.5 10.5H16.5V14.5H8.5V10.5ZM4.5 15.5H2.5V18.5C2.5 \n                    19.6 3.4 20.5 4.5 20.5H7.5V18.5H4.5V15.5ZM4.5 6.5H7.5V4.5H4.5C3.4 4.5 2.5 5.4 \n                    2.5 6.5V9.5H4.5V6.5ZM20.5 4.5H17.5V6.5H20.5V9.5H22.5V6.5C22.5 5.4 21.6 4.5 20.5 \n                    4.5ZM20.5 18.5H17.5V20.5H20.5C21.6 20.5 22.5 19.6 22.5 18.5V15.5H20.5V18.5Z\n                ",
              fill
            }
          )
        }
      );
    }
    function requestPermisstion() {
      return async () => {
        let allow = true;
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          stream.getTracks().forEach((track) => track.stop());
        } catch (ex) {
          allow = false;
        }
        return allow;
      };
    }
    function cameraExists() {
      const [exists, setExists] = reactExports.useState(false);
      reactExports.useEffect(() => {
        (async () => {
          let devices = await navigator.mediaDevices.enumerateDevices();
          devices = devices.filter((device) => device.kind === "videoinput");
          setExists(devices.length > 0);
        })();
      });
      return exists;
    }
    function useCamera() {
      return {
        requestPermisstion: requestPermisstion(),
        exists: cameraExists()
      };
    }
    function commonjsRequire(path) {
      throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
    }
    var uuidRandom = { exports: {} };
    const __viteBrowserExternal = {};
    const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: __viteBrowserExternal
    }, Symbol.toStringTag, { value: "Module" }));
    const require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
    (function(module2) {
      (function() {
        var buf, bufIdx = 0, hexBytes = [], i;
        for (i = 0; i < 256; i++) {
          hexBytes[i] = (i + 256).toString(16).substr(1);
        }
        uuid2.BUFFER_SIZE = 4096;
        uuid2.bin = uuidBin;
        uuid2.clearBuffer = function() {
          buf = null;
          bufIdx = 0;
        };
        uuid2.test = function(uuid3) {
          if (typeof uuid3 === "string") {
            return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(uuid3);
          }
          return false;
        };
        var crypt0;
        if (typeof crypto !== "undefined") {
          crypt0 = crypto;
        } else if (typeof window !== "undefined" && typeof window.msCrypto !== "undefined") {
          crypt0 = window.msCrypto;
        }
        if (typeof commonjsRequire === "function") {
          crypt0 = crypt0 || require$$0;
          module2.exports = uuid2;
        } else if (typeof window !== "undefined") {
          window.uuid = uuid2;
        }
        uuid2.randomBytes = function() {
          if (crypt0) {
            if (crypt0.randomBytes) {
              return crypt0.randomBytes;
            }
            if (crypt0.getRandomValues) {
              if (typeof Uint8Array.prototype.slice !== "function") {
                return function(n2) {
                  var bytes = new Uint8Array(n2);
                  crypt0.getRandomValues(bytes);
                  return Array.from(bytes);
                };
              }
              return function(n2) {
                var bytes = new Uint8Array(n2);
                crypt0.getRandomValues(bytes);
                return bytes;
              };
            }
          }
          return function(n2) {
            var i2, r2 = [];
            for (i2 = 0; i2 < n2; i2++) {
              r2.push(Math.floor(Math.random() * 256));
            }
            return r2;
          };
        }();
        function randomBytesBuffered(n2) {
          if (!buf || bufIdx + n2 > uuid2.BUFFER_SIZE) {
            bufIdx = 0;
            buf = uuid2.randomBytes(uuid2.BUFFER_SIZE);
          }
          return buf.slice(bufIdx, bufIdx += n2);
        }
        function uuidBin() {
          var b = randomBytesBuffered(16);
          b[6] = b[6] & 15 | 64;
          b[8] = b[8] & 63 | 128;
          return b;
        }
        function uuid2() {
          var b = uuidBin();
          return hexBytes[b[0]] + hexBytes[b[1]] + hexBytes[b[2]] + hexBytes[b[3]] + "-" + hexBytes[b[4]] + hexBytes[b[5]] + "-" + hexBytes[b[6]] + hexBytes[b[7]] + "-" + hexBytes[b[8]] + hexBytes[b[9]] + "-" + hexBytes[b[10]] + hexBytes[b[11]] + hexBytes[b[12]] + hexBytes[b[13]] + hexBytes[b[14]] + hexBytes[b[15]];
        }
      })();
    })(uuidRandom);
    var uuidRandomExports = uuidRandom.exports;
    const uuid = /* @__PURE__ */ getDefaultExportFromCjs(uuidRandomExports);
    function FileInput({ children, classes: classes2 = "", style = {}, onUpload, ...props }) {
      return /* @__PURE__ */ jsx(
        Container$1,
        {
          ...props,
          classes: classes2,
          onClick: async () => {
            const files = await pickFile();
            onUpload(files);
          },
          children
        }
      );
    }
    async function pickFile() {
      const inputElemenet = document.createElement("input");
      inputElemenet.style.display = "none";
      inputElemenet.type = "file";
      inputElemenet.multiple = true;
      return new Promise((res, rej) => {
        const teardown = () => {
          document.body.removeEventListener("focus", teardown, true);
          setTimeout(() => {
            document.body.removeChild(inputElemenet);
            res([]);
          }, 1e3);
        };
        document.body.addEventListener("focus", teardown, true);
        document.body.appendChild(inputElemenet);
        inputElemenet.addEventListener("change", async () => {
          if (inputElemenet.files) {
            let files = [];
            for (let key in inputElemenet.files) {
              if (Object.prototype.hasOwnProperty.call(inputElemenet.files, key)) {
                const file = inputElemenet.files[key];
                const dataUrl = await fileToDataUrl(file);
                files[key] = {
                  id: uuid(),
                  name: file.name,
                  type: file.type,
                  dataUrl,
                  url: URL.createObjectURL(dataURItoBlob(dataUrl)),
                  lastModified: file.lastModified,
                  lastModifiedDate: new Date(file.lastModified)
                };
              }
            }
            res(files);
          }
        });
        inputElemenet.click();
      });
    }
    async function fileToDataUrl(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }
    function CameraAccessDeniedModal({ onClose }) {
      return /* @__PURE__ */ jsxs(Container$1, { classes: "h-full", children: [
        /* @__PURE__ */ jsx(
          Container$1,
          {
            classes: "\n                    bg-black opacity-25\n                    h-full w-full\n                    absolute\n                ",
            onClick: onClose
          }
        ),
        /* @__PURE__ */ jsx(
          Container$1,
          {
            classes: "\n                    flex justify-center align-items-center\n                    h-full w-full m-auto\n                    relative pointer-events-none\n                ",
            children: /* @__PURE__ */ jsxs(
              Container$1,
              {
                classes: `
                        bg-gray-300 border border-black
                        rounded-xl p-5 m-auto !mx-6 flex flex-col
                        pointer-events-auto
                    `,
                children: [
                  /* @__PURE__ */ jsxs(Container$1, { classes: "flex flex-row justify-between", children: [
                    /* @__PURE__ */ jsxs(Container$1, { classes: "flex flex-row", children: [
                      /* @__PURE__ */ jsx(
                        Warning,
                        {
                          classes: "my-auto mx-2 w-6 h-6",
                          fill: "black"
                        }
                      ),
                      /* @__PURE__ */ jsx(Title, { classes: "my-auto m-2", children: "Access denied" })
                    ] }),
                    /* @__PURE__ */ jsx(
                      IconButton,
                      {
                        classes: {
                          root: "!m-0 !p-2"
                        },
                        onClick: onClose,
                        icon: () => {
                          return /* @__PURE__ */ jsx(
                            Close,
                            {
                              classes: " w-5 h-5",
                              fill: "black"
                            }
                          );
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx(Text, { classes: "!text-sm text-left !mt-2", children: "Confirm access to camera for take a picture." }),
                  /* @__PURE__ */ jsxs(Text, { classes: "!text-sm text-left !mt-2", children: [
                    "Open the settings of this ",
                    "site",
                    " and allow access to camera."
                  ] }),
                  /* @__PURE__ */ jsxs(
                    Container$1,
                    {
                      classes: `
                            flex flex-row mt-6 mb-2
                            justify-${"center"}
                        `,
                      children: [
                        /* @__PURE__ */ jsx(
                          CommonButton,
                          {
                            title: "close",
                            onClick: onClose,
                            type: "filled",
                            classes: {
                              root: `
                                    bg-white border border-1 border-black rounded-xl !m-0
                                `,
                              title: "!text-black text-center"
                            }
                          }
                        ),
                        !!openAppSettings
                      ]
                    }
                  )
                ]
              }
            )
          }
        )
      ] });
    }
    const classes = "top-0 bottom-0 left-0 right-0";
    const CameraAccessDeniedModal$1 = Fixed(CameraAccessDeniedModal, classes, false);
    function Upload({ classes: classes2 = "", fill = "white" }) {
      return /* @__PURE__ */ jsx(
        Svg,
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512",
          classes: `w-4 h-4 fill-white ${classes2} !fill-${fill}`,
          children: /* @__PURE__ */ jsx(
            SvgPath,
            {
              d: "\n                    M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 \n                    73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 \n                    32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 \n                    0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 \n                    0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 \n                    28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z\n                "
            }
          )
        }
      );
    }
    function Camera$1({ classes: classes2 = "", fill = "black" }) {
      return /* @__PURE__ */ jsx(
        Svg,
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512",
          classes: `w-4 h-4 fill-white ${classes2}`,
          children: /* @__PURE__ */ jsx(
            SvgPath,
            {
              d: "\n                    M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 \n                    64 64 64H448c35.3 0 64-28.7 \n                    64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 \n                    338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 \n                    96 0 1 1 0 192 96 96 0 1 1 0-192z\n                ",
              fill
            }
          )
        }
      );
    }
    function GetFilesMenu({ onUpload, moveToCamera }) {
      const [showCameraModal, setShowCameraModal] = reactExports.useState(false);
      const { requestPermisstion: requestPermisstion2, exists: CameraExists } = useCamera();
      return /* @__PURE__ */ jsxs(
        Container$1,
        {
          classes: "\n                flex flex-col justify-between py-4\n            ",
          children: [
            /* @__PURE__ */ jsx(
              CommonButton,
              {
                title: "Camera",
                icon: ({ classes: classes2 }) => /* @__PURE__ */ jsx(
                  Camera$1,
                  {
                    fill: "black",
                    classes: `${classes2} !w-4 !h-4`
                  }
                ),
                disabled: !CameraExists,
                onClick: async () => {
                  const allow = await requestPermisstion2();
                  if (allow) {
                    moveToCamera();
                  } else {
                    setShowCameraModal(true);
                  }
                },
                type: "filled",
                classes: {
                  root: `
                        bg-white py-4 border border-1 border-black
                        rounded-full mt-0
                    `,
                  title: "!text-black text-center"
                }
              }
            ),
            /* @__PURE__ */ jsx(
              CommonButton,
              {
                title: "Upload",
                Component: {
                  View: FileInput,
                  props: {
                    onUpload
                  }
                },
                icon: ({ classes: classes2 }) => /* @__PURE__ */ jsx(
                  Upload,
                  {
                    classes: `${classes2} w-4 h-4`,
                    fill: "black"
                  }
                ),
                type: "filled",
                classes: {
                  root: `
                        rounded-full py-4 border border border-black 
                        h-14 w-30 flex-col !mx-4 !flex-row bg-white
                    `,
                  title: "!text-black text-center"
                }
              }
            ),
            showCameraModal && /* @__PURE__ */ jsx(
              CameraAccessDeniedModal$1,
              {
                onClose: () => setShowCameraModal(false)
              }
            )
          ]
        }
      );
    }
    function getElementDimensions(ref) {
      const [dimensions, setDimensions] = reactExports.useState({ width: 0, height: 0 });
      reactExports.useEffect(() => {
        const { width, height } = ref.current.getBoundingClientRect();
        setDimensions({ width, height });
      }, []);
      return dimensions;
    }
    function useElementDimensions(ref) {
      const dimensions = getElementDimensions(ref);
      return dimensions;
    }
    function FilesStep({ steper: { onMove } }) {
      const reciptBorderRef = reactExports.useRef(null);
      const elementDimensions = useElementDimensions(reciptBorderRef);
      function onUpload(photos) {
        if (photos.length > 0) {
          onMove("photos", {
            photos,
            elementDimensions
          });
        }
      }
      function onChoose(photo) {
        onMove("photos", {
          photos: [photo],
          elementDimensions
        });
      }
      return /* @__PURE__ */ jsxs(
        ReciptBorder,
        {
          classes: "justify-center",
          elementRef: reciptBorderRef,
          children: [
            /* @__PURE__ */ jsx(
              Scan,
              {
                fill: "black",
                classes: "!w-20 !h-20 mx-auto"
              }
            ),
            /* @__PURE__ */ jsx(
              Text,
              {
                classes: "!text-black font-bold text-base text-center !mb-6",
                children: "Scan a receipt or invoice"
              }
            ),
            /* @__PURE__ */ jsxs(
              Container$1,
              {
                classes: "flex flex-row mx-auto overflow-x-auto scrollbar-none",
                children: [
                  /* @__PURE__ */ jsx(
                    GetFilesMenu,
                    {
                      onUpload,
                      moveToCamera: () => onMove("camera", {
                        elementDimensions
                      })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    LastDeviceFilesList,
                    {
                      onChoose
                    }
                  )
                ]
              }
            )
          ]
        }
      );
    }
    function Camera({
      takePictureRef,
      onStarted = () => {
      },
      style = {},
      classes: classes2 = { root: "", camera: "" },
      height = null,
      width = null
    }) {
      const videoRef = reactExports.useRef(null);
      var handleTakePicture = async () => {
        var canvas = document.createElement("canvas");
        canvas.width = 700;
        canvas.height = 500;
        canvas.getContext("2d").drawImage(videoRef.current, 0, 0, 700, 500);
        const dataUrl = canvas.toDataURL("image/png");
        const file = {
          id: uuid(),
          name: (/* @__PURE__ */ new Date()).toString(),
          type: "image/png",
          dataUrl,
          url: URL.createObjectURL(dataURItoBlob(dataUrl)),
          lastModified: (/* @__PURE__ */ new Date()).getTime(),
          lastModifiedDate: /* @__PURE__ */ new Date()
        };
        return file;
      };
      reactExports.useEffect(() => {
        navigator.mediaDevices.getUserMedia({
          audio: false,
          video: {
            facingMode: "user",
            height: {
              ideal: height || 1900
            },
            width: {
              ideal: width || 1e3
            }
          }
        }).then(function success(stream) {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
          onStarted();
        });
        takePictureRef.current = handleTakePicture;
        const videoElement = videoRef.current;
        return () => {
          if (videoElement && videoElement.srcObject) {
            videoElement.srcObject.getTracks().forEach((track) => {
              if (track.readyState == "live") {
                track.stop();
              }
            });
          }
        };
      }, []);
      return /* @__PURE__ */ jsx(
        Container$1,
        {
          classes: `h-full ${classes2.root || ""}`,
          style,
          children: /* @__PURE__ */ jsx(
            "video",
            {
              className: `${classes2.camera || ""}`,
              ref: videoRef,
              playsInline: true,
              style: {
                height
              },
              autoPlay: true,
              muted: true
            }
          )
        }
      );
    }
    function CameraStep({ steper: { onMove, dataRef } }) {
      const [state, setState] = reactExports.useState({
        takePictureButtonDisabled: true
      });
      const takePictureRef = reactExports.useRef(null);
      const elementDimensions = dataRef.current.elementDimensions;
      const { takePictureButtonDisabled } = state;
      return /* @__PURE__ */ jsxs(
        Container$1,
        {
          classes: "h-full flex flex-col",
          children: [
            /* @__PURE__ */ jsx(ReciptBorder, { children: /* @__PURE__ */ jsx(Container$1, { classes: "h-full", children: /* @__PURE__ */ jsx(
              Camera,
              {
                takePictureRef,
                height: elementDimensions.height,
                width: elementDimensions.width,
                onStarted: () => {
                  setState((state2) => ({
                    ...state2,
                    takePictureButtonDisabled: false
                  }));
                }
              }
            ) }) }),
            /* @__PURE__ */ jsx(
              ScanMenu,
              {
                onTakePic: async () => {
                  const photo = await takePictureRef.current();
                  onMove("photos", {
                    photos: [{
                      ...photo,
                      height: elementDimensions.height - 100
                    }],
                    elementDimensions
                  });
                },
                disabledes: {
                  takePic: takePictureButtonDisabled,
                  next: true
                },
                onClose: () => {
                  onMove("files");
                }
              }
            )
          ]
        }
      );
    }
    const fixeClasses$2 = "top-0 left-0 right-0 bottom-0";
    const CameraStep$1 = Fixed(CameraStep, fixeClasses$2);
    function useScrollToBottom(waitTime = 200, animated = false) {
      const ref = reactExports.useRef(null);
      reactExports.useEffect(() => {
        if (ref.current) {
          scrollToBottom(ref, { waitTime, animated });
        }
      }, []);
      return ref;
    }
    function PhotosStep({ steper: { onMove, dataRef } }) {
      const [state, setState] = reactExports.useState({
        takePictureButtonDisabled: true
      });
      const [toBottomCount, setToBottomCount] = reactExports.useState(0);
      const { takePictureButtonDisabled } = state;
      const [photos, setPhotos] = reactExports.useState(dataRef.current.photos);
      const containerHeight = dataRef.current.elementDimensions.height;
      const containerWidth = dataRef.current.elementDimensions.width;
      const takePictureRef = reactExports.useRef(null);
      const handleFileFouseRef = reactExports.useRef(null);
      const scrollRef = useScrollToBottom(0);
      reactExports.useEffect(() => {
        if (toBottomCount > 0) {
          Scroll.toBottom(scrollRef);
        }
      }, [toBottomCount]);
      return /* @__PURE__ */ jsxs(
        Container$1,
        {
          classes: "h-full flex flex-col",
          children: [
            /* @__PURE__ */ jsxs(ReciptBorder, { classes: "relative", children: [
              /* @__PURE__ */ jsxs(
                Container$1,
                {
                  classes: "overflow-y-auto",
                  ref: scrollRef,
                  children: [
                    /* @__PURE__ */ jsx(
                      FilesList,
                      {
                        files: photos,
                        heightInObject: true,
                        glonalHeight: containerHeight - 100,
                        handleFileFouseRef
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Container$1,
                      {
                        classes: "relative",
                        style: {
                          height: containerHeight
                        },
                        children: /* @__PURE__ */ jsx(Container$1, { classes: "h-full", children: /* @__PURE__ */ jsx(
                          Camera,
                          {
                            takePictureRef,
                            height: containerHeight - 100,
                            width: containerWidth,
                            onStarted: () => {
                              setState((state2) => ({
                                ...state2,
                                takePictureButtonDisabled: false
                              }));
                            }
                          }
                        ) })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx(Container$1, { classes: "absolute bottom-0", children: /* @__PURE__ */ jsx(Container$1, { classes: "m-2 overflow-x-scroll scrollbar-none", children: /* @__PURE__ */ jsx(Container$1, { classes: "h-20 flex flex-row", children: /* @__PURE__ */ jsx(
                FilesList,
                {
                  files: photos,
                  classes: {
                    imageRoot: "mx-2",
                    image: ""
                  },
                  onClick: (file) => {
                    handleFileFouseRef.current(file.id, scrollRef);
                  },
                  width: 50
                }
              ) }) }) })
            ] }),
            /* @__PURE__ */ jsx(
              ScanMenu,
              {
                stepName: "takeFiles",
                disabledes: {
                  takePic: takePictureButtonDisabled,
                  next: false
                },
                onClose: () => {
                  onMove("files");
                },
                onNext: () => {
                  onMove("data", {
                    photos,
                    elementDimensions: dataRef.current.elementDimensions
                  });
                },
                onTakePic: async () => {
                  const photo = await takePictureRef.current();
                  setPhotos((photos2) => [
                    ...photos2,
                    {
                      ...photo,
                      height: containerHeight - 100
                    }
                  ]);
                  setToBottomCount((count) => count + 1);
                }
              }
            )
          ]
        }
      );
    }
    const fixeClasses$1 = "top-0 left-0 right-0 bottom-0";
    const PhotosStep$1 = Fixed(PhotosStep, fixeClasses$1);
    function ScanPage() {
      return /* @__PURE__ */ jsx(Container$1, { classes: "h-full", children: /* @__PURE__ */ jsxs(Steper, { default: "files", children: [
        /* @__PURE__ */ jsx(
          Step,
          {
            step: "files",
            component: FilesStep
          }
        ),
        /* @__PURE__ */ jsx(
          Step,
          {
            step: "camera",
            component: CameraStep$1
          }
        ),
        /* @__PURE__ */ jsx(
          Step,
          {
            step: "photos",
            component: PhotosStep$1
          }
        ),
        /* @__PURE__ */ jsx(
          Step,
          {
            step: "data",
            component: DataStep$1
          }
        )
      ] }) });
    }
    function Space() {
      return /* @__PURE__ */ jsx("br", {});
    }
    function Help({ classes: classes2 = "", fill = "black" }) {
      return /* @__PURE__ */ jsx(
        Svg,
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512",
          classes: `w-4 h-4 fill-white ${classes2}`,
          children: /* @__PURE__ */ jsx(
            SvgPath,
            {
              d: "\n                    M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 \n                    336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 \n                    0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 \n                    24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 \n                    32 0 1 1 0 64 32 32 0 1 1 0-64z\n                ",
              fill
            }
          )
        }
      );
    }
    function Backup({ classes: classes2 = "", fill = "black" }) {
      return /* @__PURE__ */ jsx(
        Svg,
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 384 512",
          classes: `w-4 h-4 fill-white ${classes2}`,
          children: /* @__PURE__ */ jsx(
            SvgPath,
            {
              d: "\n                    M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 \n                    64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 \n                    0zM216 408c0 13.3-10.7 24-24 24s-24-10.7-24-24V305.9l-31 31c-9.4 \n                    9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 \n                    0l72 72c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31V408z\n                ",
              fill
            }
          )
        }
      );
    }
    function Languages({ classes: classes2 = "", fill = "black" }) {
      return /* @__PURE__ */ jsx(
        Svg,
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512",
          classes: `w-4 h-4 fill-white ${classes2}`,
          children: /* @__PURE__ */ jsx(
            SvgPath,
            {
              d: "\n                    M352 256c0 22.2-1.2 43.6-3.3 \n                    64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 \n                    64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 \n                    3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 \n                    20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 \n                    22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 \n                    27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 \n                    190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 \n                    64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 \n                    446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 \n                    40.7-33.5 51.5C272.6 508.8 263.3 512 256 \n                    512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 \n                    117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 \n                    130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z\n                ",
              fill
            }
          )
        }
      );
    }
    function SettingsPage() {
      return /* @__PURE__ */ jsxs(Container$1, { classes: "mt-5 !mx-7 flex-1 items-start relative", children: [
        /* @__PURE__ */ jsx(
          CommonButton,
          {
            title: "Languages",
            icon: ({ classes: classes2 }) => /* @__PURE__ */ jsx(
              Languages,
              {
                classes: `${classes2} !w-full !h-full`
              }
            ),
            type: "filled",
            classes: {
              root: `
                        bg-white w-44 py-4 w-full !m-0 !justify-start
                        border border-1 border-gray-500
                    `,
              icon: "w-4 h-4 mr-2",
              title: "!text-black text-center"
            }
          }
        ),
        /* @__PURE__ */ jsx(Space, {}),
        /* @__PURE__ */ jsx(Space, {}),
        /* @__PURE__ */ jsx(
          CommonButton,
          {
            title: "Backup",
            icon: ({ classes: classes2 }) => /* @__PURE__ */ jsx(
              Backup,
              {
                classes: `${classes2} !w-full !h-full`
              }
            ),
            type: "filled",
            classes: {
              root: `
                        bg-white w-44 py-4 w-full !m-0 !justify-start
                        border border-1 border-gray-500
                    `,
              icon: "w-4 h-4 mr-2",
              title: "!text-black text-center"
            }
          }
        ),
        /* @__PURE__ */ jsx(Space, {}),
        /* @__PURE__ */ jsx(Space, {}),
        /* @__PURE__ */ jsx(
          CommonButton,
          {
            title: "Help",
            icon: ({ classes: classes2 }) => /* @__PURE__ */ jsx(
              Help,
              {
                classes: `${classes2} !w-full !h-full`
              }
            ),
            type: "filled",
            classes: {
              root: `
                        bg-white w-44 py-4 w-full !m-0 !justify-start
                        border border-1 border-gray-500
                    `,
              icon: "w-4 h-4 mr-2",
              title: "!text-black text-center"
            }
          }
        )
      ] });
    }
    function useListenRoutePath() {
      const data = listen();
      return {
        start: data.start,
        pathname: data.pathname,
        params: data.params
      };
    }
    const get = get$1;
    class TransactionRepository {
      static async find(transactionId) {
        let transactionData = await find({
          table: "transactions",
          id: transactionId
        });
        if (transactionData == null ? void 0 : transactionData.id) {
          const receiptsImages = await getData({
            table: "receipts_images",
            size: 5,
            // TODO - Replace to 20 after build filter for react native driver
            filter: {
              receipt_id: transactionData.receipts_ids[0]
            }
          });
          for (const receiptImage of receiptsImages) {
            receiptImage.file = await get(receiptImage.url);
          }
          transactionData.receiptsImages = receiptsImages;
        }
        return transactionData;
      }
    }
    const prepareData = ({ data }) => {
      const files = {};
      const body = new FormData();
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const item = data[key];
          if (item instanceof Blob) {
            files[key] = item;
            delete data[key];
          }
        }
      }
      if (Object.keys(files).length > 0) {
        for (const key in files) {
          if (Object.prototype.hasOwnProperty.call(files, key)) {
            const file = files[key];
            body.append(key, file);
          }
        }
      }
      body.append("data", JSON.stringify(data));
      return body;
    };
    const sendRequest = async ({ url, data, method = "GET" }) => {
      const request = await fetch(url, {
        method,
        body: prepareData({ data })
      });
      const headers = {};
      request.headers.forEach((value, key) => {
        headers[key] = value;
      });
      const status = request.status;
      const requestData = await request.json();
      return {
        status,
        headers,
        data: requestData
      };
    };
    const prepareFile = async ({ url }) => {
      const response = await fetch(url);
      const blob = await response.blob();
      return blob;
    };
    const post = async ({ url, data = {} }) => {
      const request = await sendRequest({
        url,
        method: "POST",
        data
      });
      return request;
    };
    const Network = {
      // get,
      post,
      prepareFile
    };
    function useOcrData({ transactionId, transaction }) {
      const [ocrData, setOcrData] = reactExports.useState([]);
      reactExports.useEffect(() => {
        (async () => {
          if (transactionId > 0) {
            const newReceiptsImages = [];
            for (const index2 in transaction.receiptsImages) {
              if (Object.prototype.hasOwnProperty.call(transaction.receiptsImages, index2)) {
                const receiptsImage = transaction.receiptsImages[index2];
                const image = await prepareFile({
                  url: receiptsImage.file.url
                });
                const { data } = await Network.post({
                  url: "http://localhost:3034/image/extraction/text",
                  data: {
                    image
                  }
                });
                const now2 = /* @__PURE__ */ new Date();
                const id2 = uuid();
                newReceiptsImages[index2] = {
                  ...data.fields,
                  file: {
                    id: id2,
                    name: id2,
                    type: data.image.type,
                    dataUrl: data.image.dataURL,
                    url: createLocalurl(dataURItoBlob(data.image.dataURL)),
                    lastModified: now2.getTime(),
                    lastModifiedDate: now2
                  }
                };
                const popupContent = `
                            <!DOCTYPE html>
                            <html>
                            <head>
                            <title>View File</title>
                            </head>
                            <body>
                            <img src="${newReceiptsImages[index2].file.url}" class="" style="width: 100%; height: 100%;">
                            </body>
                            </html>
                        `;
                const popupFeatures = `width=800,height=1000000,scrollbars=yes,resizable=yes`;
                const popup = window.open("", transaction.receiptsImages[index2].id, popupFeatures);
                popup.document.open();
                popup.document.write(popupContent);
                popup.document.close();
              }
            }
            setOcrData(newReceiptsImages);
          }
        })();
      }, [transactionId]);
      return ocrData;
    }
    function TransactionPage() {
      var _a, _b;
      const route = useRoute();
      const { start, ...routeData } = useListenRoutePath();
      const pathData = ((routeData == null ? void 0 : routeData.params) || { path: {} }).path;
      const [transaction, setTransaction] = reactExports.useState({});
      const transactionId = parseInt(pathData.id || "0");
      const ocrData = useOcrData({
        transactionId: transaction.id,
        transaction
      });
      reactExports.useEffect(() => {
        (async () => {
          if (transactionId > 0) {
            const transaction2 = await TransactionRepository.find(transactionId);
            if ((transaction2 == null ? void 0 : transaction2.id) > 0) {
              setTransaction(transaction2 || null);
            } else {
              route.move("/");
            }
          }
        })();
      }, [transactionId]);
      const photos = (transaction.receiptsImages || []).map((item, i) => {
        var _a2;
        return ((_a2 = ocrData[i]) == null ? void 0 : _a2.file) || item.file;
      });
      const price = ((_a = ocrData[0]) == null ? void 0 : _a.price) || transaction.price || 0;
      const companyName = ((_b = ocrData[0]) == null ? void 0 : _b.companyName) || transaction.company_name || "";
      return /* @__PURE__ */ jsxs(
        Container$1,
        {
          classes: "p-3 h-full bg-gray-400 z-10",
          children: [
            /* @__PURE__ */ jsx(Container$1, { classes: "mb-4", children: /* @__PURE__ */ jsx(
              IconButton,
              {
                classes: {
                  root: "!m-0 !p-0 !py-2 bg-gray-500 w-10"
                },
                onClick: () => {
                  route.back("/list");
                },
                icon: () => {
                  return /* @__PURE__ */ jsx(
                    Close,
                    {
                      classes: "w-5.5 h-6",
                      fill: "white"
                    }
                  );
                }
              }
            ) }),
            /* @__PURE__ */ jsxs(Container$1, { classes: "p-2 flex flex-row flex-wrap", children: [
              /* @__PURE__ */ jsxs(Container$1, { classes: "p-2 m-2 mt-0 px-4 bg-white flex flex-row", children: [
                /* @__PURE__ */ jsx(Text, { classes: "font-bold !text-sm !m-auto", children: "Transaction id:" }),
                /* @__PURE__ */ jsx(Text, { classes: "pl-2", children: transaction.id || transactionId })
              ] }),
              /* @__PURE__ */ jsxs(Container$1, { classes: "p-2 m-2 mt-0 px-4 bg-white flex flex-row", children: [
                /* @__PURE__ */ jsx(Text, { classes: "font-bold !text-sm !m-auto", children: "Price:" }),
                /* @__PURE__ */ jsxs(Text, { classes: "pl-2", children: [
                  price,
                  "$"
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Container$1, { classes: "p-2 m-2 mt-0 px-4 bg-white flex flex-row", children: [
                /* @__PURE__ */ jsx(Text, { classes: "font-bold !text-sm !m-auto", children: "Company name:" }),
                /* @__PURE__ */ jsx(Text, { classes: "pl-2", children: companyName })
              ] })
            ] }),
            /* @__PURE__ */ jsx(Container$1, { classes: "mx-2 my-8 overflow-x-scroll scrollbar-none", children: /* @__PURE__ */ jsx(Container$1, { classes: "h-80 overflow-y-hidden flex flex-row pb-2", children: /* @__PURE__ */ jsx(
              FilesList,
              {
                files: photos,
                heightInObject: true,
                classes: {
                  imageRoot: "mx-2",
                  image: ""
                },
                width: 200
              }
            ) }) })
          ]
        }
      );
    }
    const fixeClasses = "top-0 left-0 right-0 bottom-0";
    const TransactionPage$1 = Fixed(TransactionPage, fixeClasses);
    class HelpRoute {
      static setGetPath(path, component) {
        return {
          component,
          path,
          method: "GET"
        };
      }
      static setName(name, currentName) {
        name = name.replace(/[\/\\]+/g, ".");
        let parts = currentName.replace(/[\/\\]+/g, ".").split(".");
        parts = parts.filter((value) => (value == null ? void 0 : value.length) > 0);
        parts.push(name);
        return {
          name: parts.join(".").replace(/^\.|\.$/g, "")
        };
      }
      static setPrefix(prefix, currentPrefix, name, currentName) {
        prefix = prefix.replace(/[\\\.]+/g, "/");
        let parts = currentPrefix.replace(/[\.\\]+/g, "/").split("/");
        parts = parts.filter((value) => (value == null ? void 0 : value.length) > 0);
        parts.push(prefix);
        const data = {
          prefix: `/${parts.join("/").replace(/^\/|\/$/g, "")}`
        };
        if ((name == null ? void 0 : name.length) > 0) {
          data.name = this.setName(currentName || "", name).name;
        }
        return data;
      }
      static setNamefix(prename, currentName, currentPrefix) {
        return this.setPrefix(prename, currentPrefix, prename, currentName);
      }
      static mergeParams(currentParams, newParams) {
        return {
          ...currentParams,
          ...newParams,
          name: this.setName(newParams.name || "", currentParams.name || "").name,
          prefix: this.setPrefix(newParams.prefix || "", currentParams.prefix || "", "", "").prefix
        };
      }
    }
    const _FinalRouteData = class _FinalRouteData2 {
      static setItem(params = {}, uuid2) {
        _FinalRouteData2.data[uuid2] = params;
        return this;
      }
      static getConfiguration() {
        return _FinalRouteData2.data;
      }
      static reset() {
        _FinalRouteData2.data = {};
        return this;
      }
    };
    _FinalRouteData.data = {};
    let FinalRouteData = _FinalRouteData;
    class FinalRoute {
      constructor(params = {}, uuid2 = FinalRoute.getUuid()) {
        this.params = params;
        this.uuid = uuid2;
        FinalRouteData.setItem(params, uuid2);
      }
      static getUuid() {
        return uuid();
      }
      name(name) {
        const newParams = HelpRoute.setName(name, "");
        this.params = HelpRoute.mergeParams(this.params, newParams);
        FinalRouteData.setItem(this.params, this.uuid);
        return this;
      }
    }
    class RouteProccess {
      constructor(params = {}) {
        this.params = params;
      }
      get(path, component) {
        const newParams = HelpRoute.setGetPath(path, component);
        return new FinalRoute(HelpRoute.mergeParams(this.params, newParams));
      }
      prefix(prefix, name = "") {
        const newParams = HelpRoute.setPrefix(prefix, "", name, "");
        this.params = HelpRoute.mergeParams(this.params, newParams);
        return this;
      }
      namefix(namefix) {
        const newParams = HelpRoute.setNamefix(namefix, "", "");
        this.params = HelpRoute.mergeParams(this.params, newParams);
        return this;
      }
      name(name) {
        const newParams = HelpRoute.setName(name, "");
        this.params = HelpRoute.mergeParams(this.params, newParams);
        return this;
      }
      group(func) {
        const route = new RouteProccess(this.params);
        func(route);
        return this;
      }
    }
    class Route {
      static init() {
        FinalRouteData.reset();
      }
      static namefix(namefix) {
        return new RouteProccess(HelpRoute.setNamefix(namefix, "", ""));
      }
      prefix(prefix, name = "") {
        return new RouteProccess(HelpRoute.setPrefix(prefix, "", name, ""));
      }
      static get(path, component) {
        return new FinalRoute(HelpRoute.setGetPath(path, component));
      }
      name(name) {
        return new RouteProccess(HelpRoute.setName(name, ""));
      }
      group(func) {
        const route = new RouteProccess({});
        func(route);
        return route;
      }
    }
    Route.init();
    Route.get("/", ScanPage).name("home");
    Route.get("/settings", SettingsPage).name("settings");
    Route.get("/list", ListPage).name("list");
    Route.get("/transaction/:id", TransactionPage$1).name("dynamic-transaction");
    function Router() {
      const data = FinalRouteData.getConfiguration();
      return /* @__PURE__ */ jsxs(Routes, { children: [
        Object.keys(data).map((uuid2) => {
          const params = data[uuid2];
          return /* @__PURE__ */ jsx(
            Route$1,
            {
              path: params.path,
              Component: params.component
            },
            uuid2
          );
        }),
        /* @__PURE__ */ jsx(
          Route$1,
          {
            path: "*",
            Component: () => {
              const route = useRoute();
              reactExports.useEffect(() => {
                route.move("/");
              }, []);
              return null;
            }
          }
        )
      ] });
    }
    function List({ classes: classes2 = "", fill = "white" }) {
      return /* @__PURE__ */ jsx(
        Svg,
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 17 15",
          classes: `w-4 h-4 fill-white ${classes2}`,
          children: /* @__PURE__ */ jsx(
            SvgPath,
            {
              d: "\n                    M0.5 10.5H16.5V8.5H0.5V10.5ZM0.5 14.5H16.5V12.5H0.5V14.5ZM0.5 \n                    6.5H16.5V4.5H0.5V6.5ZM0.5 0.5V2.5H16.5V0.5H0.5Z\n                ",
              fill
            }
          )
        }
      );
    }
    function Settings({ classes: classes2 = "", fill = "white" }) {
      return /* @__PURE__ */ jsx(
        Svg,
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 21 21",
          classes: `w-4 h-4 fill-white ${classes2}`,
          children: /* @__PURE__ */ jsx(
            SvgPath,
            {
              d: "\n                    M13.81 19.53C13.71 20.21 13.09 20.75 12.35 20.75H8.64999C7.90999 20.75 \n                    7.28999 20.21 7.19999 19.48L6.92999 17.59C6.65999 17.45 6.39999 17.3 6.13999 \n                    17.13L4.33999 17.85C3.63999 18.11 2.86999 17.82 2.52999 17.2L0.69999 \n                    14.03C0.34999 13.37 0.49999 12.59 1.05999 12.15L2.58999 10.96C2.57999 \n                    10.81 2.56999 10.66 2.56999 10.5C2.56999 10.35 2.57999 10.19 2.58999 \n                    10.04L1.06999 8.84999C0.47999 8.39999 0.32999 7.58999 0.69999 6.96999L2.54999 \n                    3.77999C2.88999 3.15999 3.65999 2.87999 4.33999 3.14999L6.14999 3.87999C6.40999 \n                    3.70999 6.66999 3.55999 6.92999 3.41999L7.19999 1.50999C7.28999 0.809995 \n                    7.90999 0.259995 8.63999 0.259995H12.34C13.08 0.259995 13.7 0.799994 13.79 \n                    1.52999L14.06 3.41999C14.33 3.55999 14.59 3.70999 14.85 3.87999L16.65 \n                    3.15999C17.36 2.89999 18.13 3.18999 18.47 3.80999L20.31 6.98999C20.67 \n                    7.64999 20.51 8.42999 19.95 8.86999L18.43 10.06C18.44 10.21 18.45 10.36 \n                    18.45 10.52C18.45 10.68 18.44 10.83 18.43 10.98L19.95 12.17C20.51 12.62 \n                    20.67 13.4 20.32 14.03L18.46 17.25C18.12 17.87 17.35 18.15 16.66 17.88L14.86 \n                    17.16C14.6 17.33 14.34 17.48 14.08 17.62L13.81 19.53ZM9.11999 18.75H11.88L12.25 \n                    16.2L12.78 15.98C13.22 15.8 13.66 15.54 14.12 15.2L14.57 14.86L16.95 15.82L18.33 \n                    13.42L16.3 11.84L16.37 11.28L16.3731 11.2531C16.402 11.0027 16.43 10.7607 \n                    16.43 10.5C16.43 10.23 16.4 9.96999 16.37 9.71999L16.3 9.15999L18.33 \n                    7.57999L16.94 5.17999L14.55 6.13999L14.1 5.78999C13.68 5.46999 13.23 \n                    5.20999 12.77 5.01999L12.25 4.79999L11.88 2.24999H9.11999L8.74999 \n                    4.79999L8.21999 5.00999C7.77999 5.19999 7.33999 5.44999 6.87999 5.79999L6.42999 \n                    6.12999L4.04999 5.17999L2.65999 7.56999L4.68999 9.14999L4.61999 9.70999C4.58999 \n                    9.96999 4.55999 10.24 4.55999 10.5C4.55999 10.76 4.57999 11.03 4.61999 \n                    11.28L4.68999 11.84L2.65999 13.42L4.03999 15.82L6.42999 14.86L6.87999 \n                    15.21C7.30999 15.54 7.73999 15.79 8.20999 15.98L8.73999 16.2L9.11999 \n                    18.75ZM14 10.5C14 12.433 12.433 14 10.5 14C8.56699 14 6.99999 12.433 6.99999 \n                    10.5C6.99999 8.567 8.56699 6.99999 10.5 6.99999C12.433 6.99999 14 8.567 14 10.5Z\n                ",
              fill
            }
          )
        }
      );
    }
    function Menu() {
      const [state, setState] = reactExports.useState({
        currentButton: 2
      });
      const { currentButton } = state;
      const route = useRoute();
      const routeData = useListenRoutePath();
      reactExports.useEffect(() => {
        const path = routeData.pathname;
        let number = path === "/settings" ? 1 : 3;
        number = path !== "/list" && number !== 1 ? 2 : number;
        handleClick(number);
      }, [routeData.pathname]);
      const handleClick = (buttonNumber) => {
        setState((state2) => ({
          ...state2,
          currentButton: buttonNumber
        }));
      };
      const isSettingsPage = currentButton == 1;
      const isScanPage = currentButton == 2;
      const isListPage = currentButton == 3;
      return /* @__PURE__ */ jsxs(Container$1, { classes: "flex flex-row my-5 bg-gray-400", children: [
        /* @__PURE__ */ jsx(
          CommonButton,
          {
            title: "Settings",
            checked: isSettingsPage,
            titleOnlyInCheck: true,
            type: "filled",
            classes: {
              root: `
                        !rounded-2xl bg-gray-700 !p-4 
                        ${isSettingsPage ? "!pr-3" : ""}
                    `
            },
            icon: ({ classes: classes2, checked }) => /* @__PURE__ */ jsx(
              Settings,
              {
                classes: `!w-8 !h-5 ${classes2}`
              }
            ),
            onClick: () => route.move("/settings")
          }
        ),
        /* @__PURE__ */ jsx(
          CommonButton,
          {
            title: "Scan",
            type: "filled",
            checked: isScanPage,
            classes: {
              root: `
                        !rounded-2xl bg-white !p-4 
                        border border-1 border-gray-500
                    `,
              title: "!text-black"
            },
            icon: ({ classes: classes2, checked }) => /* @__PURE__ */ jsx(
              Scan,
              {
                classes: `!w-8 !h-5 ${classes2}`
              }
            ),
            onClick: () => route.move("/")
          }
        ),
        /* @__PURE__ */ jsx(
          CommonButton,
          {
            type: "filled",
            checked: isListPage,
            title: "List",
            titleOnlyInCheck: true,
            classes: {
              root: `
                        !rounded-2xl bg-gray-700 !p-4
                        ${isListPage ? "!pr-3" : ""}
                    `
            },
            icon: ({ classes: classes2, checked }) => /* @__PURE__ */ jsx(
              List,
              {
                classes: `!w-7 !h-4 ${classes2}`
              }
            ),
            onClick: () => route.move("/list")
          }
        )
      ] });
    }
    const tables = [
      {
        name: "receipts",
        columns: [
          { name: "company_name", type: "varchar" },
          { name: "price", type: "integer" },
          { name: "note", type: "varchar" },
          { name: "transactions_ids", type: "TEXT" },
          { name: "doc_created_at", type: "datetime" },
          { name: "created_at", type: "datetime" },
          { name: "updated_at", type: "datetime" }
        ]
      },
      {
        name: "receipts_images",
        columns: [
          { name: "receipt_id", type: "integer" },
          { name: "url", type: "varchar" },
          { name: "created_at", type: "datetime" }
        ]
      },
      {
        name: "transactions",
        columns: [
          { name: "company_name", type: "varchar" },
          { name: "price", type: "integer" },
          { name: "doc_created_at", type: "datetime" },
          { name: "receipts_ids", type: "TEXT" },
          { name: "created_at", type: "datetime" },
          { name: "updated_at", type: "datetime" }
        ]
      }
    ];
    const init = async () => {
      await openDB(tables);
    };
    function getMode() {
      return typeof window === "undefined" ? "ssr" : "csr";
    }
    function useMode() {
      return getMode();
    }
    function App() {
      const mode = useMode();
      const isCSR = mode === "csr";
      const [started, setStarted] = reactExports.useState(false);
      reactExports.useEffect(() => {
        (async () => {
          if (isCSR)
            await init();
          setStarted(true);
        })();
      }, []);
      if (!started)
        return /* @__PURE__ */ jsx(Container$1, { classes: "h-full bg-gray-400 flex justify-center", children: /* @__PURE__ */ jsx(Title, { classes: "text-center m-auto", children: "The app is loading!..." }) });
      return /* @__PURE__ */ jsxs(
        Container$1,
        {
          classes: "h-full bg-gray-400 flex flex-col",
          children: [
            /* @__PURE__ */ jsx(Router, {}),
            /* @__PURE__ */ jsx(Menu, {})
          ]
        }
      );
    }
    client.hydrateRoot(
      document.getElementById("app"),
      /* @__PURE__ */ jsx(BrowserRouter, { children: /* @__PURE__ */ jsx("div", { style: { height: "100%" }, children: /* @__PURE__ */ jsx(App, {}) }) })
    );
  }
});
export default require_main_001();
//# sourceMappingURL=main.d0d4c6e1.js.map
