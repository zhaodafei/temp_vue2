import {createRouter, createWebHistory, createWebHashHistory, createMemoryHistory} from 'vue-router'
import foo from '@/views/foo2.vue'
import foo1 from '@/views/foo1.vue'

console.log("入口22222222,历史模式为啥有个/");
// 路由
export default createRouter({
  history: createWebHistory('/project.html/'),  // history 模式, 访问 http://localhost:3000/project.html 但是不能刷新
  // history: createWebHashHistory(), // hash 模式  http://localhost:3000/project.html#/
  // history: createMemoryHistory('/project.html'),  // history 模式, 访问 http://localhost:3000/project.html
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      component: foo
    },
    {
      path: '/1', // createMemoryHistory 模式下 这个不能访问??????????
      // name: '1',
      component: foo1
    },
  ]
});


