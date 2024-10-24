<template>
  <component ref="el" :is="props.is" class="bartender">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { createInstance, useBartender } from '../composables/bartender.js'

const props = withDefaults(
  defineProps<{
    is?: string
    debug?: boolean
    switchTimeout?: number
  }>(),
  {
    is: 'div',
    debug: undefined,
    switchTimeout: undefined,
  },
)

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
])

const el: Ref<HTMLBodyElement | HTMLElement | null> = ref(null)
const { bartender } = useBartender()

onMounted(() => {
  try {
    if (!el.value) return

    // Emit library events
    el.value.addEventListener('bartender-init', (event) => {
      emit('init', event)
    })

    el.value.addEventListener('bartender-destroyed', (event) => {
      emit('destroyed', event)
    })

    el.value.addEventListener('bartender-destroyed', (event) => {
      emit('destroyed', event)
    })

    el.value.addEventListener('bartender-bar-added', (event) => {
      emit('bar-added', event)
    })

    el.value.addEventListener('bartender-bar-removed', (event) => {
      emit('bar-removed', event)
    })

    el.value.addEventListener('bartender-bar-updated', (event) => {
      emit('bar-updated', event)
    })

    el.value.addEventListener('bartender-bar-before-open', (event) => {
      emit('before-open', event)
    })

    el.value.addEventListener('bartender-bar-after-open', (event) => {
      emit('after-open', event)
    })

    el.value.addEventListener('bartender-bar-before-close', (event) => {
      emit('before-close', event)
    })

    el.value.addEventListener('bartender-bar-after-close', (event) => {
      emit('after-close', event)
    })

    createInstance({
      debug: props.debug,
      el: el.value,
      contentEl: '.bartender__content',
      switchTimeout: props.switchTimeout,
    })
  } catch (error) {
    console.error(error)
  }

  watch(
    () => props.debug,
    (val) => {
      if (!bartender.value) return
      bartender.value.debug = !!val
    },
  )

  watch(
    () => props.switchTimeout,
    (val) => {
      if (!bartender.value || !val) return
      bartender.value.switchTimeout = val
    },
  )
})

onBeforeUnmount(() => {
  if (!bartender.value) return
  bartender.value.destroy()
})
</script>
