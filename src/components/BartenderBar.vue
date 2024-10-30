<template>
  <dialog ref="el" v-bind="$attrs">
    <slot
      name="default"
      :open="open"
      :toggle="toggle"
      :close="close"
      :focus="focus"
    />
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
  modal: undefined,
  overlay: undefined,
  permanent: undefined,
  scrollTop: undefined,
})

defineSlots<{
  default(props: {
    /** Open another bar */
    open: typeof open

    /** Toggle another bar */
    toggle: typeof toggle

    /** Close this bar */
    close: typeof close

    /** Focus to this bar */
    focus: typeof focus
  }): any
}>()

const emit = defineEmits<{
  updated: [event: CustomEvent]
  'before-open': [event: CustomEvent]
  'after-open': [event: CustomEvent]
  'before-close': [event: CustomEvent]
  'after-close': [event: CustomEvent]
}>()

const bartender = useBartender()
const barInstance = ref<BartenderBar>()
const el = useTemplateRef<HTMLDialogElement>('el')

/**
 * Open another bar
 */
const open = (
  bar: BartenderBar | string,
  keepOtherBarsOpen: boolean = false,
) => {
  if (!bartender) {
    return
  }

  return bartender.open(bar, keepOtherBarsOpen)
}

/**
 * Toggle another bar
 */
const toggle = (
  bar: BartenderBar | string,
  keepOtherBarsOpen: boolean = false,
) => {
  if (!bartender) {
    return
  }

  return bartender.toggle(bar, keepOtherBarsOpen)
}

/**
 * Close this bar
 */
const close = () => {
  if (!bartender || !barInstance.value) {
    return
  }

  return bartender.close(barInstance.value.name)
}

/**
 * Focus to this bar
 */
const focus = () => {
  el.value?.focus()
}

defineExpose({
  /** Close this bar */
  close,

  /** Focus to the bar */
  focus,
})

onMounted(() => {
  if (!bartender) {
    console.error('You must use Bartender plugin before adding bars.')
    return
  }

  if (!el.value) {
    return
  }

  try {
    barInstance.value = bartender.addBar(props.name, {
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
      if (!barInstance.value || typeof val === 'undefined') {
        return
      }

      barInstance.value.position = val
    },
  )
  watch(
    () => props.overlay,
    (val) => {
      if (!barInstance.value || typeof val === 'undefined') {
        return
      }

      barInstance.value.overlay = val
    },
  )
  watch(
    () => props.permanent,
    (val) => {
      if (!barInstance.value || typeof val === 'undefined') {
        return
      }

      barInstance.value.permanent = val
    },
  )
  watch(
    () => props.scrollTop,
    (val) => {
      if (!barInstance.value || typeof val === 'undefined') {
        return
      }

      barInstance.value.scrollTop = val
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
