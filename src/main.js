import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './permission'
import store from './store'
import ElementUI from 'element-ui'
import Component from './components'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Component)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
