import type { Ref } from 'vue'
import type { BartenderBarOptions, BartenderOptions } from '@fokke-/bartender.js'

import { ref, inject } from 'vue'
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
  const bartenderInstance = inject<Ref<Bartender | null>>('bartender-instance', ref(null))
  if (!bartenderInstance.value) {
    console.error('You must use Bartender plugin before calling useBartender().')
  }

  const getBar = (name: string) => {
    if (!bartenderInstance.value) {
      return
    }

    return bartenderInstance.value.getBar(name)
  }

  const open = (name: string) => {
    if (!bartenderInstance.value) {
      return
    }

    bartenderInstance.value.open(name)
  }

  const close = (name?: string) => {
    if (!bartenderInstance.value) {
      return
    }

    bartenderInstance.value.close(name)
  }

  const toggle = (name: string) => {
    if (!bartenderInstance.value) {
      return
    }

    bartenderInstance.value.toggle(name)
  }

  return { getBar, open, close, toggle }
}
