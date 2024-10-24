<template>
  <div class="block">
    <h1>vue-bartender.js</h1>
  </div>
  <div class="block">
    <h2>Routes</h2>

    <nav v-if="router.options.routes.length">
      <ul v-for="item of router.options.routes" :key="item.name">
        <li>
          <router-link :to="item">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </nav>

    <router-view />
  </div>
  <div class="block">
    <div class="columnContainer">
      <div class="column">
        <div class="box">
          <h2>Main configuration</h2>
          <div class="field">
            <div class="checkbox">
              <input
                class="checkbox__input"
                v-model="config.debug"
                type="checkbox"
                name="debug"
                id="debug"
              />
              <label class="checkbox__label" for="debug"> Debug mode </label>
            </div>
          </div>
          <div class="field">
            <label for="switchTimeout" class="label"> Switch timeout </label>
            <div class="field__content">
              <input v-model="config.switchTimeout" id="switchTimeout" type="number" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="block">
    <div class="columnContainer">
      <div class="column">
        <div class="block">
          <div class="box">
            <h2>Create a new bar</h2>
            <BarConfig
              v-model:name="newBarName"
              v-model:options="newBarOptions"
              @submit="barFormSubmit"
            />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="block">
          <div class="box">
            <h2>Current bars</h2>
            <div class="buttons">
              <button
                v-for="item of bars"
                :key="`bar-${item.name}`"
                type="button"
                :class="['button', `button--${item.name}`]"
                v-bartender-toggle="item.name"
              >
                <span class="sr-only">Toggle</span> {{ item.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <BartenderBar
    v-for="bar of bars"
    :key="bar.name"
    :name="bar.name"
    :position="bar.options.position"
    :overlay="bar.options.overlay"
    :permanent="bar.options.permanent"
    :scroll-top="bar.options.scrollTop"
  >
    <div class="block">
      <h2>Bar '{{ bar.name }}'</h2>
      <BarConfig v-model:name="bar.name" v-model:options="bar.options" edit-mode />
    </div>
    <div class="block">
      <h2>Switch to another bar?</h2>
      <div class="buttons">
        <template v-for="item of bars" :key="item.name">
          <button v-if="item.name !== bar.name" type="button" v-bartender-toggle="item.name">
            <span class="sr-only">Toggle</span> {{ item.name }}
          </button>
        </template>
      </div>
    </div>
    <div class="block">
      <h2>Actions from composable</h2>
      <button type="button" @click="bartender.close()">Close</button>
    </div>
  </BartenderBar>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import type { Bar } from './types.d'
import type { BartenderOptions, BartenderBarPosition } from '@fokke-/bartender.js'
import { nextTick, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
// import Bartender from './components/Bartender.vue'
// import BartenderContent from './components/BartenderContent.vue'
import BartenderBar from './components/BartenderBar.vue'
import BarConfig from './components/BarConfig.vue'
import { useBartender } from './composables/bartender'

const bartender = useBartender()
const router = useRouter()

const bars: Ref<Bar[]> = ref([])
const config: Ref<BartenderOptions> = ref({
  debug: true,
  switchTimeout: 150,
})
const newBarName = ref('')
const newBarOptionsDefaults = {
  position: 'left' as BartenderBarPosition,
  overlay: true,
  permanent: false,
  scrollTop: true,
}
const newBarOptions = ref({ ...newBarOptionsDefaults })

const createBar = (name: string, options = {}): Promise<void> => {
  return new Promise((resolve) => {
    if (!name) throw new Error('Bar name is required.')
    if (bars.value.some((item) => item.name == name))
      throw new Error(`Bar with name ${name} already exists.`)

    bars.value.push({
      name,
      options,
    })

    resolve()
  })
}

const barFormSubmit = async () => {
  try {
    await createBar(newBarName.value, { ...newBarOptions.value })
    await nextTick()

    const toggleButton = document.querySelector(`.button--${newBarName.value}`) as HTMLElement
    if (toggleButton) {
      toggleButton.focus()
    }

    newBarName.value = ''
    newBarOptions.value = { ...newBarOptionsDefaults }
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  createBar('First', {
    ...newBarOptionsDefaults,
  })
  createBar('Second', {
    ...newBarOptionsDefaults,
    position: 'right',
  })
})
</script>

<style lang="scss">
@import 'modern-normalize/modern-normalize.css';
@import '@fokke-/bartender.js/dist/bartender.scss';
@import './assets/utils';
@import './assets/base';
@import './assets/form';

body {
  line-height: 1.5;
}

.bartender {
  &__content,
  &__bar {
    padding: clamp(1rem, 5vw, 2rem);
  }
}

.block {
  margin: 3rem 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.columnContainer {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: -1.5rem;

  @media (min-width: 800px) {
    flex-direction: row;
  }
}

.column {
  padding: 1.5rem;

  @media (min-width: 800px) {
    flex: 0 0 50%;
  }
}
</style>
