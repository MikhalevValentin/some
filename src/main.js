// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './components/Home'
import About from './components/About'
import Articles from './components/Articles'

const routes = [
	{ path: '/', component: Home },
	{ path: '/about', component: About },
	{ path: '/articles', component: Articles }
]

const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
