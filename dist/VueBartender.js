var M = Object.defineProperty;
var g = Object.getOwnPropertySymbols;
var N = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var C = (n, r, e) => r in n ? M(n, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[r] = e, $ = (n, r) => {
  for (var e in r || (r = {}))
    N.call(r, e) && C(n, e, r[e]);
  if (g)
    for (var e of g(r))
      S.call(r, e) && C(n, e, r[e]);
  return n;
};
var i = (n, r, e) => new Promise((t, s) => {
  var d = (l) => {
    try {
      u(e.next(l));
    } catch (c) {
      s(c);
    }
  }, a = (l) => {
    try {
      u(e.throw(l));
    } catch (c) {
      s(c);
    }
  }, u = (l) => l.done ? t(l.value) : Promise.resolve(l.value).then(d, a);
  u((e = e.apply(n, r)).next());
});
import { ref as f, defineComponent as y, onMounted as I, onBeforeUnmount as D, openBlock as b, createBlock as p, resolveDynamicComponent as B, withCtx as E, renderSlot as L, nextTick as U, watch as v, unref as x, Teleport as V, createCommentVNode as j } from "vue";
import { Bartender as q } from "@fokke-/bartender.js";
const _ = f(), z = (n = {}, r = {}) => {
  try {
    _.value = new q(n, r);
  } catch (e) {
    console.error(e);
  }
  return _;
}, h = () => ({
  createInstance: z,
  bartender: _
}), A = /* @__PURE__ */ y({
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
  setup(n, { emit: r }) {
    const e = n, t = f(null), { createInstance: s, bartender: d } = h();
    return I(() => {
      try {
        if (!t.value)
          return;
        t.value.addEventListener("bartender-init", (a) => r("init", a)), t.value.addEventListener("bartender-destroyed", (a) => r("destroyed", a)), t.value.addEventListener("bartender-bar-added", (a) => r("bar-added", a)), t.value.addEventListener("bartender-bar-removed", (a) => r("bar-removed", a)), t.value.addEventListener("bartender-bar-updated", (a) => r("bar-updated", a)), t.value.addEventListener("bartender-bar-before-open", (a) => r("before-open", a)), t.value.addEventListener("bartender-bar-after-open", (a) => r("after-open", a)), t.value.addEventListener("bartender-bar-before-close", (a) => r("before-close", a)), t.value.addEventListener("bartender-bar-after-close", (a) => r("after-close", a)), s({
          debug: e.debug,
          el: t.value,
          contentEl: ".bartender__content",
          switchTimeout: e.switchTimeout,
          focusTrap: e.focusTrap
        });
      } catch (a) {
        console.error(a);
      }
    }), D(() => i(this, null, function* () {
      d.value && d.value.destroy();
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
}), F = /* @__PURE__ */ y({
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
}), G = /* @__PURE__ */ y({
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
  setup(n, { emit: r }) {
    const e = n, { bartender: t } = h(), s = f(!1), d = f(null), a = f();
    I(() => i(this, null, function* () {
      if (t.value) {
        u();
        return;
      }
      window.addEventListener("bartender-init", u, { once: !0 });
    })), D(() => {
      !t.value || !t.value.getBar(e.name) || t.value.removeBar(e.name);
    });
    const u = () => i(this, null, function* () {
      var l, c, T, k, w;
      if (s.value = !0, yield U(), !!t.value) {
        try {
          a.value = t.value.addBar(e.name, $({
            el: d.value
          }, e));
        } catch (o) {
          console.error(o);
          return;
        }
        v(() => e.position, (o) => a.value.position = o), v(() => e.mode, (o) => a.value.mode = o), v(() => e.overlay, (o) => a.value.overlay = !!o), v(() => e.permanent, (o) => a.value.permanent = !!o), v(() => e.scrollTop, (o) => a.value.scrollTop = !!o), (l = d.value) == null || l.addEventListener("bartender-bar-updated", (o) => r("bar-updated", o)), (c = d.value) == null || c.addEventListener("bartender-bar-before-open", (o) => r("before-open", o)), (T = d.value) == null || T.addEventListener("bartender-bar-after-open", (o) => r("after-open", o)), (k = d.value) == null || k.addEventListener("bartender-bar-before-close", (o) => r("before-close", o)), (w = d.value) == null || w.addEventListener("bartender-bar-after-close", (o) => r("after-close", o));
      }
    });
    return (l, c) => x(t) && s.value === !0 ? (b(), p(V, {
      key: 0,
      to: x(t).el
    }, [
      (b(), p(B(e.is), {
        ref_key: "el",
        ref: d,
        class: "bartender__bar"
      }, {
        default: E(() => [
          L(l.$slots, "default")
        ]),
        _: 3
      }, 512))
    ], 8, ["to"])) : j("", !0);
  }
}), { bartender: m } = h(), O = () => ({
  install(n) {
    n.component("Bartender", A), n.component("BartenderContent", F), n.component("BartenderBar", G), n.directive("bartender-open", {
      mounted(r, e) {
        r.addEventListener("click", () => {
          var t;
          (t = m.value) == null || t.open(e.value, r);
        });
      }
    }), n.directive("bartender-toggle", {
      mounted(r, e) {
        r.addEventListener("click", () => {
          var t;
          (t = m.value) == null || t.toggle(e.value, r);
        });
      }
    }), n.directive("bartender-close", {
      mounted(r, e) {
        r.addEventListener("click", () => {
          var t;
          (t = m.value) == null || t.close(e.value);
        });
      }
    });
  }
});
export {
  O as createBartender,
  h as useBartender
};
//# sourceMappingURL=VueBartender.js.map
