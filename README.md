# Bartender.js plugin for Vue 3

This package contains Vue 3 plugin and components for [Bartender.js](https://www.npmjs.com/package/@fokke-/bartender.js), providing an easy way to use the library in your Vue application.

## Requirements

- Vue >=3.5.0

## Installation

```console
npm i @fokke-/vue-bartender.js
```

## Quick start

### Enable plugin

Pass [main options](https://github.com/Fokke-/bartender.js/tree/master?tab=readme-ov-file#interface-bartenderoptions) and [default options for new bars](https://github.com/Fokke-/bartender.js/tree/master?tab=readme-ov-file#interface-bartenderbardefaultoptions)
as arguments to the `createBartender()` function.

```js
import { createBartender } from '@fokke-/vue-bartender.js'

const bartender = createBartender(
  {
    // Main options
  },
  {
    // Default options for new bars
  },
)

app.use(bartender)
```

### Markup

```html
<template>
  <button v-bartender-open="'mobileNav'">Open mobile navigation</button>

  <!-- Add any number of bars -->
  <BartenderBar name="mobileNav" position="left">
    <button v-bartender-close>Close mobile navigation</button>
  </BartenderBar>
</template>

<script setup>
  import { BartenderBar } from '@fokke-/vue-bartender.js'
</script>

<style lang="css">

  @import '@fokke-/bartender.js/dist/bartender.css';

  // ...or if you want to use scss
  // @import '@fokke-/bartender.js/dist/bartender.scss';
</style>
```

## Components

### \<BartenderBar\>

#### Props

All [bar options](https://github.com/Fokke-/bartender.js/tree/master?tab=readme-ov-file#interface-bartenderbardefaultoptions) can be defined as props.

```html
<BartenderBar
  name="mobileNav"
  position="left"
  :overlay="true"
  :permanent="false"
  :scrollTop="true"
>
  <p>Hello world!</p>
</BartenderBar>
```

#### Emits

All bar events are emitted.

| Event        | Value              |
| ------------ | ------------------ |
| updated      | event: CustomEvent |
| before-open  | event: CustomEvent |
| after-open   | event: CustomEvent |
| before-close | event: CustomEvent |
| after-close  | event: CustomEvent |

```html
<BartenderBar
  name="mobileNav"
  @updated="(event) => console.log(event)"
  @before-open="(event) => console.log(event)"
  @after-open="(event) => console.log(event)"
  @before-close="(event) => console.log(event)"
  @after-close="(event) => console.log(event)"
>
  <p>Hello world!</p>
</BartenderBar>
```

## Directives

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

Close bar by name. If name is undefined, the topmost bar will be closed.

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

const bartender = useBartender()
```
