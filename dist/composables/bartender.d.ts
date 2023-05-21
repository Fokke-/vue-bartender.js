import type { Ref } from 'vue';
import type { BartenderBarOptions, BartenderOptions } from '@fokke-/bartender.js/dist/lib/types';
import { Bartender } from '@fokke-/bartender.js';
export declare const createInstance: (options?: BartenderOptions, barOptions?: BartenderBarOptions) => Ref<Bartender | undefined>;
export declare const useBartender: () => {
    bartender: Ref<Bartender | undefined>;
};
