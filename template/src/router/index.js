import Vue from 'vue'
import Router from 'vue-router'
const index = () => resolve => require(['@/pages/index'], resolve)

Vue.use(Router)

export default new Router({
  mode: process.env.NODE_ENV === 'production' ? 'history' : '',
  base: process.env.NODE_ENV === 'production' ? '/activity/{{ name }}' : '',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
