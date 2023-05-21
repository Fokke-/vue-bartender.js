<template>
  <p>The selected route has Bartender bar defined in view.</p>

  <button v-bartender-toggle="'wunderBar'">
    Open it
  </button>

  <BartenderBar
    name="wunderBar"
    focus-trap
    permanent
  >
    <p>Wunderbar!</p>
    <button v-bartender-close>
      Close
    </button>
  </BartenderBar>
</template>

<script lang="ts" setup>

import BartenderBar from '../components/BartenderBar.vue'

</script>
