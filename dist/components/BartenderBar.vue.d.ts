import type { PropType as __PropType } from 'vue';
import type { BartenderBarMode, BartenderBarPosition } from '@fokke-/bartender.js/dist/lib/types';
declare const _sfc_main: import("vue").DefineComponent<{
    is: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    name: {
        type: __PropType<string>;
        required: true;
    };
    position: {
        type: __PropType<BartenderBarPosition | undefined>;
        required: false;
        default: string;
    };
    mode: {
        type: __PropType<BartenderBarMode | undefined>;
        required: false;
        default: string;
    };
    overlay: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    permanent: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    scrollTop: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    focusTrap: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("bar-updated" | "before-open" | "after-open" | "before-close" | "after-close")[], "bar-updated" | "before-open" | "after-open" | "before-close" | "after-close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    is: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    name: {
        type: __PropType<string>;
        required: true;
    };
    position: {
        type: __PropType<BartenderBarPosition | undefined>;
        required: false;
        default: string;
    };
    mode: {
        type: __PropType<BartenderBarMode | undefined>;
        required: false;
        default: string;
    };
    overlay: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    permanent: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    scrollTop: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    focusTrap: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}>> & {
    "onBar-updated"?: ((...args: any[]) => any) | undefined;
    "onBefore-open"?: ((...args: any[]) => any) | undefined;
    "onAfter-open"?: ((...args: any[]) => any) | undefined;
    "onBefore-close"?: ((...args: any[]) => any) | undefined;
    "onAfter-close"?: ((...args: any[]) => any) | undefined;
}, {
    is: string | undefined;
    position: BartenderBarPosition | undefined;
    mode: BartenderBarMode | undefined;
    overlay: boolean | undefined;
    permanent: boolean | undefined;
    scrollTop: boolean | undefined;
    focusTrap: boolean | undefined;
}, {}>;
export default _sfc_main;
