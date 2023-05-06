import type {
  App,
  DirectiveBinding,
  Plugin
} from 'vue'
import { useBartender } from '../composables/bartender'

export const createBartender = (): Plugin => {
  const { bartender } = useBartender()

  return {
    install (app: App) {
      // Directive for opening bar
      app.directive('bartender-open', {
        mounted (el: HTMLElement, binding: DirectiveBinding) {
          el.addEventListener('click', () => {
            bartender.value?.open(binding.value, el)
          })
        },
      })

      // Directive for toggling bar
      app.directive('bartender-toggle', {
        mounted (el: HTMLElement, binding: DirectiveBinding) {
          el.addEventListener('click', () => {
            bartender.value?.toggle(binding.value, el)
          })
        },
      })

      // Directive for closing bar
      app.directive('bartender-close', {
        mounted (el: HTMLElement, binding: DirectiveBinding) {
          el.addEventListener('click', () => {
            bartender.value?.close(binding.value)
          })
        },
      })
    },
  }
}

