var I = Object.defineProperty, M = Object.defineProperties;
var N = Object.getOwnPropertyDescriptors;
var k = Object.getOwnPropertySymbols;
var P = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var C = (n, r, e) => r in n ? I(n, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[r] = e, m = (n, r) => {
  for (var e in r || (r = {}))
    P.call(r, e) && C(n, e, r[e]);
  if (k)
    for (var e of k(r))
      S.call(r, e) && C(n, e, r[e]);
  return n;
}, $ = (n, r) => M(n, N(r));
var f = (n, r, e) => new Promise((a, d) => {
  var t = (l) => {
    try {
      v(e.next(l));
    } catch (c) {
      d(c);
    }
  }, s = (l) => {
    try {
      v(e.throw(l));
    } catch (c) {
      d(c);
    }
  }, v = (l) => l.done ? a(l.value) : Promise.resolve(l.value).then(t, s);
  v((e = e.apply(n, r)).next());
});
import { ref as i, defineComponent as y, onMounted as A, watch as u, onBeforeUnmount as D, openBlock as b, createBlock as p, resolveDynamicComponent as B, withCtx as E, renderSlot as L, nextTick as U, unref as x, Teleport as V, mergeProps as j, createCommentVNode as q } from "vue";
import { Bartender as z } from "@fokke-/bartender.js";
const _ = i(), F = (n = {}, r = {}) => {
  try {
    _.value = new z(n, r);
  } catch (e) {
    console.error(e);
  }
  return _;
}, h = () => ({ bartender: _ }), O = /* @__PURE__ */ y({
  __name: "Bartender",
  props: {
    is: { default: "div" },
    debug: { type: Boolean, default: void 0 },
    switchTimeout: { default: void 0 }
  },
  emits: [
    "init",
    "destroyed",
    "bar-added",
    "bar-removed",
    "bar-updated",
    "before-open",
    "after-open",
    "before-close",
    "after-close"
  ],
  setup(n, { emit: r }) {
    const e = n, a = i(null), { bartender: d } = h();
    return A(() => {
      try {
        if (!a.value)
          return;
        a.value.addEventListener("bartender-init", (t) => r("init", t)), a.value.addEventListener("bartender-destroyed", (t) => r("destroyed", t)), a.value.addEventListener("bartender-bar-added", (t) => r("bar-added", t)), a.value.addEventListener("bartender-bar-removed", (t) => r("bar-removed", t)), a.value.addEventListener("bartender-bar-updated", (t) => r("bar-updated", t)), a.value.addEventListener("bartender-bar-before-open", (t) => r("before-open", t)), a.value.addEventListener("bartender-bar-after-open", (t) => r("after-open", t)), a.value.addEventListener("bartender-bar-before-close", (t) => r("before-close", t)), a.value.addEventListener("bartender-bar-after-close", (t) => r("after-close", t)), F({
          debug: e.debug,
          el: a.value,
          contentEl: ".bartender__content",
          switchTimeout: e.switchTimeout
        });
      } catch (t) {
        console.error(t);
      }
      u(() => e.debug, (t) => {
        d.value && (d.value.debug = !!t);
      }), u(() => e.switchTimeout, (t) => {
        !d.value || !t || (d.value.switchTimeout = t);
      });
    }), D(() => f(this, null, function* () {
      d.value && d.value.destroy();
    })), (t, s) => (b(), p(B(e.is), {
      ref_key: "el",
      ref: a,
      class: "bartender"
    }, {
      default: E(() => [
        L(t.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), Q = /* @__PURE__ */ y({
  __name: "BartenderContent",
  props: {
    is: { default: "div" }
  },
  setup(n) {
    const r = n;
    return (e, a) => (b(), p(B(r.is), { class: "bartender__content" }, {
      default: E(() => [
        L(e.$slots, "default")
      ]),
      _: 3
    }));
  }
}), G = { inheritAttrs: !1 }, R = /* @__PURE__ */ y($(m({}, G), {
  __name: "BartenderBar",
  props: {
    is: { default: "div" },
    name: {},
    position: { default: "left" },
    mode: { default: "float" },
    overlay: { type: Boolean, default: !0 },
    permanent: { type: Boolean, default: !1 },
    scrollTop: { type: Boolean, default: !0 },
    focusTrap: { type: Boolean, default: !1 }
  },
  emits: [
    "bar-updated",
    "before-open",
    "after-open",
    "before-close",
    "after-close"
  ],
  setup(n, { emit: r }) {
    const e = n, { bartender: a } = h(), d = i(!1), t = i(null), s = i();
    A(() => f(this, null, function* () {
      if (a.value) {
        v();
        return;
      }
      window.addEventListener("bartender-init", v, { once: !0 });
    })), D(() => {
      !a.value || !a.value.getBar(e.name) || a.value.removeBar(e.name);
    });
    const v = () => f(this, null, function* () {
      var l, c, T, g, w;
      if (d.value = !0, yield U(), !!a.value) {
        try {
          s.value = a.value.addBar(e.name, m({
            el: t.value
          }, e));
        } catch (o) {
          console.error(o);
          return;
        }
        u(() => e.position, (o) => s.value.position = o), u(() => e.mode, (o) => s.value.mode = o), u(() => e.overlay, (o) => s.value.overlay = !!o), u(() => e.permanent, (o) => s.value.permanent = !!o), u(() => e.scrollTop, (o) => s.value.scrollTop = !!o), u(() => e.focusTrap, (o) => s.value.focusTrap = !!o), (l = t.value) == null || l.addEventListener("bartender-bar-updated", (o) => r("bar-updated", o)), (c = t.value) == null || c.addEventListener("bartender-bar-before-open", (o) => r("before-open", o)), (T = t.value) == null || T.addEventListener("bartender-bar-after-open", (o) => r("after-open", o)), (g = t.value) == null || g.addEventListener("bartender-bar-before-close", (o) => r("before-close", o)), (w = t.value) == null || w.addEventListener("bartender-bar-after-close", (o) => r("after-close", o));
      }
    });
    return (l, c) => x(a) && d.value === !0 ? (b(), p(V, {
      key: 0,
      to: x(a).el
    }, [
      (b(), p(B(e.is), j({
        ref_key: "el",
        ref: t,
        class: "bartender__bar"
      }, l.$attrs), {
        default: E(() => [
          L(l.$slots, "default")
        ]),
        _: 3
      }, 16))
    ], 8, ["to"])) : q("", !0);
  }
})), W = () => {
  const { bartender: n } = h();
  return {
    install(r) {
      r.directive("bartender-open", {
        mounted(e, a) {
          e.addEventListener("click", () => {
            var d;
            (d = n.value) == null || d.open(a.value, e);
          });
        }
      }), r.directive("bartender-toggle", {
        mounted(e, a) {
          e.addEventListener("click", () => {
            var d;
            (d = n.value) == null || d.toggle(a.value, e);
          });
        }
      }), r.directive("bartender-close", {
        mounted(e, a) {
          e.addEventListener("click", () => {
            var d;
            (d = n.value) == null || d.close(a.value);
          });
        }
      });
    }
  };
};
export {
  O as Bartender,
  R as BartenderBar,
  Q as BartenderContent,
  W as createBartender,
  h as useBartender
};
//# sourceMappingURL=VueBartender.js.map
