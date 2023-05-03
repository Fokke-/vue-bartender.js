import type { Ref } from 'vue';
import type { BartenderBarOptions, BartenderOptions } from '@fokke-/bartender.js/dist/lib/types';
import { Bartender } from '@fokke-/bartender.js';
export declare const useBartender: () => {
    createInstance: (options?: BartenderOptions, barOptions?: BartenderBarOptions) => Ref<Bartender | undefined>;
    bartender: Ref<Bartender | undefined>;
};
