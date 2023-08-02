import './assets/main.css'
// import '@icon-park/vue-next/styles/index.css'

import './rms.js'

// import { install } from '@icon-park/vue-next/es/all'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// install(app) // use default prefix 'icon', eg: icon is People, name is icon-people.
// install(app, 'i') // use custom prefix 'i', eg: icon is People, name is i-people.

app.use(createPinia())
app.use(router)

app.mount('#app')
