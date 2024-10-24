import { defineComponent as v, inject as i, ref as c, useTemplateRef as f, onMounted as p, watch as d, onBeforeUnmount as b, openBlock as m, createElementBlock as B, mergeProps as g, renderSlot as E } from "vue";
import { Bartender as y } from "@fokke-/bartender.js";
const T = /* @__PURE__ */ v({
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
  setup(s, { emit: u }) {
    const t = s, n = u, r = i("bartender-instance", c(null)), a = c(), o = f("el");
    return p(() => {
      if (!r.value) {
        console.error("You must use Bartender plugin before adding bars.");
        return;
      }
      if (o.value) {
        try {
          a.value = r.value.addBar(t.name, {
            el: o.value,
            ...t
          });
        } catch (e) {
          console.error(e);
          return;
        }
        o.value.addEventListener("bartender-bar-updated", (e) => {
          n("bar-updated", e);
        }), o.value?.addEventListener("bartender-bar-before-open", (e) => {
          n("before-open", e);
        }), o.value?.addEventListener("bartender-bar-after-open", (e) => {
          n("after-open", e);
        }), o.value?.addEventListener("bartender-bar-before-close", (e) => {
          n("before-close", e);
        }), o.value?.addEventListener("bartender-bar-after-close", (e) => {
          n("after-close", e);
        }), d(
          () => t.position,
          (e) => {
            a.value && (a.value.position = e);
          }
        ), d(
          () => t.overlay,
          (e) => {
            a.value && (a.value.overlay = e);
          }
        ), d(
          () => t.permanent,
          (e) => {
            a.value && (a.value.permanent = e);
          }
        ), d(
          () => t.scrollTop,
          (e) => {
            a.value && (a.value.scrollTop = e);
          }
        );
      }
    }), b(() => {
      !r.value || !r.value.getBar(t.name) || r.value.removeBar(t.name);
    }), (e, L) => (m(), B("dialog", g({
      ref_key: "el",
      ref: o,
      class: "bartender-bar"
    }, e.$attrs), [
      E(e.$slots, "default")
    ], 16));
  }
}), h = (s = {}) => {
  const u = c(new y(s));
  return {
    install(t) {
      t.provide("bartender-instance", u), t.directive("bartender-open", {
        mounted(n, r) {
          n.addEventListener("click", () => {
            u.value.open(r.value);
          });
        }
      }), t.directive("bartender-toggle", {
        mounted(n, r) {
          n.addEventListener("click", () => {
            u.value.toggle(r.value);
          });
        }
      }), t.directive("bartender-close", {
        mounted(n, r) {
          n.addEventListener("click", () => {
            u.value.close(r.value);
          });
        }
      });
    }
  };
}, l = c(), w = () => ({ getBar: (r) => {
  if (l.value)
    return l.value.getBar(r);
}, open: (r) => {
  l.value && l.value.open(r);
}, close: (r) => {
  l.value && l.value.close(r);
}, toggle: (r) => {
  l.value && l.value.toggle(r);
} });
export {
  T as BartenderBar,
  h as createBartender,
  w as useBartender
};
//# sourceMappingURL=VueBartender.js.map
