import { type App, type DirectiveBinding, type Plugin, ref } from 'vue'
import { type BartenderOptions, Bartender } from '@fokke-/bartender.js'

export const createBartender = (options: BartenderOptions = {}): Plugin => {
  const instance = ref<Bartender>(new Bartender(options))

  return {
    install(app: App) {
      // Provide Bartender instance
      app.provide('bartender-instance', instance)

      // Directive for opening bar
      app.directive('bartender-open', {
        mounted(el: HTMLElement, binding: DirectiveBinding) {
          el.addEventListener('click', () => {
            instance.value.open(binding.value)
          })
        },
      })

      // Directive for toggling bar
      app.directive('bartender-toggle', {
        mounted(el: HTMLElement, binding: DirectiveBinding) {
          el.addEventListener('click', () => {
            instance.value.toggle(binding.value)
          })
        },
      })

      // Directive for closing bar
      app.directive('bartender-close', {
        mounted(el: HTMLElement, binding: DirectiveBinding) {
          el.addEventListener('click', () => {
            instance.value.close(binding.value)
          })
        },
      })
    },
  }
}
