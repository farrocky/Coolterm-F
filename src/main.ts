import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:5035/api'
axios.defaults.timeout = 5000

// ✅ Bootstrap ve BootstrapVueNext bileşenleri
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import { BButton, BAlert } from 'bootstrap-vue-next'


const app = createApp(App)

// ❌ app.use(...) GEREKMİYOR artık
// Bileşenleri tek tek global olarak kaydediyoruz
app.component('BButton', BButton)
app.component('BAlert', BAlert)

app.mount('#app')
