<template>
  <dialog ref="el" v-bind="$attrs">
    <slot />
  </dialog>
</template>

<script setup lang="ts">
import { useTemplateRef } from 'vue'
import {
  type BartenderBarDefaultOptions,
  BartenderBar,
} from '@fokke-/bartender.js'
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useBartender } from '../'

interface BarComponentProps extends BartenderBarDefaultOptions {
  /** Unique bar name */
  name: string
}

const props = withDefaults(defineProps<BarComponentProps>(), {
  position: undefined,
  overlay: undefined,
  permanent: undefined,
  scrollTop: undefined,
})

const emit = defineEmits<{
  updated: [event: CustomEvent]
  'before-open': [event: CustomEvent]
  'after-open': [event: CustomEvent]
  'before-close': [event: CustomEvent]
  'after-close': [event: CustomEvent]
}>()

const bartender = useBartender()
const bar = ref<BartenderBar>()
const el = useTemplateRef<HTMLDialogElement>('el')

onMounted(() => {
  if (!bartender) {
    console.error('You must use Bartender plugin before adding bars.')
    return
  }

  if (!el.value) {
    return
  }

  try {
    bar.value = bartender.addBar(props.name, {
      el: el.value,
      ...props,
    })
  } catch (error) {
    console.error(error)
    return
  }

  // Emit library events
  el.value.addEventListener('bartender-bar-updated', ((event: CustomEvent) => {
    emit('updated', event)
  }) as EventListener)
  el.value.addEventListener('bartender-bar-before-open', ((
    event: CustomEvent,
  ) => {
    emit('before-open', event)
  }) as EventListener)
  el.value.addEventListener('bartender-bar-after-open', ((
    event: CustomEvent,
  ) => {
    emit('after-open', event)
  }) as EventListener)
  el.value.addEventListener('bartender-bar-before-close', ((
    event: CustomEvent,
  ) => {
    emit('before-close', event)
  }) as EventListener)
  el.value.addEventListener('bartender-bar-after-close', ((
    event: CustomEvent,
  ) => {
    emit('after-close', event)
  }) as EventListener)

  // Update bar configuration when props change
  watch(
    () => props.position,
    (val) => {
      if (!bar.value) {
        return
      }

      bar.value.position = val
    },
  )
  watch(
    () => props.overlay,
    (val) => {
      if (!bar.value) {
        return
      }

      bar.value.overlay = val
    },
  )
  watch(
    () => props.permanent,
    (val) => {
      if (!bar.value) {
        return
      }

      bar.value.permanent = val
    },
  )
  watch(
    () => props.scrollTop,
    (val) => {
      if (!bar.value) {
        return
      }

      bar.value.scrollTop = val
    },
  )
})

onBeforeUnmount(() => {
  if (!bartender || !bartender.getBar(props.name)) {
    return
  }

  bartender.removeBar(props.name)
})
</script>
