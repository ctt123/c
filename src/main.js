// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Resource from 'vue-resource'
import axios from 'axios'
import Mock from 'mockjs'
// import data from './data'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Resource)
Vue.use(Mock)
Vue.use(axios)

/* eslint-disable no-new */
new Vue({
  // 绑定的dom元素
  el: '#app',
  router,
  data: {},
  template: '<App/>',
  components: {App}
})
