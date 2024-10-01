import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import FontAwesomeIcon from './fontawesome' // Import the FontAwesomeIcon from the configuration file

const app = createApp(App)
// Register the FontAwesomeIcon as a global component
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
