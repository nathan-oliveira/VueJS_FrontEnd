import Vue from 'vue';
import App from './App.vue';
import router from '@/router'

// BootStrap 4
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// FontAwesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
