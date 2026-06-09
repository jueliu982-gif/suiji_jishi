<template>
  <div>测试页面</div>
</template>

<script setup>
import { ref } from 'vue'
let obj = ref({ a: 1 })
console.log(obj.value.a)
</script>

<style>

</style>