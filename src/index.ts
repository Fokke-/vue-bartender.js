// TODO: document directive modifiers
// TODO: add closeall directive
import { type DirectiveBinding, type Plugin } from 'vue'
import {
  type BartenderOptions,
  type BartenderBarDefaultOptions,
  Bartender,
} from '@fokke-/bartender.js'
import BartenderBar from './components/BartenderBar.vue'

// Bartender instance
let bartender: Bartender | null = null

const createBartender = (
  options: BartenderOptions = {},
  barDefaultOptions: BartenderBarDefaultOptions = {},
): Plugin => {
  // Create a new instance
  bartender = new Bartender(options, barDefaultOptions)

  return {
    install(app) {
      // Provide Bartender instance
      // app.provide('bartender', instance)

      // Directive for opening bar
      app.directive('bartender-open', {
        mounted(el: HTMLElement, binding: DirectiveBinding) {
          el.addEventListener('click', () => {
            bartender?.open(binding.value, {
              keepOtherBars: !!binding.modifiers.keepOtherBars,
              standardDialog: !!binding.modifiers.standardDialog,
            })
          })
        },
      })

      // Directive for toggling bar
      app.directive('bartender-toggle', {
        mounted(el: HTMLElement, binding: DirectiveBinding) {
          el.addEventListener('click', () => {
            bartender?.toggle(binding.value, {
              keepOtherBars: !!binding.modifiers.keepOtherBars,
              standardDialog: !!binding.modifiers.standardDialog,
            })
          })
        },
      })

      // Directive for closing bar
      app.directive('bartender-close', {
        mounted(el: HTMLElement, binding: DirectiveBinding) {
          el.addEventListener('click', () => {
            bartender?.close(binding.value)
          })
        },
      })
    },
  }
}

const useBartender = () => {
  if (!bartender) {
    console.error(
      'You must enable Bartender plugin before calling useBartender().',
    )
  }

  return bartender
}

export { createBartender, useBartender, BartenderBar }
