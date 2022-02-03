import { createApp } from 'vue'
import App from './App.vue'
import vfmPlugin from 'vue-final-modal'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'animate.css';
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';

const app = createApp(App)
app.use(vfmPlugin)
app.mount('#app')
