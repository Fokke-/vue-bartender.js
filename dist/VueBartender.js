import { defineComponent as i, inject as c, ref as s, useTemplateRef as v, onMounted as f, watch as d, onBeforeUnmount as p, openBlock as b, createElementBlock as m, mergeProps as B, renderSlot as g } from "vue";
import { Bartender as E } from "@fokke-/bartender.js";
const _ = /* @__PURE__ */ i({
  __name: "BartenderBar",
  props: {
    name: {},
    position: { default: "left" },
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
  setup(n, { emit: u }) {
    const t = n, a = u, o = c("bartender-instance", s(null)), r = s(), l = v("el");
    return f(() => {
      if (!o.value) {
        console.error("You must use Bartender plugin before adding bars.");
        return;
      }
      if (l.value) {
        try {
          r.value = o.value.addBar(t.name, {
            el: l.value,
            ...t
          });
        } catch (e) {
          console.error(e);
          return;
        }
        l.value.addEventListener("bartender-bar-updated", (e) => {
          a("bar-updated", e);
        }), l.value?.addEventListener("bartender-bar-before-open", (e) => {
          a("before-open", e);
        }), l.value?.addEventListener("bartender-bar-after-open", (e) => {
          a("after-open", e);
        }), l.value?.addEventListener("bartender-bar-before-close", (e) => {
          a("before-close", e);
        }), l.value?.addEventListener("bartender-bar-after-close", (e) => {
          a("after-close", e);
        }), d(
          () => t.position,
          (e) => {
            r.value && (r.value.position = e);
          }
        ), d(
          () => t.overlay,
          (e) => {
            r.value && (r.value.overlay = e);
          }
        ), d(
          () => t.permanent,
          (e) => {
            r.value && (r.value.permanent = e);
          }
        ), d(
          () => t.scrollTop,
          (e) => {
            r.value && (r.value.scrollTop = e);
          }
        );
      }
    }), p(() => {
      !o.value || !o.value.getBar(t.name) || o.value.removeBar(t.name);
    }), (e, y) => (b(), m("dialog", B({
      ref_key: "el",
      ref: l,
      class: "bartender-bar"
    }, e.$attrs), [
      g(e.$slots, "default")
    ], 16));
  }
}), T = (n = {}) => {
  const u = s(new E(n));
  return {
    install(t) {
      t.provide("bartender-instance", u), t.directive("bartender-open", {
        mounted(a, o) {
          a.addEventListener("click", () => {
            u.value.open(o.value);
          });
        }
      }), t.directive("bartender-toggle", {
        mounted(a, o) {
          a.addEventListener("click", () => {
            u.value.toggle(o.value);
          });
        }
      }), t.directive("bartender-close", {
        mounted(a, o) {
          a.addEventListener("click", () => {
            u.value.close(o.value);
          });
        }
      });
    }
  };
};
s();
const h = () => {
  const n = c("bartender-instance", s(null));
  return n.value || console.error("You must use Bartender plugin before calling useBartender()."), { getBar: (r) => {
    if (n.value)
      return n.value.getBar(r);
  }, open: (r) => {
    n.value && n.value.open(r);
  }, close: (r) => {
    n.value && n.value.close(r);
  }, toggle: (r) => {
    n.value && n.value.toggle(r);
  } };
};
export {
  _ as BartenderBar,
  T as createBartender,
  h as useBartender
};
//# sourceMappingURL=VueBartender.js.map
