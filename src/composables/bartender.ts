import type { Ref } from 'vue'
import type { BartenderBarOptions, BartenderOptions } from '@fokke-/bartender.js'

import { ref } from 'vue'
import { Bartender } from '@fokke-/bartender.js'

const bartender = ref<Bartender>()

export const createInstance = (
  options: BartenderOptions = {},
  barOptions: BartenderBarOptions = {},
): Ref<Bartender | undefined> => {
  try {
    bartender.value = new Bartender(options, barOptions)
  } catch (error) {
    console.error(error)
  }

  return bartender
}

export const useBartender = () => {
  const getBar = (name: string) => {
    if (!bartender.value) {
      return
    }

    return bartender.value.getBar(name)
  }

  const open = (name: string) => {
    if (!bartender.value) {
      return
    }

    bartender.value.open(name)
  }

  const close = (name?: string) => {
    if (!bartender.value) {
      return
    }

    bartender.value.close(name)
  }

  const toggle = (name: string) => {
    if (!bartender.value) {
      return
    }

    bartender.value.toggle(name)
  }

  return { getBar, open, close, toggle }
}
