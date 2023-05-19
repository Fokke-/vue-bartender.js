
<template>
  <Bartender :debug="true">
    <BartenderContent>
      <div class="buttonContainer">
        <div
          v-for="item of toggleButtons"
          :key="item.name"
          :class="[
            'buttonContainer__item',
            item.fadeIn === true ? 'buttonContainer__item--animate-in' : null,
            item.jello === true ? 'animation-jello' : null,
          ]"
        >
          <button
            type="button"
            class="button"
            v-bartender-toggle="item.barName"
          >
            Toggle {{ item.barName }}
          </button>
        </div>
      </div>
      <form @submit.prevent="barFormSubmit">
        <h2>Create a new bar</h2>
        <div>
          <label for="newBar-name">Name</label>
          <input
            v-model="newBarData.name"
            id="newBar-name"
            type="text"
            required
            pattern="[a-zA-Z]+"
          >
          <p>Letters only!</p>
        </div>
        <fieldset>
          <legend>Position</legend>
          <div
            v-for="item of positions"
            :key="item.value"
          >
            <input
              v-model="newBarData.position"
              type="radio"
              name="position"
              :value="item.value"
              :id="`newBar-position-${item.value}`"
            >
            <label :for="`newBar-position-${item.value}`">
              {{ item.label }}
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Mode</legend>
          <div
            v-for="item of modes"
            :key="item.value"
          >
            <input
              v-model="newBarData.mode"
              type="radio"
              name="mode"
              :value="item.value"
              :id="`newBar-mode-${item.value}`"
            >
            <label :for="`newBar-mode-${item.value}`">
              {{ item.label }}
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Settings</legend>
          <div
            v-for="item of barSettings"
            :key="item.value"
          >
            <input
              v-model="newBarData[item.value as keyof typeof newBarDataDefaults]"
              type="checkbox"
              name="settings"
              :id="`newBar-setting-${item.value}`"
            >
            <label :for="`newBar-setting-${item.value}`">
              {{ item.label }}
            </label>
          </div>
        </fieldset>
        <button type="submit">
          Create
        </button>
      </form>
    </BartenderContent>

    <BartenderBar
      v-for="bar of bars"
      :key="bar.name"
      :name="bar.name"
      :position="bar.position"
      :mode="bar.mode"
      :overlay="bar.overlay"
      :permanent="bar.permanent"
      :scroll-top="bar.scrollTop"
      :focus-trap="true"
    >
      <h2>Bar '{{ bar.name }}'</h2>
      <form @submit.prevent>
        <fieldset>
          <legend>Position</legend>
          <div
            v-for="item of positions"
            :key="item.value"
          >
            <input
              v-model="bar.position"
              type="radio"
              :name="`bar-${bar.name}-position`"
              :value="item.value"
              :id="`bar-${bar.name}-mode-${item.value}`"
            >
            <label :for="`bar-${bar.name}-mode-${item.value}`">
              {{ item.label }}
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Mode</legend>
          <div
            v-for="item of modes"
            :key="item.value"
          >
            <input
              v-model="bar.mode"
              type="radio"
              :name="`bar-${bar.name}-mode`"
              :value="item.value"
              :id="`bar-${bar.name}-mode-${item.value}`"
            >
            <label :for="`bar-${bar.name}-mode-${item.value}`">
              {{ item.label }}
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Settings</legend>
          <div
            v-for="item of barSettings"
            :key="item.value"
          >
            <input
              v-model="bar[item.value as keyof typeof newBarDataDefaults]"
              type="checkbox"
              :name="`bar-${bar.name}-settings`"
              :id="`bar-${bar.name}-${item.value}`"
            >
            <label :for="`bar-${bar.name}-${item.value}`">
              {{ item.label }}
            </label>
          </div>
        </fieldset>
      </form>
      <div>
        <template
          v-for="item of bars"
          :key="item.name"
        >
          <button
            v-if="item.name !== bar.name"
            type="button"
            v-bartender-toggle="item.name"
          >
            Toggle {{ item.name }}
          </button>
        </template>
      </div>
    </BartenderBar>
  </Bartender>
</template>

<script setup lang="ts">

import {
  nextTick, onMounted, ref
} from 'vue'
import type {
  BartenderBarMode,
  BartenderBarPosition
} from '@fokke-/bartender.js'
import Bartender from './components/Bartender.vue'
import BartenderContent from './components/BartenderContent.vue'
import BartenderBar from './components/BartenderBar.vue'

const positions = [
  {
    label: 'Left',
    value: 'left',
  },
  {
    label: 'Right',
    value: 'right',
  },
  {
    label: 'Top',
    value: 'top',
  },
  {
    label: 'Bottom',
    value: 'bottom',
  },
]

const modes = [
  {
    label: 'Float',
    value: 'float',
  },
  {
    label: 'Push',
    value: 'push',
  },
  {
    label: 'Reveal',
    value: 'reveal',
  },
]

const barSettings = [
  {
    label: 'Overlay',
    value: 'overlay',
  },
  {
    label: 'Permanent',
    value: 'permanent',
  },
  {
    label: 'Scroll to top after opening',
    value: 'scrollTop',
  },
]

const bars = ref([])
const toggleButtons = ref([])
const newBarDataDefaults = {
  name: '',
  position: 'left' as BartenderBarPosition,
  mode: 'float' as BartenderBarMode,
  overlay: true,
  permanent: false,
  scrollTop: true,
}
const newBarData = ref({ ...newBarDataDefaults })

const createBar = (options = {}, animate = false): Promise<void> => {
  return new Promise((resolve) => {
    if (bars.value.some(item => item.name == options.name)) throw new Error(`Bar with name ${options.name} already exists.`)
    bars.value.push(options)

    const button = {
      barName: options.name,
      fadeIn: animate,
      jello: false,
    }

    toggleButtons.value.push(button)

    if (animate === true) return resolve()

    window.requestAnimationFrame(() => {
      button.fadeIn = true
      button.jello = true

      return resolve()

    })
  })
}

const barFormSubmit = async () => {
  try {
    await createBar(newBarData.value)
    newBarData.value = { ...newBarDataDefaults }

  } catch (error) {
    console.error(error)
  }
}

onMounted(async () => {
  await createBar({
    ...newBarDataDefaults,
    name: 'First',
    mode: 'push',
  }, true)
  await createBar({
    ...newBarDataDefaults,
    name: 'Second',
    position: 'right',
  }, true)
})

// const testEvent = (event: CustomEvent) => {
//   console.log(event.type, event.detail)
// }

</script>

<style lang="scss">

@import 'modern-normalize/modern-normalize.css';
@import '@fokke-/bartender.js/dist/bartender.scss';

$spacing-half: .5rem;
$spacing-single: 1rem;

@keyframes jello {
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}

.animation-jello {
  animation-name: jello;
  animation-duration: 1000ms;
  transform-origin: center;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: sans-serif;
  background: #3d0036;
}

h1 {
  margin: 0;
}

.bartender {
  &__content {
    padding: 20vw;
    color: #fff;
    background: #3d0036;
  }
}

.buttonContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  &__item {
    opacity: 0;
    padding: $spacing-half;
    transition: opacity 300ms ease;

    &--animate-in {
      opacity: 1;
    }
  }
}

@keyframes huerotate {
    0% {
        filter: hue-rotate(0deg);
    }
    100% {
        filter: hue-rorate(360deg);
    }
}

.button {
  position: relative;
  margin: 0;
  padding: .5em 1em;
  outline: 0;
  font-size: inherit;
  background: transparent;
  color: inherit;
  appearance: none;

  border: solid 2px;

  &:before {
    position: absolute;
    left: -2px;
    right: -2px;
    top: -2px;
    bottom: -2px;
    content: '';
    background: transparent;
    border: solid 2px;
    border-image: linear-gradient(45deg, gold, red) 1;
    clip-path: inset(0px);
  }

  &:hover,
  &:focus {
    animation: huerotate 1s infinite linear;
    filter: hue-rotate(360deg);
  }

  // &:after {
  //   z-index: -1;
  //   position: absolute;
  //   left: -2px;
  //   right: -2px;
  //   top: -2px;
  //   bottom: -2px;
  //   content: '';
  //   border: solid 2px red;
  //   border-radius: 10em;
  //   background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
  // }
}

</style>
