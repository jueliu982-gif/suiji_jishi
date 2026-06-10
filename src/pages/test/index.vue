<template>
  <div class="box">
    <time>111111</time>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let obj = ref({ a: 1 })
console.log(obj.value.a)
</script>

<style scoped lang="scss">
.box {
  width: 1000px;
  height: 400px;
}
</style>