import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// swiper css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//css
import './assets/css/styles.css'

createApp(App).use(router).mount('#app')


