<template>
  <template v-if="bartender && ready === true">
    <Teleport :to="bartender.el">
      <component
        :is="props.is"
        ref="el"
        class="bartender__bar"
      >
        <slot />
      </component>
    </Teleport>
  </template>
</template>

<script setup lang="ts">

import type { Ref } from 'vue'
import type {
  BartenderBarMode,
  BartenderBarPosition
} from '@fokke-/bartender.js/dist/lib/types'

import {
  ref,
  onMounted,
  onBeforeUnmount,
  nextTick,
  watch
} from 'vue'
import { useBartender } from '../composables/bartender'

const props = withDefaults(defineProps<{
  is?: string,
  name: string,
  position?: BartenderBarPosition,
  mode?: BartenderBarMode,
  overlay?: boolean,
  permanent?: boolean,
  scrollTop?: boolean,
}>(), {
  is: 'div',
  position: 'left',
  mode: 'float',
  overlay: true,
  permanent: false,
  scrollTop: true,
})

const emit = defineEmits([
  'bar-updated',
  'before-open',
  'after-open',
  'before-close',
  'after-close',
])

const { bartender } = useBartender()
const ready = ref(false)
const el: Ref<HTMLBodyElement | HTMLElement | null> = ref(null)
const bar = ref()

onMounted(async () => {
  // If Bartender is ready, initialize right away
  if (bartender.value) {
    init()
    return
  }

  // Init after Bartender is ready
  window.addEventListener('bartender-init', init, { once: true })
})

onBeforeUnmount(() => {
  if (!bartender.value || !bartender.value.getBar(props.name)) return

  bartender.value.removeBar(props.name)
})

const init = async () => {
  // Render element
  ready.value = true

  // Wait until component is rendered
  await nextTick()

  if (!bartender.value) return

  try {
    bar.value = bartender.value.addBar(props.name, {
      el: el.value,
      ...props,
    })
  } catch (error) {
    console.error(error)
    return
  }

  // Update bar configuration when props change
  watch(() => props.position, val => bar.value.position = val)
  watch(() => props.mode, val => bar.value.mode = val)
  watch(() => props.overlay, val => bar.value.overlay = !!val)
  watch(() => props.permanent, val => bar.value.permanent = !!val)
  watch(() => props.scrollTop, val => bar.value.scrollTop = !!val)

  // Emit library events
  el.value?.addEventListener('bartender-bar-updated', ((event: CustomEvent) => emit('bar-updated', event)) as EventListener)
  el.value?.addEventListener('bartender-bar-before-open', ((event: CustomEvent) => emit('before-open', event)) as EventListener)
  el.value?.addEventListener('bartender-bar-after-open', ((event: CustomEvent) => emit('after-open', event)) as EventListener)
  el.value?.addEventListener('bartender-bar-before-close', ((event: CustomEvent) => emit('before-close', event)) as EventListener)
  el.value?.addEventListener('bartender-bar-after-close', ((event: CustomEvent) => emit('after-close', event)) as EventListener)
}

</script>
