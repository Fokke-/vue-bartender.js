import { Bartender } from '@fokke-/bartender.js';
import { BartenderBarDefaultOptions } from '@fokke-/bartender.js';
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

declare interface BarComponentProps extends BartenderBarDefaultOptions {
    /** Unique bar name */
    name: string;
}

export declare const BartenderBar: __VLS_WithTemplateSlots<DefineComponent<BarComponentProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
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
overlay: boolean;
permanent: boolean;
scrollTop: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>, {
    default?(_: {}): any;
}>;

export declare const createBartender: (options?: BartenderOptions, barDefaultOptions?: BartenderBarDefaultOptions) => Plugin_2;

export declare const useBartender: () => Bartender | null;

export { }
