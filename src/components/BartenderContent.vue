<template>
  <component
    :is="props.is"
    class="bartender__content"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  is?: string,
}>(), { is: 'div' })

</script>
