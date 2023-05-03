import { createApp } from 'vue'
import App from './App.vue'
import { createBartender } from './plugins/bartenderPlugin'

const app = createApp(App)
const bartender = createBartender()

app
  .use(bartender)
  .mount('#app')
