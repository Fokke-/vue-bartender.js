import { BartenderBar as BartenderBar_2 } from '@fokke-/bartender.js';
import { BartenderBarPosition } from '@fokke-/bartender.js';
import { BartenderOptions } from '@fokke-/bartender.js';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { Plugin as Plugin_2 } from 'vue';
import { PublicProps } from 'vue';

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare const BartenderBar: __VLS_WithTemplateSlots<DefineComponent<    {
/** Unique bar name */
name: string;
/** Position */
position?: BartenderBarPosition | undefined;
/** Show bar overlay? */
overlay?: boolean | undefined;
/** If enabled, the bar is not closable by clicking overlay of pressing esc key. */
permanent?: boolean | undefined;
/** If enabled, bar will be scrolled to top when opening it. */
scrollTop?: boolean | undefined;
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"bar-updated": (...args: any[]) => void;
"before-open": (...args: any[]) => void;
"after-open": (...args: any[]) => void;
"before-close": (...args: any[]) => void;
"after-close": (...args: any[]) => void;
}, string, PublicProps, Readonly<{
/** Unique bar name */
name: string;
/** Position */
position?: BartenderBarPosition | undefined;
/** Show bar overlay? */
overlay?: boolean | undefined;
/** If enabled, the bar is not closable by clicking overlay of pressing esc key. */
permanent?: boolean | undefined;
/** If enabled, bar will be scrolled to top when opening it. */
scrollTop?: boolean | undefined;
}> & Readonly<{
"onBar-updated"?: ((...args: any[]) => any) | undefined;
"onBefore-open"?: ((...args: any[]) => any) | undefined;
"onAfter-open"?: ((...args: any[]) => any) | undefined;
"onBefore-close"?: ((...args: any[]) => any) | undefined;
"onAfter-close"?: ((...args: any[]) => any) | undefined;
}>, {
position: BartenderBarPosition;
overlay: boolean;
permanent: boolean;
scrollTop: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>, {
    default?(_: {}): any;
}>;

export declare const createBartender: (options?: BartenderOptions) => Plugin_2;

export declare const useBartender: () => {
    getBar: (name: string) => BartenderBar_2 | null | undefined;
    open: (name: string) => void;
    close: (name?: string) => void;
    toggle: (name: string) => void;
};

export { }
