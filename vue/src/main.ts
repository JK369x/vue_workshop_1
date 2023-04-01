import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { vuetify } from './plugin/vuetify'
createApp(App).use(vuetify).mount('#app')
