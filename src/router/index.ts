import { createRouter, createWebHashHistory } from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'

export const routes = [
  { path: '/', component: HelloWorld },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
