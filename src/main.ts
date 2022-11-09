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

const app = createApp(App)

registerPlugins()

app
  .use(vuetify)
  .use(router)
  .mount('#app')
