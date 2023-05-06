var M = Object.defineProperty, N = Object.defineProperties;
var P = Object.getOwnPropertyDescriptors;
var C = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, U = Object.prototype.propertyIsEnumerable;
var $ = (n, e, r) => e in n ? M(n, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[e] = r, m = (n, e) => {
  for (var r in e || (e = {}))
    S.call(e, r) && $(n, r, e[r]);
  if (C)
    for (var r of C(e))
      U.call(e, r) && $(n, r, e[r]);
  return n;
}, x = (n, e) => N(n, P(e));
var i = (n, e, r) => new Promise((t, s) => {
  var l = (d) => {
    try {
      u(r.next(d));
    } catch (c) {
      s(c);
    }
  }, a = (d) => {
    try {
      u(r.throw(d));
    } catch (c) {
      s(c);
    }
  }, u = (d) => d.done ? t(d.value) : Promise.resolve(d.value).then(l, a);
  u((r = r.apply(n, e)).next());
});
import { ref as f, defineComponent as y, onMounted as A, onBeforeUnmount as D, openBlock as b, createBlock as p, resolveDynamicComponent as E, withCtx as L, renderSlot as h, nextTick as V, watch as v, unref as I, Teleport as j, mergeProps as q, createCommentVNode as z } from "vue";
import { Bartender as F } from "@fokke-/bartender.js";
const B = f(), G = (n = {}, e = {}) => {
  try {
    B.value = new F(n, e);
  } catch (r) {
    console.error(r);
  }
  return B;
}, T = () => ({
  createInstance: G,
  bartender: B
}), H = /* @__PURE__ */ y({
  __name: "Bartender",
  props: {
    debug: { type: Boolean, default: !1 },
    is: { default: "div" },
    switchTimeout: { default: void 0 },
    focusTrap: { type: Boolean, default: !0 }
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
  setup(n, { emit: e }) {
    const r = n, t = f(null), { createInstance: s, bartender: l } = T();
    return A(() => {
      try {
        if (!t.value)
          return;
        t.value.addEventListener("bartender-init", (a) => e("init", a)), t.value.addEventListener("bartender-destroyed", (a) => e("destroyed", a)), t.value.addEventListener("bartender-bar-added", (a) => e("bar-added", a)), t.value.addEventListener("bartender-bar-removed", (a) => e("bar-removed", a)), t.value.addEventListener("bartender-bar-updated", (a) => e("bar-updated", a)), t.value.addEventListener("bartender-bar-before-open", (a) => e("before-open", a)), t.value.addEventListener("bartender-bar-after-open", (a) => e("after-open", a)), t.value.addEventListener("bartender-bar-before-close", (a) => e("before-close", a)), t.value.addEventListener("bartender-bar-after-close", (a) => e("after-close", a)), s({
          debug: r.debug,
          el: t.value,
          contentEl: ".bartender__content",
          switchTimeout: r.switchTimeout,
          focusTrap: r.focusTrap
        });
      } catch (a) {
        console.error(a);
      }
    }), D(() => i(this, null, function* () {
      l.value && l.value.destroy();
    })), (a, u) => (b(), p(E(r.is), {
      ref_key: "el",
      ref: t,
      class: "bartender"
    }, {
      default: L(() => [
        h(a.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), J = /* @__PURE__ */ y({
  __name: "BartenderContent",
  props: {
    is: { default: "div" }
  },
  setup(n) {
    const e = n;
    return (r, t) => (b(), p(E(e.is), { class: "bartender__content" }, {
      default: L(() => [
        h(r.$slots, "default")
      ]),
      _: 3
    }));
  }
}), K = { inheritAttrs: !1 }, O = /* @__PURE__ */ y(x(m({}, K), {
  __name: "BartenderBar",
  props: {
    is: { default: "div" },
    name: null,
    position: { default: "left" },
    mode: { default: "float" },
    overlay: { type: Boolean, default: !0 },
    permanent: { type: Boolean, default: !1 },
    scrollTop: { type: Boolean, default: !0 }
  },
  emits: [
    "bar-updated",
    "before-open",
    "after-open",
    "before-close",
    "after-close"
  ],
  setup(n, { emit: e }) {
    const r = n, { bartender: t } = T(), s = f(!1), l = f(null), a = f();
    A(() => i(this, null, function* () {
      if (t.value) {
        u();
        return;
      }
      window.addEventListener("bartender-init", u, { once: !0 });
    })), D(() => {
      !t.value || !t.value.getBar(r.name) || t.value.removeBar(r.name);
    });
    const u = () => i(this, null, function* () {
      var d, c, g, k, w;
      if (s.value = !0, yield V(), !!t.value) {
        try {
          a.value = t.value.addBar(r.name, m({
            el: l.value
          }, r));
        } catch (o) {
          console.error(o);
          return;
        }
        v(() => r.position, (o) => a.value.position = o), v(() => r.mode, (o) => a.value.mode = o), v(() => r.overlay, (o) => a.value.overlay = !!o), v(() => r.permanent, (o) => a.value.permanent = !!o), v(() => r.scrollTop, (o) => a.value.scrollTop = !!o), (d = l.value) == null || d.addEventListener("bartender-bar-updated", (o) => e("bar-updated", o)), (c = l.value) == null || c.addEventListener("bartender-bar-before-open", (o) => e("before-open", o)), (g = l.value) == null || g.addEventListener("bartender-bar-after-open", (o) => e("after-open", o)), (k = l.value) == null || k.addEventListener("bartender-bar-before-close", (o) => e("before-close", o)), (w = l.value) == null || w.addEventListener("bartender-bar-after-close", (o) => e("after-close", o));
      }
    });
    return (d, c) => I(t) && s.value === !0 ? (b(), p(j, {
      key: 0,
      to: I(t).el
    }, [
      (b(), p(E(r.is), q({
        ref_key: "el",
        ref: l,
        class: "bartender__bar"
      }, d.$attrs), {
        default: L(() => [
          h(d.$slots, "default")
        ]),
        _: 3
      }, 16))
    ], 8, ["to"])) : z("", !0);
  }
})), { bartender: _ } = T(), X = () => ({
  install(n) {
    n.component("Bartender", H), n.component("BartenderContent", J), n.component("BartenderBar", O), n.directive("bartender-open", {
      mounted(e, r) {
        e.addEventListener("click", () => {
          var t;
          (t = _.value) == null || t.open(r.value, e);
        });
      }
    }), n.directive("bartender-toggle", {
      mounted(e, r) {
        e.addEventListener("click", () => {
          var t;
          (t = _.value) == null || t.toggle(r.value, e);
        });
      }
    }), n.directive("bartender-close", {
      mounted(e, r) {
        e.addEventListener("click", () => {
          var t;
          (t = _.value) == null || t.close(r.value);
        });
      }
    });
  }
});
export {
  H as Bartender,
  O as BartenderBar,
  J as BartenderContent,
  X as createBartender,
  T as useBartender
};
//# sourceMappingURL=VueBartender.js.map
