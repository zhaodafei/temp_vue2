import {createRouter, createWebHistory,createWebHashHistory} from 'vue-router'
import foo from '@/views/foo1.vue'
import foo2 from '@/views/foo2.vue'

console.log("入口1");
// 路由
export default createRouter({
  history: createWebHistory(),  // history 模式
  // history: createWebHashHistory(), // hash 模式
  routes: [
    {
      path: '/',
      // name: '1',
      component: foo
    },
    {
      path: '/2',
      // name: '2',
      component: foo2
    },
  ]
});


