<template>
  <p>The selected route has Bartender bar defined in view.</p>
  <button v-bartender-toggle="'wunderBar'">Open it</button>

  <BartenderBar name="wunderBar">
    <div class="block">
      <p>Wunderbar!</p>
      <button v-bartender-close>Close</button>
    </div>
  </BartenderBar>
</template>

<script lang="ts" setup>
import BartenderBar from '../components/BartenderBar.vue'
</script>
