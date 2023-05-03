<template>
  <component
    ref="el"
    :is="props.is"
    class="bartender"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">

import type { Ref } from 'vue'
import {
  ref,
  onMounted,
  onBeforeUnmount
} from 'vue'
import { useBartender } from '../composables/bartender.js'

const props = withDefaults(defineProps<{
  debug?: boolean,
  is?: string,
  switchTimeout?: number,
  focusTrap?: boolean,
}>(), {
  debug: false,
  is: 'div',
  switchTimeout: undefined,
  focusTrap: true,
})

const emit = defineEmits([
  'init',
  'destroyed',
  'bar-added',
  'bar-removed',
  'bar-updated',
  'before-open',
  'after-open',
  'before-close',
  'after-close',
  'update',
])

const el: Ref<HTMLBodyElement | HTMLElement | null> = ref(null)
const { createInstance, bartender } = useBartender()

onMounted(() => {
  try {
    if (!el.value) return

    // Emit library events
    el.value.addEventListener('bartender-init', ((event: CustomEvent) => emit('init', event)) as EventListener)
    el.value.addEventListener('bartender-destroyed', ((event: CustomEvent) => emit('destroyed', event)) as EventListener)
    el.value.addEventListener('bartender-bar-added', ((event: CustomEvent) => emit('bar-added', event)) as EventListener)
    el.value.addEventListener('bartender-bar-removed', ((event: CustomEvent) => emit('bar-removed', event)) as EventListener)
    el.value.addEventListener('bartender-bar-updated', ((event: CustomEvent) => emit('bar-updated', event)) as EventListener)
    el.value.addEventListener('bartender-bar-before-open', ((event: CustomEvent) => emit('before-open', event)) as EventListener)
    el.value.addEventListener('bartender-bar-after-open', ((event: CustomEvent) => emit('after-open', event)) as EventListener)
    el.value.addEventListener('bartender-bar-before-close', ((event: CustomEvent) => emit('before-close', event)) as EventListener)
    el.value.addEventListener('bartender-bar-after-close', ((event: CustomEvent) => emit('after-close', event)) as EventListener)

    createInstance({
      debug: props.debug,
      el: el.value,
      contentEl: '.bartender__content',
      switchTimeout: props.switchTimeout,
      focusTrap: props.focusTrap,
    })
  } catch (error) {
    console.error(error)
  }
})

onBeforeUnmount(async () => {
  if (!bartender.value) return
  bartender.value.destroy()
})

</script>
