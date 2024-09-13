import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import { createRouter } from 'vue-router/auto';

const app = createApp(App);
const router = createRouter(); // Create the router instance

app.use(router); // Tell Vue to use the router
app.mount('#app'); // Mount the Vue app
