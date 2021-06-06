<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    第二个入口 组件 inlayHello
    第二个入口 组件 inlayHello
  </div>
</template>

<script>
export default {
  name: 'HelloWorldFei',
  data () {
    return {
      msg: '欢迎来到第二个入口 HelloWorldFei'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
