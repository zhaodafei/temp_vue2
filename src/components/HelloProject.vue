<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h3>这里是第二个入口</h3>
  <p>{{ msg }}</p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
