import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import './assets/css/jquery.mCustomScrollbar.min.css'
import './assets/css/owl.carousel.min.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
