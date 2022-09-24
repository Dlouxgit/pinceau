import { createApp } from 'vue'
import { pinceauPlugin } from 'pinceau/runtime'
import App from './app.vue'
import Block from './components/Block.vue'
import NuxtLayout from './layouts/default.vue'
import '@unocss/reset/tailwind.css'
import 'pinceau.css'

const app = createApp(App)

app.use(pinceauPlugin)

app.component('Block', Block)
app.component('NuxtLayout', NuxtLayout)

app.mount('#app')
