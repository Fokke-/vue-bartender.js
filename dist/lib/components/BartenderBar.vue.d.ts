import { BartenderBarDefaultOptions, BartenderBar, BartenderBarEvent, BartenderBarUpdatedEvent } from '@fokke-/bartender.js';
interface BarComponentProps extends BartenderBarDefaultOptions {
    /** Unique bar name */
    name: string;
}
/**
 * Open this bar
 */
declare const openThis: (keepOtherBarsOpen?: boolean) => Promise<BartenderBar> | undefined;
/**
 * Open another bar
 */
declare const open: (bar: BartenderBar | string, keepOtherBarsOpen?: boolean) => Promise<BartenderBar> | undefined;
/**
 * Toggle this bar
 */
declare const toggleThis: (keepOtherBarsOpen?: boolean) => Promise<BartenderBar | null> | undefined;
/**
 * Toggle another bar
 */
declare const toggle: (bar: BartenderBar | string, keepOtherBarsOpen?: boolean) => Promise<BartenderBar | null> | undefined;
/**
 * Close this bar
 */
declare const close: () => Promise<BartenderBar | null> | undefined;
/**
 * Focus to this bar
 */
declare const focus: () => void;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        default(props: {
            /** Open another bar */
            open: typeof open;
            /** Toggle another bar */
            toggle: typeof toggle;
            /** Close this bar */
            close: typeof close;
            /** Focus to this bar */
            focus: typeof focus;
        }): any;
        activator(props: {
            /** Open this bar */
            open: typeof openThis;
            /** Toggle this bar */
            toggle: typeof toggleThis;
        }): any;
    }> & {
        default(props: {
            /** Open another bar */
            open: typeof open;
            /** Toggle another bar */
            toggle: typeof toggle;
            /** Close this bar */
            close: typeof close;
            /** Focus to this bar */
            focus: typeof focus;
        }): any;
        activator(props: {
            /** Open this bar */
            open: typeof openThis;
            /** Toggle this bar */
            toggle: typeof toggleThis;
        }): any;
    };
    refs: {
        dialogEl: HTMLDialogElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<BarComponentProps, {
    /** Open this bar */
    open: (keepOtherBarsOpen?: boolean) => Promise<BartenderBar> | undefined;
    /** Toggle this bar */
    toggle: (keepOtherBarsOpen?: boolean) => Promise<BartenderBar | null> | undefined;
    /** Close this bar */
    close: () => Promise<BartenderBar | null> | undefined;
    /** Focus to this bar */
    focus: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    updated: (event: BartenderBarUpdatedEvent) => any;
    "before-open": (event: BartenderBarEvent) => any;
    "after-open": (event: BartenderBarEvent) => any;
    "before-close": (event: BartenderBarEvent) => any;
    "after-close": (event: BartenderBarEvent) => any;
}, string, import('vue').PublicProps, Readonly<BarComponentProps> & Readonly<{
    onUpdated?: ((event: BartenderBarUpdatedEvent) => any) | undefined;
    "onBefore-open"?: ((event: BartenderBarEvent) => any) | undefined;
    "onAfter-open"?: ((event: BartenderBarEvent) => any) | undefined;
    "onBefore-close"?: ((event: BartenderBarEvent) => any) | undefined;
    "onAfter-close"?: ((event: BartenderBarEvent) => any) | undefined;
}>, {
    position: import('@fokke-/bartender.js').BartenderBarPosition;
    modal: boolean;
    overlay: boolean;
    permanent: boolean;
    scrollTop: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    dialogEl: HTMLDialogElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
