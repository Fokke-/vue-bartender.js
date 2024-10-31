import { defineComponent as b, ref as B, useTemplateRef as g, onMounted as y, onBeforeUnmount as E, openBlock as L, createElementBlock as k, mergeProps as T, renderSlot as _, watch as s } from "vue";
import { Bartender as h } from "@fokke-/bartender.js";
const x = /* @__PURE__ */ b({
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
    const r = i, t = d, n = w(), o = B(), a = g("dialogEl"), v = (e, u = !1) => {
      if (n)
        return n.open(e, u);
    }, m = (e, u = !1) => {
      if (n)
        return n.toggle(e, u);
    }, c = () => {
      if (!(!n || !o.value))
        return n.close(o.value.name);
    }, p = () => {
      a.value?.focus();
    };
    return f({
      /** Close this bar */
      close: c,
      /** Focus to the bar */
      focus: p
    }), y(() => {
      if (!n) {
        console.error("You must use Bartender plugin before adding bars.");
        return;
      }
      if (a.value) {
        try {
          o.value = n.addBar(r.name, {
            el: a.value,
            ...r
          });
        } catch (e) {
          console.error(e);
          return;
        }
        a.value.addEventListener("bartender-bar-updated", (e) => {
          t("updated", e);
        }), a.value.addEventListener("bartender-bar-before-open", (e) => {
          t("before-open", e);
        }), a.value.addEventListener("bartender-bar-after-open", (e) => {
          t("after-open", e);
        }), a.value.addEventListener("bartender-bar-before-close", (e) => {
          t("before-close", e);
        }), a.value.addEventListener("bartender-bar-after-close", (e) => {
          t("after-close", e);
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
    }), E(() => {
      !n || !n.getBar(r.name) || n.removeBar(r.name);
    }), (e, u) => (L(), k("dialog", T({ ref: "dialogEl" }, e.$attrs), [
      _(e.$slots, "default", {
        open: v,
        toggle: m,
        close: c,
        focus: p
      })
    ], 16));
  }
});
let l = null;
const C = (i = {}, f = {}) => (l = new h(i, f), {
  install(d) {
    d.directive("bartender-open", {
      mounted(r, t) {
        r.addEventListener("click", () => {
          l?.open(t.value, !!t.modifiers.keep);
        });
      }
    }), d.directive("bartender-toggle", {
      mounted(r, t) {
        r.addEventListener("click", () => {
          l?.toggle(t.value, !!t.modifiers.keep);
        });
      }
    }), d.directive("bartender-close", {
      mounted(r, t) {
        r.addEventListener("click", () => {
          l?.close(t.value);
        });
      }
    });
  }
}), w = () => (l || console.error(
  "You must enable Bartender plugin before calling useBartender()."
), l);
export {
  x as BartenderBar,
  C as createBartender,
  w as useBartender
};
//# sourceMappingURL=vue-bartender.js.map
