import { createRouter, createWebHashHistory } from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import MarkdownTest from '../components/MarkdownTest.vue'

export const routes = [
  { path: '/', component: HelloWorld },
  { path: '/md', component: MarkdownTest },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
