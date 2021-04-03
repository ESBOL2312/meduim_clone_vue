import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import Vuelidate from 'vuelidate'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/index.css'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
