import type { PropType as __PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    is: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    debug: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: undefined;
    };
    switchTimeout: {
        type: __PropType<number | undefined>;
        required: false;
        default: undefined;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("init" | "destroyed" | "bar-added" | "bar-removed" | "bar-updated" | "before-open" | "after-open" | "before-close" | "after-close")[], "init" | "destroyed" | "bar-added" | "bar-removed" | "bar-updated" | "before-open" | "after-open" | "before-close" | "after-close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    is: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    debug: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: undefined;
    };
    switchTimeout: {
        type: __PropType<number | undefined>;
        required: false;
        default: undefined;
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
}, {
    is: string | undefined;
    debug: boolean | undefined;
    switchTimeout: number | undefined;
}, {}>;
export default _sfc_main;
