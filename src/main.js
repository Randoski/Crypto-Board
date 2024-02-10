// main.js or where your Vue app is initialized
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css';
// import VueChartkick from 'vue-chartkick'
// import 'chartkick/chart.js'

const app = createApp(App);
app.use(router);
// app.use(VueChartkick);
app.mount('#app');
