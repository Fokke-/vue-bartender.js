import { Bartender } from '@fokke-/bartender.js';
import { BartenderBar as BartenderBar_2 } from '@fokke-/bartender.js';
import { BartenderBarDefaultOptions } from '@fokke-/bartender.js';
import { BartenderBarPosition } from '@fokke-/bartender.js';
import { BartenderOptions } from '@fokke-/bartender.js';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { Plugin as Plugin_2 } from 'vue';
import { PublicProps } from 'vue';

declare const __VLS_component: DefineComponent<BarComponentProps, {
/** Open this bar */
open: (keepOtherBarsOpen?: boolean) => Promise<BartenderBar_2> | undefined;
/** Toggle this bar */
toggle: (keepOtherBarsOpen?: boolean) => Promise<BartenderBar_2 | null> | undefined;
/** Close this bar */
close: () => Promise<BartenderBar_2 | null> | undefined;
/** Focus to this bar */
focus: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
updated: (event: CustomEvent<any>) => any;
"before-open": (event: CustomEvent<any>) => any;
"after-open": (event: CustomEvent<any>) => any;
"before-close": (event: CustomEvent<any>) => any;
"after-close": (event: CustomEvent<any>) => any;
}, string, PublicProps, Readonly<BarComponentProps> & Readonly<{
onUpdated?: ((event: CustomEvent<any>) => any) | undefined;
"onBefore-open"?: ((event: CustomEvent<any>) => any) | undefined;
"onAfter-open"?: ((event: CustomEvent<any>) => any) | undefined;
"onBefore-close"?: ((event: CustomEvent<any>) => any) | undefined;
"onAfter-close"?: ((event: CustomEvent<any>) => any) | undefined;
}>, {
position: BartenderBarPosition;
modal: boolean;
overlay: boolean;
permanent: boolean;
scrollTop: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {
dialogEl: HTMLDialogElement;
}, any>;

declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        default(props: {
            /** Open another bar */
            open: typeof open_2;
            /** Toggle another bar */
            toggle: typeof toggle;
            /** Close this bar */
            close: typeof close_2;
            /** Focus to this bar */
            focus: typeof focus_2;
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
            open: typeof open_2;
            /** Toggle another bar */
            toggle: typeof toggle;
            /** Close this bar */
            close: typeof close_2;
            /** Focus to this bar */
            focus: typeof focus_2;
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

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare interface BarComponentProps extends BartenderBarDefaultOptions {
    /** Unique bar name */
    name: string;
}

export declare const BartenderBar: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

/**
 * Close this bar
 */
declare const close_2: () => Promise<BartenderBar_2 | null> | undefined;

export declare const createBartender: (options?: BartenderOptions, barDefaultOptions?: BartenderBarDefaultOptions) => Plugin_2;

/**
 * Focus to this bar
 */
declare const focus_2: () => void;

/**
 * Open another bar
 */
declare const open_2: (bar: BartenderBar_2 | string, keepOtherBarsOpen?: boolean) => Promise<BartenderBar_2> | undefined;

/**
 * Open this bar
 */
declare const openThis: (keepOtherBarsOpen?: boolean) => Promise<BartenderBar_2> | undefined;

/**
 * Toggle another bar
 */
declare const toggle: (bar: BartenderBar_2 | string, keepOtherBarsOpen?: boolean) => Promise<BartenderBar_2 | null> | undefined;

/**
 * Toggle this bar
 */
declare const toggleThis: (keepOtherBarsOpen?: boolean) => Promise<BartenderBar_2 | null> | undefined;

export declare const useBartender: () => Bartender | null;

export { }
