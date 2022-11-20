/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import vuetify from './plugins/vuetify'

// Router
import router from './router/index'

// markdown-it
import markdown from 'vue3-markdown-it'

const app = createApp(App)

registerPlugins()

app
  .use(vuetify)
  .use(router)
  .use(markdown)
  .mount('#app')
