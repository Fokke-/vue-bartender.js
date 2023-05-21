import type { Ref } from 'vue'
import type {
  BartenderBarOptions,
  BartenderOptions
} from '@fokke-/bartender.js/dist/lib/types'

import { ref } from 'vue'
import { Bartender } from '@fokke-/bartender.js'

const bartender = ref<Bartender>()

export const createInstance = (options: BartenderOptions = {}, barOptions: BartenderBarOptions = {}): Ref<Bartender | undefined> => {
  try {
    bartender.value = new Bartender(options, barOptions)
  } catch (error) {
    console.error(error)
  }

  return bartender
}

export const useBartender = () => {
  return { bartender }
}
