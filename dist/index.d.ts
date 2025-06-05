import { Plugin } from 'vue';
import { BartenderOptions, BartenderBarDefaultOptions, Bartender } from '@fokke-/bartender.js';
import { default as BartenderBar } from './lib/components/BartenderBar.vue';
export { BartenderBar };
export declare const createBartender: (options?: BartenderOptions, barDefaultOptions?: BartenderBarDefaultOptions) => Plugin;
export declare const useBartender: () => Bartender | null;
