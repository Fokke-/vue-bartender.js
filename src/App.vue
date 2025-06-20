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
              v-bartender-open.keep="item.name"
            >
              {{ item.name }}
            </button>
          </div>

          <h2>Activator slot</h2>
          <div class="buttons">
            <BartenderBar name="withActivator" position="center">
              <template #activator="{ open }">
                <button type="button" @click="open()">
                  Open using activator slot
                </button>
              </template>
              <template #default>
                <p>Hello!</p>
              </template>
            </BartenderBar>
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
    @updated="
      (evt) =>
        console.warn(
          'updated',
          evt.detail.bar,
          evt.detail.property,
          evt.detail.value,
        )
    "
    @before-open="(evt) => console.warn('before-open', evt.detail.bar)"
    @after-open="(evt) => console.warn('after-open', evt.detail.bar)"
    @before-close="(evt) => console.warn('before-close', evt.detail.bar)"
    @after-close="(evt) => console.warn('after-close', evt.detail.bar)"
  >
    <template #default="{ close, open }">
      <div class="block">
        <h2>Bar '{{ bar.name }}'</h2>
        <BarConfig
          v-model:name="bar.name"
          v-model:options="bar.options"
          edit-mode
        />
        <button type="button" @click="close">Close this bar</button>
      </div>
      <div class="block">
        <h2>Open another bar?</h2>
        <div class="buttons">
          <template v-for="item of bars" :key="item.name">
            <button
              v-if="item.name !== bar.name"
              type="button"
              @click="open(item.name)"
            >
              {{ item.name }}
            </button>
          </template>
        </div>
      </div>
    </template>
  </BartenderBar>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import type { Bar } from './types.d'
import type { BartenderBarDefaultOptions } from '@fokke-/bartender.js'
import { nextTick, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import BartenderBar from './lib/components/BartenderBar.vue'
import BarConfig from './components/BarConfig.vue'

const router = useRouter()

const bars: Ref<Bar[]> = ref([])
const newBarName = ref('')
const newBarOptionsDefaults: BartenderBarDefaultOptions = {
  position: 'left',
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

    const toggleButton = document.querySelector(
      `.button--${newBarName.value}`,
    ) as HTMLElement
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
@use './assets/utils';
@use './assets/base';
@use './assets/form';
@import 'modern-normalize/modern-normalize.css';

body {
  line-height: 1.5;
}

.block {
  padding: 1.5rem;

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

  @media (min-width: 800px) {
    flex-direction: row;
  }
}

.column {
  /* padding: 1.5rem; */

  @media (min-width: 800px) {
    flex: 0 0 50%;
  }
}
</style>
