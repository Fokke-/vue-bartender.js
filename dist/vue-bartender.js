import { defineComponent as y, ref as E, useTemplateRef as L, onMounted as k, onBeforeUnmount as h, openBlock as T, createElementBlock as _, Fragment as $, renderSlot as b, createElementVNode as w, mergeProps as Y, watch as s } from "vue";
import { Bartender as A } from "@fokke-/bartender.js";
const M = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "BartenderBar",
  props: {
    name: {},
    position: { default: void 0 },
    modal: { type: Boolean, default: void 0 },
    overlay: { type: Boolean, default: void 0 },
    permanent: { type: Boolean, default: void 0 },
    scrollTop: { type: Boolean, default: void 0 }
  },
  emits: ["updated", "before-open", "after-open", "before-close", "after-close"],
  setup(i, { expose: f, emit: d }) {
    const r = i, n = d, t = C(), o = E(), a = L("dialogEl"), c = (e = !1) => {
      if (t)
        return t.open(r.name, e);
    }, g = (e, u = !1) => {
      if (t)
        return t.open(e, u);
    }, p = (e = !1) => {
      if (t)
        return t.toggle(r.name, e);
    }, B = (e, u = !1) => {
      if (t)
        return t.toggle(e, u);
    }, v = () => {
      if (!(!t || !o.value))
        return t.close(o.value.name);
    }, m = () => {
      a.value?.focus();
    };
    return f({
      /** Open this bar */
      open: c,
      /** Toggle this bar */
      toggle: p,
      /** Close this bar */
      close: v,
      /** Focus to this bar */
      focus: m
    }), k(() => {
      if (!t) {
        console.error("You must use Bartender plugin before adding bars.");
        return;
      }
      if (a.value) {
        try {
          o.value = t.addBar(r.name, {
            el: a.value,
            ...r
          });
        } catch (e) {
          console.error(e);
          return;
        }
        a.value.addEventListener("bartender-bar-updated", (e) => {
          n("updated", e);
        }), a.value.addEventListener("bartender-bar-before-open", (e) => {
          n("before-open", e);
        }), a.value.addEventListener("bartender-bar-after-open", (e) => {
          n("after-open", e);
        }), a.value.addEventListener("bartender-bar-before-close", (e) => {
          n("before-close", e);
        }), a.value.addEventListener("bartender-bar-after-close", (e) => {
          n("after-close", e);
        }), s(
          () => r.position,
          (e) => {
            !o.value || typeof e > "u" || (o.value.position = e);
          }
        ), s(
          () => r.overlay,
          (e) => {
            !o.value || typeof e > "u" || (o.value.overlay = e);
          }
        ), s(
          () => r.permanent,
          (e) => {
            !o.value || typeof e > "u" || (o.value.permanent = e);
          }
        ), s(
          () => r.scrollTop,
          (e) => {
            !o.value || typeof e > "u" || (o.value.scrollTop = e);
          }
        );
      }
    }), h(() => {
      !t || !t.getBar(r.name) || t.removeBar(r.name);
    }), (e, u) => (T(), _($, null, [
      b(e.$slots, "activator", {
        open: c,
        toggle: p
      }),
      w("dialog", Y({ ref: "dialogEl" }, e.$attrs), [
        b(e.$slots, "default", {
          open: g,
          toggle: B,
          close: v,
          focus: m
        })
      ], 16)
    ], 64));
  }
});
let l = null;
const N = (i = {}, f = {}) => ({
  install(d) {
    l = new A(i, f), d.directive("bartender-open", {
      mounted(r, n) {
        r.addEventListener("click", () => {
          l?.open(n.value, !!n.modifiers.keep);
        });
      }
    }), d.directive("bartender-toggle", {
      mounted(r, n) {
        r.addEventListener("click", () => {
          l?.toggle(n.value, !!n.modifiers.keep);
        });
      }
    }), d.directive("bartender-close", {
      mounted(r, n) {
        r.addEventListener("click", () => {
          l?.close(n.value);
        });
      }
    });
  }
}), C = () => (l || console.error(
  "You must enable Bartender plugin before calling useBartender()."
), l);
export {
  M as BartenderBar,
  N as createBartender,
  C as useBartender
};
//# sourceMappingURL=vue-bartender.js.map
