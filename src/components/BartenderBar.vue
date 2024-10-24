<template>
  <dialog ref="el" class="bartender-bar" v-bind="$attrs">
    <slot />
  </dialog>
</template>

<script setup lang="ts">
import { type Ref, useTemplateRef, inject } from 'vue'
import { type BartenderBarPosition, Bartender, BartenderBar } from '@fokke-/bartender.js'
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    /** Unique bar name */
    name: string

    /** Position */
    position?: BartenderBarPosition

    /** Show bar overlay? */
    overlay?: boolean

    /** If enabled, the bar is not closable by clicking overlay of pressing esc key. */
    permanent?: boolean

    /** If enabled, bar will be scrolled to top when opening it. */
    scrollTop?: boolean
  }>(),
  {
    position: 'left',
    mode: 'float',
    overlay: true,
    permanent: false,
    scrollTop: true,
  },
)

// TODO: type these
const emit = defineEmits([
  'bar-updated',
  'before-open',
  'after-open',
  'before-close',
  'after-close',
])

const bartenderInstance = inject<Ref<Bartender | null>>('bartender-instance', ref(null))
const barInstance = ref<BartenderBar>()
const el = useTemplateRef<HTMLDialogElement>('el')

onMounted(() => {
  if (!bartenderInstance.value) {
    console.error('You must use Bartender plugin before adding bars.')
    return
  }

  if (!el.value) {
    return
  }

  try {
    barInstance.value = bartenderInstance.value.addBar(props.name, {
      el: el.value,
      ...props,
    })
  } catch (error) {
    console.error(error)
    return
  }

  // Emit library events
  el.value.addEventListener('bartender-bar-updated', (event) => {
    emit('bar-updated', event)
  })
  el.value?.addEventListener('bartender-bar-before-open', (event) => {
    emit('before-open', event)
  })
  el.value?.addEventListener('bartender-bar-after-open', (event) => {
    emit('after-open', event)
  })
  el.value?.addEventListener('bartender-bar-before-close', (event) => {
    emit('before-close', event)
  })
  el.value?.addEventListener('bartender-bar-after-close', (event) => {
    emit('after-close', event)
  })

  // Update bar configuration when props change
  watch(
    () => props.position,
    (val) => {
      if (!barInstance.value) {
        return
      }

      barInstance.value.position = val
    },
  )
  watch(
    () => props.overlay,
    (val) => {
      if (!barInstance.value) {
        return
      }

      barInstance.value.overlay = val
    },
  )
  watch(
    () => props.permanent,
    (val) => {
      if (!barInstance.value) {
        return
      }

      barInstance.value.permanent = val
    },
  )
  watch(
    () => props.scrollTop,
    (val) => {
      if (!barInstance.value) {
        return
      }

      barInstance.value.scrollTop = val
    },
  )
})

onBeforeUnmount(() => {
  if (!bartenderInstance.value || !bartenderInstance.value.getBar(props.name)) {
    return
  }

  bartenderInstance.value.removeBar(props.name)
})
</script>
