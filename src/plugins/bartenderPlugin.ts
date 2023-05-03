import type {
  App,
  DirectiveBinding,
  Plugin
} from 'vue'
import Bartender from '../components/Bartender.vue'
import BartenderContent from '../components/BartenderContent.vue'
import BartenderBar from '../components/BartenderBar.vue'
import { useBartender } from '../composables/bartender'
const { bartender } = useBartender()

export const createBartender = (): Plugin => {
  return {
    install (app: App) {
      // Global components
      app.component('Bartender', Bartender)
      app.component('BartenderContent', BartenderContent)
      app.component('BartenderBar', BartenderBar)

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

