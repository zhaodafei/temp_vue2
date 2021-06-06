import Vue from 'vue'
import Router from 'vue-router'
import HelloWorldFei from '@/components/HelloWorldFei'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorldFei',
      component: HelloWorldFei
    }
  ]
})
