import { createApp } from 'vue'
import {
  createRouter,
  createWebHistory
} from 'vue-router'
import App from './App.vue'
import { createBartender } from './plugins/bartenderPlugin'
import Home from './views/Home.vue'
import RouteWithBar from './views/RouteWithBar.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/route-with-bar',
      name: 'RouteWithBar',
      component: RouteWithBar,
    },
  ],
})

const bartender = createBartender()

app
  .use(router)
  .use(bartender)
  .mount('#app')
