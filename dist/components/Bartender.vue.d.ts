import type { PropType as __PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    debug: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    is: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    switchTimeout: {
        type: __PropType<number | undefined>;
        required: false;
        default: undefined;
    };
    focusTrap: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("init" | "destroyed" | "bar-added" | "bar-removed" | "bar-updated" | "before-open" | "after-open" | "before-close" | "after-close" | "update")[], "init" | "destroyed" | "bar-added" | "bar-removed" | "bar-updated" | "before-open" | "after-open" | "before-close" | "after-close" | "update", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    debug: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    is: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    switchTimeout: {
        type: __PropType<number | undefined>;
        required: false;
        default: undefined;
    };
    focusTrap: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}>> & {
    onInit?: ((...args: any[]) => any) | undefined;
    onDestroyed?: ((...args: any[]) => any) | undefined;
    "onBar-added"?: ((...args: any[]) => any) | undefined;
    "onBar-removed"?: ((...args: any[]) => any) | undefined;
    "onBar-updated"?: ((...args: any[]) => any) | undefined;
    "onBefore-open"?: ((...args: any[]) => any) | undefined;
    "onAfter-open"?: ((...args: any[]) => any) | undefined;
    "onBefore-close"?: ((...args: any[]) => any) | undefined;
    "onAfter-close"?: ((...args: any[]) => any) | undefined;
    onUpdate?: ((...args: any[]) => any) | undefined;
}, {
    debug: boolean | undefined;
    is: string | undefined;
    switchTimeout: number | undefined;
    focusTrap: boolean | undefined;
}>;
export default _sfc_main;
