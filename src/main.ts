import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { createRouter } from 'vue-router/auto'

const app = createApp(App).mount('#app')
const router = createRouter()

app.use(router)
app.mount('#app')

