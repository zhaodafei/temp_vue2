import Vue from 'vue'
import Router from 'vue-router'
import HelloWorldFoo from '@/components/HelloWorldFoo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base:"/index-foo",
  routes: [
    {
      path: '/', // 历史模式访问地址 http://localhost:8080/index-foo/
      name: 'HelloWorldFoo',
      component: HelloWorldFoo
    }
  ]
})
