var D = Object.defineProperty, M = Object.defineProperties;
var N = Object.getOwnPropertyDescriptors;
var T = Object.getOwnPropertySymbols;
var P = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var C = (n, r, e) => r in n ? D(n, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[r] = e, _ = (n, r) => {
  for (var e in r || (r = {}))
    P.call(r, e) && C(n, e, r[e]);
  if (T)
    for (var e of T(r))
      S.call(r, e) && C(n, e, r[e]);
  return n;
}, $ = (n, r) => M(n, N(r));
var i = (n, r, e) => new Promise((t, d) => {
  var s = (l) => {
    try {
      u(e.next(l));
    } catch (c) {
      d(c);
    }
  }, a = (l) => {
    try {
      u(e.throw(l));
    } catch (c) {
      d(c);
    }
  }, u = (l) => l.done ? t(l.value) : Promise.resolve(l.value).then(s, a);
  u((e = e.apply(n, r)).next());
});
import { ref as f, defineComponent as y, onMounted as I, onBeforeUnmount as A, openBlock as b, createBlock as p, resolveDynamicComponent as B, withCtx as E, renderSlot as L, nextTick as U, watch as v, unref as x, Teleport as V, mergeProps as j, createCommentVNode as q } from "vue";
import { Bartender as z } from "@fokke-/bartender.js";
const m = f(), F = (n = {}, r = {}) => {
  try {
    m.value = new z(n, r);
  } catch (e) {
    console.error(e);
  }
  return m;
}, h = () => ({
  createInstance: F,
  bartender: m
}), O = /* @__PURE__ */ y({
  __name: "Bartender",
  props: {
    debug: { type: Boolean, default: !1 },
    is: { default: "div" },
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
    "after-close",
    "update"
  ],
  setup(n, { emit: r }) {
    const e = n, t = f(null), { createInstance: d, bartender: s } = h();
    return I(() => {
      try {
        if (!t.value)
          return;
        t.value.addEventListener("bartender-init", (a) => r("init", a)), t.value.addEventListener("bartender-destroyed", (a) => r("destroyed", a)), t.value.addEventListener("bartender-bar-added", (a) => r("bar-added", a)), t.value.addEventListener("bartender-bar-removed", (a) => r("bar-removed", a)), t.value.addEventListener("bartender-bar-updated", (a) => r("bar-updated", a)), t.value.addEventListener("bartender-bar-before-open", (a) => r("before-open", a)), t.value.addEventListener("bartender-bar-after-open", (a) => r("after-open", a)), t.value.addEventListener("bartender-bar-before-close", (a) => r("before-close", a)), t.value.addEventListener("bartender-bar-after-close", (a) => r("after-close", a)), d({
          debug: e.debug,
          el: t.value,
          contentEl: ".bartender__content",
          switchTimeout: e.switchTimeout
        });
      } catch (a) {
        console.error(a);
      }
    }), A(() => i(this, null, function* () {
      s.value && s.value.destroy();
    })), (a, u) => (b(), p(B(e.is), {
      ref_key: "el",
      ref: t,
      class: "bartender"
    }, {
      default: E(() => [
        L(a.$slots, "default")
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
    return (e, t) => (b(), p(B(r.is), { class: "bartender__content" }, {
      default: E(() => [
        L(e.$slots, "default")
      ]),
      _: 3
    }));
  }
}), G = { inheritAttrs: !1 }, R = /* @__PURE__ */ y($(_({}, G), {
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
    const e = n, { bartender: t } = h(), d = f(!1), s = f(null), a = f();
    I(() => i(this, null, function* () {
      if (t.value) {
        u();
        return;
      }
      window.addEventListener("bartender-init", u, { once: !0 });
    })), A(() => {
      !t.value || !t.value.getBar(e.name) || t.value.removeBar(e.name);
    });
    const u = () => i(this, null, function* () {
      var l, c, g, k, w;
      if (d.value = !0, yield U(), !!t.value) {
        try {
          a.value = t.value.addBar(e.name, _({
            el: s.value
          }, e));
        } catch (o) {
          console.error(o);
          return;
        }
        v(() => e.position, (o) => a.value.position = o), v(() => e.mode, (o) => a.value.mode = o), v(() => e.overlay, (o) => a.value.overlay = !!o), v(() => e.permanent, (o) => a.value.permanent = !!o), v(() => e.scrollTop, (o) => a.value.scrollTop = !!o), (l = s.value) == null || l.addEventListener("bartender-bar-updated", (o) => r("bar-updated", o)), (c = s.value) == null || c.addEventListener("bartender-bar-before-open", (o) => r("before-open", o)), (g = s.value) == null || g.addEventListener("bartender-bar-after-open", (o) => r("after-open", o)), (k = s.value) == null || k.addEventListener("bartender-bar-before-close", (o) => r("before-close", o)), (w = s.value) == null || w.addEventListener("bartender-bar-after-close", (o) => r("after-close", o));
      }
    });
    return (l, c) => x(t) && d.value === !0 ? (b(), p(V, {
      key: 0,
      to: x(t).el
    }, [
      (b(), p(B(e.is), j({
        ref_key: "el",
        ref: s,
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
        mounted(e, t) {
          e.addEventListener("click", () => {
            var d;
            (d = n.value) == null || d.open(t.value, e);
          });
        }
      }), r.directive("bartender-toggle", {
        mounted(e, t) {
          e.addEventListener("click", () => {
            var d;
            (d = n.value) == null || d.toggle(t.value, e);
          });
        }
      }), r.directive("bartender-close", {
        mounted(e, t) {
          e.addEventListener("click", () => {
            var d;
            (d = n.value) == null || d.close(t.value);
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
