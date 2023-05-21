# Bartender.js for Vue.js

This package contains Vue 3 components for [Bartender.js](https://www.npmjs.com/package/@fokke-/bartender.js), providing an easy way to use the library in your Vue application.

## Requirements

- Vue >=3.2.0

## Installation

```console
npm i @fokke-/vue-bartender.js
```

## Quick start

### Enable plugin

Plugin provides directives for opening, toggling and closing bars.

```js
import { createBartender } from '@fokke-/vue-bartender.js'

const bartender = createBartender()

app.use(bartender)
```

### Markup

Note that it's highly recommended to define the following viewport meta tag to avoid quirks when using bars with `push` or `reveal` modes.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
```

#### Example markup

```html
<!-- e.g. App.vue -->
<template>
  <!-- Main wrap for bartender -->
  <Bartender>
    <!-- Wrap for page content -->
    <BartenderContent>
      <button v-bartender-open="'mobileNav'">Open mobile navigation</button>
    </BartenderContent>

    <!-- Add any number of bars -->
    <BartenderBar
      name="mobileNav"
      position="left"
      mode="float"
    >
      <button v-bartender-close>Close mobile navigation</button>
    </BartenderBar>

    <!-- Place your fixed positioned elements here -->
  </Bartender>
</template>

<script setup>

import {
  Bartender,
  BartenderContent,
  BartenderBar
} from '@fokke-/vue-bartender.js'

</script>

<style lang="scss">

@import '@fokke-/bartender.js/dist/bartender.scss';

</style>
```

## Components

Use component props to define options.

### \<Bartender\>

#### Props

##### is

Type: `string`, Default: `div`

HTML tag for main wrap.

##### debug

Type: `boolean`, Default: `false`

If enabled, Bartender will log it's activity to console. Note that these messages will be outputted at debug log level and you need to configure your console to show these messages.

##### switch-timeout

Type: `number` (milliseconds), Default: `150`

If bar is opened when there's already another active bar, the open bar will be closed and the library will pause for the given time before opening the another bar.

#### Emits

##### init

Bartender has been initialized.

##### destroyed

Bartender has been destroyed.

##### bar-added

Bar has been added.

##### bar-removed

Bar has been removed.

##### bar-updated

Bar property has been updated.

##### before-open

Bar has started to open.

##### after-open

Bar is open.

##### before-close

Bar has started to close.

##### after-close

Bar is closed.

### \<BartenderContent\>

#### Props

##### is

Type: `string`, Default: `div`

HTML tag for content wrap.

### \<BartenderBar\>

#### Props

##### is

Type: `string`, Default: `div`

HTML tag for bar.

##### name

Type: `string`

Unique name for the bar.

##### position

Type: `string`, Default: `left`

Bar position as string. Possible values are `'left'`, `'right'`, `'top'` and `'bottom'`.

##### mode

Type: `string`, Default: `'float'`

Bar mode as string. Possible values are:

- `float` - The bar will slide in and float over the content.
- `push` - The bar will slide in, and the content wrap will be pushed away from the bar.
- `reveal` - Content wrap will be pushed away, revealing the bar underneath

##### overlay

Type: `boolean`, Default: `true`

Show shading overlay over content wrap when bar is open. If disabled, overlay element will still be rendered, but it will be transparent.

##### permanent

Type: `boolean`, Default: `false`

If enabled, the bar is not closable by clicking overlay of pressing `esc` key.

**IMPORTANT:** If you enable this, remember to provide a way to close the bar.

##### scroll-top

Type: `boolean`, Default: `true`

If enabled, bar will be scrolled to top when opening it.

##### focus-trap

Type: `boolean`, Default: `false`

If enabled, keyboard focus will be trapped to the currently open bar.

**IMPORTANT:** If you enable this, you **must** provide a way to close the bar with keyboard. Even though by default `esc` key closes the bar, adding a dedicated close button to the bar is highly recommended.

## Directives

The plugin will install the following global directives.

### v-bartender-open

Open bar by name.

```html
<button v-bartender-open="'mobileNav'">Open mobile navigation</button>
```

### v-bartender-toggle

Toggle bar open/closed state.

```html
<button v-bartender-toggle="'mobileNav'">Toggle mobile navigation</button>
```

### v-bartender-close

Close bar by name. If name is undefined, any open bar will be closed.

```html
<!-- Close mobile navigation -->
<button v-bartender-close="'mobileNav'">Close mobile navigation</button>

<!-- Close any open bar -->
<button v-bartender-close>Close any open bar</button>
```

## Accessing Bartender instance

If you need to access main instance, you can use `useBartender` function to retrieve it.

```javascript
import { useBartender } from '@fokke-/vue-bartender.js'

const { bartender } = useBartender()
```
