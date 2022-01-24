# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)


### 飞
Vue3 demo:
```shell
npm init vite@latest

# npm 6.x
npm init vite@latest my-vue3-app --template vue

npm install
npm run dev

```

### 多入口
hash 模式 ok
```wiki
#访问地址
http://localhost:3000/#/
http://localhost:3000/project.html#/

```
历史模式 模式 ????

```wiki
http://localhost:3000/    这个ok

第二个入口暂时有问题
访问 http://localhost:3000/project.html 后面会自动多个 /
变为 http://localhost:3000/project.html/ 刷新后页面访问错误
```
